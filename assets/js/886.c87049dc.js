"use strict";
exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 5886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ themeTwilight$1)
/* harmony export */ });
/* harmony import */ var _index_a719f4c0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46294);


function _mergeNamespaces(n, m) {
            m.forEach(function (e) {
                        e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
                                    if (k !== 'default' && !(k in n)) {
                                                var d = Object.getOwnPropertyDescriptor(e, k);
                                                Object.defineProperty(n, k, d.get ? d : {
                                                            enumerable: true,
                                                            get: function () { return e[k]; }
                                                });
                                    }
                        });
            });
            return Object.freeze(n);
}

var themeTwilight = (0,_index_a719f4c0_js__WEBPACK_IMPORTED_MODULE_0__.c)(function (module, exports) {
ace.define("ace/theme/twilight",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-twilight";
exports.cssText = ".ace-twilight .ace_gutter {\
background: #232323;\
color: #E2E2E2\
}\
.ace-twilight .ace_print-margin {\
width: 1px;\
background: #232323\
}\
.ace-twilight {\
background-color: #141414;\
color: #F8F8F8\
}\
.ace-twilight .ace_cursor {\
color: #A7A7A7\
}\
.ace-twilight .ace_marker-layer .ace_selection {\
background: rgba(221, 240, 255, 0.20)\
}\
.ace-twilight.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #141414;\
}\
.ace-twilight .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-twilight .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(255, 255, 255, 0.25)\
}\
.ace-twilight .ace_marker-layer .ace_active-line {\
background: rgba(255, 255, 255, 0.031)\
}\
.ace-twilight .ace_gutter-active-line {\
background-color: rgba(255, 255, 255, 0.031)\
}\
.ace-twilight .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(221, 240, 255, 0.20)\
}\
.ace-twilight .ace_invisible {\
color: rgba(255, 255, 255, 0.25)\
}\
.ace-twilight .ace_keyword,\
.ace-twilight .ace_meta {\
color: #CDA869\
}\
.ace-twilight .ace_constant,\
.ace-twilight .ace_constant.ace_character,\
.ace-twilight .ace_constant.ace_character.ace_escape,\
.ace-twilight .ace_constant.ace_other,\
.ace-twilight .ace_heading,\
.ace-twilight .ace_markup.ace_heading,\
.ace-twilight .ace_support.ace_constant {\
color: #CF6A4C\
}\
.ace-twilight .ace_invalid.ace_illegal {\
color: #F8F8F8;\
background-color: rgba(86, 45, 86, 0.75)\
}\
.ace-twilight .ace_invalid.ace_deprecated {\
text-decoration: underline;\
font-style: italic;\
color: #D2A8A1\
}\
.ace-twilight .ace_support {\
color: #9B859D\
}\
.ace-twilight .ace_fold {\
background-color: #AC885B;\
border-color: #F8F8F8\
}\
.ace-twilight .ace_support.ace_function {\
color: #DAD085\
}\
.ace-twilight .ace_list,\
.ace-twilight .ace_markup.ace_list,\
.ace-twilight .ace_storage {\
color: #F9EE98\
}\
.ace-twilight .ace_entity.ace_name.ace_function,\
.ace-twilight .ace_meta.ace_tag {\
color: #AC885B\
}\
.ace-twilight .ace_string {\
color: #8F9D6A\
}\
.ace-twilight .ace_string.ace_regexp {\
color: #E9C062\
}\
.ace-twilight .ace_comment {\
font-style: italic;\
color: #5F5A60\
}\
.ace-twilight .ace_variable {\
color: #7587A6\
}\
.ace-twilight .ace_xml-pe {\
color: #494949\
}\
.ace-twilight .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQERFpYLC1tf0PAAgOAnPnhxyiAAAAAElFTkSuQmCC) right repeat-y\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass, false);
});                (function() {
                    ace.require(["ace/theme/twilight"], function(m) {
                        if (module) {
                            module.exports = m;
                        }
                    });
                })();
});

var themeTwilight$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
            __proto__: null,
            'default': themeTwilight
}, [themeTwilight]));


//# sourceMappingURL=theme-twilight-b60efbd6.js.map


/***/ })

};
;