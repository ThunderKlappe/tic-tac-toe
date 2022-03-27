/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOMManip.js":
/*!*************************!*\
  !*** ./src/DOMManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMManip": () => (/* binding */ DOMManip)
/* harmony export */ });
var DOMManip = function () {
  //shorthand to get elements easier
  var getElement = function getElement(selector) {
    return document.querySelector(selector);
  };

  var getElements = function getElements(selector) {
    return document.querySelectorAll(selector);
  }; //shorthand to make a new element and add attributes to it


  var makeNewElement = function makeNewElement(type) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var HTMLClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var newElem = document.createElement(type);

    if (id != "") {
      newElem.setAttribute("id", id);
    }

    if (HTMLClass != "") {
      newElem.setAttribute("class", HTMLClass);
    }

    newElem.textContent = text;

    for (var _len = arguments.length, attributes = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      attributes[_key - 4] = arguments[_key];
    }

    if (attributes.length > 0) {
      attributes.forEach(function (att) {
        return newElem.setAttribute(Object.keys(att)[0], att[Object.keys(att)]);
      });
    }

    return newElem;
  }; //adds all of the DOM elements to a parent


  var appendChildren = function appendChildren(parent) {
    for (var _len2 = arguments.length, children = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      children[_key2 - 1] = arguments[_key2];
    }

    children.forEach(function (child) {
      return parent.appendChild(child);
    });
  }; //inserts a DOM element after another element


  var insertAfter = function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }; //clears out all child nodes of an element, skips as many elements as requested


  var removeAllChildren = function removeAllChildren(element) {
    var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    for (var i = element.childNodes.length; i > skip; i--) {
      element.childNodes[i - 1].remove();
    }
  };

  return {
    getElement: getElement,
    getElements: getElements,
    makeNewElement: makeNewElement,
    appendChildren: appendChildren,
    insertAfter: insertAfter,
    removeAllChildren: removeAllChildren
  };
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #121212;\n}\n#header {\n    height: 72px;\n    background-color: #121212;\n    color: #f5f5f5;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n}\n#content {\n    margin-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#board-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 3px solid #121212;\n    border-radius: 20px;\n    width: -webkit-fill-available;\n    min-height: 80vh;\n    padding: 10px;\n    margin: 10px;\n}\n@-moz-document url-prefix() {\n    #board-container {\n        width: -moz-available;\n    }\n}\n.instructions {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 5px;\n}\n.sub-instructions {\n    font-size: 18px;\n    margin: 5px;\n}\n.choice-container {\n    display: flex;\n    gap: 25px;\n    margin: 10px;\n}\nbutton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #121212;\n    border-radius: 15px;\n    background-color: #f5f5f5;\n    color: #121212;\n    transition: 0.5s;\n}\n\n.difficulty-button {\n    width: 110px;\n    font-size: 18px;\n    padding: 5px 0px;\n}\n\n#start-game {\n    padding: 5px 8px;\n    margin: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n.active {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n\n.piece-button {\n    height: 50px;\n    width: 50px;\n    font-size: 24px;\n    font-weight: bold;\n}\n.x-piece {\n    color: #f05454;\n}\n.x-piece.active {\n    color: #f5f5f5;\n    background-color: #f05454;\n}\n.o-piece {\n    color: #30475e;\n}\n.o-piece.active {\n    color: #f5f5f5;\n    background-color: #30475e;\n}\n\n#board {\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 33% 33% 33%;\n}\n.board-space {\n    height: 120px;\n    width: 120px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    border-top: 4px solid #121212;\n    border-left: 4px solid #121212;\n    border-radius: 0;\n    font-size: 50px;\n}\n.no-top-border {\n    border-top: none;\n}\n.no-left-border {\n    border-left: none;\n}\n\n#winner {\n    font-size: 20px;\n}\n#new-game-button {\n    font-size: 18px;\n    padding: 5px 8px;\n    margin: 10px;\n}\n#new-game-button:hover {\n    color: #f5f5f5;\n    background-color: #121212;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,4DAA4D;IAC5D,cAAc;AAClB;AACA;IACI,YAAY;IACZ,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,WAAW;AACf;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;IACb,YAAY;AAChB;AACA;IACI;QACI,qBAAqB;IACzB;AACJ;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,WAAW;AACf;AACA;IACI,eAAe;IACf,WAAW;AACf;AACA;IACI,aAAa;IACb,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kCAAkC;AACtC;AACA;IACI,aAAa;IACb,YAAY;IACZ,UAAU;IACV,yBAAyB;IACzB,YAAY;IACZ,6BAA6B;IAC7B,8BAA8B;IAC9B,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,eAAe;IACf,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,cAAc;IACd,yBAAyB;AAC7B","sourcesContent":["body {\n    box-sizing: border-box;\n    margin: 0;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    background-color: #f5f5f5;\n    font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n    color: #121212;\n}\n#header {\n    height: 72px;\n    background-color: #121212;\n    color: #f5f5f5;\n    font-size: 32px;\n    font-weight: 900;\n    display: flex;\n    align-items: center;\n    padding-left: 60px;\n    position: fixed;\n    top: 0;\n    width: 100%;\n}\n#content {\n    margin-top: 100px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n#board-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 3px solid #121212;\n    border-radius: 20px;\n    width: -webkit-fill-available;\n    min-height: 80vh;\n    padding: 10px;\n    margin: 10px;\n}\n@-moz-document url-prefix() {\n    #board-container {\n        width: -moz-available;\n    }\n}\n.instructions {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 5px;\n}\n.sub-instructions {\n    font-size: 18px;\n    margin: 5px;\n}\n.choice-container {\n    display: flex;\n    gap: 25px;\n    margin: 10px;\n}\nbutton {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #121212;\n    border-radius: 15px;\n    background-color: #f5f5f5;\n    color: #121212;\n    transition: 0.5s;\n}\n\n.difficulty-button {\n    width: 110px;\n    font-size: 18px;\n    padding: 5px 0px;\n}\n\n#start-game {\n    padding: 5px 8px;\n    margin: 10px;\n    font-size: 20px;\n    font-weight: bold;\n}\n.active {\n    background-color: #121212;\n    color: #f5f5f5;\n}\n\n.piece-button {\n    height: 50px;\n    width: 50px;\n    font-size: 24px;\n    font-weight: bold;\n}\n.x-piece {\n    color: #f05454;\n}\n.x-piece.active {\n    color: #f5f5f5;\n    background-color: #f05454;\n}\n.o-piece {\n    color: #30475e;\n}\n.o-piece.active {\n    color: #f5f5f5;\n    background-color: #30475e;\n}\n\n#board {\n    margin: 15px;\n    display: grid;\n    grid-template-columns: 33% 33% 33%;\n}\n.board-space {\n    height: 120px;\n    width: 120px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    border-top: 4px solid #121212;\n    border-left: 4px solid #121212;\n    border-radius: 0;\n    font-size: 50px;\n}\n.no-top-border {\n    border-top: none;\n}\n.no-left-border {\n    border-left: none;\n}\n\n#winner {\n    font-size: 20px;\n}\n#new-game-button {\n    font-size: 18px;\n    padding: 5px 8px;\n    margin: 10px;\n}\n#new-game-button:hover {\n    color: #f5f5f5;\n    background-color: #121212;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManip */ "./src/DOMManip.js");



var Player = function Player(type) {
  var getType = function getType() {
    return type;
  };

  return {
    getType: getType
  };
};

