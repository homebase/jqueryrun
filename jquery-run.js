/**
 * jquery-do: load javascript on demand
 * 
 * @author    Sergey <parf@comfi.com>
 * @copyright 2011 Comfi.com, Sergey Porfiriev
 * @license   MIT License: http://www.jqueryahm.com/license
 * @version   1.1.0
 * @requires  jQuery 1.5+
 */
$.extend({
    'run_loaded': [],
    'run': function(/* url, callback, params, .. */) {
        var args = [].slice.apply(arguments); // convert arguments to Array
        var url = args.shift();
        var callback = args.shift();

        if (url[0] === ':')
            url = "/js/" + url.substring(1) + ".js";

        if (typeof callback !== 'function') {
            var namespace = window;
            var cb = callback;
            callback = function() {
                var i = cb.indexOf(".");
                if (i != -1) {
                    namespace = window[cb.substr(0, i)];
                    cb = cb.substr(i+1);
                }
                if (typeof namespace[cb]['apply'] === 'function')
                    namespace[cb]['apply'](namespace, args);
                else
                    namespace[cb](args[0]); // no support for apply() (multiple params)
            };
        }

        if ($.inArray(url, $.run_loaded) != -1) {
            callback();
            return;
        }

        $.run_loaded.push(url);
        $.getScript(url).done(callback);
    }
});