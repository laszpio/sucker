require File.expand_path("../bm_helper", __FILE__)
require "throttler"

include Throttler

timestamps = {
  :us => [],
  :uk => [],
  :de => [],
  :ca => [],
  :fr => [],
  :jp => []
}

print "Enter batch size: "
batch_size = STDIN.gets.to_i
printed_at = Time.now

asins_fixture.each_slice(batch_size) do |asins|
  threads = timestamps.keys.map do |locale|
    Thread.new do
      worker = Sucker.new(
        :locale => locale,
        :key    => amazon["key"],
        :secret => amazon["secret"])
      worker << {
        "Operation"                       => "ItemLookup",
        "ItemLookup.Shared.IdType"        => "ASIN",
        "ItemLookup.Shared.Condition"     => "All",
        "ItemLookup.Shared.MerchantId"    => "All",
        "ItemLookup.Shared.ResponseGroup" => "OfferFull"
      }
      worker << { "ItemLookup.1.ItemId" => asins[0, 10] }
      if batch_size > 10
        worker << { "ItemLookup.2.ItemId" => asins[10, 10] }
      end

      throttle("bm#{locale}", 1.0) do
        resp = worker.get
        Thread.current[:locale] = locale
        if resp.valid?
          Thread.current[:timestamp] = Time.now
        else
          p resp.body
        end
      end
    end
  end

  threads.map do |thread|

    # I expect the thread to complete in two seconds
    next unless thread.join(2.0)

    timestamp = thread[:timestamp]
    if timestamp
      timestamps[thread[:locale]].push(timestamp)
    end
  end

  # Print rates every 10 seconds
  if Time.now - printed_at > 10.0
    puts Time.now.strftime("%H:%M:%S").center(38, '-')
    printed_at = Time.now
    timestamps.each do |locale, values|
      average = (values.
        select { |ts| printed_at - ts < 60.0 }.size / 60.0).
        round(3)
      puts [locale, values.size, average].
        map { |w| w.to_s.center(10) }.join(' | ')
    end
  end
end
