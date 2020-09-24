(window["webpackJsonpUV"] = window["webpackJsonpUV"] || []).push([["vendors~uv-aleph-extension~uv-default-extension~uv-ebook-extension~uv-mediaelement-extension~uv-mode~d6e026a8"],{

/***/ "./node_modules/@edsilv/key-codes/dist-esmodule/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@edsilv/key-codes/dist-esmodule/index.js ***!
  \***************************************************************/
/*! exports provided: KeyDown, KeyPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyDown", function() { return KeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyPress", function() { return KeyPress; });
var KeyDown;
(function (KeyDown) {
    KeyDown[KeyDown["Backspace"] = 8] = "Backspace";
    KeyDown[KeyDown["Tab"] = 9] = "Tab";
    KeyDown[KeyDown["Enter"] = 13] = "Enter";
    KeyDown[KeyDown["Shift"] = 16] = "Shift";
    KeyDown[KeyDown["Ctrl"] = 17] = "Ctrl";
    KeyDown[KeyDown["Alt"] = 18] = "Alt";
    KeyDown[KeyDown["PauseBreak"] = 19] = "PauseBreak";
    KeyDown[KeyDown["CapsLock"] = 20] = "CapsLock";
    KeyDown[KeyDown["Escape"] = 27] = "Escape";
    KeyDown[KeyDown["Spacebar"] = 32] = "Spacebar";
    KeyDown[KeyDown["PageUp"] = 33] = "PageUp";
    KeyDown[KeyDown["PageDown"] = 34] = "PageDown";
    KeyDown[KeyDown["End"] = 35] = "End";
    KeyDown[KeyDown["Home"] = 36] = "Home";
    KeyDown[KeyDown["LeftArrow"] = 37] = "LeftArrow";
    KeyDown[KeyDown["UpArrow"] = 38] = "UpArrow";
    KeyDown[KeyDown["RightArrow"] = 39] = "RightArrow";
    KeyDown[KeyDown["DownArrow"] = 40] = "DownArrow";
    KeyDown[KeyDown["PrintScrn"] = 44] = "PrintScrn";
    KeyDown[KeyDown["Insert"] = 45] = "Insert";
    KeyDown[KeyDown["Delete"] = 46] = "Delete";
    KeyDown[KeyDown["Zero"] = 48] = "Zero";
    KeyDown[KeyDown["One"] = 49] = "One";
    KeyDown[KeyDown["Two"] = 50] = "Two";
    KeyDown[KeyDown["Three"] = 51] = "Three";
    KeyDown[KeyDown["Four"] = 52] = "Four";
    KeyDown[KeyDown["Five"] = 53] = "Five";
    KeyDown[KeyDown["Six"] = 54] = "Six";
    KeyDown[KeyDown["Seven"] = 55] = "Seven";
    KeyDown[KeyDown["Eight"] = 56] = "Eight";
    KeyDown[KeyDown["Nine"] = 57] = "Nine";
    KeyDown[KeyDown["a"] = 65] = "a";
    KeyDown[KeyDown["b"] = 66] = "b";
    KeyDown[KeyDown["c"] = 67] = "c";
    KeyDown[KeyDown["d"] = 68] = "d";
    KeyDown[KeyDown["e"] = 69] = "e";
    KeyDown[KeyDown["f"] = 70] = "f";
    KeyDown[KeyDown["g"] = 71] = "g";
    KeyDown[KeyDown["h"] = 72] = "h";
    KeyDown[KeyDown["i"] = 73] = "i";
    KeyDown[KeyDown["j"] = 74] = "j";
    KeyDown[KeyDown["k"] = 75] = "k";
    KeyDown[KeyDown["l"] = 76] = "l";
    KeyDown[KeyDown["m"] = 77] = "m";
    KeyDown[KeyDown["n"] = 78] = "n";
    KeyDown[KeyDown["o"] = 79] = "o";
    KeyDown[KeyDown["p"] = 80] = "p";
    KeyDown[KeyDown["q"] = 81] = "q";
    KeyDown[KeyDown["r"] = 82] = "r";
    KeyDown[KeyDown["s"] = 83] = "s";
    KeyDown[KeyDown["t"] = 84] = "t";
    KeyDown[KeyDown["u"] = 85] = "u";
    KeyDown[KeyDown["v"] = 86] = "v";
    KeyDown[KeyDown["w"] = 87] = "w";
    KeyDown[KeyDown["x"] = 88] = "x";
    KeyDown[KeyDown["y"] = 89] = "y";
    KeyDown[KeyDown["z"] = 90] = "z";
    KeyDown[KeyDown["LeftWindowKey"] = 91] = "LeftWindowKey";
    KeyDown[KeyDown["RightWindowKey"] = 92] = "RightWindowKey";
    KeyDown[KeyDown["SelectKey"] = 93] = "SelectKey";
    KeyDown[KeyDown["Numpad0"] = 96] = "Numpad0";
    KeyDown[KeyDown["Numpad1"] = 97] = "Numpad1";
    KeyDown[KeyDown["Numpad2"] = 98] = "Numpad2";
    KeyDown[KeyDown["Numpad3"] = 99] = "Numpad3";
    KeyDown[KeyDown["Numpad4"] = 100] = "Numpad4";
    KeyDown[KeyDown["Numpad5"] = 101] = "Numpad5";
    KeyDown[KeyDown["Numpad6"] = 102] = "Numpad6";
    KeyDown[KeyDown["Numpad7"] = 103] = "Numpad7";
    KeyDown[KeyDown["Numpad8"] = 104] = "Numpad8";
    KeyDown[KeyDown["Numpad9"] = 105] = "Numpad9";
    KeyDown[KeyDown["Multiply"] = 106] = "Multiply";
    KeyDown[KeyDown["NumpadPlus"] = 107] = "NumpadPlus";
    KeyDown[KeyDown["NumpadMinus"] = 109] = "NumpadMinus";
    KeyDown[KeyDown["DecimalPoint"] = 110] = "DecimalPoint";
    KeyDown[KeyDown["Divide"] = 111] = "Divide";
    KeyDown[KeyDown["F1"] = 112] = "F1";
    KeyDown[KeyDown["F2"] = 113] = "F2";
    KeyDown[KeyDown["F3"] = 114] = "F3";
    KeyDown[KeyDown["F4"] = 115] = "F4";
    KeyDown[KeyDown["F5"] = 116] = "F5";
    KeyDown[KeyDown["F6"] = 117] = "F6";
    KeyDown[KeyDown["F7"] = 118] = "F7";
    KeyDown[KeyDown["F8"] = 119] = "F8";
    KeyDown[KeyDown["F9"] = 120] = "F9";
    KeyDown[KeyDown["F10"] = 121] = "F10";
    KeyDown[KeyDown["F11"] = 122] = "F11";
    KeyDown[KeyDown["F12"] = 123] = "F12";
    KeyDown[KeyDown["NumLock"] = 144] = "NumLock";
    KeyDown[KeyDown["ScrollLock"] = 145] = "ScrollLock";
    KeyDown[KeyDown["Semicolon"] = 186] = "Semicolon";
    KeyDown[KeyDown["Equals"] = 187] = "Equals";
    KeyDown[KeyDown["Comma"] = 188] = "Comma";
    KeyDown[KeyDown["LessThan"] = 188] = "LessThan";
    KeyDown[KeyDown["Dash"] = 189] = "Dash";
    KeyDown[KeyDown["Period"] = 190] = "Period";
    KeyDown[KeyDown["GreaterThan"] = 190] = "GreaterThan";
    KeyDown[KeyDown["ForwardSlash"] = 191] = "ForwardSlash";
    KeyDown[KeyDown["QuestionMark"] = 191] = "QuestionMark";
    KeyDown[KeyDown["GraveAccent"] = 192] = "GraveAccent";
    KeyDown[KeyDown["Tilde"] = 192] = "Tilde";
    KeyDown[KeyDown["OpenCurlyBracket"] = 219] = "OpenCurlyBracket";
    KeyDown[KeyDown["OpenSquareBracket"] = 219] = "OpenSquareBracket";
    KeyDown[KeyDown["BackSlash"] = 220] = "BackSlash";
    KeyDown[KeyDown["VerticalPipe"] = 220] = "VerticalPipe";
    KeyDown[KeyDown["CloseCurlyBracket"] = 221] = "CloseCurlyBracket";
    KeyDown[KeyDown["CloseSquareBracket"] = 221] = "CloseSquareBracket";
    KeyDown[KeyDown["Quote"] = 222] = "Quote";
    KeyDown[KeyDown["CommandFF"] = 224] = "CommandFF";
})(KeyDown || (KeyDown = {}));
var KeyPress;
(function (KeyPress) {
    KeyPress[KeyPress["Backspace"] = 8] = "Backspace";
    KeyPress[KeyPress["Enter"] = 13] = "Enter";
    KeyPress[KeyPress["Spacebar"] = 32] = "Spacebar";
    KeyPress[KeyPress["Hash"] = 35] = "Hash";
    KeyPress[KeyPress["GraveAccent"] = 39] = "GraveAccent";
    KeyPress[KeyPress["DoubleQuote"] = 34] = "DoubleQuote";
    KeyPress[KeyPress["Asterisk"] = 42] = "Asterisk";
    KeyPress[KeyPress["Plus"] = 43] = "Plus";
    KeyPress[KeyPress["Comma"] = 44] = "Comma";
    KeyPress[KeyPress["Minus"] = 45] = "Minus";
    KeyPress[KeyPress["Period"] = 46] = "Period";
    KeyPress[KeyPress["ForwardSlash"] = 47] = "ForwardSlash";
    KeyPress[KeyPress["Zero"] = 48] = "Zero";
    KeyPress[KeyPress["One"] = 49] = "One";
    KeyPress[KeyPress["Two"] = 50] = "Two";
    KeyPress[KeyPress["Three"] = 51] = "Three";
    KeyPress[KeyPress["Four"] = 52] = "Four";
    KeyPress[KeyPress["Five"] = 53] = "Five";
    KeyPress[KeyPress["Six"] = 54] = "Six";
    KeyPress[KeyPress["Seven"] = 55] = "Seven";
    KeyPress[KeyPress["Eight"] = 56] = "Eight";
    KeyPress[KeyPress["Nine"] = 57] = "Nine";
    KeyPress[KeyPress["Colon"] = 58] = "Colon";
    KeyPress[KeyPress["Semicolon"] = 59] = "Semicolon";
    KeyPress[KeyPress["LessThan"] = 60] = "LessThan";
    KeyPress[KeyPress["Equals"] = 61] = "Equals";
    KeyPress[KeyPress["GreaterThan"] = 62] = "GreaterThan";
    KeyPress[KeyPress["QuestionMark"] = 63] = "QuestionMark";
    KeyPress[KeyPress["At"] = 64] = "At";
    KeyPress[KeyPress["OpenSquareBracket"] = 91] = "OpenSquareBracket";
    KeyPress[KeyPress["BackSlash"] = 92] = "BackSlash";
    KeyPress[KeyPress["CloseSquareBracket"] = 93] = "CloseSquareBracket";
    KeyPress[KeyPress["a"] = 97] = "a";
    KeyPress[KeyPress["b"] = 98] = "b";
    KeyPress[KeyPress["c"] = 99] = "c";
    KeyPress[KeyPress["d"] = 100] = "d";
    KeyPress[KeyPress["e"] = 101] = "e";
    KeyPress[KeyPress["f"] = 102] = "f";
    KeyPress[KeyPress["g"] = 103] = "g";
    KeyPress[KeyPress["h"] = 104] = "h";
    KeyPress[KeyPress["i"] = 105] = "i";
    KeyPress[KeyPress["j"] = 106] = "j";
    KeyPress[KeyPress["k"] = 107] = "k";
    KeyPress[KeyPress["l"] = 108] = "l";
    KeyPress[KeyPress["m"] = 109] = "m";
    KeyPress[KeyPress["n"] = 110] = "n";
    KeyPress[KeyPress["o"] = 111] = "o";
    KeyPress[KeyPress["p"] = 112] = "p";
    KeyPress[KeyPress["q"] = 113] = "q";
    KeyPress[KeyPress["r"] = 114] = "r";
    KeyPress[KeyPress["s"] = 115] = "s";
    KeyPress[KeyPress["t"] = 116] = "t";
    KeyPress[KeyPress["u"] = 117] = "u";
    KeyPress[KeyPress["v"] = 118] = "v";
    KeyPress[KeyPress["w"] = 119] = "w";
    KeyPress[KeyPress["x"] = 120] = "x";
    KeyPress[KeyPress["y"] = 121] = "y";
    KeyPress[KeyPress["z"] = 122] = "z";
    KeyPress[KeyPress["OpenCurlyBracket"] = 123] = "OpenCurlyBracket";
    KeyPress[KeyPress["VerticalPipe"] = 124] = "VerticalPipe";
    KeyPress[KeyPress["CloseCurlyBracket"] = 125] = "CloseCurlyBracket";
    KeyPress[KeyPress["Tilde"] = 126] = "Tilde";
})(KeyPress || (KeyPress = {}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@iiif/iiif-metadata-component/dist-umd/IIIFMetadataComponent.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@iiif/iiif-metadata-component/dist-umd/IIIFMetadataComponent.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(2),s=n(3),u=n(4);!function(e){e.LINES="lines",e.CHARS="chars"}(o=t.LimitType||(t.LimitType={}));var c=function(e){function t(t){var n=e.call(this,t)||this;return n._data=n.data(),n._data=n.options.data,n._init(),n._resize(),n}return i(t,e),t.prototype._init=function(){return e.prototype._init.call(this),this._$element=$(this.el),this._$metadataGroupTemplate=$('<div class="group">          <div class="header"></div>          <div class="items"></div>      </div>'),this._$metadataItemTemplate=$('<div class="item">          <div class="label"></div>          <div class="values"></div>      </div>'),this._$metadataItemValueTemplate=$('<div class="value"></div>'),this._$metadataItemURIValueTemplate=$('<a class="value" href="" target="_blank"></a>'),this._$copyTextTemplate=$('<div class="copyText" alt="'+this.options.data.content.copyToClipboard+'" title="'+this.options.data.content.copyToClipboard+'">        <div class="copiedText">'+this.options.data.content.copiedToClipboard+" </div>        </div>"),this._$metadataGroups=$('<div class="groups"></div>'),this._$element.append(this._$metadataGroups),this._$noData=$('<div class="noData">'+this.options.data.content.noData+"</div>"),this._$element.append(this._$noData),!0},t.prototype.data=function(){return{aggregateValues:"",canvases:null,canvasDisplayOrder:"",metadataGroupOrder:"",canvasExclude:"",canvasLabels:"",content:{attribution:"Attribution",canvasHeader:"About the canvas",copiedToClipboard:"Copied to clipboard",copyToClipboard:"Copy to clipboard",description:"Description",imageHeader:"About the image",less:"less",license:"License",logo:"Logo",manifestHeader:"About the item",more:"more",noData:"No data to display",rangeHeader:"About the range",sequenceHeader:"About the sequence"},copiedMessageDuration:2e3,copyToClipboardEnabled:!1,helper:null,licenseFormatter:null,limit:4,limitType:o.LINES,limitToRange:!1,manifestDisplayOrder:"",manifestExclude:"",range:null,rtlLanguageCodes:"ar, ara, dv, div, he, heb, ur, urd",sanitizer:function(e){return e},showAllLanguages:!1}},t.prototype._getManifestGroup=function(){return this._metadataGroups.filter((function(e){return e.resource.isManifest()}))[0]},t.prototype._getCanvasGroups=function(){return this._metadataGroups.filter((function(e){return e.resource.isCanvas()}))},t.prototype.set=function(e){var t=this;if(this._data=Object.assign(this._data,e),this._data&&this._data.helper){var n,r={canvases:this._data.canvases,licenseFormatter:this._data.licenseFormatter,range:this._data.range};if(this._metadataGroups=this._data.helper.getMetadata(r),this._data.manifestDisplayOrder)(n=this._getManifestGroup()).items=this._sortItems(n.items,this._readCSV(this._data.manifestDisplayOrder));if(this._data.canvasDisplayOrder)this._getCanvasGroups().forEach((function(e,n){e.items=t._sortItems(e.items,t._readCSV(t._data.canvasDisplayOrder))}));if(this._data.metadataGroupOrder&&(this._metadataGroups=this._sortGroups(this._metadataGroups,this._readCSV(this._data.metadataGroupOrder))),this._data.canvasLabels&&this._label(this._getCanvasGroups(),this._readCSV(this._data.canvasLabels,!1)),this._data.manifestExclude)(n=this._getManifestGroup()).items=this._exclude(n.items,this._readCSV(this._data.manifestExclude));if(this._data.canvasExclude)this._getCanvasGroups().forEach((function(e,n){e.items=t._exclude(e.items,t._readCSV(t._data.canvasExclude))}));if(this._data.limitToRange){var i=[];this._metadataGroups.forEach((function(e,t){e.resource.isRange()&&i.push(e)})),i.length&&(this._metadataGroups=i)}this._render()}},t.prototype._sortItems=function(e,t){var n=this,r=[],i=e.slice(0);return t.forEach((function(e,t){var o=i.filter((function(t){return n._normalise(t.getLabel())===e}))[0];if(o){r.push(o);var a=i.indexOf(o);a>-1&&i.splice(a,1)}})),i.forEach((function(e,t){r.push(e)})),r},t.prototype._sortGroups=function(e,t){var n=[],r=e.slice(0);return t.forEach((function(e,t){var i=r.filter((function(t){return t.resource.getIIIFResourceType().toLowerCase()==e.toLowerCase()}))[0];if(i){n.push(i);var o=r.indexOf(i);o>-1&&r.splice(o,1)}})),n},t.prototype._label=function(e,t){e.forEach((function(e,n){e.label=t[n]}))},t.prototype._exclude=function(e,t){var n=this;return t.forEach((function(t,r){var i=e.filter((function(e){return n._normalise(e.getLabel())===t}))[0];if(i){var o=e.indexOf(i);o>-1&&e.splice(o,1)}})),e},t.prototype._normalise=function(e){return e?e.toLowerCase().replace(/ /g,""):null},t.prototype._render=function(){var e=this;this._metadataGroups.length?(this._$noData.hide(),this._$metadataGroups.empty(),this._metadataGroups.forEach((function(t,n){var r=e._buildMetadataGroup(t);e._$metadataGroups.append(r);var i=r.find(".value");e._data.limit&&e._data.content&&(e._data.limitType===o.LINES?i.toggleExpandTextByLines(e._data.limit,e._data.content.less,e._data.content.more,(function(){})):e._data.limitType===o.CHARS&&i.ellipsisHtmlFixed(e._data.limit,(function(){})))}))):this._$noData.show()},t.prototype._buildMetadataGroup=function(e){var t=this._$metadataGroupTemplate.clone(),n=t.find(">.header");if(this._data.content)if(e.resource.isManifest()&&this._data.content.manifestHeader)(i=this._sanitize(this._data.content.manifestHeader))&&n.html(i);else if(e.resource.isSequence()&&this._data.content.sequenceHeader){(i=this._sanitize(this._data.content.sequenceHeader))&&n.html(i)}else if(e.resource.isRange()&&this._data.content.rangeHeader){(i=this._sanitize(this._data.content.rangeHeader))&&n.html(i)}else if(e.resource.isCanvas()&&(e.label||this._data.content.canvasHeader)){var r=e.label||this._data.content.canvasHeader;n.html(this._sanitize(r))}else if(e.resource.isAnnotation()&&this._data.content.imageHeader){var i;(i=this._sanitize(this._data.content.imageHeader))&&n.html(i)}n.text()||n.hide();for(var o=t.find(".items"),a=0;a<e.items.length;a++){var s=e.items[a],u=this._buildMetadataItem(s);o.append(u)}return t},t.prototype._buildMetadataItem=function(e){var t,n=this._$metadataItemTemplate.clone(),r=n.find(".label"),i=n.find(".values"),o=e.getLabel(),a=o,s=new RegExp("/w+:(/?/?)[^s]+/gm","i");if(this._data.content&&a&&e.isRootLevel)switch(a.toLowerCase()){case"attribution":a=this._data.content.attribution;break;case"description":a=this._data.content.description;break;case"license":a=this._data.content.license;break;case"logo":a=this._data.content.logo}if(a=this._sanitize(a),r.html(a),this._addReadingDirection(r,this._getLabelLocale(e)),n.addClass(u.Strings.toCssClass(a)),o&&"license"===o.toLowerCase()&&null!==s.exec(e.value[0].value))t=this._buildMetadataItemURIValue(e.value[0].value),i.append(t);else if(this._data.showAllLanguages&&e.value&&e.value.length>1)for(var c=0;c<e.value.length;c++){var p=e.value[c];t=this._buildMetadataItemValue(p.value,p.locale),i.append(t)}else{var f=this._getValueLocale(e),h=!1;for(c=0;c<e.value.length;c++){var p=e.value[c];f.toLowerCase()===p.locale.toLowerCase()&&(h=!0,t=this._buildMetadataItemValue(p.value,p.locale),i.append(t))}if(!h)(p=e.value[0])&&(t=this._buildMetadataItemValue(p.value,p.locale),i.append(t))}this._data.copyToClipboardEnabled&&u.Clipboard.supportsCopy()&&r.text()&&this._addCopyButton(n,r,i);var d=this;return n.on("click","a.iiif-viewer-link",(function(e){e.preventDefault();var t=$(e.target),n=t.attr("data-uv-navigate")||t.prop("href");d.fire(l.IIIF_VIEWER_LINK_CLICKED,n)})),n.on("click","[data-uv-navigate]",(function(e){e.preventDefault();var t=$(e.target).attr("data-uv-navigate")||null;t&&d.fire(l.IIIF_VIEWER_LINK_CLICKED,t)})),n},t.prototype._getLabelLocale=function(e){if(!this._data||!this._data.helper)return"";var t=this._data.helper.options.locale;if(e.label.length){var n=e.label[0].locale;if(n.toLowerCase()!==t.toLowerCase())return n}return t},t.prototype._getValueLocale=function(e){return this._data&&this._data.helper?this._data.helper.options.locale:""},t.prototype._buildMetadataItemValue=function(e,t){e=(e=this._sanitize(e)).replace("\n","<br>");var n=this._$metadataItemValueTemplate.clone();return n.html(e),n.find("a").each((function(){var e=$(this);e.hasClass("iiif-viewer-link")||e.prop("target","_blank")})),t&&this._addReadingDirection(n,t),n},t.prototype._buildMetadataItemURIValue=function(e){e=this._sanitize(e);var t=this._$metadataItemURIValueTemplate.clone();return t.prop("href",e),t.text(e),t},t.prototype._addReadingDirection=function(e,t){t=a.Utils.getInexactLocale(t),this._readCSV(this._data.rtlLanguageCodes).filter((function(e){return e===t})).length>0&&(e.prop("dir","rtl"),e.addClass("rtl"))},t.prototype._addCopyButton=function(e,t,n){var r=this._$copyTextTemplate.clone(),i=r.children();t.append(r),u.Device.isTouch()?r.show():(e.on("mouseenter",(function(){r.show()})),e.on("mouseleave",(function(){r.hide()})),r.on("mouseleave",(function(){i.hide()})));var o=this,a=n.text();r.on("click",(function(e){o._copyItemValues(r,a)}))},t.prototype._copyItemValues=function(e,t){u.Clipboard.copy(t);var n=e.find(".copiedText");n.show(),setTimeout((function(){n.hide()}),this._data.copiedMessageDuration)},t.prototype._readCSV=function(e,t){void 0===t&&(t=!0);var n=[];if(e&&(n=e.split(","),t))for(var r=0;r<n.length;r++)n[r]=this._normalise(n[r]);return n},t.prototype._sanitize=function(e){return this._data.sanitizer?this._data.sanitizer(e):null},t.prototype._resize=function(){},t}(s.BaseComponent);t.MetadataComponent=c;var l=function(){function e(){}return e.IIIF_VIEWER_LINK_CLICKED="iiifViewerLinkClicked",e}();t.Events=l},function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(6)),r(n(7)),r(n(8)),r(n(9)),r(n(10)),r(n(11)),r(n(12)),r(n(13)),r(n(14)),r(n(15)),r(n(16)),r(n(17)),r(n(18)),r(n(19)),r(n(20)),r(n(21)),r(n(22)),r(n(23)),r(n(24)),r(n(25)),r(n(26)),r(n(27)),r(n(28)),r(n(29)),r(n(30)),r(n(31)),r(n(32)),r(n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOOKMARKING="oa:bookmarking",e.CLASSIFYING="oa:classifying",e.COMMENTING="oa:commenting",e.DESCRIBING="oa:describing",e.EDITING="oa:editing",e.HIGHLIGHTING="oa:highlighting",e.IDENTIFYING="oa:identifying",e.LINKING="oa:linking",e.MODERATING="oa:moderating",e.PAINTING="sc:painting",e.QUESTIONING="oa:questioning",e.REPLYING="oa:replying",e.TAGGING="oa:tagging",e.TRANSCRIBING="oad:transcribing"}(t.AnnotationMotivation||(t.AnnotationMotivation={})),function(e){e.AUTO_ADVANCE="auto-advance",e.CONTINUOUS="continuous",e.FACING_PAGES="facing-pages",e.HIDDEN="hidden",e.INDIVIDUALS="individuals",e.MULTI_PART="multi-part",e.NO_NAV="no-nav",e.NON_PAGED="non-paged",e.PAGED="paged",e.REPEAT="repeat",e.SEQUENCE="sequence",e.THUMBNAIL_NAV="thumbnail-nav",e.TOGETHER="together",e.UNORDERED="unordered"}(t.Behavior||(t.Behavior={})),function(e){e.CANVAS="canvas",e.CHOICE="choice",e.CONTENT_AS_TEXT="contentastext",e.DOCUMENT="document",e.IMAGE="image",e.MOVING_IMAGE="movingimage",e.PDF="pdf",e.PHYSICAL_OBJECT="physicalobject",e.SOUND="sound",e.TEXTUALBODY="textualbody",e.VIDEO="video"}(t.ExternalResourceType||(t.ExternalResourceType={})),function(e){e.ANNOTATION="annotation",e.CANVAS="canvas",e.COLLECTION="collection",e.MANIFEST="manifest",e.RANGE="range",e.SEQUENCE="sequence"}(t.IIIFResourceType||(t.IIIFResourceType={})),function(e){e.AUDIO_MP4="audio/mp4",e.CORTO="application/corto",e.DRACO="application/draco",e.GLTF="model/gltf+json",e.JPG="image/jpeg",e.M3U8="application/vnd.apple.mpegurl",e.MP3="audio/mp3",e.MPEG_DASH="application/dash+xml",e.OBJ="text/plain",e.PDF="application/pdf",e.PLY="application/ply",e.THREEJS="application/vnd.threejs+json",e.VIDEO_MP4="video/mp4",e.WEBM="video/webm"}(t.MediaType||(t.MediaType={})),function(e){e.DOC="application/msword",e.DOCX="application/vnd.openxmlformats-officedocument.wordprocessingml.document",e.PDF="application/pdf"}(t.RenderingFormat||(t.RenderingFormat={})),function(e){e.IMAGE_0_COMPLIANCE_LEVEL_0="http://library.stanford.edu/iiif/image-api/compliance.html#level0",e.IMAGE_0_COMPLIANCE_LEVEL_1="http://library.stanford.edu/iiif/image-api/compliance.html#level1",e.IMAGE_0_COMPLIANCE_LEVEL_2="http://library.stanford.edu/iiif/image-api/compliance.html#level2",e.IMAGE_0_CONFORMANCE_LEVEL_0="http://library.stanford.edu/iiif/image-api/conformance.html#level0",e.IMAGE_0_CONFORMANCE_LEVEL_1="http://library.stanford.edu/iiif/image-api/conformance.html#level1",e.IMAGE_0_CONFORMANCE_LEVEL_2="http://library.stanford.edu/iiif/image-api/conformance.html#level2",e.IMAGE_1_COMPLIANCE_LEVEL_0="http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",e.IMAGE_1_COMPLIANCE_LEVEL_1="http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1",e.IMAGE_1_COMPLIANCE_LEVEL_2="http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2",e.IMAGE_1_CONFORMANCE_LEVEL_0="http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0",e.IMAGE_1_CONFORMANCE_LEVEL_1="http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1",e.IMAGE_1_CONFORMANCE_LEVEL_2="http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2",e.IMAGE_1_LEVEL_0="http://iiif.io/api/image/1/level0.json",e.IMAGE_1_PROFILE_LEVEL_0="http://iiif.io/api/image/1/profiles/level0.json",e.IMAGE_1_LEVEL_1="http://iiif.io/api/image/1/level1.json",e.IMAGE_1_PROFILE_LEVEL_1="http://iiif.io/api/image/1/profiles/level1.json",e.IMAGE_1_LEVEL_2="http://iiif.io/api/image/1/level2.json",e.IMAGE_1_PROFILE_LEVEL_2="http://iiif.io/api/image/1/profiles/level2.json",e.IMAGE_2_LEVEL_0="http://iiif.io/api/image/2/level0.json",e.IMAGE_2_PROFILE_LEVEL_0="http://iiif.io/api/image/2/profiles/level0.json",e.IMAGE_2_LEVEL_1="http://iiif.io/api/image/2/level1.json",e.IMAGE_2_PROFILE_LEVEL_1="http://iiif.io/api/image/2/profiles/level1.json",e.IMAGE_2_LEVEL_2="http://iiif.io/api/image/2/level2.json",e.IMAGE_2_PROFILE_LEVEL_2="http://iiif.io/api/image/2/profiles/level2.json",e.AUTH_0_CLICK_THROUGH="http://iiif.io/api/auth/0/login/clickthrough",e.AUTH_0_LOGIN="http://iiif.io/api/auth/0/login",e.AUTH_0_LOGOUT="http://iiif.io/api/auth/0/logout",e.AUTH_0_RESTRICTED="http://iiif.io/api/auth/0/login/restricted",e.AUTH_0_TOKEN="http://iiif.io/api/auth/0/token",e.AUTH_1_CLICK_THROUGH="http://iiif.io/api/auth/1/clickthrough",e.AUTH_1_EXTERNAL="http://iiif.io/api/auth/1/external",e.AUTH_1_KIOSK="http://iiif.io/api/auth/1/kiosk",e.AUTH_1_LOGIN="http://iiif.io/api/auth/1/login",e.AUTH_1_LOGOUT="http://iiif.io/api/auth/1/logout",e.AUTH_1_PROBE="http://iiif.io/api/auth/1/probe",e.AUTH_1_TOKEN="http://iiif.io/api/auth/1/token",e.SEARCH_0="http://iiif.io/api/search/0/search",e.SEARCH_0_AUTO_COMPLETE="http://iiif.io/api/search/0/autocomplete",e.SEARCH_1="http://iiif.io/api/search/1/search",e.SEARCH_1_AUTO_COMPLETE="http://iiif.io/api/search/1/autocomplete",e.TRACKING_EXTENSIONS="http://universalviewer.io/tracking-extensions-profile",e.UI_EXTENSIONS="http://universalviewer.io/ui-extensions-profile",e.PRINT_EXTENSIONS="http://universalviewer.io/print-extensions-profile",e.SHARE_EXTENSIONS="http://universalviewer.io/share-extensions-profile",e.OTHER_MANIFESTATIONS="http://iiif.io/api/otherManifestations.json",e.IXIF="http://wellcomelibrary.org/ld/ixif/0/alpha.json"}(t.ServiceProfile||(t.ServiceProfile={})),function(e){e.BOTTOM_TO_TOP="bottom-to-top",e.LEFT_TO_RIGHT="left-to-right",e.RIGHT_TO_LEFT="right-to-left",e.TOP_TO_BOTTOM="top-to-bottom"}(t.ViewingDirection||(t.ViewingDirection={})),function(e){e.CONTINUOUS="continuous",e.INDIVIDUALS="individuals",e.NON_PAGED="non-paged",e.PAGED="paged",e.TOP="top"}(t.ViewingHint||(t.ViewingHint={}))},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(1),s=n(33);n(34);var u=function(){function e(){}return e.getMediaType=function(e){return(e=(e=e.toLowerCase()).split(";")[0]).trim()},e.getImageQuality=function(e){return e===a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1||e===a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2||e===a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_1||e===a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2||e===a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1||e===a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2||e===a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1||e===a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2||e===a.ServiceProfile.IMAGE_1_LEVEL_1||e===a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1||e===a.ServiceProfile.IMAGE_1_LEVEL_2||e===a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2?"native":"default"},e.getInexactLocale=function(e){return-1!==e.indexOf("-")?e.substr(0,e.indexOf("-")):e},e.getLocalisedValue=function(e,t){if(!Array.isArray(e))return e;for(var n=0;n<e.length;n++){var r=e[n];if(t===r["@language"])return r["@value"]}var i=t.substr(0,t.indexOf("-"));for(n=0;n<e.length;n++){var o=e[n];if(o["@language"]===i)return o["@value"]}return null},e.generateTreeNodeIds=function(t,n){var r;void 0===n&&(n=0),r=t.parentNode?t.parentNode.id+"-"+n:"0",t.id=r;for(var i=0;i<t.nodes.length;i++){var o=t.nodes[i];e.generateTreeNodeIds(o,i)}},e.normaliseType=function(e){return-1!==(e=e.toLowerCase()).indexOf(":")?e.split(":")[1]:e},e.normaliseUrl=function(e){return-1!==(e=e.substr(e.indexOf("://"))).indexOf("#")&&(e=e.split("#")[0]),e},e.normalisedUrlsMatch=function(t,n){return e.normaliseUrl(t)===e.normaliseUrl(n)},e.isImageProfile=function(t){return!!(e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_2))},e.isLevel0ImageProfile=function(t){return!!(e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_0)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_0))},e.isLevel1ImageProfile=function(t){return!!(e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_1)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_1))},e.isLevel2ImageProfile=function(t){return!!(e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_COMPLIANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_COMPLIANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_0_CONFORMANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_1_PROFILE_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_LEVEL_2)||e.normalisedUrlsMatch(t,a.ServiceProfile.IMAGE_2_PROFILE_LEVEL_2))},e.parseManifest=function(e,t){return o.Deserialiser.parse(e,t)},e.checkStatus=function(e){if(e.ok)return e;var t=new Error(e.statusText);return t.response=e,Promise.reject(t)},e.loadManifest=function(t){return new Promise((function(n){fetch(t).then(e.checkStatus).then((function(e){return e.json()})).then((function(e){n(e)}))}))},e.loadExternalResourcesAuth1=function(t,n,r,i,o,a,s,u){return new Promise((function(c,l){var p=t.map((function(t){return e.loadExternalResourceAuth1(t,n,r,i,o,a,s,u)}));Promise.all(p).then((function(){c(t)})).catch((function(e){l(e)}))}))},e.loadExternalResourceAuth1=function(t,n,o,a,u,c,l,p){return r(this,void 0,void 0,(function(){var r;return i(this,(function(i){switch(i.label){case 0:return[4,a(t)];case 1:return(r=i.sent())?[4,t.getData(r)]:[3,6];case 2:return i.sent(),t.status!==s.OK?[3,3]:[2,t];case 3:return[4,e.doAuthChain(t,n,o,u,c,l,p)];case 4:i.sent(),i.label=5;case 5:if(t.status===s.OK||t.status===s.MOVED_TEMPORARILY)return[2,t];throw e.createAuthorizationFailedError();case 6:return[4,t.getData()];case 7:return i.sent(),t.status!==s.MOVED_TEMPORARILY&&t.status!==s.UNAUTHORIZED?[3,9]:[4,e.doAuthChain(t,n,o,u,c,l,p)];case 8:i.sent(),i.label=9;case 9:if(t.status===s.OK||t.status===s.MOVED_TEMPORARILY)return[2,t];throw e.createAuthorizationFailedError()}}))}))},e.doAuthChain=function(t,n,o,a,u,c,l){return r(this,void 0,void 0,(function(){var r,p,f,h,d,_,g,v;return i(this,(function(i){switch(i.label){case 0:return t.isAccessControlled()?((r=t.externalService)&&(r.options=t.options),(p=t.kioskService)&&(p.options=t.options),(f=t.clickThroughService)&&(f.options=t.options),(h=t.loginService)&&(h.options=t.options),t.isResponseHandled||t.status!==s.MOVED_TEMPORARILY?[3,2]:[4,c(t)]):[2,t];case 1:return i.sent(),[2,t];case 2:return d=null,_=null,(d=r)?(_=d,[4,e.attemptResourceWithToken(t,o,d)]):[3,4];case 3:return i.sent(),[2,t];case 4:return(d=p)?(_=d,(g=n(d))?[4,a(g)]:[3,7]):[3,7];case 5:return i.sent(),[4,e.attemptResourceWithToken(t,o,d)];case 6:return i.sent(),[2,t];case 7:return(d=f)?(_=d,[4,u(t,d)]):[3,11];case 8:return(v=i.sent())?[4,a(v)]:[3,11];case 9:return i.sent(),[4,e.attemptResourceWithToken(t,o,d)];case 10:return i.sent(),[2,t];case 11:return(d=h)?(_=d,[4,u(t,d)]):[3,15];case 12:return(v=i.sent())?[4,a(v)]:[3,15];case 13:return i.sent(),[4,e.attemptResourceWithToken(t,o,d)];case 14:return i.sent(),[2,t];case 15:return _&&l(t,_),[2]}}))}))},e.attemptResourceWithToken=function(e,t,n){return r(this,void 0,void 0,(function(){var r,o;return i(this,(function(i){switch(i.label){case 0:return(r=n.getService(a.ServiceProfile.AUTH_1_TOKEN))?[4,t(e,r)]:[3,3];case 1:return(o=i.sent())&&o.accessToken?[4,e.getData(o)]:[3,3];case 2:return i.sent(),[2,e];case 3:return[2]}}))}))},e.loadExternalResourcesAuth09=function(t,n,r,i,o,a,s,u,c,l){return new Promise((function(p,f){var h=t.map((function(t){return e.loadExternalResourceAuth09(t,n,r,i,o,a,s,u,c,l)}));Promise.all(h).then((function(){p(t)})).catch((function(e){f(e)}))}))},e.loadExternalResourceAuth09=function(t,n,r,i,o,a,u,c,l,p){return new Promise((function(f,h){p&&p.pessimisticAccessControl?t.getData().then((function(){t.isAccessControlled()?t.clickThroughService?(f(r(t)),f(i(t))):o(t).then((function(){a(t,!0).then((function(n){t.getData(n).then((function(){f(l(t))})).catch((function(t){h(e.createInternalServerError(t))}))})).catch((function(t){h(e.createInternalServerError(t))}))})).catch((function(t){h(e.createInternalServerError(t))})):f(t)})).catch((function(t){h(e.createInternalServerError(t))})):c(t,n).then((function(p){p?t.getData(p).then((function(){t.status===s.OK?f(l(t)):e.authorize(t,n,r,i,o,a,u,c).then((function(){f(l(t))})).catch((function(t){h(e.createAuthorizationFailedError())}))})).catch((function(t){h(e.createAuthorizationFailedError())})):e.authorize(t,n,r,i,o,a,u,c).then((function(){f(l(t))})).catch((function(t){h(e.createAuthorizationFailedError())}))})).catch((function(t){h(e.createAuthorizationFailedError())}))}))},e.createError=function(e,t){var n=new Error;return n.message=t,n.name=String(e),n},e.createAuthorizationFailedError=function(){return e.createError(o.StatusCode.AUTHORIZATION_FAILED,"Authorization failed")},e.createRestrictedError=function(){return e.createError(o.StatusCode.RESTRICTED,"Restricted")},e.createInternalServerError=function(t){return e.createError(o.StatusCode.INTERNAL_SERVER_ERROR,t)},e.authorize=function(t,n,r,i,o,a,u,c){return new Promise((function(l,p){t.getData().then((function(){t.isAccessControlled()?c(t,n).then((function(c){c?t.getData(c).then((function(){t.status===s.OK?l(t):e.showAuthInteraction(t,n,r,i,o,a,u,l,p)})).catch((function(t){p(e.createInternalServerError(t))})):a(t,!1).then((function(c){c?u(t,c,n).then((function(){t.getData(c).then((function(){t.status===s.OK?l(t):e.showAuthInteraction(t,n,r,i,o,a,u,l,p)})).catch((function(t){p(e.createInternalServerError(t))}))})).catch((function(t){p(e.createInternalServerError(t))})):e.showAuthInteraction(t,n,r,i,o,a,u,l,p)}))})).catch((function(t){p(e.createInternalServerError(t))})):l(t)}))}))},e.showAuthInteraction=function(t,n,r,i,o,a,u,c,l){t.status!==s.MOVED_TEMPORARILY||t.isResponseHandled?t.clickThroughService&&!t.isResponseHandled?r(t).then((function(){a(t,!0).then((function(r){u(t,r,n).then((function(){t.getData(r).then((function(){c(t)})).catch((function(t){l(e.createInternalServerError(t))}))})).catch((function(t){l(e.createInternalServerError(t))}))})).catch((function(t){l(e.createInternalServerError(t))}))})):o(t).then((function(){a(t,!0).then((function(r){u(t,r,n).then((function(){t.getData(r).then((function(){c(t)})).catch((function(t){l(e.createInternalServerError(t))}))})).catch((function(t){l(e.createInternalServerError(t))}))})).catch((function(t){l(e.createInternalServerError(t))}))})):c(t)},e.getService=function(e,t){for(var n=this.getServices(e),r=0;r<n.length;r++){var i=n[r];if(i.getProfile()===t)return i}return null},e.getResourceById=function(t,n){return e.traverseAndFind(t.__jsonld,"@id",n)},e.traverseAndFind=function(t,n,r){if(t.hasOwnProperty(n)&&t[n]===r)return t;for(var i=0;i<Object.keys(t).length;i++)if("object"==typeof t[Object.keys(t)[i]]){var o=e.traverseAndFind(t[Object.keys(t)[i]],n,r);if(null!=o)return o}},e.getServices=function(e){var t,n=[];if(!(t=e.__jsonld?e.__jsonld.service:e.service))return n;Array.isArray(t)||(t=[t]);for(var r=0;r<t.length;r++){var i=t[r];if("string"==typeof i){var a=this.getResourceById(e.options.resource,i);a&&n.push(new o.Service(a.__jsonld||a,e.options))}else n.push(new o.Service(i,e.options))}return n},e.getTemporalComponent=function(e){var t=/t=([^&]+)/g.exec(e),n=null;return t&&t[1]&&(n=t[1].split(",")),n},e}();t.Utils=u},function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise((function(n,r){var i=new XMLHttpRequest,o=[],a=[],s={},u=function(){return{ok:2==(i.status/100|0),statusText:i.statusText,status:i.status,url:i.responseURL,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(JSON.parse(i.responseText))},blob:function(){return Promise.resolve(new Blob([i.response]))},clone:u,headers:{keys:function(){return o},entries:function(){return a},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var c in i.open(t.method||"get",e,!0),i.onload=function(){i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){o.push(t=t.toLowerCase()),a.push([t,n]),s[t]=s[t]?s[t]+","+n:n})),n(u())},i.onerror=r,i.withCredentials="include"==t.credentials,t.headers)i.setRequestHeader(c,t.headers[c]);i.send(t.body||null)}))}},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(0));var r=n(2);t.loadManifest=function(e){return r.Utils.loadManifest(e)},t.parseManifest=function(e,t){return r.Utils.parseManifest(e,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.__jsonld=e,this.context=this.getProperty("context"),this.id=this.getProperty("id")}return e.prototype.getProperty=function(e){var t=null;return this.__jsonld&&((t=this.__jsonld[e])||(t=this.__jsonld["@"+e])),t},e}();t.JSONLDResource=r},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(1),s=function(e){function t(t,n){var r=e.call(this,t)||this;return r.options=n,r}return i(t,e),t.prototype.getIIIFResourceType=function(){return o.Utils.normaliseType(this.getProperty("type"))},t.prototype.getLabel=function(){var e=this.getProperty("label");return e?o.LanguageMap.parse(e,this.options.locale):[]},t.prototype.getDefaultLabel=function(){return o.LanguageMap.getValue(this.getLabel())},t.prototype.getMetadata=function(){var e=this.getProperty("metadata"),t=[];if(!e)return t;for(var n=0;n<e.length;n++){var r=e[n],i=new o.LabelValuePair(this.options.locale);i.parse(r),t.push(i)}return t},t.prototype.getRendering=function(e){for(var t=this.getRenderings(),n=0;n<t.length;n++){var r=t[n];if(r.getFormat()===e)return r}return null},t.prototype.getRenderings=function(){var e,t=[];if(!(e=this.__jsonld?this.__jsonld.rendering:this.rendering))return t;Array.isArray(e)||(e=[e]);for(var n=0;n<e.length;n++){var r=e[n];t.push(new o.Rendering(r,this.options))}return t},t.prototype.getService=function(e){return o.Utils.getService(this,e)},t.prototype.getServices=function(){return o.Utils.getServices(this)},t.prototype.getThumbnail=function(){var e=this.getProperty("thumbnail");return Array.isArray(e)&&(e=e[0]),e?new o.Thumbnail(e,this.options):null},t.prototype.isAnnotation=function(){return this.getIIIFResourceType()===a.IIIFResourceType.ANNOTATION},t.prototype.isCanvas=function(){return this.getIIIFResourceType()===a.IIIFResourceType.CANVAS},t.prototype.isCollection=function(){return this.getIIIFResourceType()===a.IIIFResourceType.COLLECTION},t.prototype.isManifest=function(){return this.getIIIFResourceType()===a.IIIFResourceType.MANIFEST},t.prototype.isRange=function(){return this.getIIIFResourceType()===a.IIIFResourceType.RANGE},t.prototype.isSequence=function(){return this.getIIIFResourceType()===a.IIIFResourceType.SEQUENCE},t}(o.JSONLDResource);t.ManifestResource=s},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getFormat=function(){var e=this.getProperty("format");return e?e.toLowerCase():null},t.prototype.getResources=function(){var e=[];if(!this.__jsonld.resources)return e;for(var t=0;t<this.__jsonld.resources.length;t++){var n=this.__jsonld.resources[t],r=new o.Annotation(n,this.options);e.push(r)}return e},t.prototype.getType=function(){var e=this.getProperty("type");return e?o.Utils.normaliseType(e):null},t.prototype.getWidth=function(){return this.getProperty("width")},t.prototype.getHeight=function(){return this.getProperty("height")},t.prototype.getMaxWidth=function(){return this.getProperty("maxWidth")},t.prototype.getMaxHeight=function(){return this.getProperty("maxHeight")?null:this.getMaxWidth()},t}(o.ManifestResource);t.Resource=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(1),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;r.index=-1,r.isLoaded=!1;var i={defaultLabel:"-",locale:"en-GB",resource:r,pessimisticAccessControl:!1};return r.options=Object.assign(i,n),r}return i(t,e),t.prototype.getAttribution=function(){var e=this.getProperty("attribution");return e?o.LanguageMap.parse(e,this.options.locale):[]},t.prototype.getDescription=function(){var e=this.getProperty("description");return e?o.LanguageMap.parse(e,this.options.locale):[]},t.prototype.getIIIFResourceType=function(){return o.Utils.normaliseType(this.getProperty("type"))},t.prototype.getLogo=function(){var e=this.getProperty("logo");return e?"string"==typeof e?e:(Array.isArray(e)&&e.length&&(e=e[0]),e["@id"]||e.id):null},t.prototype.getLicense=function(){return o.Utils.getLocalisedValue(this.getProperty("license"),this.options.locale)},t.prototype.getNavDate=function(){return new Date(this.getProperty("navDate"))},t.prototype.getRelated=function(){return this.getProperty("related")},t.prototype.getSeeAlso=function(){return this.getProperty("seeAlso")},t.prototype.getTrackingLabel=function(){var e=this.getService(a.ServiceProfile.TRACKING_EXTENSIONS);return e?e.getProperty("trackingLabel"):""},t.prototype.getDefaultTree=function(){return this.defaultTree=new o.TreeNode("root"),this.defaultTree.data=this,this.defaultTree},t.prototype.getRequiredStatement=function(){var e=null,t=this.getProperty("requiredStatement");if(t)(e=new o.LabelValuePair(this.options.locale)).parse(t);else{var n=this.getAttribution();n&&((e=new o.LabelValuePair(this.options.locale)).value=n)}return e},t.prototype.isCollection=function(){return this.getIIIFResourceType()===a.IIIFResourceType.COLLECTION},t.prototype.isManifest=function(){return this.getIIIFResourceType()===a.IIIFResourceType.MANIFEST},t.prototype.load=function(){var e=this;return new Promise((function(t){if(e.isLoaded)t(e);else{var n=e.options;n.navDate=e.getNavDate();var r=e.__jsonld.id;r||(r=e.__jsonld["@id"]),o.Utils.loadManifest(r).then((function(r){e.parentLabel=o.LanguageMap.getValue(e.getLabel(),n.locale);var i=o.Deserialiser.parse(r,n);(e=Object.assign(e,i)).index=n.index,t(e)}))}}))},t}(o.ManifestResource);t.IIIFResource=s},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getBody=function(){var e=[],t=this.getProperty("body");if(t)if(Array.isArray(t))for(var n=0;n<t.length;n++)if((a=t[n]).items)for(var r=0;r<a.items.length;r++){var i=a.items[r];e.push(new o.AnnotationBody(i,this.options))}else e.push(new o.AnnotationBody(a,this.options));else if(t.items)for(n=0;n<t.items.length;n++){var a=t.items[n];e.push(new o.AnnotationBody(a,this.options))}else e.push(new o.AnnotationBody(t,this.options));return e},t.prototype.getMotivation=function(){return this.getProperty("motivation")||null},t.prototype.getOn=function(){return this.getProperty("on")},t.prototype.getTarget=function(){return this.getProperty("target")},t.prototype.getResource=function(){return new o.Resource(this.getProperty("resource"),this.options)},t}(o.ManifestResource);t.Annotation=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getFormat=function(){var e=this.getProperty("format");return e?o.Utils.getMediaType(e):null},t.prototype.getType=function(){return this.getProperty("type")?o.Utils.normaliseType(this.getProperty("type")):null},t.prototype.getWidth=function(){return this.getProperty("width")},t.prototype.getHeight=function(){return this.getProperty("height")},t}(o.ManifestResource);t.AnnotationBody=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n,r){var i=e.call(this,n)||this;return i.label=t,i.options=r,i}return i(t,e),t.prototype.getIIIFResourceType=function(){return o.Utils.normaliseType(this.getProperty("type"))},t.prototype.getLabel=function(){return this.label},t.prototype.getResources=function(){var e=this;return this.getProperty("resources").map((function(t){return new o.Annotation(t,e.options)}))},t.prototype.load=function(){var e=this;return new Promise((function(t,n){if(e.isLoaded)t(e);else{var r=e.__jsonld.id;r||(r=e.__jsonld["@id"]),o.Utils.loadManifest(r).then((function(n){e.__jsonld=n,e.context=e.getProperty("context"),e.id=e.getProperty("id"),e.isLoaded=!0,t(e)})).catch(n)}}))},t}(o.JSONLDResource);t.AnnotationList=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getItems=function(){return this.getProperty("items")},t}(n(0).ManifestResource);t.AnnotationPage=o},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getCanonicalImageUri=function(e){var t,n=null,r="default",i=e;if(this.externalResource&&this.externalResource.data&&this.externalResource.data["@id"])n=this.externalResource.data["@id"],i||(i=this.externalResource.data.width),this.externalResource.data["@context"]&&(this.externalResource.data["@context"].indexOf("/1.0/context.json")>-1||this.externalResource.data["@context"].indexOf("/1.1/context.json")>-1||this.externalResource.data["@context"].indexOf("/1/context.json")>-1)&&(r="native");else{var a=this.getImages();if(a&&a.length){var s=a[0].getResource(),u=s.getServices();if(i||(i=s.getWidth()),u.length){var c=u[0];n=c.id,r=o.Utils.getImageQuality(c.getProfile())}else if(i===s.getWidth())return s.id}if(!n){var l=this.getProperty("thumbnail");if(l){if("string"==typeof l)return l;if(l["@id"])return l["@id"];if(l.length)return l[0].id}}}return t=i+",",n&&n.endsWith("/")&&(n=n.substr(0,n.length-1)),[n,"full",t,0,r+".jpg"].join("/")},t.prototype.getMaxDimensions=function(){var e,t=null;return this.externalResource&&this.externalResource.data&&this.externalResource.data.profile&&(e=this.externalResource.data.profile,Array.isArray(e)&&(e=e.filter((function(e){return e.maxWidth}))[0])&&(t=new o.Size(e.maxWidth,e.maxHeight?e.maxHeight:e.maxWidth))),t},t.prototype.getContent=function(){var e=[],t=this.__jsonld.items||this.__jsonld.content;if(!t)return e;var n=null;if(t.length&&(n=new o.AnnotationPage(t[0],this.options)),!n)return e;for(var r=n.getItems(),i=0;i<r.length;i++){var a=r[i],s=new o.Annotation(a,this.options);e.push(s)}return e},t.prototype.getDuration=function(){return this.getProperty("duration")},t.prototype.getImages=function(){var e=[];if(!this.__jsonld.images)return e;for(var t=0;t<this.__jsonld.images.length;t++){var n=this.__jsonld.images[t],r=new o.Annotation(n,this.options);e.push(r)}return e},t.prototype.getIndex=function(){return this.getProperty("index")},t.prototype.getOtherContent=function(){var e=this,t=(Array.isArray(this.getProperty("otherContent"))?this.getProperty("otherContent"):[this.getProperty("otherContent")]).filter((function(e){return e&&"string"==typeof(t=e["@type"])&&t.toLowerCase()==t.toLowerCase();var t})).map((function(t,n){return new o.AnnotationList(t.label||"Annotation list "+n,t,e.options)})).map((function(e){return e.load()}));return Promise.all(t)},t.prototype.getWidth=function(){return this.getProperty("width")},t.prototype.getHeight=function(){return this.getProperty("height")},t}(o.Resource);t.Canvas=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(0),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.items=[],r._collections=null,r._manifests=null,t.__collection=r,r}return i(t,e),t.prototype.getCollections=function(){return this._collections?this._collections:this._collections=this.items.filter((function(e){return e.isCollection()}))},t.prototype.getManifests=function(){return this._manifests?this._manifests:this._manifests=this.items.filter((function(e){return e.isManifest()}))},t.prototype.getCollectionByIndex=function(e){for(var t,n=this.getCollections(),r=0;r<n.length;r++){var i=n[r];i.index===e&&(t=i)}if(t)return t.options.index=e,t.load();throw new Error("Collection index not found")},t.prototype.getManifestByIndex=function(e){for(var t,n=this.getManifests(),r=0;r<n.length;r++){var i=n[r];i.index===e&&(t=i)}if(t)return t.options.index=e,t.load();throw new Error("Manifest index not found")},t.prototype.getTotalCollections=function(){return this.getCollections().length},t.prototype.getTotalManifests=function(){return this.getManifests().length},t.prototype.getTotalItems=function(){return this.items.length},t.prototype.getViewingDirection=function(){return this.getProperty("viewingDirection")?this.getProperty("viewingDirection"):o.ViewingDirection.LEFT_TO_RIGHT},t.prototype.getDefaultTree=function(){return e.prototype.getDefaultTree.call(this),this.defaultTree.data.type=a.Utils.normaliseType(a.TreeNodeType.COLLECTION),this._parseManifests(this),this._parseCollections(this),a.Utils.generateTreeNodeIds(this.defaultTree),this.defaultTree},t.prototype._parseManifests=function(e){if(e.getManifests()&&e.getManifests().length)for(var t=0;t<e.getManifests().length;t++){var n=e.getManifests()[t],r=n.getDefaultTree();r.label=n.parentLabel||a.LanguageMap.getValue(n.getLabel(),this.options.locale)||"manifest "+(t+1),r.navDate=n.getNavDate(),r.data.id=n.id,r.data.type=a.Utils.normaliseType(a.TreeNodeType.MANIFEST),e.defaultTree.addNode(r)}},t.prototype._parseCollections=function(e){if(e.getCollections()&&e.getCollections().length)for(var t=0;t<e.getCollections().length;t++){var n=e.getCollections()[t],r=n.getDefaultTree();r.label=n.parentLabel||a.LanguageMap.getValue(n.getLabel(),this.options.locale)||"collection "+(t+1),r.navDate=n.getNavDate(),r.data.id=n.id,r.data.type=a.Utils.normaliseType(a.TreeNodeType.COLLECTION),e.defaultTree.addNode(r)}},t}(a.IIIFResource);t.Collection=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){this.start=e,this.end=t}return e.prototype.getLength=function(){return this.end-this.start},e}();t.Duration=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e){this.defaultLocale=e}return e.prototype.parse=function(e){this.resource=e,this.label=r.LanguageMap.parse(this.resource.label,this.defaultLocale),this.value=r.LanguageMap.parse(this.resource.value,this.defaultLocale)},e.prototype.getLabel=function(){return this.label?r.LanguageMap.getValue(this.label,this.defaultLocale):null},e.prototype.setLabel=function(e){var t=this;if(this.label&&this.label.length){var n=this.label.filter((function(e){return e.locale===t.defaultLocale||e.locale===r.Utils.getInexactLocale(t.defaultLocale)}))[0];n&&(n.value=e)}},e.prototype.getValue=function(){if(this.value){var e=this.defaultLocale;return this.label&&this.label.length&&this.label[0].locale&&(e=this.label[0].locale),r.LanguageMap.getValue(this.value,e)}return null},e.prototype.setValue=function(e){var t=this;if(this.value&&this.value.length){var n=this.value.filter((function(e){return e.locale===t.defaultLocale||e.locale===r.Utils.getInexactLocale(t.defaultLocale)}))[0];n&&(n.value=e)}},e}();t.LabelValuePair=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Language=function(e,t){Array.isArray(e)?1===e.length?this.value=e[0]:this.value=e.join("<br/>"):this.value=e,this.locale=t}},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.parse=function(e,t){var n,r=[];if(!e)return r;if(Array.isArray(e))for(var i=0;i<e.length;i++){var a=e[i];n="string"==typeof a?new o.Language(a,t):new o.Language(a["@value"],a["@language"]||t),r.push(n)}else{if("string"==typeof e)return n=new o.Language(e,t),r.push(n),r;e["@value"]?(n=new o.Language(e["@value"],e["@language"]||t),r.push(n)):Object.keys(e).forEach((function(t){if(!e[t].length)throw new Error("language must have a value");n=new o.Language(e[t],t),r.push(n)}))}return r},t.getValue=function(e,t){if(e.length){if(t){var n=e.filter((function(e){return e.locale===t||o.Utils.getInexactLocale(e.locale)===o.Utils.getInexactLocale(t)}))[0];if(n)return n.value}return e[0].value}return null},t}(Array);t.LanguageMap=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(0),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;if(r.index=0,r._allRanges=null,r.items=[],r._topRanges=[],r.__jsonld.structures&&r.__jsonld.structures.length)for(var i=r._getTopRanges(),o=0;o<i.length;o++){var a=i[o];r._parseRanges(a,String(o))}return r}return i(t,e),t.prototype.getPosterCanvas=function(){var e=this.getProperty("posterCanvas");return e&&(e=new a.Canvas(e,this.options)),e},t.prototype.getBehavior=function(){var e=this.getProperty("behavior");return Array.isArray(e)&&(e=e[0]),e||null},t.prototype.getDefaultTree=function(){if(e.prototype.getDefaultTree.call(this),this.defaultTree.data.type=a.Utils.normaliseType(a.TreeNodeType.MANIFEST),!this.isLoaded)return this.defaultTree;var t=this.getTopRanges();return t.length&&t[0].getTree(this.defaultTree),a.Utils.generateTreeNodeIds(this.defaultTree),this.defaultTree},t.prototype._getTopRanges=function(){var e=[];if(this.__jsonld.structures&&this.__jsonld.structures.length){for(var t=0;t<this.__jsonld.structures.length;t++){var n=this.__jsonld.structures[t];n.viewingHint===o.ViewingHint.TOP&&e.push(n)}if(!e.length){var r={};r.ranges=this.__jsonld.structures,e.push(r)}}return e},t.prototype.getTopRanges=function(){return this._topRanges},t.prototype._getRangeById=function(e){if(this.__jsonld.structures&&this.__jsonld.structures.length)for(var t=0;t<this.__jsonld.structures.length;t++){var n=this.__jsonld.structures[t];if(n["@id"]===e||n.id===e)return n}return null},t.prototype._parseRanges=function(e,t,n){var r,i=null;if("string"==typeof e&&(i=e,e=this._getRangeById(i)),e){(r=new a.Range(e,this.options)).parentRange=n,r.path=t,n?n.items.push(r):this._topRanges.push(r);var o=e.items||e.members;if(o)for(var s=0;s<o.length;s++){var u=o[s];if(u["@type"]&&"sc:range"===u["@type"].toLowerCase()||u.type&&"range"===u.type.toLowerCase())this._parseRanges(u,t+"/"+s,r);else if(u["@type"]&&"sc:canvas"===u["@type"].toLowerCase()||u.type&&"canvas"===u.type.toLowerCase()){r.canvases||(r.canvases=[]);var c=u.id||u["@id"];r.canvases.push(c)}}else if(e.ranges)for(s=0;s<e.ranges.length;s++)this._parseRanges(e.ranges[s],t+"/"+s,r)}else console.warn("Range:",i,"does not exist")},t.prototype.getAllRanges=function(){if(null!=this._allRanges)return this._allRanges;this._allRanges=[];for(var e=this.getTopRanges(),t=function(t){var r=e[t];r.id&&n._allRanges.push(r);var i=function(e,t){e.add(t);var n=t.getRanges();return n.length?n.reduce(i,e):e},o=Array.from(r.getRanges().reduce(i,new Set));n._allRanges=n._allRanges.concat(o)},n=this,r=0;r<e.length;r++)t(r);return this._allRanges},t.prototype.getRangeById=function(e){for(var t=this.getAllRanges(),n=0;n<t.length;n++){var r=t[n];if(r.id===e)return r}return null},t.prototype.getRangeByPath=function(e){for(var t=this.getAllRanges(),n=0;n<t.length;n++){var r=t[n];if(r.path===e)return r}return null},t.prototype.getSequences=function(){if(this.items.length)return this.items;var e=this.__jsonld.mediaSequences||this.__jsonld.sequences;if(e)for(var t=0;t<e.length;t++){var n=e[t],r=new a.Sequence(n,this.options);this.items.push(r)}else this.__jsonld.items&&(r=new a.Sequence(this.__jsonld.items,this.options),this.items.push(r));return this.items},t.prototype.getSequenceByIndex=function(e){return this.getSequences()[e]},t.prototype.getTotalSequences=function(){return this.getSequences().length},t.prototype.getManifestType=function(){var e=this.getService(o.ServiceProfile.UI_EXTENSIONS);return e?e.getProperty("manifestType"):a.ManifestType.EMPTY},t.prototype.isMultiSequence=function(){return this.getTotalSequences()>1},t.prototype.isPagingEnabled=function(){var e=this.getViewingHint();if(e)return e===o.ViewingHint.PAGED;var t=this.getBehavior();return!!t&&t===o.Behavior.PAGED},t.prototype.getViewingDirection=function(){return this.getProperty("viewingDirection")},t.prototype.getViewingHint=function(){return this.getProperty("viewingHint")},t}(a.IIIFResource);t.Manifest=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.EMPTY="",e.MANUSCRIPT="manuscript",e.MONOGRAPH="monograph"}(t.ManifestType||(t.ManifestType={}))},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n(1),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r._ranges=null,r.canvases=null,r.items=[],r}return i(t,e),t.prototype.getCanvasIds=function(){return this.__jsonld.canvases?this.__jsonld.canvases:this.canvases?this.canvases:[]},t.prototype.getDuration=function(){var e,t;if(this.canvases&&this.canvases.length)for(var n=0;n<this.canvases.length;n++){var r=this.canvases[n],i=o.Utils.getTemporalComponent(r);i&&i.length>1&&(0===n&&(e=Number(i[0])),n===this.canvases.length-1&&(t=Number(i[1])))}else{var a=this.getRanges();for(n=0;n<a.length;n++){var s=a[n].getDuration();s&&(0===n&&(e=s.start),n===a.length-1&&(t=s.end))}}if(void 0!==e&&void 0!==t)return new o.Duration(e,t)},t.prototype.getRanges=function(){return this._ranges?this._ranges:this._ranges=this.items.filter((function(e){return e.isRange()}))},t.prototype.getBehavior=function(){var e=this.getProperty("behavior");return Array.isArray(e)&&(e=e[0]),e||null},t.prototype.getViewingDirection=function(){return this.getProperty("viewingDirection")},t.prototype.getViewingHint=function(){return this.getProperty("viewingHint")},t.prototype.getTree=function(e){e.data=this,this.treeNode=e;var t=this.getRanges();if(t&&t.length)for(var n=0;n<t.length;n++){var r=t[n],i=new o.TreeNode;e.addNode(i),this._parseTreeNode(i,r)}return o.Utils.generateTreeNodeIds(e),e},t.prototype.spansTime=function(e){var t=this.getDuration();return!!(t&&e>=t.start&&e<=t.end)},t.prototype._parseTreeNode=function(e,t){e.label=o.LanguageMap.getValue(t.getLabel(),this.options.locale),e.data=t,e.data.type=o.Utils.normaliseType(o.TreeNodeType.RANGE),t.treeNode=e;var n=t.getRanges();if(n&&n.length)for(var r=0;r<n.length;r++){var i=n[r];if(i.getBehavior()!==a.Behavior.NO_NAV){var s=new o.TreeNode;e.addNode(s),this._parseTreeNode(s,i)}}},t}(o.ManifestResource);t.Range=s},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getFormat=function(){return this.getProperty("format")},t}(n(0).ManifestResource);t.Rendering=o},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=n(0),s=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.items=[],r._thumbnails=null,r}return i(t,e),t.prototype.getCanvases=function(){if(this.items.length)return this.items;var e=this.__jsonld.canvases||this.__jsonld.elements;if(e)for(var t=0;t<e.length;t++){var n=e[t];(r=new a.Canvas(n,this.options)).index=t,this.items.push(r)}else if(this.__jsonld)for(t=0;t<this.__jsonld.length;t++){var r;n=this.__jsonld[t],(r=new a.Canvas(n,this.options)).index=t,this.items.push(r)}return this.items},t.prototype.getCanvasById=function(e){for(var t=0;t<this.getTotalCanvases();t++){var n=this.getCanvasByIndex(t),r=a.Utils.normaliseUrl(n.id);if(a.Utils.normaliseUrl(e)===r)return n}return null},t.prototype.getCanvasByIndex=function(e){return this.getCanvases()[e]},t.prototype.getCanvasIndexById=function(e){for(var t=0;t<this.getTotalCanvases();t++)if(this.getCanvasByIndex(t).id===e)return t;return null},t.prototype.getCanvasIndexByLabel=function(e,t){e=e.trim(),isNaN(e)||(e=parseInt(e,10).toString(),t&&(e+="r"));for(var n,r,i,o=/(\d*)\D+(\d*)/,s=0;s<this.getTotalCanvases();s++){var u=this.getCanvasByIndex(s);if(a.LanguageMap.getValue(u.getLabel(),this.options.locale)===e)return s;if((n=o.exec(e))&&(r=n[1],(i=n[2])&&new RegExp("^"+r+"\\D+"+i+"$").test(u.getLabel().toString())))return s}return-1},t.prototype.getLastCanvasLabel=function(e){for(var t=this.getTotalCanvases()-1;t>=0;t--){var n=this.getCanvasByIndex(t),r=a.LanguageMap.getValue(n.getLabel(),this.options.locale);if(e){if(/^[a-zA-Z0-9]*$/.test(r))return r}else if(r)return r}return this.options.defaultLabel},t.prototype.getLastPageIndex=function(){return this.getTotalCanvases()-1},t.prototype.getNextPageIndex=function(e,t){var n;if(t){var r=this.getPagedIndices(e),i=this.getViewingDirection();n=i&&i===o.ViewingDirection.RIGHT_TO_LEFT?r[0]+1:r[r.length-1]+1}else n=e+1;return n>this.getLastPageIndex()?-1:n},t.prototype.getPagedIndices=function(e,t){var n=[];if(t){n=this.isFirstCanvas(e)||this.isLastCanvas(e)?[e]:e%2?[e,e+1]:[e-1,e];var r=this.getViewingDirection();r&&r===o.ViewingDirection.RIGHT_TO_LEFT&&(n=n.reverse())}else n.push(e);return n},t.prototype.getPrevPageIndex=function(e,t){var n;if(t){var r=this.getPagedIndices(e),i=this.getViewingDirection();n=i&&i===o.ViewingDirection.RIGHT_TO_LEFT?r[r.length-1]-1:r[0]-1}else n=e-1;return n},t.prototype.getStartCanvasIndex=function(){var e=this.getStartCanvas();if(e)for(var t=0;t<this.getTotalCanvases();t++)if(this.getCanvasByIndex(t).id===e)return t;return 0},t.prototype.getThumbs=function(e,t){for(var n=[],r=this.getTotalCanvases(),i=0;i<r;i++){var o=this.getCanvasByIndex(i),s=new a.Thumb(e,o);n.push(s)}return n},t.prototype.getThumbnails=function(){if(null!=this._thumbnails)return this._thumbnails;this._thumbnails=[];for(var e=this.getCanvases(),t=0;t<e.length;t++){var n=e[t].getThumbnail();n&&this._thumbnails.push(n)}return this._thumbnails},t.prototype.getStartCanvas=function(){return this.getProperty("startCanvas")},t.prototype.getTotalCanvases=function(){return this.getCanvases().length},t.prototype.getViewingDirection=function(){return this.getProperty("viewingDirection")?this.getProperty("viewingDirection"):this.options.resource.getViewingDirection?this.options.resource.getViewingDirection():null},t.prototype.getViewingHint=function(){return this.getProperty("viewingHint")},t.prototype.isCanvasIndexOutOfRange=function(e){return e>this.getTotalCanvases()-1},t.prototype.isFirstCanvas=function(e){return 0===e},t.prototype.isLastCanvas=function(e){return e===this.getTotalCanvases()-1},t.prototype.isMultiCanvas=function(){return this.getTotalCanvases()>1},t.prototype.isPagingEnabled=function(){var e=this.getViewingHint();return!!e&&e===o.ViewingHint.PAGED},t.prototype.isTotalCanvasesEven=function(){return this.getTotalCanvases()%2==0},t}(a.ManifestResource);t.Sequence=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(){}return e.parse=function(e,t){return"string"==typeof e&&(e=JSON.parse(e)),this.parseJson(e,t)},e.parseJson=function(e,t){var n;if(t&&t.navDate&&!isNaN(t.navDate.getTime())&&(e.navDate=t.navDate.toString()),e["@type"])switch(e["@type"]){case"sc:Collection":n=this.parseCollection(e,t);break;case"sc:Manifest":n=this.parseManifest(e,t);break;default:return null}else switch(e.type){case"Collection":n=this.parseCollection(e,t);break;case"Manifest":n=this.parseManifest(e,t);break;default:return null}return n.isLoaded=!0,n},e.parseCollection=function(e,t){var n=new r.Collection(e,t);return t?(n.index=t.index||0,t.resource&&(n.parentCollection=t.resource.parentCollection)):n.index=0,this.parseCollections(n,t),this.parseManifests(n,t),this.parseItems(n,t),n},e.parseCollections=function(e,t){var n;if(e.__jsonld.collections?n=e.__jsonld.collections:e.__jsonld.items&&(n=e.__jsonld.items.filter((function(e){return"collection"===e.type.toLowerCase()}))),n)for(var r=0;r<n.length;r++){t&&(t.index=r);var i=this.parseCollection(n[r],t);i.index=r,i.parentCollection=e,e.items.push(i)}},e.parseManifest=function(e,t){return new r.Manifest(e,t)},e.parseManifests=function(e,t){var n;if(e.__jsonld.manifests?n=e.__jsonld.manifests:e.__jsonld.items&&(n=e.__jsonld.items.filter((function(e){return"manifest"===e.type.toLowerCase()}))),n)for(var r=0;r<n.length;r++){var i=this.parseManifest(n[r],t);i.index=r,i.parentCollection=e,e.items.push(i)}},e.parseItem=function(e,t){if(e["@type"]){if("sc:manifest"===e["@type"].toLowerCase())return this.parseManifest(e,t);if("sc:collection"===e["@type"].toLowerCase())return this.parseCollection(e,t)}else if(e.type){if("manifest"===e.type.toLowerCase())return this.parseManifest(e,t);if("collection"===e.type.toLowerCase())return this.parseCollection(e,t)}return null},e.parseItems=function(e,t){var n=e.__jsonld.members||e.__jsonld.items;if(n)for(var r=function(r){t&&(t.index=r);var o=i.parseItem(n[r],t);return o?e.items.filter((function(e){return e.id===o.id}))[0]?"continue":(o.index=r,o.parentCollection=e,void e.items.push(o)):{value:void 0}},i=this,o=0;o<n.length;o++){var a=r(o);if("object"==typeof a)return a.value}},e}();t.Deserialiser=i},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t.prototype.getProfile=function(){var e=this.getProperty("profile");return e||(e=this.getProperty("dcterms:conformsTo")),Array.isArray(e)?e[0]:e},t.prototype.getConfirmLabel=function(){return o.Utils.getLocalisedValue(this.getProperty("confirmLabel"),this.options.locale)},t.prototype.getDescription=function(){return o.Utils.getLocalisedValue(this.getProperty("description"),this.options.locale)},t.prototype.getFailureDescription=function(){return o.Utils.getLocalisedValue(this.getProperty("failureDescription"),this.options.locale)},t.prototype.getFailureHeader=function(){return o.Utils.getLocalisedValue(this.getProperty("failureHeader"),this.options.locale)},t.prototype.getHeader=function(){return o.Utils.getLocalisedValue(this.getProperty("header"),this.options.locale)},t.prototype.getServiceLabel=function(){return o.Utils.getLocalisedValue(this.getProperty("label"),this.options.locale)},t.prototype.getInfoUri=function(){var e=this.id;return e.endsWith("/")||(e+="/"),e+"info.json"},t}(o.ManifestResource);t.Service=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Size=function(e,t){this.width=e,this.height=t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.AUTHORIZATION_FAILED=1]="AUTHORIZATION_FAILED",e[e.FORBIDDEN=2]="FORBIDDEN",e[e.INTERNAL_SERVER_ERROR=3]="INTERNAL_SERVER_ERROR",e[e.RESTRICTED=4]="RESTRICTED"}(t.StatusCode||(t.StatusCode={}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.Thumb=function(e,t){this.data=t,this.index=t.index,this.width=e;var n=t.getHeight()/t.getWidth();this.height=n?Math.floor(this.width*n):e,this.uri=t.getCanonicalImageUri(e),this.label=r.LanguageMap.getValue(t.getLabel())}},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,n){return e.call(this,t,n)||this}return i(t,e),t}(n(0).Resource);t.Thumbnail=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(){function e(e,t){this.label=e,this.data=t||{},this.nodes=[]}return e.prototype.addNode=function(e){this.nodes.push(e),e.parentNode=this},e.prototype.isCollection=function(){return this.data.type===r.Utils.normaliseType(r.TreeNodeType.COLLECTION)},e.prototype.isManifest=function(){return this.data.type===r.Utils.normaliseType(r.TreeNodeType.MANIFEST)},e.prototype.isRange=function(){return this.data.type===r.Utils.normaliseType(r.TreeNodeType.RANGE)},e}();t.TreeNode=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.COLLECTION="collection",e.MANIFEST="manifest",e.RANGE="range"}(t.TreeNodeType||(t.TreeNodeType={}))},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CONTINUE=100,t.SWITCHING_PROTOCOLS=101,t.PROCESSING=102,t.OK=200,t.CREATED=201,t.ACCEPTED=202,t.NON_AUTHORITATIVE_INFORMATION=203,t.NO_CONTENT=204,t.RESET_CONTENT=205,t.PARTIAL_CONTENT=206,t.MULTI_STATUS=207,t.MULTIPLE_CHOICES=300,t.MOVED_PERMANENTLY=301,t.MOVED_TEMPORARILY=302,t.SEE_OTHER=303,t.NOT_MODIFIED=304,t.USE_PROXY=305,t.TEMPORARY_REDIRECT=307,t.BAD_REQUEST=400,t.UNAUTHORIZED=401,t.PAYMENT_REQUIRED=402,t.FORBIDDEN=403,t.NOT_FOUND=404,t.METHOD_NOT_ALLOWED=405,t.NOT_ACCEPTABLE=406,t.PROXY_AUTHENTICATION_REQUIRED=407,t.REQUEST_TIME_OUT=408,t.CONFLICT=409,t.GONE=410,t.LENGTH_REQUIRED=411,t.PRECONDITION_FAILED=412,t.REQUEST_ENTITY_TOO_LARGE=413,t.REQUEST_URI_TOO_LARGE=414,t.UNSUPPORTED_MEDIA_TYPE=415,t.REQUESTED_RANGE_NOT_SATISFIABLE=416,t.EXPECTATION_FAILED=417,t.IM_A_TEAPOT=418,t.UNPROCESSABLE_ENTITY=422,t.LOCKED=423,t.FAILED_DEPENDENCY=424,t.UNORDERED_COLLECTION=425,t.UPGRADE_REQUIRED=426,t.PRECONDITION_REQUIRED=428,t.TOO_MANY_REQUESTS=429,t.REQUEST_HEADER_FIELDS_TOO_LARGE=431,t.INTERNAL_SERVER_ERROR=500,t.NOT_IMPLEMENTED=501,t.BAD_GATEWAY=502,t.SERVICE_UNAVAILABLE=503,t.GATEWAY_TIME_OUT=504,t.HTTP_VERSION_NOT_SUPPORTED=505,t.VARIANT_ALSO_NEGOTIATES=506,t.INSUFFICIENT_STORAGE=507,t.BANDWIDTH_LIMIT_EXCEEDED=509,t.NOT_EXTENDED=510,t.NETWORK_AUTHENTICATION_REQUIRED=511}])},function(e,t,n){e.exports=window.fetch||(window.fetch=n(3).default||n(3))}])},function(e,t,n){"use strict";n.r(t),n.d(t,"BaseComponent",(function(){return r}));var r=function(){function e(e){this.options=e,this.options.data=Object.assign({},this.data(),e.data)}return e.prototype._init=function(){return this.el=this.options.target,this.el?(this.el.innerHTML="",!0):(console.warn("element not found"),!1)},e.prototype.data=function(){return{}},e.prototype.on=function(e,t,n){var r=this._e||(this._e={});(r[e]||(r[e]=[])).push({fn:t,ctx:n})},e.prototype.fire=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=[].slice.call(arguments,1),i=((this._e||(this._e={}))[e]||[]).slice(),o=0,a=i.length;o<a;o++)i[o].fn.apply(i[o].ctx,r)},e.prototype._resize=function(){},e.prototype.set=function(e){},e}()},function(e,t,n){"use strict";n.r(t),n.d(t,"Async",(function(){return i})),n.d(t,"Bools",(function(){return o})),n.d(t,"Clipboard",(function(){return a})),n.d(t,"Colors",(function(){return s})),n.d(t,"Dates",(function(){return u})),n.d(t,"Device",(function(){return c})),n.d(t,"Documents",(function(){return l})),n.d(t,"Events",(function(){return p})),n.d(t,"Files",(function(){return f})),n.d(t,"Keyboard",(function(){return h})),n.d(t,"Maths",(function(){return d})),n.d(t,"Size",(function(){return _})),n.d(t,"Dimensions",(function(){return g})),n.d(t,"Numbers",(function(){return v})),n.d(t,"Objects",(function(){return y})),n.d(t,"Storage",(function(){return E})),n.d(t,"StorageItem",(function(){return m})),n.d(t,"StorageType",(function(){return r})),n.d(t,"Strings",(function(){return I})),n.d(t,"Urls",(function(){return O}));var r,i=function(){function e(){}return e.waitFor=function(t,n,r,i,o,a){i||(i=200),o||(o=100),a||(a=0),(a+=1)>o?r&&r():t()?n():setTimeout((function(){e.waitFor(t,n,r,i,o,a)}),i)},e}(),o=function(){function e(){}return e.getBool=function(e,t){return null==e?t:e},e}(),a=function(){function e(){}return e.supportsCopy=function(){return document.queryCommandSupported&&document.queryCommandSupported("copy")},e.copy=function(t){t=e.convertBrToNewLine(t);var n=document.createElement("textarea");n.value=t,e.hideButKeepEnabled(n),document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n)},e.hideButKeepEnabled=function(e){e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="2em",e.style.height="2em",e.style.padding="0",e.style.border="none",e.style.outline="none",e.style.boxShadow="none",e.style.background="transparent"},e.convertBrToNewLine=function(e){return e=e.replace(/<br\s*[\/]?>/gi,"\n")},e}(),s=function(){function e(){}return e.float32ColorToARGB=function(e){return[(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},e._componentToHex=function(e){var t=e.toString(16);return 1==t.length?"0"+t:t},e.rgbToHexString=function(t){return e.coalesce(t),"#"+e._componentToHex(t[0])+e._componentToHex(t[1])+e._componentToHex(t[2])},e.argbToHexString=function(t){return"#"+e._componentToHex(t[0])+e._componentToHex(t[1])+e._componentToHex(t[2])+e._componentToHex(t[3])},e.coalesce=function(e){for(var t=1;t<e.length;t++)void 0===e[t]&&(e[t]=e[t-1])},e}(),u=function(){function e(){}return e.getTimeStamp=function(){return(new Date).getTime()},e}(),c=function(){function e(){}return e.getPixelRatio=function(e){return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)},e.isTouch=function(){return!!("ontouchstart"in window)||window.navigator.msMaxTouchPoints>0},e}(),l=function(){function e(){}return e.isInIFrame=function(){try{return window.self!==window.top}catch(e){return!0}},e.supportsFullscreen=function(){var e=document.documentElement;return void 0!==(e.requestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullScreen||e.msRequestFullscreen)},e.isHidden=function(){return!!e.getHiddenProp()},e.getHiddenProp=function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null},e}(),p=function(){function e(){}return e.debounce=function(e,t){return t=t||100,function(){if(!e.debouncing){var n=Array.prototype.slice.apply(arguments);e.lastReturnVal=e.apply(window,n),e.debouncing=!0}return clearTimeout(e.debounceTimeout),e.debounceTimeout=setTimeout((function(){e.debouncing=!1}),t),e.lastReturnVal}},e}(),f=function(){function e(){}return e.simplifyMimeType=function(e){switch(e){case"text/plain":return"txt";case"image/jpeg":return"jpg";case"application/msword":return"doc";case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";default:var t=e.split("/");return t[t.length-1]}},e}(),h=function(){function e(){}return e.getCharCode=function(e){return"number"==typeof e.which?e.which:e.keyCode},e}(),d=function(){function e(){}return e.normalise=function(e,t,n){return(e-t)/(n-t)},e.median=function(e){e.sort((function(e,t){return e-t}));var t=Math.floor(e.length/2);return e.length%2?e[t]:(e[t-1]+e[t])/2},e.clamp=function(e,t,n){return Math.min(Math.max(e,t),n)},e}(),_=function(e,t){this.width=e,this.height=t},g=function(){function e(){}return e.fitRect=function(e,t,n,r){var i,o=0,a=0;return t/e<r/n?(o=e*(i=n/e),a=t*i):(o=e*(i=r/t),a=t*i),new _(Math.floor(o),Math.floor(a))},e.hitRect=function(e,t,n,r,i,o){return i>e&&i<e+n&&o>t&&o<t+r},e}(),v=function(){function e(){}return e.numericalInput=function(e){return 46==e.keyCode||8==e.keyCode||9==e.keyCode||27==e.keyCode||65==e.keyCode&&!0===e.ctrlKey||e.keyCode>=35&&e.keyCode<=39||(!(e.shiftKey||(e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105))||(e.preventDefault(),!1))},e}(),y=function(){function e(){}return e.toPlainObject=function(e){e=Object(e);var t={};for(var n in e)t[n]=e[n];return t},e}(),E=function(){function e(){}return e.clear=function(e){switch(void 0===e&&(e=r.MEMORY),e){case r.MEMORY:this._memoryStorage={};break;case r.SESSION:sessionStorage.clear();break;case r.LOCAL:localStorage.clear()}},e.clearExpired=function(e){void 0===e&&(e=r.MEMORY);for(var t=this.getItems(e),n=0;n<t.length;n++){var i=t[n];this._isExpired(i)&&this.remove(i.key)}},e.get=function(e,t){void 0===t&&(t=r.MEMORY);var n=null;switch(t){case r.MEMORY:n=this._memoryStorage[e];break;case r.SESSION:n=sessionStorage.getItem(e);break;case r.LOCAL:n=localStorage.getItem(e)}if(!n)return null;var i=null;try{i=JSON.parse(n)}catch(e){return null}return i?this._isExpired(i)?null:(i.key=e,i):null},e._isExpired=function(e){return!((new Date).getTime()<e.expiresAt)},e.getItems=function(e){void 0===e&&(e=r.MEMORY);var t=[];switch(e){case r.MEMORY:for(var n=Object.keys(this._memoryStorage),i=0;i<n.length;i++){(a=this.get(n[i],r.MEMORY))&&t.push(a)}break;case r.SESSION:for(i=0;i<sessionStorage.length;i++){if(o=sessionStorage.key(i))(a=this.get(o,r.SESSION))&&t.push(a)}break;case r.LOCAL:for(i=0;i<localStorage.length;i++){var o,a;if(o=localStorage.key(i))(a=this.get(o,r.LOCAL))&&t.push(a)}}return t},e.remove=function(e,t){switch(void 0===t&&(t=r.MEMORY),t){case r.MEMORY:delete this._memoryStorage[e];break;case r.SESSION:sessionStorage.removeItem(e);break;case r.LOCAL:localStorage.removeItem(e)}},e.set=function(e,t,n,i){void 0===i&&(i=r.MEMORY);var o=1e3*n,a=new m;switch(a.value=t,a.expiresAt=(new Date).getTime()+o,i){case r.MEMORY:this._memoryStorage[e]=JSON.stringify(a);break;case r.SESSION:sessionStorage.setItem(e,JSON.stringify(a));break;case r.LOCAL:localStorage.setItem(e,JSON.stringify(a))}return a},e._memoryStorage={},e}(),m=function(){};!function(e){e.MEMORY="memory",e.SESSION="session",e.LOCAL="local"}(r||(r={}));var I=function(){function e(){}return e.ellipsis=function(e,t){if(e.length<=t)return e;var n=e.substr(0,t),r=n.lastIndexOf(" ");return-1!=r&&(n=n.substr(0,Math.min(n.length,r))),n+"&hellip;"},e.htmlDecode=function(e){var t=document.createElement("div");return t.innerHTML=e,t.firstChild.nodeValue},e.format=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++){var i=new RegExp("\\{"+r+"\\}","gm");e=e.replace(i,t[r])}return e},e.isAlphanumeric=function(e){return/^[a-zA-Z0-9]*$/.test(e)},e.toCssClass=function(e){return e.replace(/[^a-z0-9]/g,(function(e){var t=e.charCodeAt(0);return 32==t?"-":t>=65&&t<=90?"_"+e.toLowerCase():"__"+("000"+t.toString(16)).slice(-4)}))},e.toFileName=function(e){return e.replace(/[^a-z0-9]/gi,"_").toLowerCase()},e.utf8_to_b64=function(e){return window.btoa(unescape(encodeURIComponent(e)))},e}(),O=function(){function e(){}return e.getHashParameter=function(e,t){return t||(t=window.document),t&&t.location?this.getHashParameterFromString(e,t.location.hash):null},e.getHashParameterFromString=function(e,t){var n=new RegExp("#.*[?&]"+e+"=([^&]+)(&|$)").exec(t);return n?decodeURIComponent(n[1].replace(/\+/g," ")):null},e.setHashParameter=function(e,t,n){if(n||(n=window.document),n&&n.location){var r="#?"+this.updateURIKeyValuePair(n.location.hash.replace("#?",""),e,t),i=n.URL;-1!=i.indexOf("#")&&(i=i.substr(0,i.indexOf("#"))),n.location.replace(i+r)}},e.getQuerystringParameter=function(e,t){return t||(t=window),this.getQuerystringParameterFromString(e,t.location.search)},e.getQuerystringParameterFromString=function(e,t){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return n?decodeURIComponent(n[1].replace(/\+/g," ")):null},e.setQuerystringParameter=function(e,t,n){if(n||(n=window.document),n&&n.location){var r=this.updateURIKeyValuePair(n.location.hash.replace("#?",""),e,t);window.location.search=r}},e.updateURIKeyValuePair=function(e,t,n){t=encodeURIComponent(t),n=encodeURIComponent(n);var r=e.split("&");""==r[0]&&r.shift();for(var i,o=r.length;o--;)if((i=r[o].split("="))[0]==t){i[1]=n,r[o]=i.join("=");break}return o<0&&(r[r.length]=[t,n].join("=")),r.join("&")},e.getUrlParts=function(e){var t=document.createElement("a");return t.href=e,t},e.convertToRelativeUrl=function(e){var t=this.getUrlParts(e),n=t.pathname+t.searchWithin;return n.startsWith("/")||(n="/"+n),n},e}()}])}));

/***/ }),

/***/ "./node_modules/cssfilter/lib/css.js":
/*!*******************************************!*\
  !*** ./node_modules/cssfilter/lib/css.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/cssfilter/lib/default.js");
var parseStyle = __webpack_require__(/*! ./parser */ "./node_modules/cssfilter/lib/parser.js");
var _ = __webpack_require__(/*! ./util */ "./node_modules/cssfilter/lib/util.js");


