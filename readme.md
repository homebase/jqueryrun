# What is jquery-do?

Significantly speed up your pages! Load JS on-demand.

Lazy load your javascripts. (the first time it requred).

Once loaded scripts are cached. No loads on subsequent calls.

## Usage
    // load script once, then call callback function
    $.do("/js/script.js", function() { ... } );

    // load script, then call func(param1, .. paramX)
    $.do("/js/script.js", "func", param1, ..., paramX)

    // shortcut for $.do("/js/script.js", ...)
    $.do(":script", ...)

## Examples
    <a href=# onclick='$.do("/js/test.js", "test", 1, "parf")'>$.do("url", "func", ..)</a>
    <a href=# onclick='$.do(":test", "NS.test", "parf")'>$.do(":script", "Namespace.Function", ..)</a>
    <a href=# onclick='$.do(":test", function() {test(1,2,3)} )'>$.do(":script", function)</a>

    <!-- AHM ( http://jqueryahm.com/ ) lets you call client javascript functions from server -->
    <a href="/dvp/parf/a.jquery-do-test" class="ahm">AHM</a><span id="test"></span>
    Server response:
    {"#test":"ahm call complete","\/$.do":[":test","test",1,2,3,"parf"]}

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
    $.do("file.html", ..) // load & execute scripts inside htmls
    $.do("file.css", ..) // load styles, ...
    $.do(["script", "file.html", "file.css"], ..) // load several files, then execute something

## Licence
MIT License @ http://www.jqueryahm.com/license

## See Also
JqueryAHM - http://jqueryahm.com/ - jquery-do big brother - simplify your htmls/javascripts even more

## Requirements
jQuery 1.5+
