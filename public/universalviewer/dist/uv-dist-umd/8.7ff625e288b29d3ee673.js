(window["webpackJsonpUV"] = window["webpackJsonpUV"] || []).push([[8],{

/***/ "./node_modules/@universalviewer/aleph/dist/esm-es5/focus-visible-30ddc1ea.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@universalviewer/aleph/dist/esm-es5/focus-visible-30ddc1ea.js ***!
  \************************************************************************************/
/*! exports provided: startFocusVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startFocusVisible", function() { return startFocusVisible; });
var ION_FOCUSED = 'ion-focused';
var ION_FOCUSABLE = 'ion-focusable';
var FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];
var startFocusVisible = function () {
    var currentFocus = [];
    var keyboardMode = true;
    var doc = document;
    var setFocus = function (elements) {
        currentFocus.forEach(function (el) { return el.classList.remove(ION_FOCUSED); });
        elements.forEach(function (el) { return el.classList.add(ION_FOCUSED); });
        currentFocus = elements;
    };
    var pointerDown = function () {
        keyboardMode = false;
        setFocus([]);
    };
    doc.addEventListener('keydown', function (ev) {
        keyboardMode = FOCUS_KEYS.includes(ev.key);
        if (!keyboardMode) {
            setFocus([]);
        }
    });
    doc.addEventListener('focusin', function (ev) {
        if (keyboardMode && ev.composedPath) {
            var toFocus = ev.composedPath().filter(function (el) {
                if (el.classList) {
                    return el.classList.contains(ION_FOCUSABLE);
                }
                return false;
            });
            setFocus(toFocus);
        }
    });
    doc.addEventListener('focusout', function () {
        if (doc.activeElement === doc.body) {
            setFocus([]);
        }
    });
    doc.addEventListener('touchstart', pointerDown);
    doc.addEventListener('mousedown', pointerDown);
};



/***/ })

}]);
//# sourceMappingURL=8.7ff625e288b29d3ee673.js.map