/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject (obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */
function FilterCSS (options) {
  options = shallowCopyObject(options || {});
  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onAttr = options.onAttr || DEFAULT.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  this.options = options;
}

FilterCSS.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;

  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
    value = safeAttrValue(name, value);
    if (!value) return;

    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {

      var ret = onAttr(name, value, opts);
      if (isNull(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }

    } else {

      var ret = onIgnoreAttr(name, value, opts);
      if (!isNull(ret)) {
        return ret;
      }

    }
  });

  return retCSS;
};


module.exports = FilterCSS;


/***/ }),

/***/ "./node_modules/cssfilter/lib/default.js":
/*!***********************************************!*\
  !*** ./node_modules/cssfilter/lib/default.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

function getDefaultWhiteList () {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};

  whiteList['align-content'] = false; // default: auto
  whiteList['align-items'] = false; // default: auto
  whiteList['align-self'] = false; // default: auto
  whiteList['alignment-adjust'] = false; // default: auto
  whiteList['alignment-baseline'] = false; // default: baseline
  whiteList['all'] = false; // default: depending on individual properties
  whiteList['anchor-point'] = false; // default: none
  whiteList['animation'] = false; // default: depending on individual properties
  whiteList['animation-delay'] = false; // default: 0
  whiteList['animation-direction'] = false; // default: normal
  whiteList['animation-duration'] = false; // default: 0
  whiteList['animation-fill-mode'] = false; // default: none
  whiteList['animation-iteration-count'] = false; // default: 1
  whiteList['animation-name'] = false; // default: none
  whiteList['animation-play-state'] = false; // default: running
  whiteList['animation-timing-function'] = false; // default: ease
  whiteList['azimuth'] = false; // default: center
  whiteList['backface-visibility'] = false; // default: visible
  whiteList['background'] = true; // default: depending on individual properties
  whiteList['background-attachment'] = true; // default: scroll
  whiteList['background-clip'] = true; // default: border-box
  whiteList['background-color'] = true; // default: transparent
  whiteList['background-image'] = true; // default: none
  whiteList['background-origin'] = true; // default: padding-box
  whiteList['background-position'] = true; // default: 0% 0%
  whiteList['background-repeat'] = true; // default: repeat
  whiteList['background-size'] = true; // default: auto
  whiteList['baseline-shift'] = false; // default: baseline
  whiteList['binding'] = false; // default: none
  whiteList['bleed'] = false; // default: 6pt
  whiteList['bookmark-label'] = false; // default: content()
  whiteList['bookmark-level'] = false; // default: none
  whiteList['bookmark-state'] = false; // default: open
  whiteList['border'] = true; // default: depending on individual properties
  whiteList['border-bottom'] = true; // default: depending on individual properties
  whiteList['border-bottom-color'] = true; // default: current color
  whiteList['border-bottom-left-radius'] = true; // default: 0
  whiteList['border-bottom-right-radius'] = true; // default: 0
  whiteList['border-bottom-style'] = true; // default: none
  whiteList['border-bottom-width'] = true; // default: medium
  whiteList['border-collapse'] = true; // default: separate
  whiteList['border-color'] = true; // default: depending on individual properties
  whiteList['border-image'] = true; // default: none
  whiteList['border-image-outset'] = true; // default: 0
  whiteList['border-image-repeat'] = true; // default: stretch
  whiteList['border-image-slice'] = true; // default: 100%
  whiteList['border-image-source'] = true; // default: none
  whiteList['border-image-width'] = true; // default: 1
  whiteList['border-left'] = true; // default: depending on individual properties
  whiteList['border-left-color'] = true; // default: current color
  whiteList['border-left-style'] = true; // default: none
  whiteList['border-left-width'] = true; // default: medium
  whiteList['border-radius'] = true; // default: 0
  whiteList['border-right'] = true; // default: depending on individual properties
  whiteList['border-right-color'] = true; // default: current color
  whiteList['border-right-style'] = true; // default: none
  whiteList['border-right-width'] = true; // default: medium
  whiteList['border-spacing'] = true; // default: 0
  whiteList['border-style'] = true; // default: depending on individual properties
  whiteList['border-top'] = true; // default: depending on individual properties
  whiteList['border-top-color'] = true; // default: current color
  whiteList['border-top-left-radius'] = true; // default: 0
  whiteList['border-top-right-radius'] = true; // default: 0
  whiteList['border-top-style'] = true; // default: none
  whiteList['border-top-width'] = true; // default: medium
  whiteList['border-width'] = true; // default: depending on individual properties
  whiteList['bottom'] = false; // default: auto
  whiteList['box-decoration-break'] = true; // default: slice
  whiteList['box-shadow'] = true; // default: none
  whiteList['box-sizing'] = true; // default: content-box
  whiteList['box-snap'] = true; // default: none
  whiteList['box-suppress'] = true; // default: show
  whiteList['break-after'] = true; // default: auto
  whiteList['break-before'] = true; // default: auto
  whiteList['break-inside'] = true; // default: auto
  whiteList['caption-side'] = false; // default: top
  whiteList['chains'] = false; // default: none
  whiteList['clear'] = true; // default: none
  whiteList['clip'] = false; // default: auto
  whiteList['clip-path'] = false; // default: none
  whiteList['clip-rule'] = false; // default: nonzero
  whiteList['color'] = true; // default: implementation dependent
  whiteList['color-interpolation-filters'] = true; // default: auto
  whiteList['column-count'] = false; // default: auto
  whiteList['column-fill'] = false; // default: balance
  whiteList['column-gap'] = false; // default: normal
  whiteList['column-rule'] = false; // default: depending on individual properties
  whiteList['column-rule-color'] = false; // default: current color
  whiteList['column-rule-style'] = false; // default: medium
  whiteList['column-rule-width'] = false; // default: medium
  whiteList['column-span'] = false; // default: none
  whiteList['column-width'] = false; // default: auto
  whiteList['columns'] = false; // default: depending on individual properties
  whiteList['contain'] = false; // default: none
  whiteList['content'] = false; // default: normal
  whiteList['counter-increment'] = false; // default: none
  whiteList['counter-reset'] = false; // default: none
  whiteList['counter-set'] = false; // default: none
  whiteList['crop'] = false; // default: auto
  whiteList['cue'] = false; // default: depending on individual properties
  whiteList['cue-after'] = false; // default: none
  whiteList['cue-before'] = false; // default: none
  whiteList['cursor'] = false; // default: auto
  whiteList['direction'] = false; // default: ltr
  whiteList['display'] = true; // default: depending on individual properties
  whiteList['display-inside'] = true; // default: auto
  whiteList['display-list'] = true; // default: none
  whiteList['display-outside'] = true; // default: inline-level
  whiteList['dominant-baseline'] = false; // default: auto
  whiteList['elevation'] = false; // default: level
  whiteList['empty-cells'] = false; // default: show
  whiteList['filter'] = false; // default: none
  whiteList['flex'] = false; // default: depending on individual properties
  whiteList['flex-basis'] = false; // default: auto
  whiteList['flex-direction'] = false; // default: row
  whiteList['flex-flow'] = false; // default: depending on individual properties
  whiteList['flex-grow'] = false; // default: 0
  whiteList['flex-shrink'] = false; // default: 1
  whiteList['flex-wrap'] = false; // default: nowrap
  whiteList['float'] = false; // default: none
  whiteList['float-offset'] = false; // default: 0 0
  whiteList['flood-color'] = false; // default: black
  whiteList['flood-opacity'] = false; // default: 1
  whiteList['flow-from'] = false; // default: none
  whiteList['flow-into'] = false; // default: none
  whiteList['font'] = true; // default: depending on individual properties
  whiteList['font-family'] = true; // default: implementation dependent
  whiteList['font-feature-settings'] = true; // default: normal
  whiteList['font-kerning'] = true; // default: auto
  whiteList['font-language-override'] = true; // default: normal
  whiteList['font-size'] = true; // default: medium
  whiteList['font-size-adjust'] = true; // default: none
  whiteList['font-stretch'] = true; // default: normal
  whiteList['font-style'] = true; // default: normal
  whiteList['font-synthesis'] = true; // default: weight style
  whiteList['font-variant'] = true; // default: normal
  whiteList['font-variant-alternates'] = true; // default: normal
  whiteList['font-variant-caps'] = true; // default: normal
  whiteList['font-variant-east-asian'] = true; // default: normal
  whiteList['font-variant-ligatures'] = true; // default: normal
  whiteList['font-variant-numeric'] = true; // default: normal
  whiteList['font-variant-position'] = true; // default: normal
  whiteList['font-weight'] = true; // default: normal
  whiteList['grid'] = false; // default: depending on individual properties
  whiteList['grid-area'] = false; // default: depending on individual properties
  whiteList['grid-auto-columns'] = false; // default: auto
  whiteList['grid-auto-flow'] = false; // default: none
  whiteList['grid-auto-rows'] = false; // default: auto
  whiteList['grid-column'] = false; // default: depending on individual properties
  whiteList['grid-column-end'] = false; // default: auto
  whiteList['grid-column-start'] = false; // default: auto
  whiteList['grid-row'] = false; // default: depending on individual properties
  whiteList['grid-row-end'] = false; // default: auto
  whiteList['grid-row-start'] = false; // default: auto
  whiteList['grid-template'] = false; // default: depending on individual properties
  whiteList['grid-template-areas'] = false; // default: none
  whiteList['grid-template-columns'] = false; // default: none
  whiteList['grid-template-rows'] = false; // default: none
  whiteList['hanging-punctuation'] = false; // default: none
  whiteList['height'] = true; // default: auto
  whiteList['hyphens'] = false; // default: manual
  whiteList['icon'] = false; // default: auto
  whiteList['image-orientation'] = false; // default: auto
  whiteList['image-resolution'] = false; // default: normal
  whiteList['ime-mode'] = false; // default: auto
  whiteList['initial-letters'] = false; // default: normal
  whiteList['inline-box-align'] = false; // default: last
  whiteList['justify-content'] = false; // default: auto
  whiteList['justify-items'] = false; // default: auto
  whiteList['justify-self'] = false; // default: auto
  whiteList['left'] = false; // default: auto
  whiteList['letter-spacing'] = true; // default: normal
  whiteList['lighting-color'] = true; // default: white
  whiteList['line-box-contain'] = false; // default: block inline replaced
  whiteList['line-break'] = false; // default: auto
  whiteList['line-grid'] = false; // default: match-parent
  whiteList['line-height'] = false; // default: normal
  whiteList['line-snap'] = false; // default: none
  whiteList['line-stacking'] = false; // default: depending on individual properties
  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
  whiteList['line-stacking-shift'] = false; // default: consider-shifts
  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
  whiteList['list-style'] = true; // default: depending on individual properties
  whiteList['list-style-image'] = true; // default: none
  whiteList['list-style-position'] = true; // default: outside
  whiteList['list-style-type'] = true; // default: disc
  whiteList['margin'] = true; // default: depending on individual properties
  whiteList['margin-bottom'] = true; // default: 0
  whiteList['margin-left'] = true; // default: 0
  whiteList['margin-right'] = true; // default: 0
  whiteList['margin-top'] = true; // default: 0
  whiteList['marker-offset'] = false; // default: auto
  whiteList['marker-side'] = false; // default: list-item
  whiteList['marks'] = false; // default: none
  whiteList['mask'] = false; // default: border-box
  whiteList['mask-box'] = false; // default: see individual properties
  whiteList['mask-box-outset'] = false; // default: 0
  whiteList['mask-box-repeat'] = false; // default: stretch
  whiteList['mask-box-slice'] = false; // default: 0 fill
  whiteList['mask-box-source'] = false; // default: none
  whiteList['mask-box-width'] = false; // default: auto
  whiteList['mask-clip'] = false; // default: border-box
  whiteList['mask-image'] = false; // default: none
  whiteList['mask-origin'] = false; // default: border-box
  whiteList['mask-position'] = false; // default: center
  whiteList['mask-repeat'] = false; // default: no-repeat
  whiteList['mask-size'] = false; // default: border-box
  whiteList['mask-source-type'] = false; // default: auto
  whiteList['mask-type'] = false; // default: luminance
  whiteList['max-height'] = true; // default: none
  whiteList['max-lines'] = false; // default: none
  whiteList['max-width'] = true; // default: none
  whiteList['min-height'] = true; // default: 0
  whiteList['min-width'] = true; // default: 0
  whiteList['move-to'] = false; // default: normal
  whiteList['nav-down'] = false; // default: auto
  whiteList['nav-index'] = false; // default: auto
  whiteList['nav-left'] = false; // default: auto
  whiteList['nav-right'] = false; // default: auto
  whiteList['nav-up'] = false; // default: auto
  whiteList['object-fit'] = false; // default: fill
  whiteList['object-position'] = false; // default: 50% 50%
  whiteList['opacity'] = false; // default: 1
  whiteList['order'] = false; // default: 0
  whiteList['orphans'] = false; // default: 2
  whiteList['outline'] = false; // default: depending on individual properties
  whiteList['outline-color'] = false; // default: invert
  whiteList['outline-offset'] = false; // default: 0
  whiteList['outline-style'] = false; // default: none
  whiteList['outline-width'] = false; // default: medium
  whiteList['overflow'] = false; // default: depending on individual properties
  whiteList['overflow-wrap'] = false; // default: normal
  whiteList['overflow-x'] = false; // default: visible
  whiteList['overflow-y'] = false; // default: visible
  whiteList['padding'] = true; // default: depending on individual properties
  whiteList['padding-bottom'] = true; // default: 0
  whiteList['padding-left'] = true; // default: 0
  whiteList['padding-right'] = true; // default: 0
  whiteList['padding-top'] = true; // default: 0
  whiteList['page'] = false; // default: auto
  whiteList['page-break-after'] = false; // default: auto
  whiteList['page-break-before'] = false; // default: auto
  whiteList['page-break-inside'] = false; // default: auto
  whiteList['page-policy'] = false; // default: start
  whiteList['pause'] = false; // default: implementation dependent
  whiteList['pause-after'] = false; // default: implementation dependent
  whiteList['pause-before'] = false; // default: implementation dependent
  whiteList['perspective'] = false; // default: none
  whiteList['perspective-origin'] = false; // default: 50% 50%
  whiteList['pitch'] = false; // default: medium
  whiteList['pitch-range'] = false; // default: 50
  whiteList['play-during'] = false; // default: auto
  whiteList['position'] = false; // default: static
  whiteList['presentation-level'] = false; // default: 0
  whiteList['quotes'] = false; // default: text
  whiteList['region-fragment'] = false; // default: auto
  whiteList['resize'] = false; // default: none
  whiteList['rest'] = false; // default: depending on individual properties
  whiteList['rest-after'] = false; // default: none
  whiteList['rest-before'] = false; // default: none
  whiteList['richness'] = false; // default: 50
  whiteList['right'] = false; // default: auto
  whiteList['rotation'] = false; // default: 0
  whiteList['rotation-point'] = false; // default: 50% 50%
  whiteList['ruby-align'] = false; // default: auto
  whiteList['ruby-merge'] = false; // default: separate
  whiteList['ruby-position'] = false; // default: before
  whiteList['shape-image-threshold'] = false; // default: 0.0
  whiteList['shape-outside'] = false; // default: none
  whiteList['shape-margin'] = false; // default: 0
  whiteList['size'] = false; // default: auto
  whiteList['speak'] = false; // default: auto
  whiteList['speak-as'] = false; // default: normal
  whiteList['speak-header'] = false; // default: once
  whiteList['speak-numeral'] = false; // default: continuous
  whiteList['speak-punctuation'] = false; // default: none
  whiteList['speech-rate'] = false; // default: medium
  whiteList['stress'] = false; // default: 50
  whiteList['string-set'] = false; // default: none
  whiteList['tab-size'] = false; // default: 8
  whiteList['table-layout'] = false; // default: auto
  whiteList['text-align'] = true; // default: start
  whiteList['text-align-last'] = true; // default: auto
  whiteList['text-combine-upright'] = true; // default: none
  whiteList['text-decoration'] = true; // default: none
  whiteList['text-decoration-color'] = true; // default: currentColor
  whiteList['text-decoration-line'] = true; // default: none
  whiteList['text-decoration-skip'] = true; // default: objects
  whiteList['text-decoration-style'] = true; // default: solid
  whiteList['text-emphasis'] = true; // default: depending on individual properties
  whiteList['text-emphasis-color'] = true; // default: currentColor
  whiteList['text-emphasis-position'] = true; // default: over right
  whiteList['text-emphasis-style'] = true; // default: none
  whiteList['text-height'] = true; // default: auto
  whiteList['text-indent'] = true; // default: 0
  whiteList['text-justify'] = true; // default: auto
  whiteList['text-orientation'] = true; // default: mixed
  whiteList['text-overflow'] = true; // default: clip
  whiteList['text-shadow'] = true; // default: none
  whiteList['text-space-collapse'] = true; // default: collapse
  whiteList['text-transform'] = true; // default: none
  whiteList['text-underline-position'] = true; // default: auto
  whiteList['text-wrap'] = true; // default: normal
  whiteList['top'] = false; // default: auto
  whiteList['transform'] = false; // default: none
  whiteList['transform-origin'] = false; // default: 50% 50% 0
  whiteList['transform-style'] = false; // default: flat
  whiteList['transition'] = false; // default: depending on individual properties
  whiteList['transition-delay'] = false; // default: 0s
  whiteList['transition-duration'] = false; // default: 0s
  whiteList['transition-property'] = false; // default: all
  whiteList['transition-timing-function'] = false; // default: ease
  whiteList['unicode-bidi'] = false; // default: normal
  whiteList['vertical-align'] = false; // default: baseline
  whiteList['visibility'] = false; // default: visible
  whiteList['voice-balance'] = false; // default: center
  whiteList['voice-duration'] = false; // default: auto
  whiteList['voice-family'] = false; // default: implementation dependent
  whiteList['voice-pitch'] = false; // default: medium
  whiteList['voice-range'] = false; // default: medium
  whiteList['voice-rate'] = false; // default: normal
  whiteList['voice-stress'] = false; // default: normal
  whiteList['voice-volume'] = false; // default: medium
  whiteList['volume'] = false; // default: medium
  whiteList['white-space'] = false; // default: normal
  whiteList['widows'] = false; // default: 2
  whiteList['width'] = true; // default: auto
  whiteList['will-change'] = false; // default: auto
  whiteList['word-break'] = true; // default: normal
  whiteList['word-spacing'] = true; // default: normal
  whiteList['word-wrap'] = true; // default: normal
  whiteList['wrap-flow'] = false; // default: auto
  whiteList['wrap-through'] = false; // default: wrap
  whiteList['writing-mode'] = false; // default: horizontal-tb
  whiteList['z-index'] = false; // default: auto

  return whiteList;
}


/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function safeAttrValue(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}


exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onAttr = onAttr;
exports.onIgnoreAttr = onIgnoreAttr;
exports.safeAttrValue = safeAttrValue;


/***/ }),

