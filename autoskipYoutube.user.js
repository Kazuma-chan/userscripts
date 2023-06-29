// ==UserScript==
// @name         Youtube AutoSkipAd
// @namespace    https://github.com/kazmath/
// @version      1.0
// @description  Skip Youtube video ads and pop-ups automatically as soon as it notices one active.
// @author       KazMath
// @match        *://*.youtube.com/*
// @exclude      *://*.youtube.com/embed/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @run-at       document-idle
// @grant        none
// @updateURL    we'll see
// @downloadURL  we'll see
// @noframes
// ==/UserScript==

'use strict';
const w = window;
if (w.autoskipIntervalID) {
    return;
} else {
    w.autoskipIntervalID = setInterval(main,100);

    function main() {
        if (document.querySelector('.ytp-ad-player-overlay')) {
            document.querySelector('video').currentTime = document.querySelector('video').duration;
        }
        if (document.querySelector("button.ytp-ad-skip-button")) {
            document.querySelector("button.ytp-ad-skip-button").click();
        }
        if (document.querySelector(".ytp-ad-overlay-close-container")) {
            document.querySelector(".ytp-ad-overlay-close-container").click();
        }
        if (document.querySelector(".ytp-ad-message-container")) {
            document.querySelector(".ytp-ad-message-container").remove();
        }
        return;
    }
}
