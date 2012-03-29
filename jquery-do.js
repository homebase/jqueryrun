/**
 * jquery-do: load javascript on demand
 * 
 * @author    Sergey <parf@comfi.com>
 * @copyright 2011 Comfi.com, Sergey Porfiriev
 * @license   MIT License: http://www.jqueryahm.com/license
 * @version   1.0.0
 * @requires  jQuery 1.5+
 */
$.extend({
    'do_loaded': [],
    'do': function(/* url, callback, params, .. */) {
        var args = [].slice.apply(arguments); // convert arguments to Array
        var url = args.shift();
        var callback = args.shift();

        if (url[0] === ':')
            url = "/js/" + url.substring(1) + ".js";

        if (typeof callback !== 'function') {
            var cb = callback;
            callback = function() {
                eval(cb).apply(window, args);
            };
        }

        if ($.do_loaded.indexOf(url) > -1) {
            callback();
            return;
        }

        $.do_loaded.push(url);
        $.getScript(url).done(callback);
    }
});