/***/ "./node_modules/cssfilter/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/cssfilter/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/cssfilter/lib/default.js");
var FilterCSS = __webpack_require__(/*! ./css */ "./node_modules/cssfilter/lib/css.js");


/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */
function filterCSS (html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
}


// 输出
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];

// 在浏览器端使用
if (typeof window !== 'undefined') {
  window.filterCSS = module.exports;
}


/***/ }),

/***/ "./node_modules/cssfilter/lib/parser.js":
/*!**********************************************!*\
  !*** ./node_modules/cssfilter/lib/parser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var _ = __webpack_require__(/*! ./util */ "./node_modules/cssfilter/lib/util.js");


/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */
function parseStyle (css, onAttr) {
  css = _.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _.trim(source.slice(0, j));
        var value = _.trim(source.slice(j + 1));
        // 必须有属性名称
        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }
    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) {
        // 在圆括号里面，忽略
      } else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _.trim(retCSS);
}

module.exports = parseStyle;


/***/ }),

/***/ "./node_modules/cssfilter/lib/util.js":
/*!********************************************!*\
  !*** ./node_modules/cssfilter/lib/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, '');
  }
};


/***/ }),

/***/ "./node_modules/xss/lib/default.js":
/*!*****************************************!*\
  !*** ./node_modules/xss/lib/default.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").FilterCSS;
var getDefaultCSSWhiteList = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").getDefaultWhiteList;
var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: ["autoplay", "controls", "loop", "preload", "src"],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
  };
}

var defaultCSSFilter = new FilterCSS();

/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default escapeHtml function
 *
 * @param {String} html
 */
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}

