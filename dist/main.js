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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _proj_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proj_module */ \"./src/proj_module.js\");\n/* harmony import */ var _todoObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObj */ \"./src/todoObj.js\");\n/* harmony import */ var _DOMelements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMelements */ \"./src/DOMelements.js\");\n\n\n\n\nlet projlist = [];\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_2__.contentdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_2__.newprojdiv);\n_DOMelements__WEBPACK_IMPORTED_MODULE_2__.contentdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_2__.formdiv);\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_2__.contentdiv.appendChild(_DOMelements__WEBPACK_IMPORTED_MODULE_2__.tododiv);\n\nconst projcat = document.getElementById('projcat');\nconst saveProjects = () => {\n  const str = JSON.stringify(projlist);\n  localStorage.setItem('projlist', str);\n};\n\nconst getProjects = () => {\n  const str = localStorage.getItem('projlist');\n  projlist = JSON.parse(str);\n  if (!projlist) {\n    projlist = [];\n    const proj = new _proj_module__WEBPACK_IMPORTED_MODULE_0__.default('default');\n    projlist.push(proj);\n  }\n};\n\nconst populateProjcat = () => {\n  projcat.innerHTML = '';\n  for (let i = 0; i < projlist.length; i += 1) {\n    const cat = document.createElement('option');\n    cat.text = projlist[i].proj_name;\n    cat.value = projlist[i].proj_name;\n    projcat.add(cat);\n  }\n};\n\nconst newProj = () => {\n  const newproj = new _proj_module__WEBPACK_IMPORTED_MODULE_0__.default(_DOMelements__WEBPACK_IMPORTED_MODULE_2__.projinput.value);\n  projlist.push(newproj);\n  saveProjects();\n  populateProjcat();\n};\n\nconst dispTaskItems = () => {\n  const tbl = document.createElement('table');\n  tbl.setAttribute('id', 'disptbl');\n  const trh = document.createElement('tr');\n  const th1 = document.createElement('th');\n  th1.innerText = 'Project';\n  const th2 = document.createElement('th');\n  th2.innerText = 'Title';\n  const th3 = document.createElement('th');\n  th3.innerText = 'Description';\n  const th4 = document.createElement('th');\n  th4.innerText = 'Due Date';\n  const th5 = document.createElement('th');\n  th5.innerText = 'Priority';\n  const th6 = document.createElement('th');\n  th6.innerText = 'Select for update';\n  const th7 = document.createElement('th');\n  th7.innerText = 'Delete';\n  trh.appendChild(th1);\n  trh.appendChild(th2);\n  trh.appendChild(th3);\n  trh.appendChild(th4);\n  trh.appendChild(th5);\n  trh.appendChild(th6);\n  trh.appendChild(th7);\n  tbl.appendChild(trh);\n\n  for (let i = projlist.length - 1; i >= 0; i -= 1) {\n    for (let j = projlist[i].todolist.length - 1; j >= 0; j -= 1) {\n      const tr = document.createElement('tr');\n      const td1 = document.createElement('td');\n      td1.innerText = `${projlist[i].proj_name}`;\n      const td2 = document.createElement('td');\n      td2.innerText = `${projlist[i].todolist[j].title}`;\n      const td3 = document.createElement('td');\n      td3.innerText = `${projlist[i].todolist[j].desc}`;\n      const td4 = document.createElement('td');\n      td4.innerText = `${projlist[i].todolist[j].ddate}`;\n      const td5 = document.createElement('td');\n      td5.innerText = `${projlist[i].todolist[j].priority}`;\n      const td6 = document.createElement('td');\n\n      const updbtn = document.createElement('button');\n      updbtn.hidden = true;\n      updbtn.setAttribute('class', 'updatebuttons');\n      updbtn.setAttribute('id', `updbtn${i}-${j}`);\n      updbtn.innerText = 'Update';\n      updbtn.addEventListener('click', () => { //eslint-disable-line\n        projlist[i].todolist[j].title = document.getElementById('title').value;\n        projlist[i].todolist[j].desc = document.getElementById('desc').value;\n        projlist[i].todolist[j].ddate = document.getElementById('ddate').value;\n        projlist[i].todolist[j].priority = document.getElementById('priority').value;\n        _DOMelements__WEBPACK_IMPORTED_MODULE_2__.newitembtn.hidden = false;\n        dispTaskItems();\n      });\n      const selectbtn = document.createElement('button');\n      selectbtn.setAttribute('id', `selectbtn${i}-${j}`);\n      selectbtn.innerText = 'Select';\n      selectbtn.addEventListener('click', () => { //eslint-disable-line\n        const updbuttons = document.getElementsByClassName('updatebuttons');\n        for (let x = 0; x < updbuttons.length; x += 1) {\n          updbuttons[x].hidden = true;\n        }\n        document.getElementById('title').value = projlist[i].todolist[j].title;\n        document.getElementById('desc').value = projlist[i].todolist[j].desc;\n        document.getElementById('ddate').value = projlist[i].todolist[j].ddate;\n        document.getElementById('priority').value = projlist[i].todolist[j].priority;\n\n        document.getElementById(`updbtn${i}-${j}`).hidden = false;\n        _DOMelements__WEBPACK_IMPORTED_MODULE_2__.newitembtn.hidden = true;\n      });\n\n      td6.appendChild(selectbtn);\n      td6.appendChild(updbtn);\n\n      const td7 = document.createElement('td');\n\n      const delbtn = document.createElement('button');\n      delbtn.setAttribute('id', `delbtn${i}-${j}`);\n      delbtn.innerText = 'Delete';\n      delbtn.addEventListener('click', () => {\n        deleteProjItem(i, j); //eslint-disable-line\n      });\n      td7.appendChild(delbtn);\n      tr.appendChild(td1);\n      tr.appendChild(td2);\n      tr.appendChild(td3);\n      tr.appendChild(td4);\n      tr.appendChild(td5);\n      tr.appendChild(td6);\n      tr.appendChild(td7);\n      tbl.appendChild(tr);\n    }\n  }\n\n  _DOMelements__WEBPACK_IMPORTED_MODULE_2__.tododiv.innerHTML = '';\n  _DOMelements__WEBPACK_IMPORTED_MODULE_2__.tododiv.appendChild(tbl);\n};\n\nconst deleteProjItem = (i, j) => {\n  projlist[i].todolist.splice(j, 1);\n  saveProjects();\n  dispTaskItems();\n};\n\nconst addProjItem = () => {\n  const title = document.getElementById('title').value;\n  const desc = document.getElementById('desc').value;\n  const ddate = document.getElementById('ddate').value;\n  const priority = document.getElementById('priority').value;\n\n  const todoitem = (0,_todoObj__WEBPACK_IMPORTED_MODULE_1__.default)(title, desc, ddate, priority);\n  for (let i = 0; i < projlist.length; i += 1) {\n    if (projlist[i].proj_name === projcat.value) {\n      projlist[i].todolist.push(todoitem);\n    }\n  }\n  saveProjects();\n  dispTaskItems();\n};\n\n\ngetProjects();\npopulateProjcat();\ndispTaskItems();\n\nconst submit = document.getElementById('submitbtn');\nsubmit.addEventListener('click', () => {\n  const title = document.getElementById('title').value;\n  const desc = document.getElementById('desc').value;\n  const ddate = document.getElementById('ddate').value;\n  if (title !== '' && desc !== '' && ddate !== '') {\n    addProjItem();\n  }\n});\n\n_DOMelements__WEBPACK_IMPORTED_MODULE_2__.newprojbtn.addEventListener('click', () => {\n  newProj();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst toDo = (title, desc, ddate, priority) => ({\n  title, desc, ddate, priority,\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);\n\n//# sourceURL=webpack://to-do-list/./src/todoObj.js?");

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