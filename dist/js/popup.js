webpackJsonp([2],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const moment = __webpack_require__(2);
const $ = __webpack_require__(0);
let count = 0;
$(function () {
    const queryInfo = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(queryInfo, function (tabs) {
        $('#url').text(tabs[0].url);
        $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'));
    });
    chrome.browserAction.setBadgeText({ text: '' + count });
    $('#countUp').click(() => {
        chrome.browserAction.setBadgeText({ text: '' + count++ });
    });
    $('#changeBackground').click(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                color: '#555555'
            }, function (msg) {
                console.log("result message:", msg);
            });
        });
    });
});


/***/ })

},[4]);