/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */
function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _.trim(value);
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    // `url()`
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

/**
 * escape doube quote
 *
 * @param {String} str
 * @return {String} str
 */
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}

/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}

/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}

/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _.trim(str2);
}

/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}

/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}

/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */
function onIgnoreTagStripAll() {
  return "";
}

/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function() {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function(tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function(html) {
      var rethtml = "";
      var lastPos = 0;
      _.forEach(removeList, function(pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    }
  };
}

/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */
function stripCommentTag(html) {
  return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
}
var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;

/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function(char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;
    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}

exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onTag = onTag;
exports.onIgnoreTag = onIgnoreTag;
exports.onTagAttr = onTagAttr;
exports.onIgnoreTagAttr = onIgnoreTagAttr;
exports.safeAttrValue = safeAttrValue;
exports.escapeHtml = escapeHtml;
exports.escapeQuote = escapeQuote;
exports.unescapeQuote = unescapeQuote;
exports.escapeHtmlEntities = escapeHtmlEntities;
exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
exports.friendlyAttrValue = friendlyAttrValue;
exports.escapeAttrValue = escapeAttrValue;
exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
exports.StripTagBody = StripTagBody;
exports.stripCommentTag = stripCommentTag;
exports.stripBlankChar = stripBlankChar;
exports.cssFilter = defaultCSSFilter;
exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;


/***/ }),

