/* */ 
define(["exports"], function (exports) {
    "use strict";

    var WebKitDetect = {};

    WebKitDetect.isWebKit = function isWebKit() {
        return RegExp(" AppleWebKit/").test(navigator.userAgent);
    };

    WebKitDetect.version = function version() {
        var webKitFields = RegExp("( AppleWebKit/)([^ ]+)").exec(navigator.userAgent);
        if (!webKitFields || webKitFields.length < 3) return null;
        var versionString = webKitFields[2];

        var isNightlyBuild = versionString.indexOf("+") != -1;

        var invalidCharacter = RegExp("[^\\.0-9]").exec(versionString);
        if (invalidCharacter) versionString = versionString.slice(0, invalidCharacter.index);

        var version = versionString.split(".");
        version.isNightlyBuild = isNightlyBuild;
        return version;
    };

    WebKitDetect.versionIsAtLeast = function versionIsAtLeast(minimumString) {
        function toIntOrZero(s) {
            var toInt = parseInt(s);
            return isNaN(toInt) ? 0 : toInt;
        }

        if (minimumString === undefined) minimumString = "";

        var minimum = minimumString.split(".");
        var version = WebKitDetect.version();

        if (!version) return false;

        if (version.isNightlyBuild) return true;

        for (var i = 0; i < minimum.length; i++) {
            var versionField = toIntOrZero(version[i]);
            var minimumField = toIntOrZero(minimum[i]);

            if (versionField > minimumField) return true;
            if (versionField < minimumField) return false;
        }

        return true;
    };

    WebKitDetect.isMobile = function isMobile() {
        return WebKitDetect.isWebKit() && RegExp(" Mobile/").test(navigator.userAgent);
    };

    WebKitDetect.mobileDevice = function mobileDevice() {
        if (!WebKitDetect.isMobile()) return null;

        var fields = RegExp("(Mozilla/5.0 \\()([^;]+)").exec(navigator.userAgent);
        if (!fields || fields.length < 3) return null;
        return fields[2];
    };

    WebKitDetect._mobileVersion = function _mobileVersion(versionString) {
        var fields = RegExp("([0-9]+)([A-Z]+)([0-9]+)").exec(versionString);
        if (!fields || fields.length != 4) return null;
        return [fields[1], fields[2], fields[3]];
    };

    WebKitDetect.mobileVersion = function mobileVersion() {
        var fields = RegExp("( Mobile/)([^ ]+)").exec(navigator.userAgent);
        if (!fields || fields.length < 3) return null;
        var versionString = fields[2];

        return WebKitDetect._mobileVersion(versionString);
    };

    WebKitDetect.mobileVersionIsAtLeast = function mobileVersionIsAtLeast(minimumString) {
        function toIntOrZero(s) {
            var toInt = parseInt(s);
            return isNaN(toInt) ? 0 : toInt;
        }

        if (minimumString === undefined) minimumString = "";

        var minimum = WebKitDetect._mobileVersion(minimumString);
        var version = WebKitDetect.mobileVersion();

        if (!version) return false;

        var majorVersInt = toIntOrZero(version[0]);
        var majorMinInt = toIntOrZero(minimum[0]);
        if (majorVersInt > majorMinInt) return true;
        if (majorVersInt < majorMinInt) return false;

        var majorVersAlpha = version[1];
        var majorMinAlpha = minimum[1];
        if (majorVersAlpha > majorMinAlpha) return true;
        if (majorVersAlpha < majorMinAlpha) return false;

        var minorVersInt = toIntOrZero(version[2]);
        var minorMinInt = toIntOrZero(minimum[2]);
        if (minorVersInt > minorMinInt) return true;
        if (minorVersInt < minorMinInt) return false;

        return true;
    };
});