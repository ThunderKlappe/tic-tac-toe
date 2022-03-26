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
  var boardSpace1 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border no-left-border");
  var boardSpace2 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border");
  var boardSpace3 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-top-border");
  var boardSpace4 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-left-border");
  var boardSpace5 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space");
  var boardSpace6 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space");
  var boardSpace7 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space no-left-border");
  var boardSpace8 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space");
  var boardSpace9 = _DOMManip__WEBPACK_IMPORTED_MODULE_1__.DOMManip.makeNewElement("button", "", "board-space");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNsQixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkNxQixVQUEzQzs7QUFFQSxTQUFPO0FBQUVuRixJQUFBQSxTQUFTLEVBQVRBLFNBQUY7QUFBYVksSUFBQUEsVUFBVSxFQUFWQTtBQUFiLEdBQVA7QUFDSCxDQTdGZSxFQUFoQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvRE9NTWFuaXAuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRE9NTWFuaXAgPSAoKCkgPT4ge1xuICAgIC8vc2hvcnRoYW5kIHRvIGdldCBlbGVtZW50cyBlYXNpZXJcbiAgICBjb25zdCBnZXRFbGVtZW50ID0gc2VsZWN0b3IgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgZ2V0RWxlbWVudHMgPSBzZWxlY3RvciA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcblxuICAgIC8vc2hvcnRoYW5kIHRvIG1ha2UgYSBuZXcgZWxlbWVudCBhbmQgYWRkIGF0dHJpYnV0ZXMgdG8gaXRcbiAgICBjb25zdCBtYWtlTmV3RWxlbWVudCA9ICh0eXBlLCBpZCA9IFwiXCIsIEhUTUxDbGFzcyA9IFwiXCIsIHRleHQgPSBcIlwiLCAuLi5hdHRyaWJ1dGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgICAgICBpZiAoaWQgIT0gXCJcIikge1xuICAgICAgICAgICAgbmV3RWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEhUTUxDbGFzcyAhPSBcIlwiKSB7XG4gICAgICAgICAgICBuZXdFbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIEhUTUxDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3RWxlbS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHQgPT4gbmV3RWxlbS5zZXRBdHRyaWJ1dGUoT2JqZWN0LmtleXMoYXR0KVswXSwgYXR0W09iamVjdC5rZXlzKGF0dCldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3RWxlbTtcbiAgICB9O1xuXG4gICAgLy9hZGRzIGFsbCBvZiB0aGUgRE9NIGVsZW1lbnRzIHRvIGEgcGFyZW50XG4gICAgY29uc3QgYXBwZW5kQ2hpbGRyZW4gPSAocGFyZW50LCAuLi5jaGlsZHJlbikgPT4ge1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgIH07XG5cbiAgICAvL2luc2VydHMgYSBET00gZWxlbWVudCBhZnRlciBhbm90aGVyIGVsZW1lbnRcbiAgICBjb25zdCBpbnNlcnRBZnRlciA9IChuZXdOb2RlLCBleGlzdGluZ05vZGUpID0+IHtcbiAgICAgICAgZXhpc3RpbmdOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIGV4aXN0aW5nTm9kZS5uZXh0U2libGluZyk7XG4gICAgfTtcblxuICAgIC8vY2xlYXJzIG91dCBhbGwgY2hpbGQgbm9kZXMgb2YgYW4gZWxlbWVudCwgc2tpcHMgYXMgbWFueSBlbGVtZW50cyBhcyByZXF1ZXN0ZWRcbiAgICBjb25zdCByZW1vdmVBbGxDaGlsZHJlbiA9IChlbGVtZW50LCBza2lwID0gMCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aDsgaSA+IHNraXA7IGktLSkge1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZE5vZGVzW2kgLSAxXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4geyBnZXRFbGVtZW50LCBnZXRFbGVtZW50cywgbWFrZU5ld0VsZW1lbnQsIGFwcGVuZENoaWxkcmVuLCBpbnNlcnRBZnRlciwgcmVtb3ZlQWxsQ2hpbGRyZW4gfTtcbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlZ29lIFVJXFxcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMTIxMjEyO1xcbn1cXG4jaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiA3MnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2JvYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XFxuICAgICNib2FyZC1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlO1xcbiAgICB9XFxufVxcbi5pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDVweDtcXG59XFxuLnN1Yi1pbnN0cnVjdGlvbnMge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4uY2hvaWNlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5idXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgY29sb3I6ICMxMjEyMTI7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5kaWZmaWN1bHR5LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG4jc3RhcnQtZ2FtZSB7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4ucGllY2UtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLngtcGllY2Uge1xcbiAgICBjb2xvcjogI2YwNTQ1NDtcXG59XFxuLngtcGllY2UuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDU0NTQ7XFxufVxcbi5vLXBpZWNlIHtcXG4gICAgY29sb3I6ICMzMDQ3NWU7XFxufVxcbi5vLXBpZWNlLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0NzVlO1xcbn1cXG5cXG4jYm9hcmQge1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMlIDMzJSAzMyU7XFxufVxcbi5ib2FyZC1zcGFjZSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5uby10b3AtYm9yZGVyIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuLm5vLWxlZnQtYm9yZGVyIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbiN3aW5uZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbiNuZXctZ2FtZS1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCA4cHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuI25ldy1nYW1lLWJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNERBQTREO0lBQzVELGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2Vnb2UgVUlcXFwiLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxMjEyMTI7XFxufVxcbiNoZWFkZXIge1xcbiAgICBoZWlnaHQ6IDcycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzEyMTIxMjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcXG4gICAgI2JvYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogLW1vei1hdmFpbGFibGU7XFxuICAgIH1cXG59XFxuLmluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG4uc3ViLWluc3RydWN0aW9ucyB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVxcbi5jaG9pY2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBjb2xvcjogIzEyMTIxMjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmRpZmZpY3VsdHktYnV0dG9uIHtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDVweCAwcHg7XFxufVxcblxcbiNzdGFydC1nYW1lIHtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxufVxcblxcbi5waWVjZS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ueC1waWVjZSB7XFxuICAgIGNvbG9yOiAjZjA1NDU0O1xcbn1cXG4ueC1waWVjZS5hY3RpdmUge1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNTQ1NDtcXG59XFxuLm8tcGllY2Uge1xcbiAgICBjb2xvcjogIzMwNDc1ZTtcXG59XFxuLm8tcGllY2UuYWN0aXZlIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDQ3NWU7XFxufVxcblxcbiNib2FyZCB7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMyUgMzMlIDMzJTtcXG59XFxuLmJvYXJkLXNwYWNlIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMTIxMjEyO1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxMjEyMTI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuLm5vLXRvcC1ib3JkZXIge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG4ubm8tbGVmdC1ib3JkZXIge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuI3dpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuI25ldy1nYW1lLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jbmV3LWdhbWUtYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBET01NYW5pcCB9IGZyb20gXCIuL0RPTU1hbmlwXCI7XG5cbmNvbnN0IFBsYXllciA9IHR5cGUgPT4ge1xuICAgIGNvbnN0IGdldFR5cGUgPSAoKSA9PiB0eXBlO1xuICAgIHJldHVybiB7IGdldFR5cGUgfTtcbn07XG5cbmNvbnN0IEFJUGxheWVyID0gKHR5cGUsIGRpZmZpY3VsdHkpID0+IHtcbiAgICBjb25zdCB7IGdldFR5cGUgfSA9IFBsYXllcih0eXBlKTtcblxuICAgIC8vaWYgc29tZWJvZHkgY2FuIHdpbiwgZ28gdGhlcmUuXG4gICAgY29uc3QgX2RlZmVuZE9yQXR0YWNrID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgbGV0IF9kdW1teUJvYXJkID0gYm9hcmQuZ2V0Qm9hcmQoKS5tYXAoZWxlID0+IGVsZSk7XG4gICAgICAgICAgICBpZiAoX2R1bW15Qm9hcmRbaV0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIF9kdW1teUJvYXJkW2ldID0gcGxheWVyLmdldFR5cGUoKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQuY2hlY2tJZldvbihfZHVtbXlCb2FyZCkgPT0gcGxheWVyLmdldFR5cGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZShpLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8vcGlja3MgYSByYW5kb20gZW1wdHkgc3BvdFxuICAgIGNvbnN0IF9waWNrUmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgX3JhbmRTdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGJvYXJkLmdldEJvYXJkKCkubGVuZ3RoKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGJvYXJkLmdldEJvYXJkKClbX3JhbmRTdGFydF0gPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKF9yYW5kU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3JhbmRTdGFydCsrO1xuICAgICAgICAgICAgICAgIGlmIChfcmFuZFN0YXJ0ID09IGJvYXJkLmdldEJvYXJkKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIF9yYW5kU3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBfY2hvb3NlTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IF9wbGF5TWFkZSA9IGZhbHNlO1xuICAgICAgICBsZXQgX29wcFBsYXlzID0gYm9hcmRcbiAgICAgICAgICAgIC5nZXRCb2FyZCgpXG4gICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiAoYiA9PSBkaXNwbGF5LmdldFBsYXllcjEoKS5nZXRUeXBlKCkgPyBhICsgMSA6IGEpLCAwKTtcblxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBBSSBjYW4gd2luXG4gICAgICAgIF9wbGF5TWFkZSA9IF9kZWZlbmRPckF0dGFjay5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAvL2NoZWNrIGlmIHRoZSBQbGF5ZXIgY2FuIHdpblxuICAgICAgICBpZiAoIV9wbGF5TWFkZSkge1xuICAgICAgICAgICAgX3BsYXlNYWRlID0gX2RlZmVuZE9yQXR0YWNrLmNhbGwodGhpcywgZGlzcGxheS5nZXRQbGF5ZXIxKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX3BsYXlNYWRlKSB7XG4gICAgICAgICAgICBpZiAoX29wcFBsYXlzID09IDApIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZSgwLCB0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9vcHBQbGF5cyA9PSAxICYmIHR5cGUgPT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVs4XSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkucGxheVBpZWNlKDgsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChfb3BwUGxheXMgPT0gMikge1xuICAgICAgICAgICAgICAgIC8vSWYgdGhlIG9wcG9uZW50IHBsYXllZCBvbiB0d28gY29ybmVycywgcGxheSBvbiBhIHNpZGUuXG4gICAgICAgICAgICAgICAgbGV0IF9zaWRlUGllY2VzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBib2FyZC5nZXRCb2FyZCgpLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaWRlUGllY2VzLnB1c2goYm9hcmQuZ2V0Qm9hcmQoKVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghX3NpZGVQaWVjZXMuaW5jbHVkZXMoZGlzcGxheS5nZXRQbGF5ZXIxKCkuZ2V0VHlwZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5LnBsYXlQaWVjZSgxLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9nbyB0byB0aGUgbWlkZGxlIGlmIGl0J3MgYXZhaWxhYmxlXG4gICAgICAgICAgICBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVs0XSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoNCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgLy9nbyB0byB0aGUgY29ybmVyIGlmIHRoZSBtaWRkbGUgaXMgdGFrZW5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmQuZ2V0Qm9hcmQoKVswXSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheS5wbGF5UGllY2UoMCwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL29yIGVsc2UgcGljayBhIHJhbmRvbSBzcG90LlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3BpY2tSYW5kb20uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBtYWtlTW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9kZWNpZGVkIHdoZXRoZXIgdG8gbWFrZSB0aGUgY29ycmVjdCBtb3ZlIG9yIHJhbmRvbSBtb3ZlIGJhc2VkIG9uIGRpZmZpY3VsdHlcbiAgICAgICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpZmZpY3VsdHkpID09IDApIHtcbiAgICAgICAgICAgIF9jaG9vc2VNb3ZlLmNhbGwodGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfcGlja1JhbmRvbS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGdldFR5cGUsIG1ha2VNb3ZlIH07XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IF9tYWtlRGlzcGxheSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJoZWFkZXJcIiwgXCJcIiwgXCJUaWMtVGFjLVRvZVwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJkaXZcIiwgXCJib2FyZC1jb250YWluZXJcIik7XG4gICAgY29uc3QgcGllY2VTZWxlY3Rpb24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJwaWVjZS1zZWxlY3Rpb25cIixcbiAgICAgICAgXCJpbnN0cnVjdGlvbnNcIixcbiAgICAgICAgXCJQbGVhc2UgU2VsZWN0IFlvdXIgUGllY2U6XCJcbiAgICApO1xuICAgIGNvbnN0IHBpZWNlU2VsZWN0aW9uSGVscGVyID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwicGllY2Utc2VsZWN0aW9uLWhlbHBlclwiLFxuICAgICAgICBcInN1Yi1pbnN0cnVjdGlvbnNcIixcbiAgICAgICAgXCJYIGdvZXMgZmlyc3QsIE8gZ29lcyBzZWNvbmRcIlxuICAgICk7XG4gICAgY29uc3QgcGllY2VDb250YWluZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcInBpZWNlLWNvbnRhaW5lclwiLCBcImNob2ljZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgeFBpZWNlID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJ4LXBpZWNlXCIsIFwicGllY2UtYnV0dG9uIHgtcGllY2UgYWN0aXZlXCIsIFwieFwiLCB7XG4gICAgICAgIHZhbHVlOiBcInhcIixcbiAgICB9KTtcbiAgICBjb25zdCBvUGllY2UgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIm8tcGllY2VcIiwgXCJwaWVjZS1idXR0b24gby1waWVjZVwiLCBcIm9cIiwge1xuICAgICAgICB2YWx1ZTogXCJvXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhaVNlbGVjdGlvbiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcImFpLXNlbGVjdGlvblwiLFxuICAgICAgICBcImluc3RydWN0aW9uc1wiLFxuICAgICAgICBcIlBsZWFzZSBTZWxlY3QgVGhlIERpZmZpY3VsdHlcIlxuICAgICk7XG4gICAgY29uc3QgZGlmZmljdWx0eUNvbnRhaW5lciA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiZGlmZmljdWx0eS1jb250YWluZXJcIiwgXCJjaG9pY2UtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGVhc3lCdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcImVhc3ktYnV0dG9uXCIsIFwiZGlmZmljdWx0eS1idXR0b24gYWN0aXZlXCIsIFwiRWFzeVwiLCB7XG4gICAgICAgIHZhbHVlOiBcIjNcIixcbiAgICB9KTtcbiAgICBjb25zdCBtZWRpdW1CdXR0b24gPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIm1lZGl1bS1idXR0b25cIiwgXCJkaWZmaWN1bHR5LWJ1dHRvblwiLCBcIk1lZGl1bVwiLCB7XG4gICAgICAgIHZhbHVlOiBcIjJcIixcbiAgICB9KTtcbiAgICBjb25zdCBpbXBvc3NpYmxlQnV0dG9uID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIFwiaW1wb3NzaWJsZS1idXR0b25cIixcbiAgICAgICAgXCJkaWZmaWN1bHR5LWJ1dHRvblwiLFxuICAgICAgICBcIkltcG9zc2libGVcIixcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IFwiMVwiLFxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwic3RhcnQtZ2FtZVwiLCBcIlwiLCBcIlN0YXJ0IEdhbWVcIik7XG5cbiAgICBjb25zdCBib2FyZCA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiZGl2XCIsIFwiYm9hcmRcIik7XG4gICAgY29uc3QgYm9hcmRTcGFjZTEgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLXRvcC1ib3JkZXIgbm8tbGVmdC1ib3JkZXJcIik7XG4gICAgY29uc3QgYm9hcmRTcGFjZTIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLXRvcC1ib3JkZXJcIik7XG4gICAgY29uc3QgYm9hcmRTcGFjZTMgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLXRvcC1ib3JkZXJcIik7XG4gICAgY29uc3QgYm9hcmRTcGFjZTQgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLWxlZnQtYm9yZGVyXCIpO1xuICAgIGNvbnN0IGJvYXJkU3BhY2U1ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgXCJib2FyZC1zcGFjZVwiKTtcbiAgICBjb25zdCBib2FyZFNwYWNlNiA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2VcIik7XG4gICAgY29uc3QgYm9hcmRTcGFjZTcgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImJ1dHRvblwiLCBcIlwiLCBcImJvYXJkLXNwYWNlIG5vLWxlZnQtYm9yZGVyXCIpO1xuICAgIGNvbnN0IGJvYXJkU3BhY2U4ID0gRE9NTWFuaXAubWFrZU5ld0VsZW1lbnQoXCJidXR0b25cIiwgXCJcIiwgXCJib2FyZC1zcGFjZVwiKTtcbiAgICBjb25zdCBib2FyZFNwYWNlOSA9IERPTU1hbmlwLm1ha2VOZXdFbGVtZW50KFwiYnV0dG9uXCIsIFwiXCIsIFwiYm9hcmQtc3BhY2VcIik7XG5cbiAgICBjb25zdCB3aW5uZXIgPSBET01NYW5pcC5tYWtlTmV3RWxlbWVudChcImRpdlwiLCBcIndpbm5lclwiKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihwaWVjZUNvbnRhaW5lciwgeFBpZWNlLCBvUGllY2UpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRpZmZpY3VsdHlDb250YWluZXIsIGVhc3lCdXR0b24sIG1lZGl1bUJ1dHRvbiwgaW1wb3NzaWJsZUJ1dHRvbik7XG4gICAgRE9NTWFuaXAuYXBwZW5kQ2hpbGRyZW4oXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBib2FyZFNwYWNlMSxcbiAgICAgICAgYm9hcmRTcGFjZTIsXG4gICAgICAgIGJvYXJkU3BhY2UzLFxuICAgICAgICBib2FyZFNwYWNlNCxcbiAgICAgICAgYm9hcmRTcGFjZTUsXG4gICAgICAgIGJvYXJkU3BhY2U2LFxuICAgICAgICBib2FyZFNwYWNlNyxcbiAgICAgICAgYm9hcmRTcGFjZTgsXG4gICAgICAgIGJvYXJkU3BhY2U5XG4gICAgKTtcbiAgICBET01NYW5pcC5hcHBlbmRDaGlsZHJlbihcbiAgICAgICAgYm9hcmRDb250YWluZXIsXG4gICAgICAgIHBpZWNlU2VsZWN0aW9uLFxuICAgICAgICBwaWVjZVNlbGVjdGlvbkhlbHBlcixcbiAgICAgICAgcGllY2VDb250YWluZXIsXG4gICAgICAgIGFpU2VsZWN0aW9uLFxuICAgICAgICBkaWZmaWN1bHR5Q29udGFpbmVyLFxuICAgICAgICBzdGFydEdhbWUsXG4gICAgICAgIGJvYXJkLFxuICAgICAgICB3aW5uZXJcbiAgICApO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9hcmRDb250YWluZXIpO1xuICAgIERPTU1hbmlwLmFwcGVuZENoaWxkcmVuKGRvY3VtZW50LmJvZHksIGhlYWRlciwgY29udGVudCk7XG59KSgpO1xuXG5jb25zdCBib2FyZCA9ICgoKSA9PiB7XG4gICAgbGV0IF9nYW1lQm9hcmQgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl07XG4gICAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBfZ2FtZUJvYXJkO1xuXG4gICAgY29uc3QgdXBkYXRlID0gKGluZGV4LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgX2dhbWVCb2FyZFtpbmRleF0gPSBwbGF5ZXIuZ2V0VHlwZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjbGVhckJvYXJkID0gKCkgPT4gKF9nYW1lQm9hcmQgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIl0pO1xuICAgIC8vaWYgYWxsIHRocmVlIGVudHJpZXMgYXJlIHRoZSBzYW1lLCByZXR1cm4gdHJ1ZVxuICAgIGNvbnN0IF9jaGVja1dpbkNvbiA9IChhLCBiLCBjKSA9PiAoYSA9PSBiICYmIGEgPT0gYyAmJiBhICE9IFwiXCIgPyAxIDogMCk7XG5cbiAgICAvL2NoZWNrIGFsbCByb3dzLCBjb2x1bW5zIGFuZCBkaWFnb25hbHMgZm9yIHdpbnNcbiAgICBjb25zdCBjaGVja0lmV29uID0gYm9hcmQgPT4ge1xuICAgICAgICBsZXQgX3dpbm5lciA9IF9jaGVja1dpbkNvbihib2FyZFswXSwgYm9hcmRbMV0sIGJvYXJkWzJdKVxuICAgICAgICAgICAgPyBib2FyZFswXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbM10sIGJvYXJkWzRdLCBib2FyZFs1XSlcbiAgICAgICAgICAgID8gYm9hcmRbM11cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzZdLCBib2FyZFs3XSwgYm9hcmRbOF0pXG4gICAgICAgICAgICA/IGJvYXJkWzZdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFswXSwgYm9hcmRbM10sIGJvYXJkWzZdKVxuICAgICAgICAgICAgPyBib2FyZFswXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbMV0sIGJvYXJkWzRdLCBib2FyZFs3XSlcbiAgICAgICAgICAgID8gYm9hcmRbMV1cbiAgICAgICAgICAgIDogX2NoZWNrV2luQ29uKGJvYXJkWzJdLCBib2FyZFs1XSwgYm9hcmRbOF0pXG4gICAgICAgICAgICA/IGJvYXJkWzJdXG4gICAgICAgICAgICA6IF9jaGVja1dpbkNvbihib2FyZFswXSwgYm9hcmRbNF0sIGJvYXJkWzhdKVxuICAgICAgICAgICAgPyBib2FyZFswXVxuICAgICAgICAgICAgOiBfY2hlY2tXaW5Db24oYm9hcmRbMl0sIGJvYXJkWzRdLCBib2FyZFs2XSlcbiAgICAgICAgICAgID8gYm9hcmRbNl1cbiAgICAgICAgICAgIDogMDtcblxuICAgICAgICBpZiAoX3dpbm5lciA9PSAwICYmICFib2FyZC5pbmNsdWRlcyhcIlwiKSkge1xuICAgICAgICAgICAgX3dpbm5lciA9IFwiZHJhd1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF93aW5uZXI7XG4gICAgfTtcblxuICAgIHJldHVybiB7IHVwZGF0ZSwgZ2V0Qm9hcmQsIGNoZWNrSWZXb24sIGNsZWFyQm9hcmQgfTtcbn0pKCk7XG5cbi8vdGhpcyBzZWN0aW9uIHJlZ2FyZHMgdGhlIHBsYXllciBzZWxlY3Rpb24gYnV0dG9uc1xuY29uc3QgcGxheWVyU2VsID0gKCgpID0+IHtcbiAgICAvL2RlZmF1bHQgcGxheWVyIHNlbGVjdGlvbiBpcyB4XG4gICAgbGV0IF9wbGF5ZXJTZWxlY3Rpb24gPSBcInhcIjtcbiAgICBjb25zdCBfcGxheWVyUGllY2VTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBpZWNlLWJ1dHRvblwiKTtcbiAgICBjb25zdCBfZ2V0UGxheWVyQ2hvaWNlID0gZSA9PiB7XG4gICAgICAgIC8vZ2V0cyB0aGUgdmFsdWUgb2Ygd2hhdCBpcyBzZWxlY3RlZCBhbmQgbWFrZXMgb25seSBvbmNlIGNob2ljZSBhY3RpdmUgYXQgYSB0aW1lXG4gICAgICAgIF9wbGF5ZXJTZWxlY3Rpb24gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24gIT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICBjb25zdCBfYWN0aXZhdGVQbGF5ZXJzID0gKCkgPT5cbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2dldFBsYXllckNob2ljZSkpO1xuICAgIF9hY3RpdmF0ZVBsYXllcnMoKTtcblxuICAgIC8vYSBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVycyBmcm9tIHRoZSBidXR0b25zLlxuICAgIGNvbnN0IGRlYWN0aXZhdGVQbGF5ZXJzID0gKCkgPT5cbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX2dldFBsYXllckNob2ljZSkpO1xuXG4gICAgY29uc3QgcmVzZXRQbGF5ZXIgPSAoKSA9PiB7XG4gICAgICAgIF9wbGF5ZXJTZWxlY3Rpb24gPSBcInhcIjtcbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgICAgX3BsYXllclBpZWNlU2VsZWN0b3JzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9hY3RpdmF0ZVBsYXllcnMoKTtcbiAgICB9O1xuXG4gICAgLy9mdW5jdGlvbiB0aGF0IHJldHVybnMgd2hhdCB0aGUgcGxheWVyIGNob3NlXG4gICAgY29uc3QgZ2V0UGxheWVyU2VsZWN0aW9uID0gKCkgPT4gX3BsYXllclNlbGVjdGlvbjtcblxuICAgIHJldHVybiB7IGdldFBsYXllclNlbGVjdGlvbiwgZGVhY3RpdmF0ZVBsYXllcnMsIHJlc2V0UGxheWVyIH07XG59KSgpO1xuXG4vL3RoaXMgc2VjdGlvbiByZWdhcmRzIHRoZSBkaWZmaWN1bHR5IHNlbGVjdGlvbiBidXR0b25zXG5jb25zdCBkaWZmaWN1bHR5U2VsID0gKCgpID0+IHtcbiAgICAvL2RlZmF1bHQgZGlmZmljdWx0eSBzZWxlY3Rpb24gaXMgRWFzeVxuICAgIGxldCBfZGlmU2VsZWN0aW9uID0gMztcbiAgICBjb25zdCBfZGlmZmljdWx0eVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGlmZmljdWx0eS1idXR0b25cIik7XG4gICAgY29uc3QgX2dldERpZkNob2ljZSA9IGUgPT4ge1xuICAgICAgICAvL2dldHMgdGhlIHZhbHVlIG9mIHdoYXQgaXMgc2VsZWN0ZWQgYW5kIG1ha2VzIG9ubHkgb25jZSBjaG9pY2UgYWN0aXZlIGF0IGEgdGltZVxuICAgICAgICBfZGlmU2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGlmIChidXR0b24gIT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgc2VsZWN0aW9uIGJ1dHRvbnNcbiAgICBjb25zdCBfYWN0aXZhdGVEaWZmaWN1bHR5ID0gKCkgPT5cbiAgICAgICAgX2RpZmZpY3VsdHlTZWxlY3RvcnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfZ2V0RGlmQ2hvaWNlKSk7XG4gICAgX2FjdGl2YXRlRGlmZmljdWx0eSgpO1xuXG4gICAgLy9hIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZyb20gdGhlIGJ1dHRvbnMuXG4gICAgY29uc3QgZGVhY3RpdmF0ZURpZmZpY3VsdHkgPSAoKSA9PlxuICAgICAgICBfZGlmZmljdWx0eVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9nZXREaWZDaG9pY2UpKTtcblxuICAgIC8vcmVzZXRzIHRvIGRlZmF1bHRcbiAgICBjb25zdCByZXNldERpZmZpY3VsdHkgPSAoKSA9PiB7XG4gICAgICAgIF9kaWZTZWxlY3Rpb24gPSAzO1xuICAgICAgICBfZGlmZmljdWx0eVNlbGVjdG9ycy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgICAgIF9kaWZmaWN1bHR5U2VsZWN0b3JzWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIF9hY3RpdmF0ZURpZmZpY3VsdHkoKTtcbiAgICB9O1xuXG4gICAgLy9mdW5jdGlvbiB0aGF0IHJldHVybnMgd2hhdCB0aGUgcGxheWVyIGNob3NlXG4gICAgY29uc3QgZ2V0RGlmZmljdWx0eVNlbGVjdGlvbiA9ICgpID0+IF9kaWZTZWxlY3Rpb247XG5cbiAgICByZXR1cm4geyBnZXREaWZmaWN1bHR5U2VsZWN0aW9uLCBkZWFjdGl2YXRlRGlmZmljdWx0eSwgcmVzZXREaWZmaWN1bHR5IH07XG59KSgpO1xuXG5jb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgICBsZXQgX3BsYXllcjE7XG4gICAgbGV0IF9wbGF5ZXIyO1xuICAgIGxldCBfY3VycmVudFBsYXllcjtcbiAgICBsZXQgX2dhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IF9nYW1lQm9hcmRQaWVjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXNwYWNlXCIpO1xuICAgIGNvbnN0IF9zdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0LWdhbWVcIik7XG4gICAgY29uc3QgX3dpbm5lckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbm5lclwiKTtcblxuICAgIGNvbnN0IF9uZXdHYW1lID0gKCkgPT4ge1xuICAgICAgICBfZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgYm9hcmQuY2xlYXJCb2FyZCgpO1xuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIngtcGllY2VcIik7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcIm8tcGllY2VcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBwbGF5ZXJTZWwucmVzZXRQbGF5ZXIoKTtcbiAgICAgICAgZGlmZmljdWx0eVNlbC5yZXNldERpZmZpY3VsdHkoKTtcbiAgICAgICAgX3N0YXJ0R2FtZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBfc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfc3RhcnRHYW1lKTtcbiAgICAgICAgX3dpbm5lckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBfd2lubmVyRGlzcGxheS5wYXJlbnRFbGVtZW50Lmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgLy9jcmVhdGVzIHRoZSB0d28gcGxheWVycywgZGVhY3RpdmF0ZXMgc2V0dGluZ3MgYnV0dG9ucywgYW5kIGFjdGl2YXRlcyBib2FyZFxuICAgIGNvbnN0IF9zdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgICAgIF9zdGFydEdhbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgX3N0YXJ0R2FtZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX3N0YXJ0R2FtZSk7XG4gICAgICAgIF9wbGF5ZXIxID0gUGxheWVyKHBsYXllclNlbC5nZXRQbGF5ZXJTZWxlY3Rpb24oKSk7XG4gICAgICAgIHBsYXllclNlbC5kZWFjdGl2YXRlUGxheWVycygpO1xuICAgICAgICBfcGxheWVyMS5nZXRUeXBlKCkgPT0gXCJ4XCJcbiAgICAgICAgICAgID8gKF9wbGF5ZXIyID0gQUlQbGF5ZXIoXCJvXCIsIGRpZmZpY3VsdHlTZWwuZ2V0RGlmZmljdWx0eVNlbGVjdGlvbigpKSlcbiAgICAgICAgICAgIDogKF9wbGF5ZXIyID0gQUlQbGF5ZXIoXCJ4XCIsIGRpZmZpY3VsdHlTZWwuZ2V0RGlmZmljdWx0eVNlbGVjdGlvbigpKSk7XG4gICAgICAgIGRpZmZpY3VsdHlTZWwuZGVhY3RpdmF0ZURpZmZpY3VsdHkoKTtcbiAgICAgICAgaWYgKF9wbGF5ZXIxLmdldFR5cGUoKSA9PSBcInhcIikge1xuICAgICAgICAgICAgX2N1cnJlbnRQbGF5ZXIgPSBfcGxheWVyMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9jdXJyZW50UGxheWVyID0gX3BsYXllcjI7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IF9wbGF5ZXIyLm1ha2VNb3ZlKCksIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgX2dhbWVCb2FyZFBpZWNlcy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PlxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5UGllY2UuYmluZChudWxsLCBpbmRleCwgX3BsYXllcjEpKVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBfdXBkYXRlQm9hcmRQaWVjZSA9IChpbmRleCwgcGxheWVyKSA9PiB7XG4gICAgICAgIF9nYW1lQm9hcmRQaWVjZXNbaW5kZXhdLnRleHRDb250ZW50ID0gcGxheWVyLmdldFR5cGUoKTtcbiAgICAgICAgX2dhbWVCb2FyZFBpZWNlc1tpbmRleF0uY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIuZ2V0VHlwZSgpfS1waWVjZWApO1xuICAgICAgICBfZ2FtZUJvYXJkUGllY2VzW2luZGV4XS5yZXBsYWNlV2l0aChfZ2FtZUJvYXJkUGllY2VzW2luZGV4XS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBib2FyZC51cGRhdGUoaW5kZXgsIHBsYXllcik7XG4gICAgfTtcblxuICAgIC8vaWYgdGhlIGN1cnJlbnQgcGxheWVyIGlzIHRoZSBjb21wdXRlciwgdGhleSBtYWtlIHRoZWlyIG1vdmVcbiAgICBjb25zdCBfbmV4dE1vdmUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChfY3VycmVudFBsYXllciA9PSBfcGxheWVyMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBfcGxheWVyMi5tYWtlTW92ZSgpLCA1MDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vcGxheXMgYSBwaWVjZSBhbmQgY2hlY2tzIGlmIHRoZSBnYW1lIGlzIG92ZXJcbiAgICBjb25zdCBwbGF5UGllY2UgPSAoaW5kZXgsIHBsYXllcikgPT4ge1xuICAgICAgICBfdXBkYXRlQm9hcmRQaWVjZShpbmRleCwgcGxheWVyKTtcbiAgICAgICAgaWYgKGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkpIHtcbiAgICAgICAgICAgIGlmIChib2FyZC5jaGVja0lmV29uKGJvYXJkLmdldEJvYXJkKCkpID09IFwieFwiIHx8IGJvYXJkLmNoZWNrSWZXb24oYm9hcmQuZ2V0Qm9hcmQoKSkgPT0gXCJvXCIpIHtcbiAgICAgICAgICAgICAgICBfd2lubmVyRGlzcGxheS50ZXh0Q29udGVudCA9IGAke3BsYXllci5nZXRUeXBlKCkudG9VcHBlckNhc2UoKX0gV2lucyFgO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZC5jaGVja0lmV29uKGJvYXJkLmdldEJvYXJkKCkpID09IFwiZHJhd1wiKSB7XG4gICAgICAgICAgICAgICAgX3dpbm5lckRpc3BsYXkudGV4dENvbnRlbnQgPSBcIkl0J3MgYSBEcmF3XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZ2FtZUJvYXJkUGllY2VzLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZXBsYWNlV2l0aChidXR0b24uY2xvbmVOb2RlKHRydWUpKSk7XG4gICAgICAgICAgICAvL25lZWQgdG8gdXBkYXRlIHdoYXQgdGhlIGdhbWVib2FyZCBwaWVjZXMgYXJlIGFmdGVyIHRoZXkndmUgYmVlbiBjbG9uZWQgdG8gcmVtb3ZlXG4gICAgICAgICAgICAvL3RoZSBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIF9nYW1lQm9hcmRQaWVjZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkLXNwYWNlXCIpO1xuICAgICAgICAgICAgX2dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IF9uZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIF9uZXdHYW1lQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3LWdhbWUtYnV0dG9uXCIpO1xuICAgICAgICAgICAgX25ld0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBHYW1lP1wiO1xuICAgICAgICAgICAgX3dpbm5lckRpc3BsYXkucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChfbmV3R2FtZUJ1dHRvbik7XG4gICAgICAgICAgICBfbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX25ld0dhbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghX2dhbWVPdmVyKSB7XG4gICAgICAgICAgICBfY3VycmVudFBsYXllciA9PSBfcGxheWVyMSA/IChfY3VycmVudFBsYXllciA9IF9wbGF5ZXIyKSA6IChfY3VycmVudFBsYXllciA9IF9wbGF5ZXIxKTtcbiAgICAgICAgICAgIF9uZXh0TW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFBsYXllcjEgPSAoKSA9PiBfcGxheWVyMTtcblxuICAgIF9zdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIF9zdGFydEdhbWUpO1xuXG4gICAgcmV0dXJuIHsgcGxheVBpZWNlLCBnZXRQbGF5ZXIxIH07XG59KSgpO1xuIl0sIm5hbWVzIjpbIkRPTU1hbmlwIiwiZ2V0RWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFrZU5ld0VsZW1lbnQiLCJ0eXBlIiwiaWQiLCJIVE1MQ2xhc3MiLCJ0ZXh0IiwibmV3RWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJ0ZXh0Q29udGVudCIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYXR0IiwiT2JqZWN0Iiwia2V5cyIsImFwcGVuZENoaWxkcmVuIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QWZ0ZXIiLCJuZXdOb2RlIiwiZXhpc3RpbmdOb2RlIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJlbGVtZW50Iiwic2tpcCIsImkiLCJjaGlsZE5vZGVzIiwicmVtb3ZlIiwiUGxheWVyIiwiZ2V0VHlwZSIsIkFJUGxheWVyIiwiZGlmZmljdWx0eSIsIl9kZWZlbmRPckF0dGFjayIsInBsYXllciIsIl9kdW1teUJvYXJkIiwiYm9hcmQiLCJnZXRCb2FyZCIsIm1hcCIsImVsZSIsImNoZWNrSWZXb24iLCJkaXNwbGF5IiwicGxheVBpZWNlIiwiX3BpY2tSYW5kb20iLCJfcmFuZFN0YXJ0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiX2Nob29zZU1vdmUiLCJfcGxheU1hZGUiLCJfb3BwUGxheXMiLCJyZWR1Y2UiLCJhIiwiYiIsImdldFBsYXllcjEiLCJjYWxsIiwiX3NpZGVQaWVjZXMiLCJwdXNoIiwiaW5jbHVkZXMiLCJtYWtlTW92ZSIsIl9tYWtlRGlzcGxheSIsImhlYWRlciIsImNvbnRlbnQiLCJib2FyZENvbnRhaW5lciIsInBpZWNlU2VsZWN0aW9uIiwicGllY2VTZWxlY3Rpb25IZWxwZXIiLCJwaWVjZUNvbnRhaW5lciIsInhQaWVjZSIsInZhbHVlIiwib1BpZWNlIiwiYWlTZWxlY3Rpb24iLCJkaWZmaWN1bHR5Q29udGFpbmVyIiwiZWFzeUJ1dHRvbiIsIm1lZGl1bUJ1dHRvbiIsImltcG9zc2libGVCdXR0b24iLCJzdGFydEdhbWUiLCJib2FyZFNwYWNlMSIsImJvYXJkU3BhY2UyIiwiYm9hcmRTcGFjZTMiLCJib2FyZFNwYWNlNCIsImJvYXJkU3BhY2U1IiwiYm9hcmRTcGFjZTYiLCJib2FyZFNwYWNlNyIsImJvYXJkU3BhY2U4IiwiYm9hcmRTcGFjZTkiLCJ3aW5uZXIiLCJib2R5IiwiX2dhbWVCb2FyZCIsInVwZGF0ZSIsImluZGV4IiwiY2xlYXJCb2FyZCIsIl9jaGVja1dpbkNvbiIsImMiLCJfd2lubmVyIiwicGxheWVyU2VsIiwiX3BsYXllclNlbGVjdGlvbiIsIl9wbGF5ZXJQaWVjZVNlbGVjdG9ycyIsIl9nZXRQbGF5ZXJDaG9pY2UiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYnV0dG9uIiwiX2FjdGl2YXRlUGxheWVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWFjdGl2YXRlUGxheWVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNldFBsYXllciIsImdldFBsYXllclNlbGVjdGlvbiIsImRpZmZpY3VsdHlTZWwiLCJfZGlmU2VsZWN0aW9uIiwiX2RpZmZpY3VsdHlTZWxlY3RvcnMiLCJfZ2V0RGlmQ2hvaWNlIiwiX2FjdGl2YXRlRGlmZmljdWx0eSIsImRlYWN0aXZhdGVEaWZmaWN1bHR5IiwicmVzZXREaWZmaWN1bHR5IiwiZ2V0RGlmZmljdWx0eVNlbGVjdGlvbiIsIl9wbGF5ZXIxIiwiX3BsYXllcjIiLCJfY3VycmVudFBsYXllciIsIl9nYW1lT3ZlciIsIl9nYW1lQm9hcmRQaWVjZXMiLCJfc3RhcnRHYW1lQnV0dG9uIiwiX3dpbm5lckRpc3BsYXkiLCJfbmV3R2FtZSIsIl9zdGFydEdhbWUiLCJwYXJlbnRFbGVtZW50IiwibGFzdENoaWxkIiwic2V0VGltZW91dCIsImJpbmQiLCJfdXBkYXRlQm9hcmRQaWVjZSIsInJlcGxhY2VXaXRoIiwiY2xvbmVOb2RlIiwiX25leHRNb3ZlIiwidG9VcHBlckNhc2UiLCJfbmV3R2FtZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=