/***/ "./node_modules/xss/lib/index.js":
/*!***************************************!*\
  !*** ./node_modules/xss/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/xss/lib/default.js");
var parser = __webpack_require__(/*! ./parser */ "./node_modules/xss/lib/parser.js");
var FilterXSS = __webpack_require__(/*! ./xss */ "./node_modules/xss/lib/xss.js");

/**
 * filter xss function
 *
 * @param {String} html
 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
 * @return {String}
 */
function filterXSS(html, options) {
  var xss = new FilterXSS(options);
  return xss.process(html);
}

exports = module.exports = filterXSS;
exports.FilterXSS = FilterXSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];
for (var i in parser) exports[i] = parser[i];

// using `xss` on the browser, output `filterXSS` to the globals
if (typeof window !== "undefined") {
  window.filterXSS = module.exports;
}

// using `xss` on the WebWorker, output `filterXSS` to the globals
function isWorkerEnv() {
  return typeof self !== 'undefined' && typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}
if (isWorkerEnv()) {
  self.filterXSS = module.exports;
}


/***/ }),

/***/ "./node_modules/xss/lib/parser.js":
/*!****************************************!*\
  !*** ./node_modules/xss/lib/parser.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");

/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */
function getTagName(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    var tagName = html.slice(1, -1);
  } else {
    var tagName = html.slice(1, i + 1);
  }
  tagName = _.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}