var AIPlayer = function AIPlayer(type, difficulty) {
  var _Player = Player(type),
      getType = _Player.getType; //if somebody can win, go there.


  var _defendOrAttack = function _defendOrAttack(player) {
    for (var i = 0; i < 9; i++) {
      var _dummyBoard = board.getBoard().map(function (ele) {
        return ele;
      });

      if (_dummyBoard[i] == "") {
        _dummyBoard[i] = player.getType();

        if (board.checkIfWon(_dummyBoard) == player.getType()) {
          display.playPiece(i, this);
          return true;
        }
      }
    }

    return false;
  }; //picks a random empty spot


  var _pickRandom = function _pickRandom() {
    var _randStart = Math.floor(Math.random() * board.getBoard().length); // eslint-disable-next-line no-constant-condition


    while (true) {
      if (board.getBoard()[_randStart] == "") {
        display.playPiece(_randStart, this);
        return;
      } else {
        _randStart++;

        if (_randStart == board.getBoard().length) {
          _randStart = 0;
        }
      }
    }
  };

  var _chooseMove = function _chooseMove() {
    var _playMade = false;

    var _oppPlays = board.getBoard().reduce(function (a, b) {
      return b == display.getPlayer1().getType() ? a + 1 : a;
    }, 0); //check if the AI can win


    _playMade = _defendOrAttack.call(this, this); //check if the Player can win

    if (!_playMade) {
      _playMade = _defendOrAttack.call(this, display.getPlayer1());
    }

    if (!_playMade) {
      if (_oppPlays == 0) {
        display.playPiece(0, this);
        return;
      } else if (_oppPlays == 1 && type == "x") {
        if (board.getBoard()[8] == "") {
          display.playPiece(8, this);
          return;
        }
      } else if (_oppPlays == 2) {
        //If the opponent played on two corners, play on a side.
        var _sidePieces = [];

        for (var i = 1; i < board.getBoard().length; i += 2) {
          _sidePieces.push(board.getBoard()[i]);
        }

        if (!_sidePieces.includes(display.getPlayer1().getType())) {
          display.playPiece(1, this);
          return;
        }
      } //go to the middle if it's available


      if (board.getBoard()[4] == "") {
        display.playPiece(4, this); //go to the corner if the middle is taken
      } else if (board.getBoard()[0] == "") {
        display.playPiece(0, this);
      } //or else pick a random spot.
      else {
        _pickRandom.call(this);
      }
    }
  };

  var makeMove = function makeMove() {
    //decided whether to make the correct move or random move based on difficulty
    if (Math.floor(Math.random() * difficulty) == 0) {
      _chooseMove.call(this);
    } else {
      _pickRandom.call(this);
    }
  };

  return {
    getType: getType,
    makeMove: makeMove
  };
}; // eslint-disable-next-line no-unused-vars


var _makeDisplay = function () {
  var header = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "header", "", "Tic-Tac-Toe");
  var content = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "content");
  var boardContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "board-container");
  var pieceSelection = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "piece-selection", "instructions", "Please Select Your Piece:");
  var pieceSelectionHelper = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "piece-selection-helper", "sub-instructions", "X goes first, O goes second");
  var pieceContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "piece-container", "choice-container");
  var xPiece = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "x-piece", "piece-button x-piece active", "x", {
    value: "x"
  });
  var oPiece = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "o-piece", "piece-button o-piece", "o", {
    value: "o"
  });
  var aiSelection = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "ai-selection", "instructions", "Please Select The Difficulty");
  var difficultyContainer = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "difficulty-container", "choice-container");
  var easyButton = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "easy-button", "difficulty-button active", "Easy", {
    value: "3"
  });
  var mediumButton = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "medium-button", "difficulty-button", "Medium", {
    value: "2"
  });
  var impossibleButton = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "impossible-button", "difficulty-button", "Impossible", {
    value: "1"
  });
  var startGame = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "start-game", "", "Start Game");
  var board = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "board");
  var boardSpace1 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border no-left-border", "", {
    "data-space": 0
  });
  var boardSpace2 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border", "", {
    "data-space": 1
  });
  var boardSpace3 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border", "", {
    "data-space": 2
  });
  var boardSpace4 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-left-border", "", {
    "data-space": 3
  });
  var boardSpace5 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space", "", {
    "data-space": 4
  });
  var boardSpace6 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space", "", {
    "data-space": 5
  });
  var boardSpace7 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-left-border", "", {
    "data-space": 6
  });
  var boardSpace8 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space", "", {
    "data-space": 7
  });
  var boardSpace9 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space", "", {
    "data-space": 8
  });
  var winner = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("div", "winner");
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(pieceContainer, xPiece, oPiece);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(difficultyContainer, easyButton, mediumButton, impossibleButton);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(board, boardSpace1, boardSpace2, boardSpace3, boardSpace4, boardSpace5, boardSpace6, boardSpace7, boardSpace8, boardSpace9);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(boardContainer, pieceSelection, pieceSelectionHelper, pieceContainer, aiSelection, difficultyContainer, startGame, board, winner);
  content.appendChild(boardContainer);
  _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.appendChildren(document.body, header, content);
}();

var board = function () {
  var _gameBoard = ["", "", "", "", "", "", "", "", ""];

  var getBoard = function getBoard() {
    return _gameBoard;
  };

  var update = function update(index, player) {
    _gameBoard[index] = player.getType();
  };

  var clearBoard = function clearBoard() {
    return _gameBoard = ["", "", "", "", "", "", "", "", ""];
  }; //if all three entries are the same, return true


  var _checkWinCon = function _checkWinCon(a, b, c) {
    return a == b && a == c && a != "" ? 1 : 0;
  }; //check all rows, columns and diagonals for wins


  var checkIfWon = function checkIfWon(board) {
    var _winner = _checkWinCon(board[0], board[1], board[2]) ? board[0] : _checkWinCon(board[3], board[4], board[5]) ? board[3] : _checkWinCon(board[6], board[7], board[8]) ? board[6] : _checkWinCon(board[0], board[3], board[6]) ? board[0] : _checkWinCon(board[1], board[4], board[7]) ? board[1] : _checkWinCon(board[2], board[5], board[8]) ? board[2] : _checkWinCon(board[0], board[4], board[8]) ? board[0] : _checkWinCon(board[2], board[4], board[6]) ? board[6] : 0;

    if (_winner == 0 && !board.includes("")) {
      _winner = "draw";
    }

    return _winner;
  };

  return {
    update: update,
    getBoard: getBoard,
    checkIfWon: checkIfWon,
    clearBoard: clearBoard
  };
}(); //this section regards the player selection buttons


var playerSel = function () {
  //default player selection is x
  var _playerSelection = "x";

  var _playerPieceSelectors = document.querySelectorAll(".piece-button");

  var _getPlayerChoice = function _getPlayerChoice(e) {
    //gets the value of what is selected and makes only once choice active at a time
    _playerSelection = e.target.value;
    e.target.classList.add("active");

    _playerPieceSelectors.forEach(function (button) {
      if (button != e.target) {
        button.classList.remove("active");
      }
    });
  }; //add event listeners to the selection buttons


  var _activatePlayers = function _activatePlayers() {
    return _playerPieceSelectors.forEach(function (button) {
      return button.addEventListener("click", _getPlayerChoice);
    });
  };

  _activatePlayers(); //a function that removes the event listeners from the buttons.


  var deactivatePlayers = function deactivatePlayers() {
    return _playerPieceSelectors.forEach(function (button) {
      return button.removeEventListener("click", _getPlayerChoice);
    });
  };

  var resetPlayer = function resetPlayer() {
    _playerSelection = "x";

    _playerPieceSelectors.forEach(function (button) {
      return button.classList.remove("active");
    });

    _playerPieceSelectors[0].classList.add("active");

    _activatePlayers();
  }; //function that returns what the player chose


  var getPlayerSelection = function getPlayerSelection() {
    return _playerSelection;
  };

  return {
    getPlayerSelection: getPlayerSelection,
    deactivatePlayers: deactivatePlayers,
    resetPlayer: resetPlayer
  };
}(); //this section regards the difficulty selection buttons


