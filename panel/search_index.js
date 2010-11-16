var search_data = {"index":{"searchIndex":["curloptions","request","response","responseerror","<<()","associate_tag()","associate_tag=()","associate_tags=()","curl_opts()","each()","find()","get()","get_all()","key()","key=()","keys=()","map()","new()","new()","to_hash()","valid?()","version=()","xml()","license","readme.md","sucker.rb","request.rb","response.rb","version.rb","version.rbc"],"longSearchIndex":["sucker","sucker","sucker","sucker","sucker::request","sucker::request","sucker::request","sucker::request","sucker::request","sucker::response","sucker::response","sucker::request","sucker::request","sucker::request","sucker::request","sucker::request","sucker::response","sucker::request","sucker::response","sucker::response","sucker::response","sucker::request","sucker::response","files/license.html","files/readme_md.html","files/lib/sucker_rb.html","files/lib/sucker/request_rb.html","files/lib/sucker/response_rb.html","files/lib/sucker/version_rb.html","files/lib/sucker/version_rbc.html"],"info":[["CurlOptions","Sucker","classes/Sucker/CurlOptions.html"," < OpenStruct","Curl options ",1],["Request","Sucker","classes/Sucker/Request.html"," < Object","A wrapper around the API request ",1],["Response","Sucker","classes/Sucker/Response.html"," < Object","A Nokogiri-driven wrapper around the cURL response ",1],["ResponseError","Sucker","classes/Sucker/ResponseError.html"," < StandardError","",1],["<<","Sucker::Request","classes/Sucker/Request.html#M000003","(hash)","Merges a hash into existing parameters worker = Sucker.new worker << { \"Operation\"     => \"ItemLookup\",",2],["associate_tag","Sucker::Request","classes/Sucker/Request.html#M000004","()","Returns the associate tag for the current locale ",2],["associate_tag=","Sucker::Request","classes/Sucker/Request.html#M000009","(token)","Sets the associate tag for the current locale worker = Sucker.new worker.associate_tag = 'foo-bar' ",2],["associate_tags=","Sucker::Request","classes/Sucker/Request.html#M000010","(tokens)","Sets associate tags for all locales tags = { :us => 'foo-bar-10', :uk => 'foo-bar-20', :de => 'foo-bar-30',",2],["curl_opts","Sucker::Request","classes/Sucker/Request.html#M000011","()","Returns options for curl and yields them if given a block worker = Sucker.new worker.curl { |c| c.interface",2],["each","Sucker::Response","classes/Sucker/Response.html#M000002","(path)","A shorthand that yields each match to a block worker.get.each(\"Item\") { |item| process(item) } ",2],["find","Sucker::Response","classes/Sucker/Response.html#M000005","(path)","Queries an xpath and returns an array of matching nodes response = worker.get response.find(\"Item\").each",2],["get","Sucker::Request","classes/Sucker/Request.html#M000012","()","Performs a request and returns a response worker = Sucker.new response = worker.get ",2],["get_all","Sucker::Request","classes/Sucker/Request.html#M000016","()","",2],["key","Sucker::Request","classes/Sucker/Request.html#M000017","()","",2],["key=","Sucker::Request","classes/Sucker/Request.html#M000018","(token)","Sets a global AWS access key ID worker = Sucker.new worker.key = 'foo' ",2],["keys=","Sucker::Request","classes/Sucker/Request.html#M000019","(tokens)","Sets distinct AWS access keys for the locales keys = { :us => 'foo', :uk => 'bar', :de => 'baz', ...",2],["map","Sucker::Response","classes/Sucker/Response.html#M000006","(path)","A shorthand that yields matches to a block and collects returned values descriptions = worker.get.map(\"Item\")",2],["new","Sucker::Request","classes/Sucker/Request.html#M000000","(args)","Initializes a request object worker = Sucker.new( :locale => \"us\", :key    => \"API KEY\", :secret => \"API",2],["new","Sucker::Response","classes/Sucker/Response.html#M000001","(curl)","",2],["to_hash","Sucker::Response","classes/Sucker/Response.html#M000008","()","Parses the response into a simple hash response = worker.get response.to_hash ",2],["valid?","Sucker::Response","classes/Sucker/Response.html#M000013","()","Checks if the HTTP response is OK response = worker.get p response.valid? => true ",2],["version=","Sucker::Request","classes/Sucker/Request.html#M000020","(version)","Sets the Amazon API version worker = Sucker.new worker.version = '2010-06-01' ",2],["xml","Sucker::Response","classes/Sucker/Response.html#M000014","()","The XML document response = worker.get response.xml ",2],["LICENSE","files/LICENSE.html","files/LICENSE.html","","(The MIT License)   Copyright (c) 2010 Paper Cavalier   Permission is hereby granted, free of charge,",3],["README.md","files/README_md.html","files/README_md.html","","Sucker ======  Sucker is a minimal Ruby wrapper to the [Amazon Product Advertising API](https://affiliate-program.amazon.co.uk/gp/advertising/api/detail/main.html).",3],["sucker.rb","files/lib/sucker_rb.html","files/lib/sucker_rb.html","","",3],["request.rb","files/lib/sucker/request_rb.html","files/lib/sucker/request_rb.html","","",3],["response.rb","files/lib/sucker/response_rb.html","files/lib/sucker/response_rb.html","","",3],["version.rb","files/lib/sucker/version_rb.html","files/lib/sucker/version_rb.html","","",3],["version.rbc","files/lib/sucker/version_rbc.html","files/lib/sucker/version_rbc.html","","!RBIX 0 x M 1 n n x 10 __script__ i 28 99 7 0 65 49 1 2 13 99 12 7 2 12 7 3 12 65 12 49 4 4 15 49 2 0",3]]}}