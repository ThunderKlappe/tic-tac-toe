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
};

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
  }();

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

    _gameBoardPieces.forEach(function (button, index) {
      return button.addEventListener("click", playPiece.bind(null, index, _player1));
    });
  };

  var _updateBoardPiece = function _updateBoardPiece(index, player) {
    _gameBoardPieces[index].textContent = player.getType();

    _gameBoardPieces[index].classList.add("".concat(player.getType(), "-piece"));

    _gameBoardPieces[index].replaceWith(_gameBoardPieces[index].cloneNode(true));

    board.update(index, player);
  }; //if the current player is the computer, they make their move


  var _nextMove = function _nextMove() {
    if (_currentPlayer == _player1) {
      return;
    } else {
      setTimeout(function () {
        return _player2.makeMove();
      }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQW1CckMsTUFBTSxDQUFDc0MsU0FBUCxDQUFpQixJQUFqQixDQUFuQixDQUFKO0FBQUEsT0FBL0IsRUFOb0MsQ0FPcEM7QUFDQTs7O0FBQ0FYLE1BQUFBLGdCQUFnQixHQUFHOUcsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixjQUExQixDQUFuQjtBQUNBMEcsTUFBQUEsU0FBUyxHQUFHLElBQVo7O0FBQ0EsVUFBTWUsY0FBYyxHQUFHNUgsUUFBUSxDQUFDVSxhQUFULENBQXVCLFFBQXZCLENBQXZCOztBQUNBa0gsTUFBQUEsY0FBYyxDQUFDakgsWUFBZixDQUE0QixJQUE1QixFQUFrQyxpQkFBbEM7O0FBQ0FpSCxNQUFBQSxjQUFjLENBQUNoSCxXQUFmLEdBQTZCLFdBQTdCOztBQUNBb0csTUFBQUEsY0FBYyxDQUFDRyxhQUFmLENBQTZCNUYsV0FBN0IsQ0FBeUNxRyxjQUF6Qzs7QUFDQUEsTUFBQUEsY0FBYyxDQUFDdkMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUM0QixRQUF6QztBQUNIOztBQUNELFFBQUksQ0FBQ0osU0FBTCxFQUFnQjtBQUNaRCxNQUFBQSxjQUFjLElBQUlGLFFBQWxCLEdBQThCRSxjQUFjLEdBQUdELFFBQS9DLEdBQTREQyxjQUFjLEdBQUdGLFFBQTdFOztBQUNBZ0IsTUFBQUEsU0FBUztBQUNaO0FBQ0osR0F2QkQ7O0FBeUJBLE1BQU03RCxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU02QyxRQUFOO0FBQUEsR0FBbkI7O0FBRUFLLEVBQUFBLGdCQUFnQixDQUFDMUIsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDNkIsVUFBM0M7O0FBRUEsU0FBTztBQUFFakUsSUFBQUEsU0FBUyxFQUFUQSxTQUFGO0FBQWFZLElBQUFBLFVBQVUsRUFBVkE7QUFBYixHQUFQO0FBQ0gsQ0FsSGUsRUFBaEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL0RPTU1hbmlwLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IERPTU1hbmlwID0gKCgpID0+IHtcbiAgICAvL3Nob3J0aGFuZCB0byBnZXQgZWxlbWVudHMgZWFzaWVyXG4gICAgY29uc3QgZ2V0RWxlbWVudCA9IHNlbGVjdG9yID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGNvbnN0IGdldEVsZW1lbnRzID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cbiAgICAvL3Nob3J0aGFuZCB0byBtYWtlIGEgbmV3IGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzIHRvIGl0XG4gICAgY29uc3QgbWFrZU5ld0VsZW1lbnQgPSAodHlwZSwgaWQgPSBcIlwiLCBIVE1MQ2xhc3MgPSBcIlwiLCB0ZXh0ID0gXCJcIiwgLi4uYXR0cmlidXRlcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgaWYgKGlkICE9IFwiXCIpIHtcbiAgICAgICAgICAgIG5ld0VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChIVE1MQ2xhc3MgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBIVE1MQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0VsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ID0+IG5ld0VsZW0uc2V0QXR0cmlidXRlKE9iamVjdC5rZXlzKGF0dClbMF0sIGF0dFtPYmplY3Qua2V5cyhhdHQpXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZW07XG4gICAgfTtcblxuICAgIC8vYWRkcyBhbGwgb2YgdGhlIERPTSBlbGVtZW50cyB0byBhIHBhcmVudFxuICAgIGNvbnN0IGFwcGVuZENoaWxkcmVuID0gKHBhcmVudCwgLi4uY2hpbGRyZW4pID0+IHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICB9O1xuXG4gICAgLy9pbnNlcnRzIGEgRE9NIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlciBlbGVtZW50XG4gICAgY29uc3QgaW5zZXJ0QWZ0ZXIgPSAobmV3Tm9kZSwgZXhpc3RpbmdOb2RlKSA9PiB7XG4gICAgICAgIGV4aXN0aW5nTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCBleGlzdGluZ05vZGUubmV4dFNpYmxpbmcpO1xuICAgIH07XG5cbiAgICAvL2NsZWFycyBvdXQgYWxsIGNoaWxkIG5vZGVzIG9mIGFuIGVsZW1lbnQsIHNraXBzIGFzIG1hbnkgZWxlbWVudHMgYXMgcmVxdWVzdGVkXG4gICAgY29uc3QgcmVtb3ZlQWxsQ2hpbGRyZW4gPSAoZWxlbWVudCwgc2tpcCA9IDApID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPiBza2lwOyBpLS0pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlc1tpIC0gMV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgZ2V0RWxlbWVudCwgZ2V0RWxlbWVudHMsIG1ha2VOZXdFbGVtZW50LCBhcHBlbmRDaGlsZHJlbiwgaW5zZXJ0QWZ0ZXIsIHJlbW92ZUFsbENoaWxkcmVuIH07XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzEyMTIxMjtcXG59XFxuI2hlYWRlciB7XFxuICAgIGhlaWdodDogNzJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcXG4gICAgbWluLWhlaWdodDogODB2aDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xcbiAgICAjYm9hcmQtY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAtbW96LWF2YWlsYWJsZTtcXG4gICAgfVxcbn1cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi5zdWItaW5zdHJ1Y3Rpb25zIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLmNob2ljZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGNvbG9yOiAjMTIxMjEyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZGlmZmljdWx0eS1idXR0b24ge1xcbiAgICB3aWR0aDogMTEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDBweDtcXG59XFxuXFxuI3N0YXJ0LWdhbWUge1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuLnBpZWNlLWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi54LXBpZWNlIHtcXG4gICAgY29sb3I6ICNmMDU0NTQ7XFxufVxcbi54LXBpZWNlLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA1NDU0O1xcbn1cXG4uby1waWVjZSB7XFxuICAgIGNvbG9yOiAjMzA0NzVlO1xcbn1cXG4uby1waWVjZS5hY3RpdmUge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDc1ZTtcXG59XFxuXFxuI2JvYXJkIHtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzJSAzMyUgMzMlO1xcbn1cXG4uYm9hcmQtc3BhY2Uge1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4ubm8tdG9wLWJvcmRlciB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcbi5uby1sZWZ0LWJvcmRlciB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4jd2lubmVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4jbmV3LWdhbWUtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbiNuZXctZ2FtZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDREQUE0RDtJQUM1RCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMTIxMjEyO1xcbn1cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2JvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XFxuICAgICNib2FyZC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xcbiAgICB9XFxufVxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLnN1Yi1pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4uY2hvaWNlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgY29sb3I6ICMxMjEyMTI7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5kaWZmaWN1bHR5LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG4jc3RhcnQtZ2FtZSB7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4ucGllY2UtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLngtcGllY2Uge1xcbiAgICBjb2xvcjogI2YwNTQ1NDtcXG59XFxuLngtcGllY2UuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDU0NTQ7XFxufVxcbi5vLXBpZWNlIHtcXG4gICAgY29sb3I6ICMzMDQ3NWU7XFxufVxcbi5vLXBpZWNlLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0NzVlO1xcbn1cXG5cXG4jYm9hcmQge1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XFxufVxcbi5ib2FyZC1zcGFjZSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5uby10b3AtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuLm5vLWxlZnQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbiN3aW5uZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNuZXctZ2FtZS1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuI25ldy1nYW1lLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgRE9NTWFuaXAgfSBmcm9tIFwiLi9ET01NYW5pcFwiO1xuXG5jb25zdCBQbGF5ZXIgPSB0eXBlID0+IHtcbiAgICBjb25zdCBnZXRUeXBlID0gKCkgPT4gdHlwZTtcbiAgICByZXR1cm4geyBnZXRUeXBlIH07XG59O1xuXG5jb25zdCBBSVBsYXllciA9ICh0eXBlLCBkaWZmaWN1bHR5KSA9PiB7XG4gICAgY29uc3QgeyBnZXRUeXBlIH0gPSBQbGF5ZXIodHlwZSk7XG5cbiAgICAvL2lmIHNvbWVib2R5IGNhbiB3aW4sIGdvIHRoZXJlLlxuICAgIGNvbnN0IF9kZWZlbmRPckF0dGFjayA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBfZHVtbXlCb2FyZCA9IGJvYXJkLmdldEJvYXJkKCkubWFwKGVsZSA9PiBlbGUpO1xuICAgICAgICAgICAgaWYgKF9kdW1teUJvYXJkW2ldID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBfZHVtbXlCb2FyZFtpXSA9IHBsYXllci5nZXRUeXBlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmNoZWNrSWZXb24oX2R1bW15Qm9hcmQpID09IHBsYXllci5nZXRUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoaSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICAvL3BpY2tzIGEgcmFuZG9tIGVtcHR5IHNwb3RcbiAgICBjb25zdCBfcGlja1JhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IF9yYW5kU3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBib2FyZC5nZXRCb2FyZCgpLmxlbmd0aCk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmIChib2FyZC5nZXRCb2FyZCgpW19yYW5kU3RhcnRdID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZShfcmFuZFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9yYW5kU3RhcnQrKztcbiAgICAgICAgICAgICAgICBpZiAoX3JhbmRTdGFydCA9PSBib2FyZC5nZXRCb2FyZCgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBfcmFuZFN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2Nob29zZU1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBfcGxheU1hZGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9vcHBQbGF5cyA9IGJvYXJkXG4gICAgICAgICAgICAuZ2V0Qm9hcmQoKVxuICAgICAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gKGIgPT0gZGlzcGxheS5nZXRQbGF5ZXIxKCkuZ2V0VHlwZSgpID8gYSArIDEgOiBhKSwgMCk7XG5cbiAgICAgICAgLy9jaGVjayBpZiB0aGUgQUkgY2FuIHdpblxuICAgICAgICBfcGxheU1hZGUgPSBfZGVmZW5kT3JBdHRhY2suY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgUGxheWVyIGNhbiB3aW5cbiAgICAgICAgaWYgKCFfcGxheU1hZGUpIHtcbiAgICAgICAgICAgIF9wbGF5TWFkZSA9IF9kZWZlbmRPckF0dGFjay5jYWxsKHRoaXMsIGRpc3BsYXkuZ2V0UGxheWVyMSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV9wbGF5TWFkZSkge1xuICAgICAgICAgICAgaWYgKF9vcHBQbGF5cyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoMCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfb3BwUGxheXMgPT0gMSAmJiB0eXBlID09IFwieFwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbOF0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZSg4LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX29wcFBsYXlzID09IDIpIHtcbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBvcHBvbmVudCBwbGF5ZWQgb24gdHdvIGNvcm5lcnMsIHBsYXkgb24gYSBzaWRlLlxuICAgICAgICAgICAgICAgIGxldCBfc2lkZVBpZWNlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYm9hcmQuZ2V0Qm9hcmQoKS5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICBfc2lkZVBpZWNlcy5wdXNoKGJvYXJkLmdldEJvYXJkKClbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIV9zaWRlUGllY2VzLmluY2x1ZGVzKGRpc3BsYXkuZ2V0UGxheWVyMSgpLmdldFR5cGUoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoMSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZ28gdG8gdGhlIG1pZGRsZSBpZiBpdCdzIGF2YWlsYWJsZVxuICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbNF0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKDQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIC8vZ28gdG8gdGhlIGNvcm5lciBpZiB0aGUgbWlkZGxlIGlzIHRha2VuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLmdldEJvYXJkKClbMF0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKDAsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9vciBlbHNlIHBpY2sgYSByYW5kb20gc3BvdC5cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9waWNrUmFuZG9tLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWFrZU1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vZGVjaWRlZCB3aGV0aGVyIHRvIG1ha2UgdGhlIGNvcnJlY3QgbW92ZSBvciByYW5kb20gbW92ZSBiYXNlZCBvbiBkaWZmaWN1bHR5XG4gICAgICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaWZmaWN1bHR5KSA9PSAwKSB7XG4gICAgICAgICAgICBfY2hvb3NlTW92ZS5jYWxsKHRoaXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3BpY2tSYW5kb20uY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRUeXBlLCBtYWtlTW92ZSB9O1xufTtcblxuY29uc3QgYm9hcmQgPSAoKCkgPT4ge1xuICAgIGxldCBfZ2FtZUJvYXJkID0gW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdO1xuICAgIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gX2dhbWVCb2FyZDtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IChpbmRleCwgcGxheWVyKSA9PiB7XG4gICAgICAgIF9nYW1lQm9hcmRbaW5kZXhdID0gcGxheWVyLmdldFR5cGUoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2xlYXJCb2FyZCA9ICgpID0+IChfZ2FtZUJvYXJkID0gW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCJdKTtcbiAgICAvL2lmIGFsbCB0aHJlZSBlbnRyaWVzIGFyZSB0aGUgc2FtZSwgcmV0dXJuIHRydWVcbiAgICBjb25zdCBfY2hlY2tXaW5Db24gPSAoYSwgYiwgYykgPT4gKGEgPT0gYiAmJiBhID09IGMgJiYgYSAhPSBcIlwiID8gMSA6IDApO1xuXG4gICAgLy9jaGVjayBhbGwgcm93cywgY29sdW1ucyBhbmQgZGlhZ29uYWxzIGZvciB3aW5zXG4gICAgY29uc3QgY2hlY2tJZldvbiA9IGJvYXJkID0+IHtcbiAgICAgICAgbGV0IF93aW5uZXIgPSBfY2hlY2tXaW5Db24oYm9hcmRbMF0sIGJvYXJkWzFdLCBib2FyZFsyXSlcbiAgICAgICAgICAgID8gYm9hcmRbMF1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzNdLCBib2FyZFs0XSwgYm9hcmRbNV0pXG4gICAgICAgICAgICA/IGJvYXJkWzNdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFs2XSwgYm9hcmRbN10sIGJvYXJkWzhdKVxuICAgICAgICAgICAgPyBib2FyZFs2XVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbMF0sIGJvYXJkWzNdLCBib2FyZFs2XSlcbiAgICAgICAgICAgID8gYm9hcmRbMF1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzFdLCBib2FyZFs0XSwgYm9hcmRbN10pXG4gICAgICAgICAgICA/IGJvYXJkWzFdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFsyXSwgYm9hcmRbNV0sIGJvYXJkWzhdKVxuICAgICAgICAgICAgPyBib2FyZFsyXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbMF0sIGJvYXJkWzRdLCBib2FyZFs4XSlcbiAgICAgICAgICAgID8gYm9hcmRbMF1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzJdLCBib2FyZFs0XSwgYm9hcmRbNl0pXG4gICAgICAgICAgICA/IGJvYXJkWzZdXG4gICAgICAgICAgICA6IDA7XG5cbiAgICAgICAgaWYgKF93aW5uZXIgPT0gMCAmJiAhYm9hcmQuaW5jbHVkZXMoXCJcIikpIHtcbiAgICAgICAgICAgIF93aW5uZXIgPSBcImRyYXdcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfd2lubmVyO1xuICAgIH07XG5cbiAgICByZXR1cm4geyB1cGRhdGUsIGdldEJvYXJkLCBjaGVja0lmV29uLCBjbGVhckJvYXJkIH07XG59KSgpO1xuXG4vL3RoaXMgc2VjdGlvbiByZWdhcmRzIHRoZSBwbGF5ZXIgc2VsZWN0aW9uIGJ1dHRvbnNcbmNvbnN0IHBsYXllclNlbCA9ICgoKSA9PiB7XG4gICAgLy9kZWZhdWx0IHBsYXllciBzZWxlY3Rpb24gaXMgeFxuICAgIGxldCBfcGxheWVyU2VsZWN0aW9uID0gXCJ4XCI7XG4gICAgY29uc3QgX3BsYXllclBpZWNlU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5waWVjZS1idXR0b25cIik7XG4gICAgY29uc3QgX2dldFBsYXllckNob2ljZSA9IGUgPT4ge1xuICAgICAgICAvL2dldHMgdGhlIHZhbHVlIG9mIHdoYXQgaXMgc2VsZWN0ZWQgYW5kIG1ha2VzIG9ubHkgb25jZSBjaG9pY2UgYWN0aXZlIGF0IGEgdGltZVxuICAgICAgICBfcGxheWVyU2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9wbGF5ZXJQaWVjZVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uICE9IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNlbGVjdGlvbiBidXR0b25zXG4gICAgY29uc3QgX2FjdGl2YXRlUGxheWVycyA9ICgpID0+XG4gICAgICAgIF9wbGF5ZXJQaWVjZVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9nZXRQbGF5ZXJDaG9pY2UpKTtcbiAgICBfYWN0aXZhdGVQbGF5ZXJzKCk7XG5cbiAgICAvL2EgZnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBldmVudCBsaXN0ZW5lcnMgZnJvbSB0aGUgYnV0dG9ucy5cbiAgICBjb25zdCBkZWFjdGl2YXRlUGxheWVycyA9ICgpID0+XG4gICAgICAgIF9wbGF5ZXJQaWVjZVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9nZXRQbGF5ZXJDaG9pY2UpKTtcblxuICAgIGNvbnN0IHJlc2V0UGxheWVyID0gKCkgPT4ge1xuICAgICAgICBfcGxheWVyU2VsZWN0aW9uID0gXCJ4XCI7XG4gICAgICAgIF9wbGF5ZXJQaWVjZVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIF9wbGF5ZXJQaWVjZVNlbGVjdG9yc1swXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBfYWN0aXZhdGVQbGF5ZXJzKCk7XG4gICAgfTtcblxuICAgIC8vZnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoYXQgdGhlIHBsYXllciBjaG9zZVxuICAgIGNvbnN0IGdldFBsYXllclNlbGVjdGlvbiA9ICgpID0+IF9wbGF5ZXJTZWxlY3Rpb247XG5cbiAgICByZXR1cm4geyBnZXRQbGF5ZXJTZWxlY3Rpb24sIGRlYWN0aXZhdGVQbGF5ZXJzLCByZXNldFBsYXllciB9O1xufSkoKTtcblxuLy90aGlzIHNlY3Rpb24gcmVnYXJkcyB0aGUgZGlmZmljdWx0eSBzZWxlY3Rpb24gYnV0dG9uc1xuY29uc3QgZGlmZmljdWx0eVNlbCA9ICgoKSA9PiB7XG4gICAgLy9kZWZhdWx0IGRpZmZpY3VsdHkgc2VsZWN0aW9uIGlzIEVhc3lcbiAgICBsZXQgX2RpZlNlbGVjdGlvbiA9IDM7XG4gICAgY29uc3QgX2RpZmZpY3VsdHlTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRpZmZpY3VsdHktYnV0dG9uXCIpO1xuICAgIGNvbnN0IF9nZXREaWZDaG9pY2UgPSBlID0+IHtcbiAgICAgICAgLy9nZXRzIHRoZSB2YWx1ZSBvZiB3aGF0IGlzIHNlbGVjdGVkIGFuZCBtYWtlcyBvbmx5IG9uY2UgY2hvaWNlIGFjdGl2ZSBhdCBhIHRpbWVcbiAgICAgICAgX2RpZlNlbGVjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBfZGlmZmljdWx0eVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBpZiAoYnV0dG9uICE9IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNlbGVjdGlvbiBidXR0b25zXG4gICAgY29uc3QgX2FjdGl2YXRlRGlmZmljdWx0eSA9ICgpID0+XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2dldERpZkNob2ljZSkpO1xuICAgIF9hY3RpdmF0ZURpZmZpY3VsdHkoKTtcblxuICAgIC8vYSBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBidXR0b25zLlxuICAgIGNvbnN0IGRlYWN0aXZhdGVEaWZmaWN1bHR5ID0gKCkgPT5cbiAgICAgICAgX2RpZmZpY3VsdHlTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfZ2V0RGlmQ2hvaWNlKSk7XG5cbiAgICAvL3Jlc2V0cyB0byBkZWZhdWx0XG4gICAgY29uc3QgcmVzZXREaWZmaWN1bHR5ID0gKCkgPT4ge1xuICAgICAgICBfZGlmU2VsZWN0aW9uID0gMztcbiAgICAgICAgX2RpZmZpY3VsdHlTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgICAgICBfZGlmZmljdWx0eVNlbGVjdG9yc1swXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBfYWN0aXZhdGVEaWZmaWN1bHR5KCk7XG4gICAgfTtcblxuICAgIC8vZnVuY3Rpb24gdGhhdCByZXR1cm5zIHdoYXQgdGhlIHBsYXllciBjaG9zZVxuICAgIGNvbnN0IGdldERpZmZpY3VsdHlTZWxlY3Rpb24gPSAoKSA9PiBfZGlmU2VsZWN0aW9uO1xuXG4gICAgcmV0dXJuIHsgZ2V0RGlmZmljdWx0eVNlbGVjdGlvbiwgZGVhY3RpdmF0ZURpZmZpY3VsdHksIHJlc2V0RGlmZmljdWx0eSB9O1xufSkoKTtcblxuY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gICAgY29uc3QgX21ha2VEaXNwbGF5ID0gKCgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIiwgXCJcIiwgXCJUaWMtVGFjLVRvZVwiKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcImJvYXJkLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgcGllY2VTZWxlY3Rpb24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBcInBpZWNlLXNlbGVjdGlvblwiLFxuICAgICAgICAgICAgXCJpbnN0cnVjdGlvbnNcIixcbiAgICAgICAgICAgIFwiUGxlYXNlIFNlbGVjdCBZb3VyIFBpZWNlOlwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHBpZWNlU2VsZWN0aW9uSGVscGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgXCJwaWVjZS1zZWxlY3Rpb24taGVscGVyXCIsXG4gICAgICAgICAgICBcInN1Yi1pbnN0cnVjdGlvbnNcIixcbiAgICAgICAgICAgIFwiWCBnb2VzIGZpcnN0LCBPIGdvZXMgc2Vjb25kXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcGllY2VDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBpZWNlLWNvbnRhaW5lclwiLCBcImNob2ljZS1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IHhQaWVjZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwieC1waWVjZVwiLCBcInBpZWNlLWJ1dHRvbiB4LXBpZWNlIGFjdGl2ZVwiLCBcInhcIiwge1xuICAgICAgICAgICAgdmFsdWU6IFwieFwiLFxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICAgIGxldCBfcGxheWVyMTtcbiAgICBsZXQgX3BsYXllcjI7XG4gICAgbGV0IF9jdXJyZW50UGxheWVyO1xuICAgIGxldCBfZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICBsZXQgX2dhbWVCb2FyZFBpZWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtc3BhY2VcIik7XG4gICAgY29uc3QgX3N0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnQtZ2FtZVwiKTtcbiAgICBjb25zdCBfd2lubmVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2lubmVyXCIpO1xuXG4gICAgY29uc3QgX25ld0dhbWUgPSAoKSA9PiB7XG4gICAgICAgIF9nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBib2FyZC5jbGVhckJvYXJkKCk7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwieC1waWVjZVwiKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiby1waWVjZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXllclNlbC5yZXNldFBsYXllcigpO1xuICAgICAgICBkaWZmaWN1bHR5U2VsLnJlc2V0RGlmZmljdWx0eSgpO1xuICAgICAgICBfc3RhcnRHYW1lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIF9zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9zdGFydEdhbWUpO1xuICAgICAgICBfd2lubmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIF93aW5uZXJEaXNwbGF5LnBhcmVudEVsZW1lbnQubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICAvL2NyZWF0ZXMgdGhlIHR3byBwbGF5ZXJzLCBkZWFjdGl2YXRlcyBzZXR0aW5ncyBidXR0b25zLCBhbmQgYWN0aXZhdGVzIGJvYXJkXG4gICAgY29uc3QgX3N0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICAgICAgX3N0YXJ0R2FtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBfc3RhcnRHYW1lQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfc3RhcnRHYW1lKTtcbiAgICAgICAgX3BsYXllcjEgPSBQbGF5ZXIocGxheWVyU2VsLmdldFBsYXllclNlbGVjdGlvbigpKTtcbiAgICAgICAgcGxheWVyU2VsLmRlYWN0aXZhdGVQbGF5ZXJzKCk7XG4gICAgICAgIF9wbGF5ZXIxLmdldFR5cGUoKSA9PSBcInhcIlxuICAgICAgICAgICAgPyAoX3BsYXllcjIgPSBBSVBsYXllcihcIm9cIiwgZGlmZmljdWx0eVNlbC5nZXREaWZmaWN1bHR5U2VsZWN0aW9uKCkpKVxuICAgICAgICAgICAgOiAoX3BsYXllcjIgPSBBSVBsYXllcihcInhcIiwgZGlmZmljdWx0eVNlbC5nZXREaWZmaWN1bHR5U2VsZWN0aW9uKCkpKTtcbiAgICAgICAgZGlmZmljdWx0eVNlbC5kZWFjdGl2YXRlRGlmZmljdWx0eSgpO1xuICAgICAgICBpZiAoX3BsYXllcjEuZ2V0VHlwZSgpID09IFwieFwiKSB7XG4gICAgICAgICAgICBfY3VycmVudFBsYXllciA9IF9wbGF5ZXIxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX2N1cnJlbnRQbGF5ZXIgPSBfcGxheWVyMjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX3BsYXllcjIubWFrZU1vdmUoKSwgNTAwKTtcbiAgICAgICAgfVxuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlQaWVjZS5iaW5kKG51bGwsIGluZGV4LCBfcGxheWVyMSkpXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IF91cGRhdGVCb2FyZFBpZWNlID0gKGluZGV4LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgX2dhbWVCb2FyZFBpZWNlc1tpbmRleF0udGV4dENvbnRlbnQgPSBwbGF5ZXIuZ2V0VHlwZSgpO1xuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzW2luZGV4XS5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5nZXRUeXBlKCl9LXBpZWNlYCk7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXNbaW5kZXhdLnJlcGxhY2VXaXRoKF9nYW1lQm9hcmRQaWVjZXNbaW5kZXhdLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGJvYXJkLnVwZGF0ZShpbmRleCwgcGxheWVyKTtcbiAgICB9O1xuXG4gICAgLy9pZiB0aGUgY3VycmVudCBwbGF5ZXIgaXMgdGhlIGNvbXB1dGVyLCB0aGV5IG1ha2UgdGhlaXIgbW92ZVxuICAgIGNvbnN0IF9uZXh0TW92ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKF9jdXJyZW50UGxheWVyID09IF9wbGF5ZXIxKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IF9wbGF5ZXIyLm1ha2VNb3ZlKCksIDUwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9wbGF5cyBhIHBpZWNlIGFuZCBjaGVja3MgaWYgdGhlIGdhbWUgaXMgb3ZlclxuICAgIGNvbnN0IHBsYXlQaWVjZSA9IChpbmRleCwgcGxheWVyKSA9PiB7XG4gICAgICAgIF91cGRhdGVCb2FyZFBpZWNlKGluZGV4LCBwbGF5ZXIpO1xuICAgICAgICBpZiAoYm9hcmQuY2hlY2tJZldvbihib2FyZC5nZXRCb2FyZCgpKSkge1xuICAgICAgICAgICAgaWYgKGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkgPT0gXCJ4XCIgfHwgYm9hcmQuY2hlY2tJZldvbihib2FyZC5nZXRCb2FyZCgpKSA9PSBcIm9cIikge1xuICAgICAgICAgICAgICAgIF93aW5uZXJEaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cGxheWVyLmdldFR5cGUoKS50b1VwcGVyQ2FzZSgpfSBXaW5zIWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkgPT0gXCJkcmF3XCIpIHtcbiAgICAgICAgICAgICAgICBfd2lubmVyRGlzcGxheS50ZXh0Q29udGVudCA9IFwiSXQncyBhIERyYXdcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9nYW1lQm9hcmRQaWVjZXMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlcGxhY2VXaXRoKGJ1dHRvbi5jbG9uZU5vZGUodHJ1ZSkpKTtcbiAgICAgICAgICAgIC8vbmVlZCB0byB1cGRhdGUgd2hhdCB0aGUgZ2FtZWJvYXJkIHBpZWNlcyBhcmUgYWZ0ZXIgdGhleSd2ZSBiZWVuIGNsb25lZCB0byByZW1vdmVcbiAgICAgICAgICAgIC8vdGhlIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgICAgX2dhbWVCb2FyZFBpZWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmQtc3BhY2VcIik7XG4gICAgICAgICAgICBfZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3QgX25ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgX25ld0dhbWVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXctZ2FtZS1idXR0b25cIik7XG4gICAgICAgICAgICBfbmV3R2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IEdhbWU/XCI7XG4gICAgICAgICAgICBfd2lubmVyRGlzcGxheS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKF9uZXdHYW1lQnV0dG9uKTtcbiAgICAgICAgICAgIF9uZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfbmV3R2FtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIF9jdXJyZW50UGxheWVyID09IF9wbGF5ZXIxID8gKF9jdXJyZW50UGxheWVyID0gX3BsYXllcjIpIDogKF9jdXJyZW50UGxheWVyID0gX3BsYXllcjEpO1xuICAgICAgICAgICAgX25leHRNb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UGxheWVyMSA9ICgpID0+IF9wbGF5ZXIxO1xuXG4gICAgX3N0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N0YXJ0R2FtZSk7XG5cbiAgICByZXR1cm4geyBwbGF5UGllY2UsIGdldFBsYXllcjEgfTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiRE9NTWFuaXAiLCJnZXRFbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtYWtlTmV3RWxlbWVudCIsInR5cGUiLCJpZCIsIkhUTUxDbGFzcyIsInRleHQiLCJuZXdFbGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInRleHRDb250ZW50IiwiYXR0cmlidXRlcyIsImxlbmd0aCIsImZvckVhY2giLCJhdHQiLCJPYmplY3QiLCJrZXlzIiwiYXBwZW5kQ2hpbGRyZW4iLCJwYXJlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRBZnRlciIsIm5ld05vZGUiLCJleGlzdGluZ05vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJyZW1vdmVBbGxDaGlsZHJlbiIsImVsZW1lbnQiLCJza2lwIiwiaSIsImNoaWxkTm9kZXMiLCJyZW1vdmUiLCJQbGF5ZXIiLCJnZXRUeXBlIiwiQUlQbGF5ZXIiLCJkaWZmaWN1bHR5IiwiX2RlZmVuZE9yQXR0YWNrIiwicGxheWVyIiwiX2R1bW15Qm9hcmQiLCJib2FyZCIsImdldEJvYXJkIiwibWFwIiwiZWxlIiwiY2hlY2tJZldvbiIsImRpc3BsYXkiLCJwbGF5UGllY2UiLCJfcGlja1JhbmRvbSIsIl9yYW5kU3RhcnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfY2hvb3NlTW92ZSIsIl9wbGF5TWFkZSIsIl9vcHBQbGF5cyIsInJlZHVjZSIsImEiLCJiIiwiZ2V0UGxheWVyMSIsImNhbGwiLCJfc2lkZVBpZWNlcyIsInB1c2giLCJpbmNsdWRlcyIsIm1ha2VNb3ZlIiwiX2dhbWVCb2FyZCIsInVwZGF0ZSIsImluZGV4IiwiY2xlYXJCb2FyZCIsIl9jaGVja1dpbkNvbiIsImMiLCJfd2lubmVyIiwicGxheWVyU2VsIiwiX3BsYXllclNlbGVjdGlvbiIsIl9wbGF5ZXJQaWVjZVNlbGVjdG9ycyIsIl9nZXRQbGF5ZXJDaG9pY2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJidXR0b24iLCJfYWN0aXZhdGVQbGF5ZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlYWN0aXZhdGVQbGF5ZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc2V0UGxheWVyIiwiZ2V0UGxheWVyU2VsZWN0aW9uIiwiZGlmZmljdWx0eVNlbCIsIl9kaWZTZWxlY3Rpb24iLCJfZGlmZmljdWx0eVNlbGVjdG9ycyIsIl9nZXREaWZDaG9pY2UiLCJfYWN0aXZhdGVEaWZmaWN1bHR5IiwiZGVhY3RpdmF0ZURpZmZpY3VsdHkiLCJyZXNldERpZmZpY3VsdHkiLCJnZXREaWZmaWN1bHR5U2VsZWN0aW9uIiwiX21ha2VEaXNwbGF5IiwiaGVhZGVyIiwiY29udGVudCIsImJvYXJkQ29udGFpbmVyIiwicGllY2VTZWxlY3Rpb24iLCJwaWVjZVNlbGVjdGlvbkhlbHBlciIsInBpZWNlQ29udGFpbmVyIiwieFBpZWNlIiwiX3BsYXllcjEiLCJfcGxheWVyMiIsIl9jdXJyZW50UGxheWVyIiwiX2dhbWVPdmVyIiwiX2dhbWVCb2FyZFBpZWNlcyIsIl9zdGFydEdhbWVCdXR0b24iLCJfd2lubmVyRGlzcGxheSIsIl9uZXdHYW1lIiwiX3N0YXJ0R2FtZSIsInBhcmVudEVsZW1lbnQiLCJsYXN0Q2hpbGQiLCJzZXRUaW1lb3V0IiwiYmluZCIsIl91cGRhdGVCb2FyZFBpZWNlIiwicmVwbGFjZVdpdGgiLCJjbG9uZU5vZGUiLCJfbmV4dE1vdmUiLCJ0b1VwcGVyQ2FzZSIsIl9uZXdHYW1lQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==