var difficultySel = function () {
  //default difficulty selection is Easy
  var _difSelection = 3;

  var _difficultySelectors = document.querySelectorAll(".difficulty-button");

  var _getDifChoice = function _getDifChoice(e) {
    //gets the value of what is selected and makes only once choice active at a time
    _difSelection = e.target.value;
    e.target.classList.add("active");

    _difficultySelectors.forEach(function (button) {
      if (button != e.target) {
        button.classList.remove("active");
      }
    });
  }; //add event listeners to the selection buttons


  var _activateDifficulty = function _activateDifficulty() {
    return _difficultySelectors.forEach(function (button) {
      return button.addEventListener("click", _getDifChoice);
    });
  };

  _activateDifficulty(); //a function that removes the event listeners from the buttons.


  var deactivateDifficulty = function deactivateDifficulty() {
    return _difficultySelectors.forEach(function (button) {
      return button.removeEventListener("click", _getDifChoice);
    });
  }; //resets to default


  var resetDifficulty = function resetDifficulty() {
    _difSelection = 3;

    _difficultySelectors.forEach(function (button) {
      return button.classList.remove("active");
    });

    _difficultySelectors[0].classList.add("active");

    _activateDifficulty();
  }; //function that returns what the player chose


  var getDifficultySelection = function getDifficultySelection() {
    return _difSelection;
  };

  return {
    getDifficultySelection: getDifficultySelection,
    deactivateDifficulty: deactivateDifficulty,
    resetDifficulty: resetDifficulty
  };
}();

