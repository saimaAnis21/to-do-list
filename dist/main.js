/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./stylesheets/css-reset.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./stylesheets/css-reset.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n} /* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote::before,\\nblockquote::after,\\nq::before,\\nq::after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\na {\\n  color: #f1f3f2;\\n  text-decoration-line: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./stylesheets/css-reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./stylesheets/styles.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./stylesheets/styles.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".content {\\n  background-color: white;\\n  opacity: 0.5;\\n  width: 1200px;\\n  margin: auto;\\n  padding: 10px;\\n  margin-top: 10px;\\n  color: black;\\n  border: black;\\n  border-width: 2px;\\n  border-style: groove;\\n}\\n\\n#disptbl {\\n  border: black;\\n  border-width: 2px;\\n  border-style: solid;\\n  width: 100%;\\n}\\n\\n#disptbl tr td {\\n  text-align: center;\\n  padding: 10px;\\n}\\n\\n#disptbl tr th {\\n  padding: 10px;\\n}\\n\\n#todo {\\n  margin-top: 10px;\\n}\\n\\n#todo-btn {\\n  margin-top: 10px;\\n  margin-left: 10px;\\n  margin-bottom: 10px;\\n}\\n\\n.color-black {\\n  color: black;\\n}\\n\\n.mr-10 {\\n  margin-right: 10px;\\n}\\n\\n.mt-10 {\\n  margin-top: 10px;\\n}\\n\\n.mb-10 {\\n  margin-bottom: 10px;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.border-deco {\\n  border: black;\\n  border-width: 2px;\\n  border-style: solid;\\n}\\n\\n.float-r {\\n  float: right;\\n}\\n\\n.w-100px {\\n  width: 100px;\\n}\\n\\n.w-50px {\\n  width: 70px;\\n}\\n\\n.w-120px {\\n  width: 120px;\\n}\\n\\n.p-10 {\\n  padding: 10px;\\n}\\n\\n.txt-align-c {\\n  text-align: center;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./stylesheets/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./stylesheets/css-reset.css":
/*!***********************************!*\
  !*** ./stylesheets/css-reset.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./css-reset.css */ \"./node_modules/css-loader/dist/cjs.js!./stylesheets/css-reset.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_css_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://to-do-list/./stylesheets/css-reset.css?");

/***/ }),