/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */
function isClosing(html) {
  return html.slice(0, 2) === "</";
}

/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */
function parseTag(html, onTag, escapeHtml) {
  "user strict";

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);
    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if ((c === '"' || c === "'") && html.charAt(currentPos - 1) === "=") {
          quoteStart = c;
          continue;
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;

/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */
function parseAttr(html, onAttr) {
  "user strict";

  var lastPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastPos &&
        (c === '"' || c === "'") &&
        html.charAt(i - 1) === "="
      ) {
        j = html.indexOf(c, i + 1);
        if (j === -1) {
          break;
        } else {
          v = _.trim(html.slice(lastPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i);
        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);
        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
    }
  }

  return _.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

exports.parseTag = parseTag;
exports.parseAttr = parseAttr;


/***/ }),

/***/ "./node_modules/xss/lib/util.js":
/*!**************************************!*\
  !*** ./node_modules/xss/lib/util.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  indexOf: function(arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function(arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function(str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  }
};


/***/ }),

/***/ "./node_modules/xss/lib/xss.js":
/*!*************************************!*\
  !*** ./node_modules/xss/lib/xss.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").FilterCSS;
var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/xss/lib/default.js");
var parser = __webpack_require__(/*! ./parser */ "./node_modules/xss/lib/parser.js");
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");

/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === undefined || obj === null;
}

/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/"
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing
  };
}

/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList, onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */
function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }

  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}

/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */
FilterXSS.prototype.process = function(html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    var stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function(sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: whiteList.hasOwnProperty(tag)
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function(name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;
            return;
          }
        });

        // build new tag html
        var html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        var ret = onIgnoreTag(tag, html, info);
        if (!isNull(ret)) return ret;
        return escapeHtml(html);
      }
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

module.exports = FilterXSS;


/***/ })

}]);
//# sourceMappingURL=vendors~uv-aleph-extension~uv-default-extension~uv-ebook-extension~uv-mediaelement-extension~uv-mode~d6e026a8.2312ddf6bdeb3cbb8cab.js.map