var display = function () {
  var _player1;

  var _player2;

  var _currentPlayer;

  var _gameOver = false;

  var _gameBoardPieces = document.querySelectorAll(".board-space");

  var _startGameButton = document.querySelector("#start-game");

  var _winnerDisplay = document.querySelector("#winner");

  var _newGame = function _newGame() {
    _gameOver = false;
    board.clearBoard();

    _gameBoardPieces.forEach(function (button) {
      button.textContent = "";
      button.classList.remove("x-piece");
      button.classList.remove("o-piece");
      button.classList.remove("filled");
    });

    playerSel.resetPlayer();
    difficultySel.resetDifficulty();

    _startGameButton.classList.remove("active");

    _startGameButton.addEventListener("click", _startGame);

    _winnerDisplay.textContent = "";

    _winnerDisplay.parentElement.lastChild.remove();
  }; //creates the two players, deactivates settings buttons, and activates board


  var _startGame = function _startGame() {
    _startGameButton.classList.add("active");

    _startGameButton.removeEventListener("click", _startGame);

    _player1 = Player(playerSel.getPlayerSelection());
    playerSel.deactivatePlayers();
    _player1.getType() == "x" ? _player2 = AIPlayer("o", difficultySel.getDifficultySelection()) : _player2 = AIPlayer("x", difficultySel.getDifficultySelection());
    difficultySel.deactivateDifficulty();

    if (_player1.getType() == "x") {
      _currentPlayer = _player1;
    } else {
      _currentPlayer = _player2;
      setTimeout(function () {
        return _player2.makeMove();
      }, 500);
    }

    _gameBoardPieces.forEach(function (button) {
      return button.addEventListener("click", _playPlayer1);
    });
  };

  var _updateBoardPiece = function _updateBoardPiece(index, player) {
    _gameBoardPieces[index].textContent = player.getType();

    _gameBoardPieces[index].classList.add("".concat(player.getType(), "-piece"));

    _gameBoardPieces[index].classList.add("filled");

    _gameBoardPieces[index].removeEventListener("click", _playPlayer1);

    board.update(index, player);
  };

  var _pauseCompPlay = function _pauseCompPlay() {
    return new Promise(function (resolve) {
      return setTimeout(resolve, 500);
    });
  }; //if the current player is the computer, they make their move


  var _nextMove = function _nextMove() {
    if (_currentPlayer == _player1) {
      return;
    } else if (_currentPlayer == _player2) {
      _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.getElements(".board-space:not(.filled)").forEach(function (button) {
        return button.removeEventListener("click", _playPlayer1);
      });

      _pauseCompPlay().then(function () {
        return _player2.makeMove();
      }).then(function () {
        if (!_gameOver) {
          _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.getElements(".board-space:not(.filled)").forEach(function (button) {
            return button.addEventListener("click", _playPlayer1);
          });
        }
      });
    }
  }; //plays a piece and checks if the game is over


  var playPiece = function playPiece(index, player) {
    _updateBoardPiece(index, player);

    if (board.checkIfWon(board.getBoard())) {
      if (board.checkIfWon(board.getBoard()) == "x" || board.checkIfWon(board.getBoard()) == "o") {
        _winnerDisplay.textContent = "".concat(player.getType().toUpperCase(), " Wins!");
      } else if (board.checkIfWon(board.getBoard()) == "draw") {
        _winnerDisplay.textContent = "It's a Draw";
      }

      _gameBoardPieces.forEach(function (button) {
        return button.replaceWith(button.cloneNode(true));
      }); //need to update what the gameboard pieces are after they've been cloned to remove
      //the event listeners


      _gameBoardPieces = document.querySelectorAll(".board-space");
      _gameOver = true;
      _currentPlayer = false;

      var _newGameButton = document.createElement("button");

      _newGameButton.setAttribute("id", "new-game-button");

      _newGameButton.textContent = "New Game?";

      _winnerDisplay.parentElement.appendChild(_newGameButton);

      _newGameButton.addEventListener("click", _newGame);
    }

    if (!_gameOver) {
      _currentPlayer == _player1 ? _currentPlayer = _player2 : _currentPlayer = _player1;

      _nextMove();
    }
  };

  var _playPlayer1 = function _playPlayer1(e) {
    playPiece(e.currentTarget.dataset.space, _player1);
  };

  var getPlayer1 = function getPlayer1() {
    return _player1;
  };

  _startGameButton.addEventListener("click", _startGame);

  return {
    playPiece: playPiece,
    getPlayer1: getPlayer1
  };
}();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUk7QUFDdEJ4RCxJQUFBQSxTQUFTLENBQUN3RCxDQUFDLENBQUMwQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBekIsRUFBZ0N6QixRQUFoQyxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxNQUFNL0QsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUFNK0QsUUFBTjtBQUFBLEdBQW5COztBQUVBSyxFQUFBQSxnQkFBZ0IsQ0FBQ2xCLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQ3FCLFVBQTNDOztBQUVBLFNBQU87QUFBRW5GLElBQUFBLFNBQVMsRUFBVEEsU0FBRjtBQUFhWSxJQUFBQSxVQUFVLEVBQVZBO0FBQWIsR0FBUDtBQUNILENBaEhlLEVBQWhCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9ET01NYW5pcC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBET01NYW5pcCA9ICgoKSA9PiB7XG4gICAgLy9zaG9ydGhhbmQgdG8gZ2V0IGVsZW1lbnRzIGVhc2llclxuICAgIGNvbnN0IGdldEVsZW1lbnQgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCBnZXRFbGVtZW50cyA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgLy9zaG9ydGhhbmQgdG8gbWFrZSBhIG5ldyBlbGVtZW50IGFuZCBhZGQgYXR0cmlidXRlcyB0byBpdFxuICAgIGNvbnN0IG1ha2VOZXdFbGVtZW50ID0gKHR5cGUsIGlkID0gXCJcIiwgSFRNTENsYXNzID0gXCJcIiwgdGV4dCA9IFwiXCIsIC4uLmF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIGlmIChpZCAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSFRNTENsYXNzICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgSFRNTENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdFbGVtLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dCA9PiBuZXdFbGVtLnNldEF0dHJpYnV0ZShPYmplY3Qua2V5cyhhdHQpWzBdLCBhdHRbT2JqZWN0LmtleXMoYXR0KV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdFbGVtO1xuICAgIH07XG5cbiAgICAvL2FkZHMgYWxsIG9mIHRoZSBET00gZWxlbWVudHMgdG8gYSBwYXJlbnRcbiAgICBjb25zdCBhcHBlbmRDaGlsZHJlbiA9IChwYXJlbnQsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgfTtcblxuICAgIC8vaW5zZXJ0cyBhIERPTSBlbGVtZW50IGFmdGVyIGFub3RoZXIgZWxlbWVudFxuICAgIGNvbnN0IGluc2VydEFmdGVyID0gKG5ld05vZGUsIGV4aXN0aW5nTm9kZSkgPT4ge1xuICAgICAgICBleGlzdGluZ05vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgZXhpc3RpbmdOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9O1xuXG4gICAgLy9jbGVhcnMgb3V0IGFsbCBjaGlsZCBub2RlcyBvZiBhbiBlbGVtZW50LCBza2lwcyBhcyBtYW55IGVsZW1lbnRzIGFzIHJlcXVlc3RlZFxuICAgIGNvbnN0IHJlbW92ZUFsbENoaWxkcmVuID0gKGVsZW1lbnQsIHNraXAgPSAwKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSBlbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBpID4gc2tpcDsgaS0tKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkTm9kZXNbaSAtIDFdLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldEVsZW1lbnQsIGdldEVsZW1lbnRzLCBtYWtlTmV3RWxlbWVudCwgYXBwZW5kQ2hpbGRyZW4sIGluc2VydEFmdGVyLCByZW1vdmVBbGxDaGlsZHJlbiB9O1xufSkoKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxMjEyMTI7XFxufVxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcXG4gICAgI2JvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XFxuICAgIH1cXG59XFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4uc3ViLWluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi5jaG9pY2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBjb2xvcjogIzEyMTIxMjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmRpZmZpY3VsdHktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxufVxcblxcbiNzdGFydC1nYW1lIHtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxufVxcblxcbi5waWVjZS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ueC1waWVjZSB7XFxuICAgIGNvbG9yOiAjZjA1NDU0O1xcbn1cXG4ueC1waWVjZS5hY3RpdmUge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNTQ1NDtcXG59XFxuLm8tcGllY2Uge1xcbiAgICBjb2xvcjogIzMwNDc1ZTtcXG59XFxuLm8tcGllY2UuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDQ3NWU7XFxufVxcblxcbiNib2FyZCB7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcXG59XFxuLmJvYXJkLXNwYWNlIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuLm5vLXRvcC1ib3JkZXIge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG4ubm8tbGVmdC1ib3JkZXIge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuI3dpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuI25ldy1nYW1lLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jbmV3LWdhbWUtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw0REFBNEQ7SUFDNUQsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzEyMTIxMjtcXG59XFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgbWluLWhlaWdodDogODB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICAjYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXG4gICAgfVxcbn1cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi5zdWItaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLmNob2ljZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGNvbG9yOiAjMTIxMjEyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZGlmZmljdWx0eS1idXR0b24ge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuI3N0YXJ0LWdhbWUge1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuLnBpZWNlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi54LXBpZWNlIHtcXG4gICAgY29sb3I6ICNmMDU0NTQ7XFxufVxcbi54LXBpZWNlLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1NDU0O1xcbn1cXG4uby1waWVjZSB7XFxuICAgIGNvbG9yOiAjMzA0NzVlO1xcbn1cXG4uby1waWVjZS5hY3RpdmUge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDc1ZTtcXG59XFxuXFxuI2JvYXJkIHtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xcbn1cXG4uYm9hcmQtc3BhY2Uge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4ubm8tdG9wLWJvcmRlciB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcbi5uby1sZWZ0LWJvcmRlciB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4jd2lubmVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jbmV3LWdhbWUtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbiNuZXctZ2FtZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IERPTU1hbmlwIH0gZnJvbSBcIi4vRE9NTWFuaXBcIjtcblxuY29uc3QgUGxheWVyID0gdHlwZSA9PiB7XG4gICAgY29uc3QgZ2V0VHlwZSA9ICgpID0+IHR5cGU7XG4gICAgcmV0dXJuIHsgZ2V0VHlwZSB9O1xufTtcblxuY29uc3QgQUlQbGF5ZXIgPSAodHlwZSwgZGlmZmljdWx0eSkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0VHlwZSB9ID0gUGxheWVyKHR5cGUpO1xuXG4gICAgLy9pZiBzb21lYm9keSBjYW4gd2luLCBnbyB0aGVyZS5cbiAgICBjb25zdCBfZGVmZW5kT3JBdHRhY2sgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgX2R1bW15Qm9hcmQgPSBib2FyZC5nZXRCb2FyZCgpLm1hcChlbGUgPT4gZWxlKTtcbiAgICAgICAgICAgIGlmIChfZHVtbXlCb2FyZFtpXSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgX2R1bW15Qm9hcmRbaV0gPSBwbGF5ZXIuZ2V0VHlwZSgpO1xuICAgICAgICAgICAgICAgIGlmIChib2FyZC5jaGVja0lmV29uKF9kdW1teUJvYXJkKSA9PSBwbGF5ZXIuZ2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKGksIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLy9waWNrcyBhIHJhbmRvbSBlbXB0eSBzcG90XG4gICAgY29uc3QgX3BpY2tSYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBfcmFuZFN0YXJ0ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYm9hcmQuZ2V0Qm9hcmQoKS5sZW5ndGgpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVtfcmFuZFN0YXJ0XSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoX3JhbmRTdGFydCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcmFuZFN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgaWYgKF9yYW5kU3RhcnQgPT0gYm9hcmQuZ2V0Qm9hcmQoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3JhbmRTdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9jaG9vc2VNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgX3BsYXlNYWRlID0gZmFsc2U7XG4gICAgICAgIGxldCBfb3BwUGxheXMgPSBib2FyZFxuICAgICAgICAgICAgLmdldEJvYXJkKClcbiAgICAgICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IChiID09IGRpc3BsYXkuZ2V0UGxheWVyMSgpLmdldFR5cGUoKSA/IGEgKyAxIDogYSksIDApO1xuXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIEFJIGNhbiB3aW5cbiAgICAgICAgX3BsYXlNYWRlID0gX2RlZmVuZE9yQXR0YWNrLmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIFBsYXllciBjYW4gd2luXG4gICAgICAgIGlmICghX3BsYXlNYWRlKSB7XG4gICAgICAgICAgICBfcGxheU1hZGUgPSBfZGVmZW5kT3JBdHRhY2suY2FsbCh0aGlzLCBkaXNwbGF5LmdldFBsYXllcjEoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfcGxheU1hZGUpIHtcbiAgICAgICAgICAgIGlmIChfb3BwUGxheXMgPT0gMCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKDAsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX29wcFBsYXlzID09IDEgJiYgdHlwZSA9PSBcInhcIikge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpWzhdID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoOCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9vcHBQbGF5cyA9PSAyKSB7XG4gICAgICAgICAgICAgICAgLy9JZiB0aGUgb3Bwb25lbnQgcGxheWVkIG9uIHR3byBjb3JuZXJzLCBwbGF5IG9uIGEgc2lkZS5cbiAgICAgICAgICAgICAgICBsZXQgX3NpZGVQaWVjZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGJvYXJkLmdldEJvYXJkKCkubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NpZGVQaWVjZXMucHVzaChib2FyZC5nZXRCb2FyZCgpW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFfc2lkZVBpZWNlcy5pbmNsdWRlcyhkaXNwbGF5LmdldFBsYXllcjEoKS5nZXRUeXBlKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKDEsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2dvIHRvIHRoZSBtaWRkbGUgaWYgaXQncyBhdmFpbGFibGVcbiAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpWzRdID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZSg0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAvL2dvIHRvIHRoZSBjb3JuZXIgaWYgdGhlIG1pZGRsZSBpcyB0YWtlblxuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZC5nZXRCb2FyZCgpWzBdID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZSgwLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vb3IgZWxzZSBwaWNrIGEgcmFuZG9tIHNwb3QuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcGlja1JhbmRvbS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VNb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL2RlY2lkZWQgd2hldGhlciB0byBtYWtlIHRoZSBjb3JyZWN0IG1vdmUgb3IgcmFuZG9tIG1vdmUgYmFzZWQgb24gZGlmZmljdWx0eVxuICAgICAgICBpZiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlmZmljdWx0eSkgPT0gMCkge1xuICAgICAgICAgICAgX2Nob29zZU1vdmUuY2FsbCh0aGlzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9waWNrUmFuZG9tLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0VHlwZSwgbWFrZU1vdmUgfTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuY29uc3QgX21ha2VEaXNwbGF5ID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImhlYWRlclwiLCBcIlwiLCBcIlRpYy1UYWMtVG9lXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImNvbnRlbnRcIik7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImJvYXJkLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwaWVjZVNlbGVjdGlvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcInBpZWNlLXNlbGVjdGlvblwiLFxuICAgICAgICBcImluc3RydWN0aW9uc1wiLFxuICAgICAgICBcIlBsZWFzZSBTZWxlY3QgWW91ciBQaWVjZTpcIlxuICAgICk7XG4gICAgY29uc3QgcGllY2VTZWxlY3Rpb25IZWxwZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJwaWVjZS1zZWxlY3Rpb24taGVscGVyXCIsXG4gICAgICAgIFwic3ViLWluc3RydWN0aW9uc1wiLFxuICAgICAgICBcIlggZ29lcyBmaXJzdCwgTyBnb2VzIHNlY29uZFwiXG4gICAgKTtcbiAgICBjb25zdCBwaWVjZUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwicGllY2UtY29udGFpbmVyXCIsIFwiY2hvaWNlLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB4UGllY2UgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIngtcGllY2VcIiwgXCJwaWVjZS1idXR0b24geC1waWVjZSBhY3RpdmVcIiwgXCJ4XCIsIHtcbiAgICAgICAgdmFsdWU6IFwieFwiLFxuICAgIH0pO1xuICAgIGNvbnN0IG9QaWVjZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiby1waWVjZVwiLCBcInBpZWNlLWJ1dHRvbiBvLXBpZWNlXCIsIFwib1wiLCB7XG4gICAgICAgIHZhbHVlOiBcIm9cIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGFpU2VsZWN0aW9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiYWktc2VsZWN0aW9uXCIsXG4gICAgICAgIFwiaW5zdHJ1Y3Rpb25zXCIsXG4gICAgICAgIFwiUGxlYXNlIFNlbGVjdCBUaGUgRGlmZmljdWx0eVwiXG4gICAgKTtcbiAgICBjb25zdCBkaWZmaWN1bHR5Q29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJkaWZmaWN1bHR5LWNvbnRhaW5lclwiLCBcImNob2ljZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgZWFzeUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiZWFzeS1idXR0b25cIiwgXCJkaWZmaWN1bHR5LWJ1dHRvbiBhY3RpdmVcIiwgXCJFYXN5XCIsIHtcbiAgICAgICAgdmFsdWU6IFwiM1wiLFxuICAgIH0pO1xuICAgIGNvbnN0IG1lZGl1bUJ1dHRvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwibWVkaXVtLWJ1dHRvblwiLCBcImRpZmZpY3VsdHktYnV0dG9uXCIsIFwiTWVkaXVtXCIsIHtcbiAgICAgICAgdmFsdWU6IFwiMlwiLFxuICAgIH0pO1xuICAgIGNvbnN0IGltcG9zc2libGVCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgXCJpbXBvc3NpYmxlLWJ1dHRvblwiLFxuICAgICAgICBcImRpZmZpY3VsdHktYnV0dG9uXCIsXG4gICAgICAgIFwiSW1wb3NzaWJsZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogXCIxXCIsXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJzdGFydC1nYW1lXCIsIFwiXCIsIFwiU3RhcnQgR2FtZVwiKTtcblxuICAgIGNvbnN0IGJvYXJkID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJib2FyZFwiKTtcbiAgICBjb25zdCBib2FyZFNwYWNlMSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImJvYXJkLXNwYWNlIG5vLXRvcC1ib3JkZXIgbm8tbGVmdC1ib3JkZXJcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgeyBcImRhdGEtc3BhY2VcIjogMCB9XG4gICAgKTtcbiAgICBjb25zdCBib2FyZFNwYWNlMiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2Ugbm8tdG9wLWJvcmRlclwiLCBcIlwiLCB7XG4gICAgICAgIFwiZGF0YS1zcGFjZVwiOiAxLFxuICAgIH0pO1xuICAgIGNvbnN0IGJvYXJkU3BhY2UzID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgXCJib2FyZC1zcGFjZSBuby10b3AtYm9yZGVyXCIsIFwiXCIsIHtcbiAgICAgICAgXCJkYXRhLXNwYWNlXCI6IDIsXG4gICAgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLWxlZnQtYm9yZGVyXCIsIFwiXCIsIHtcbiAgICAgICAgXCJkYXRhLXNwYWNlXCI6IDMsXG4gICAgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTUgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlXCIsIFwiXCIsIHsgXCJkYXRhLXNwYWNlXCI6IDQgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTYgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlXCIsIFwiXCIsIHsgXCJkYXRhLXNwYWNlXCI6IDUgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTcgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLWxlZnQtYm9yZGVyXCIsIFwiXCIsIHtcbiAgICAgICAgXCJkYXRhLXNwYWNlXCI6IDYsXG4gICAgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTggPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlXCIsIFwiXCIsIHsgXCJkYXRhLXNwYWNlXCI6IDcgfSk7XG4gICAgY29uc3QgYm9hcmRTcGFjZTkgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlXCIsIFwiXCIsIHsgXCJkYXRhLXNwYWNlXCI6IDggfSk7XG5cbiAgICBjb25zdCB3aW5uZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIndpbm5lclwiKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwaWVjZUNvbnRhaW5lciwgeFBpZWNlLCBvUGllY2UpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRpZmZpY3VsdHlDb250YWluZXIsIGVhc3lCdXR0b24sIG1lZGl1bUJ1dHRvbiwgaW1wb3NzaWJsZUJ1dHRvbik7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBib2FyZFNwYWNlMSxcbiAgICAgICAgYm9hcmRTcGFjZTIsXG4gICAgICAgIGJvYXJkU3BhY2UzLFxuICAgICAgICBib2FyZFNwYWNlNCxcbiAgICAgICAgYm9hcmRTcGFjZTUsXG4gICAgICAgIGJvYXJkU3BhY2U2LFxuICAgICAgICBib2FyZFNwYWNlNyxcbiAgICAgICAgYm9hcmRTcGFjZTgsXG4gICAgICAgIGJvYXJkU3BhY2U5XG4gICAgKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgYm9hcmRDb250YWluZXIsXG4gICAgICAgIHBpZWNlU2VsZWN0aW9uLFxuICAgICAgICBwaWVjZVNlbGVjdGlvbkhlbHBlcixcbiAgICAgICAgcGllY2VDb250YWluZXIsXG4gICAgICAgIGFpU2VsZWN0aW9uLFxuICAgICAgICBkaWZmaWN1bHR5Q29udGFpbmVyLFxuICAgICAgICBzdGFydEdhbWUsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICB3aW5uZXJcbiAgICApO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCk7XG59KSgpO1xuXG5jb25zdCBib2FyZCA9ICgoKSA9PiB7XG4gICAgbGV0IF9nYW1lQm9hcmQgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl07XG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBfZ2FtZUJvYXJkO1xuXG4gICAgY29uc3QgdXBkYXRlID0gKGluZGV4LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgX2dhbWVCb2FyZFtpbmRleF0gPSBwbGF5ZXIuZ2V0VHlwZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckJvYXJkID0gKCkgPT4gKF9nYW1lQm9hcmQgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pO1xuICAgIC8vaWYgYWxsIHRocmVlIGVudHJpZXMgYXJlIHRoZSBzYW1lLCByZXR1cm4gdHJ1ZVxuICAgIGNvbnN0IF9jaGVja1dpbkNvbiA9IChhLCBiLCBjKSA9PiAoYSA9PSBiICYmIGEgPT0gYyAmJiBhICE9IFwiXCIgPyAxIDogMCk7XG5cbiAgICAvL2NoZWNrIGFsbCByb3dzLCBjb2x1bW5zIGFuZCBkaWFnb25hbHMgZm9yIHdpbnNcbiAgICBjb25zdCBjaGVja0lmV29uID0gYm9hcmQgPT4ge1xuICAgICAgICBsZXQgX3dpbm5lciA9IF9jaGVja1dpbkNvbihib2FyZFswXSwgYm9hcmRbMV0sIGJvYXJkWzJdKVxuICAgICAgICAgICAgPyBib2FyZFswXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbM10sIGJvYXJkWzRdLCBib2FyZFs1XSlcbiAgICAgICAgICAgID8gYm9hcmRbM11cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzZdLCBib2FyZFs3XSwgYm9hcmRbOF0pXG4gICAgICAgICAgICA/IGJvYXJkWzZdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFswXSwgYm9hcmRbM10sIGJvYXJkWzZdKVxuICAgICAgICAgICAgPyBib2FyZFswXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbMV0sIGJvYXJkWzRdLCBib2FyZFs3XSlcbiAgICAgICAgICAgID8gYm9hcmRbMV1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzJdLCBib2FyZFs1XSwgYm9hcmRbOF0pXG4gICAgICAgICAgICA/IGJvYXJkWzJdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFswXSwgYm9hcmRbNF0sIGJvYXJkWzhdKVxuICAgICAgICAgICAgPyBib2FyZFswXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbMl0sIGJvYXJkWzRdLCBib2FyZFs2XSlcbiAgICAgICAgICAgID8gYm9hcmRbNl1cbiAgICAgICAgICAgIDogMDtcblxuICAgICAgICBpZiAoX3dpbm5lciA9PSAwICYmICFib2FyZC5pbmNsdWRlcyhcIlwiKSkge1xuICAgICAgICAgICAgX3dpbm5lciA9IFwiZHJhd1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF93aW5uZXI7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHVwZGF0ZSwgZ2V0Qm9hcmQsIGNoZWNrSWZXb24sIGNsZWFyQm9hcmQgfTtcbn0pKCk7XG5cbi8vdGhpcyBzZWN0aW9uIHJlZ2FyZHMgdGhlIHBsYXllciBzZWxlY3Rpb24gYnV0dG9uc1xuY29uc3QgcGxheWVyU2VsID0gKCgpID0+IHtcbiAgICAvL2RlZmF1bHQgcGxheWVyIHNlbGVjdGlvbiBpcyB4XG4gICAgbGV0IF9wbGF5ZXJTZWxlY3Rpb24gPSBcInhcIjtcbiAgICBjb25zdCBfcGxheWVyUGllY2VTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBpZWNlLWJ1dHRvblwiKTtcbiAgICBjb25zdCBfZ2V0UGxheWVyQ2hvaWNlID0gZSA9PiB7XG4gICAgICAgIC8vZ2V0cyB0aGUgdmFsdWUgb2Ygd2hhdCBpcyBzZWxlY3RlZCBhbmQgbWFrZXMgb25seSBvbmNlIGNob2ljZSBhY3RpdmUgYXQgYSB0aW1lXG4gICAgICAgIF9wbGF5ZXJTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24gIT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICBjb25zdCBfYWN0aXZhdGVQbGF5ZXJzID0gKCkgPT5cbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2dldFBsYXllckNob2ljZSkpO1xuICAgIF9hY3RpdmF0ZVBsYXllcnMoKTtcblxuICAgIC8vYSBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBidXR0b25zLlxuICAgIGNvbnN0IGRlYWN0aXZhdGVQbGF5ZXJzID0gKCkgPT5cbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2dldFBsYXllckNob2ljZSkpO1xuXG4gICAgY29uc3QgcmVzZXRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIF9wbGF5ZXJTZWxlY3Rpb24gPSBcInhcIjtcbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9hY3RpdmF0ZVBsYXllcnMoKTtcbiAgICB9O1xuXG4gICAgLy9mdW5jdGlvbiB0aGF0IHJldHVybnMgd2hhdCB0aGUgcGxheWVyIGNob3NlXG4gICAgY29uc3QgZ2V0UGxheWVyU2VsZWN0aW9uID0gKCkgPT4gX3BsYXllclNlbGVjdGlvbjtcblxuICAgIHJldHVybiB7IGdldFBsYXllclNlbGVjdGlvbiwgZGVhY3RpdmF0ZVBsYXllcnMsIHJlc2V0UGxheWVyIH07XG59KSgpO1xuXG4vL3RoaXMgc2VjdGlvbiByZWdhcmRzIHRoZSBkaWZmaWN1bHR5IHNlbGVjdGlvbiBidXR0b25zXG5jb25zdCBkaWZmaWN1bHR5U2VsID0gKCgpID0+IHtcbiAgICAvL2RlZmF1bHQgZGlmZmljdWx0eSBzZWxlY3Rpb24gaXMgRWFzeVxuICAgIGxldCBfZGlmU2VsZWN0aW9uID0gMztcbiAgICBjb25zdCBfZGlmZmljdWx0eVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGlmZmljdWx0eS1idXR0b25cIik7XG4gICAgY29uc3QgX2dldERpZkNob2ljZSA9IGUgPT4ge1xuICAgICAgICAvL2dldHMgdGhlIHZhbHVlIG9mIHdoYXQgaXMgc2VsZWN0ZWQgYW5kIG1ha2VzIG9ubHkgb25jZSBjaG9pY2UgYWN0aXZlIGF0IGEgdGltZVxuICAgICAgICBfZGlmU2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24gIT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICBjb25zdCBfYWN0aXZhdGVEaWZmaWN1bHR5ID0gKCkgPT5cbiAgICAgICAgX2RpZmZpY3VsdHlTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfZ2V0RGlmQ2hvaWNlKSk7XG4gICAgX2FjdGl2YXRlRGlmZmljdWx0eSgpO1xuXG4gICAgLy9hIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGJ1dHRvbnMuXG4gICAgY29uc3QgZGVhY3RpdmF0ZURpZmZpY3VsdHkgPSAoKSA9PlxuICAgICAgICBfZGlmZmljdWx0eVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9nZXREaWZDaG9pY2UpKTtcblxuICAgIC8vcmVzZXRzIHRvIGRlZmF1bHRcbiAgICBjb25zdCByZXNldERpZmZpY3VsdHkgPSAoKSA9PiB7XG4gICAgICAgIF9kaWZTZWxlY3Rpb24gPSAzO1xuICAgICAgICBfZGlmZmljdWx0eVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9hY3RpdmF0ZURpZmZpY3VsdHkoKTtcbiAgICB9O1xuXG4gICAgLy9mdW5jdGlvbiB0aGF0IHJldHVybnMgd2hhdCB0aGUgcGxheWVyIGNob3NlXG4gICAgY29uc3QgZ2V0RGlmZmljdWx0eVNlbGVjdGlvbiA9ICgpID0+IF9kaWZTZWxlY3Rpb247XG5cbiAgICByZXR1cm4geyBnZXREaWZmaWN1bHR5U2VsZWN0aW9uLCBkZWFjdGl2YXRlRGlmZmljdWx0eSwgcmVzZXREaWZmaWN1bHR5IH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgICBsZXQgX3BsYXllcjE7XG4gICAgbGV0IF9wbGF5ZXIyO1xuICAgIGxldCBfY3VycmVudFBsYXllcjtcbiAgICBsZXQgX2dhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IF9nYW1lQm9hcmRQaWVjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXNwYWNlXCIpO1xuICAgIGNvbnN0IF9zdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0LWdhbWVcIik7XG4gICAgY29uc3QgX3dpbm5lckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbm5lclwiKTtcblxuICAgIGNvbnN0IF9uZXdHYW1lID0gKCkgPT4ge1xuICAgICAgICBfZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgYm9hcmQuY2xlYXJCb2FyZCgpO1xuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIngtcGllY2VcIik7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm8tcGllY2VcIik7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImZpbGxlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXllclNlbC5yZXNldFBsYXllcigpO1xuICAgICAgICBkaWZmaWN1bHR5U2VsLnJlc2V0RGlmZmljdWx0eSgpO1xuICAgICAgICBfc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIF9zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9zdGFydEdhbWUpO1xuICAgICAgICBfd2lubmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIF93aW5uZXJEaXNwbGF5LnBhcmVudEVsZW1lbnQubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICAvL2NyZWF0ZXMgdGhlIHR3byBwbGF5ZXJzLCBkZWFjdGl2YXRlcyBzZXR0aW5ncyBidXR0b25zLCBhbmQgYWN0aXZhdGVzIGJvYXJkXG4gICAgY29uc3QgX3N0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgX3N0YXJ0R2FtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBfc3RhcnRHYW1lQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfc3RhcnRHYW1lKTtcbiAgICAgICAgX3BsYXllcjEgPSBQbGF5ZXIocGxheWVyU2VsLmdldFBsYXllclNlbGVjdGlvbigpKTtcbiAgICAgICAgcGxheWVyU2VsLmRlYWN0aXZhdGVQbGF5ZXJzKCk7XG4gICAgICAgIF9wbGF5ZXIxLmdldFR5cGUoKSA9PSBcInhcIlxuICAgICAgICAgICAgPyAoX3BsYXllcjIgPSBBSVBsYXllcihcIm9cIiwgZGlmZmljdWx0eVNlbC5nZXREaWZmaWN1bHR5U2VsZWN0aW9uKCkpKVxuICAgICAgICAgICAgOiAoX3BsYXllcjIgPSBBSVBsYXllcihcInhcIiwgZGlmZmljdWx0eVNlbC5nZXREaWZmaWN1bHR5U2VsZWN0aW9uKCkpKTtcbiAgICAgICAgZGlmZmljdWx0eVNlbC5kZWFjdGl2YXRlRGlmZmljdWx0eSgpO1xuICAgICAgICBpZiAoX3BsYXllcjEuZ2V0VHlwZSgpID09IFwieFwiKSB7XG4gICAgICAgICAgICBfY3VycmVudFBsYXllciA9IF9wbGF5ZXIxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2N1cnJlbnRQbGF5ZXIgPSBfcGxheWVyMjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX3BsYXllcjIubWFrZU1vdmUoKSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3BsYXlQbGF5ZXIxKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IF91cGRhdGVCb2FyZFBpZWNlID0gKGluZGV4LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgX2dhbWVCb2FyZFBpZWNlc1tpbmRleF0udGV4dENvbnRlbnQgPSBwbGF5ZXIuZ2V0VHlwZSgpO1xuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzW2luZGV4XS5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5nZXRUeXBlKCl9LXBpZWNlYCk7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJmaWxsZWRcIik7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXNbaW5kZXhdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfcGxheVBsYXllcjEpO1xuICAgICAgICBib2FyZC51cGRhdGUoaW5kZXgsIHBsYXllcik7XG4gICAgfTtcblxuICAgIGNvbnN0IF9wYXVzZUNvbXBQbGF5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDUwMCkpO1xuICAgIH07XG4gICAgLy9pZiB0aGUgY3VycmVudCBwbGF5ZXIgaXMgdGhlIGNvbXB1dGVyLCB0aGV5IG1ha2UgdGhlaXIgbW92ZVxuICAgIGNvbnN0IF9uZXh0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKF9jdXJyZW50UGxheWVyID09IF9wbGF5ZXIxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoX2N1cnJlbnRQbGF5ZXIgPT0gX3BsYXllcjIpIHtcbiAgICAgICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmJvYXJkLXNwYWNlOm5vdCguZmlsbGVkKVwiKS5mb3JFYWNoKGJ1dHRvbiA9PlxuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3BsYXlQbGF5ZXIxKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIF9wYXVzZUNvbXBQbGF5KClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBfcGxheWVyMi5tYWtlTW92ZSgpKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1hbmlwLmdldEVsZW1lbnRzKFwiLmJvYXJkLXNwYWNlOm5vdCguZmlsbGVkKVwiKS5mb3JFYWNoKGJ1dHRvbiA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3BsYXlQbGF5ZXIxKVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vcGxheXMgYSBwaWVjZSBhbmQgY2hlY2tzIGlmIHRoZSBnYW1lIGlzIG92ZXJcbiAgICBjb25zdCBwbGF5UGllY2UgPSAoaW5kZXgsIHBsYXllcikgPT4ge1xuICAgICAgICBfdXBkYXRlQm9hcmRQaWVjZShpbmRleCwgcGxheWVyKTtcbiAgICAgICAgaWYgKGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkpIHtcbiAgICAgICAgICAgIGlmIChib2FyZC5jaGVja0lmV29uKGJvYXJkLmdldEJvYXJkKCkpID09IFwieFwiIHx8IGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkgPT0gXCJvXCIpIHtcbiAgICAgICAgICAgICAgICBfd2lubmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3BsYXllci5nZXRUeXBlKCkudG9VcHBlckNhc2UoKX0gV2lucyFgO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZC5jaGVja0lmV29uKGJvYXJkLmdldEJvYXJkKCkpID09IFwiZHJhd1wiKSB7XG4gICAgICAgICAgICAgICAgX3dpbm5lckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIkl0J3MgYSBEcmF3XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZ2FtZUJvYXJkUGllY2VzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZXBsYWNlV2l0aChidXR0b24uY2xvbmVOb2RlKHRydWUpKSk7XG4gICAgICAgICAgICAvL25lZWQgdG8gdXBkYXRlIHdoYXQgdGhlIGdhbWVib2FyZCBwaWVjZXMgYXJlIGFmdGVyIHRoZXkndmUgYmVlbiBjbG9uZWQgdG8gcmVtb3ZlXG4gICAgICAgICAgICAvL3RoZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIF9nYW1lQm9hcmRQaWVjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXNwYWNlXCIpO1xuICAgICAgICAgICAgX2dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIF9jdXJyZW50UGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBfbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBfbmV3R2FtZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1nYW1lLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIF9uZXdHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gXCJOZXcgR2FtZT9cIjtcbiAgICAgICAgICAgIF93aW5uZXJEaXNwbGF5LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoX25ld0dhbWVCdXR0b24pO1xuICAgICAgICAgICAgX25ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9uZXdHYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9nYW1lT3Zlcikge1xuICAgICAgICAgICAgX2N1cnJlbnRQbGF5ZXIgPT0gX3BsYXllcjEgPyAoX2N1cnJlbnRQbGF5ZXIgPSBfcGxheWVyMikgOiAoX2N1cnJlbnRQbGF5ZXIgPSBfcGxheWVyMSk7XG4gICAgICAgICAgICBfbmV4dE1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfcGxheVBsYXllcjEgPSBlID0+IHtcbiAgICAgICAgcGxheVBpZWNlKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnNwYWNlLCBfcGxheWVyMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllcjEgPSAoKSA9PiBfcGxheWVyMTtcblxuICAgIF9zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9zdGFydEdhbWUpO1xuXG4gICAgcmV0dXJuIHsgcGxheVBpZWNlLCBnZXRQbGF5ZXIxIH07XG59KSgpO1xuIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFrZU5ld0VsZW1lbnQiLCJ0eXBlIiwiaWQiLCJIVE1MQ2xhc3MiLCJ0ZXh0IiwibmV3RWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYXR0IiwiT2JqZWN0Iiwia2V5cyIsImFwcGVuZENoaWxkcmVuIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QWZ0ZXIiLCJuZXdOb2RlIiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJlbGVtZW50Iiwic2tpcCIsImkiLCJjaGlsZE5vZGVzIiwicmVtb3ZlIiwiUGxheWVyIiwiZ2V0VHlwZSIsIkFJUGxheWVyIiwiZGlmZmljdWx0eSIsIl9kZWZlbmRPckF0dGFjayIsInBsYXllciIsIl9kdW1teUJvYXJkIiwiYm9hcmQiLCJnZXRCb2FyZCIsIm1hcCIsImVsZSIsImNoZWNrSWZXb24iLCJkaXNwbGF5IiwicGxheVBpZWNlIiwiX3BpY2tSYW5kb20iLCJfcmFuZFN0YXJ0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiX2Nob29zZU1vdmUiLCJfcGxheU1hZGUiLCJfb3BwUGxheXMiLCJyZWR1Y2UiLCJhIiwiYiIsImdldFBsYXllcjEiLCJjYWxsIiwiX3NpZGVQaWVjZXMiLCJwdXNoIiwiaW5jbHVkZXMiLCJtYWtlTW92ZSIsIl9tYWtlRGlzcGxheSIsImhlYWRlciIsImNvbnRlbnQiLCJib2FyZENvbnRhaW5lciIsInBpZWNlU2VsZWN0aW9uIiwicGllY2VTZWxlY3Rpb25IZWxwZXIiLCJwaWVjZUNvbnRhaW5lciIsInhQaWVjZSIsInZhbHVlIiwib1BpZWNlIiwiYWlTZWxlY3Rpb24iLCJkaWZmaWN1bHR5Q29udGFpbmVyIiwiZWFzeUJ1dHRvbiIsIm1lZGl1bUJ1dHRvbiIsImltcG9zc2libGVCdXR0b24iLCJzdGFydEdhbWUiLCJib2FyZFNwYWNlMSIsImJvYXJkU3BhY2UyIiwiYm9hcmRTcGFjZTMiLCJib2FyZFNwYWNlNCIsImJvYXJkU3BhY2U1IiwiYm9hcmRTcGFjZTYiLCJib2FyZFNwYWNlNyIsImJvYXJkU3BhY2U4IiwiYm9hcmRTcGFjZTkiLCJ3aW5uZXIiLCJib2R5IiwiX2dhbWVCb2FyZCIsInVwZGF0ZSIsImluZGV4IiwiY2xlYXJCb2FyZCIsIl9jaGVja1dpbkNvbiIsImMiLCJfd2lubmVyIiwicGxheWVyU2VsIiwiX3BsYXllclNlbGVjdGlvbiIsIl9wbGF5ZXJQaWVjZVNlbGVjdG9ycyIsIl9nZXRQbGF5ZXJDaG9pY2UiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYnV0dG9uIiwiX2FjdGl2YXRlUGxheWVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWFjdGl2YXRlUGxheWVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldFBsYXllciIsImdldFBsYXllclNlbGVjdGlvbiIsImRpZmZpY3VsdHlTZWwiLCJfZGlmU2VsZWN0aW9uIiwiX2RpZmZpY3VsdHlTZWxlY3RvcnMiLCJfZ2V0RGlmQ2hvaWNlIiwiX2FjdGl2YXRlRGlmZmljdWx0eSIsImRlYWN0aXZhdGVEaWZmaWN1bHR5IiwicmVzZXREaWZmaWN1bHR5IiwiZ2V0RGlmZmljdWx0eVNlbGVjdGlvbiIsIl9wbGF5ZXIxIiwiX3BsYXllcjIiLCJfY3VycmVudFBsYXllciIsIl9nYW1lT3ZlciIsIl9nYW1lQm9hcmRQaWVjZXMiLCJfc3RhcnRHYW1lQnV0dG9uIiwiX3dpbm5lckRpc3BsYXkiLCJfbmV3R2FtZSIsIl9zdGFydEdhbWUiLCJwYXJlbnRFbGVtZW50IiwibGFzdENoaWxkIiwic2V0VGltZW91dCIsIl9wbGF5UGxheWVyMSIsIl91cGRhdGVCb2FyZFBpZWNlIiwiX3BhdXNlQ29tcFBsYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9uZXh0TW92ZSIsInRoZW4iLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2VXaXRoIiwiY2xvbmVOb2RlIiwiX25ld0dhbWVCdXR0b24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInNwYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==