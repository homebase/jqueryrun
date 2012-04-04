# What is jquery-run?

Significantly speed up your pages! Load JS on-demand.

Lazy load your javascripts. (the first time it requred).

Once loaded scripts are cached. No loads for subsequent calls.

## Usage
    // load script once, then call callback function
    $.run("/js/script.js", function() { ... } );

    // load script, then call func(param1, .. paramX)
    $.run("/js/script.js", "func", param1, ..., paramX)

    // shortcut for $.run("/js/script.js", ...)
    $.run(":script", ...)

## Examples
    <a href=# onclick='$.run("/js/test.js", "test", 1, "parf")'>$.run("url", "func", ..)</a>
    <a href=# onclick='$.run(":test", "NS.test", "parf")'>$.run(":script", "Namespace.Function", ..)</a>
    <a href=# onclick='$.run(":test", function() {test(1,2,3)} )'>$.run(":script", function() {...})</a>

    <!-- AHM ( http://jqueryahm.com/ ) lets you call client javascript functions from server -->
    <a href="/a.jquery-run-test" class="ahm">AHM</a><span id="test"></span>
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
    $.run("file.html", ..) // load & execute scripts inside htmls
    $.run("file.css", ..) // load styles, ...
    $.run(["script", "file.html", "file.css"], ..) // load several files, then execute something

## Licence
MIT License @ http://www.jqueryahm.com/license

## See Also
JqueryAHM - http://jqueryahm.com/ - jquery-run big brother - simplify your htmls/javascripts even more

## Requirements
jQuery 1.5+
