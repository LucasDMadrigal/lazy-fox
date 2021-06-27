/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lazy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy.js */ \"./src/lazy.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\nvar baseURL = \"https://randomfox.ca/images/\";\nvar appNode = document.getElementById('app');\nvar main = document.createElement('main');\nvar images = [];\n\nvar createImageNode = function createImageNode(id) {\n  //creacion del contenedor de imagenes\n  var figure = document.createElement('figure');\n  figure.classList.add('fox_image--container');\n  var image = document.createElement('img');\n  image.classList.add('fox_image');\n  image.dataset.src = \"\".concat(baseURL).concat(id, \".jpg\");\n  figure.append(image);\n  return figure;\n};\n\nfor (var i = 1; i < 122; i++) {\n  var imageNode = createImageNode(i);\n  images.push(imageNode);\n  (0,_lazy_js__WEBPACK_IMPORTED_MODULE_0__.registerImage)(imageNode);\n}\n\nmain.append.apply(main, images);\nappNode.append(main);\n\n//# sourceURL=webpack://workshop-2-lazy/./src/index.js?")},"./src/lazy.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerImage\": () => (/* binding */ registerImage)\n/* harmony export */ });\nvar isIntersecting = function isIntersecting(entry) {\n  return entry.isIntersecting; //boolean\n};\n\nvar loadImage = function loadImage(entry) {\n  var figure = entry.target;\n  console.log('img pedida');\n  var image = figure.firstChild;\n  var url = image.dataset.src;\n  image.src = url;\n  observer.unobserve(figure);\n};\n\nvar observer = new IntersectionObserver(function (entries) {\n  entries.filter(isIntersecting).forEach(loadImage);\n});\nvar registerImage = function registerImage(image) {\n  observer.observe(image);\n};\n\n//# sourceURL=webpack://workshop-2-lazy/./src/lazy.js?")},"./src/index.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://workshop-2-lazy/./src/index.css?")}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();