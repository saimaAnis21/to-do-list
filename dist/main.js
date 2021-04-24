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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createForm(){\n    let form = document.createElement(\"form\");\n    form.setAttribute(\"method\",\"post\");\n// Title\n    let title_label= document.createElement(\"label\");\n    title_label.innerText=\"Title: \";\n\n    let title_input = document.createElement(\"input\");\n    title_input.setAttribute(\"id\", \"title\");\n    title_input.setAttribute(\"type\", \"text\");\n    title_input.setAttribute(\"name\", \"title\");\n    title_input.setAttribute(\"placeholder\", \"Title of Task\");\n    title_input.setAttribute(\"required\",\"true\");\n    title_input.setAttribute(\"maxlength\",\"10\");\n    title_input.setAttribute(\"class\",\"mr-10\");\n// desc\n    let desc_label= document.createElement(\"label\");\n    desc_label.innerText=\"Description: \";\n\n    let desc_input = document.createElement(\"input\");\n    desc_input.setAttribute(\"id\", \"desc\");\n    desc_input.setAttribute(\"type\", \"text\");\n    desc_input.setAttribute(\"name\", \"desc\");\n    desc_input.setAttribute(\"placeholder\", \"Description of Task\");\n    desc_input.setAttribute(\"required\",\"true\");\n    desc_input.setAttribute(\"maxlength\",\"50\");\n    desc_input.setAttribute(\"class\",\"mr-10\");\n\n//due date\n\nlet date_label= document.createElement(\"label\");\n    date_label.innerText=\"Due Date: \";\n\n    let date_input = document.createElement(\"input\");\n    date_input.setAttribute(\"id\", \"ddate\");\n    date_input.setAttribute(\"type\", \"date\");\n    date_input.setAttribute(\"name\", \"date\");    \n    date_input.setAttribute(\"required\",\"true\");\n    date_input.setAttribute(\"class\",\"mr-10\");\n\n//Priority\nlet priority_label= document.createElement(\"label\");\n    priority_label.innerText=\"Priority: \";\n\nlet priority_input = document.createElement(\"select\"); \n    priority_input.setAttribute(\"id\",\"priority\");\n    priority_input.setAttribute(\"name\",\"priority\");\n    priority_input.setAttribute(\"class\",\"mr-10\");\n    \nlet option_high = document.createElement(\"option\");\n    option_high.text = \"High\";\n    option_high.value = \"high\";\n    \n    priority_input.add(option_high);\n\nlet option_med = document.createElement(\"option\");\n    option_med.text = \"Medium\";\n    option_med.value = \"medium\";\n    option_med.selected = \"true\";\n    priority_input.add(option_med);\n\nlet option_low = document.createElement(\"option\");\n    option_low.text = \"low\";\n    option_low.value = \"low\";\n    priority_input.add(option_low);\n\nlet proj_cat = document.createElement(\"select\");\nproj_cat.setAttribute(\"id\",\"projcat\");\n\n    form.appendChild(title_label);\n    form.appendChild(title_input);\n    form.appendChild(desc_label);\n    form.appendChild(desc_input);\n    form.appendChild(date_label);\n    form.appendChild(date_input);\n    form.appendChild(priority_label);\n    form.appendChild(priority_input);\n    form.appendChild(proj_cat);\n    \n\n    return form;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForm);\n\n//# sourceURL=webpack://to-do-list/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _proj_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proj_module */ \"./src/proj_module.js\");\n/* harmony import */ var _todoObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoObj */ \"./src/todoObj.js\");\n\n\n\n\n\nlet content_div = document.querySelector(\".content\");\nlet projlist = []\nlet proj = new _proj_module__WEBPACK_IMPORTED_MODULE_1__.default(\"default\");\nprojlist.push(proj);\n\nlet todo_div = document.createElement(\"div\");\ntodo_div.setAttribute(\"id\",\"todo\");\n\n\nlet btn = document.createElement(\"button\");\n    btn.setAttribute(\"id\",\"todo-btn\");\n    btn.innerText=\"Create new task\";\n\nlet tododispbtn = document.createElement(\"button\");\n    tododispbtn.setAttribute(\"id\",\"tododisp-btn\");\n    tododispbtn.innerText=\"Show all tasks\";\n\nlet newprojbtn = document.createElement(\"button\");\n    newprojbtn.setAttribute(\"id\",\"newproj-btn\");\n    newprojbtn.innerText=\"Add New Project\";\n\nlet proj_input = document.createElement(\"input\");\nproj_input.setAttribute(\"id\",\"projinput\");\nproj_input.setAttribute(\"type\",\"text\");\n\nlet form = (0,_form__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n\nlet form_div = document.createElement(\"div\");\nform_div.appendChild(form);\n\ncontent_div.appendChild(proj_input);\ncontent_div.appendChild(newprojbtn);\ncontent_div.appendChild(tododispbtn);\ncontent_div.appendChild(form_div);\ncontent_div.appendChild(btn);\ncontent_div.appendChild(todo_div);\nlet proj_cat = document.getElementById(\"projcat\");\n\nlet populateProjcat = function(){\n    \n    \n        let cat = document.createElement(\"option\")\n        cat.text = projlist[projlist.length-1].proj_name;\n        cat.value = projlist[projlist.length-1].proj_name;\n        proj_cat.add(cat);\n\n    \n}\npopulateProjcat();\n\nlet deleteProjItem=function(i,j){\n   projlist[i].deleteItem(j);\n   dispTaskItems();\n}\n\nlet dispTaskItems = function(){\n    /*let txt = `<table id='disptbl'><tr><th>Project</th><th>Title</th>`;\n    txt = `${txt}<th>Description</th><th>Due Date</th><th>Priority</th><th>Update</th><th>Delete</th></tr>`;\n    for(let i = projlist.length-1; i >= 0; i -= 1){\n        for (let j = projlist[i].todolist.length -1; j >= 0; j -= 1) {\n            txt = `${txt}<tr><td>${projlist[i].proj_name}</td>`;\n            txt = `${txt}<td>${projlist[i].todolist[j].title}</td>`;\n            txt = `${txt}<td>${projlist[i].todolist[j].desc}</td>`;\n    \n            txt = `${txt}<td>${projlist[i].todolist[j].ddate}</td>`;\n            txt = `${txt}<td>${projlist[i].todolist[j].priority}</td>`;\n    \n            txt = `${txt}<td><button>Update</button></td>`;\n            txt = `${txt}<td><button id=''>delete</button></td></tr>`;\n          }\n          \n    }\n    txt += '</table>';\n    todo_div.innerHTML = txt;*/\n    let tbl = document.createElement(\"table\");\n    tbl.setAttribute(\"id\",\"disptbl\");\n    let trh = document.createElement(\"tr\");\n    let th1 = document.createElement(\"th\");\n    th1.innerText=\"Project\";\n    let th2 = document.createElement(\"th\");\n    th2.innerText=\"Title\";\n    let th3 = document.createElement(\"th\");\n    th3.innerText=\"Description\";\n    let th4 = document.createElement(\"th\");\n    th4.innerText=\"Due Date\";\n    let th5 = document.createElement(\"th\");\n    th5.innerText=\"Priority\";\n    let th6 = document.createElement(\"th\");\n    th6.innerText=\"Update\";\n    let th7 = document.createElement(\"th\");\n    th7.innerText=\"Delete\";\n    trh.appendChild(th1);\n    trh.appendChild(th2);\n    trh.appendChild(th3);\n    trh.appendChild(th4);\n    trh.appendChild(th5);\n    trh.appendChild(th6);\n    trh.appendChild(th7);\n    tbl.appendChild(trh);\n    \n    for(let i = projlist.length-1; i >= 0; i -= 1){\n        for (let j = projlist[i].todolist.length -1; j >= 0; j -= 1) {\n            \n            let tr= document.createElement(\"tr\");\n            let td1= document.createElement(\"td\");\n            td1.innerText=`${projlist[i].proj_name}`;\n            let td2= document.createElement(\"td\");\n            td2.innerText=`${projlist[i].todolist[j].title}`;\n            let td3= document.createElement(\"td\");\n            td3.innerText=`${projlist[i].todolist[j].desc}`;\n            let td4= document.createElement(\"td\");\n            td4.innerText=`${projlist[i].todolist[j].ddate}`\n            let td5= document.createElement(\"td\");\n            td5.innerText=`${projlist[i].todolist[j].priority}`;\n            let td6= document.createElement(\"td\");\n            td6.innerHTML = `<button>Update</button>`\n            let td7= document.createElement(\"td\");\n            \n            let delbtn = document.createElement(\"button\");\n            delbtn.setAttribute(\"id\",`delbtn${i}-${j}`);\n            delbtn.innerText=\"Delete\";\n            delbtn.addEventListener('click',() => {\n                deleteProjItem(i,j);\n            });\n            td7.appendChild(delbtn);\n            tr.appendChild(td1);\n            tr.appendChild(td2);\n            tr.appendChild(td3);\n            tr.appendChild(td4);\n            tr.appendChild(td5);\n            tr.appendChild(td6);\n            tr.appendChild(td7);\n            tbl.appendChild(tr);\n          }\n          \n    }\n\n    todo_div.innerHTML = \"\";\n    todo_div.appendChild(tbl);\n\n}\n\nbtn.addEventListener('click',() => {\n    let j =\"\";\n    let title = document.getElementById(\"title\").value;\n    let desc = document.getElementById(\"desc\").value;\n    let ddate = document.getElementById(\"ddate\").value;\n    let priority = document.getElementById(\"priority\").value;\n    \n    let todo_item = new _todoObj__WEBPACK_IMPORTED_MODULE_2__.default(title,desc,ddate,priority);\n    for(let i=0; i<projlist.length; i+=1){\n        if(projlist[i].proj_name === proj_cat.value ){\n            projlist[i].todolist.push(todo_item);\n            j = i;   \n        }\n    }\n    \n    projlist[j].displayList();\n    \n    \n});\n\nnewprojbtn.addEventListener('click',() => {\n    let newproj = new _proj_module__WEBPACK_IMPORTED_MODULE_1__.default(proj_input.value)\n    projlist.push(newproj);    \n    populateProjcat();\n});\n\ntododispbtn.addEventListener('click',() => {\n     dispTaskItems();\n});\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/proj_module.js":
/*!****************************!*\
  !*** ./src/proj_module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction project(proj_name){\n    \n    this.todolist = [];\n    this.proj_name = proj_name;\n\n    project.prototype.displayList = function(){\n      let txt = `<table id='disptbl'><tr><th>Project</th><th>Title</th>`;\n      txt = `${txt}<th>Description</th><th>Due Date</th><th>Priority</th></tr>`;\n      \n        txt = `${txt}<tr><td>${this.proj_name}</td>`;\n        txt = `${txt}<td>${this.todolist[this.todolist.length-1].title}</td>`;\n        txt = `${txt}<td>${this.todolist[this.todolist.length-1].desc}</td>`;\n\n        txt = `${txt}<td>${this.todolist[this.todolist.length-1].ddate}</td>`;\n        txt = `${txt}<td>${this.todolist[this.todolist.length-1].priority}</td>`;\n\n      txt += '</table>';\n\n      let todo_div = document.getElementById(\"todo\");\n      todo_div.innerHTML = txt;\n    }\n\n    project.prototype.deleteItem = function(index){\n      this.todolist.splice(index,1);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://to-do-list/./src/proj_module.js?");

/***/ }),

/***/ "./src/todoObj.js":
/*!************************!*\
  !*** ./src/todoObj.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass toDo{\n    constructor(title,desc,ddate,priority) {\n        this.title = title;\n        this.desc = desc;\n        this .ddate= ddate;\n        this.priority = priority;\n    }\n\n    get title() {\n        return this._title;\n      }\n    \n      get desc() {\n        return this._desc;\n      }\n    \n      get ddate() {\n        return this._ddate;\n      }\n    \n      get priority() {\n        return this._priority;\n      }\n\n      set title(val) {\n        this._title = val;\n      }\n    \n      set desc(val) {\n        this._desc = val;\n      }\n    \n      set ddate(val) {\n        this._ddate = val;\n      }\n    \n      set priority(val) {\n        this._priority = val;\n      }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);\n\n//# sourceURL=webpack://to-do-list/./src/todoObj.js?");

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
/******/ 			// no module.id needed
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