/***/ "./stylesheets/styles.css":
/*!********************************!*\
  !*** ./stylesheets/styles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./stylesheets/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://to-do-list/./stylesheets/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/DOMelements.js":
/*!****************************!*\
  !*** ./src/DOMelements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contentdiv\": () => (/* binding */ contentdiv),\n/* harmony export */   \"tododiv\": () => (/* binding */ tododiv),\n/* harmony export */   \"formdiv\": () => (/* binding */ formdiv),\n/* harmony export */   \"newitembtn\": () => (/* binding */ newitembtn),\n/* harmony export */   \"newprojbtn\": () => (/* binding */ newprojbtn),\n/* harmony export */   \"projinput\": () => (/* binding */ projinput),\n/* harmony export */   \"newprojdiv\": () => (/* binding */ newprojdiv)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\nconst contentdiv = document.querySelector('.content');\n\nconst form = (0,_form__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst formdiv = document.createElement('div');\nformdiv.setAttribute('class', 'border-deco p-10');\nformdiv.appendChild(form);\n\nconst tododiv = document.createElement('div');\ntododiv.setAttribute('id', 'todo');\n\nconst newitembtn = document.createElement('button');\nnewitembtn.setAttribute('id', 'todo-btn');\nnewitembtn.setAttribute('class', 'float-r');\nnewitembtn.innerText = 'Create new Item';\n\n\nconst newprojdiv = document.createElement('div');\nnewprojdiv.setAttribute('id', 'newprojdiv');\nnewprojdiv.setAttribute('class', 'border-deco p-10 mb-10 txt-align-c');\n\nconst newprojbtn = document.createElement('button');\nnewprojbtn.setAttribute('id', 'newproj-btn');\nnewprojbtn.setAttribute('class', 'mr-10');\nnewprojbtn.innerText = 'Add New Project';\n\nconst projinput = document.createElement('input');\nprojinput.setAttribute('id', 'projinput');\nprojinput.setAttribute('type', 'text');\n\nnewprojdiv.appendChild(newprojbtn);\nnewprojdiv.appendChild(projinput);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/DOMelements.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createForm() {\n  const form = document.createElement('form');\n  // form.setAttribute(\"method\",\"post\");\n  // Title\n  const titlelabel = document.createElement('label');\n  titlelabel.innerText = 'Title: ';\n\n  const titleinput = document.createElement('input');\n  titleinput.setAttribute('id', 'title');\n  titleinput.setAttribute('type', 'text');\n  titleinput.setAttribute('name', 'title');\n  titleinput.setAttribute('placeholder', 'Title of Task');\n  titleinput.setAttribute('required', 'true');\n  titleinput.setAttribute('maxlength', '10');\n  titleinput.setAttribute('class', 'mr-10 w-100px');\n  // desc\n  const desclabel = document.createElement('label');\n  desclabel.innerText = 'Description: ';\n\n  const descinput = document.createElement('input');\n  descinput.setAttribute('id', 'desc');\n  descinput.setAttribute('type', 'text');\n  descinput.setAttribute('name', 'desc');\n  descinput.setAttribute('placeholder', 'Description of Task');\n  descinput.setAttribute('required', 'true');\n  descinput.setAttribute('maxlength', '50');\n  descinput.setAttribute('class', 'mr-10');\n\n  // due date\n\n  const datelabel = document.createElement('label');\n  datelabel.innerText = 'Due Date: ';\n\n  const dateinput = document.createElement('input');\n  dateinput.setAttribute('id', 'ddate');\n  dateinput.setAttribute('type', 'date');\n  dateinput.setAttribute('name', 'date');\n  dateinput.setAttribute('required', 'true');\n  dateinput.setAttribute('class', 'mr-10 w-120px');\n\n  // Priority\n  const prioritylabel = document.createElement('label');\n  prioritylabel.innerText = 'Priority: ';\n\n  const priorityinput = document.createElement('select');\n  priorityinput.setAttribute('id', 'priority');\n  priorityinput.setAttribute('name', 'priority');\n  priorityinput.setAttribute('class', 'mr-10 w-50px');\n\n  const optionhigh = document.createElement('option');\n  optionhigh.text = 'High';\n  optionhigh.value = 'high';\n\n  priorityinput.add(optionhigh);\n\n  const optionmed = document.createElement('option');\n  optionmed.text = 'Medium';\n  optionmed.value = 'medium';\n  optionmed.selected = 'true';\n  priorityinput.add(optionmed);\n\n  const optionlow = document.createElement('option');\n  optionlow.text = 'low';\n  optionlow.value = 'low';\n  priorityinput.add(optionlow);\n\n  const projlabel = document.createElement('label');\n  projlabel.setAttribute('id', 'projlabel');\n  projlabel.setAttribute('class', 'mr-10');\n  projlabel.innerText = 'Select Project: ';\n\n  const projcat = document.createElement('select');\n  projcat.setAttribute('id', 'projcat');\n  projcat.setAttribute('class', 'mr-10 ');\n\n  const submitbtn = document.createElement('input');\n  submitbtn.setAttribute('type', 'submit');\n  submitbtn.setAttribute('id', 'submitbtn');\n  submitbtn.value = 'Submit';\n\n  form.appendChild(projlabel);\n  form.appendChild(projcat);\n  form.appendChild(titlelabel);\n  form.appendChild(titleinput);\n  form.appendChild(desclabel);\n  form.appendChild(descinput);\n  form.appendChild(datelabel);\n  form.appendChild(dateinput);\n  form.appendChild(prioritylabel);\n  form.appendChild(priorityinput);\n  form.appendChild(submitbtn);\n\n  return form;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForm);\n\n//# sourceURL=webpack://to-do-list/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _proj_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proj_module */ \"./src/proj_module.js\");\n/* harmony import */ var _todoObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoObj */ \"./src/todoObj.js\");\n/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMelements */ \"./src/DOMelements.js\");\n/* harmony import */ var _stylesheets_css_reset_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stylesheets/css-reset.css */ \"./stylesheets/css-reset.css\");\n/* harmony import */ var _stylesheets_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stylesheets/styles.css */ \"./stylesheets/styles.css\");\n\n\n\n\n\n\n\nlet projlist = [];\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_3__.contentdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_3__.newprojdiv);\n_DOMelements__WEBPACK_IMPORTED_MODULE_3__.contentdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_3__.formdiv);\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_3__.contentdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_3__.tododiv);\n\nconst projcat = document.getElementById('projcat');\n\nconst populateProjcat = () => {\n  projcat.innerHTML = '';\n  for (let i = 0; i < projlist.length; i += 1) {\n    const cat = document.createElement('option');\n    cat.text = projlist[i].proj_name;\n    cat.value = projlist[i].proj_name;\n    projcat.add(cat);\n  }\n};\n\nconst newProj = () => {\n  const newproj = new _proj_module__WEBPACK_IMPORTED_MODULE_1__.default(_DOMelements__WEBPACK_IMPORTED_MODULE_3__.projinput.value);\n  projlist.push(newproj);\n  (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.SaveProjects)(projlist);\n  populateProjcat();\n};\n\nconst dispTaskItems = () => {\n  const tbl = document.createElement('table');\n  tbl.setAttribute('id', 'disptbl');\n  const trh = document.createElement('tr');\n  const th1 = document.createElement('th');\n  th1.innerText = 'Project';\n  const th2 = document.createElement('th');\n  th2.innerText = 'Title';\n  const th3 = document.createElement('th');\n  th3.innerText = 'Description';\n  const th4 = document.createElement('th');\n  th4.innerText = 'Due Date';\n  const th5 = document.createElement('th');\n  th5.innerText = 'Priority';\n  const th6 = document.createElement('th');\n  th6.innerText = 'Select for update';\n  const th7 = document.createElement('th');\n  th7.innerText = 'Delete';\n  trh.appendChild(th1);\n  trh.appendChild(th2);\n  trh.appendChild(th3);\n  trh.appendChild(th4);\n  trh.appendChild(th5);\n  trh.appendChild(th6);\n  trh.appendChild(th7);\n  tbl.appendChild(trh);\n\n  for (let i = projlist.length - 1; i >= 0; i -= 1) {\n    for (let j = projlist[i].todolist.length - 1; j >= 0; j -= 1) {\n      const tr = document.createElement('tr');\n      const td1 = document.createElement('td');\n      td1.innerText = `${projlist[i].proj_name}`;\n      const td2 = document.createElement('td');\n      td2.innerText = `${projlist[i].todolist[j].title}`;\n      const td3 = document.createElement('td');\n      td3.innerText = `${projlist[i].todolist[j].desc}`;\n      const td4 = document.createElement('td');\n      td4.innerText = `${projlist[i].todolist[j].ddate}`;\n      const td5 = document.createElement('td');\n      td5.innerText = `${projlist[i].todolist[j].priority}`;\n      const td6 = document.createElement('td');\n\n      const updbtn = document.createElement('button');\n      updbtn.hidden = true;\n      updbtn.setAttribute('class', 'updatebuttons');\n      updbtn.setAttribute('id', `updbtn${i}-${j}`);\n      updbtn.innerText = 'Update';\n      updbtn.addEventListener('click', () => { //eslint-disable-line\n        projlist[i].todolist[j].title = document.getElementById('title').value;\n        projlist[i].todolist[j].desc = document.getElementById('desc').value;\n        projlist[i].todolist[j].ddate = document.getElementById('ddate').value;\n        projlist[i].todolist[j].priority = document.getElementById('priority').value;\n        _DOMelements__WEBPACK_IMPORTED_MODULE_3__.newitembtn.hidden = false;\n        dispTaskItems();\n      });\n      const selectbtn = document.createElement('button');\n      selectbtn.setAttribute('id', `selectbtn${i}-${j}`);\n      selectbtn.innerText = 'Select';\n      selectbtn.addEventListener('click', () => { //eslint-disable-line\n        const updbuttons = document.getElementsByClassName('updatebuttons');\n        for (let x = 0; x < updbuttons.length; x += 1) {\n          updbuttons[x].hidden = true;\n        }\n        document.getElementById('title').value = projlist[i].todolist[j].title;\n        document.getElementById('desc').value = projlist[i].todolist[j].desc;\n        document.getElementById('ddate').value = projlist[i].todolist[j].ddate;\n        document.getElementById('priority').value = projlist[i].todolist[j].priority;\n\n        document.getElementById(`updbtn${i}-${j}`).hidden = false;\n        _DOMelements__WEBPACK_IMPORTED_MODULE_3__.newitembtn.hidden = true;\n      });\n\n      td6.appendChild(selectbtn);\n      td6.appendChild(updbtn);\n\n      const td7 = document.createElement('td');\n\n      const delbtn = document.createElement('button');\n      delbtn.setAttribute('id', `delbtn${i}-${j}`);\n      delbtn.innerText = 'Delete';\n      delbtn.addEventListener('click', () => {\n        deleteProjItem(i, j); //eslint-disable-line\n      });\n      td7.appendChild(delbtn);\n      tr.appendChild(td1);\n      tr.appendChild(td2);\n      tr.appendChild(td3);\n      tr.appendChild(td4);\n      tr.appendChild(td5);\n      tr.appendChild(td6);\n      tr.appendChild(td7);\n      tbl.appendChild(tr);\n    }\n  }\n\n  _DOMelements__WEBPACK_IMPORTED_MODULE_3__.tododiv.innerHTML = '';\n  _DOMelements__WEBPACK_IMPORTED_MODULE_3__.tododiv.appendChild(tbl);\n};\n\nconst deleteProjItem = (i, j) => {\n  projlist[i].todolist.splice(j, 1);\n  (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.SaveProjects)(projlist);\n  dispTaskItems();\n};\n\nconst addProjItem = () => {\n  const title = document.getElementById('title').value;\n  const desc = document.getElementById('desc').value;\n  const ddate = document.getElementById('ddate').value;\n  const priority = document.getElementById('priority').value;\n\n  const todoitem = (0,_todoObj__WEBPACK_IMPORTED_MODULE_2__.default)(title, desc, ddate, priority);\n  for (let i = 0; i < projlist.length; i += 1) {\n    if (projlist[i].proj_name === projcat.value) {\n      projlist[i].todolist.push(todoitem);\n    }\n  }\n  (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.SaveProjects)(projlist);\n  dispTaskItems();\n};\n\n\nprojlist = (0,_localstorage__WEBPACK_IMPORTED_MODULE_0__.GetProjects)();\n\nif (!projlist) {\n  const proj = new _proj_module__WEBPACK_IMPORTED_MODULE_1__.default('default');\n  projlist.push(proj);\n}\n\npopulateProjcat();\ndispTaskItems();\n\nconst submit = document.getElementById('submitbtn');\nsubmit.addEventListener('click', () => {\n  const title = document.getElementById('title').value;\n  const desc = document.getElementById('desc').value;\n  const ddate = document.getElementById('ddate').value;\n  if (title !== '' && desc !== '' && ddate !== '') {\n    addProjItem();\n  }\n});\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_3__.newprojbtn.addEventListener('click', () => {\n  newProj();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetProjects\": () => (/* binding */ GetProjects),\n/* harmony export */   \"SaveProjects\": () => (/* binding */ SaveProjects)\n/* harmony export */ });\nconst GetProjects = () => {\n  const str = localStorage.getItem('projlist');\n  const projlist = JSON.parse(str);\n  return projlist;\n};\n\nconst SaveProjects = (projlist) => {\n  const str = JSON.stringify(projlist);\n  localStorage.setItem('projlist', str);\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/localstorage.js?");

/***/ }),

/***/ "./src/proj_module.js":
/*!****************************!*\
  !*** ./src/proj_module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Project(projname) {\n  this.todolist = [];\n  this.proj_name = projname;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://to-do-list/./src/proj_module.js?");

/***/ }),

/***/ "./src/todoObj.js":
/*!************************!*\
  !*** ./src/todoObj.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ToDo = (title, desc, ddate, priority) => ({\n  title, desc, ddate, priority,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n//# sourceURL=webpack://to-do-list/./src/todoObj.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;