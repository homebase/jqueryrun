# What is jquery-do?
Lazy load all your javascripts! jQuery-do is a powerful add-on to $.ajax that
allows you to load javascript on-demand (the first time it is used).

## Features
* lazy load javascript on-demand (the first time it is used)
* cache previously loaded javascript (load only once)

## Usage
    // pass a callback function
    $.do("/js/script.js", function() { ... } );
    
    // pass a function name to call
    $.do("/js/script.js", "func", param1, ..., paramX)
    
    // shortcut for $.do("/js/script.js", ...)
    $.do(":script", ...)

## Examples
    <a href=# onclick='$.do("/js/test.js", "test", 1, "parf")'>$.do("url", "func", ..)</a>
    <a href=# onclick='$.do(":test", "NS.test", "parf")'>$.do(":script", "Namespace.Function", ..)</a>
    <a href=# onclick='$.do(":test", function() {test(1,2,3)} )'>$.do(":script", function)</a>
   
    <!-- ahmi (http://jqueryahm.com) is a big brother to jquery-do, it allows to call client javascript functions from server -->
    {"#test":"done","\/$.do":[":test","test",1,2,3,"parf"]}
    <a href="/dvp/parf/a.jquery-do-test" class="ahm">AHM</a> <span id="test"></span><br> 
    
    /js/test.js
    function test() {
       console.log("test.js test(...)", arguments);
    } 
    
    // namespace
    var NS = { 
        test: function () {
            console.log("NS.test", arguments);
        }
    }

## Future Development
    $.do("file.html", ..) // load htmls, ...
    $.do("file.css", ..) // load styles, ...
    $.do(["script", "file.html", "file.css"], ..) // load several files, then execute something

## Licence
MIT License @ http://www.jqueryahm.com/license

## Requirements
jQuery 1.5+
