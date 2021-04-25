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

/***/ "./src/DOMelements.js":
/*!****************************!*\
  !*** ./src/DOMelements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content_div\": () => (/* binding */ content_div),\n/* harmony export */   \"todo_div\": () => (/* binding */ todo_div),\n/* harmony export */   \"form_div\": () => (/* binding */ form_div),\n/* harmony export */   \"newitembtn\": () => (/* binding */ newitembtn),\n/* harmony export */   \"newprojbtn\": () => (/* binding */ newprojbtn),\n/* harmony export */   \"proj_input\": () => (/* binding */ proj_input),\n/* harmony export */   \"newprojdiv\": () => (/* binding */ newprojdiv)\n/* harmony export */ });\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\nlet content_div = document.querySelector(\".content\");\n\nlet form = (0,_form__WEBPACK_IMPORTED_MODULE_0__.default)();\nlet form_div = document.createElement(\"div\");\nform_div.setAttribute(\"class\",\"border-deco p-10\");\nform_div.appendChild(form);\n\nlet todo_div = document.createElement(\"div\");\ntodo_div.setAttribute(\"id\",\"todo\");\n\nlet newitembtn = document.createElement(\"button\");\n    newitembtn.setAttribute(\"id\",\"todo-btn\");\n    newitembtn.setAttribute(\"class\",\"float-r\");\n    newitembtn.innerText=\"Create new Item\";\n\n\nlet newprojdiv = document.createElement(\"div\");\nnewprojdiv.setAttribute(\"id\",\"newprojdiv\");\nnewprojdiv.setAttribute(\"class\",\"border-deco p-10 mb-10 txt-align-c\");\n\nlet newprojbtn = document.createElement(\"button\");\nnewprojbtn.setAttribute(\"id\",\"newproj-btn\");\nnewprojbtn.setAttribute(\"class\",\"mr-10\");\nnewprojbtn.innerText=\"Add New Project\";\n\nlet proj_input = document.createElement(\"input\");\nproj_input.setAttribute(\"id\",\"projinput\");\nproj_input.setAttribute(\"type\",\"text\");\n\nnewprojdiv.appendChild(newprojbtn);\nnewprojdiv.appendChild(proj_input);\n\n\n\n//# sourceURL=webpack://to-do-list/./src/DOMelements.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createForm(){\n    let form = document.createElement(\"form\");\n    //form.setAttribute(\"method\",\"post\");\n// Title\n    let title_label= document.createElement(\"label\");\n    title_label.innerText=\"Title: \";\n\n    let title_input = document.createElement(\"input\");\n    title_input.setAttribute(\"id\", \"title\");\n    title_input.setAttribute(\"type\", \"text\");\n    title_input.setAttribute(\"name\", \"title\");\n    title_input.setAttribute(\"placeholder\", \"Title of Task\");\n    title_input.setAttribute(\"required\",\"true\");\n    title_input.setAttribute(\"maxlength\",\"10\");\n    title_input.setAttribute(\"class\",\"mr-10 w-100px\");\n// desc\n    let desc_label= document.createElement(\"label\");\n    desc_label.innerText=\"Description: \";\n\n    let desc_input = document.createElement(\"input\");\n    desc_input.setAttribute(\"id\", \"desc\");\n    desc_input.setAttribute(\"type\", \"text\");\n    desc_input.setAttribute(\"name\", \"desc\");\n    desc_input.setAttribute(\"placeholder\", \"Description of Task\");\n    desc_input.setAttribute(\"required\",\"true\");\n    desc_input.setAttribute(\"maxlength\",\"50\");\n    desc_input.setAttribute(\"class\",\"mr-10\");\n\n//due date\n\nlet date_label= document.createElement(\"label\");\n    date_label.innerText=\"Due Date: \";\n\n    let date_input = document.createElement(\"input\");\n    date_input.setAttribute(\"id\", \"ddate\");\n    date_input.setAttribute(\"type\", \"date\");\n    date_input.setAttribute(\"name\", \"date\");    \n    date_input.setAttribute(\"required\",\"true\");\n    date_input.setAttribute(\"class\",\"mr-10 w-120px\");\n\n//Priority\nlet priority_label= document.createElement(\"label\");\n    priority_label.innerText=\"Priority: \";\n\nlet priority_input = document.createElement(\"select\"); \n    priority_input.setAttribute(\"id\",\"priority\");\n    priority_input.setAttribute(\"name\",\"priority\");\n    priority_input.setAttribute(\"class\",\"mr-10 w-50px\");\n    \nlet option_high = document.createElement(\"option\");\n    option_high.text = \"High\";\n    option_high.value = \"high\";\n    \n    priority_input.add(option_high);\n\nlet option_med = document.createElement(\"option\");\n    option_med.text = \"Medium\";\n    option_med.value = \"medium\";\n    option_med.selected = \"true\";\n    priority_input.add(option_med);\n\nlet option_low = document.createElement(\"option\");\n    option_low.text = \"low\";\n    option_low.value = \"low\";\n    priority_input.add(option_low);\n\nlet projlabel = document.createElement(\"label\");\nprojlabel.setAttribute(\"id\",\"projlabel\");\nprojlabel.setAttribute(\"class\",\"mr-10\");\nprojlabel.innerText=\"Select Project: \";\n\nlet proj_cat = document.createElement(\"select\");\nproj_cat.setAttribute(\"id\",\"projcat\");\nproj_cat.setAttribute(\"class\",\"mr-10 \");\n\nlet submitbtn = document.createElement(\"input\");\nsubmitbtn.setAttribute(\"type\",\"submit\");\nsubmitbtn.setAttribute(\"id\",\"submitbtn\");\nsubmitbtn.value=\"Submit\";\n\n    form.appendChild(projlabel);\n    form.appendChild(proj_cat); \n    form.appendChild(title_label);\n    form.appendChild(title_input);\n    form.appendChild(desc_label);\n    form.appendChild(desc_input);\n    form.appendChild(date_label);\n    form.appendChild(date_input);\n    form.appendChild(priority_label);\n    form.appendChild(priority_input);\n    form.appendChild(submitbtn);\n    \n    return form;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForm);\n\n//# sourceURL=webpack://to-do-list/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _proj_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proj_module */ \"./src/proj_module.js\");\n/* harmony import */ var _todoObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObj */ \"./src/todoObj.js\");\n/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMelements */ \"./src/DOMelements.js\");\n\n\n\n\nlet projlist = []\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_2__.content_div.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_2__.newprojdiv);\n_DOMelements__WEBPACK_IMPORTED_MODULE_2__.content_div.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_2__.form_div);\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_2__.content_div.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_2__.todo_div);\n\nlet proj_cat = document.getElementById(\"projcat\");\nconst saveProjects = () => {\n    const str = JSON.stringify(projlist);\n    localStorage.setItem('projlist', str); \n  };\n  \n  const getProjects = () => {\n    const str = localStorage.getItem('projlist');\n    projlist = JSON.parse(str);\n    if (!projlist) {\n        projlist = [];\n        let proj = new _proj_module__WEBPACK_IMPORTED_MODULE_0__.default(\"default\");\n        projlist.push(proj);\n    }\n    \n  };\n\n  let populateProjcat = function(){\n    proj_cat.innerHTML=\"\";\n    for(let i=0; i<projlist.length; i += 1) {\n\n        let cat = document.createElement(\"option\")\n        cat.text = projlist[i].proj_name;\n        cat.value = projlist[i].proj_name;\n        proj_cat.add(cat);\n    }\n\n\n}\n\nlet newProj = function(){\n    let newproj = new _proj_module__WEBPACK_IMPORTED_MODULE_0__.default(_DOMelements__WEBPACK_IMPORTED_MODULE_2__.proj_input.value)\n    projlist.push(newproj);\n    saveProjects();    \n    populateProjcat();\n    \n}\n\nlet deleteProjItem = function(i,j){\n    \n    projlist[i].todolist.splice(j,1);\n    saveProjects();\n    dispTaskItems();\n    \n }\n \nlet addProjItem = function(){\n    let j =\"\";\n    let title = document.getElementById(\"title\").value;\n    let desc = document.getElementById(\"desc\").value;\n    let ddate = document.getElementById(\"ddate\").value;\n    let priority = document.getElementById(\"priority\").value;\n    \n    let todo_item = (0,_todoObj__WEBPACK_IMPORTED_MODULE_1__.default)(title,desc,ddate,priority);\n    for(let i=0; i<projlist.length; i+=1){\n        if(projlist[i].proj_name === proj_cat.value ){\n            projlist[i].todolist.push(todo_item);\n            j = i;   \n        }\n    }\n    saveProjects();\n    dispTaskItems();\n    \n}\n\n let dispTaskItems = function(){\n     \n     let tbl = document.createElement(\"table\");\n     tbl.setAttribute(\"id\",\"disptbl\");\n     let trh = document.createElement(\"tr\");\n     let th1 = document.createElement(\"th\");\n     th1.innerText=\"Project\";\n     let th2 = document.createElement(\"th\");\n     th2.innerText=\"Title\";\n     let th3 = document.createElement(\"th\");\n     th3.innerText=\"Description\";\n     let th4 = document.createElement(\"th\");\n     th4.innerText=\"Due Date\";\n     let th5 = document.createElement(\"th\");\n     th5.innerText=\"Priority\";\n     let th6 = document.createElement(\"th\");\n     th6.innerText=\"Select for update\";\n     let th7 = document.createElement(\"th\");\n     th7.innerText=\"Delete\";\n     trh.appendChild(th1);\n     trh.appendChild(th2);\n     trh.appendChild(th3);\n     trh.appendChild(th4);\n     trh.appendChild(th5);\n     trh.appendChild(th6);\n     trh.appendChild(th7);\n     tbl.appendChild(trh);\n     \n     for(let i = projlist.length-1; i >= 0; i -= 1){\n         for (let j = projlist[i].todolist.length -1; j >= 0; j -= 1) {\n             \n             let tr= document.createElement(\"tr\");\n             let td1= document.createElement(\"td\");\n             td1.innerText=`${projlist[i].proj_name}`;\n             let td2= document.createElement(\"td\");\n             td2.innerText=`${projlist[i].todolist[j].title}`;\n             let td3= document.createElement(\"td\");\n             td3.innerText=`${projlist[i].todolist[j].desc}`;\n             let td4= document.createElement(\"td\");\n             td4.innerText=`${projlist[i].todolist[j].ddate}`\n             let td5= document.createElement(\"td\");\n             td5.innerText=`${projlist[i].todolist[j].priority}`;\n             let td6= document.createElement(\"td\");\n\n             let updbtn = document.createElement(\"button\");\n             updbtn.hidden= true;\n             updbtn.setAttribute(\"class\",\"updatebuttons\");\n             updbtn.setAttribute(\"id\",`updbtn${i}-${j}`);\n             updbtn.innerText=\"Update\";\n             updbtn.addEventListener('click',() => {\n                projlist[i].todolist[j].title = document.getElementById(\"title\").value;\n                projlist[i].todolist[j].desc = document.getElementById(\"desc\").value;\n                projlist[i].todolist[j].ddate = document.getElementById(\"ddate\").value;\n                projlist[i].todolist[j].priority = document.getElementById(\"priority\").value;\n                _DOMelements__WEBPACK_IMPORTED_MODULE_2__.newitembtn.hidden = false;\n                dispTaskItems();\n             });\n             let selectbtn = document.createElement(\"button\");\n             selectbtn.setAttribute(\"id\",`selectbtn${i}-${j}`);\n             selectbtn.innerText=\"Select\";\n             selectbtn.addEventListener('click',() => {\n                 \n                 let updbuttons = document.getElementsByClassName(\"updatebuttons\");\n                for(let x=0; x<updbuttons.length; x += 1){\n                    updbuttons[x].hidden=true;\n                }\n                document.getElementById(\"title\").value = projlist[i].todolist[j].title;\n                document.getElementById(\"desc\").value = projlist[i].todolist[j].desc;\n                document.getElementById(\"ddate\").value = projlist[i].todolist[j].ddate;\n                document.getElementById(\"priority\").value = projlist[i].todolist[j].priority;\n                \n                document.getElementById(`updbtn${i}-${j}`).hidden = false;\n                _DOMelements__WEBPACK_IMPORTED_MODULE_2__.newitembtn.hidden = true;\n                \n             });\n\n             td6.appendChild(selectbtn);\n             td6.appendChild(updbtn);\n\n             let td7= document.createElement(\"td\");\n             \n             let delbtn = document.createElement(\"button\");\n             delbtn.setAttribute(\"id\",`delbtn${i}-${j}`);\n             delbtn.innerText=\"Delete\";\n             delbtn.addEventListener('click',() => {\n                 deleteProjItem(i,j);\n             });\n             td7.appendChild(delbtn);\n             tr.appendChild(td1);\n             tr.appendChild(td2);\n             tr.appendChild(td3);\n             tr.appendChild(td4);\n             tr.appendChild(td5);\n             tr.appendChild(td6);\n             tr.appendChild(td7);\n             tbl.appendChild(tr);\n           }\n           \n     }\n \n     _DOMelements__WEBPACK_IMPORTED_MODULE_2__.todo_div.innerHTML = \"\";\n     _DOMelements__WEBPACK_IMPORTED_MODULE_2__.todo_div.appendChild(tbl);\n \n }\n\ngetProjects();\npopulateProjcat();\ndispTaskItems();\n\nlet submit = document.getElementById(\"submitbtn\");\nsubmit.addEventListener('click',() => {\n    let title = document.getElementById(\"title\").value;\n    let desc = document.getElementById(\"desc\").value;\n    let ddate = document.getElementById(\"ddate\").value;\n    let priority = document.getElementById(\"priority\").value;\n\n    if(title == \"\" || desc == \"\" || ddate == \"\"){\n\n    }else{\n        addProjItem();\n    }\n});\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_2__.newprojbtn.addEventListener('click',() => {\n   newProj();\n});\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/proj_module.js":
/*!****************************!*\
  !*** ./src/proj_module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction project(proj_name){\n    \n    this.todolist = [];\n    this.proj_name = proj_name;\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);\n\n//# sourceURL=webpack://to-do-list/./src/proj_module.js?");

/***/ }),

/***/ "./src/todoObj.js":
/*!************************!*\
  !*** ./src/todoObj.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toDo = (title, desc, ddate, priority) => ({\n    title, desc, ddate, priority,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);\n\n//# sourceURL=webpack://to-do-list/./src/todoObj.js?");

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