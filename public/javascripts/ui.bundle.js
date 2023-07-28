/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/ui.js":
/*!**********************************!*\
  !*** ./public/javascripts/ui.js ***!
  \**********************************/
/***/ (() => {

eval("const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle=\"tooltip\"]')\nconst tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))\n\n$(document).ready(function () {\n    $('.toggleSwitch').on(\"click\", function () {\n        $(this).find(\"i\").toggleClass(\"bi-toggle-on bi bi-toggle-off\");\n    });\n\n    $('.btn_close').on(\"click\", function () {\n        $(this).closest('.card').hide( \"slow\" );\n    });\n\n    $('.helpfulLink').on( \"click\", function (){\n        $(this).find(\"i\").toggleClass(\"bi-hand-thumbs-up bi-hand-thumbs-up-fill\")\n        $(this).toggleClass(\"link-secondary link-success\")\n        if($(this).closest('.list-inline').find(\".unhelpfulLink\").find(\"i\").hasClass(\"bi-hand-thumbs-down-fill\")){\n            $(this).closest('.list-inline').find(\".unhelpfulLink\").find(\"i\").toggleClass(\"bi-hand-thumbs-down bi-hand-thumbs-down-fill\")\n        }\n    });\n\n    $('.unhelpfulLink').on( \"click\", function (){\n        $(this).find(\"i\").toggleClass(\"bi-hand-thumbs-down bi-hand-thumbs-down-fill\")\n        if($(this).closest('.list-inline').find(\".helpfulLink\").find(\"i\").hasClass(\"bi-hand-thumbs-up-fill\")){\n            $(this).closest('.list-inline').find(\".helpfulLink\").find(\"i\").toggleClass(\"bi-hand-thumbs-up bi-hand-thumbs-up-fill\")\n            $(this).closest('.list-inline').find(\".helpfulLink\").toggleClass(\"link-success link-secondary\")\n        }\n    });\n\n    $('.replyLink').on( \"click\", function (){\n        $(this).find(\"i\").toggleClass(\"bi-reply bi-reply-fill\")\n        $(this).toggleClass(\"link-secondary link-primary\")\n    });\n\n    $('.shareLink').on( \"click\", function (){\n        $(this).find(\"i\").toggleClass(\"bi-share bi-share-fill\")\n        $(this).toggleClass(\"link-secondary link-info\")\n    });\n\n    $('.reportLink').on( \"click\", function (){\n        $(this).find(\"i\").toggleClass(\"bi-flag bi-flag-fill\")\n        $(this).toggleClass(\"link-secondary link-danger\")\n    });\n\n    $('.truncate-overflow').on( \"click\", function(){\n        $(this).toggleClass('truncate-overflow')\n    })\n\n    $(\"#clarityValue\").text($('#clarity').val());\n\n    $('#clarity').on( \"change\", function(){\n        $('#clarityValue').text($('#clarity').val());\n    })\n\n    $(\"#soundnessValue\").text($('#soundness').val());\n    $('#soundness').on( \"change\", function(){\n        $('#soundnessValue').text($('#soundness').val());\n    })\n\n});\n\n\n\n//# sourceURL=webpack://theopenjournals/./public/javascripts/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/javascripts/ui.js"]();
/******/ 	
/******/ })()
;