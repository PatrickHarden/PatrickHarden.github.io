(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(3);

var _reactHelmet = __webpack_require__(2);

var _ContactForm = __webpack_require__(38);

var _ContactForm2 = _interopRequireDefault(_ContactForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'article',
    { id: 'contact' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'contact' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'containerr' },
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { xs: '12' },
          _react2.default.createElement(
            'h1',
            null,
            'Contact'
          ),
          _react2.default.createElement(_ContactForm2.default, null)
        )
      )
    )
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
   return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
         _reactHelmet.Helmet,
         null,
         _react2.default.createElement('body', { className: 'expect3' })
      ),
      _react2.default.createElement(
         'section',
         null,
         _react2.default.createElement(
            'div',
            { 'class': 'container' },
            _react2.default.createElement(
               'div',
               { 'class': 'project-hero Jcenter' },
               _react2.default.createElement(
                  'header',
                  { 'class': 'hero-header' },
                  _react2.default.createElement(
                     'h1',
                     { 'class': 'project-label' },
                     'expect3 digitial marketing agency'
                  ),
                  _react2.default.createElement(
                     'a',
                     { href: 'https://expect3.com', 'class': 'btn project-title mRight', target: '_blank' },
                     'Visit site'
                  ),
                  _react2.default.createElement(
                     'a',
                     { href: 'https://github.com/PatrickHarden/expect3', 'class': 'btn project-title', target: '_blank' },
                     'View source'
                  )
               )
            ),
            _react2.default.createElement(
               'div',
               { 'class': 'inline-image' },
               _react2.default.createElement('img', { src: 'images/ex3full.png' })
            )
         ),
         _react2.default.createElement(
            'div',
            { 'class': 'project-links' },
            _react2.default.createElement(
               _reactStatic.Link,
               { to: '/', 'class': 'project-link project-link--first' },
               _react2.default.createElement(
                  'span',
                  { 'class': 'project-link__text' },
                  'Return Home'
               )
            ),
            _react2.default.createElement(
               _reactStatic.Link,
               { to: '/React-Static-Wordpress', 'class': 'project-link project-link--last' },
               _react2.default.createElement(
                  'span',
                  { 'class': 'project-link__text' },
                  'Next Project'
               )
            )
         )
      )
   );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
   return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
         _reactHelmet.Helmet,
         null,
         _react2.default.createElement('body', { className: 'lms' })
      ),
      _react2.default.createElement(
         'section',
         null,
         _react2.default.createElement(
            'div',
            { 'class': 'container' },
            _react2.default.createElement(
               'div',
               { 'class': 'project-hero Jcenter' },
               _react2.default.createElement(
                  'header',
                  { 'class': 'hero-header' },
                  _react2.default.createElement(
                     'h1',
                     { 'class': 'project-label' },
                     'Lawyer Marketing Services'
                  ),
                  _react2.default.createElement(
                     'a',
                     { href: 'https://lawyermarketingusa.com/', 'class': 'btn project-title mRight', target: '_blank' },
                     'Visit site'
                  ),
                  _react2.default.createElement(
                     'a',
                     { href: 'https://github.com/PatrickHarden/lawyermarketingusa', 'class': 'btn project-title', target: '_blank' },
                     'View source'
                  )
               )
            ),
            _react2.default.createElement(
               'div',
               { 'class': 'inline-image' },
               _react2.default.createElement('img', { src: 'images/lmsfull.png' })
            )
         ),
         _react2.default.createElement(
            'div',
            { 'class': 'project-links' },
            _react2.default.createElement(
               _reactStatic.Link,
               { to: '/', 'class': 'project-link project-link--first' },
               _react2.default.createElement(
                  'span',
                  { 'class': 'project-link__text' },
                  'Return Home'
               )
            ),
            _react2.default.createElement(
               _reactStatic.Link,
               { to: '/expect3', 'class': 'project-link project-link--last', href: '/engine.html' },
               _react2.default.createElement(
                  'span',
                  { 'class': 'project-link__text' },
                  'Next Project'
               )
            )
         )
      )
   );
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

var _reactDom = __webpack_require__(4);

var _brace = __webpack_require__(13);

var _brace2 = _interopRequireDefault(_brace);

var _reactAce = __webpack_require__(14);

var _reactAce2 = _interopRequireDefault(_reactAce);

__webpack_require__(15);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onChange(newValue) {
  console.log('change', newValue);
}

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'framework' })
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'project-hero' },
          _react2.default.createElement(
            'header',
            { 'class': 'hero-header' },
            _react2.default.createElement(
              'h1',
              { 'class': 'project-label' },
              'React-static Wordpress Framework'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/PatrickHarden/React-Static-Bootstrap-Template', 'class': 'btn project-title', target: '_blank' },
              'View Source'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { 'class': 'lede-content' },
          _react2.default.createElement(
            'p',
            { 'class': 'step-body nTop' },
            'Although React-static is a radically fast framework, it in itself wasn\'t adequate enough for our clients\' needs. The clients required access to a content management system in order to alter forms, blogs, staff, ect. However, determined not to be binded to wordpress, I pioneered a framework of my own, combining the speed and expandability of react-static with the cms functionality of wordpress. '
          ),
          _react2.default.createElement(
            'p',
            { 'class': 'step-body mTop' },
            'React-staic excels at generating static sites from JSON data. Check out how the JSON data is pulled from wordpress and dispersed to the sub-components.'
          )
        ),
        _react2.default.createElement(_reactAce2.default, {
          mode: 'javascript',
          theme: 'monokai',
          onChange: onChange,
          fontSize: 14
          // showPrintMargin={true}
          // showGutter={true}
          , highlightActiveLine: true,
          width: '100%',
          height: '1000px',
          value: 'export default {\n    getSiteData: async () => {\n      const baseURL = \'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com\'\n      const { data: menus } = await axios.get(baseURL + \'/index.php/wp-json/wp-api-menus/v2/menus/2\')\n      const { data: options } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/options/\')\n      \n    return {\n      title: \'Attorney Template\',\n      siteRoot: \'https://attorneytemplate.netlify.com/\',\n      siteCreator: \'Lawyer Marketing USA\',\n      siteCreatorURL: \'http://lawyermarketingusa.com\',\n      menus,\n      options\n    }\n  },\n  getRoutes: async () => {\n    const baseURL = \'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com\'\n    const { data: pages } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/pages?per_page=99\')\n    const { data: posts } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/posts?per_page=6\')\n    const { data: areas } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/practice-area?per_page=99\')\n    const { data: staff } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/staff?per_page=99\')\n    \n    return [\n      {\n        path: \'/blogs\',\n        component: \'src/pages/Blog\',\n        getData: () => ({\n          posts,\n        }),\n        children: posts.map(post => ({\n          path: \'/{$post.slug}\',\n          component: \'src/singles/Post\',\n          getData: () => ({\n            post,\n          }),\n        })),\n      },\n      {\n        path: \'/practice-area\',\n        component: \'src/archives/AreaArchive\',\n        getData: () => ({\n          areas,\n        }),\n        children: areas.map(practiceArea => ({\n          path: \'/{$practiceArea.slug}\',\n          component: \'src/singles/Areas\',\n          getData: () => ({\n            practiceArea,\n          }),\n        })),\n      },\n      {\n        path: \'/staff\',\n        component: \'src/archives/StaffArchive\',\n        getData: () => ({\n          staff,\n        }),\n        children: staff.map(staffMember => ({\n          path: \'/{$staffMember.slug}\',\n          component: \'src/singles/Staff\',\n          getData: () => ({\n            staffMember,\n          }),\n        })),\n      },\n      {\n        path: \'/contact\',\n        component: \'src/pages/Contact\',\n      },\n      {\n        path: \'/\',\n        component: \'src/pages/Home\',\n        children: pages.map(page => ({\n        path: \'/{$page.slug}\',\n        component: \'src/pages/Page\',\n          getData: () => ({\n            page,\n          }),\n        })),\n      },\n      {\n        is404: true,\n        component: \'src/pages/404\',\n      },\n    ]\n    }\n  }\n    ',
          setOptions: {
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true
            // tabSize: 2,
          } })
      ),
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'lede-content' },
          _react2.default.createElement(
            'p',
            { 'class': 'step-body sTop' },
            'Wordpress\'s Rest API is enabled by default, so those JSON pulls from the pages and posts would occur without conflict - you could even pull the latest stories from a local news site if they use wordpress. '
          ),
          _react2.default.createElement(
            'p',
            { 'class': 'step-body sTop ssTop' },
            'The rest of the trickery is enabled by a custom wordpress plugin. It creates new custom post types and a deploy button which allows the user to trigger a new yarn/npm build command from wordpress. Additionally, an AWS offload plugin is installed, which converts uploaded media to URLs, which then enables users to add media from wordpress. '
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { 'class': 'project-step' },
        _react2.default.createElement('div', { 'class': 'container' })
      ),
      _react2.default.createElement(
        'div',
        { 'class': 'project-links' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/', 'class': 'project-link project-link--first' },
          _react2.default.createElement(
            'span',
            { 'class': 'project-link__text' },
            'Return Home'
          )
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/React-Static-Website-Generator', 'class': 'project-link project-link--last' },
          _react2.default.createElement(
            'span',
            { 'class': 'project-link__text' },
            'Next Project'
          )
        )
      )
    )
  );
};

//     import axios from 'axios'
//     import React, { Component } from 'react'


//     export default {
//       getSiteData: async () => {
//         const baseURL = 'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com'
//         const { data: menus } = await axios.get(baseURL + '/index.php/wp-json/wp-api-menus/v2/menus/2')
//         const { data: options } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/options/')


//     return {
//       title: 'Attorney Template',
//       siteRoot: 'https://attorneytemplate.netlify.com/',
//       siteCreator: 'Lawyer Marketing USA',
//       siteCreatorURL: 'http://lawyermarketingusa.com',
//       menus,
//       options
//     }
//   },
//   getRoutes: async () => {
//     const baseURL = 'http://www.attorneytemplate.dev.php72-38.lan3-1.websitetestlink.com'
//     const { data: pages } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/pages?per_page=99')
//     const { data: posts } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/posts?per_page=6')
//     const { data: areas } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/practice-area?per_page=99')
//     const { data: staff } = await axios.get(baseURL + '/index.php/wp-json/wp/v2/staff?per_page=99')

//     return [
//       {
//         path: '/blogs',
//         component: 'src/pages/Blog',
//         getData: () => ({
//           posts,
//         }),
//         children: posts.map(post => ({
//           path: `/${post.slug}`,
//           component: 'src/singles/Post',
//           getData: () => ({
//             post,
//           }),
//         })),
//       },
//       {
//         path: '/practice-area',
//         component: 'src/archives/AreaArchive',
//         getData: () => ({
//           areas,
//         }),
//         children: areas.map(practiceArea => ({
//           path: `/${practiceArea.slug}`,
//           component: 'src/singles/Areas',
//           getData: () => ({
//             practiceArea,
//           }),
//         })),
//       },
//       {
//         path: '/staff',
//         component: 'src/archives/StaffArchive',
//         getData: () => ({
//           staff,
//         }),
//         children: staff.map(staffMember => ({
//           path: `/${staffMember.slug}`,
//           component: 'src/singles/Staff',
//           getData: () => ({
//             staffMember,
//           }),
//         })),
//       },
//       {
//         path: '/contact',
//         component: 'src/pages/Contact',
//       },
//       {
//         path: '/',
//         component: 'src/pages/Home',
//         children: pages.map(page => ({
//         path: `/${page.slug}`,
//         component: 'src/pages/Page',
//           getData: () => ({
//             page,
//           }),
//         })),
//       },
//       {
//         is404: true,
//         component: 'src/pages/404',
//       },
//     ]
//   }
// }

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("brace");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-ace");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var DocCommentHighlightRules = function() {
    this.$rules = {
        "start" : [ {
            token : "comment.doc.tag",
            regex : "@[\\w\\d_]+" // TODO: fix email addresses
        }, 
        DocCommentHighlightRules.getTagRule(),
        {
            defaultToken : "comment.doc",
            caseInsensitive: true
        }]
    };
};

oop.inherits(DocCommentHighlightRules, TextHighlightRules);

DocCommentHighlightRules.getTagRule = function(start) {
    return {
        token : "comment.doc.tag.storage.type",
        regex : "\\b(?:TODO|FIXME|XXX|HACK)\\b"
    };
};

DocCommentHighlightRules.getStartRule = function(start) {
    return {
        token : "comment.doc", // doc comment
        regex : "\\/\\*(?=\\*)",
        next  : start
    };
};

DocCommentHighlightRules.getEndRule = function (start) {
    return {
        token : "comment.doc", // closing comment
        regex : "\\*\\/",
        next  : start
    };
};


exports.DocCommentHighlightRules = DocCommentHighlightRules;

});

ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var DocCommentHighlightRules = acequire("./doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;
var identifierRe = "[a-zA-Z\\$_\u00a1-\uffff][a-zA-Z\\d\\$_\u00a1-\uffff]*";

var JavaScriptHighlightRules = function(options) {
    var keywordMapper = this.createKeywordMapper({
        "variable.language":
            "Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|"  + // Constructors
            "Namespace|QName|XML|XMLList|"                                             + // E4X
            "ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|"   +
            "Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|"                    +
            "Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|"   + // Errors
            "SyntaxError|TypeError|URIError|"                                          +
            "decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|" + // Non-constructor functions
            "isNaN|parseFloat|parseInt|"                                               +
            "JSON|Math|"                                                               + // Other
            "this|arguments|prototype|window|document"                                 , // Pseudo
        "keyword":
            "const|yield|import|get|set|async|await|" +
            "break|case|catch|continue|default|delete|do|else|finally|for|function|" +
            "if|in|of|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|" +
            "__parent__|__count__|escape|unescape|with|__proto__|" +
            "class|enum|extends|super|export|implements|private|public|interface|package|protected|static",
        "storage.type":
            "const|let|var|function",
        "constant.language":
            "null|Infinity|NaN|undefined",
        "support.function":
            "alert",
        "constant.language.boolean": "true|false"
    }, "identifier");
    var kwBeforeRe = "case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void";

    var escapedRe = "\\\\(?:x[0-9a-fA-F]{2}|" + // hex
        "u[0-9a-fA-F]{4}|" + // unicode
        "u{[0-9a-fA-F]{1,6}}|" + // es6 unicode
        "[0-2][0-7]{0,2}|" + // oct
        "3[0-7][0-7]?|" + // oct
        "[4-7][0-7]?|" + //oct
        ".)";

    this.$rules = {
        "no_regex" : [
            DocCommentHighlightRules.getStartRule("doc-start"),
            comments("no_regex"),
            {
                token : "string",
                regex : "'(?=.)",
                next  : "qstring"
            }, {
                token : "string",
                regex : '"(?=.)',
                next  : "qqstring"
            }, {
                token : "constant.numeric", // hexadecimal, octal and binary
                regex : /0(?:[xX][0-9a-fA-F]+|[oO][0-7]+|[bB][01]+)\b/
            }, {
                token : "constant.numeric", // decimal integers and floats
                regex : /(?:\d\d*(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+\b)?/
            }, {
                token : [
                    "storage.type", "punctuation.operator", "support.function",
                    "punctuation.operator", "entity.name.function", "text","keyword.operator"
                ],
                regex : "(" + identifierRe + ")(\\.)(prototype)(\\.)(" + identifierRe +")(\\s*)(=)",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "entity.name.function", "text", "keyword.operator", "text", "storage.type",
                    "text", "paren.lparen"
                ],
                regex : "(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text",
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(function)(\\s+)(" + identifierRe + ")(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "entity.name.function", "text", "punctuation.operator",
                    "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : [
                    "text", "text", "storage.type", "text", "paren.lparen"
                ],
                regex : "(:)(\\s*)(function)(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : "keyword",
                regex : "from(?=\\s*('|\"))"
            }, {
                token : "keyword",
                regex : "(?:" + kwBeforeRe + ")\\b",
                next : "start"
            }, {
                token : ["support.constant"],
                regex : /that\b/
            }, {
                token : ["storage.type", "punctuation.operator", "support.function.firebug"],
                regex : /(console)(\.)(warn|info|log|error|time|trace|timeEnd|assert)\b/
            }, {
                token : keywordMapper,
                regex : identifierRe
            }, {
                token : "punctuation.operator",
                regex : /[.](?![.])/,
                next  : "property"
            }, {
                token : "storage.type",
                regex : /=>/
            }, {
                token : "keyword.operator",
                regex : /--|\+\+|\.{3}|===|==|=|!=|!==|<+=?|>+=?|!|&&|\|\||\?:|[!$%&*+\-~\/^]=?/,
                next  : "start"
            }, {
                token : "punctuation.operator",
                regex : /[?:,;.]/,
                next  : "start"
            }, {
                token : "paren.lparen",
                regex : /[\[({]/,
                next  : "start"
            }, {
                token : "paren.rparen",
                regex : /[\])}]/
            }, {
                token: "comment",
                regex: /^#!.*$/
            }
        ],
        property: [{
                token : "text",
                regex : "\\s+"
            }, {
                token : [
                    "storage.type", "punctuation.operator", "entity.name.function", "text",
                    "keyword.operator", "text",
                    "storage.type", "text", "entity.name.function", "text", "paren.lparen"
                ],
                regex : "(" + identifierRe + ")(\\.)(" + identifierRe +")(\\s*)(=)(\\s*)(function)(?:(\\s+)(\\w+))?(\\s*)(\\()",
                next: "function_arguments"
            }, {
                token : "punctuation.operator",
                regex : /[.](?![.])/
            }, {
                token : "support.function",
                regex : /(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/
            }, {
                token : "support.function.dom",
                regex : /(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName|ClassName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/
            }, {
                token :  "support.constant",
                regex : /(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/
            }, {
                token : "identifier",
                regex : identifierRe
            }, {
                regex: "",
                token: "empty",
                next: "no_regex"
            }
        ],
        "start": [
            DocCommentHighlightRules.getStartRule("doc-start"),
            comments("start"),
            {
                token: "string.regexp",
                regex: "\\/",
                next: "regex"
            }, {
                token : "text",
                regex : "\\s+|^$",
                next : "start"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }
        ],
        "regex": [
            {
                token: "regexp.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "string.regexp",
                regex: "/[sxngimy]*",
                next: "no_regex"
            }, {
                token : "invalid",
                regex: /\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/
            }, {
                token : "constant.language.escape",
                regex: /\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?.]/
            }, {
                token : "constant.language.delimiter",
                regex: /\|/
            }, {
                token: "constant.language.escape",
                regex: /\[\^?/,
                next: "regex_character_class"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp"
            }
        ],
        "regex_character_class": [
            {
                token: "regexp.charclass.keyword.operator",
                regex: "\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"
            }, {
                token: "constant.language.escape",
                regex: "]",
                next: "regex"
            }, {
                token: "constant.language.escape",
                regex: "-"
            }, {
                token: "empty",
                regex: "$",
                next: "no_regex"
            }, {
                defaultToken: "string.regexp.charachterclass"
            }
        ],
        "function_arguments": [
            {
                token: "variable.parameter",
                regex: identifierRe
            }, {
                token: "punctuation.operator",
                regex: "[, ]+"
            }, {
                token: "punctuation.operator",
                regex: "$"
            }, {
                token: "empty",
                regex: "",
                next: "no_regex"
            }
        ],
        "qqstring" : [
            {
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "string",
                regex : "\\\\$",
                consumeLineEnd  : true
            }, {
                token : "string",
                regex : '"|$',
                next  : "no_regex"
            }, {
                defaultToken: "string"
            }
        ],
        "qstring" : [
            {
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "string",
                regex : "\\\\$",
                consumeLineEnd  : true
            }, {
                token : "string",
                regex : "'|$",
                next  : "no_regex"
            }, {
                defaultToken: "string"
            }
        ]
    };


    if (!options || !options.noES6) {
        this.$rules.no_regex.unshift({
            regex: "[{}]", onMatch: function(val, state, stack) {
                this.next = val == "{" ? this.nextState : "";
                if (val == "{" && stack.length) {
                    stack.unshift("start", state);
                }
                else if (val == "}" && stack.length) {
                    stack.shift();
                    this.next = stack.shift();
                    if (this.next.indexOf("string") != -1 || this.next.indexOf("jsx") != -1)
                        return "paren.quasi.end";
                }
                return val == "{" ? "paren.lparen" : "paren.rparen";
            },
            nextState: "start"
        }, {
            token : "string.quasi.start",
            regex : /`/,
            push  : [{
                token : "constant.language.escape",
                regex : escapedRe
            }, {
                token : "paren.quasi.start",
                regex : /\${/,
                push  : "start"
            }, {
                token : "string.quasi.end",
                regex : /`/,
                next  : "pop"
            }, {
                defaultToken: "string.quasi"
            }]
        });

        if (!options || options.jsx != false)
            JSX.call(this);
    }

    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("no_regex") ]);

    this.normalizeRules();
};

oop.inherits(JavaScriptHighlightRules, TextHighlightRules);

function JSX() {
    var tagRegex = identifierRe.replace("\\d", "\\d\\-");
    var jsxTag = {
        onMatch : function(val, state, stack) {
            var offset = val.charAt(1) == "/" ? 2 : 1;
            if (offset == 1) {
                if (state != this.nextState)
                    stack.unshift(this.next, this.nextState, 0);
                else
                    stack.unshift(this.next);
                stack[2]++;
            } else if (offset == 2) {
                if (state == this.nextState) {
                    stack[1]--;
                    if (!stack[1] || stack[1] < 0) {
                        stack.shift();
                        stack.shift();
                    }
                }
            }
            return [{
                type: "meta.tag.punctuation." + (offset == 1 ? "" : "end-") + "tag-open.xml",
                value: val.slice(0, offset)
            }, {
                type: "meta.tag.tag-name.xml",
                value: val.substr(offset)
            }];
        },
        regex : "</?" + tagRegex + "",
        next: "jsxAttributes",
        nextState: "jsx"
    };
    this.$rules.start.unshift(jsxTag);
    var jsxJsRule = {
        regex: "{",
        token: "paren.quasi.start",
        push: "start"
    };
    this.$rules.jsx = [
        jsxJsRule,
        jsxTag,
        {include : "reference"},
        {defaultToken: "string"}
    ];
    this.$rules.jsxAttributes = [{
        token : "meta.tag.punctuation.tag-close.xml",
        regex : "/?>",
        onMatch : function(value, currentState, stack) {
            if (currentState == stack[0])
                stack.shift();
            if (value.length == 2) {
                if (stack[0] == this.nextState)
                    stack[1]--;
                if (!stack[1] || stack[1] < 0) {
                    stack.splice(0, 2);
                }
            }
            this.next = stack[0] || "start";
            return [{type: this.token, value: value}];
        },
        nextState: "jsx"
    },
    jsxJsRule,
    comments("jsxAttributes"),
    {
        token : "entity.other.attribute-name.xml",
        regex : tagRegex
    }, {
        token : "keyword.operator.attribute-equals.xml",
        regex : "="
    }, {
        token : "text.tag-whitespace.xml",
        regex : "\\s+"
    }, {
        token : "string.attribute-value.xml",
        regex : "'",
        stateName : "jsx_attr_q",
        push : [
            {token : "string.attribute-value.xml", regex: "'", next: "pop"},
            {include : "reference"},
            {defaultToken : "string.attribute-value.xml"}
        ]
    }, {
        token : "string.attribute-value.xml",
        regex : '"',
        stateName : "jsx_attr_qq",
        push : [
            {token : "string.attribute-value.xml", regex: '"', next: "pop"},
            {include : "reference"},
            {defaultToken : "string.attribute-value.xml"}
        ]
    },
    jsxTag
    ];
    this.$rules.reference = [{
        token : "constant.language.escape.reference.xml",
        regex : "(?:&#[0-9]+;)|(?:&#x[0-9a-fA-F]+;)|(?:&[a-zA-Z0-9_:\\.-]+;)"
    }];
}

function comments(next) {
    return [
        {
            token : "comment", // multi line comment
            regex : /\/\*/,
            next: [
                DocCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "\\*\\/", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }, {
            token : "comment",
            regex : "\\/\\/",
            next: [
                DocCommentHighlightRules.getTagRule(),
                {token : "comment", regex : "$|^", next : next || "pop"},
                {defaultToken : "comment", caseInsensitive: true}
            ]
        }
    ];
}
exports.JavaScriptHighlightRules = JavaScriptHighlightRules;
});

ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"], function(acequire, exports, module) {
"use strict";

var Range = acequire("../range").Range;

var MatchingBraceOutdent = function() {};

(function() {

    this.checkOutdent = function(line, input) {
        if (! /^\s+$/.test(line))
            return false;

        return /^\s*\}/.test(input);
    };

    this.autoOutdent = function(doc, row) {
        var line = doc.getLine(row);
        var match = line.match(/^(\s*\})/);

        if (!match) return 0;

        var column = match[1].length;
        var openBracePos = doc.findMatchingBracket({row: row, column: column});

        if (!openBracePos || openBracePos.row == row) return 0;

        var indent = this.$getIndent(doc.getLine(openBracePos.row));
        doc.replace(new Range(row, 0, row, column-1), indent);
    };

    this.$getIndent = function(line) {
        return line.match(/^\s*/)[0];
    };

}).call(MatchingBraceOutdent.prototype);

exports.MatchingBraceOutdent = MatchingBraceOutdent;
});

ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../../lib/oop");
var Range = acequire("../../range").Range;
var BaseFoldMode = acequire("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {
    
    this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);
    
        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }
    
        var fw = this._getFoldWidgetBase(session, foldStyle, row);
    
        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart
    
        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        
        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);
        
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);
                
            var range = session.getCommentFoldRange(row, i + match[0].length, 1);
            
            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }
            
            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };
    
    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);
            
            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }
        
        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;
        
        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var TextMode = acequire("./text").Mode;
var JavaScriptHighlightRules = acequire("./javascript_highlight_rules").JavaScriptHighlightRules;
var MatchingBraceOutdent = acequire("./matching_brace_outdent").MatchingBraceOutdent;
var WorkerClient = acequire("../worker/worker_client").WorkerClient;
var CstyleBehaviour = acequire("./behaviour/cstyle").CstyleBehaviour;
var CStyleFoldMode = acequire("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = JavaScriptHighlightRules;
    
    this.$outdent = new MatchingBraceOutdent();
    this.$behaviour = new CstyleBehaviour();
    this.foldingRules = new CStyleFoldMode();
};
oop.inherits(Mode, TextMode);

(function() {

    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
    this.$quotes = {'"': '"', "'": "'", "`": "`"};

    this.getNextLineIndent = function(state, line, tab) {
        var indent = this.$getIndent(line);

        var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
        var tokens = tokenizedLine.tokens;
        var endState = tokenizedLine.state;

        if (tokens.length && tokens[tokens.length-1].type == "comment") {
            return indent;
        }

        if (state == "start" || state == "no_regex") {
            var match = line.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);
            if (match) {
                indent += tab;
            }
        } else if (state == "doc-start") {
            if (endState == "start" || endState == "no_regex") {
                return "";
            }
            var match = line.match(/^\s*(\/?)\*/);
            if (match) {
                if (match[1]) {
                    indent += " ";
                }
                indent += "* ";
            }
        }

        return indent;
    };

    this.checkOutdent = function(state, line, input) {
        return this.$outdent.checkOutdent(line, input);
    };

    this.autoOutdent = function(state, doc, row) {
        this.$outdent.autoOutdent(doc, row);
    };

    this.createWorker = function(session) {
        var worker = new WorkerClient(["ace"], __webpack_require__(39), "JavaScriptWorker");
        worker.attachToDocument(session.getDocument());

        worker.on("annotate", function(results) {
            session.setAnnotations(results.data);
        });

        worker.on("terminate", function() {
            session.clearAnnotations();
        });

        return worker;
    };

    this.$id = "ace/mode/javascript";
}).call(Mode.prototype);

exports.Mode = Mode;
});

ace.define("ace/mode/java_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var DocCommentHighlightRules = acequire("./doc_comment_highlight_rules").DocCommentHighlightRules;
var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

var JavaHighlightRules = function() {
    var keywords = (
    "abstract|continue|for|new|switch|" +
    "assert|default|goto|package|synchronized|" +
    "boolean|do|if|private|this|" +
    "break|double|implements|protected|throw|" +
    "byte|else|import|public|throws|" +
    "case|enum|instanceof|return|transient|" +
    "catch|extends|int|short|try|" +
    "char|final|interface|static|void|" +
    "class|finally|long|strictfp|volatile|" +
    "const|float|native|super|while"
    );

    var buildinConstants = ("null|Infinity|NaN|undefined");


    var langClasses = (
        "AbstractMethodError|AssertionError|ClassCircularityError|"+
        "ClassFormatError|Deprecated|EnumConstantNotPresentException|"+
        "ExceptionInInitializerError|IllegalAccessError|"+
        "IllegalThreadStateException|InstantiationError|InternalError|"+
        "NegativeArraySizeException|NoSuchFieldError|Override|Process|"+
        "ProcessBuilder|SecurityManager|StringIndexOutOfBoundsException|"+
        "SuppressWarnings|TypeNotPresentException|UnknownError|"+
        "UnsatisfiedLinkError|UnsupportedClassVersionError|VerifyError|"+
        "InstantiationException|IndexOutOfBoundsException|"+
        "ArrayIndexOutOfBoundsException|CloneNotSupportedException|"+
        "NoSuchFieldException|IllegalArgumentException|NumberFormatException|"+
        "SecurityException|Void|InheritableThreadLocal|IllegalStateException|"+
        "InterruptedException|NoSuchMethodException|IllegalAccessException|"+
        "UnsupportedOperationException|Enum|StrictMath|Package|Compiler|"+
        "Readable|Runtime|StringBuilder|Math|IncompatibleClassChangeError|"+
        "NoSuchMethodError|ThreadLocal|RuntimePermission|ArithmeticException|"+
        "NullPointerException|Long|Integer|Short|Byte|Double|Number|Float|"+
        "Character|Boolean|StackTraceElement|Appendable|StringBuffer|"+
        "Iterable|ThreadGroup|Runnable|Thread|IllegalMonitorStateException|"+
        "StackOverflowError|OutOfMemoryError|VirtualMachineError|"+
        "ArrayStoreException|ClassCastException|LinkageError|"+
        "NoClassDefFoundError|ClassNotFoundException|RuntimeException|"+
        "Exception|ThreadDeath|Error|Throwable|System|ClassLoader|"+
        "Cloneable|Class|CharSequence|Comparable|String|Object"
    );

    var keywordMapper = this.createKeywordMapper({
        "variable.language": "this",
        "keyword": keywords,
        "constant.language": buildinConstants,
        "support.function": langClasses
    }, "identifier");

    this.$rules = {
        "start" : [
            {
                token : "comment",
                regex : "\\/\\/.*$"
            },
            DocCommentHighlightRules.getStartRule("doc-start"),
            {
                token : "comment", // multi line comment
                regex : "\\/\\*",
                next : "comment"
            }, {
                token : "string", // single line
                regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
            }, {
                token : "string", // single line
                regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
            }, {
                token : "constant.numeric", // hex
                regex : /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
            }, {
                token : "constant.numeric", // float
                regex : /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
            }, {
                token : "constant.language.boolean",
                regex : "(?:true|false)\\b"
            }, {
                token : keywordMapper,
                regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }, {
                token : "keyword.operator",
                regex : "!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"
            }, {
                token : "lparen",
                regex : "[[({]"
            }, {
                token : "rparen",
                regex : "[\\])}]"
            }, {
                token : "text",
                regex : "\\s+"
            }
        ],
        "comment" : [
            {
                token : "comment", // closing comment
                regex : "\\*\\/",
                next : "start"
            }, {
                defaultToken : "comment"
            }
        ]
    };

    this.embedRules(DocCommentHighlightRules, "doc-",
        [ DocCommentHighlightRules.getEndRule("start") ]);
};

oop.inherits(JavaHighlightRules, TextHighlightRules);

exports.JavaHighlightRules = JavaHighlightRules;
});

ace.define("ace/mode/java",["require","exports","module","ace/lib/oop","ace/mode/javascript","ace/mode/java_highlight_rules"], function(acequire, exports, module) {
"use strict";

var oop = acequire("../lib/oop");
var JavaScriptMode = acequire("./javascript").Mode;
var JavaHighlightRules = acequire("./java_highlight_rules").JavaHighlightRules;

var Mode = function() {
    JavaScriptMode.call(this);
    this.HighlightRules = JavaHighlightRules;
};
oop.inherits(Mode, JavaScriptMode);

(function() {
    
    this.createWorker = function(session) {
        return null;
    };

    this.$id = "ace/mode/java";
}).call(Mode.prototype);

exports.Mode = Mode;
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

ace.define("ace/theme/monokai",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-monokai";
exports.cssText = ".ace-monokai .ace_gutter {\
background: #2F3129;\
color: #8F908A\
}\
.ace-monokai .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-monokai {\
background-color: #272822;\
color: #F8F8F2\
}\
.ace-monokai .ace_cursor {\
color: #F8F8F0\
}\
.ace-monokai .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-monokai.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
}\
.ace-monokai .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-monokai .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-monokai .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-monokai .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-monokai .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-monokai .ace_invisible {\
color: #52524d\
}\
.ace-monokai .ace_entity.ace_name.ace_tag,\
.ace-monokai .ace_keyword,\
.ace-monokai .ace_meta.ace_tag,\
.ace-monokai .ace_storage {\
color: #F92672\
}\
.ace-monokai .ace_punctuation,\
.ace-monokai .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-monokai .ace_constant.ace_character,\
.ace-monokai .ace_constant.ace_language,\
.ace-monokai .ace_constant.ace_numeric,\
.ace-monokai .ace_constant.ace_other {\
color: #AE81FF\
}\
.ace-monokai .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-monokai .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-monokai .ace_support.ace_constant,\
.ace-monokai .ace_support.ace_function {\
color: #66D9EF\
}\
.ace-monokai .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-monokai .ace_storage.ace_type,\
.ace-monokai .ace_support.ace_class,\
.ace-monokai .ace_support.ace_type {\
font-style: italic;\
color: #66D9EF\
}\
.ace-monokai .ace_entity.ace_name.ace_function,\
.ace-monokai .ace_entity.ace_other,\
.ace-monokai .ace_entity.ace_other.ace_attribute-name,\
.ace-monokai .ace_variable {\
color: #A6E22E\
}\
.ace-monokai .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-monokai .ace_string {\
color: #E6DB74\
}\
.ace-monokai .ace_comment {\
color: #75715E\
}\
.ace-monokai .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

var _reactDom = __webpack_require__(4);

var _brace = __webpack_require__(13);

var _brace2 = _interopRequireDefault(_brace);

var _reactAce = __webpack_require__(14);

var _reactAce2 = _interopRequireDefault(_reactAce);

__webpack_require__(15);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onChange(newValue) {
  console.log('change', newValue);
}

var page = {
  slug: 'page.slug'
};
var post = {
  slug: 'page.slug'
};
var retailer = {
  slug: 'page.slug'
};
var sale = {
  slug: 'page.slug'
};
var event = {
  slug: 'page.slug'
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'framework' })
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        'div',
        { 'class': 'container' },
        _react2.default.createElement(
          'div',
          { 'class': 'project-hero' },
          _react2.default.createElement(
            'header',
            { 'class': 'hero-header' },
            _react2.default.createElement(
              'h1',
              { 'class': 'project-label' },
              'React-static Wordpress Framework v2'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://www.visithalcyon.com/', 'class': 'btn project-title mRight', target: '_blank' },
              'View Example'
            ),
            _react2.default.createElement(
              'a',
              { href: 'https://github.com/PatrickHarden/React-static-Wordpress-v2', 'class': 'btn project-title', target: '_blank' },
              'View Source'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { 'class': 'lede-content' },
          _react2.default.createElement(
            'p',
            { 'class': 'step-body nTop' },
            'This revised framework implements many new features such as modular page building, gravity forms, and robust CMS integration.'
          ),
          _react2.default.createElement(
            'p',
            { 'class': 'step-body mTop' },
            'Given react-static\'s nature, this framework produces significantly faster and stronger SEO wordpress sites. Below is how react-static handles axios calls on "yarn build", so that all the website data is there, before the user hits the page.'
          )
        ),
        _react2.default.createElement(_reactAce2.default, {
          mode: 'javascript',
          theme: 'monokai',
          onChange: onChange,
          fontSize: 14
          // showPrintMargin={true}
          // showGutter={true}
          , highlightActiveLine: true,
          width: '100%',
          height: '4000px',
          value: 'export default {\nimport axios from \'axios\'\n\n// variables responsible for holding stores json data if respective store is a retailer/restaurant\n// the data is split into two futher down in the getRouteData method\nvar retailers;\nvar restaurants;\n\nexport default {\n  // self-evident - the events/shopping/blogs pages are being inentionally overwritten by the page data\n  // src/singles/Page file is responsible for handling them instead of src/pages/Events, ect\n  disableDuplicateRoutesWarning: true,\n\n  // siteRoot here is responsible for generating xml file automatically. React-static speciality\n  siteRoot: \'https://halycon.netlify.com\',\n\n  // The following is JSON data accessible globally, by any component, by using the withSiteData() call\n  // Below you will see some repeated functionality - I couldn\'t place it into it\'s own function since the axios await\n  // call is reserved to the getSiteData, getRouteData methods. However, the repeated functionality is responsible for pulling\n  // more than 100 post types if there exists more than 100.\n  getSiteData: async () => {\n    const baseURL = \'https://halcyon.v3.imaginuitycenters.com\'\n    const { data: menus } = await axios.get(baseURL + \'/wp-json/wp-api-menus/v2/menus/2\')\n    const { data: centerInfo } = await axios.get(baseURL + \'/wp-json/acf/v3/options/property_options\')\n    const { data: menuLocations } = await axios.get(baseURL + \'/wp-json/wp-api-menus/v2/menu-locations\')\n    const { data: footerMenu } = await axios.get(baseURL + \'/wp-json/wp-api-menus/v2/menus/3\')\n    var { data: pages } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/pages?per_page=100\')\n    var { data: posts } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/posts?per_page=100\')\n    var { data: events } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100\')\n    var { data: stores } = await axios.get(baseURL + \'/wp-json/wp/v2/stores/\')\n    var { data: sales } = await axios.get(baseURL + \'/wp-json/wp/v2/sales?per_page=100\')\n    const { data: storeCategories } = await axios.get(baseURL + \'/wp-json/wp/v2/imag_taxonomy_store_category?per_page=100\')\n\n    // Getting headers for events, stores, sales, blogs, and pages to see if there exist more than 100, and if so, pull more\n    const { headers: moreEvents } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100\')\n    const { headers: moreStores } = await axios.get(baseURL + \'/wp-json/wp/v2/stores?per_page=100\')\n    const { headers: moreSales } = await axios.get(baseURL + \'/wp-json/wp/v2/sales?per_page=100\')\n    const { headers: morePages } = await axios.get(baseURL + \'/wp-json/wp/v2/pages?per_page=100\')\n    const { headers: morePosts } = await axios.get(baseURL + \'/wp-json/wp/v2/posts?per_page=100\')\n\n    // get more json data for events if it exists\n    let theCount = moreEvents[\'x-wp-totalpages\']\n    let x = 2;\n    while (x <= theCount) {\n      var { data: moreEvents2 } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100&page=\' + x)\n      if (moreEvents2) {\n        for (var i = 0; i < moreEvents2.length; i++) {\n          events.push(moreEvents2[i])\n        }\n      }\n      x++\n    }\n\n    // get more json for stores if it exists\n    let theStoreCount = moreStores[\'x-wp-totalpages\']\n    let storeCount = 2;\n    while (storeCount <= theStoreCount) {\n      var { data: moreStores2 } = await axios.get(baseURL + \'/wp-json/wp/v2/stores?per_page=100&page=\' + storeCount)\n      if (moreStores2) {\n        for (var i = 0; i < moreStores2.length; i++) {\n          stores.push(moreStores2[i])\n        }\n      }\n      storeCount++\n    }\n\n    // get more json for sales if it exists\n    let theSaleCount = moreSales[\'x-wp-totalpages\']\n    let saleCount = 2;\n    while (saleCount <= theSaleCount) {\n      var { data: moreSales2 } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100&page=\' + saleCount)\n      if (moreSales2) {\n        for (var i = 0; i < moreSales2.length; i++) {\n          sales.push(moreSales2[i])\n        }\n      }\n      saleCount++\n    }\n\n    // get more json for pages if it exists\n    let thePageCount = morePages[\'x-wp-totalpages\']\n    let pageCount = 2;\n    while (pageCount <= thePageCount) {\n      var { data: morePages2 } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100&page=\' + pageCount)\n      if (morePages2) {\n        for (var i = 0; i < morePages2.length; i++) {\n          pages.push(morePages2[i])\n        }\n      }\n      pageCount++\n    }\n\n    // get more json for posts if it exists\n    let thePostCount = morePosts[\'x-wp-totalpages\']\n    let postCount = 2;\n    while (postCount <= thePostCount) {\n      var { data: morePosts2 } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100&page=\' + postCount)\n      if (morePosts2) {\n        for (var i = 0; i < morePosts2.length; i++) {\n          posts.push(morePosts2[i])\n        }\n      }\n      postCount++\n    }\n\n    // Defines the JSON objects which are accessible globally, Here we will change the url\'s below for new sites\n    return {\n      title: \'Halcyon\',\n      siteCreator: \'Imaginuity\',\n      siteCreatorURL: \'https://www.imaginuity.com/\',\n      redirectURL: \'https://halcyon.v3.imaginuitycenters.com/wp-admin\',\n      siteRoot: \'https://halycon.netlify.com/\',\n      menus,\n      centerInfo,\n      menuLocations,\n      footerMenu,\n      pages,\n      posts,\n      events,\n      stores,\n      storeCategories,\n      sales\n    }\n  },\n\n\n  // JSON data available only to the route which it is passed to. Accessed by withRouteData()\n  getRoutes: async () => {\n    const baseURL = \'https://halcyon.v3.imaginuitycenters.com\'\n    var { data: pages } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/pages?per_page=100\')\n    var { data: posts } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/posts?per_page=100\')\n    var { data: events } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100\')\n    var { data: stores } = await axios.get(baseURL + \'/wp-json/wp/v2/stores?per_page=100\')\n    var { data: sales } = await axios.get(baseURL + \'/wp-json/wp/v2/sales?per_page=100\')\n    const { data: home } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/pages?slug=home\')\n    const { data: property_options } = await axios.get(baseURL + \'/wp-json/acf/v3/options/property_options\')\n    const metaDescription = property_options.acf.meta_description\n    const siteRoot = \'https://halycon.netlify.com/\'\n    const title = \'Halcyon\'\n\n    // Checks json header to see if there\'s more than one page, then pulls more data if there is. Wordpress has 100 limit via url\n    const { headers: eventHeaders } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100\')\n    const { headers: storeHeaders } = await axios.get(baseURL + \'/wp-json/wp/v2/stores?per_page=100\')\n    const { headers: pageHeaders } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/pages?per_page=100\')\n    const { headers: postHeaders } = await axios.get(baseURL + \'/index.php/wp-json/wp/v2/posts?per_page=100\')\n    const { headers: saleHeaders } = await axios.get(baseURL + \'/wp-json/wp/v2/sales?per_page=100\')\n\n    // checks page count, loops json pull per that page count, and pushes it to the arrays above ^\n    let count = eventHeaders[\'x-wp-totalpages\']\n    let x = 2;\n    while (x <= count) {\n      var { data: moreEvents } = await axios.get(baseURL + \'/wp-json/wp/v2/events?per_page=100&page=\' + x)\n      if (moreEvents) {\n        for (var i = 0; i < moreEvents.length; i++) {\n          events.push(moreEvents[i])\n        }\n      }\n      x++\n    }\n    let counter = storeHeaders[\'x-wp-totalpages\']\n    let xy = 2;\n    while (xy <= counter) {\n      var { data: moreStores } = await axios.get(baseURL + \'/wp-json/wp/v2/stores?per_page=100&page=\' + xy)\n      if (moreStores) {\n        for (var i = 0; i < moreStores.length; i++) {\n          stores.push(moreStores[i])\n        }\n      }\n      xy++\n    }\n    let counter2 = pageHeaders[\'x-wp-totalpages\']\n    let xyz = 2;\n    while (xyz <= counter2) {\n      var { data: morePages } = await axios.get(baseURL + \'/wp-json/wp/v2/pages?per_page=100&page=\' + xyz)\n      if (morePages) {\n        for (var i = 0; i < morePages.length; i++) {\n          pages.push(morePages[i])\n        }\n      }\n      xyz++\n    }\n    let counter3 = postHeaders[\'x-wp-totalpages\']\n    let xyzq = 2;\n    while (xyzq <= counter3) {\n      var { data: morePosts } = await axios.get(baseURL + \'/wp-json/wp/v2/posts?per_page=100&page=\' + xyzq)\n      if (morePosts) {\n        for (var i = 0; i < morePosts.length; i++) {\n          posts.push(morePosts[i])\n        }\n      }\n      xyzq++\n    }\n    let counter4 = saleHeaders[\'x-wp-totalpages\']\n    let xyzqx = 2;\n    while (xyzqx <= counter4) {\n      var { data: moreSales } = await axios.get(baseURL + \'/wp-json/wp/v2/sales?per_page=100&page=\' + xyzqx)\n      if (moreSales) {\n        for (var i = 0; i < moreSales.length; i++) {\n          sales.push(moreSales[i])\n        }\n      }\n      xyzqx++\n    }\n\n    // Divides stores data into two separate variables (retailers/restaurant) so that the routes are separated and not duplicated\n    // e.g. /shopping/test-route or /dining/taco-bell instead of having /shopping/taco-bell generated\n    retailers = stores.map(store => {\n      if (store.acf.store_type == "retailer") {\n        return store\n      }\n    })\n    // Remove nulls\n    retailers = retailers.filter(function (el) {\n      return el != null;\n    });\n    restaurants = stores.map(store => {\n      if (store.acf.store_type == "restaurant") {\n        return store\n      }\n    })\n    // Remove nulls\n    restaurants = restaurants.filter(function (el) {\n      return el != null;\n    });\n\n    // Generate routes based off of JSON data above and pass json to specified route component\n    return [\n      {\n        path: \'/\',\n        component: \'src/pages/Home\',\n        getData: () => ({\n          stores, events, pages, home, property_options, title\n        }),\n        children: pages.map(page => ({\n          path: "/' + page.slug + '",\n          component: \'src/singles/Page\',\n          getData: () => ({\n            page, siteRoot, title, metaDescription,\n          }),\n        })),\n      },\n      {\n        path: \'/blogs\',\n        component: \'src/pages/Blogs\',\n        getData: () => ({\n          posts, siteRoot, title, metaDescription, pages\n        }),\n        children: posts.map(post => ({\n          path: "/' + post.slug + '"",\n          component: \'src/singles/Post\',\n          getData: () => ({\n            post, siteRoot, title, metaDescription\n          }),\n        })),\n      },\n      {\n        path: \'/events\',\n        component: \'src/pages/Events\',\n        getData: () => ({\n          events, siteRoot, title, metaDescription, pages\n        }),\n        children: events.map(event => ({\n          path: "/' + event.slug + '",\n          component: \'src/singles/Event\',\n          getData: () => ({\n            event, siteRoot, title, metaDescription\n          }),\n        })),\n      },\n      {\n        path: \'/sales\',\n        component: \'src/pages/Sales\',\n        children: sales.map(sale => ({\n          path: "/' + sale.slug + '",\n          component: \'src/singles/Sale\',\n          getData: () => ({\n            sale, siteRoot, title, metaDescription\n          }),\n        })),\n      },\n      {\n        path: \'/shopping\',\n        component: \'src/pages/Stores\',\n      },\n      {\n        path: \'/dining\',\n        component: \'src/pages/Dining\',\n      },\n      {\n        path: \'/stores\',\n        component: \'src/pages/Stores\',\n        children: stores.map(retailer => ({\n          path: "/' + retailer.slug + '",\n          component: \'src/singles/Retailer\',\n          getData: () => ({\n            retailer, siteRoot, title, metaDescription, property_options, sales\n          }),\n        })),\n      },\n      {\n        path: \'/admin\',\n        component: \'src/pages/Redirect\',\n      },\n      {\n        path: \'/wp-admin\',\n        component: \'src/pages/Redirect\',\n      },\n      {\n        is404: true,\n        component: \'src/pages/404\',\n      },\n    ]\n  },\n}\n    ',
          setOptions: {
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true
            // tabSize: 2,
          } })
      ),
      _react2.default.createElement(
        'div',
        { 'class': 'project-step' },
        _react2.default.createElement('div', { 'class': 'container' })
      ),
      _react2.default.createElement(
        'div',
        { 'class': 'project-links' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/', 'class': 'project-link project-link--first' },
          _react2.default.createElement(
            'span',
            { 'class': 'project-link__text' },
            'Return Home'
          )
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/expect3', 'class': 'project-link project-link--last' },
          _react2.default.createElement(
            'span',
            { 'class': 'project-link__text' },
            'Next Project'
          )
        )
      )
    )
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _reactHelmet.Helmet,
            null,
            _react2.default.createElement('body', { className: 'scholastic' })
        ),
        _react2.default.createElement(
            'section',
            null,
            _react2.default.createElement(
                'div',
                { 'class': 'container' },
                _react2.default.createElement(
                    'div',
                    { 'class': 'project-hero' },
                    _react2.default.createElement(
                        'header',
                        { 'class': 'hero-header' },
                        _react2.default.createElement(
                            'h1',
                            { 'class': 'project-label' },
                            'Scholastic Batch Assignment Application'
                        ),
                        _react2.default.createElement(
                            'a',
                            {
                                href: 'https://github.com/PatrickHarden/batchAssignment',
                                'class': 'btn project-title mRight',
                                target: '_blank'
                            },
                            'View Source'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'https://github.com/PatrickHarden/batchAssignment/blob/main/ba-client/src/components/pure/Stepper/Steps/TeacherSteps/Step3/SelectDateTime.tsx', 'class': 'btn project-title', target: '_blank' },
                            'View Example'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { 'class': 'lede-content' },
                    _react2.default.createElement(
                        'p',
                        { 'class': 'step-body nTop' },
                        'This batch assignment application was meticulously built with nearly 100% code coverage, ada accessibility, snek compatibility, and sonarQube. Above is an example component for reference.'
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { 'class': 'project-step' },
                _react2.default.createElement('div', { 'class': 'container' })
            ),
            _react2.default.createElement(
                'div',
                { 'class': 'project-links' },
                _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/', 'class': 'project-link project-link--first' },
                    _react2.default.createElement(
                        'span',
                        { 'class': 'project-link__text' },
                        'Return Home'
                    )
                ),
                _react2.default.createElement(
                    _reactStatic.Link,
                    { to: '/React-Static-Wordpress-v2', 'class': 'project-link project-link--last' },
                    _react2.default.createElement(
                        'span',
                        { 'class': 'project-link__text' },
                        'Next Project'
                    )
                )
            )
        )
    );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
   return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
         _reactHelmet.Helmet,
         null,
         _react2.default.createElement('body', { className: 'awb' })
      ),
      _react2.default.createElement(
         'section',
         null,
         _react2.default.createElement(
            'div',
            { 'class': 'container' },
            _react2.default.createElement(
               'div',
               { 'class': 'project-hero' },
               _react2.default.createElement(
                  'header',
                  { 'class': 'hero-header' },
                  _react2.default.createElement(
                     'h1',
                     { 'class': 'project-label' },
                     'React-static website generator'
                  ),
                  _react2.default.createElement(
                     'a',
                     { href: 'https://github.com/PatrickHarden/React-Static-Website-Builder', 'class': 'btn project-title', target: '_blank' },
                     'View source'
                  )
               )
            ),
            _react2.default.createElement(
               'div',
               { 'class': 'lede-content' },
               _react2.default.createElement(
                  'p',
                  { 'class': 'step-body nTop' },
                  '"Attorney web builder" was a project which was in development prior to me joining the company. After discovering how adeptly react-static could handle JSON data, we decided to refactor "AWB" to generate react-static sites instead - and we were successfully able to pull it off. Instead of pulling JSON data from a wordpress site, JSON is pulled instead from a Laravel/Spark application. '
               ),
               _react2.default.createElement(
                  'p',
                  { 'class': 'step-body mTop' },
                  'I lent hand in aiding with the development of the controller responsible for communicating with ',
                  _react2.default.createElement(
                     'a',
                     { href: 'https://www.netlify.com/Netlify', target: '_blank' },
                     'Netlify'
                  ),
                  ' seen here:'
               )
            ),
            _react2.default.createElement(
               'div',
               { 'class': 'inline-image' },
               _react2.default.createElement('img', { src: 'images/awbcode2.png' })
            )
         ),
         _react2.default.createElement(
            'div',
            { 'class': 'container' },
            _react2.default.createElement(
               'div',
               { 'class': 'lede-content' },
               _react2.default.createElement(
                  'p',
                  { 'class': 'step-body sTop' },
                  'The Laravel application generates JSON data unique to each user ID. That user ID is then sent to ',
                  _react2.default.createElement(
                     'a',
                     { href: 'https://www.netlify.com/Netlify', target: '_blank' },
                     'Netlify'
                  ),
                  ' in a build command so that react-static will pull in JSON from that target url + userID. '
               ),
               _react2.default.createElement(
                  'p',
                  { 'class': 'step-body sTop ssTop' },
                  'Prior to building the website though, the user will enter in a lot of client information and select a template, which ultimately is converted and broadcasted as JSON. '
               )
            )
         ),
         _react2.default.createElement(
            'div',
            { 'class': 'project-links' },
            _react2.default.createElement(
               _reactStatic.Link,
               { to: '/', 'class': 'project-link project-link--first' },
               _react2.default.createElement(
                  'span',
                  { 'class': 'project-link__text' },
                  'Return Home'
               )
            ),
            _react2.default.createElement(
               _reactStatic.Link,
               { to: '/lms', 'class': 'project-link project-link--last' },
               _react2.default.createElement(
                  'span',
                  { 'class': 'project-link__text' },
                  'Next Project'
               )
            )
         )
      )
   );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { xs: '12' },
          _react2.default.createElement(
            'h1',
            null,
            'Under Construction'
          )
        )
      )
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHelmet = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//


exports.default = function () {
  return _react2.default.createElement(
    'article',
    { id: 'home' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement('body', { className: 'home' })
    ),
    _react2.default.createElement(
      'section',
      { className: 'hero' },
      _react2.default.createElement(
        'div',
        { className: 'containerr' },
        _react2.default.createElement(
          'h1',
          { className: 'hero__title' },
          'I\u2019m Patrick Harden, a ',
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/work', className: 'hero__Link hero__link--second' },
            'designer'
          ),
          ' and ',
          _react2.default.createElement(
            'a',
            { className: 'hero__link', target: '_blank', href: 'https://github.com/PatrickHarden' },
            'web developer'
          ),
          ' living in Dallas, currently working as a contractor.'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'containerr containerr--wrap' },
        _react2.default.createElement(
          'div',
          { className: 'hero__employer hero__employer--steelseries' },
          _react2.default.createElement(
            'h3',
            { className: 'employer__label' },
            'Previously:'
          ),
          _react2.default.createElement('img', { id: 'am', src: 'images/cbre3.png' }),
          _react2.default.createElement('img', { id: 'ex3', src: 'images/scholastic.png' }),
          _react2.default.createElement('img', { id: 'imag', src: 'images/imaglogo.png' }),
          _react2.default.createElement('img', { id: 'seed', src: 'images/SeedLogo.svg' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'hero-background' },
        _react2.default.createElement('div', { className: 'rect' }),
        _react2.default.createElement('div', { className: 'rect2' }),
        _react2.default.createElement('div', { className: 'rect3' }),
        _react2.default.createElement('div', { className: 'rect4' })
      )
    ),
    _react2.default.createElement(
      'section',
      { id: 'work', className: 'work' },
      _react2.default.createElement(
        'div',
        { className: 'containerr' },
        _react2.default.createElement(
          'h2',
          { className: 'secondary-header' },
          'Featured Work'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'featured-work-containerr' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/scholastic', className: 'work-link work-link--50' },
          _react2.default.createElement(
            'div',
            { className: 'work-link-wrapper' },
            _react2.default.createElement('img', { className: 'work-link-image', style: { minHeight: '273px' }, src: 'images/scholast2.png' }),
            _react2.default.createElement(
              'div',
              { className: 'work-link-content' },
              _react2.default.createElement(
                'h3',
                { className: 'link-content__header' },
                'Scholastic Batch Assignment Application'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/React-Static-Wordpress-v2', className: 'work-link work-link--50' },
          _react2.default.createElement(
            'div',
            { className: 'work-link-wrapper' },
            _react2.default.createElement('img', { className: 'work-link-image', src: 'images/halcyon.png' }),
            _react2.default.createElement(
              'div',
              { className: 'work-link-content' },
              _react2.default.createElement(
                'h3',
                { className: 'link-content__header' },
                'React-static Wordpress Framework v2'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/expect3', className: 'work-link work-link--50' },
          _react2.default.createElement(
            'div',
            { className: 'work-link-wrapper' },
            _react2.default.createElement('img', { className: 'work-link-image', src: 'images/ex3screen.png' }),
            _react2.default.createElement(
              'div',
              { className: 'work-link-content' },
              _react2.default.createElement(
                'h3',
                { className: 'link-content__header' },
                'Expect3'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/React-Static-Wordpress', className: 'work-link work-link--50' },
          _react2.default.createElement(
            'div',
            { className: 'work-link-wrapper' },
            _react2.default.createElement('img', { className: 'work-link-image', src: 'images/wordpressscreen.png' }),
            _react2.default.createElement(
              'div',
              { className: 'work-link-content' },
              _react2.default.createElement(
                'h3',
                { className: 'link-content__header' },
                'React-static Wordpress Framework'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/React-Static-Website-Generator', className: 'work-link work-link--50' },
          _react2.default.createElement(
            'div',
            { className: 'work-link-wrapper' },
            _react2.default.createElement('img', { className: 'work-link-image', src: 'images/awbscreen2.png' }),
            _react2.default.createElement(
              'div',
              { className: 'work-link-content' },
              _react2.default.createElement(
                'h3',
                { className: 'link-content__header' },
                'React-static Website Generator'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/lms', className: 'work-link work-link--50' },
          _react2.default.createElement(
            'div',
            { className: 'work-link-wrapper' },
            _react2.default.createElement('img', { className: 'work-link-image', src: 'images/lmsscreen.png' }),
            _react2.default.createElement(
              'div',
              { className: 'work-link-content' },
              _react2.default.createElement(
                'h3',
                { className: 'link-content__header' },
                'Lawyer Marketing Services'
              )
            )
          )
        )
      )
    )
  );
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactstrap.Container,
      null,
      _react2.default.createElement(
        _reactstrap.Row,
        null,
        _react2.default.createElement(
          _reactstrap.Col,
          { xs: '12' },
          _react2.default.createElement(
            'h1',
            null,
            '404 - Oh no\'s! We couldn\'t find that page :('
          )
        )
      )
    )
  );
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(24);

__webpack_require__(25);

__webpack_require__(26);

var _App = __webpack_require__(27);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  window.addEventListener('load', function () {
    var ga = window.ga;
    ga('create', 'UA-122841310-1', 'auto');

    ga('require', 'outboundLinkTracker');
    ga('require', 'urlChangeTracker');

    ga('send', 'pageview');
  });
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/css/bootstrap.min.css");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600);", ""]);

// module
exports.push([module.i, "a,body,div,footer,form,h1,h2,h3,h4,h5,h6,header,hr,html,img,input,label,li,main,nav,ol,p,section,span,svg,ul{margin:0;padding:0;border:none;font-size:100%;font:inherit;vertical-align:baseline}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}img{max-width:100%}svg:not(:root){overflow:hidden}input{border-radius:0}::-webkit-input-placeholder{opacity:1}:-ms-input-placeholder,::-ms-input-placeholder{opacity:1}::placeholder{opacity:1}a{background-color:transparent;text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent;outline:none}html{font-size:10px}body{font-family:Work Sans,Helvetica,Arial,sans-serif;font-weight:400;font-size:1.6rem;line-height:1.8;color:#5d5d5d;-webkit-font-smoothing:antialiased}.containerr{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;width:90%;max-width:1400px;margin-right:auto;margin-left:auto}.containerr.containerr--vertically-center{-ms-flex-align:center;align-items:center}.containerr.containerr--wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.column{margin:10px;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0}section:nth-of-type(5) .column:first-of-type{-ms-flex-positive:2;flex-grow:2;-ms-flex-negative:2;flex-shrink:2;-ms-flex-preferred-size:22px;flex-basis:22px}section:nth-of-type(6) .column:nth-of-type(2){-ms-flex-positive:4;flex-grow:4;-ms-flex-negative:4;flex-shrink:4;-ms-flex-preferred-size:66px;flex-basis:66px}.footer{padding:4em 0 6em}@media screen and (min-width:768px){.footer{padding:6em 0}}.footer .secondary-header{-ms-flex:1 1 100%;flex:1 1 100%;display:inline-block}@media screen and (min-width:768px){.footer .secondary-header{-ms-flex:0 0 auto;flex:0 0 auto}}.footer .hero__link{display:block;padding:15px 0;font-size:3rem;font-weight:300}@media screen and (min-width:768px){.footer .hero__link{display:inline-block;padding:0 0 0 15px;font-size:3.8rem}}.social-list{margin:0;padding:0;font-size:1.6rem}.social-list__item{display:block;margin:0 0 10px;list-style:none}@media screen and (min-width:768px){.social-list__item{display:inline-block;margin:0 30px 0 0}}.social-list__item-link{-webkit-transition:color .25s ease;-o-transition:color .25s ease;transition:color .25s ease}.social-list__item-link:active,.social-list__item-link:focus,.social-list__item-link:hover{color:#2fe0c5}.project{padding-bottom:8em}.project-hero{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center;background-position:50%;background-size:cover;background-repeat:no-repeat;width:100%;margin-bottom:3em}@media screen and (min-width:768px){.project-hero{min-height:340px}}@media screen and (min-width:1600px){.project-hero{margin-bottom:0}}.hero-header{margin:auto 5% auto 0;max-width:640px}.project-label{margin-bottom:1em;letter-spacing:3px;text-transform:uppercase;font-size:1.8rem;font-weight:300}.project-title{letter-spacing:-1.5px;line-height:1.7;font-size:2.8rem;font-weight:400}@media screen and (min-width:768px){.project-title{font-size:3.8rem}}.project-intro{padding:3em 0 2em;background:#fff}@media screen and (min-width:768px){.project-intro{padding:7em 0 4em}}.lede-content{margin:auto;max-width:640px;font-size:2.8rem;letter-spacing:-.5px}.lede-content.lede-content--wide{max-width:740px}.lede{line-height:1.7;font-size:1.8rem}@media screen and (min-width:768px){.lede{font-size:2.2rem}}.lede a{color:#3cdab4}.lede-list{margin:0;padding:15px 20px;font-size:1.8rem}@media screen and (min-width:768px){.lede-list{padding:30px 40px;font-size:2.2rem}}.cp_embed_wrapper{display:block;margin-bottom:3em}.lede-list__item{margin-bottom:1em;line-height:1.6}.project-links{margin-top:3em;display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center}@media screen and (min-width:768px){.project-links{margin-top:7em}}.project-link{display:-ms-flexbox;display:flex;-ms-flex:1 1 50%;flex:1 1 50%;height:200px;color:#fff;letter-spacing:0;font-size:2rem;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}@media screen and (min-width:768px){.project-link{height:400px;font-size:2.8rem}}.project-link.project-link--first{padding-left:5%;-ms-flex-pack:start;justify-content:flex-start;background:#3cdab4}@media screen and (min-width:1600px){.project-link.project-link--first{padding-left:0;-ms-flex-pack:center;justify-content:center}}.project-link.project-link--first:hover{background:#dabeca}.project-link.project-link--last{background:#2fe0c5;padding-right:5%;-ms-flex-pack:end;justify-content:flex-end}@media screen and (min-width:1600px){.project-link.project-link--last{padding-right:0;-ms-flex-pack:center;justify-content:center}}.project-link.project-link--last:hover{background:#dabeca}.project-link__text{margin-top:auto;margin-bottom:auto}.project-step{padding:2em 0 0;background:#fff;text-align:center}@media screen and (min-width:768px){.project-step{padding:4em 0 0}}.project-button{display:block;margin-top:2em;color:#3cdab4;-webkit-transition:color .15s ease-in-out;-o-transition:color .15s ease-in-out;transition:color .15s ease-in-out}.project-button:hover{color:#5d5d5d}.step-content{padding:2em 0 1em;text-align:left;max-width:740px;margin:auto}@media screen and (min-width:768px){.step-content{padding:8em 0 4em}}.step-body{margin-bottom:.5em;letter-spacing:-.5px;font-size:1.6rem}@media screen and (min-width:768px){.step-body{font-size:2.2rem}}.step-body a{color:#3cdab4}.hero .containerr{position:relative;z-index:10}.hero__title{position:relative;max-width:840px;margin-top:.5em;margin-bottom:1.5em;letter-spacing:-1px;line-height:1.7;font-size:3rem;font-weight:400}@media screen and (min-width:768px){.hero__title{margin-top:1.25em;margin-bottom:2.5em;line-height:68px;font-size:3.8rem}}.hero__link{color:#2fe0c5;-webkit-transition:color .25s ease;-o-transition:color .25s ease;transition:color .25s ease}.hero__link:active,.hero__link:focus,.hero__link:hover{color:#5d5d5d}.hero__link--second{color:#29c6b2;-webkit-transition:color .25s ease;-o-transition:color .25s ease;transition:color .25s ease}.hero__link--second:active,.hero__link--second:focus,.hero__link--second:hover{color:#5d5d5d}.hero__employer{margin-bottom:2em}@media screen and (min-width:768px){.hero__employer{-ms-flex:1 1 0px;flex:1 1;margin-bottom:0}}.hero__employer a{display:inline-block}.hero__employer svg{height:auto;width:200px;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.hero__employer svg:hover{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);opacity:.9}.ss-logo{fill:#5d5d5d}.palantir-logo{margin-top:1rem}@media screen and (min-width:768px){.palantir-logo{margin-top:0;margin-left:1rem}}.employer__label{margin-bottom:1em;letter-spacing:2px;text-transform:uppercase;font-size:1.5rem;font-weight:400}.nav{position:relative;padding:2em 0 .5em;-ms-flex-align:center;align-items:center;z-index:10}.nav__brand{-ms-flex:1 1 0px;flex:1 1;-ms-flex-item-align:start;align-self:flex-start}.nav__brand a{display:inline-block}.nav__brand svg{height:auto;width:114px;overflow:visible;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.nav__brand svg:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);opacity:.9}.hero__employer--steelseries svg{fill:#5d5d5d}.nav__list{-ms-flex:1 1 0px;flex:1 1;margin:0;padding:0;text-align:right}@media screen and (min-width:768px){.nav__list{margin:-20px 0 0}}.nav__list-item{display:inline-block;padding:0 40px;letter-spacing:.5px;font-size:1.8rem;-webkit-transition:color .25s ease;-o-transition:color .25s ease;transition:color .25s ease}.nav__list-item:active,.nav__list-item:focus,.nav__list-item:hover{color:#2fe0c5}.logo-circle,.logo-letter,.logo-shadow,.logo-triangle{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;will-change:transform}.logo-circle{-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-animation-name:bubble;animation-name:bubble;-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-timing-function:cubic-bezier(.64,.57,.67,1.53);animation-timing-function:cubic-bezier(.64,.57,.67,1.53)}.logo-triangle{-webkit-transform:translate(16px,-40px);-ms-transform:translate(16px,-40px);transform:translate(16px,-40px);-webkit-transform-origin:right;-ms-transform-origin:right;transform-origin:right;opacity:0;-webkit-animation-name:pointReveal;animation-name:pointReveal;-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-delay:.4s;animation-delay:.4s;-webkit-animation-timing-function:cubic-bezier(.64,.57,.67,1.53);animation-timing-function:cubic-bezier(.64,.57,.67,1.53)}.logo-letter{opacity:0;fill:#fff;-webkit-animation-name:colorReveal;animation-name:colorReveal;-webkit-animation-duration:.45s;animation-duration:.45s;-webkit-animation-delay:.8s;animation-delay:.8s}.logo-shadow{-webkit-transform-origin:10% 10%;-ms-transform-origin:10% 10%;transform-origin:10% 10%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:0;fill:#60d5b9;-webkit-animation-name:shadowReveal;animation-name:shadowReveal;-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.7s;animation-delay:.7s;-webkit-animation-timing-function:cubic-bezier(.77,0,.175,1);animation-timing-function:cubic-bezier(.77,0,.175,1)}@-webkit-keyframes colorReveal{0%{-webkit-transform:translateY(45px);transform:translateY(45px);opacity:1;fill:#60d5b9}20%{opacity:1}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1;fill:#fff}}@keyframes colorReveal{0%{-webkit-transform:translateY(45px);transform:translateY(45px);opacity:1;fill:#60d5b9}20%{opacity:1}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1;fill:#fff}}@-webkit-keyframes pointReveal{0%{-webkit-transform:translate(16px,-40px);transform:translate(16px,-40px);opacity:0}20%{opacity:1}to{-webkit-transform:translate(0);transform:translate(0);opacity:1}}@keyframes pointReveal{0%{-webkit-transform:translate(16px,-40px);transform:translate(16px,-40px);opacity:0}20%{opacity:1}to{-webkit-transform:translate(0);transform:translate(0);opacity:1}}@-webkit-keyframes shadowReveal{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0;fill:#71f1d6}to{-webkit-transform:scale(1);transform:scale(1);opacity:1;fill:#60d5b9}}@keyframes shadowReveal{0%{-webkit-transform:scale(0);transform:scale(0);opacity:0;fill:#71f1d6}to{-webkit-transform:scale(1);transform:scale(1);opacity:1;fill:#60d5b9}}@-webkit-keyframes bubble{0%{-webkit-transform:scale(.5);transform:scale(.5)}65%{-webkit-transform:scale(1.15);transform:scale(1.15)}70%{-webkit-transform:scale(1.1);transform:scale(1.1)}80%{-webkit-transform:scale(1);transform:scale(1)}85%{-webkit-transform:scale(1.05);transform:scale(1.05)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bubble{0%{-webkit-transform:scale(.5);transform:scale(.5)}65%{-webkit-transform:scale(1.15);transform:scale(1.15)}70%{-webkit-transform:scale(1.1);transform:scale(1.1)}80%{-webkit-transform:scale(1);transform:scale(1)}85%{-webkit-transform:scale(1.05);transform:scale(1.05)}90%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1);transform:scale(1)}}.featured-work-containerr{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex:1 1 100%;flex:1 1 100%;padding-bottom:4em}@media screen and (min-width:768px){.featured-work-containerr{padding-bottom:8em;padding-left:15px;padding-right:15px}}.work-link{display:inline-block;padding:15px;-ms-flex:0 0 100%;flex:0 0 100%}.work-link.work-link--50{-ms-flex:1 1 100%;flex:1 1 100%}@media screen and (min-width:768px){.work-link.work-link--50{-ms-flex:0 0 50%;flex:0 0 50%}}.work-link-wrapper{-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);background:transparent;-webkit-box-shadow:0 0 0 rgba(93,93,93,0);box-shadow:0 0 0 rgba(93,93,93,0)}.work-link-wrapper:hover{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 8px 14px rgba(93,93,93,.1);box-shadow:0 8px 14px rgba(93,93,93,.1)}.work-link-image{display:block;width:100%;height:auto}.work-link-content{position:relative;z-index:10;border-radius:4px;width:100%;background:#fff;padding:25px}.link-content__header{text-align:center;margin-bottom:0;color:#5d5d5d;letter-spacing:0;line-height:1.2;font-size:1.8rem;font-weight:400;-webkit-transition:color .3s ease;-o-transition:color .3s ease;transition:color .3s ease}@media screen and (min-width:768px){.link-content__header{font-size:2.4rem}}.work{margin-top:2em;padding:4em 0;background:#fbfbfb}@media screen and (min-width:768px){.work{margin-top:4em;padding:8em 0}}.secondary-header{display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;margin-bottom:.5em;letter-spacing:-1px;font-size:3rem;font-weight:400}@media screen and (min-width:768px){.secondary-header{font-size:3.8rem}}.secondary-header.header--white{color:#fff}.work__list{width:100%;margin:0;padding:0 5px}.work__list-item{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);display:block;padding:18px 5% 20px;border-bottom:1px solid #dadada;-webkit-box-shadow:0 0 0 rgba(93,93,93,.16);box-shadow:0 0 0 rgba(93,93,93,.16);background:-webkit-gradient(linear,left top,left bottom,from(#fbfbfb),to(#fbfbfb));background:-webkit-linear-gradient(#fbfbfb,#fbfbfb);background:-o-linear-gradient(#fbfbfb,#fbfbfb);background:linear-gradient(#fbfbfb,#fbfbfb);-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;list-style:none}.work__list-item .work__list-item--first{border-top:1px solid #dadada}.work__list-item:active,.work__list-item:focus,.work__list-item:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);border-color:transparent;-webkit-box-shadow:0 1px 6px rgba(93,93,93,.16);box-shadow:0 1px 6px rgba(93,93,93,.16);background:-webkit-gradient(linear,left top,right top,from(#2fe0c5),color-stop(#3bdcc4),to(#2fe0c5));background:-webkit-linear-gradient(left,#2fe0c5,#3bdcc4,#2fe0c5);background:-o-linear-gradient(left,#2fe0c5,#3bdcc4,#2fe0c5);background:linear-gradient(90deg,#2fe0c5,#3bdcc4,#2fe0c5);color:#fff}.work__list-item:active .work-detail,.work__list-item:active .work-title,.work__list-item:focus .work-detail,.work__list-item:focus .work-title,.work__list-item:hover .work-detail,.work__list-item:hover .work-title{color:#fff}.work__list-item-link{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:1400px;margin-right:auto;margin-left:auto}.work-title{-ms-flex:3 1 100%;flex:3 1 100%;margin-bottom:0;color:#3cdab4;letter-spacing:0;line-height:1.2;font-size:2.6rem}.work-detail,.work-title{font-weight:400;-webkit-transition:color .3s ease;-o-transition:color .3s ease;transition:color .3s ease}.work-detail{color:#666;font-size:1.6rem}.work-role{-ms-flex:3 1 100%;flex:3 1 100%}@media screen and (min-width:768px){.work-role{-ms-flex:1 1 60%;flex:1 1 60%}}.work-company{-ms-flex:1 1 100%;flex:1 1 100%}@media screen and (min-width:768px){.work-company{-ms-flex:1 1 20%;flex:1 1 20%}}.work-date{-ms-flex:1 1 100%;flex:1 1 100%}@media screen and (min-width:768px){.work-date{-ms-flex:1 1 20%;flex:1 1 20%;-ms-flex-item-align:end;align-self:flex-end;text-align:right}}.navbar .row{width:100%}.navbar-dark .navbar-nav .dropdown-menu{background:#5d5d5d}.navbar-dark .dropdown-item:focus,.navbar-dark .dropdown-item:hover{background-color:#5d5d5d;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.navbar-expand-lg .navbar-nav .nav-link{padding:33px 1.5rem!important;color:#5d5d5d!important;font-weight:400!important;text-transform:uppercase;font-size:.8rem;letter-spacing:1px;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;font-family:Lato}#site .navbar-dark .navbar-nav .nav-link,#site .navbar-dark .navbar-nav .nav-link:active{color:#5d5d5d}.navbar-dark .navbar-nav .nav-link:active,.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:#29c6b2!important;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.navbar-brand img{height:60px;position:relative;top:11px}.navbar-dark .navbar-toggler{border:none;padding:0}.navbar-dark .navbar-brand{margin-top:3px;font-size:17px;color:#5d5d5d}#site .navbar-dark .navbar-nav .nav-link{margin-left:15px}.content{margin-top:120px}.hero__employer img{display:inline-block;max-width:280px;-webkit-filter:grayscale(100%);filter:grayscale(100%);margin-right:60px}#am{max-width:200px;position:relative;top:-6px}.ace_gutter-cell.ace_error{background-image:none!important}#ex3{margin-bottom:15px}#imag{-webkit-filter:invert(70%);filter:invert(70%);position:relative;top:-7px}.hero__employer #seed{max-width:140px}a:hover{text-decoration:none;color:#5d5d5d}#contact{font-size:3.8rem}#contact .btn,#contact input,#contact textarea{font-size:2.1rem}#contact .btn{background-color:#29c6b2;border-color:transparent}.row{min-width:100%}.fixed-top{min-height:80px}.navbar-dark .navbar-brand:hover{color:#333}.work-link-image{width:80%;margin:0 auto}.work-link-wrapper{background:#29c6b2;padding-top:60px;border-radius:10px}#contact h1,.hero .containerr{margin-top:30px}#contact h1{margin-bottom:30px}#home .work{padding-bottom:4rem}.work-link-content{border-top-left-radius:0;border-top-right-radius:0}#contact form>.row{margin-bottom:15px}.hero-header>.step-content{padding:0}.mRight{margin-right:45px}#contact input{padding-top:1rem;padding-bottom:1rem}.btn.project-title{background:#5d5d5d;color:#fff;font-size:2.6rem;border-radius:6%;padding:.275rem 1.35rem;font-weight:300;letter-spacing:1px}.btn.project-title:hover{background:#2fe0c5;color:#5d5d5d}.work-link-wrapper:hover{background:#2fe0c5}.project-hero{-ms-flex-pack:left;justify-content:left}.lede-content{margin:-30px 0 90px}.project-label{margin-bottom:1.5em;font-weight:600}.containerr>.project-hero{margin-top:-45px}.step-body.mTop{margin-top:45px;margin-bottom:-15px}.sTop{margin-top:90px}.ssTop{margin-bottom:-60px}.nTop{margin-top:-45px}#brace-editor{margin:0 auto}.navbar-expand-md .navbar-collapse{height:38px!important}#contact button>input{background:transparent;padding-left:2rem;padding-right:2rem}@media screen and (max-width:1368px){#home{margin-top:-30px}}@media screen and (max-width:768px){.navbar-expand-md .navbar-collapse{height:auto!important}#home{margin-top:0}}@media screen and (max-width:480px){.navbar-dark .navbar-toggler{margin-top:12px}.navbar-toggler-icon{-webkit-filter:invert(100%);filter:invert(100%)}.navbar-dark .navbar-brand{margin-top:18px}.navbar-toggler-icon:before{display:none}.navbar-collapse{padding:0}.navbar-expand-md .navbar-nav .nav-item .nav-link{padding:25px 0!important}.col-9 .navbar-collapse,.text-right.col-9{padding:0}.footer{padding:2em 0 0}#site .content{margin-top:95px}.awb .btn.project-title,.framework .btn.project-title{margin-bottom:60px;margin-top:-5px}.mRight{margin-bottom:15px}#contact .row>.col-12{margin-bottom:-420px}#lms{top:0;margin:15px 0}.hero-header>.project-label{margin-top:45px}.contact footer{margin-top:370px}.hero__employer img{margin-right:0}#seed{margin-bottom:-30px}}", ""]);

// exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:992px){.row{width:auto!important}.navRow{width:100vw!important}.navRow .col-9{width:100%!important;max-width:100%!important;-ms-flex:100% 1;flex:100% 1;padding:0}.navRow .col-3{position:fixed;z-index:999}.content{margin-top:95px}.navbar-brand img{max-width:235px}.navbar-collapse{width:auto;background:#fff;padding:0 15px}.navbar-expand-md .navbar-nav .nav-link{padding:15px 0!important;text-align:center}.navbar-dark .navbar-toggler{border:none;padding:0;margin-top:30px}.navbar-dark .navbar-nav .nav-link{color:#333}.navbar-toggler{margin:25px 0}.navbar-toggler-icon:before{font-family:Font Awesome\\ 5 Pro;content:\"\\F0C9\";font-size:2rem;color:#ccc;font-weight:300}.fixed-top{background:#fff}}@media screen and (max-width:767px){.nav-phone{display:block}}@media only screen and (max-width:480px){.content{margin-top:15px}.navbar-brand img{max-width:235px}.navbar-collapse{width:auto}.navbar-expand-md .navbar-nav .nav-link{padding:15px 0!important;text-align:right}.navbar-dark .navbar-toggler{border:none;padding:0;margin-top:28px}.parallax:before{-webkit-transform:skew(0deg,-15deg);-ms-transform:skew(0deg,-15deg);transform:skew(0deg,-15deg);right:0!important;left:0!important;top:40%}#home{top:-70px}#home .header .headerContent{top:75%}#home #about h2{font-size:2.1em;margin-top:0}#home .testimonial .testimonialContent{top:75%}#home .testimonial .testimonialContent h2{font-size:2rem;padding-bottom:15px}footer{font-size:.65rem;line-height:2em}}", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHotLoader = __webpack_require__(28);

var _reactStaticRoutes = __webpack_require__(29);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _Header = __webpack_require__(40);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(43);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      'div',
      { id: 'site' },
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        'main',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      ),
      _react2.default.createElement(_Footer2.default, null)
    )
  );
};

//
exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(30);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(31);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(32);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(33);

var _reactUniversalComponent = __webpack_require__(34);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Contact',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/pages/Contact', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Contact');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/pages/Contact';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Ex3',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/pages/Ex3', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Ex3');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/pages/Ex3';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Lms',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 11)), (0, _importCss3.default)('src/pages/Lms', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Lms');
  },
  resolve: function resolve() {
    return /*require.resolve*/(11);
  },
  chunkName: function chunkName() {
    return 'src/pages/Lms';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Framework',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/pages/Framework', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Framework');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/pages/Framework';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Framework2',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/pages/Framework2', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Framework2');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/pages/Framework2';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Scholastic',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/pages/Scholastic', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Scholastic');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/pages/Scholastic';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/AWB',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/pages/AWB', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/AWB');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/pages/AWB';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Work',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 20)), (0, _importCss3.default)('src/pages/Work', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Work');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return 'src/pages/Work';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/Home',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/pages/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/pages/Home';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/pages/404',
  file: '/Users/zentoo/Code/PatrickHarden.com/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/pages/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/pages/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/pages/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 9

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(35);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(36);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(37);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(7);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_React$Component) {
    _inherits(ContactForm, _React$Component);

    function ContactForm() {
        _classCallCheck(this, ContactForm);

        return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).apply(this, arguments));
    }

    _createClass(ContactForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactstrap.Form,
                { action: 'https://formspree.io/patch2908@gmail.com',
                    method: 'POST' },
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '6' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'text', name: 'firstName', id: 'contactFirstName', placeholder: 'First Name:' })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '6' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'text', name: 'lastName', id: 'contactLastName', placeholder: 'Last Name:' })
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '6' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'email', name: 'email', id: 'contactEmail', placeholder: 'Email:' })
                        )
                    ),
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '6' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'text', name: 'phone', id: 'contactPhone', placeholder: 'Phone:' })
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                        _reactstrap.Col,
                        { md: '12' },
                        _react2.default.createElement(
                            _reactstrap.FormGroup,
                            null,
                            _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'textarea', name: 'text', id: 'contactText', placeholder: 'Message' })
                        )
                    )
                ),
                _react2.default.createElement(
                    _reactstrap.Button,
                    null,
                    _react2.default.createElement('input', { type: 'submit', value: 'Send' })
                )
            );
        }
    }]);

    return ContactForm;
}(_react2.default.Component);

exports.default = ContactForm;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports.id = 'ace/mode/javascript_worker';
module.exports.src = "\"no use strict\";!function(window){function resolveModuleId(id,paths){for(var testPath=id,tail=\"\";testPath;){var alias=paths[testPath];if(\"string\"==typeof alias)return alias+tail;if(alias)return alias.location.replace(/\\/*$/,\"/\")+(tail||alias.main||alias.name);if(alias===!1)return\"\";var i=testPath.lastIndexOf(\"/\");if(-1===i)break;tail=testPath.substr(i)+tail,testPath=testPath.slice(0,i)}return id}if(!(void 0!==window.window&&window.document||window.acequire&&window.define)){window.console||(window.console=function(){var msgs=Array.prototype.slice.call(arguments,0);postMessage({type:\"log\",data:msgs})},window.console.error=window.console.warn=window.console.log=window.console.trace=window.console),window.window=window,window.ace=window,window.onerror=function(message,file,line,col,err){postMessage({type:\"error\",data:{message:message,data:err.data,file:file,line:line,col:col,stack:err.stack}})},window.normalizeModule=function(parentId,moduleName){if(-1!==moduleName.indexOf(\"!\")){var chunks=moduleName.split(\"!\");return window.normalizeModule(parentId,chunks[0])+\"!\"+window.normalizeModule(parentId,chunks[1])}if(\".\"==moduleName.charAt(0)){var base=parentId.split(\"/\").slice(0,-1).join(\"/\");for(moduleName=(base?base+\"/\":\"\")+moduleName;-1!==moduleName.indexOf(\".\")&&previous!=moduleName;){var previous=moduleName;moduleName=moduleName.replace(/^\\.\\//,\"\").replace(/\\/\\.\\//,\"/\").replace(/[^\\/]+\\/\\.\\.\\//,\"\")}}return moduleName},window.acequire=function acequire(parentId,id){if(id||(id=parentId,parentId=null),!id.charAt)throw Error(\"worker.js acequire() accepts only (parentId, id) as arguments\");id=window.normalizeModule(parentId,id);var module=window.acequire.modules[id];if(module)return module.initialized||(module.initialized=!0,module.exports=module.factory().exports),module.exports;if(!window.acequire.tlns)return console.log(\"unable to load \"+id);var path=resolveModuleId(id,window.acequire.tlns);return\".js\"!=path.slice(-3)&&(path+=\".js\"),window.acequire.id=id,window.acequire.modules[id]={},importScripts(path),window.acequire(parentId,id)},window.acequire.modules={},window.acequire.tlns={},window.define=function(id,deps,factory){if(2==arguments.length?(factory=deps,\"string\"!=typeof id&&(deps=id,id=window.acequire.id)):1==arguments.length&&(factory=id,deps=[],id=window.acequire.id),\"function\"!=typeof factory)return window.acequire.modules[id]={exports:factory,initialized:!0},void 0;deps.length||(deps=[\"require\",\"exports\",\"module\"]);var req=function(childId){return window.acequire(id,childId)};window.acequire.modules[id]={exports:{},factory:function(){var module=this,returnExports=factory.apply(this,deps.map(function(dep){switch(dep){case\"require\":return req;case\"exports\":return module.exports;case\"module\":return module;default:return req(dep)}}));return returnExports&&(module.exports=returnExports),module}}},window.define.amd={},acequire.tlns={},window.initBaseUrls=function(topLevelNamespaces){for(var i in topLevelNamespaces)acequire.tlns[i]=topLevelNamespaces[i]},window.initSender=function(){var EventEmitter=window.acequire(\"ace/lib/event_emitter\").EventEmitter,oop=window.acequire(\"ace/lib/oop\"),Sender=function(){};return function(){oop.implement(this,EventEmitter),this.callback=function(data,callbackId){postMessage({type:\"call\",id:callbackId,data:data})},this.emit=function(name,data){postMessage({type:\"event\",name:name,data:data})}}.call(Sender.prototype),new Sender};var main=window.main=null,sender=window.sender=null;window.onmessage=function(e){var msg=e.data;if(msg.event&&sender)sender._signal(msg.event,msg.data);else if(msg.command)if(main[msg.command])main[msg.command].apply(main,msg.args);else{if(!window[msg.command])throw Error(\"Unknown command:\"+msg.command);window[msg.command].apply(window,msg.args)}else if(msg.init){window.initBaseUrls(msg.tlns),acequire(\"ace/lib/es5-shim\"),sender=window.sender=window.initSender();var clazz=acequire(msg.module)[msg.classname];main=window.main=new clazz(sender)}}}}(this),ace.define(\"ace/lib/oop\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.inherits=function(ctor,superCtor){ctor.super_=superCtor,ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:!1,writable:!0,configurable:!0}})},exports.mixin=function(obj,mixin){for(var key in mixin)obj[key]=mixin[key];return obj},exports.implement=function(proto,mixin){exports.mixin(proto,mixin)}}),ace.define(\"ace/range\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},Range=function(startRow,startColumn,endRow,endColumn){this.start={row:startRow,column:startColumn},this.end={row:endRow,column:endColumn}};(function(){this.isEqual=function(range){return this.start.row===range.start.row&&this.end.row===range.end.row&&this.start.column===range.start.column&&this.end.column===range.end.column},this.toString=function(){return\"Range: [\"+this.start.row+\"/\"+this.start.column+\"] -> [\"+this.end.row+\"/\"+this.end.column+\"]\"},this.contains=function(row,column){return 0==this.compare(row,column)},this.compareRange=function(range){var cmp,end=range.end,start=range.start;return cmp=this.compare(end.row,end.column),1==cmp?(cmp=this.compare(start.row,start.column),1==cmp?2:0==cmp?1:0):-1==cmp?-2:(cmp=this.compare(start.row,start.column),-1==cmp?-1:1==cmp?42:0)},this.comparePoint=function(p){return this.compare(p.row,p.column)},this.containsRange=function(range){return 0==this.comparePoint(range.start)&&0==this.comparePoint(range.end)},this.intersects=function(range){var cmp=this.compareRange(range);return-1==cmp||0==cmp||1==cmp},this.isEnd=function(row,column){return this.end.row==row&&this.end.column==column},this.isStart=function(row,column){return this.start.row==row&&this.start.column==column},this.setStart=function(row,column){\"object\"==typeof row?(this.start.column=row.column,this.start.row=row.row):(this.start.row=row,this.start.column=column)},this.setEnd=function(row,column){\"object\"==typeof row?(this.end.column=row.column,this.end.row=row.row):(this.end.row=row,this.end.column=column)},this.inside=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)||this.isStart(row,column)?!1:!0:!1},this.insideStart=function(row,column){return 0==this.compare(row,column)?this.isEnd(row,column)?!1:!0:!1},this.insideEnd=function(row,column){return 0==this.compare(row,column)?this.isStart(row,column)?!1:!0:!1},this.compare=function(row,column){return this.isMultiLine()||row!==this.start.row?this.start.row>row?-1:row>this.end.row?1:this.start.row===row?column>=this.start.column?0:-1:this.end.row===row?this.end.column>=column?0:1:0:this.start.column>column?-1:column>this.end.column?1:0},this.compareStart=function(row,column){return this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.compareEnd=function(row,column){return this.end.row==row&&this.end.column==column?1:this.compare(row,column)},this.compareInside=function(row,column){return this.end.row==row&&this.end.column==column?1:this.start.row==row&&this.start.column==column?-1:this.compare(row,column)},this.clipRows=function(firstRow,lastRow){if(this.end.row>lastRow)var end={row:lastRow+1,column:0};else if(firstRow>this.end.row)var end={row:firstRow,column:0};if(this.start.row>lastRow)var start={row:lastRow+1,column:0};else if(firstRow>this.start.row)var start={row:firstRow,column:0};return Range.fromPoints(start||this.start,end||this.end)},this.extend=function(row,column){var cmp=this.compare(row,column);if(0==cmp)return this;if(-1==cmp)var start={row:row,column:column};else var end={row:row,column:column};return Range.fromPoints(start||this.start,end||this.end)},this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column},this.isMultiLine=function(){return this.start.row!==this.end.row},this.clone=function(){return Range.fromPoints(this.start,this.end)},this.collapseRows=function(){return 0==this.end.column?new Range(this.start.row,0,Math.max(this.start.row,this.end.row-1),0):new Range(this.start.row,0,this.end.row,0)},this.toScreenRange=function(session){var screenPosStart=session.documentToScreenPosition(this.start),screenPosEnd=session.documentToScreenPosition(this.end);return new Range(screenPosStart.row,screenPosStart.column,screenPosEnd.row,screenPosEnd.column)},this.moveBy=function(row,column){this.start.row+=row,this.start.column+=column,this.end.row+=row,this.end.column+=column}}).call(Range.prototype),Range.fromPoints=function(start,end){return new Range(start.row,start.column,end.row,end.column)},Range.comparePoints=comparePoints,Range.comparePoints=function(p1,p2){return p1.row-p2.row||p1.column-p2.column},exports.Range=Range}),ace.define(\"ace/apply_delta\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.applyDelta=function(docLines,delta){var row=delta.start.row,startColumn=delta.start.column,line=docLines[row]||\"\";switch(delta.action){case\"insert\":var lines=delta.lines;if(1===lines.length)docLines[row]=line.substring(0,startColumn)+delta.lines[0]+line.substring(startColumn);else{var args=[row,1].concat(delta.lines);docLines.splice.apply(docLines,args),docLines[row]=line.substring(0,startColumn)+docLines[row],docLines[row+delta.lines.length-1]+=line.substring(startColumn)}break;case\"remove\":var endColumn=delta.end.column,endRow=delta.end.row;row===endRow?docLines[row]=line.substring(0,startColumn)+line.substring(endColumn):docLines.splice(row,endRow-row+1,line.substring(0,startColumn)+docLines[endRow].substring(endColumn))}}}),ace.define(\"ace/lib/event_emitter\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";var EventEmitter={},stopPropagation=function(){this.propagationStopped=!0},preventDefault=function(){this.defaultPrevented=!0};EventEmitter._emit=EventEmitter._dispatchEvent=function(eventName,e){this._eventRegistry||(this._eventRegistry={}),this._defaultHandlers||(this._defaultHandlers={});var listeners=this._eventRegistry[eventName]||[],defaultHandler=this._defaultHandlers[eventName];if(listeners.length||defaultHandler){\"object\"==typeof e&&e||(e={}),e.type||(e.type=eventName),e.stopPropagation||(e.stopPropagation=stopPropagation),e.preventDefault||(e.preventDefault=preventDefault),listeners=listeners.slice();for(var i=0;listeners.length>i&&(listeners[i](e,this),!e.propagationStopped);i++);return defaultHandler&&!e.defaultPrevented?defaultHandler(e,this):void 0}},EventEmitter._signal=function(eventName,e){var listeners=(this._eventRegistry||{})[eventName];if(listeners){listeners=listeners.slice();for(var i=0;listeners.length>i;i++)listeners[i](e,this)}},EventEmitter.once=function(eventName,callback){var _self=this;callback&&this.addEventListener(eventName,function newCallback(){_self.removeEventListener(eventName,newCallback),callback.apply(null,arguments)})},EventEmitter.setDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers||(handlers=this._defaultHandlers={_disabled_:{}}),handlers[eventName]){var old=handlers[eventName],disabled=handlers._disabled_[eventName];disabled||(handlers._disabled_[eventName]=disabled=[]),disabled.push(old);var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}handlers[eventName]=callback},EventEmitter.removeDefaultHandler=function(eventName,callback){var handlers=this._defaultHandlers;if(handlers){var disabled=handlers._disabled_[eventName];if(handlers[eventName]==callback)handlers[eventName],disabled&&this.setDefaultHandler(eventName,disabled.pop());else if(disabled){var i=disabled.indexOf(callback);-1!=i&&disabled.splice(i,1)}}},EventEmitter.on=EventEmitter.addEventListener=function(eventName,callback,capturing){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];return listeners||(listeners=this._eventRegistry[eventName]=[]),-1==listeners.indexOf(callback)&&listeners[capturing?\"unshift\":\"push\"](callback),callback},EventEmitter.off=EventEmitter.removeListener=EventEmitter.removeEventListener=function(eventName,callback){this._eventRegistry=this._eventRegistry||{};var listeners=this._eventRegistry[eventName];if(listeners){var index=listeners.indexOf(callback);-1!==index&&listeners.splice(index,1)}},EventEmitter.removeAllListeners=function(eventName){this._eventRegistry&&(this._eventRegistry[eventName]=[])},exports.EventEmitter=EventEmitter}),ace.define(\"ace/anchor\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/lib/event_emitter\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Anchor=exports.Anchor=function(doc,row,column){this.$onChange=this.onChange.bind(this),this.attach(doc),column===void 0?this.setPosition(row.row,row.column):this.setPosition(row,column)};(function(){function $pointsInOrder(point1,point2,equalPointsInOrder){var bColIsAfter=equalPointsInOrder?point1.column<=point2.column:point1.column<point2.column;return point1.row<point2.row||point1.row==point2.row&&bColIsAfter}function $getTransformedPoint(delta,point,moveIfEqual){var deltaIsInsert=\"insert\"==delta.action,deltaRowShift=(deltaIsInsert?1:-1)*(delta.end.row-delta.start.row),deltaColShift=(deltaIsInsert?1:-1)*(delta.end.column-delta.start.column),deltaStart=delta.start,deltaEnd=deltaIsInsert?deltaStart:delta.end;return $pointsInOrder(point,deltaStart,moveIfEqual)?{row:point.row,column:point.column}:$pointsInOrder(deltaEnd,point,!moveIfEqual)?{row:point.row+deltaRowShift,column:point.column+(point.row==deltaEnd.row?deltaColShift:0)}:{row:deltaStart.row,column:deltaStart.column}}oop.implement(this,EventEmitter),this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)},this.getDocument=function(){return this.document},this.$insertRight=!1,this.onChange=function(delta){if(!(delta.start.row==delta.end.row&&delta.start.row!=this.row||delta.start.row>this.row)){var point=$getTransformedPoint(delta,{row:this.row,column:this.column},this.$insertRight);this.setPosition(point.row,point.column,!0)}},this.setPosition=function(row,column,noClip){var pos;if(pos=noClip?{row:row,column:column}:this.$clipPositionToDocument(row,column),this.row!=pos.row||this.column!=pos.column){var old={row:this.row,column:this.column};this.row=pos.row,this.column=pos.column,this._signal(\"change\",{old:old,value:pos})}},this.detach=function(){this.document.removeEventListener(\"change\",this.$onChange)},this.attach=function(doc){this.document=doc||this.document,this.document.on(\"change\",this.$onChange)},this.$clipPositionToDocument=function(row,column){var pos={};return row>=this.document.getLength()?(pos.row=Math.max(0,this.document.getLength()-1),pos.column=this.document.getLine(pos.row).length):0>row?(pos.row=0,pos.column=0):(pos.row=row,pos.column=Math.min(this.document.getLine(pos.row).length,Math.max(0,column))),0>column&&(pos.column=0),pos}}).call(Anchor.prototype)}),ace.define(\"ace/document\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/apply_delta\",\"ace/lib/event_emitter\",\"ace/range\",\"ace/anchor\"],function(acequire,exports){\"use strict\";var oop=acequire(\"./lib/oop\"),applyDelta=acequire(\"./apply_delta\").applyDelta,EventEmitter=acequire(\"./lib/event_emitter\").EventEmitter,Range=acequire(\"./range\").Range,Anchor=acequire(\"./anchor\").Anchor,Document=function(textOrLines){this.$lines=[\"\"],0===textOrLines.length?this.$lines=[\"\"]:Array.isArray(textOrLines)?this.insertMergedLines({row:0,column:0},textOrLines):this.insert({row:0,column:0},textOrLines)};(function(){oop.implement(this,EventEmitter),this.setValue=function(text){var len=this.getLength()-1;this.remove(new Range(0,0,len,this.getLine(len).length)),this.insert({row:0,column:0},text)},this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())},this.createAnchor=function(row,column){return new Anchor(this,row,column)},this.$split=0===\"aaa\".split(/a/).length?function(text){return text.replace(/\\r\\n|\\r/g,\"\\n\").split(\"\\n\")}:function(text){return text.split(/\\r\\n|\\r|\\n/)},this.$detectNewLine=function(text){var match=text.match(/^.*?(\\r\\n|\\r|\\n)/m);this.$autoNewLine=match?match[1]:\"\\n\",this._signal(\"changeNewLineMode\")},this.getNewLineCharacter=function(){switch(this.$newLineMode){case\"windows\":return\"\\r\\n\";case\"unix\":return\"\\n\";default:return this.$autoNewLine||\"\\n\"}},this.$autoNewLine=\"\",this.$newLineMode=\"auto\",this.setNewLineMode=function(newLineMode){this.$newLineMode!==newLineMode&&(this.$newLineMode=newLineMode,this._signal(\"changeNewLineMode\"))},this.getNewLineMode=function(){return this.$newLineMode},this.isNewLine=function(text){return\"\\r\\n\"==text||\"\\r\"==text||\"\\n\"==text},this.getLine=function(row){return this.$lines[row]||\"\"},this.getLines=function(firstRow,lastRow){return this.$lines.slice(firstRow,lastRow+1)},this.getAllLines=function(){return this.getLines(0,this.getLength())},this.getLength=function(){return this.$lines.length},this.getTextRange=function(range){return this.getLinesForRange(range).join(this.getNewLineCharacter())},this.getLinesForRange=function(range){var lines;if(range.start.row===range.end.row)lines=[this.getLine(range.start.row).substring(range.start.column,range.end.column)];else{lines=this.getLines(range.start.row,range.end.row),lines[0]=(lines[0]||\"\").substring(range.start.column);var l=lines.length-1;range.end.row-range.start.row==l&&(lines[l]=lines[l].substring(0,range.end.column))}return lines},this.insertLines=function(row,lines){return console.warn(\"Use of document.insertLines is deprecated. Use the insertFullLines method instead.\"),this.insertFullLines(row,lines)},this.removeLines=function(firstRow,lastRow){return console.warn(\"Use of document.removeLines is deprecated. Use the removeFullLines method instead.\"),this.removeFullLines(firstRow,lastRow)},this.insertNewLine=function(position){return console.warn(\"Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.\"),this.insertMergedLines(position,[\"\",\"\"])},this.insert=function(position,text){return 1>=this.getLength()&&this.$detectNewLine(text),this.insertMergedLines(position,this.$split(text))},this.insertInLine=function(position,text){var start=this.clippedPos(position.row,position.column),end=this.pos(position.row,position.column+text.length);return this.applyDelta({start:start,end:end,action:\"insert\",lines:[text]},!0),this.clonePos(end)},this.clippedPos=function(row,column){var length=this.getLength();void 0===row?row=length:0>row?row=0:row>=length&&(row=length-1,column=void 0);var line=this.getLine(row);return void 0==column&&(column=line.length),column=Math.min(Math.max(column,0),line.length),{row:row,column:column}},this.clonePos=function(pos){return{row:pos.row,column:pos.column}},this.pos=function(row,column){return{row:row,column:column}},this.$clipPosition=function(position){var length=this.getLength();return position.row>=length?(position.row=Math.max(0,length-1),position.column=this.getLine(length-1).length):(position.row=Math.max(0,position.row),position.column=Math.min(Math.max(position.column,0),this.getLine(position.row).length)),position},this.insertFullLines=function(row,lines){row=Math.min(Math.max(row,0),this.getLength());var column=0;this.getLength()>row?(lines=lines.concat([\"\"]),column=0):(lines=[\"\"].concat(lines),row--,column=this.$lines[row].length),this.insertMergedLines({row:row,column:column},lines)},this.insertMergedLines=function(position,lines){var start=this.clippedPos(position.row,position.column),end={row:start.row+lines.length-1,column:(1==lines.length?start.column:0)+lines[lines.length-1].length};return this.applyDelta({start:start,end:end,action:\"insert\",lines:lines}),this.clonePos(end)},this.remove=function(range){var start=this.clippedPos(range.start.row,range.start.column),end=this.clippedPos(range.end.row,range.end.column);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})}),this.clonePos(start)},this.removeInLine=function(row,startColumn,endColumn){var start=this.clippedPos(row,startColumn),end=this.clippedPos(row,endColumn);return this.applyDelta({start:start,end:end,action:\"remove\",lines:this.getLinesForRange({start:start,end:end})},!0),this.clonePos(start)},this.removeFullLines=function(firstRow,lastRow){firstRow=Math.min(Math.max(0,firstRow),this.getLength()-1),lastRow=Math.min(Math.max(0,lastRow),this.getLength()-1);var deleteFirstNewLine=lastRow==this.getLength()-1&&firstRow>0,deleteLastNewLine=this.getLength()-1>lastRow,startRow=deleteFirstNewLine?firstRow-1:firstRow,startCol=deleteFirstNewLine?this.getLine(startRow).length:0,endRow=deleteLastNewLine?lastRow+1:lastRow,endCol=deleteLastNewLine?0:this.getLine(endRow).length,range=new Range(startRow,startCol,endRow,endCol),deletedLines=this.$lines.slice(firstRow,lastRow+1);return this.applyDelta({start:range.start,end:range.end,action:\"remove\",lines:this.getLinesForRange(range)}),deletedLines},this.removeNewLine=function(row){this.getLength()-1>row&&row>=0&&this.applyDelta({start:this.pos(row,this.getLine(row).length),end:this.pos(row+1,0),action:\"remove\",lines:[\"\",\"\"]})},this.replace=function(range,text){if(range instanceof Range||(range=Range.fromPoints(range.start,range.end)),0===text.length&&range.isEmpty())return range.start;if(text==this.getTextRange(range))return range.end;this.remove(range);var end;return end=text?this.insert(range.start,text):range.start},this.applyDeltas=function(deltas){for(var i=0;deltas.length>i;i++)this.applyDelta(deltas[i])},this.revertDeltas=function(deltas){for(var i=deltas.length-1;i>=0;i--)this.revertDelta(deltas[i])},this.applyDelta=function(delta,doNotValidate){var isInsert=\"insert\"==delta.action;(isInsert?1>=delta.lines.length&&!delta.lines[0]:!Range.comparePoints(delta.start,delta.end))||(isInsert&&delta.lines.length>2e4&&this.$splitAndapplyLargeDelta(delta,2e4),applyDelta(this.$lines,delta,doNotValidate),this._signal(\"change\",delta))},this.$splitAndapplyLargeDelta=function(delta,MAX){for(var lines=delta.lines,l=lines.length,row=delta.start.row,column=delta.start.column,from=0,to=0;;){from=to,to+=MAX-1;var chunk=lines.slice(from,to);if(to>l){delta.lines=chunk,delta.start.row=row+from,delta.start.column=column;break}chunk.push(\"\"),this.applyDelta({start:this.pos(row+from,column),end:this.pos(row+to,column=0),action:delta.action,lines:chunk},!0)}},this.revertDelta=function(delta){this.applyDelta({start:this.clonePos(delta.start),end:this.clonePos(delta.end),action:\"insert\"==delta.action?\"remove\":\"insert\",lines:delta.lines.slice()})},this.indexToPosition=function(index,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,i=startRow||0,l=lines.length;l>i;i++)if(index-=lines[i].length+newlineLength,0>index)return{row:i,column:index+lines[i].length+newlineLength};return{row:l-1,column:lines[l-1].length}},this.positionToIndex=function(pos,startRow){for(var lines=this.$lines||this.getAllLines(),newlineLength=this.getNewLineCharacter().length,index=0,row=Math.min(pos.row,lines.length),i=startRow||0;row>i;++i)index+=lines[i].length+newlineLength;return index+pos.column}}).call(Document.prototype),exports.Document=Document}),ace.define(\"ace/lib/lang\",[\"require\",\"exports\",\"module\"],function(acequire,exports){\"use strict\";exports.last=function(a){return a[a.length-1]},exports.stringReverse=function(string){return string.split(\"\").reverse().join(\"\")},exports.stringRepeat=function(string,count){for(var result=\"\";count>0;)1&count&&(result+=string),(count>>=1)&&(string+=string);return result};var trimBeginRegexp=/^\\s\\s*/,trimEndRegexp=/\\s\\s*$/;exports.stringTrimLeft=function(string){return string.replace(trimBeginRegexp,\"\")},exports.stringTrimRight=function(string){return string.replace(trimEndRegexp,\"\")},exports.copyObject=function(obj){var copy={};for(var key in obj)copy[key]=obj[key];return copy},exports.copyArray=function(array){for(var copy=[],i=0,l=array.length;l>i;i++)copy[i]=array[i]&&\"object\"==typeof array[i]?this.copyObject(array[i]):array[i];return copy},exports.deepCopy=function deepCopy(obj){if(\"object\"!=typeof obj||!obj)return obj;var copy;if(Array.isArray(obj)){copy=[];for(var key=0;obj.length>key;key++)copy[key]=deepCopy(obj[key]);return copy}if(\"[object Object]\"!==Object.prototype.toString.call(obj))return obj;copy={};for(var key in obj)copy[key]=deepCopy(obj[key]);return copy},exports.arrayToMap=function(arr){for(var map={},i=0;arr.length>i;i++)map[arr[i]]=1;return map},exports.createMap=function(props){var map=Object.create(null);for(var i in props)map[i]=props[i];return map},exports.arrayRemove=function(array,value){for(var i=0;array.length>=i;i++)value===array[i]&&array.splice(i,1)},exports.escapeRegExp=function(str){return str.replace(/([.*+?^${}()|[\\]\\/\\\\])/g,\"\\\\$1\")},exports.escapeHTML=function(str){return str.replace(/&/g,\"&#38;\").replace(/\"/g,\"&#34;\").replace(/'/g,\"&#39;\").replace(/</g,\"&#60;\")},exports.getMatchOffsets=function(string,regExp){var matches=[];return string.replace(regExp,function(str){matches.push({offset:arguments[arguments.length-2],length:str.length})}),matches},exports.deferredCall=function(fcn){var timer=null,callback=function(){timer=null,fcn()},deferred=function(timeout){return deferred.cancel(),timer=setTimeout(callback,timeout||0),deferred};return deferred.schedule=deferred,deferred.call=function(){return this.cancel(),fcn(),deferred},deferred.cancel=function(){return clearTimeout(timer),timer=null,deferred},deferred.isPending=function(){return timer},deferred},exports.delayedCall=function(fcn,defaultTimeout){var timer=null,callback=function(){timer=null,fcn()},_self=function(timeout){null==timer&&(timer=setTimeout(callback,timeout||defaultTimeout))};return _self.delay=function(timeout){timer&&clearTimeout(timer),timer=setTimeout(callback,timeout||defaultTimeout)},_self.schedule=_self,_self.call=function(){this.cancel(),fcn()},_self.cancel=function(){timer&&clearTimeout(timer),timer=null},_self.isPending=function(){return timer},_self}}),ace.define(\"ace/worker/mirror\",[\"require\",\"exports\",\"module\",\"ace/range\",\"ace/document\",\"ace/lib/lang\"],function(acequire,exports){\"use strict\";acequire(\"../range\").Range;var Document=acequire(\"../document\").Document,lang=acequire(\"../lib/lang\"),Mirror=exports.Mirror=function(sender){this.sender=sender;var doc=this.doc=new Document(\"\"),deferredUpdate=this.deferredUpdate=lang.delayedCall(this.onUpdate.bind(this)),_self=this;sender.on(\"change\",function(e){var data=e.data;if(data[0].start)doc.applyDeltas(data);else for(var i=0;data.length>i;i+=2){if(Array.isArray(data[i+1]))var d={action:\"insert\",start:data[i],lines:data[i+1]};else var d={action:\"remove\",start:data[i],end:data[i+1]};doc.applyDelta(d,!0)}return _self.$timeout?deferredUpdate.schedule(_self.$timeout):(_self.onUpdate(),void 0)})};(function(){this.$timeout=500,this.setTimeout=function(timeout){this.$timeout=timeout},this.setValue=function(value){this.doc.setValue(value),this.deferredUpdate.schedule(this.$timeout)},this.getValue=function(callbackId){this.sender.callback(this.doc.getValue(),callbackId)},this.onUpdate=function(){},this.isPending=function(){return this.deferredUpdate.isPending()}}).call(Mirror.prototype)}),ace.define(\"ace/mode/javascript/jshint\",[\"require\",\"exports\",\"module\"],function(acequire,exports,module){module.exports=function outer(modules,cache,entry){function newRequire(name,jumped){if(!cache[name]){if(!modules[name]){var currentRequire=\"function\"==typeof acequire&&acequire;if(!jumped&&currentRequire)return currentRequire(name,!0);if(previousRequire)return previousRequire(name,!0);var err=Error(\"Cannot find module '\"+name+\"'\");throw err.code=\"MODULE_NOT_FOUND\",err}var m=cache[name]={exports:{}};modules[name][0].call(m.exports,function(x){var id=modules[name][1][x];return newRequire(id?id:x)},m,m.exports,outer,modules,cache,entry)}return cache[name].exports}for(var previousRequire=\"function\"==typeof acequire&&acequire,i=0;entry.length>i;i++)newRequire(entry[i]);return newRequire(entry[0])}({\"/node_modules/browserify/node_modules/events/events.js\":[function(_dereq_,module){function EventEmitter(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function isFunction(arg){return\"function\"==typeof arg}function isNumber(arg){return\"number\"==typeof arg}function isObject(arg){return\"object\"==typeof arg&&null!==arg}function isUndefined(arg){return void 0===arg}module.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._maxListeners=void 0,EventEmitter.defaultMaxListeners=10,EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||0>n||isNaN(n))throw TypeError(\"n must be a positive number\");return this._maxListeners=n,this},EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(this._events||(this._events={}),\"error\"===type&&(!this._events.error||isObject(this._events.error)&&!this._events.error.length)){if(er=arguments[1],er instanceof Error)throw er;throw TypeError('Uncaught, unspecified \"error\" event.')}if(handler=this._events[type],isUndefined(handler))return!1;if(isFunction(handler))switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];handler.apply(this,args)}else if(isObject(handler)){for(len=arguments.length,args=Array(len-1),i=1;len>i;i++)args[i-1]=arguments[i];for(listeners=handler.slice(),len=listeners.length,i=0;len>i;i++)listeners[i].apply(this,args)}return!0},EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(this._events||(this._events={}),this._events.newListener&&this.emit(\"newListener\",type,isFunction(listener.listener)?listener.listener:listener),this._events[type]?isObject(this._events[type])?this._events[type].push(listener):this._events[type]=[this._events[type],listener]:this._events[type]=listener,isObject(this._events[type])&&!this._events[type].warned){var m;m=isUndefined(this._maxListeners)?EventEmitter.defaultMaxListeners:this._maxListeners,m&&m>0&&this._events[type].length>m&&(this._events[type].warned=!0,console.error(\"(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.\",this._events[type].length),\"function\"==typeof console.trace&&console.trace())}return this},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.once=function(type,listener){function g(){this.removeListener(type,g),fired||(fired=!0,listener.apply(this,arguments))}if(!isFunction(listener))throw TypeError(\"listener must be a function\");var fired=!1;return g.listener=listener,this.on(type,g),this},EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError(\"listener must be a function\");if(!this._events||!this._events[type])return this;if(list=this._events[type],length=list.length,position=-1,list===listener||isFunction(list.listener)&&list.listener===listener)delete this._events[type],this._events.removeListener&&this.emit(\"removeListener\",type,listener);else if(isObject(list)){for(i=length;i-->0;)if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}if(0>position)return this;1===list.length?(list.length=0,delete this._events[type]):list.splice(position,1),this._events.removeListener&&this.emit(\"removeListener\",type,listener)}return this},EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[type]&&delete this._events[type],this;if(0===arguments.length){for(key in this._events)\"removeListener\"!==key&&this.removeAllListeners(key);return this.removeAllListeners(\"removeListener\"),this._events={},this\n}if(listeners=this._events[type],isFunction(listeners))this.removeListener(type,listeners);else for(;listeners.length;)this.removeListener(type,listeners[listeners.length-1]);return delete this._events[type],this},EventEmitter.prototype.listeners=function(type){var ret;return ret=this._events&&this._events[type]?isFunction(this._events[type])?[this._events[type]]:this._events[type].slice():[]},EventEmitter.listenerCount=function(emitter,type){var ret;return ret=emitter._events&&emitter._events[type]?isFunction(emitter._events[type])?1:emitter._events[type].length:0}},{}],\"/node_modules/jshint/data/ascii-identifier-data.js\":[function(_dereq_,module){for(var identifierStartTable=[],i=0;128>i;i++)identifierStartTable[i]=36===i||i>=65&&90>=i||95===i||i>=97&&122>=i;for(var identifierPartTable=[],i=0;128>i;i++)identifierPartTable[i]=identifierStartTable[i]||i>=48&&57>=i;module.exports={asciiIdentifierStartTable:identifierStartTable,asciiIdentifierPartTable:identifierPartTable}},{}],\"/node_modules/jshint/lodash.js\":[function(_dereq_,module,exports){(function(global){(function(){function baseFindIndex(array,predicate,fromRight){for(var length=array.length,index=fromRight?length:-1;fromRight?index--:length>++index;)if(predicate(array[index],index,array))return index;return-1}function baseIndexOf(array,value,fromIndex){if(value!==value)return indexOfNaN(array,fromIndex);for(var index=fromIndex-1,length=array.length;length>++index;)if(array[index]===value)return index;return-1}function baseIsFunction(value){return\"function\"==typeof value||!1}function baseToString(value){return\"string\"==typeof value?value:null==value?\"\":value+\"\"}function indexOfNaN(array,fromIndex,fromRight){for(var length=array.length,index=fromIndex+(fromRight?0:-1);fromRight?index--:length>++index;){var other=array[index];if(other!==other)return index}return-1}function isObjectLike(value){return!!value&&\"object\"==typeof value}function lodash(){}function arrayCopy(source,array){var index=-1,length=source.length;for(array||(array=Array(length));length>++index;)array[index]=source[index];return array}function arrayEach(array,iteratee){for(var index=-1,length=array.length;length>++index&&iteratee(array[index],index,array)!==!1;);return array}function arrayFilter(array,predicate){for(var index=-1,length=array.length,resIndex=-1,result=[];length>++index;){var value=array[index];predicate(value,index,array)&&(result[++resIndex]=value)}return result}function arrayMap(array,iteratee){for(var index=-1,length=array.length,result=Array(length);length>++index;)result[index]=iteratee(array[index],index,array);return result}function arrayMax(array){for(var index=-1,length=array.length,result=NEGATIVE_INFINITY;length>++index;){var value=array[index];value>result&&(result=value)}return result}function arraySome(array,predicate){for(var index=-1,length=array.length;length>++index;)if(predicate(array[index],index,array))return!0;return!1}function assignWith(object,source,customizer){var props=keys(source);push.apply(props,getSymbols(source));for(var index=-1,length=props.length;length>++index;){var key=props[index],value=object[key],result=customizer(value,source[key],key,object,source);(result===result?result===value:value!==value)&&(value!==undefined||key in object)||(object[key]=result)}return object}function baseCopy(source,props,object){object||(object={});for(var index=-1,length=props.length;length>++index;){var key=props[index];object[key]=source[key]}return object}function baseCallback(func,thisArg,argCount){var type=typeof func;return\"function\"==type?thisArg===undefined?func:bindCallback(func,thisArg,argCount):null==func?identity:\"object\"==type?baseMatches(func):thisArg===undefined?property(func):baseMatchesProperty(func,thisArg)}function baseClone(value,isDeep,customizer,key,object,stackA,stackB){var result;if(customizer&&(result=object?customizer(value,key,object):customizer(value)),result!==undefined)return result;if(!isObject(value))return value;var isArr=isArray(value);if(isArr){if(result=initCloneArray(value),!isDeep)return arrayCopy(value,result)}else{var tag=objToString.call(value),isFunc=tag==funcTag;if(tag!=objectTag&&tag!=argsTag&&(!isFunc||object))return cloneableTags[tag]?initCloneByTag(value,tag,isDeep):object?value:{};if(result=initCloneObject(isFunc?{}:value),!isDeep)return baseAssign(result,value)}stackA||(stackA=[]),stackB||(stackB=[]);for(var length=stackA.length;length--;)if(stackA[length]==value)return stackB[length];return stackA.push(value),stackB.push(result),(isArr?arrayEach:baseForOwn)(value,function(subValue,key){result[key]=baseClone(subValue,isDeep,customizer,key,value,stackA,stackB)}),result}function baseFilter(collection,predicate){var result=[];return baseEach(collection,function(value,index,collection){predicate(value,index,collection)&&result.push(value)}),result}function baseForIn(object,iteratee){return baseFor(object,iteratee,keysIn)}function baseForOwn(object,iteratee){return baseFor(object,iteratee,keys)}function baseGet(object,path,pathKey){if(null!=object){pathKey!==undefined&&pathKey in toObject(object)&&(path=[pathKey]);for(var index=-1,length=path.length;null!=object&&length>++index;)var result=object=object[path[index]];return result}}function baseIsEqual(value,other,customizer,isLoose,stackA,stackB){if(value===other)return 0!==value||1/value==1/other;var valType=typeof value,othType=typeof other;return\"function\"!=valType&&\"object\"!=valType&&\"function\"!=othType&&\"object\"!=othType||null==value||null==other?value!==value&&other!==other:baseIsEqualDeep(value,other,baseIsEqual,customizer,isLoose,stackA,stackB)}function baseIsEqualDeep(object,other,equalFunc,customizer,isLoose,stackA,stackB){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;objIsArr||(objTag=objToString.call(object),objTag==argsTag?objTag=objectTag:objTag!=objectTag&&(objIsArr=isTypedArray(object))),othIsArr||(othTag=objToString.call(other),othTag==argsTag?othTag=objectTag:othTag!=objectTag&&(othIsArr=isTypedArray(other)));var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&!objIsArr&&!objIsObj)return equalByTag(object,other,objTag);if(!isLoose){var valWrapped=objIsObj&&hasOwnProperty.call(object,\"__wrapped__\"),othWrapped=othIsObj&&hasOwnProperty.call(other,\"__wrapped__\");if(valWrapped||othWrapped)return equalFunc(valWrapped?object.value():object,othWrapped?other.value():other,customizer,isLoose,stackA,stackB)}if(!isSameTag)return!1;stackA||(stackA=[]),stackB||(stackB=[]);for(var length=stackA.length;length--;)if(stackA[length]==object)return stackB[length]==other;stackA.push(object),stackB.push(other);var result=(objIsArr?equalArrays:equalObjects)(object,other,equalFunc,customizer,isLoose,stackA,stackB);return stackA.pop(),stackB.pop(),result}function baseIsMatch(object,props,values,strictCompareFlags,customizer){for(var index=-1,length=props.length,noCustomizer=!customizer;length>++index;)if(noCustomizer&&strictCompareFlags[index]?values[index]!==object[props[index]]:!(props[index]in object))return!1;for(index=-1;length>++index;){var key=props[index],objValue=object[key],srcValue=values[index];if(noCustomizer&&strictCompareFlags[index])var result=objValue!==undefined||key in object;else result=customizer?customizer(objValue,srcValue,key):undefined,result===undefined&&(result=baseIsEqual(srcValue,objValue,customizer,!0));if(!result)return!1}return!0}function baseMatches(source){var props=keys(source),length=props.length;if(!length)return constant(!0);if(1==length){var key=props[0],value=source[key];if(isStrictComparable(value))return function(object){return null==object?!1:object[key]===value&&(value!==undefined||key in toObject(object))}}for(var values=Array(length),strictCompareFlags=Array(length);length--;)value=source[props[length]],values[length]=value,strictCompareFlags[length]=isStrictComparable(value);return function(object){return null!=object&&baseIsMatch(toObject(object),props,values,strictCompareFlags)}}function baseMatchesProperty(path,value){var isArr=isArray(path),isCommon=isKey(path)&&isStrictComparable(value),pathKey=path+\"\";return path=toPath(path),function(object){if(null==object)return!1;var key=pathKey;if(object=toObject(object),!(!isArr&&isCommon||key in object)){if(object=1==path.length?object:baseGet(object,baseSlice(path,0,-1)),null==object)return!1;key=last(path),object=toObject(object)}return object[key]===value?value!==undefined||key in object:baseIsEqual(value,object[key],null,!0)}}function baseMerge(object,source,customizer,stackA,stackB){if(!isObject(object))return object;var isSrcArr=isLength(source.length)&&(isArray(source)||isTypedArray(source));if(!isSrcArr){var props=keys(source);push.apply(props,getSymbols(source))}return arrayEach(props||source,function(srcValue,key){if(props&&(key=srcValue,srcValue=source[key]),isObjectLike(srcValue))stackA||(stackA=[]),stackB||(stackB=[]),baseMergeDeep(object,source,key,baseMerge,customizer,stackA,stackB);else{var value=object[key],result=customizer?customizer(value,srcValue,key,object,source):undefined,isCommon=result===undefined;isCommon&&(result=srcValue),!isSrcArr&&result===undefined||!isCommon&&(result===result?result===value:value!==value)||(object[key]=result)}}),object}function baseMergeDeep(object,source,key,mergeFunc,customizer,stackA,stackB){for(var length=stackA.length,srcValue=source[key];length--;)if(stackA[length]==srcValue)return object[key]=stackB[length],undefined;var value=object[key],result=customizer?customizer(value,srcValue,key,object,source):undefined,isCommon=result===undefined;isCommon&&(result=srcValue,isLength(srcValue.length)&&(isArray(srcValue)||isTypedArray(srcValue))?result=isArray(value)?value:getLength(value)?arrayCopy(value):[]:isPlainObject(srcValue)||isArguments(srcValue)?result=isArguments(value)?toPlainObject(value):isPlainObject(value)?value:{}:isCommon=!1),stackA.push(srcValue),stackB.push(result),isCommon?object[key]=mergeFunc(result,srcValue,customizer,stackA,stackB):(result===result?result!==value:value===value)&&(object[key]=result)}function baseProperty(key){return function(object){return null==object?undefined:object[key]}}function basePropertyDeep(path){var pathKey=path+\"\";return path=toPath(path),function(object){return baseGet(object,path,pathKey)}}function baseSlice(array,start,end){var index=-1,length=array.length;start=null==start?0:+start||0,0>start&&(start=-start>length?0:length+start),end=end===undefined||end>length?length:+end||0,0>end&&(end+=length),length=start>end?0:end-start>>>0,start>>>=0;for(var result=Array(length);length>++index;)result[index]=array[index+start];return result}function baseSome(collection,predicate){var result;return baseEach(collection,function(value,index,collection){return result=predicate(value,index,collection),!result}),!!result}function baseValues(object,props){for(var index=-1,length=props.length,result=Array(length);length>++index;)result[index]=object[props[index]];return result}function binaryIndex(array,value,retHighest){var low=0,high=array?array.length:low;if(\"number\"==typeof value&&value===value&&HALF_MAX_ARRAY_LENGTH>=high){for(;high>low;){var mid=low+high>>>1,computed=array[mid];(retHighest?value>=computed:value>computed)?low=mid+1:high=mid}return high}return binaryIndexBy(array,value,identity,retHighest)}function binaryIndexBy(array,value,iteratee,retHighest){value=iteratee(value);for(var low=0,high=array?array.length:0,valIsNaN=value!==value,valIsUndef=value===undefined;high>low;){var mid=floor((low+high)/2),computed=iteratee(array[mid]),isReflexive=computed===computed;if(valIsNaN)var setLow=isReflexive||retHighest;else setLow=valIsUndef?isReflexive&&(retHighest||computed!==undefined):retHighest?value>=computed:value>computed;setLow?low=mid+1:high=mid}return nativeMin(high,MAX_ARRAY_INDEX)}function bindCallback(func,thisArg,argCount){if(\"function\"!=typeof func)return identity;if(thisArg===undefined)return func;switch(argCount){case 1:return function(value){return func.call(thisArg,value)};case 3:return function(value,index,collection){return func.call(thisArg,value,index,collection)};case 4:return function(accumulator,value,index,collection){return func.call(thisArg,accumulator,value,index,collection)};case 5:return function(value,other,key,object,source){return func.call(thisArg,value,other,key,object,source)}}return function(){return func.apply(thisArg,arguments)}}function bufferClone(buffer){return bufferSlice.call(buffer,0)}function createAssigner(assigner){return restParam(function(object,sources){var index=-1,length=null==object?0:sources.length,customizer=length>2&&sources[length-2],guard=length>2&&sources[2],thisArg=length>1&&sources[length-1];for(\"function\"==typeof customizer?(customizer=bindCallback(customizer,thisArg,5),length-=2):(customizer=\"function\"==typeof thisArg?thisArg:null,length-=customizer?1:0),guard&&isIterateeCall(sources[0],sources[1],guard)&&(customizer=3>length?null:customizer,length=1);length>++index;){var source=sources[index];source&&assigner(object,source,customizer)}return object})}function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){var length=collection?getLength(collection):0;if(!isLength(length))return eachFunc(collection,iteratee);for(var index=fromRight?length:-1,iterable=toObject(collection);(fromRight?index--:length>++index)&&iteratee(iterable[index],index,iterable)!==!1;);return collection}}function createBaseFor(fromRight){return function(object,iteratee,keysFunc){for(var iterable=toObject(object),props=keysFunc(object),length=props.length,index=fromRight?length:-1;fromRight?index--:length>++index;){var key=props[index];if(iteratee(iterable[key],key,iterable)===!1)break}return object}}function createFindIndex(fromRight){return function(array,predicate,thisArg){return array&&array.length?(predicate=getCallback(predicate,thisArg,3),baseFindIndex(array,predicate,fromRight)):-1}}function createForEach(arrayFunc,eachFunc){return function(collection,iteratee,thisArg){return\"function\"==typeof iteratee&&thisArg===undefined&&isArray(collection)?arrayFunc(collection,iteratee):eachFunc(collection,bindCallback(iteratee,thisArg,3))}}function equalArrays(array,other,equalFunc,customizer,isLoose,stackA,stackB){var index=-1,arrLength=array.length,othLength=other.length,result=!0;if(arrLength!=othLength&&!(isLoose&&othLength>arrLength))return!1;for(;result&&arrLength>++index;){var arrValue=array[index],othValue=other[index];if(result=undefined,customizer&&(result=isLoose?customizer(othValue,arrValue,index):customizer(arrValue,othValue,index)),result===undefined)if(isLoose)for(var othIndex=othLength;othIndex--&&(othValue=other[othIndex],!(result=arrValue&&arrValue===othValue||equalFunc(arrValue,othValue,customizer,isLoose,stackA,stackB))););else result=arrValue&&arrValue===othValue||equalFunc(arrValue,othValue,customizer,isLoose,stackA,stackB)}return!!result}function equalByTag(object,other,tag){switch(tag){case boolTag:case dateTag:return+object==+other;case errorTag:return object.name==other.name&&object.message==other.message;case numberTag:return object!=+object?other!=+other:0==object?1/object==1/other:object==+other;case regexpTag:case stringTag:return object==other+\"\"}return!1}function equalObjects(object,other,equalFunc,customizer,isLoose,stackA,stackB){var objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isLoose)return!1;for(var skipCtor=isLoose,index=-1;objLength>++index;){var key=objProps[index],result=isLoose?key in other:hasOwnProperty.call(other,key);if(result){var objValue=object[key],othValue=other[key];result=undefined,customizer&&(result=isLoose?customizer(othValue,objValue,key):customizer(objValue,othValue,key)),result===undefined&&(result=objValue&&objValue===othValue||equalFunc(objValue,othValue,customizer,isLoose,stackA,stackB))}if(!result)return!1;skipCtor||(skipCtor=\"constructor\"==key)}if(!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;if(objCtor!=othCtor&&\"constructor\"in object&&\"constructor\"in other&&!(\"function\"==typeof objCtor&&objCtor instanceof objCtor&&\"function\"==typeof othCtor&&othCtor instanceof othCtor))return!1}return!0}function getCallback(func,thisArg,argCount){var result=lodash.callback||callback;return result=result===callback?baseCallback:result,argCount?result(func,thisArg,argCount):result}function getIndexOf(collection,target,fromIndex){var result=lodash.indexOf||indexOf;return result=result===indexOf?baseIndexOf:result,collection?result(collection,target,fromIndex):result}function initCloneArray(array){var length=array.length,result=new array.constructor(length);return length&&\"string\"==typeof array[0]&&hasOwnProperty.call(array,\"index\")&&(result.index=array.index,result.input=array.input),result}function initCloneObject(object){var Ctor=object.constructor;return\"function\"==typeof Ctor&&Ctor instanceof Ctor||(Ctor=Object),new Ctor}function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return bufferClone(object);case boolTag:case dateTag:return new Ctor(+object);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:var buffer=object.buffer;return new Ctor(isDeep?bufferClone(buffer):buffer,object.byteOffset,object.length);case numberTag:case stringTag:return new Ctor(object);case regexpTag:var result=new Ctor(object.source,reFlags.exec(object));result.lastIndex=object.lastIndex}return result}function isIndex(value,length){return value=+value,length=null==length?MAX_SAFE_INTEGER:length,value>-1&&0==value%1&&length>value}function isIterateeCall(value,index,object){if(!isObject(object))return!1;var type=typeof index;if(\"number\"==type)var length=getLength(object),prereq=isLength(length)&&isIndex(index,length);else prereq=\"string\"==type&&index in object;if(prereq){var other=object[index];return value===value?value===other:other!==other}return!1}function isKey(value,object){var type=typeof value;if(\"string\"==type&&reIsPlainProp.test(value)||\"number\"==type)return!0;if(isArray(value))return!1;var result=!reIsDeepProp.test(value);return result||null!=object&&value in toObject(object)}function isLength(value){return\"number\"==typeof value&&value>-1&&0==value%1&&MAX_SAFE_INTEGER>=value}function isStrictComparable(value){return value===value&&(0===value?1/value>0:!isObject(value))}function shimIsPlainObject(value){var Ctor;if(lodash.support,!isObjectLike(value)||objToString.call(value)!=objectTag||!hasOwnProperty.call(value,\"constructor\")&&(Ctor=value.constructor,\"function\"==typeof Ctor&&!(Ctor instanceof Ctor)))return!1;var result;return baseForIn(value,function(subValue,key){result=key}),result===undefined||hasOwnProperty.call(value,result)}function shimKeys(object){for(var props=keysIn(object),propsLength=props.length,length=propsLength&&object.length,support=lodash.support,allowIndexes=length&&isLength(length)&&(isArray(object)||support.nonEnumArgs&&isArguments(object)),index=-1,result=[];propsLength>++index;){var key=props[index];(allowIndexes&&isIndex(key,length)||hasOwnProperty.call(object,key))&&result.push(key)}return result}function toObject(value){return isObject(value)?value:Object(value)}function toPath(value){if(isArray(value))return value;var result=[];return baseToString(value).replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,\"$1\"):number||match)}),result}function indexOf(array,value,fromIndex){var length=array?array.length:0;if(!length)return-1;if(\"number\"==typeof fromIndex)fromIndex=0>fromIndex?nativeMax(length+fromIndex,0):fromIndex;else if(fromIndex){var index=binaryIndex(array,value),other=array[index];return(value===value?value===other:other!==other)?index:-1}return baseIndexOf(array,value,fromIndex||0)}function last(array){var length=array?array.length:0;return length?array[length-1]:undefined}function slice(array,start,end){var length=array?array.length:0;return length?(end&&\"number\"!=typeof end&&isIterateeCall(array,start,end)&&(start=0,end=length),baseSlice(array,start,end)):[]}function unzip(array){for(var index=-1,length=(array&&array.length&&arrayMax(arrayMap(array,getLength)))>>>0,result=Array(length);length>++index;)result[index]=arrayMap(array,baseProperty(index));return result}function includes(collection,target,fromIndex,guard){var length=collection?getLength(collection):0;return isLength(length)||(collection=values(collection),length=collection.length),length?(fromIndex=\"number\"!=typeof fromIndex||guard&&isIterateeCall(target,fromIndex,guard)?0:0>fromIndex?nativeMax(length+fromIndex,0):fromIndex||0,\"string\"==typeof collection||!isArray(collection)&&isString(collection)?length>fromIndex&&collection.indexOf(target,fromIndex)>-1:getIndexOf(collection,target,fromIndex)>-1):!1}function reject(collection,predicate,thisArg){var func=isArray(collection)?arrayFilter:baseFilter;return predicate=getCallback(predicate,thisArg,3),func(collection,function(value,index,collection){return!predicate(value,index,collection)})}function some(collection,predicate,thisArg){var func=isArray(collection)?arraySome:baseSome;return thisArg&&isIterateeCall(collection,predicate,thisArg)&&(predicate=null),(\"function\"!=typeof predicate||thisArg!==undefined)&&(predicate=getCallback(predicate,thisArg,3)),func(collection,predicate)}function restParam(func,start){if(\"function\"!=typeof func)throw new TypeError(FUNC_ERROR_TEXT);return start=nativeMax(start===undefined?func.length-1:+start||0,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),rest=Array(length);length>++index;)rest[index]=args[start+index];switch(start){case 0:return func.call(this,rest);case 1:return func.call(this,args[0],rest);case 2:return func.call(this,args[0],args[1],rest)}var otherArgs=Array(start+1);for(index=-1;start>++index;)otherArgs[index]=args[index];return otherArgs[start]=rest,func.apply(this,otherArgs)}}function clone(value,isDeep,customizer,thisArg){return isDeep&&\"boolean\"!=typeof isDeep&&isIterateeCall(value,isDeep,customizer)?isDeep=!1:\"function\"==typeof isDeep&&(thisArg=customizer,customizer=isDeep,isDeep=!1),customizer=\"function\"==typeof customizer&&bindCallback(customizer,thisArg,1),baseClone(value,isDeep,customizer)}function isArguments(value){var length=isObjectLike(value)?value.length:undefined;return isLength(length)&&objToString.call(value)==argsTag}function isEmpty(value){if(null==value)return!0;var length=getLength(value);return isLength(length)&&(isArray(value)||isString(value)||isArguments(value)||isObjectLike(value)&&isFunction(value.splice))?!length:!keys(value).length}function isObject(value){var type=typeof value;return\"function\"==type||!!value&&\"object\"==type}function isNative(value){return null==value?!1:objToString.call(value)==funcTag?reIsNative.test(fnToString.call(value)):isObjectLike(value)&&reIsHostCtor.test(value)}function isNumber(value){return\"number\"==typeof value||isObjectLike(value)&&objToString.call(value)==numberTag}function isString(value){return\"string\"==typeof value||isObjectLike(value)&&objToString.call(value)==stringTag}function isTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objToString.call(value)]}function toPlainObject(value){return baseCopy(value,keysIn(value))}function has(object,path){if(null==object)return!1;var result=hasOwnProperty.call(object,path);return result||isKey(path)||(path=toPath(path),object=1==path.length?object:baseGet(object,baseSlice(path,0,-1)),path=last(path),result=null!=object&&hasOwnProperty.call(object,path)),result}function keysIn(object){if(null==object)return[];isObject(object)||(object=Object(object));var length=object.length;length=length&&isLength(length)&&(isArray(object)||support.nonEnumArgs&&isArguments(object))&&length||0;for(var Ctor=object.constructor,index=-1,isProto=\"function\"==typeof Ctor&&Ctor.prototype===object,result=Array(length),skipIndexes=length>0;length>++index;)result[index]=index+\"\";for(var key in object)skipIndexes&&isIndex(key,length)||\"constructor\"==key&&(isProto||!hasOwnProperty.call(object,key))||result.push(key);return result}function values(object){return baseValues(object,keys(object))}function escapeRegExp(string){return string=baseToString(string),string&&reHasRegExpChars.test(string)?string.replace(reRegExpChars,\"\\\\$&\"):string}function callback(func,thisArg,guard){return guard&&isIterateeCall(func,thisArg,guard)&&(thisArg=null),baseCallback(func,thisArg)}function constant(value){return function(){return value}}function identity(value){return value}function property(path){return isKey(path)?baseProperty(path):basePropertyDeep(path)}var undefined,VERSION=\"3.7.0\",FUNC_ERROR_TEXT=\"Expected a function\",argsTag=\"[object Arguments]\",arrayTag=\"[object Array]\",boolTag=\"[object Boolean]\",dateTag=\"[object Date]\",errorTag=\"[object Error]\",funcTag=\"[object Function]\",mapTag=\"[object Map]\",numberTag=\"[object Number]\",objectTag=\"[object Object]\",regexpTag=\"[object RegExp]\",setTag=\"[object Set]\",stringTag=\"[object String]\",weakMapTag=\"[object WeakMap]\",arrayBufferTag=\"[object ArrayBuffer]\",float32Tag=\"[object Float32Array]\",float64Tag=\"[object Float64Array]\",int8Tag=\"[object Int8Array]\",int16Tag=\"[object Int16Array]\",int32Tag=\"[object Int32Array]\",uint8Tag=\"[object Uint8Array]\",uint8ClampedTag=\"[object Uint8ClampedArray]\",uint16Tag=\"[object Uint16Array]\",uint32Tag=\"[object Uint32Array]\",reIsDeepProp=/\\.|\\[(?:[^[\\]]+|([\"'])(?:(?!\\1)[^\\n\\\\]|\\\\.)*?)\\1\\]/,reIsPlainProp=/^\\w*$/,rePropName=/[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\n\\\\]|\\\\.)*?)\\2)\\]/g,reRegExpChars=/[.*+?^${}()|[\\]\\/\\\\]/g,reHasRegExpChars=RegExp(reRegExpChars.source),reEscapeChar=/\\\\(\\\\)?/g,reFlags=/\\w*$/,reIsHostCtor=/^\\[object .+?Constructor\\]$/,typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[stringTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[mapTag]=cloneableTags[setTag]=cloneableTags[weakMapTag]=!1;var objectTypes={\"function\":!0,object:!0},freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports,freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module,freeGlobal=freeExports&&freeModule&&\"object\"==typeof global&&global&&global.Object&&global,freeSelf=objectTypes[typeof self]&&self&&self.Object&&self,freeWindow=objectTypes[typeof window]&&window&&window.Object&&window,moduleExports=freeModule&&freeModule.exports===freeExports&&freeExports,root=freeGlobal||freeWindow!==(this&&this.window)&&freeWindow||freeSelf||this,arrayProto=Array.prototype,objectProto=Object.prototype,fnToString=Function.prototype.toString,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString,reIsNative=RegExp(\"^\"+escapeRegExp(objToString).replace(/toString|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g,\"$1.*?\")+\"$\"),ArrayBuffer=isNative(ArrayBuffer=root.ArrayBuffer)&&ArrayBuffer,bufferSlice=isNative(bufferSlice=ArrayBuffer&&new ArrayBuffer(0).slice)&&bufferSlice,floor=Math.floor,getOwnPropertySymbols=isNative(getOwnPropertySymbols=Object.getOwnPropertySymbols)&&getOwnPropertySymbols,getPrototypeOf=isNative(getPrototypeOf=Object.getPrototypeOf)&&getPrototypeOf,push=arrayProto.push,preventExtensions=isNative(Object.preventExtensions=Object.preventExtensions)&&preventExtensions,propertyIsEnumerable=objectProto.propertyIsEnumerable,Uint8Array=isNative(Uint8Array=root.Uint8Array)&&Uint8Array,Float64Array=function(){try{var func=isNative(func=root.Float64Array)&&func,result=new func(new ArrayBuffer(10),0,1)&&func}catch(e){}return result}(),nativeAssign=function(){var object={1:0},func=preventExtensions&&isNative(func=Object.assign)&&func;try{func(preventExtensions(object),\"xo\")}catch(e){}return!object[1]&&func}(),nativeIsArray=isNative(nativeIsArray=Array.isArray)&&nativeIsArray,nativeKeys=isNative(nativeKeys=Object.keys)&&nativeKeys,nativeMax=Math.max,nativeMin=Math.min,NEGATIVE_INFINITY=Number.NEGATIVE_INFINITY,MAX_ARRAY_LENGTH=Math.pow(2,32)-1,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1,FLOAT64_BYTES_PER_ELEMENT=Float64Array?Float64Array.BYTES_PER_ELEMENT:0,MAX_SAFE_INTEGER=Math.pow(2,53)-1,support=lodash.support={};(function(x){var Ctor=function(){this.x=x},props=[];Ctor.prototype={valueOf:x,y:x};for(var key in new Ctor)props.push(key);support.funcDecomp=/\\bthis\\b/.test(function(){return this}),support.funcNames=\"string\"==typeof Function.name;try{support.nonEnumArgs=!propertyIsEnumerable.call(arguments,1)}catch(e){support.nonEnumArgs=!0}})(1,0);var baseAssign=nativeAssign||function(object,source){return null==source?object:baseCopy(source,getSymbols(source),baseCopy(source,keys(source),object))},baseEach=createBaseEach(baseForOwn),baseFor=createBaseFor();bufferSlice||(bufferClone=ArrayBuffer&&Uint8Array?function(buffer){var byteLength=buffer.byteLength,floatLength=Float64Array?floor(byteLength/FLOAT64_BYTES_PER_ELEMENT):0,offset=floatLength*FLOAT64_BYTES_PER_ELEMENT,result=new ArrayBuffer(byteLength);if(floatLength){var view=new Float64Array(result,0,floatLength);view.set(new Float64Array(buffer,0,floatLength))}return byteLength!=offset&&(view=new Uint8Array(result,offset),view.set(new Uint8Array(buffer,offset))),result}:constant(null));var getLength=baseProperty(\"length\"),getSymbols=getOwnPropertySymbols?function(object){return getOwnPropertySymbols(toObject(object))}:constant([]),findLastIndex=createFindIndex(!0),zip=restParam(unzip),forEach=createForEach(arrayEach,baseEach),isArray=nativeIsArray||function(value){return isObjectLike(value)&&isLength(value.length)&&objToString.call(value)==arrayTag},isFunction=baseIsFunction(/x/)||Uint8Array&&!baseIsFunction(Uint8Array)?function(value){return objToString.call(value)==funcTag}:baseIsFunction,isPlainObject=getPrototypeOf?function(value){if(!value||objToString.call(value)!=objectTag)return!1;var valueOf=value.valueOf,objProto=isNative(valueOf)&&(objProto=getPrototypeOf(valueOf))&&getPrototypeOf(objProto);return objProto?value==objProto||getPrototypeOf(value)==objProto:shimIsPlainObject(value)}:shimIsPlainObject,assign=createAssigner(function(object,source,customizer){return customizer?assignWith(object,source,customizer):baseAssign(object,source)}),keys=nativeKeys?function(object){if(object)var Ctor=object.constructor,length=object.length;return\"function\"==typeof Ctor&&Ctor.prototype===object||\"function\"!=typeof object&&isLength(length)?shimKeys(object):isObject(object)?nativeKeys(object):[]}:shimKeys,merge=createAssigner(baseMerge);lodash.assign=assign,lodash.callback=callback,lodash.constant=constant,lodash.forEach=forEach,lodash.keys=keys,lodash.keysIn=keysIn,lodash.merge=merge,lodash.property=property,lodash.reject=reject,lodash.restParam=restParam,lodash.slice=slice,lodash.toPlainObject=toPlainObject,lodash.unzip=unzip,lodash.values=values,lodash.zip=zip,lodash.each=forEach,lodash.extend=assign,lodash.iteratee=callback,lodash.clone=clone,lodash.escapeRegExp=escapeRegExp,lodash.findLastIndex=findLastIndex,lodash.has=has,lodash.identity=identity,lodash.includes=includes,lodash.indexOf=indexOf,lodash.isArguments=isArguments,lodash.isArray=isArray,lodash.isEmpty=isEmpty,lodash.isFunction=isFunction,lodash.isNative=isNative,lodash.isNumber=isNumber,lodash.isObject=isObject,lodash.isPlainObject=isPlainObject,lodash.isString=isString,lodash.isTypedArray=isTypedArray,lodash.last=last,lodash.some=some,lodash.any=some,lodash.contains=includes,lodash.include=includes,lodash.VERSION=VERSION,freeExports&&freeModule?moduleExports?(freeModule.exports=lodash)._=lodash:freeExports._=lodash:root._=lodash\n}).call(this)}).call(this,\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:\"undefined\"!=typeof window?window:{})},{}],\"/node_modules/jshint/src/jshint.js\":[function(_dereq_,module,exports){var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),vars=_dereq_(\"./vars.js\"),messages=_dereq_(\"./messages.js\"),Lexer=_dereq_(\"./lex.js\").Lexer,reg=_dereq_(\"./reg.js\"),state=_dereq_(\"./state.js\").state,style=_dereq_(\"./style.js\"),options=_dereq_(\"./options.js\"),scopeManager=_dereq_(\"./scope-manager.js\"),JSHINT=function(){\"use strict\";function checkOption(name,t){return name=name.trim(),/^[+-]W\\d{3}$/g.test(name)?!0:-1!==options.validNames.indexOf(name)||\"jslint\"===t.type||_.has(options.removed,name)?!0:(error(\"E001\",t,name),!1)}function isString(obj){return\"[object String]\"===Object.prototype.toString.call(obj)}function isIdentifier(tkn,value){return tkn?tkn.identifier&&tkn.value===value?!0:!1:!1}function isReserved(token){if(!token.reserved)return!1;var meta=token.meta;if(meta&&meta.isFutureReservedWord&&state.inES5()){if(!meta.es5)return!1;if(meta.strictOnly&&!state.option.strict&&!state.isStrict())return!1;if(token.isProperty)return!1}return!0}function supplant(str,data){return str.replace(/\\{([^{}]*)\\}/g,function(a,b){var r=data[b];return\"string\"==typeof r||\"number\"==typeof r?r:a})}function combine(dest,src){Object.keys(src).forEach(function(name){_.has(JSHINT.blacklist,name)||(dest[name]=src[name])})}function processenforceall(){if(state.option.enforceall){for(var enforceopt in options.bool.enforcing)void 0!==state.option[enforceopt]||options.noenforceall[enforceopt]||(state.option[enforceopt]=!0);for(var relaxopt in options.bool.relaxing)void 0===state.option[relaxopt]&&(state.option[relaxopt]=!1)}}function assume(){processenforceall(),state.option.esversion||state.option.moz||(state.option.esversion=state.option.es3?3:state.option.esnext?6:5),state.inES5()&&combine(predefined,vars.ecmaIdentifiers[5]),state.inES6()&&combine(predefined,vars.ecmaIdentifiers[6]),state.option.module&&(state.option.strict===!0&&(state.option.strict=\"global\"),state.inES6()||warning(\"W134\",state.tokens.next,\"module\",6)),state.option.couch&&combine(predefined,vars.couch),state.option.qunit&&combine(predefined,vars.qunit),state.option.rhino&&combine(predefined,vars.rhino),state.option.shelljs&&(combine(predefined,vars.shelljs),combine(predefined,vars.node)),state.option.typed&&combine(predefined,vars.typed),state.option.phantom&&(combine(predefined,vars.phantom),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.prototypejs&&combine(predefined,vars.prototypejs),state.option.node&&(combine(predefined,vars.node),combine(predefined,vars.typed),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.devel&&combine(predefined,vars.devel),state.option.dojo&&combine(predefined,vars.dojo),state.option.browser&&(combine(predefined,vars.browser),combine(predefined,vars.typed)),state.option.browserify&&(combine(predefined,vars.browser),combine(predefined,vars.typed),combine(predefined,vars.browserify),state.option.strict===!0&&(state.option.strict=\"global\")),state.option.nonstandard&&combine(predefined,vars.nonstandard),state.option.jasmine&&combine(predefined,vars.jasmine),state.option.jquery&&combine(predefined,vars.jquery),state.option.mootools&&combine(predefined,vars.mootools),state.option.worker&&combine(predefined,vars.worker),state.option.wsh&&combine(predefined,vars.wsh),state.option.globalstrict&&state.option.strict!==!1&&(state.option.strict=\"global\"),state.option.yui&&combine(predefined,vars.yui),state.option.mocha&&combine(predefined,vars.mocha)}function quit(code,line,chr){var percentage=Math.floor(100*(line/state.lines.length)),message=messages.errors[code].desc;throw{name:\"JSHintError\",line:line,character:chr,message:message+\" (\"+percentage+\"% scanned).\",raw:message,code:code}}function removeIgnoredMessages(){var ignored=state.ignoredLines;_.isEmpty(ignored)||(JSHINT.errors=_.reject(JSHINT.errors,function(err){return ignored[err.line]}))}function warning(code,t,a,b,c,d){var ch,l,w,msg;if(/^W\\d{3}$/.test(code)){if(state.ignored[code])return;msg=messages.warnings[code]}else/E\\d{3}/.test(code)?msg=messages.errors[code]:/I\\d{3}/.test(code)&&(msg=messages.info[code]);return t=t||state.tokens.next||{},\"(end)\"===t.id&&(t=state.tokens.curr),l=t.line||0,ch=t.from||0,w={id:\"(error)\",raw:msg.desc,code:msg.code,evidence:state.lines[l-1]||\"\",line:l,character:ch,scope:JSHINT.scope,a:a,b:b,c:c,d:d},w.reason=supplant(msg.desc,w),JSHINT.errors.push(w),removeIgnoredMessages(),JSHINT.errors.length>=state.option.maxerr&&quit(\"E043\",l,ch),w}function warningAt(m,l,ch,a,b,c,d){return warning(m,{line:l,from:ch},a,b,c,d)}function error(m,t,a,b,c,d){warning(m,t,a,b,c,d)}function errorAt(m,l,ch,a,b,c,d){return error(m,{line:l,from:ch},a,b,c,d)}function addInternalSrc(elem,src){var i;return i={id:\"(internal)\",elem:elem,value:src},JSHINT.internals.push(i),i}function doOption(){var nt=state.tokens.next,body=nt.body.match(/(-\\s+)?[^\\s,:]+(?:\\s*:\\s*(-\\s+)?[^\\s,]+)?/g)||[],predef={};if(\"globals\"===nt.type){body.forEach(function(g,idx){g=g.split(\":\");var key=(g[0]||\"\").trim(),val=(g[1]||\"\").trim();if(\"-\"===key||!key.length){if(idx>0&&idx===body.length-1)return;return error(\"E002\",nt),void 0}\"-\"===key.charAt(0)?(key=key.slice(1),val=!1,JSHINT.blacklist[key]=key,delete predefined[key]):predef[key]=\"true\"===val}),combine(predefined,predef);for(var key in predef)_.has(predef,key)&&(declared[key]=nt)}\"exported\"===nt.type&&body.forEach(function(e,idx){if(!e.length){if(idx>0&&idx===body.length-1)return;return error(\"E002\",nt),void 0}state.funct[\"(scope)\"].addExported(e)}),\"members\"===nt.type&&(membersOnly=membersOnly||{},body.forEach(function(m){var ch1=m.charAt(0),ch2=m.charAt(m.length-1);ch1!==ch2||'\"'!==ch1&&\"'\"!==ch1||(m=m.substr(1,m.length-2).replace('\\\\\"','\"')),membersOnly[m]=!1}));var numvals=[\"maxstatements\",\"maxparams\",\"maxdepth\",\"maxcomplexity\",\"maxerr\",\"maxlen\",\"indent\"];(\"jshint\"===nt.type||\"jslint\"===nt.type)&&(body.forEach(function(g){g=g.split(\":\");var key=(g[0]||\"\").trim(),val=(g[1]||\"\").trim();if(checkOption(key,nt))if(numvals.indexOf(key)>=0)if(\"false\"!==val){if(val=+val,\"number\"!=typeof val||!isFinite(val)||0>=val||Math.floor(val)!==val)return error(\"E032\",nt,g[1].trim()),void 0;state.option[key]=val}else state.option[key]=\"indent\"===key?4:!1;else{if(\"validthis\"===key)return state.funct[\"(global)\"]?void error(\"E009\"):\"true\"!==val&&\"false\"!==val?void error(\"E002\",nt):(state.option.validthis=\"true\"===val,void 0);if(\"quotmark\"!==key)if(\"shadow\"!==key)if(\"unused\"!==key)if(\"latedef\"!==key)if(\"ignore\"!==key)if(\"strict\"!==key){\"module\"===key&&(hasParsedCode(state.funct)||error(\"E055\",state.tokens.next,\"module\"));var esversions={es3:3,es5:5,esnext:6};if(!_.has(esversions,key)){if(\"esversion\"===key){switch(val){case\"5\":state.inES5(!0)&&warning(\"I003\");case\"3\":case\"6\":state.option.moz=!1,state.option.esversion=+val;break;case\"2015\":state.option.moz=!1,state.option.esversion=6;break;default:error(\"E002\",nt)}return hasParsedCode(state.funct)||error(\"E055\",state.tokens.next,\"esversion\"),void 0}var match=/^([+-])(W\\d{3})$/g.exec(key);if(match)return state.ignored[match[2]]=\"-\"===match[1],void 0;var tn;return\"true\"===val||\"false\"===val?(\"jslint\"===nt.type?(tn=options.renamed[key]||key,state.option[tn]=\"true\"===val,void 0!==options.inverted[tn]&&(state.option[tn]=!state.option[tn])):state.option[key]=\"true\"===val,\"newcap\"===key&&(state.option[\"(explicitNewcap)\"]=!0),void 0):(error(\"E002\",nt),void 0)}switch(val){case\"true\":state.option.moz=!1,state.option.esversion=esversions[key];break;case\"false\":state.option.moz||(state.option.esversion=5);break;default:error(\"E002\",nt)}}else switch(val){case\"true\":state.option.strict=!0;break;case\"false\":state.option.strict=!1;break;case\"func\":case\"global\":case\"implied\":state.option.strict=val;break;default:error(\"E002\",nt)}else switch(val){case\"line\":state.ignoredLines[nt.line]=!0,removeIgnoredMessages();break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.latedef=!0;break;case\"false\":state.option.latedef=!1;break;case\"nofunc\":state.option.latedef=\"nofunc\";break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.unused=!0;break;case\"false\":state.option.unused=!1;break;case\"vars\":case\"strict\":state.option.unused=val;break;default:error(\"E002\",nt)}else switch(val){case\"true\":state.option.shadow=!0;break;case\"outer\":state.option.shadow=\"outer\";break;case\"false\":case\"inner\":state.option.shadow=\"inner\";break;default:error(\"E002\",nt)}else switch(val){case\"true\":case\"false\":state.option.quotmark=\"true\"===val;break;case\"double\":case\"single\":state.option.quotmark=val;break;default:error(\"E002\",nt)}}}),assume())}function peek(p){var t,i=p||0,j=lookahead.length;if(j>i)return lookahead[i];for(;i>=j;)t=lookahead[j],t||(t=lookahead[j]=lex.token()),j+=1;return t||\"(end)\"!==state.tokens.next.id?t:state.tokens.next}function peekIgnoreEOL(){var t,i=0;do t=peek(i++);while(\"(endline)\"===t.id);return t}function advance(id,t){switch(state.tokens.curr.id){case\"(number)\":\".\"===state.tokens.next.id&&warning(\"W005\",state.tokens.curr);break;case\"-\":(\"-\"===state.tokens.next.id||\"--\"===state.tokens.next.id)&&warning(\"W006\");break;case\"+\":(\"+\"===state.tokens.next.id||\"++\"===state.tokens.next.id)&&warning(\"W007\")}for(id&&state.tokens.next.id!==id&&(t?\"(end)\"===state.tokens.next.id?error(\"E019\",t,t.id):error(\"E020\",state.tokens.next,id,t.id,t.line,state.tokens.next.value):(\"(identifier)\"!==state.tokens.next.type||state.tokens.next.value!==id)&&warning(\"W116\",state.tokens.next,id,state.tokens.next.value)),state.tokens.prev=state.tokens.curr,state.tokens.curr=state.tokens.next;;){if(state.tokens.next=lookahead.shift()||lex.token(),state.tokens.next||quit(\"E041\",state.tokens.curr.line),\"(end)\"===state.tokens.next.id||\"(error)\"===state.tokens.next.id)return;if(state.tokens.next.check&&state.tokens.next.check(),state.tokens.next.isSpecial)\"falls through\"===state.tokens.next.type?state.tokens.curr.caseFallsThrough=!0:doOption();else if(\"(endline)\"!==state.tokens.next.id)break}}function isInfix(token){return token.infix||!token.identifier&&!token.template&&!!token.led}function isEndOfExpr(){var curr=state.tokens.curr,next=state.tokens.next;return\";\"===next.id||\"}\"===next.id||\":\"===next.id?!0:isInfix(next)===isInfix(curr)||\"yield\"===curr.id&&state.inMoz()?curr.line!==startLine(next):!1}function isBeginOfExpr(prev){return!prev.left&&\"unary\"!==prev.arity}function expression(rbp,initial){var left,isArray=!1,isObject=!1,isLetExpr=!1;state.nameStack.push(),initial||\"let\"!==state.tokens.next.value||\"(\"!==peek(0).value||(state.inMoz()||warning(\"W118\",state.tokens.next,\"let expressions\"),isLetExpr=!0,state.funct[\"(scope)\"].stack(),advance(\"let\"),advance(\"(\"),state.tokens.prev.fud(),advance(\")\")),\"(end)\"===state.tokens.next.id&&error(\"E006\",state.tokens.curr);var isDangerous=state.option.asi&&state.tokens.prev.line!==startLine(state.tokens.curr)&&_.contains([\"]\",\")\"],state.tokens.prev.id)&&_.contains([\"[\",\"(\"],state.tokens.curr.id);if(isDangerous&&warning(\"W014\",state.tokens.curr,state.tokens.curr.id),advance(),initial&&(state.funct[\"(verb)\"]=state.tokens.curr.value,state.tokens.curr.beginsStmt=!0),initial===!0&&state.tokens.curr.fud)left=state.tokens.curr.fud();else for(state.tokens.curr.nud?left=state.tokens.curr.nud():error(\"E030\",state.tokens.curr,state.tokens.curr.id);(state.tokens.next.lbp>rbp||\"(template)\"===state.tokens.next.type)&&!isEndOfExpr();)isArray=\"Array\"===state.tokens.curr.value,isObject=\"Object\"===state.tokens.curr.value,left&&(left.value||left.first&&left.first.value)&&(\"new\"!==left.value||left.first&&left.first.value&&\".\"===left.first.value)&&(isArray=!1,left.value!==state.tokens.curr.value&&(isObject=!1)),advance(),isArray&&\"(\"===state.tokens.curr.id&&\")\"===state.tokens.next.id&&warning(\"W009\",state.tokens.curr),isObject&&\"(\"===state.tokens.curr.id&&\")\"===state.tokens.next.id&&warning(\"W010\",state.tokens.curr),left&&state.tokens.curr.led?left=state.tokens.curr.led(left):error(\"E033\",state.tokens.curr,state.tokens.curr.id);return isLetExpr&&state.funct[\"(scope)\"].unstack(),state.nameStack.pop(),left}function startLine(token){return token.startLine||token.line}function nobreaknonadjacent(left,right){left=left||state.tokens.curr,right=right||state.tokens.next,state.option.laxbreak||left.line===startLine(right)||warning(\"W014\",right,right.value)}function nolinebreak(t){t=t||state.tokens.curr,t.line!==startLine(state.tokens.next)&&warning(\"E022\",t,t.value)}function nobreakcomma(left,right){left.line!==startLine(right)&&(state.option.laxcomma||(comma.first&&(warning(\"I001\"),comma.first=!1),warning(\"W014\",left,right.value)))}function comma(opts){if(opts=opts||{},opts.peek?nobreakcomma(state.tokens.prev,state.tokens.curr):(nobreakcomma(state.tokens.curr,state.tokens.next),advance(\",\")),state.tokens.next.identifier&&(!opts.property||!state.inES5()))switch(state.tokens.next.value){case\"break\":case\"case\":case\"catch\":case\"continue\":case\"default\":case\"do\":case\"else\":case\"finally\":case\"for\":case\"if\":case\"in\":case\"instanceof\":case\"return\":case\"switch\":case\"throw\":case\"try\":case\"var\":case\"let\":case\"while\":case\"with\":return error(\"E024\",state.tokens.next,state.tokens.next.value),!1}if(\"(punctuator)\"===state.tokens.next.type)switch(state.tokens.next.value){case\"}\":case\"]\":case\",\":if(opts.allowTrailing)return!0;case\")\":return error(\"E024\",state.tokens.next,state.tokens.next.value),!1}return!0}function symbol(s,p){var x=state.syntax[s];return x&&\"object\"==typeof x||(state.syntax[s]=x={id:s,lbp:p,value:s}),x}function delim(s){var x=symbol(s,0);return x.delim=!0,x}function stmt(s,f){var x=delim(s);return x.identifier=x.reserved=!0,x.fud=f,x}function blockstmt(s,f){var x=stmt(s,f);return x.block=!0,x}function reserveName(x){var c=x.id.charAt(0);return(c>=\"a\"&&\"z\">=c||c>=\"A\"&&\"Z\">=c)&&(x.identifier=x.reserved=!0),x}function prefix(s,f){var x=symbol(s,150);return reserveName(x),x.nud=\"function\"==typeof f?f:function(){return this.arity=\"unary\",this.right=expression(150),(\"++\"===this.id||\"--\"===this.id)&&(state.option.plusplus?warning(\"W016\",this,this.id):!this.right||this.right.identifier&&!isReserved(this.right)||\".\"===this.right.id||\"[\"===this.right.id||warning(\"W017\",this),this.right&&this.right.isMetaProperty?error(\"E031\",this):this.right&&this.right.identifier&&state.funct[\"(scope)\"].block.modify(this.right.value,this)),this},x}function type(s,f){var x=delim(s);return x.type=s,x.nud=f,x}function reserve(name,func){var x=type(name,func);return x.identifier=!0,x.reserved=!0,x}function FutureReservedWord(name,meta){var x=type(name,meta&&meta.nud||function(){return this});return meta=meta||{},meta.isFutureReservedWord=!0,x.value=name,x.identifier=!0,x.reserved=!0,x.meta=meta,x}function reservevar(s,v){return reserve(s,function(){return\"function\"==typeof v&&v(this),this})}function infix(s,f,p,w){var x=symbol(s,p);return reserveName(x),x.infix=!0,x.led=function(left){return w||nobreaknonadjacent(state.tokens.prev,state.tokens.curr),\"in\"!==s&&\"instanceof\"!==s||\"!\"!==left.id||warning(\"W018\",left,\"!\"),\"function\"==typeof f?f(left,this):(this.left=left,this.right=expression(p),this)},x}function application(s){var x=symbol(s,42);return x.led=function(left){return nobreaknonadjacent(state.tokens.prev,state.tokens.curr),this.left=left,this.right=doFunction({type:\"arrow\",loneArg:left}),this},x}function relation(s,f){var x=symbol(s,100);return x.led=function(left){nobreaknonadjacent(state.tokens.prev,state.tokens.curr),this.left=left;var right=this.right=expression(100);return isIdentifier(left,\"NaN\")||isIdentifier(right,\"NaN\")?warning(\"W019\",this):f&&f.apply(this,[left,right]),left&&right||quit(\"E041\",state.tokens.curr.line),\"!\"===left.id&&warning(\"W018\",left,\"!\"),\"!\"===right.id&&warning(\"W018\",right,\"!\"),this},x}function isPoorRelation(node){return node&&(\"(number)\"===node.type&&0===+node.value||\"(string)\"===node.type&&\"\"===node.value||\"null\"===node.type&&!state.option.eqnull||\"true\"===node.type||\"false\"===node.type||\"undefined\"===node.type)}function isTypoTypeof(left,right,state){var values;return state.option.notypeof?!1:left&&right?(values=state.inES6()?typeofValues.es6:typeofValues.es3,\"(identifier)\"===right.type&&\"typeof\"===right.value&&\"(string)\"===left.type?!_.contains(values,left.value):!1):!1}function isGlobalEval(left,state){var isGlobal=!1;return\"this\"===left.type&&null===state.funct[\"(context)\"]?isGlobal=!0:\"(identifier)\"===left.type&&(state.option.node&&\"global\"===left.value?isGlobal=!0:!state.option.browser||\"window\"!==left.value&&\"document\"!==left.value||(isGlobal=!0)),isGlobal}function findNativePrototype(left){function walkPrototype(obj){return\"object\"==typeof obj?\"prototype\"===obj.right?obj:walkPrototype(obj.left):void 0}function walkNative(obj){for(;!obj.identifier&&\"object\"==typeof obj.left;)obj=obj.left;return obj.identifier&&natives.indexOf(obj.value)>=0?obj.value:void 0}var natives=[\"Array\",\"ArrayBuffer\",\"Boolean\",\"Collator\",\"DataView\",\"Date\",\"DateTimeFormat\",\"Error\",\"EvalError\",\"Float32Array\",\"Float64Array\",\"Function\",\"Infinity\",\"Intl\",\"Int16Array\",\"Int32Array\",\"Int8Array\",\"Iterator\",\"Number\",\"NumberFormat\",\"Object\",\"RangeError\",\"ReferenceError\",\"RegExp\",\"StopIteration\",\"String\",\"SyntaxError\",\"TypeError\",\"Uint16Array\",\"Uint32Array\",\"Uint8Array\",\"Uint8ClampedArray\",\"URIError\"],prototype=walkPrototype(left);return prototype?walkNative(prototype):void 0}function checkLeftSideAssign(left,assignToken,options){var allowDestructuring=options&&options.allowDestructuring;if(assignToken=assignToken||left,state.option.freeze){var nativeObject=findNativePrototype(left);nativeObject&&warning(\"W121\",left,nativeObject)}return left.identifier&&!left.isMetaProperty&&state.funct[\"(scope)\"].block.reassign(left.value,left),\".\"===left.id?((!left.left||\"arguments\"===left.left.value&&!state.isStrict())&&warning(\"E031\",assignToken),state.nameStack.set(state.tokens.prev),!0):\"{\"===left.id||\"[\"===left.id?(allowDestructuring&&state.tokens.curr.left.destructAssign?state.tokens.curr.left.destructAssign.forEach(function(t){t.id&&state.funct[\"(scope)\"].block.modify(t.id,t.token)}):\"{\"!==left.id&&left.left?\"arguments\"!==left.left.value||state.isStrict()||warning(\"E031\",assignToken):warning(\"E031\",assignToken),\"[\"===left.id&&state.nameStack.set(left.right),!0):left.isMetaProperty?(error(\"E031\",assignToken),!0):left.identifier&&!isReserved(left)?(\"exception\"===state.funct[\"(scope)\"].labeltype(left.value)&&warning(\"W022\",left),state.nameStack.set(left),!0):(left===state.syntax[\"function\"]&&warning(\"W023\",state.tokens.curr),!1)}function assignop(s,f,p){var x=infix(s,\"function\"==typeof f?f:function(left,that){return that.left=left,left&&checkLeftSideAssign(left,that,{allowDestructuring:!0})?(that.right=expression(10),that):(error(\"E031\",that),void 0)},p);return x.exps=!0,x.assign=!0,x}function bitwise(s,f,p){var x=symbol(s,p);return reserveName(x),x.led=\"function\"==typeof f?f:function(left){return state.option.bitwise&&warning(\"W016\",this,this.id),this.left=left,this.right=expression(p),this},x}function bitwiseassignop(s){return assignop(s,function(left,that){return state.option.bitwise&&warning(\"W016\",that,that.id),left&&checkLeftSideAssign(left,that)?(that.right=expression(10),that):(error(\"E031\",that),void 0)},20)}function suffix(s){var x=symbol(s,150);return x.led=function(left){return state.option.plusplus?warning(\"W016\",this,this.id):left.identifier&&!isReserved(left)||\".\"===left.id||\"[\"===left.id||warning(\"W017\",this),left.isMetaProperty?error(\"E031\",this):left&&left.identifier&&state.funct[\"(scope)\"].block.modify(left.value,left),this.left=left,this},x}function optionalidentifier(fnparam,prop,preserve){if(state.tokens.next.identifier){preserve||advance();var curr=state.tokens.curr,val=state.tokens.curr.value;return isReserved(curr)?prop&&state.inES5()?val:fnparam&&\"undefined\"===val?val:(warning(\"W024\",state.tokens.curr,state.tokens.curr.id),val):val}}function identifier(fnparam,prop){var i=optionalidentifier(fnparam,prop,!1);if(i)return i;if(\"...\"===state.tokens.next.value){if(state.inES6(!0)||warning(\"W119\",state.tokens.next,\"spread/rest operator\",\"6\"),advance(),checkPunctuator(state.tokens.next,\"...\"))for(warning(\"E024\",state.tokens.next,\"...\");checkPunctuator(state.tokens.next,\"...\");)advance();return state.tokens.next.identifier?identifier(fnparam,prop):(warning(\"E024\",state.tokens.curr,\"...\"),void 0)}error(\"E030\",state.tokens.next,state.tokens.next.value),\";\"!==state.tokens.next.id&&advance()}function reachable(controlToken){var t,i=0;if(\";\"===state.tokens.next.id&&!controlToken.inBracelessBlock)for(;;){do t=peek(i),i+=1;while(\"(end)\"!==t.id&&\"(comment)\"===t.id);if(t.reach)return;if(\"(endline)\"!==t.id){if(\"function\"===t.id){state.option.latedef===!0&&warning(\"W026\",t);break}warning(\"W027\",t,t.value,controlToken.value);break}}}function parseFinalSemicolon(){if(\";\"!==state.tokens.next.id){if(state.tokens.next.isUnclosed)return advance();var sameLine=startLine(state.tokens.next)===state.tokens.curr.line&&\"(end)\"!==state.tokens.next.id,blockEnd=checkPunctuator(state.tokens.next,\"}\");sameLine&&!blockEnd?errorAt(\"E058\",state.tokens.curr.line,state.tokens.curr.character):state.option.asi||(blockEnd&&!state.option.lastsemic||!sameLine)&&warningAt(\"W033\",state.tokens.curr.line,state.tokens.curr.character)}else advance(\";\")}function statement(){var r,i=indent,t=state.tokens.next,hasOwnScope=!1;if(\";\"===t.id)return advance(\";\"),void 0;var res=isReserved(t);if(res&&t.meta&&t.meta.isFutureReservedWord&&\":\"===peek().id&&(warning(\"W024\",t,t.id),res=!1),t.identifier&&!res&&\":\"===peek().id&&(advance(),advance(\":\"),hasOwnScope=!0,state.funct[\"(scope)\"].stack(),state.funct[\"(scope)\"].block.addBreakLabel(t.value,{token:state.tokens.curr}),state.tokens.next.labelled||\"{\"===state.tokens.next.value||warning(\"W028\",state.tokens.next,t.value,state.tokens.next.value),state.tokens.next.label=t.value,t=state.tokens.next),\"{\"===t.id){var iscase=\"case\"===state.funct[\"(verb)\"]&&\":\"===state.tokens.curr.value;return block(!0,!0,!1,!1,iscase),void 0}return r=expression(0,!0),!r||r.identifier&&\"function\"===r.value||\"(punctuator)\"===r.type&&r.left&&r.left.identifier&&\"function\"===r.left.value||state.isStrict()||\"global\"!==state.option.strict||warning(\"E007\"),t.block||(state.option.expr||r&&r.exps?state.option.nonew&&r&&r.left&&\"(\"===r.id&&\"new\"===r.left.id&&warning(\"W031\",t):warning(\"W030\",state.tokens.curr),parseFinalSemicolon()),indent=i,hasOwnScope&&state.funct[\"(scope)\"].unstack(),r}function statements(){for(var p,a=[];!state.tokens.next.reach&&\"(end)\"!==state.tokens.next.id;)\";\"===state.tokens.next.id?(p=peek(),(!p||\"(\"!==p.id&&\"[\"!==p.id)&&warning(\"W032\"),advance(\";\")):a.push(statement());return a}function directives(){for(var i,p,pn;\"(string)\"===state.tokens.next.id;){if(p=peek(0),\"(endline)\"===p.id){i=1;do pn=peek(i++);while(\"(endline)\"===pn.id);if(\";\"===pn.id)p=pn;else{if(\"[\"===pn.value||\".\"===pn.value)break;state.option.asi&&\"(\"!==pn.value||warning(\"W033\",state.tokens.next)}}else{if(\".\"===p.id||\"[\"===p.id)break;\";\"!==p.id&&warning(\"W033\",p)}advance();var directive=state.tokens.curr.value;(state.directive[directive]||\"use strict\"===directive&&\"implied\"===state.option.strict)&&warning(\"W034\",state.tokens.curr,directive),state.directive[directive]=!0,\";\"===p.id&&advance(\";\")}state.isStrict()&&(state.option[\"(explicitNewcap)\"]||(state.option.newcap=!0),state.option.undef=!0)}function block(ordinary,stmt,isfunc,isfatarrow,iscase){var a,m,t,line,d,b=inblock,old_indent=indent;inblock=ordinary,t=state.tokens.next;var metrics=state.funct[\"(metrics)\"];if(metrics.nestedBlockDepth+=1,metrics.verifyMaxNestedBlockDepthPerFunction(),\"{\"===state.tokens.next.id){if(advance(\"{\"),state.funct[\"(scope)\"].stack(),line=state.tokens.curr.line,\"}\"!==state.tokens.next.id){for(indent+=state.option.indent;!ordinary&&state.tokens.next.from>indent;)indent+=state.option.indent;if(isfunc){m={};for(d in state.directive)_.has(state.directive,d)&&(m[d]=state.directive[d]);directives(),state.option.strict&&state.funct[\"(context)\"][\"(global)\"]&&(m[\"use strict\"]||state.isStrict()||warning(\"E007\"))}a=statements(),metrics.statementCount+=a.length,indent-=state.option.indent}advance(\"}\",t),isfunc&&(state.funct[\"(scope)\"].validateParams(),m&&(state.directive=m)),state.funct[\"(scope)\"].unstack(),indent=old_indent}else if(ordinary)state.funct[\"(noblockscopedvar)\"]=\"for\"!==state.tokens.next.id,state.funct[\"(scope)\"].stack(),(!stmt||state.option.curly)&&warning(\"W116\",state.tokens.next,\"{\",state.tokens.next.value),state.tokens.next.inBracelessBlock=!0,indent+=state.option.indent,a=[statement()],indent-=state.option.indent,state.funct[\"(scope)\"].unstack(),delete state.funct[\"(noblockscopedvar)\"];else if(isfunc){if(state.funct[\"(scope)\"].stack(),m={},!stmt||isfatarrow||state.inMoz()||error(\"W118\",state.tokens.curr,\"function closure expressions\"),!stmt)for(d in state.directive)_.has(state.directive,d)&&(m[d]=state.directive[d]);expression(10),state.option.strict&&state.funct[\"(context)\"][\"(global)\"]&&(m[\"use strict\"]||state.isStrict()||warning(\"E007\")),state.funct[\"(scope)\"].unstack()}else error(\"E021\",state.tokens.next,\"{\",state.tokens.next.value);switch(state.funct[\"(verb)\"]){case\"break\":case\"continue\":case\"return\":case\"throw\":if(iscase)break;default:state.funct[\"(verb)\"]=null}return inblock=b,!ordinary||!state.option.noempty||a&&0!==a.length||warning(\"W035\",state.tokens.prev),metrics.nestedBlockDepth-=1,a}function countMember(m){membersOnly&&\"boolean\"!=typeof membersOnly[m]&&warning(\"W036\",state.tokens.curr,m),\"number\"==typeof member[m]?member[m]+=1:member[m]=1}function comprehensiveArrayExpression(){var res={};res.exps=!0,state.funct[\"(comparray)\"].stack();var reversed=!1;return\"for\"!==state.tokens.next.value&&(reversed=!0,state.inMoz()||warning(\"W116\",state.tokens.next,\"for\",state.tokens.next.value),state.funct[\"(comparray)\"].setState(\"use\"),res.right=expression(10)),advance(\"for\"),\"each\"===state.tokens.next.value&&(advance(\"each\"),state.inMoz()||warning(\"W118\",state.tokens.curr,\"for each\")),advance(\"(\"),state.funct[\"(comparray)\"].setState(\"define\"),res.left=expression(130),_.contains([\"in\",\"of\"],state.tokens.next.value)?advance():error(\"E045\",state.tokens.curr),state.funct[\"(comparray)\"].setState(\"generate\"),expression(10),advance(\")\"),\"if\"===state.tokens.next.value&&(advance(\"if\"),advance(\"(\"),state.funct[\"(comparray)\"].setState(\"filter\"),res.filter=expression(10),advance(\")\")),reversed||(state.funct[\"(comparray)\"].setState(\"use\"),res.right=expression(10)),advance(\"]\"),state.funct[\"(comparray)\"].unstack(),res}function isMethod(){return state.funct[\"(statement)\"]&&\"class\"===state.funct[\"(statement)\"].type||state.funct[\"(context)\"]&&\"class\"===state.funct[\"(context)\"][\"(verb)\"]}function isPropertyName(token){return token.identifier||\"(string)\"===token.id||\"(number)\"===token.id}function propertyName(preserveOrToken){var id,preserve=!0;return\"object\"==typeof preserveOrToken?id=preserveOrToken:(preserve=preserveOrToken,id=optionalidentifier(!1,!0,preserve)),id?\"object\"==typeof id&&(\"(string)\"===id.id||\"(identifier)\"===id.id?id=id.value:\"(number)\"===id.id&&(id=\"\"+id.value)):\"(string)\"===state.tokens.next.id?(id=state.tokens.next.value,preserve||advance()):\"(number)\"===state.tokens.next.id&&(id=\"\"+state.tokens.next.value,preserve||advance()),\"hasOwnProperty\"===id&&warning(\"W001\"),id}function functionparams(options){function addParam(addParamArgs){state.funct[\"(scope)\"].addParam.apply(state.funct[\"(scope)\"],addParamArgs)}var next,ident,t,paramsIds=[],tokens=[],pastDefault=!1,pastRest=!1,arity=0,loneArg=options&&options.loneArg;if(loneArg&&loneArg.identifier===!0)return state.funct[\"(scope)\"].addParam(loneArg.value,loneArg),{arity:1,params:[loneArg.value]};if(next=state.tokens.next,options&&options.parsedOpening||advance(\"(\"),\")\"===state.tokens.next.id)return advance(\")\"),void 0;for(;;){arity++;var currentParams=[];if(_.contains([\"{\",\"[\"],state.tokens.next.id)){tokens=destructuringPattern();for(t in tokens)t=tokens[t],t.id&&(paramsIds.push(t.id),currentParams.push([t.id,t.token]))}else if(checkPunctuator(state.tokens.next,\"...\")&&(pastRest=!0),ident=identifier(!0))paramsIds.push(ident),currentParams.push([ident,state.tokens.curr]);else for(;!checkPunctuators(state.tokens.next,[\",\",\")\"]);)advance();if(pastDefault&&\"=\"!==state.tokens.next.id&&error(\"W138\",state.tokens.current),\"=\"===state.tokens.next.id&&(state.inES6()||warning(\"W119\",state.tokens.next,\"default parameters\",\"6\"),advance(\"=\"),pastDefault=!0,expression(10)),currentParams.forEach(addParam),\",\"!==state.tokens.next.id)return advance(\")\",next),{arity:arity,params:paramsIds};pastRest&&warning(\"W131\",state.tokens.next),comma()}}function functor(name,token,overwrites){var funct={\"(name)\":name,\"(breakage)\":0,\"(loopage)\":0,\"(tokens)\":{},\"(properties)\":{},\"(catch)\":!1,\"(global)\":!1,\"(line)\":null,\"(character)\":null,\"(metrics)\":null,\"(statement)\":null,\"(context)\":null,\"(scope)\":null,\"(comparray)\":null,\"(generator)\":null,\"(arrow)\":null,\"(params)\":null};return token&&_.extend(funct,{\"(line)\":token.line,\"(character)\":token.character,\"(metrics)\":createMetrics(token)}),_.extend(funct,overwrites),funct[\"(context)\"]&&(funct[\"(scope)\"]=funct[\"(context)\"][\"(scope)\"],funct[\"(comparray)\"]=funct[\"(context)\"][\"(comparray)\"]),funct}function isFunctor(token){return\"(scope)\"in token}function hasParsedCode(funct){return funct[\"(global)\"]&&!funct[\"(verb)\"]}function doTemplateLiteral(left){function end(){if(state.tokens.curr.template&&state.tokens.curr.tail&&state.tokens.curr.context===ctx)return!0;var complete=state.tokens.next.template&&state.tokens.next.tail&&state.tokens.next.context===ctx;return complete&&advance(),complete||state.tokens.next.isUnclosed}var ctx=this.context,noSubst=this.noSubst,depth=this.depth;if(!noSubst)for(;!end();)!state.tokens.next.template||state.tokens.next.depth>depth?expression(0):advance();return{id:\"(template)\",type:\"(template)\",tag:left}}function doFunction(options){var f,token,name,statement,classExprBinding,isGenerator,isArrow,ignoreLoopFunc,oldOption=state.option,oldIgnored=state.ignored;options&&(name=options.name,statement=options.statement,classExprBinding=options.classExprBinding,isGenerator=\"generator\"===options.type,isArrow=\"arrow\"===options.type,ignoreLoopFunc=options.ignoreLoopFunc),state.option=Object.create(state.option),state.ignored=Object.create(state.ignored),state.funct=functor(name||state.nameStack.infer(),state.tokens.next,{\"(statement)\":statement,\"(context)\":state.funct,\"(arrow)\":isArrow,\"(generator)\":isGenerator}),f=state.funct,token=state.tokens.curr,token.funct=state.funct,functions.push(state.funct),state.funct[\"(scope)\"].stack(\"functionouter\");var internallyAccessibleName=name||classExprBinding;internallyAccessibleName&&state.funct[\"(scope)\"].block.add(internallyAccessibleName,classExprBinding?\"class\":\"function\",state.tokens.curr,!1),state.funct[\"(scope)\"].stack(\"functionparams\");var paramsInfo=functionparams(options);return paramsInfo?(state.funct[\"(params)\"]=paramsInfo.params,state.funct[\"(metrics)\"].arity=paramsInfo.arity,state.funct[\"(metrics)\"].verifyMaxParametersPerFunction()):state.funct[\"(metrics)\"].arity=0,isArrow&&(state.inES6(!0)||warning(\"W119\",state.tokens.curr,\"arrow function syntax (=>)\",\"6\"),options.loneArg||advance(\"=>\")),block(!1,!0,!0,isArrow),!state.option.noyield&&isGenerator&&\"yielded\"!==state.funct[\"(generator)\"]&&warning(\"W124\",state.tokens.curr),state.funct[\"(metrics)\"].verifyMaxStatementsPerFunction(),state.funct[\"(metrics)\"].verifyMaxComplexityPerFunction(),state.funct[\"(unusedOption)\"]=state.option.unused,state.option=oldOption,state.ignored=oldIgnored,state.funct[\"(last)\"]=state.tokens.curr.line,state.funct[\"(lastcharacter)\"]=state.tokens.curr.character,state.funct[\"(scope)\"].unstack(),state.funct[\"(scope)\"].unstack(),state.funct=state.funct[\"(context)\"],ignoreLoopFunc||state.option.loopfunc||!state.funct[\"(loopage)\"]||f[\"(isCapturing)\"]&&warning(\"W083\",token),f}function createMetrics(functionStartToken){return{statementCount:0,nestedBlockDepth:-1,ComplexityCount:1,arity:0,verifyMaxStatementsPerFunction:function(){state.option.maxstatements&&this.statementCount>state.option.maxstatements&&warning(\"W071\",functionStartToken,this.statementCount)\n},verifyMaxParametersPerFunction:function(){_.isNumber(state.option.maxparams)&&this.arity>state.option.maxparams&&warning(\"W072\",functionStartToken,this.arity)},verifyMaxNestedBlockDepthPerFunction:function(){state.option.maxdepth&&this.nestedBlockDepth>0&&this.nestedBlockDepth===state.option.maxdepth+1&&warning(\"W073\",null,this.nestedBlockDepth)},verifyMaxComplexityPerFunction:function(){var max=state.option.maxcomplexity,cc=this.ComplexityCount;max&&cc>max&&warning(\"W074\",functionStartToken,cc)}}}function increaseComplexityCount(){state.funct[\"(metrics)\"].ComplexityCount+=1}function checkCondAssignment(expr){var id,paren;switch(expr&&(id=expr.id,paren=expr.paren,\",\"===id&&(expr=expr.exprs[expr.exprs.length-1])&&(id=expr.id,paren=paren||expr.paren)),id){case\"=\":case\"+=\":case\"-=\":case\"*=\":case\"%=\":case\"&=\":case\"|=\":case\"^=\":case\"/=\":paren||state.option.boss||warning(\"W084\")}}function checkProperties(props){if(state.inES5())for(var name in props)props[name]&&props[name].setterToken&&!props[name].getterToken&&warning(\"W078\",props[name].setterToken)}function metaProperty(name,c){if(checkPunctuator(state.tokens.next,\".\")){var left=state.tokens.curr.id;advance(\".\");var id=identifier();return state.tokens.curr.isMetaProperty=!0,name!==id?error(\"E057\",state.tokens.prev,left,id):c(),state.tokens.curr}}function destructuringPattern(options){var isAssignment=options&&options.assignment;return state.inES6()||warning(\"W104\",state.tokens.curr,isAssignment?\"destructuring assignment\":\"destructuring binding\",\"6\"),destructuringPatternRecursive(options)}function destructuringPatternRecursive(options){var ids,identifiers=[],openingParsed=options&&options.openingParsed,isAssignment=options&&options.assignment,recursiveOptions=isAssignment?{assignment:isAssignment}:null,firstToken=openingParsed?state.tokens.curr:state.tokens.next,nextInnerDE=function(){var ident;if(checkPunctuators(state.tokens.next,[\"[\",\"{\"])){ids=destructuringPatternRecursive(recursiveOptions);for(var id in ids)id=ids[id],identifiers.push({id:id.id,token:id.token})}else if(checkPunctuator(state.tokens.next,\",\"))identifiers.push({id:null,token:state.tokens.curr});else{if(!checkPunctuator(state.tokens.next,\"(\")){var is_rest=checkPunctuator(state.tokens.next,\"...\");if(isAssignment){var identifierToken=is_rest?peek(0):state.tokens.next;identifierToken.identifier||warning(\"E030\",identifierToken,identifierToken.value);var assignTarget=expression(155);assignTarget&&(checkLeftSideAssign(assignTarget),assignTarget.identifier&&(ident=assignTarget.value))}else ident=identifier();return ident&&identifiers.push({id:ident,token:state.tokens.curr}),is_rest}advance(\"(\"),nextInnerDE(),advance(\")\")}return!1},assignmentProperty=function(){var id;checkPunctuator(state.tokens.next,\"[\")?(advance(\"[\"),expression(10),advance(\"]\"),advance(\":\"),nextInnerDE()):\"(string)\"===state.tokens.next.id||\"(number)\"===state.tokens.next.id?(advance(),advance(\":\"),nextInnerDE()):(id=identifier(),checkPunctuator(state.tokens.next,\":\")?(advance(\":\"),nextInnerDE()):id&&(isAssignment&&checkLeftSideAssign(state.tokens.curr),identifiers.push({id:id,token:state.tokens.curr})))};if(checkPunctuator(firstToken,\"[\")){openingParsed||advance(\"[\"),checkPunctuator(state.tokens.next,\"]\")&&warning(\"W137\",state.tokens.curr);for(var element_after_rest=!1;!checkPunctuator(state.tokens.next,\"]\");)nextInnerDE()&&!element_after_rest&&checkPunctuator(state.tokens.next,\",\")&&(warning(\"W130\",state.tokens.next),element_after_rest=!0),checkPunctuator(state.tokens.next,\"=\")&&(checkPunctuator(state.tokens.prev,\"...\")?advance(\"]\"):advance(\"=\"),\"undefined\"===state.tokens.next.id&&warning(\"W080\",state.tokens.prev,state.tokens.prev.value),expression(10)),checkPunctuator(state.tokens.next,\"]\")||advance(\",\");advance(\"]\")}else if(checkPunctuator(firstToken,\"{\")){for(openingParsed||advance(\"{\"),checkPunctuator(state.tokens.next,\"}\")&&warning(\"W137\",state.tokens.curr);!checkPunctuator(state.tokens.next,\"}\")&&(assignmentProperty(),checkPunctuator(state.tokens.next,\"=\")&&(advance(\"=\"),\"undefined\"===state.tokens.next.id&&warning(\"W080\",state.tokens.prev,state.tokens.prev.value),expression(10)),checkPunctuator(state.tokens.next,\"}\")||(advance(\",\"),!checkPunctuator(state.tokens.next,\"}\"))););advance(\"}\")}return identifiers}function destructuringPatternMatch(tokens,value){var first=value.first;first&&_.zip(tokens,Array.isArray(first)?first:[first]).forEach(function(val){var token=val[0],value=val[1];token&&value?token.first=value:token&&token.first&&!value&&warning(\"W080\",token.first,token.first.value)})}function blockVariableStatement(type,statement,context){var tokens,lone,value,letblock,prefix=context&&context.prefix,inexport=context&&context.inexport,isLet=\"let\"===type,isConst=\"const\"===type;for(state.inES6()||warning(\"W104\",state.tokens.curr,type,\"6\"),isLet&&\"(\"===state.tokens.next.value?(state.inMoz()||warning(\"W118\",state.tokens.next,\"let block\"),advance(\"(\"),state.funct[\"(scope)\"].stack(),letblock=!0):state.funct[\"(noblockscopedvar)\"]&&error(\"E048\",state.tokens.curr,isConst?\"Const\":\"Let\"),statement.first=[];;){var names=[];_.contains([\"{\",\"[\"],state.tokens.next.value)?(tokens=destructuringPattern(),lone=!1):(tokens=[{id:identifier(),token:state.tokens.curr}],lone=!0),!prefix&&isConst&&\"=\"!==state.tokens.next.id&&warning(\"E012\",state.tokens.curr,state.tokens.curr.value);for(var t in tokens)tokens.hasOwnProperty(t)&&(t=tokens[t],state.funct[\"(scope)\"].block.isGlobal()&&predefined[t.id]===!1&&warning(\"W079\",t.token,t.id),t.id&&!state.funct[\"(noblockscopedvar)\"]&&(state.funct[\"(scope)\"].addlabel(t.id,{type:type,token:t.token}),names.push(t.token),lone&&inexport&&state.funct[\"(scope)\"].setExported(t.token.value,t.token)));if(\"=\"===state.tokens.next.id&&(advance(\"=\"),prefix||\"undefined\"!==state.tokens.next.id||warning(\"W080\",state.tokens.prev,state.tokens.prev.value),!prefix&&\"=\"===peek(0).id&&state.tokens.next.identifier&&warning(\"W120\",state.tokens.next,state.tokens.next.value),value=expression(prefix?120:10),lone?tokens[0].first=value:destructuringPatternMatch(names,value)),statement.first=statement.first.concat(names),\",\"!==state.tokens.next.id)break;comma()}return letblock&&(advance(\")\"),block(!0,!0),statement.block=!0,state.funct[\"(scope)\"].unstack()),statement}function classdef(isStatement){return state.inES6()||warning(\"W104\",state.tokens.curr,\"class\",\"6\"),isStatement?(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"class\",token:state.tokens.curr})):state.tokens.next.identifier&&\"extends\"!==state.tokens.next.value?(this.name=identifier(),this.namedExpr=!0):this.name=state.nameStack.infer(),classtail(this),this}function classtail(c){var wasInClassBody=state.inClassBody;\"extends\"===state.tokens.next.value&&(advance(\"extends\"),c.heritage=expression(10)),state.inClassBody=!0,advance(\"{\"),c.body=classbody(c),advance(\"}\"),state.inClassBody=wasInClassBody}function classbody(c){for(var name,isStatic,isGenerator,getset,computed,props=Object.create(null),staticProps=Object.create(null),i=0;\"}\"!==state.tokens.next.id;++i)if(name=state.tokens.next,isStatic=!1,isGenerator=!1,getset=null,\";\"!==name.id){if(\"*\"===name.id&&(isGenerator=!0,advance(\"*\"),name=state.tokens.next),\"[\"===name.id)name=computedPropertyName(),computed=!0;else{if(!isPropertyName(name)){warning(\"W052\",state.tokens.next,state.tokens.next.value||state.tokens.next.type),advance();continue}advance(),computed=!1,name.identifier&&\"static\"===name.value&&(checkPunctuator(state.tokens.next,\"*\")&&(isGenerator=!0,advance(\"*\")),(isPropertyName(state.tokens.next)||\"[\"===state.tokens.next.id)&&(computed=\"[\"===state.tokens.next.id,isStatic=!0,name=state.tokens.next,\"[\"===state.tokens.next.id?name=computedPropertyName():advance())),!name.identifier||\"get\"!==name.value&&\"set\"!==name.value||(isPropertyName(state.tokens.next)||\"[\"===state.tokens.next.id)&&(computed=\"[\"===state.tokens.next.id,getset=name,name=state.tokens.next,\"[\"===state.tokens.next.id?name=computedPropertyName():advance())}if(!checkPunctuator(state.tokens.next,\"(\")){for(error(\"E054\",state.tokens.next,state.tokens.next.value);\"}\"!==state.tokens.next.id&&!checkPunctuator(state.tokens.next,\"(\");)advance();\"(\"!==state.tokens.next.value&&doFunction({statement:c})}if(computed||(getset?saveAccessor(getset.value,isStatic?staticProps:props,name.value,name,!0,isStatic):(\"constructor\"===name.value?state.nameStack.set(c):state.nameStack.set(name),saveProperty(isStatic?staticProps:props,name.value,name,!0,isStatic))),getset&&\"constructor\"===name.value){var propDesc=\"get\"===getset.value?\"class getter method\":\"class setter method\";error(\"E049\",name,propDesc,\"constructor\")}else\"prototype\"===name.value&&error(\"E049\",name,\"class method\",\"prototype\");propertyName(name),doFunction({statement:c,type:isGenerator?\"generator\":null,classExprBinding:c.namedExpr?c.name:null})}else warning(\"W032\"),advance(\";\");checkProperties(props)}function saveProperty(props,name,tkn,isClass,isStatic){var msg=[\"key\",\"class method\",\"static class method\"];msg=msg[(isClass||!1)+(isStatic||!1)],tkn.identifier&&(name=tkn.value),props[name]&&\"__proto__\"!==name?warning(\"W075\",state.tokens.next,msg,name):props[name]=Object.create(null),props[name].basic=!0,props[name].basictkn=tkn}function saveAccessor(accessorType,props,name,tkn,isClass,isStatic){var flagName=\"get\"===accessorType?\"getterToken\":\"setterToken\",msg=\"\";isClass?(isStatic&&(msg+=\"static \"),msg+=accessorType+\"ter method\"):msg=\"key\",state.tokens.curr.accessorType=accessorType,state.nameStack.set(tkn),props[name]?(props[name].basic||props[name][flagName])&&\"__proto__\"!==name&&warning(\"W075\",state.tokens.next,msg,name):props[name]=Object.create(null),props[name][flagName]=tkn}function computedPropertyName(){advance(\"[\"),state.inES6()||warning(\"W119\",state.tokens.curr,\"computed property names\",\"6\");var value=expression(10);return advance(\"]\"),value}function checkPunctuators(token,values){return\"(punctuator)\"===token.type?_.contains(values,token.value):!1}function checkPunctuator(token,value){return\"(punctuator)\"===token.type&&token.value===value}function destructuringAssignOrJsonValue(){var block=lookupBlockType();block.notJson?(!state.inES6()&&block.isDestAssign&&warning(\"W104\",state.tokens.curr,\"destructuring assignment\",\"6\"),statements()):(state.option.laxbreak=!0,state.jsonMode=!0,jsonValue())}function jsonValue(){function jsonObject(){var o={},t=state.tokens.next;if(advance(\"{\"),\"}\"!==state.tokens.next.id)for(;;){if(\"(end)\"===state.tokens.next.id)error(\"E026\",state.tokens.next,t.line);else{if(\"}\"===state.tokens.next.id){warning(\"W094\",state.tokens.curr);break}\",\"===state.tokens.next.id?error(\"E028\",state.tokens.next):\"(string)\"!==state.tokens.next.id&&warning(\"W095\",state.tokens.next,state.tokens.next.value)}if(o[state.tokens.next.value]===!0?warning(\"W075\",state.tokens.next,\"key\",state.tokens.next.value):\"__proto__\"===state.tokens.next.value&&!state.option.proto||\"__iterator__\"===state.tokens.next.value&&!state.option.iterator?warning(\"W096\",state.tokens.next,state.tokens.next.value):o[state.tokens.next.value]=!0,advance(),advance(\":\"),jsonValue(),\",\"!==state.tokens.next.id)break;advance(\",\")}advance(\"}\")}function jsonArray(){var t=state.tokens.next;if(advance(\"[\"),\"]\"!==state.tokens.next.id)for(;;){if(\"(end)\"===state.tokens.next.id)error(\"E027\",state.tokens.next,t.line);else{if(\"]\"===state.tokens.next.id){warning(\"W094\",state.tokens.curr);break}\",\"===state.tokens.next.id&&error(\"E028\",state.tokens.next)}if(jsonValue(),\",\"!==state.tokens.next.id)break;advance(\",\")}advance(\"]\")}switch(state.tokens.next.id){case\"{\":jsonObject();break;case\"[\":jsonArray();break;case\"true\":case\"false\":case\"null\":case\"(number)\":case\"(string)\":advance();break;case\"-\":advance(\"-\"),advance(\"(number)\");break;default:error(\"E003\",state.tokens.next)}}var api,declared,functions,inblock,indent,lookahead,lex,member,membersOnly,predefined,stack,urls,bang={\"<\":!0,\"<=\":!0,\"==\":!0,\"===\":!0,\"!==\":!0,\"!=\":!0,\">\":!0,\">=\":!0,\"+\":!0,\"-\":!0,\"*\":!0,\"/\":!0,\"%\":!0},functionicity=[\"closure\",\"exception\",\"global\",\"label\",\"outer\",\"unused\",\"var\"],extraModules=[],emitter=new events.EventEmitter,typeofValues={};typeofValues.legacy=[\"xml\",\"unknown\"],typeofValues.es3=[\"undefined\",\"boolean\",\"number\",\"string\",\"function\",\"object\"],typeofValues.es3=typeofValues.es3.concat(typeofValues.legacy),typeofValues.es6=typeofValues.es3.concat(\"symbol\"),type(\"(number)\",function(){return this}),type(\"(string)\",function(){return this}),state.syntax[\"(identifier)\"]={type:\"(identifier)\",lbp:0,identifier:!0,nud:function(){var v=this.value;return\"=>\"===state.tokens.next.id?this:(state.funct[\"(comparray)\"].check(v)||state.funct[\"(scope)\"].block.use(v,state.tokens.curr),this)},led:function(){error(\"E033\",state.tokens.next,state.tokens.next.value)}};var baseTemplateSyntax={lbp:0,identifier:!1,template:!0};state.syntax[\"(template)\"]=_.extend({type:\"(template)\",nud:doTemplateLiteral,led:doTemplateLiteral,noSubst:!1},baseTemplateSyntax),state.syntax[\"(template middle)\"]=_.extend({type:\"(template middle)\",middle:!0,noSubst:!1},baseTemplateSyntax),state.syntax[\"(template tail)\"]=_.extend({type:\"(template tail)\",tail:!0,noSubst:!1},baseTemplateSyntax),state.syntax[\"(no subst template)\"]=_.extend({type:\"(template)\",nud:doTemplateLiteral,led:doTemplateLiteral,noSubst:!0,tail:!0},baseTemplateSyntax),type(\"(regexp)\",function(){return this}),delim(\"(endline)\"),delim(\"(begin)\"),delim(\"(end)\").reach=!0,delim(\"(error)\").reach=!0,delim(\"}\").reach=!0,delim(\")\"),delim(\"]\"),delim('\"').reach=!0,delim(\"'\").reach=!0,delim(\";\"),delim(\":\").reach=!0,delim(\"#\"),reserve(\"else\"),reserve(\"case\").reach=!0,reserve(\"catch\"),reserve(\"default\").reach=!0,reserve(\"finally\"),reservevar(\"arguments\",function(x){state.isStrict()&&state.funct[\"(global)\"]&&warning(\"E008\",x)}),reservevar(\"eval\"),reservevar(\"false\"),reservevar(\"Infinity\"),reservevar(\"null\"),reservevar(\"this\",function(x){state.isStrict()&&!isMethod()&&!state.option.validthis&&(state.funct[\"(statement)\"]&&state.funct[\"(name)\"].charAt(0)>\"Z\"||state.funct[\"(global)\"])&&warning(\"W040\",x)}),reservevar(\"true\"),reservevar(\"undefined\"),assignop(\"=\",\"assign\",20),assignop(\"+=\",\"assignadd\",20),assignop(\"-=\",\"assignsub\",20),assignop(\"*=\",\"assignmult\",20),assignop(\"/=\",\"assigndiv\",20).nud=function(){error(\"E014\")},assignop(\"%=\",\"assignmod\",20),bitwiseassignop(\"&=\"),bitwiseassignop(\"|=\"),bitwiseassignop(\"^=\"),bitwiseassignop(\"<<=\"),bitwiseassignop(\">>=\"),bitwiseassignop(\">>>=\"),infix(\",\",function(left,that){var expr;if(that.exprs=[left],state.option.nocomma&&warning(\"W127\"),!comma({peek:!0}))return that;for(;;){if(!(expr=expression(10)))break;if(that.exprs.push(expr),\",\"!==state.tokens.next.value||!comma())break}return that},10,!0),infix(\"?\",function(left,that){return increaseComplexityCount(),that.left=left,that.right=expression(10),advance(\":\"),that[\"else\"]=expression(10),that},30);var orPrecendence=40;infix(\"||\",function(left,that){return increaseComplexityCount(),that.left=left,that.right=expression(orPrecendence),that},orPrecendence),infix(\"&&\",\"and\",50),bitwise(\"|\",\"bitor\",70),bitwise(\"^\",\"bitxor\",80),bitwise(\"&\",\"bitand\",90),relation(\"==\",function(left,right){var eqnull=state.option.eqnull&&(\"null\"===(left&&left.value)||\"null\"===(right&&right.value));switch(!0){case!eqnull&&state.option.eqeqeq:this.from=this.character,warning(\"W116\",this,\"===\",\"==\");break;case isPoorRelation(left):warning(\"W041\",this,\"===\",left.value);break;case isPoorRelation(right):warning(\"W041\",this,\"===\",right.value);break;case isTypoTypeof(right,left,state):warning(\"W122\",this,right.value);break;case isTypoTypeof(left,right,state):warning(\"W122\",this,left.value)}return this}),relation(\"===\",function(left,right){return isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"!=\",function(left,right){var eqnull=state.option.eqnull&&(\"null\"===(left&&left.value)||\"null\"===(right&&right.value));return!eqnull&&state.option.eqeqeq?(this.from=this.character,warning(\"W116\",this,\"!==\",\"!=\")):isPoorRelation(left)?warning(\"W041\",this,\"!==\",left.value):isPoorRelation(right)?warning(\"W041\",this,\"!==\",right.value):isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"!==\",function(left,right){return isTypoTypeof(right,left,state)?warning(\"W122\",this,right.value):isTypoTypeof(left,right,state)&&warning(\"W122\",this,left.value),this}),relation(\"<\"),relation(\">\"),relation(\"<=\"),relation(\">=\"),bitwise(\"<<\",\"shiftleft\",120),bitwise(\">>\",\"shiftright\",120),bitwise(\">>>\",\"shiftrightunsigned\",120),infix(\"in\",\"in\",120),infix(\"instanceof\",\"instanceof\",120),infix(\"+\",function(left,that){var right;return that.left=left,that.right=right=expression(130),left&&right&&\"(string)\"===left.id&&\"(string)\"===right.id?(left.value+=right.value,left.character=right.character,!state.option.scripturl&&reg.javascriptURL.test(left.value)&&warning(\"W050\",left),left):that},130),prefix(\"+\",\"num\"),prefix(\"+++\",function(){return warning(\"W007\"),this.arity=\"unary\",this.right=expression(150),this}),infix(\"+++\",function(left){return warning(\"W007\"),this.left=left,this.right=expression(130),this},130),infix(\"-\",\"sub\",130),prefix(\"-\",\"neg\"),prefix(\"---\",function(){return warning(\"W006\"),this.arity=\"unary\",this.right=expression(150),this}),infix(\"---\",function(left){return warning(\"W006\"),this.left=left,this.right=expression(130),this},130),infix(\"*\",\"mult\",140),infix(\"/\",\"div\",140),infix(\"%\",\"mod\",140),suffix(\"++\"),prefix(\"++\",\"preinc\"),state.syntax[\"++\"].exps=!0,suffix(\"--\"),prefix(\"--\",\"predec\"),state.syntax[\"--\"].exps=!0,prefix(\"delete\",function(){var p=expression(10);return p?(\".\"!==p.id&&\"[\"!==p.id&&warning(\"W051\"),this.first=p,p.identifier&&!state.isStrict()&&(p.forgiveUndef=!0),this):this}).exps=!0,prefix(\"~\",function(){return state.option.bitwise&&warning(\"W016\",this,\"~\"),this.arity=\"unary\",this.right=expression(150),this}),prefix(\"...\",function(){return state.inES6(!0)||warning(\"W119\",this,\"spread/rest operator\",\"6\"),state.tokens.next.identifier||\"(string)\"===state.tokens.next.type||checkPunctuators(state.tokens.next,[\"[\",\"(\"])||error(\"E030\",state.tokens.next,state.tokens.next.value),expression(150),this}),prefix(\"!\",function(){return this.arity=\"unary\",this.right=expression(150),this.right||quit(\"E041\",this.line||0),bang[this.right.id]===!0&&warning(\"W018\",this,\"!\"),this}),prefix(\"typeof\",function(){var p=expression(150);return this.first=this.right=p,p||quit(\"E041\",this.line||0,this.character||0),p.identifier&&(p.forgiveUndef=!0),this}),prefix(\"new\",function(){var mp=metaProperty(\"target\",function(){state.inES6(!0)||warning(\"W119\",state.tokens.prev,\"new.target\",\"6\");for(var inFunction,c=state.funct;c&&(inFunction=!c[\"(global)\"],c[\"(arrow)\"]);)c=c[\"(context)\"];inFunction||warning(\"W136\",state.tokens.prev,\"new.target\")});if(mp)return mp;var i,c=expression(155);if(c&&\"function\"!==c.id)if(c.identifier)switch(c[\"new\"]=!0,c.value){case\"Number\":case\"String\":case\"Boolean\":case\"Math\":case\"JSON\":warning(\"W053\",state.tokens.prev,c.value);break;case\"Symbol\":state.inES6()&&warning(\"W053\",state.tokens.prev,c.value);break;case\"Function\":state.option.evil||warning(\"W054\");break;case\"Date\":case\"RegExp\":case\"this\":break;default:\"function\"!==c.id&&(i=c.value.substr(0,1),state.option.newcap&&(\"A\">i||i>\"Z\")&&!state.funct[\"(scope)\"].isPredefined(c.value)&&warning(\"W055\",state.tokens.curr))}else\".\"!==c.id&&\"[\"!==c.id&&\"(\"!==c.id&&warning(\"W056\",state.tokens.curr);else state.option.supernew||warning(\"W057\",this);return\"(\"===state.tokens.next.id||state.option.supernew||warning(\"W058\",state.tokens.curr,state.tokens.curr.value),this.first=this.right=c,this}),state.syntax[\"new\"].exps=!0,prefix(\"void\").exps=!0,infix(\".\",function(left,that){var m=identifier(!1,!0);return\"string\"==typeof m&&countMember(m),that.left=left,that.right=m,m&&\"hasOwnProperty\"===m&&\"=\"===state.tokens.next.value&&warning(\"W001\"),!left||\"arguments\"!==left.value||\"callee\"!==m&&\"caller\"!==m?state.option.evil||!left||\"document\"!==left.value||\"write\"!==m&&\"writeln\"!==m||warning(\"W060\",left):state.option.noarg?warning(\"W059\",left,m):state.isStrict()&&error(\"E008\"),state.option.evil||\"eval\"!==m&&\"execScript\"!==m||isGlobalEval(left,state)&&warning(\"W061\"),that},160,!0),infix(\"(\",function(left,that){state.option.immed&&left&&!left.immed&&\"function\"===left.id&&warning(\"W062\");var n=0,p=[];if(left&&\"(identifier)\"===left.type&&left.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)&&-1===\"Array Number String Boolean Date Object Error Symbol\".indexOf(left.value)&&(\"Math\"===left.value?warning(\"W063\",left):state.option.newcap&&warning(\"W064\",left)),\")\"!==state.tokens.next.id)for(;p[p.length]=expression(10),n+=1,\",\"===state.tokens.next.id;)comma();return advance(\")\"),\"object\"==typeof left&&(state.inES5()||\"parseInt\"!==left.value||1!==n||warning(\"W065\",state.tokens.curr),state.option.evil||(\"eval\"===left.value||\"Function\"===left.value||\"execScript\"===left.value?(warning(\"W061\",left),p[0]&&\"(string)\"===[0].id&&addInternalSrc(left,p[0].value)):!p[0]||\"(string)\"!==p[0].id||\"setTimeout\"!==left.value&&\"setInterval\"!==left.value?!p[0]||\"(string)\"!==p[0].id||\".\"!==left.value||\"window\"!==left.left.value||\"setTimeout\"!==left.right&&\"setInterval\"!==left.right||(warning(\"W066\",left),addInternalSrc(left,p[0].value)):(warning(\"W066\",left),addInternalSrc(left,p[0].value))),left.identifier||\".\"===left.id||\"[\"===left.id||\"=>\"===left.id||\"(\"===left.id||\"&&\"===left.id||\"||\"===left.id||\"?\"===left.id||state.inES6()&&left[\"(name)\"]||warning(\"W067\",that)),that.left=left,that},155,!0).exps=!0,prefix(\"(\",function(){var pn1,ret,triggerFnExpr,first,last,pn=state.tokens.next,i=-1,parens=1,opening=state.tokens.curr,preceeding=state.tokens.prev,isNecessary=!state.option.singleGroups;do\"(\"===pn.value?parens+=1:\")\"===pn.value&&(parens-=1),i+=1,pn1=pn,pn=peek(i);while((0!==parens||\")\"!==pn1.value)&&\";\"!==pn.value&&\"(end)\"!==pn.type);if(\"function\"===state.tokens.next.id&&(triggerFnExpr=state.tokens.next.immed=!0),\"=>\"===pn.value)return doFunction({type:\"arrow\",parsedOpening:!0});var exprs=[];if(\")\"!==state.tokens.next.id)for(;exprs.push(expression(10)),\",\"===state.tokens.next.id;)state.option.nocomma&&warning(\"W127\"),comma();return advance(\")\",this),state.option.immed&&exprs[0]&&\"function\"===exprs[0].id&&\"(\"!==state.tokens.next.id&&\".\"!==state.tokens.next.id&&\"[\"!==state.tokens.next.id&&warning(\"W068\",this),exprs.length?(exprs.length>1?(ret=Object.create(state.syntax[\",\"]),ret.exprs=exprs,first=exprs[0],last=exprs[exprs.length-1],isNecessary||(isNecessary=preceeding.assign||preceeding.delim)):(ret=first=last=exprs[0],isNecessary||(isNecessary=opening.beginsStmt&&(\"{\"===ret.id||triggerFnExpr||isFunctor(ret))||triggerFnExpr&&(!isEndOfExpr()||\"}\"!==state.tokens.prev.id)||isFunctor(ret)&&!isEndOfExpr()||\"{\"===ret.id&&\"=>\"===preceeding.id||\"(number)\"===ret.type&&checkPunctuator(pn,\".\")&&/^\\d+$/.test(ret.value))),ret&&(!isNecessary&&(first.left||first.right||ret.exprs)&&(isNecessary=!isBeginOfExpr(preceeding)&&first.lbp<=preceeding.lbp||!isEndOfExpr()&&last.lbp<state.tokens.next.lbp),isNecessary||warning(\"W126\",opening),ret.paren=!0),ret):void 0}),application(\"=>\"),infix(\"[\",function(left,that){var s,e=expression(10);return e&&\"(string)\"===e.type&&(state.option.evil||\"eval\"!==e.value&&\"execScript\"!==e.value||isGlobalEval(left,state)&&warning(\"W061\"),countMember(e.value),!state.option.sub&&reg.identifier.test(e.value)&&(s=state.syntax[e.value],s&&isReserved(s)||warning(\"W069\",state.tokens.prev,e.value))),advance(\"]\",that),e&&\"hasOwnProperty\"===e.value&&\"=\"===state.tokens.next.value&&warning(\"W001\"),that.left=left,that.right=e,that},160,!0),prefix(\"[\",function(){var blocktype=lookupBlockType();if(blocktype.isCompArray)return state.option.esnext||state.inMoz()||warning(\"W118\",state.tokens.curr,\"array comprehension\"),comprehensiveArrayExpression();if(blocktype.isDestAssign)return this.destructAssign=destructuringPattern({openingParsed:!0,assignment:!0}),this;var b=state.tokens.curr.line!==startLine(state.tokens.next);for(this.first=[],b&&(indent+=state.option.indent,state.tokens.next.from===indent+state.option.indent&&(indent+=state.option.indent));\"(end)\"!==state.tokens.next.id;){for(;\",\"===state.tokens.next.id;){if(!state.option.elision){if(state.inES5()){warning(\"W128\");do advance(\",\");while(\",\"===state.tokens.next.id);continue}warning(\"W070\")}advance(\",\")}if(\"]\"===state.tokens.next.id)break;if(this.first.push(expression(10)),\",\"!==state.tokens.next.id)break;if(comma({allowTrailing:!0}),\"]\"===state.tokens.next.id&&!state.inES5()){warning(\"W070\",state.tokens.curr);break}}return b&&(indent-=state.option.indent),advance(\"]\",this),this}),function(x){x.nud=function(){var b,f,i,p,t,nextVal,isGeneratorMethod=!1,props=Object.create(null);b=state.tokens.curr.line!==startLine(state.tokens.next),b&&(indent+=state.option.indent,state.tokens.next.from===indent+state.option.indent&&(indent+=state.option.indent));var blocktype=lookupBlockType();if(blocktype.isDestAssign)return this.destructAssign=destructuringPattern({openingParsed:!0,assignment:!0}),this;for(;\"}\"!==state.tokens.next.id;){if(nextVal=state.tokens.next.value,!state.tokens.next.identifier||\",\"!==peekIgnoreEOL().id&&\"}\"!==peekIgnoreEOL().id)if(\":\"===peek().id||\"get\"!==nextVal&&\"set\"!==nextVal){if(\"*\"===state.tokens.next.value&&\"(punctuator)\"===state.tokens.next.type?(state.inES6()||warning(\"W104\",state.tokens.next,\"generator functions\",\"6\"),advance(\"*\"),isGeneratorMethod=!0):isGeneratorMethod=!1,\"[\"===state.tokens.next.id)i=computedPropertyName(),state.nameStack.set(i);else if(state.nameStack.set(state.tokens.next),i=propertyName(),saveProperty(props,i,state.tokens.next),\"string\"!=typeof i)break;\"(\"===state.tokens.next.value?(state.inES6()||warning(\"W104\",state.tokens.curr,\"concise methods\",\"6\"),doFunction({type:isGeneratorMethod?\"generator\":null})):(advance(\":\"),expression(10))}else advance(nextVal),state.inES5()||error(\"E034\"),i=propertyName(),i||state.inES6()||error(\"E035\"),i&&saveAccessor(nextVal,props,i,state.tokens.curr),t=state.tokens.next,f=doFunction(),p=f[\"(params)\"],\"get\"===nextVal&&i&&p?warning(\"W076\",t,p[0],i):\"set\"!==nextVal||!i||p&&1===p.length||warning(\"W077\",t,i);else state.inES6()||warning(\"W104\",state.tokens.next,\"object short notation\",\"6\"),i=propertyName(!0),saveProperty(props,i,state.tokens.next),expression(10);if(countMember(i),\",\"!==state.tokens.next.id)break;comma({allowTrailing:!0,property:!0}),\",\"===state.tokens.next.id?warning(\"W070\",state.tokens.curr):\"}\"!==state.tokens.next.id||state.inES5()||warning(\"W070\",state.tokens.curr)}return b&&(indent-=state.option.indent),advance(\"}\",this),checkProperties(props),this},x.fud=function(){error(\"E036\",state.tokens.curr)}}(delim(\"{\"));var conststatement=stmt(\"const\",function(context){return blockVariableStatement(\"const\",this,context)});conststatement.exps=!0;var letstatement=stmt(\"let\",function(context){return blockVariableStatement(\"let\",this,context)});letstatement.exps=!0;var varstatement=stmt(\"var\",function(context){var tokens,lone,value,prefix=context&&context.prefix,inexport=context&&context.inexport,implied=context&&context.implied,report=!(context&&context.ignore);for(this.first=[];;){var names=[];_.contains([\"{\",\"[\"],state.tokens.next.value)?(tokens=destructuringPattern(),lone=!1):(tokens=[{id:identifier(),token:state.tokens.curr}],lone=!0),prefix&&implied||!report||!state.option.varstmt||warning(\"W132\",this),this.first=this.first.concat(names);for(var t in tokens)tokens.hasOwnProperty(t)&&(t=tokens[t],!implied&&state.funct[\"(global)\"]&&(predefined[t.id]===!1?warning(\"W079\",t.token,t.id):state.option.futurehostile===!1&&(!state.inES5()&&vars.ecmaIdentifiers[5][t.id]===!1||!state.inES6()&&vars.ecmaIdentifiers[6][t.id]===!1)&&warning(\"W129\",t.token,t.id)),t.id&&(\"for\"===implied?(state.funct[\"(scope)\"].has(t.id)||report&&warning(\"W088\",t.token,t.id),state.funct[\"(scope)\"].block.use(t.id,t.token)):(state.funct[\"(scope)\"].addlabel(t.id,{type:\"var\",token:t.token}),lone&&inexport&&state.funct[\"(scope)\"].setExported(t.id,t.token)),names.push(t.token)));if(\"=\"===state.tokens.next.id&&(state.nameStack.set(state.tokens.curr),advance(\"=\"),prefix||!report||state.funct[\"(loopage)\"]||\"undefined\"!==state.tokens.next.id||warning(\"W080\",state.tokens.prev,state.tokens.prev.value),\"=\"===peek(0).id&&state.tokens.next.identifier&&(!prefix&&report&&!state.funct[\"(params)\"]||-1===state.funct[\"(params)\"].indexOf(state.tokens.next.value))&&warning(\"W120\",state.tokens.next,state.tokens.next.value),value=expression(prefix?120:10),lone?tokens[0].first=value:destructuringPatternMatch(names,value)),\",\"!==state.tokens.next.id)break;comma()}return this});varstatement.exps=!0,blockstmt(\"class\",function(){return classdef.call(this,!0)}),blockstmt(\"function\",function(context){var inexport=context&&context.inexport,generator=!1;\"*\"===state.tokens.next.value&&(advance(\"*\"),state.inES6({strict:!0})?generator=!0:warning(\"W119\",state.tokens.curr,\"function*\",\"6\")),inblock&&warning(\"W082\",state.tokens.curr);var i=optionalidentifier();return state.funct[\"(scope)\"].addlabel(i,{type:\"function\",token:state.tokens.curr}),void 0===i?warning(\"W025\"):inexport&&state.funct[\"(scope)\"].setExported(i,state.tokens.prev),doFunction({name:i,statement:this,type:generator?\"generator\":null,ignoreLoopFunc:inblock}),\"(\"===state.tokens.next.id&&state.tokens.next.line===state.tokens.curr.line&&error(\"E039\"),this}),prefix(\"function\",function(){var generator=!1;\"*\"===state.tokens.next.value&&(state.inES6()||warning(\"W119\",state.tokens.curr,\"function*\",\"6\"),advance(\"*\"),generator=!0);var i=optionalidentifier();return doFunction({name:i,type:generator?\"generator\":null}),this}),blockstmt(\"if\",function(){var t=state.tokens.next;increaseComplexityCount(),state.condition=!0,advance(\"(\");var expr=expression(0);checkCondAssignment(expr);var forinifcheck=null;state.option.forin&&state.forinifcheckneeded&&(state.forinifcheckneeded=!1,forinifcheck=state.forinifchecks[state.forinifchecks.length-1],forinifcheck.type=\"(punctuator)\"===expr.type&&\"!\"===expr.value?\"(negative)\":\"(positive)\"),advance(\")\",t),state.condition=!1;var s=block(!0,!0);return forinifcheck&&\"(negative)\"===forinifcheck.type&&s&&s[0]&&\"(identifier)\"===s[0].type&&\"continue\"===s[0].value&&(forinifcheck.type=\"(negative-with-continue)\"),\"else\"===state.tokens.next.id&&(advance(\"else\"),\"if\"===state.tokens.next.id||\"switch\"===state.tokens.next.id?statement():block(!0,!0)),this}),blockstmt(\"try\",function(){function doCatch(){if(advance(\"catch\"),advance(\"(\"),state.funct[\"(scope)\"].stack(\"catchparams\"),checkPunctuators(state.tokens.next,[\"[\",\"{\"])){var tokens=destructuringPattern();_.each(tokens,function(token){token.id&&state.funct[\"(scope)\"].addParam(token.id,token,\"exception\")})}else\"(identifier)\"!==state.tokens.next.type?warning(\"E030\",state.tokens.next,state.tokens.next.value):state.funct[\"(scope)\"].addParam(identifier(),state.tokens.curr,\"exception\");\"if\"===state.tokens.next.value&&(state.inMoz()||warning(\"W118\",state.tokens.curr,\"catch filter\"),advance(\"if\"),expression(0)),advance(\")\"),block(!1),state.funct[\"(scope)\"].unstack()}var b;for(block(!0);\"catch\"===state.tokens.next.id;)increaseComplexityCount(),b&&!state.inMoz()&&warning(\"W118\",state.tokens.next,\"multiple catch blocks\"),doCatch(),b=!0;return\"finally\"===state.tokens.next.id?(advance(\"finally\"),block(!0),void 0):(b||error(\"E021\",state.tokens.next,\"catch\",state.tokens.next.value),this)}),blockstmt(\"while\",function(){var t=state.tokens.next;return state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,increaseComplexityCount(),advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),block(!0,!0),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1,this}).labelled=!0,blockstmt(\"with\",function(){var t=state.tokens.next;return state.isStrict()?error(\"E010\",state.tokens.curr):state.option.withstmt||warning(\"W085\",state.tokens.curr),advance(\"(\"),expression(0),advance(\")\",t),block(!0,!0),this}),blockstmt(\"switch\",function(){var t=state.tokens.next,g=!1,noindent=!1;\nfor(state.funct[\"(breakage)\"]+=1,advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),t=state.tokens.next,advance(\"{\"),state.tokens.next.from===indent&&(noindent=!0),noindent||(indent+=state.option.indent),this.cases=[];;)switch(state.tokens.next.id){case\"case\":switch(state.funct[\"(verb)\"]){case\"yield\":case\"break\":case\"case\":case\"continue\":case\"return\":case\"switch\":case\"throw\":break;default:state.tokens.curr.caseFallsThrough||warning(\"W086\",state.tokens.curr,\"case\")}advance(\"case\"),this.cases.push(expression(0)),increaseComplexityCount(),g=!0,advance(\":\"),state.funct[\"(verb)\"]=\"case\";break;case\"default\":switch(state.funct[\"(verb)\"]){case\"yield\":case\"break\":case\"continue\":case\"return\":case\"throw\":break;default:this.cases.length&&(state.tokens.curr.caseFallsThrough||warning(\"W086\",state.tokens.curr,\"default\"))}advance(\"default\"),g=!0,advance(\":\");break;case\"}\":return noindent||(indent-=state.option.indent),advance(\"}\",t),state.funct[\"(breakage)\"]-=1,state.funct[\"(verb)\"]=void 0,void 0;case\"(end)\":return error(\"E023\",state.tokens.next,\"}\"),void 0;default:if(indent+=state.option.indent,g)switch(state.tokens.curr.id){case\",\":return error(\"E040\"),void 0;case\":\":g=!1,statements();break;default:return error(\"E025\",state.tokens.curr),void 0}else{if(\":\"!==state.tokens.curr.id)return error(\"E021\",state.tokens.next,\"case\",state.tokens.next.value),void 0;advance(\":\"),error(\"E024\",state.tokens.curr,\":\"),statements()}indent-=state.option.indent}return this}).labelled=!0,stmt(\"debugger\",function(){return state.option.debug||warning(\"W087\",this),this}).exps=!0,function(){var x=stmt(\"do\",function(){state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,increaseComplexityCount(),this.first=block(!0,!0),advance(\"while\");var t=state.tokens.next;return advance(\"(\"),checkCondAssignment(expression(0)),advance(\")\",t),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1,this});x.labelled=!0,x.exps=!0}(),blockstmt(\"for\",function(){var s,t=state.tokens.next,letscope=!1,foreachtok=null;\"each\"===t.value&&(foreachtok=t,advance(\"each\"),state.inMoz()||warning(\"W118\",state.tokens.curr,\"for each\")),increaseComplexityCount(),advance(\"(\");var nextop,comma,initializer,i=0,inof=[\"in\",\"of\"],level=0;checkPunctuators(state.tokens.next,[\"{\",\"[\"])&&++level;do{if(nextop=peek(i),++i,checkPunctuators(nextop,[\"{\",\"[\"])?++level:checkPunctuators(nextop,[\"}\",\"]\"])&&--level,0>level)break;0===level&&(!comma&&checkPunctuator(nextop,\",\")?comma=nextop:!initializer&&checkPunctuator(nextop,\"=\")&&(initializer=nextop))}while(level>0||!_.contains(inof,nextop.value)&&\";\"!==nextop.value&&\"(end)\"!==nextop.type);if(_.contains(inof,nextop.value)){state.inES6()||\"of\"!==nextop.value||warning(\"W104\",nextop,\"for of\",\"6\");var ok=!(initializer||comma);if(initializer&&error(\"W133\",comma,nextop.value,\"initializer is forbidden\"),comma&&error(\"W133\",comma,nextop.value,\"more than one ForBinding\"),\"var\"===state.tokens.next.id?(advance(\"var\"),state.tokens.curr.fud({prefix:!0})):\"let\"===state.tokens.next.id||\"const\"===state.tokens.next.id?(advance(state.tokens.next.id),letscope=!0,state.funct[\"(scope)\"].stack(),state.tokens.curr.fud({prefix:!0})):Object.create(varstatement).fud({prefix:!0,implied:\"for\",ignore:!ok}),advance(nextop.value),expression(20),advance(\")\",t),\"in\"===nextop.value&&state.option.forin&&(state.forinifcheckneeded=!0,void 0===state.forinifchecks&&(state.forinifchecks=[]),state.forinifchecks.push({type:\"(none)\"})),state.funct[\"(breakage)\"]+=1,state.funct[\"(loopage)\"]+=1,s=block(!0,!0),\"in\"===nextop.value&&state.option.forin){if(state.forinifchecks&&state.forinifchecks.length>0){var check=state.forinifchecks.pop();(s&&s.length>0&&(\"object\"!=typeof s[0]||\"if\"!==s[0].value)||\"(positive)\"===check.type&&s.length>1||\"(negative)\"===check.type)&&warning(\"W089\",this)}state.forinifcheckneeded=!1}state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1}else{if(foreachtok&&error(\"E045\",foreachtok),\";\"!==state.tokens.next.id)if(\"var\"===state.tokens.next.id)advance(\"var\"),state.tokens.curr.fud();else if(\"let\"===state.tokens.next.id)advance(\"let\"),letscope=!0,state.funct[\"(scope)\"].stack(),state.tokens.curr.fud();else for(;expression(0,\"for\"),\",\"===state.tokens.next.id;)comma();if(nolinebreak(state.tokens.curr),advance(\";\"),state.funct[\"(loopage)\"]+=1,\";\"!==state.tokens.next.id&&checkCondAssignment(expression(0)),nolinebreak(state.tokens.curr),advance(\";\"),\";\"===state.tokens.next.id&&error(\"E021\",state.tokens.next,\")\",\";\"),\")\"!==state.tokens.next.id)for(;expression(0,\"for\"),\",\"===state.tokens.next.id;)comma();advance(\")\",t),state.funct[\"(breakage)\"]+=1,block(!0,!0),state.funct[\"(breakage)\"]-=1,state.funct[\"(loopage)\"]-=1}return letscope&&state.funct[\"(scope)\"].unstack(),this}).labelled=!0,stmt(\"break\",function(){var v=state.tokens.next.value;return state.option.asi||nolinebreak(this),\";\"===state.tokens.next.id||state.tokens.next.reach||state.tokens.curr.line!==startLine(state.tokens.next)?0===state.funct[\"(breakage)\"]&&warning(\"W052\",state.tokens.next,this.value):(state.funct[\"(scope)\"].funct.hasBreakLabel(v)||warning(\"W090\",state.tokens.next,v),this.first=state.tokens.next,advance()),reachable(this),this}).exps=!0,stmt(\"continue\",function(){var v=state.tokens.next.value;return 0===state.funct[\"(breakage)\"]&&warning(\"W052\",state.tokens.next,this.value),state.funct[\"(loopage)\"]||warning(\"W052\",state.tokens.next,this.value),state.option.asi||nolinebreak(this),\";\"===state.tokens.next.id||state.tokens.next.reach||state.tokens.curr.line===startLine(state.tokens.next)&&(state.funct[\"(scope)\"].funct.hasBreakLabel(v)||warning(\"W090\",state.tokens.next,v),this.first=state.tokens.next,advance()),reachable(this),this}).exps=!0,stmt(\"return\",function(){return this.line===startLine(state.tokens.next)?\";\"===state.tokens.next.id||state.tokens.next.reach||(this.first=expression(0),!this.first||\"(punctuator)\"!==this.first.type||\"=\"!==this.first.value||this.first.paren||state.option.boss||warningAt(\"W093\",this.first.line,this.first.character)):\"(punctuator)\"===state.tokens.next.type&&[\"[\",\"{\",\"+\",\"-\"].indexOf(state.tokens.next.value)>-1&&nolinebreak(this),reachable(this),this}).exps=!0,function(x){x.exps=!0,x.lbp=25}(prefix(\"yield\",function(){var prev=state.tokens.prev;state.inES6(!0)&&!state.funct[\"(generator)\"]?\"(catch)\"===state.funct[\"(name)\"]&&state.funct[\"(context)\"][\"(generator)\"]||error(\"E046\",state.tokens.curr,\"yield\"):state.inES6()||warning(\"W104\",state.tokens.curr,\"yield\",\"6\"),state.funct[\"(generator)\"]=\"yielded\";var delegatingYield=!1;return\"*\"===state.tokens.next.value&&(delegatingYield=!0,advance(\"*\")),this.line!==startLine(state.tokens.next)&&state.inMoz()?state.option.asi||nolinebreak(this):((delegatingYield||\";\"!==state.tokens.next.id&&!state.option.asi&&!state.tokens.next.reach&&state.tokens.next.nud)&&(nobreaknonadjacent(state.tokens.curr,state.tokens.next),this.first=expression(10),\"(punctuator)\"!==this.first.type||\"=\"!==this.first.value||this.first.paren||state.option.boss||warningAt(\"W093\",this.first.line,this.first.character)),state.inMoz()&&\")\"!==state.tokens.next.id&&(prev.lbp>30||!prev.assign&&!isEndOfExpr()||\"yield\"===prev.id)&&error(\"E050\",this)),this})),stmt(\"throw\",function(){return nolinebreak(this),this.first=expression(20),reachable(this),this}).exps=!0,stmt(\"import\",function(){if(state.inES6()||warning(\"W119\",state.tokens.curr,\"import\",\"6\"),\"(string)\"===state.tokens.next.type)return advance(\"(string)\"),this;if(state.tokens.next.identifier){if(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"const\",token:state.tokens.curr}),\",\"!==state.tokens.next.value)return advance(\"from\"),advance(\"(string)\"),this;advance(\",\")}if(\"*\"===state.tokens.next.id)advance(\"*\"),advance(\"as\"),state.tokens.next.identifier&&(this.name=identifier(),state.funct[\"(scope)\"].addlabel(this.name,{type:\"const\",token:state.tokens.curr}));else for(advance(\"{\");;){if(\"}\"===state.tokens.next.value){advance(\"}\");break}var importName;if(\"default\"===state.tokens.next.type?(importName=\"default\",advance(\"default\")):importName=identifier(),\"as\"===state.tokens.next.value&&(advance(\"as\"),importName=identifier()),state.funct[\"(scope)\"].addlabel(importName,{type:\"const\",token:state.tokens.curr}),\",\"!==state.tokens.next.value){if(\"}\"===state.tokens.next.value){advance(\"}\");break}error(\"E024\",state.tokens.next,state.tokens.next.value);break}advance(\",\")}return advance(\"from\"),advance(\"(string)\"),this}).exps=!0,stmt(\"export\",function(){var token,identifier,ok=!0;if(state.inES6()||(warning(\"W119\",state.tokens.curr,\"export\",\"6\"),ok=!1),state.funct[\"(scope)\"].block.isGlobal()||(error(\"E053\",state.tokens.curr),ok=!1),\"*\"===state.tokens.next.value)return advance(\"*\"),advance(\"from\"),advance(\"(string)\"),this;if(\"default\"===state.tokens.next.type){state.nameStack.set(state.tokens.next),advance(\"default\");var exportType=state.tokens.next.id;return(\"function\"===exportType||\"class\"===exportType)&&(this.block=!0),token=peek(),expression(10),identifier=token.value,this.block&&(state.funct[\"(scope)\"].addlabel(identifier,{type:exportType,token:token}),state.funct[\"(scope)\"].setExported(identifier,token)),this}if(\"{\"===state.tokens.next.value){advance(\"{\");for(var exportedTokens=[];;){if(state.tokens.next.identifier||error(\"E030\",state.tokens.next,state.tokens.next.value),advance(),exportedTokens.push(state.tokens.curr),\"as\"===state.tokens.next.value&&(advance(\"as\"),state.tokens.next.identifier||error(\"E030\",state.tokens.next,state.tokens.next.value),advance()),\",\"!==state.tokens.next.value){if(\"}\"===state.tokens.next.value){advance(\"}\");break}error(\"E024\",state.tokens.next,state.tokens.next.value);break}advance(\",\")}return\"from\"===state.tokens.next.value?(advance(\"from\"),advance(\"(string)\")):ok&&exportedTokens.forEach(function(token){state.funct[\"(scope)\"].setExported(token.value,token)}),this}if(\"var\"===state.tokens.next.id)advance(\"var\"),state.tokens.curr.fud({inexport:!0});else if(\"let\"===state.tokens.next.id)advance(\"let\"),state.tokens.curr.fud({inexport:!0});else if(\"const\"===state.tokens.next.id)advance(\"const\"),state.tokens.curr.fud({inexport:!0});else if(\"function\"===state.tokens.next.id)this.block=!0,advance(\"function\"),state.syntax[\"function\"].fud({inexport:!0});else if(\"class\"===state.tokens.next.id){this.block=!0,advance(\"class\");var classNameToken=state.tokens.next;state.syntax[\"class\"].fud(),state.funct[\"(scope)\"].setExported(classNameToken.value,classNameToken)}else error(\"E024\",state.tokens.next,state.tokens.next.value);return this}).exps=!0,FutureReservedWord(\"abstract\"),FutureReservedWord(\"boolean\"),FutureReservedWord(\"byte\"),FutureReservedWord(\"char\"),FutureReservedWord(\"class\",{es5:!0,nud:classdef}),FutureReservedWord(\"double\"),FutureReservedWord(\"enum\",{es5:!0}),FutureReservedWord(\"export\",{es5:!0}),FutureReservedWord(\"extends\",{es5:!0}),FutureReservedWord(\"final\"),FutureReservedWord(\"float\"),FutureReservedWord(\"goto\"),FutureReservedWord(\"implements\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"import\",{es5:!0}),FutureReservedWord(\"int\"),FutureReservedWord(\"interface\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"long\"),FutureReservedWord(\"native\"),FutureReservedWord(\"package\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"private\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"protected\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"public\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"short\"),FutureReservedWord(\"static\",{es5:!0,strictOnly:!0}),FutureReservedWord(\"super\",{es5:!0}),FutureReservedWord(\"synchronized\"),FutureReservedWord(\"transient\"),FutureReservedWord(\"volatile\");var lookupBlockType=function(){var pn,pn1,prev,i=-1,bracketStack=0,ret={};checkPunctuators(state.tokens.curr,[\"[\",\"{\"])&&(bracketStack+=1);do{if(prev=-1===i?state.tokens.curr:pn,pn=-1===i?state.tokens.next:peek(i),pn1=peek(i+1),i+=1,checkPunctuators(pn,[\"[\",\"{\"])?bracketStack+=1:checkPunctuators(pn,[\"]\",\"}\"])&&(bracketStack-=1),1===bracketStack&&pn.identifier&&\"for\"===pn.value&&!checkPunctuator(prev,\".\")){ret.isCompArray=!0,ret.notJson=!0;break}if(0===bracketStack&&checkPunctuators(pn,[\"}\",\"]\"])){if(\"=\"===pn1.value){ret.isDestAssign=!0,ret.notJson=!0;break}if(\".\"===pn1.value){ret.notJson=!0;break}}checkPunctuator(pn,\";\")&&(ret.isBlock=!0,ret.notJson=!0)}while(bracketStack>0&&\"(end)\"!==pn.id);return ret},arrayComprehension=function(){function declare(v){var l=_current.variables.filter(function(elt){return elt.value===v?(elt.undef=!1,v):void 0}).length;return 0!==l}function use(v){var l=_current.variables.filter(function(elt){return elt.value!==v||elt.undef?void 0:(elt.unused===!0&&(elt.unused=!1),v)}).length;return 0===l}var _current,CompArray=function(){this.mode=\"use\",this.variables=[]},_carrays=[];return{stack:function(){_current=new CompArray,_carrays.push(_current)},unstack:function(){_current.variables.filter(function(v){v.unused&&warning(\"W098\",v.token,v.raw_text||v.value),v.undef&&state.funct[\"(scope)\"].block.use(v.value,v.token)}),_carrays.splice(-1,1),_current=_carrays[_carrays.length-1]},setState:function(s){_.contains([\"use\",\"define\",\"generate\",\"filter\"],s)&&(_current.mode=s)},check:function(v){return _current?_current&&\"use\"===_current.mode?(use(v)&&_current.variables.push({funct:state.funct,token:state.tokens.curr,value:v,undef:!0,unused:!1}),!0):_current&&\"define\"===_current.mode?(declare(v)||_current.variables.push({funct:state.funct,token:state.tokens.curr,value:v,undef:!1,unused:!0}),!0):_current&&\"generate\"===_current.mode?(state.funct[\"(scope)\"].block.use(v,state.tokens.curr),!0):_current&&\"filter\"===_current.mode?(use(v)&&state.funct[\"(scope)\"].block.use(v,state.tokens.curr),!0):!1:void 0}}},escapeRegex=function(str){return str.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g,\"\\\\$&\")},itself=function(s,o,g){function each(obj,cb){obj&&(Array.isArray(obj)||\"object\"!=typeof obj||(obj=Object.keys(obj)),obj.forEach(cb))}var i,k,x,reIgnoreStr,reIgnore,optionKeys,newOptionObj={},newIgnoredObj={};o=_.clone(o),state.reset(),o&&o.scope?JSHINT.scope=o.scope:(JSHINT.errors=[],JSHINT.undefs=[],JSHINT.internals=[],JSHINT.blacklist={},JSHINT.scope=\"(main)\"),predefined=Object.create(null),combine(predefined,vars.ecmaIdentifiers[3]),combine(predefined,vars.reservedVars),combine(predefined,g||{}),declared=Object.create(null);var exported=Object.create(null);if(o)for(each(o.predef||null,function(item){var slice,prop;\"-\"===item[0]?(slice=item.slice(1),JSHINT.blacklist[slice]=slice,delete predefined[slice]):(prop=Object.getOwnPropertyDescriptor(o.predef,item),predefined[item]=prop?prop.value:!1)}),each(o.exported||null,function(item){exported[item]=!0}),delete o.predef,delete o.exported,optionKeys=Object.keys(o),x=0;optionKeys.length>x;x++)if(/^-W\\d{3}$/g.test(optionKeys[x]))newIgnoredObj[optionKeys[x].slice(1)]=!0;else{var optionKey=optionKeys[x];newOptionObj[optionKey]=o[optionKey],(\"esversion\"===optionKey&&5===o[optionKey]||\"es5\"===optionKey&&o[optionKey])&&warning(\"I003\"),\"newcap\"===optionKeys[x]&&o[optionKey]===!1&&(newOptionObj[\"(explicitNewcap)\"]=!0)}state.option=newOptionObj,state.ignored=newIgnoredObj,state.option.indent=state.option.indent||4,state.option.maxerr=state.option.maxerr||50,indent=1;var scopeManagerInst=scopeManager(state,predefined,exported,declared);if(scopeManagerInst.on(\"warning\",function(ev){warning.apply(null,[ev.code,ev.token].concat(ev.data))}),scopeManagerInst.on(\"error\",function(ev){error.apply(null,[ev.code,ev.token].concat(ev.data))}),state.funct=functor(\"(global)\",null,{\"(global)\":!0,\"(scope)\":scopeManagerInst,\"(comparray)\":arrayComprehension(),\"(metrics)\":createMetrics(state.tokens.next)}),functions=[state.funct],urls=[],stack=null,member={},membersOnly=null,inblock=!1,lookahead=[],!isString(s)&&!Array.isArray(s))return errorAt(\"E004\",0),!1;api={get isJSON(){return state.jsonMode},getOption:function(name){return state.option[name]||null},getCache:function(name){return state.cache[name]},setCache:function(name,value){state.cache[name]=value},warn:function(code,data){warningAt.apply(null,[code,data.line,data.char].concat(data.data))},on:function(names,listener){names.split(\" \").forEach(function(name){emitter.on(name,listener)}.bind(this))}},emitter.removeAllListeners(),(extraModules||[]).forEach(function(func){func(api)}),state.tokens.prev=state.tokens.curr=state.tokens.next=state.syntax[\"(begin)\"],o&&o.ignoreDelimiters&&(Array.isArray(o.ignoreDelimiters)||(o.ignoreDelimiters=[o.ignoreDelimiters]),o.ignoreDelimiters.forEach(function(delimiterPair){delimiterPair.start&&delimiterPair.end&&(reIgnoreStr=escapeRegex(delimiterPair.start)+\"[\\\\s\\\\S]*?\"+escapeRegex(delimiterPair.end),reIgnore=RegExp(reIgnoreStr,\"ig\"),s=s.replace(reIgnore,function(match){return match.replace(/./g,\" \")}))})),lex=new Lexer(s),lex.on(\"warning\",function(ev){warningAt.apply(null,[ev.code,ev.line,ev.character].concat(ev.data))}),lex.on(\"error\",function(ev){errorAt.apply(null,[ev.code,ev.line,ev.character].concat(ev.data))}),lex.on(\"fatal\",function(ev){quit(\"E041\",ev.line,ev.from)}),lex.on(\"Identifier\",function(ev){emitter.emit(\"Identifier\",ev)}),lex.on(\"String\",function(ev){emitter.emit(\"String\",ev)}),lex.on(\"Number\",function(ev){emitter.emit(\"Number\",ev)}),lex.start();for(var name in o)_.has(o,name)&&checkOption(name,state.tokens.curr);assume(),combine(predefined,g||{}),comma.first=!0;try{switch(advance(),state.tokens.next.id){case\"{\":case\"[\":destructuringAssignOrJsonValue();break;default:directives(),state.directive[\"use strict\"]&&\"global\"!==state.option.strict&&warning(\"W097\",state.tokens.prev),statements()}\"(end)\"!==state.tokens.next.id&&quit(\"E041\",state.tokens.curr.line),state.funct[\"(scope)\"].unstack()}catch(err){if(!err||\"JSHintError\"!==err.name)throw err;var nt=state.tokens.next||{};JSHINT.errors.push({scope:\"(main)\",raw:err.raw,code:err.code,reason:err.message,line:err.line||nt.line,character:err.character||nt.from},null)}if(\"(main)\"===JSHINT.scope)for(o=o||{},i=0;JSHINT.internals.length>i;i+=1)k=JSHINT.internals[i],o.scope=k.elem,itself(k.value,o,g);return 0===JSHINT.errors.length};return itself.addModule=function(func){extraModules.push(func)},itself.addModule(style.register),itself.data=function(){var fu,f,i,j,n,globals,data={functions:[],options:state.option};itself.errors.length&&(data.errors=itself.errors),state.jsonMode&&(data.json=!0);var impliedGlobals=state.funct[\"(scope)\"].getImpliedGlobals();for(impliedGlobals.length>0&&(data.implieds=impliedGlobals),urls.length>0&&(data.urls=urls),globals=state.funct[\"(scope)\"].getUsedOrDefinedGlobals(),globals.length>0&&(data.globals=globals),i=1;functions.length>i;i+=1){for(f=functions[i],fu={},j=0;functionicity.length>j;j+=1)fu[functionicity[j]]=[];for(j=0;functionicity.length>j;j+=1)0===fu[functionicity[j]].length&&delete fu[functionicity[j]];fu.name=f[\"(name)\"],fu.param=f[\"(params)\"],fu.line=f[\"(line)\"],fu.character=f[\"(character)\"],fu.last=f[\"(last)\"],fu.lastcharacter=f[\"(lastcharacter)\"],fu.metrics={complexity:f[\"(metrics)\"].ComplexityCount,parameters:f[\"(metrics)\"].arity,statements:f[\"(metrics)\"].statementCount},data.functions.push(fu)}var unuseds=state.funct[\"(scope)\"].getUnuseds();unuseds.length>0&&(data.unused=unuseds);for(n in member)if(\"number\"==typeof member[n]){data.member=member;break}return data},itself.jshint=itself,itself}();\"object\"==typeof exports&&exports&&(exports.JSHINT=JSHINT)},{\"../lodash\":\"/node_modules/jshint/lodash.js\",\"./lex.js\":\"/node_modules/jshint/src/lex.js\",\"./messages.js\":\"/node_modules/jshint/src/messages.js\",\"./options.js\":\"/node_modules/jshint/src/options.js\",\"./reg.js\":\"/node_modules/jshint/src/reg.js\",\"./scope-manager.js\":\"/node_modules/jshint/src/scope-manager.js\",\"./state.js\":\"/node_modules/jshint/src/state.js\",\"./style.js\":\"/node_modules/jshint/src/style.js\",\"./vars.js\":\"/node_modules/jshint/src/vars.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/lex.js\":[function(_dereq_,module,exports){\"use strict\";function asyncTrigger(){var _checks=[];return{push:function(fn){_checks.push(fn)},check:function(){for(var check=0;_checks.length>check;++check)_checks[check]();_checks.splice(0,_checks.length)}}}function Lexer(source){var lines=source;\"string\"==typeof lines&&(lines=lines.replace(/\\r\\n/g,\"\\n\").replace(/\\r/g,\"\\n\").split(\"\\n\")),lines[0]&&\"#!\"===lines[0].substr(0,2)&&(-1!==lines[0].indexOf(\"node\")&&(state.option.node=!0),lines[0]=\"\"),this.emitter=new events.EventEmitter,this.source=source,this.setLines(lines),this.prereg=!0,this.line=0,this.char=1,this.from=1,this.input=\"\",this.inComment=!1,this.context=[],this.templateStarts=[];for(var i=0;state.option.indent>i;i+=1)state.tab+=\" \";this.ignoreLinterErrors=!1}var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),reg=_dereq_(\"./reg.js\"),state=_dereq_(\"./state.js\").state,unicodeData=_dereq_(\"../data/ascii-identifier-data.js\"),asciiIdentifierStartTable=unicodeData.asciiIdentifierStartTable,asciiIdentifierPartTable=unicodeData.asciiIdentifierPartTable,Token={Identifier:1,Punctuator:2,NumericLiteral:3,StringLiteral:4,Comment:5,Keyword:6,NullLiteral:7,BooleanLiteral:8,RegExp:9,TemplateHead:10,TemplateMiddle:11,TemplateTail:12,NoSubstTemplate:13},Context={Block:1,Template:2};Lexer.prototype={_lines:[],inContext:function(ctxType){return this.context.length>0&&this.context[this.context.length-1].type===ctxType},pushContext:function(ctxType){this.context.push({type:ctxType})},popContext:function(){return this.context.pop()},isContext:function(context){return this.context.length>0&&this.context[this.context.length-1]===context},currentContext:function(){return this.context.length>0&&this.context[this.context.length-1]},getLines:function(){return this._lines=state.lines,this._lines},setLines:function(val){this._lines=val,state.lines=this._lines},peek:function(i){return this.input.charAt(i||0)},skip:function(i){i=i||1,this.char+=i,this.input=this.input.slice(i)},on:function(names,listener){names.split(\" \").forEach(function(name){this.emitter.on(name,listener)}.bind(this))},trigger:function(){this.emitter.emit.apply(this.emitter,Array.prototype.slice.call(arguments))},triggerAsync:function(type,args,checks,fn){checks.push(function(){fn()&&this.trigger(type,args)}.bind(this))},scanPunctuator:function(){var ch2,ch3,ch4,ch1=this.peek();switch(ch1){case\".\":if(/^[0-9]$/.test(this.peek(1)))return null;if(\".\"===this.peek(1)&&\".\"===this.peek(2))return{type:Token.Punctuator,value:\"...\"};case\"(\":case\")\":case\";\":case\",\":case\"[\":case\"]\":case\":\":case\"~\":case\"?\":return{type:Token.Punctuator,value:ch1};case\"{\":return this.pushContext(Context.Block),{type:Token.Punctuator,value:ch1};case\"}\":return this.inContext(Context.Block)&&this.popContext(),{type:Token.Punctuator,value:ch1};case\"#\":return{type:Token.Punctuator,value:ch1};case\"\":return null}return ch2=this.peek(1),ch3=this.peek(2),ch4=this.peek(3),\">\"===ch1&&\">\"===ch2&&\">\"===ch3&&\"=\"===ch4?{type:Token.Punctuator,value:\">>>=\"}:\"=\"===ch1&&\"=\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"===\"}:\"!\"===ch1&&\"=\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"!==\"}:\">\"===ch1&&\">\"===ch2&&\">\"===ch3?{type:Token.Punctuator,value:\">>>\"}:\"<\"===ch1&&\"<\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\"<<=\"}:\">\"===ch1&&\">\"===ch2&&\"=\"===ch3?{type:Token.Punctuator,value:\">>=\"}:\"=\"===ch1&&\">\"===ch2?{type:Token.Punctuator,value:ch1+ch2}:ch1===ch2&&\"+-<>&|\".indexOf(ch1)>=0?{type:Token.Punctuator,value:ch1+ch2}:\"<>=!+-*%&|^\".indexOf(ch1)>=0?\"=\"===ch2?{type:Token.Punctuator,value:ch1+ch2}:{type:Token.Punctuator,value:ch1}:\"/\"===ch1?\"=\"===ch2?{type:Token.Punctuator,value:\"/=\"}:{type:Token.Punctuator,value:\"/\"}:null},scanComments:function(){function commentToken(label,body,opt){var special=[\"jshint\",\"jslint\",\"members\",\"member\",\"globals\",\"global\",\"exported\"],isSpecial=!1,value=label+body,commentType=\"plain\";return opt=opt||{},opt.isMultiline&&(value+=\"*/\"),body=body.replace(/\\n/g,\" \"),\"/*\"===label&&reg.fallsThrough.test(body)&&(isSpecial=!0,commentType=\"falls through\"),special.forEach(function(str){if(!isSpecial&&(\"//\"!==label||\"jshint\"===str)&&(\" \"===body.charAt(str.length)&&body.substr(0,str.length)===str&&(isSpecial=!0,label+=str,body=body.substr(str.length)),isSpecial||\" \"!==body.charAt(0)||\" \"!==body.charAt(str.length+1)||body.substr(1,str.length)!==str||(isSpecial=!0,label=label+\" \"+str,body=body.substr(str.length+1)),isSpecial))switch(str){case\"member\":commentType=\"members\";break;case\"global\":commentType=\"globals\";break;default:var options=body.split(\":\").map(function(v){return v.replace(/^\\s+/,\"\").replace(/\\s+$/,\"\")});if(2===options.length)switch(options[0]){case\"ignore\":switch(options[1]){case\"start\":self.ignoringLinterErrors=!0,isSpecial=!1;break;case\"end\":self.ignoringLinterErrors=!1,isSpecial=!1}}commentType=str}}),{type:Token.Comment,commentType:commentType,value:value,body:body,isSpecial:isSpecial,isMultiline:opt.isMultiline||!1,isMalformed:opt.isMalformed||!1}}var ch1=this.peek(),ch2=this.peek(1),rest=this.input.substr(2),startLine=this.line,startChar=this.char,self=this;if(\"*\"===ch1&&\"/\"===ch2)return this.trigger(\"error\",{code:\"E018\",line:startLine,character:startChar}),this.skip(2),null;if(\"/\"!==ch1||\"*\"!==ch2&&\"/\"!==ch2)return null;if(\"/\"===ch2)return this.skip(this.input.length),commentToken(\"//\",rest);var body=\"\";if(\"*\"===ch2){for(this.inComment=!0,this.skip(2);\"*\"!==this.peek()||\"/\"!==this.peek(1);)if(\"\"===this.peek()){if(body+=\"\\n\",!this.nextLine())return this.trigger(\"error\",{code:\"E017\",line:startLine,character:startChar}),this.inComment=!1,commentToken(\"/*\",body,{isMultiline:!0,isMalformed:!0})}else body+=this.peek(),this.skip();return this.skip(2),this.inComment=!1,commentToken(\"/*\",body,{isMultiline:!0})}},scanKeyword:function(){var result=/^[a-zA-Z_$][a-zA-Z0-9_$]*/.exec(this.input),keywords=[\"if\",\"in\",\"do\",\"var\",\"for\",\"new\",\"try\",\"let\",\"this\",\"else\",\"case\",\"void\",\"with\",\"enum\",\"while\",\"break\",\"catch\",\"throw\",\"const\",\"yield\",\"class\",\"super\",\"return\",\"typeof\",\"delete\",\"switch\",\"export\",\"import\",\"default\",\"finally\",\"extends\",\"function\",\"continue\",\"debugger\",\"instanceof\"];return result&&keywords.indexOf(result[0])>=0?{type:Token.Keyword,value:result[0]}:null},scanIdentifier:function(){function isNonAsciiIdentifierStart(code){return code>256}function isNonAsciiIdentifierPart(code){return code>256}function isHexDigit(str){return/^[0-9a-fA-F]$/.test(str)}function removeEscapeSequences(id){return id.replace(/\\\\u([0-9a-fA-F]{4})/g,function(m0,codepoint){return String.fromCharCode(parseInt(codepoint,16))})}var type,char,id=\"\",index=0,readUnicodeEscapeSequence=function(){if(index+=1,\"u\"!==this.peek(index))return null;var code,ch1=this.peek(index+1),ch2=this.peek(index+2),ch3=this.peek(index+3),ch4=this.peek(index+4);return isHexDigit(ch1)&&isHexDigit(ch2)&&isHexDigit(ch3)&&isHexDigit(ch4)?(code=parseInt(ch1+ch2+ch3+ch4,16),asciiIdentifierPartTable[code]||isNonAsciiIdentifierPart(code)?(index+=5,\"\\\\u\"+ch1+ch2+ch3+ch4):null):null}.bind(this),getIdentifierStart=function(){var chr=this.peek(index),code=chr.charCodeAt(0);return 92===code?readUnicodeEscapeSequence():128>code?asciiIdentifierStartTable[code]?(index+=1,chr):null:isNonAsciiIdentifierStart(code)?(index+=1,chr):null}.bind(this),getIdentifierPart=function(){var chr=this.peek(index),code=chr.charCodeAt(0);return 92===code?readUnicodeEscapeSequence():128>code?asciiIdentifierPartTable[code]?(index+=1,chr):null:isNonAsciiIdentifierPart(code)?(index+=1,chr):null}.bind(this);if(char=getIdentifierStart(),null===char)return null;for(id=char;char=getIdentifierPart(),null!==char;)id+=char;switch(id){case\"true\":case\"false\":type=Token.BooleanLiteral;break;case\"null\":type=Token.NullLiteral;break;default:type=Token.Identifier}return{type:type,value:removeEscapeSequences(id),text:id,tokenLength:id.length}},scanNumericLiteral:function(){function isDecimalDigit(str){return/^[0-9]$/.test(str)}function isOctalDigit(str){return/^[0-7]$/.test(str)}function isBinaryDigit(str){return/^[01]$/.test(str)}function isHexDigit(str){return/^[0-9a-fA-F]$/.test(str)}function isIdentifierStart(ch){return\"$\"===ch||\"_\"===ch||\"\\\\\"===ch||ch>=\"a\"&&\"z\">=ch||ch>=\"A\"&&\"Z\">=ch}var bad,index=0,value=\"\",length=this.input.length,char=this.peek(index),isAllowedDigit=isDecimalDigit,base=10,isLegacy=!1;if(\".\"!==char&&!isDecimalDigit(char))return null;if(\".\"!==char){for(value=this.peek(index),index+=1,char=this.peek(index),\"0\"===value&&((\"x\"===char||\"X\"===char)&&(isAllowedDigit=isHexDigit,base=16,index+=1,value+=char),(\"o\"===char||\"O\"===char)&&(isAllowedDigit=isOctalDigit,base=8,state.inES6(!0)||this.trigger(\"warning\",{code:\"W119\",line:this.line,character:this.char,data:[\"Octal integer literal\",\"6\"]}),index+=1,value+=char),(\"b\"===char||\"B\"===char)&&(isAllowedDigit=isBinaryDigit,base=2,state.inES6(!0)||this.trigger(\"warning\",{code:\"W119\",line:this.line,character:this.char,data:[\"Binary integer literal\",\"6\"]}),index+=1,value+=char),isOctalDigit(char)&&(isAllowedDigit=isOctalDigit,base=8,isLegacy=!0,bad=!1,index+=1,value+=char),!isOctalDigit(char)&&isDecimalDigit(char)&&(index+=1,value+=char));length>index;){if(char=this.peek(index),isLegacy&&isDecimalDigit(char))bad=!0;else if(!isAllowedDigit(char))break;value+=char,index+=1}if(isAllowedDigit!==isDecimalDigit)return!isLegacy&&2>=value.length?{type:Token.NumericLiteral,value:value,isMalformed:!0}:length>index&&(char=this.peek(index),isIdentifierStart(char))?null:{type:Token.NumericLiteral,value:value,base:base,isLegacy:isLegacy,isMalformed:!1}}if(\".\"===char)for(value+=char,index+=1;length>index&&(char=this.peek(index),isDecimalDigit(char));)value+=char,index+=1;if(\"e\"===char||\"E\"===char){if(value+=char,index+=1,char=this.peek(index),(\"+\"===char||\"-\"===char)&&(value+=this.peek(index),index+=1),char=this.peek(index),!isDecimalDigit(char))return null;for(value+=char,index+=1;length>index&&(char=this.peek(index),isDecimalDigit(char));)value+=char,index+=1}return length>index&&(char=this.peek(index),isIdentifierStart(char))?null:{type:Token.NumericLiteral,value:value,base:base,isMalformed:!isFinite(value)}},scanEscapeSequence:function(checks){var allowNewLine=!1,jump=1;this.skip();var char=this.peek();switch(char){case\"'\":this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\'\"]},checks,function(){return state.jsonMode});break;case\"b\":char=\"\\\\b\";break;case\"f\":char=\"\\\\f\";break;case\"n\":char=\"\\\\n\";break;case\"r\":char=\"\\\\r\";break;case\"t\":char=\"\\\\t\";break;case\"0\":char=\"\\\\0\";var n=parseInt(this.peek(1),10);this.triggerAsync(\"warning\",{code:\"W115\",line:this.line,character:this.char},checks,function(){return n>=0&&7>=n&&state.isStrict()});break;case\"u\":var hexCode=this.input.substr(1,4),code=parseInt(hexCode,16);isNaN(code)&&this.trigger(\"warning\",{code:\"W052\",line:this.line,character:this.char,data:[\"u\"+hexCode]}),char=String.fromCharCode(code),jump=5;break;case\"v\":this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\v\"]},checks,function(){return state.jsonMode}),char=\"\u000b\";break;case\"x\":var x=parseInt(this.input.substr(1,2),16);this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"\\\\x-\"]},checks,function(){return state.jsonMode}),char=String.fromCharCode(x),jump=3;break;case\"\\\\\":char=\"\\\\\\\\\";break;case'\"':char='\\\\\"';break;case\"/\":break;case\"\":allowNewLine=!0,char=\"\"}return{\"char\":char,jump:jump,allowNewLine:allowNewLine}},scanTemplateLiteral:function(checks){var tokenType,ch,value=\"\",startLine=this.line,startChar=this.char,depth=this.templateStarts.length;if(!state.inES6(!0))return null;if(\"`\"===this.peek())tokenType=Token.TemplateHead,this.templateStarts.push({line:this.line,\"char\":this.char}),depth=this.templateStarts.length,this.skip(1),this.pushContext(Context.Template);else{if(!this.inContext(Context.Template)||\"}\"!==this.peek())return null;tokenType=Token.TemplateMiddle}for(;\"`\"!==this.peek();){for(;\"\"===(ch=this.peek());)if(value+=\"\\n\",!this.nextLine()){var startPos=this.templateStarts.pop();return this.trigger(\"error\",{code:\"E052\",line:startPos.line,character:startPos.char}),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!0,depth:depth,context:this.popContext()}}if(\"$\"===ch&&\"{\"===this.peek(1))return value+=\"${\",this.skip(2),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,depth:depth,context:this.currentContext()};\nif(\"\\\\\"===ch){var escape=this.scanEscapeSequence(checks);value+=escape.char,this.skip(escape.jump)}else\"`\"!==ch&&(value+=ch,this.skip(1))}return tokenType=tokenType===Token.TemplateHead?Token.NoSubstTemplate:Token.TemplateTail,this.skip(1),this.templateStarts.pop(),{type:tokenType,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,depth:depth,context:this.popContext()}},scanStringLiteral:function(checks){var quote=this.peek();if('\"'!==quote&&\"'\"!==quote)return null;this.triggerAsync(\"warning\",{code:\"W108\",line:this.line,character:this.char},checks,function(){return state.jsonMode&&'\"'!==quote});var value=\"\",startLine=this.line,startChar=this.char,allowNewLine=!1;for(this.skip();this.peek()!==quote;)if(\"\"===this.peek()){if(allowNewLine?(allowNewLine=!1,this.triggerAsync(\"warning\",{code:\"W043\",line:this.line,character:this.char},checks,function(){return!state.option.multistr}),this.triggerAsync(\"warning\",{code:\"W042\",line:this.line,character:this.char},checks,function(){return state.jsonMode&&state.option.multistr})):this.trigger(\"warning\",{code:\"W112\",line:this.line,character:this.char}),!this.nextLine())return this.trigger(\"error\",{code:\"E029\",line:startLine,character:startChar}),{type:Token.StringLiteral,value:value,startLine:startLine,startChar:startChar,isUnclosed:!0,quote:quote}}else{allowNewLine=!1;var char=this.peek(),jump=1;if(\" \">char&&this.trigger(\"warning\",{code:\"W113\",line:this.line,character:this.char,data:[\"<non-printable>\"]}),\"\\\\\"===char){var parsed=this.scanEscapeSequence(checks);char=parsed.char,jump=parsed.jump,allowNewLine=parsed.allowNewLine}value+=char,this.skip(jump)}return this.skip(),{type:Token.StringLiteral,value:value,startLine:startLine,startChar:startChar,isUnclosed:!1,quote:quote}},scanRegExp:function(){var terminated,index=0,length=this.input.length,char=this.peek(),value=char,body=\"\",flags=[],malformed=!1,isCharSet=!1,scanUnexpectedChars=function(){\" \">char&&(malformed=!0,this.trigger(\"warning\",{code:\"W048\",line:this.line,character:this.char})),\"<\"===char&&(malformed=!0,this.trigger(\"warning\",{code:\"W049\",line:this.line,character:this.char,data:[char]}))}.bind(this);if(!this.prereg||\"/\"!==char)return null;for(index+=1,terminated=!1;length>index;)if(char=this.peek(index),value+=char,body+=char,isCharSet)\"]\"===char&&(\"\\\\\"!==this.peek(index-1)||\"\\\\\"===this.peek(index-2))&&(isCharSet=!1),\"\\\\\"===char&&(index+=1,char=this.peek(index),body+=char,value+=char,scanUnexpectedChars()),index+=1;else{if(\"\\\\\"===char){if(index+=1,char=this.peek(index),body+=char,value+=char,scanUnexpectedChars(),\"/\"===char){index+=1;continue}if(\"[\"===char){index+=1;continue}}if(\"[\"!==char){if(\"/\"===char){body=body.substr(0,body.length-1),terminated=!0,index+=1;break}index+=1}else isCharSet=!0,index+=1}if(!terminated)return this.trigger(\"error\",{code:\"E015\",line:this.line,character:this.from}),void this.trigger(\"fatal\",{line:this.line,from:this.from});for(;length>index&&(char=this.peek(index),/[gim]/.test(char));)flags.push(char),value+=char,index+=1;try{RegExp(body,flags.join(\"\"))}catch(err){malformed=!0,this.trigger(\"error\",{code:\"E016\",line:this.line,character:this.char,data:[err.message]})}return{type:Token.RegExp,value:value,flags:flags,isMalformed:malformed}},scanNonBreakingSpaces:function(){return state.option.nonbsp?this.input.search(/(\\u00A0)/):-1},scanUnsafeChars:function(){return this.input.search(reg.unsafeChars)},next:function(checks){this.from=this.char;var start;if(/\\s/.test(this.peek()))for(start=this.char;/\\s/.test(this.peek());)this.from+=1,this.skip();var match=this.scanComments()||this.scanStringLiteral(checks)||this.scanTemplateLiteral(checks);return match?match:(match=this.scanRegExp()||this.scanPunctuator()||this.scanKeyword()||this.scanIdentifier()||this.scanNumericLiteral(),match?(this.skip(match.tokenLength||match.value.length),match):null)},nextLine:function(){var char;if(this.line>=this.getLines().length)return!1;this.input=this.getLines()[this.line],this.line+=1,this.char=1,this.from=1;var inputTrimmed=this.input.trim(),startsWith=function(){return _.some(arguments,function(prefix){return 0===inputTrimmed.indexOf(prefix)})},endsWith=function(){return _.some(arguments,function(suffix){return-1!==inputTrimmed.indexOf(suffix,inputTrimmed.length-suffix.length)})};if(this.ignoringLinterErrors===!0&&(startsWith(\"/*\",\"//\")||this.inComment&&endsWith(\"*/\")||(this.input=\"\")),char=this.scanNonBreakingSpaces(),char>=0&&this.trigger(\"warning\",{code:\"W125\",line:this.line,character:char+1}),this.input=this.input.replace(/\\t/g,state.tab),char=this.scanUnsafeChars(),char>=0&&this.trigger(\"warning\",{code:\"W100\",line:this.line,character:char}),!this.ignoringLinterErrors&&state.option.maxlen&&state.option.maxlen<this.input.length){var inComment=this.inComment||startsWith.call(inputTrimmed,\"//\")||startsWith.call(inputTrimmed,\"/*\"),shouldTriggerError=!inComment||!reg.maxlenException.test(inputTrimmed);shouldTriggerError&&this.trigger(\"warning\",{code:\"W101\",line:this.line,character:this.input.length})}return!0},start:function(){this.nextLine()},token:function(){function isReserved(token,isProperty){if(!token.reserved)return!1;var meta=token.meta;if(meta&&meta.isFutureReservedWord&&state.inES5()){if(!meta.es5)return!1;if(meta.strictOnly&&!state.option.strict&&!state.isStrict())return!1;if(isProperty)return!1}return!0}for(var token,checks=asyncTrigger(),create=function(type,value,isProperty,token){var obj;if(\"(endline)\"!==type&&\"(end)\"!==type&&(this.prereg=!1),\"(punctuator)\"===type){switch(value){case\".\":case\")\":case\"~\":case\"#\":case\"]\":case\"++\":case\"--\":this.prereg=!1;break;default:this.prereg=!0}obj=Object.create(state.syntax[value]||state.syntax[\"(error)\"])}return\"(identifier)\"===type&&((\"return\"===value||\"case\"===value||\"typeof\"===value)&&(this.prereg=!0),_.has(state.syntax,value)&&(obj=Object.create(state.syntax[value]||state.syntax[\"(error)\"]),isReserved(obj,isProperty&&\"(identifier)\"===type)||(obj=null))),obj||(obj=Object.create(state.syntax[type])),obj.identifier=\"(identifier)\"===type,obj.type=obj.type||type,obj.value=value,obj.line=this.line,obj.character=this.char,obj.from=this.from,obj.identifier&&token&&(obj.raw_text=token.text||token.value),token&&token.startLine&&token.startLine!==this.line&&(obj.startLine=token.startLine),token&&token.context&&(obj.context=token.context),token&&token.depth&&(obj.depth=token.depth),token&&token.isUnclosed&&(obj.isUnclosed=token.isUnclosed),isProperty&&obj.identifier&&(obj.isProperty=isProperty),obj.check=checks.check,obj}.bind(this);;){if(!this.input.length)return this.nextLine()?create(\"(endline)\",\"\"):this.exhausted?null:(this.exhausted=!0,create(\"(end)\",\"\"));if(token=this.next(checks))switch(token.type){case Token.StringLiteral:return this.triggerAsync(\"String\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value,quote:token.quote},checks,function(){return!0}),create(\"(string)\",token.value,null,token);case Token.TemplateHead:return this.trigger(\"TemplateHead\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template)\",token.value,null,token);case Token.TemplateMiddle:return this.trigger(\"TemplateMiddle\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template middle)\",token.value,null,token);case Token.TemplateTail:return this.trigger(\"TemplateTail\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(template tail)\",token.value,null,token);case Token.NoSubstTemplate:return this.trigger(\"NoSubstTemplate\",{line:this.line,\"char\":this.char,from:this.from,startLine:token.startLine,startChar:token.startChar,value:token.value}),create(\"(no subst template)\",token.value,null,token);case Token.Identifier:this.triggerAsync(\"Identifier\",{line:this.line,\"char\":this.char,from:this.form,name:token.value,raw_name:token.text,isProperty:\".\"===state.tokens.curr.id},checks,function(){return!0});case Token.Keyword:case Token.NullLiteral:case Token.BooleanLiteral:return create(\"(identifier)\",token.value,\".\"===state.tokens.curr.id,token);case Token.NumericLiteral:return token.isMalformed&&this.trigger(\"warning\",{code:\"W045\",line:this.line,character:this.char,data:[token.value]}),this.triggerAsync(\"warning\",{code:\"W114\",line:this.line,character:this.char,data:[\"0x-\"]},checks,function(){return 16===token.base&&state.jsonMode}),this.triggerAsync(\"warning\",{code:\"W115\",line:this.line,character:this.char},checks,function(){return state.isStrict()&&8===token.base&&token.isLegacy}),this.trigger(\"Number\",{line:this.line,\"char\":this.char,from:this.from,value:token.value,base:token.base,isMalformed:token.malformed}),create(\"(number)\",token.value);case Token.RegExp:return create(\"(regexp)\",token.value);case Token.Comment:if(state.tokens.curr.comment=!0,token.isSpecial)return{id:\"(comment)\",value:token.value,body:token.body,type:token.commentType,isSpecial:token.isSpecial,line:this.line,character:this.char,from:this.from};break;case\"\":break;default:return create(\"(punctuator)\",token.value)}else this.input.length&&(this.trigger(\"error\",{code:\"E024\",line:this.line,character:this.char,data:[this.peek()]}),this.input=\"\")}}},exports.Lexer=Lexer,exports.Context=Context},{\"../data/ascii-identifier-data.js\":\"/node_modules/jshint/data/ascii-identifier-data.js\",\"../lodash\":\"/node_modules/jshint/lodash.js\",\"./reg.js\":\"/node_modules/jshint/src/reg.js\",\"./state.js\":\"/node_modules/jshint/src/state.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/messages.js\":[function(_dereq_,module,exports){\"use strict\";var _=_dereq_(\"../lodash\"),errors={E001:\"Bad option: '{a}'.\",E002:\"Bad option value.\",E003:\"Expected a JSON value.\",E004:\"Input is neither a string nor an array of strings.\",E005:\"Input is empty.\",E006:\"Unexpected early end of program.\",E007:'Missing \"use strict\" statement.',E008:\"Strict violation.\",E009:\"Option 'validthis' can't be used in a global scope.\",E010:\"'with' is not allowed in strict mode.\",E011:\"'{a}' has already been declared.\",E012:\"const '{a}' is initialized to 'undefined'.\",E013:\"Attempting to override '{a}' which is a constant.\",E014:\"A regular expression literal can be confused with '/='.\",E015:\"Unclosed regular expression.\",E016:\"Invalid regular expression.\",E017:\"Unclosed comment.\",E018:\"Unbegun comment.\",E019:\"Unmatched '{a}'.\",E020:\"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'.\",E021:\"Expected '{a}' and instead saw '{b}'.\",E022:\"Line breaking error '{a}'.\",E023:\"Missing '{a}'.\",E024:\"Unexpected '{a}'.\",E025:\"Missing ':' on a case clause.\",E026:\"Missing '}' to match '{' from line {a}.\",E027:\"Missing ']' to match '[' from line {a}.\",E028:\"Illegal comma.\",E029:\"Unclosed string.\",E030:\"Expected an identifier and instead saw '{a}'.\",E031:\"Bad assignment.\",E032:\"Expected a small integer or 'false' and instead saw '{a}'.\",E033:\"Expected an operator and instead saw '{a}'.\",E034:\"get/set are ES5 features.\",E035:\"Missing property name.\",E036:\"Expected to see a statement and instead saw a block.\",E037:null,E038:null,E039:\"Function declarations are not invocable. Wrap the whole function invocation in parens.\",E040:\"Each value should have its own case label.\",E041:\"Unrecoverable syntax error.\",E042:\"Stopping.\",E043:\"Too many errors.\",E044:null,E045:\"Invalid for each loop.\",E046:\"A yield statement shall be within a generator function (with syntax: `function*`)\",E047:null,E048:\"{a} declaration not directly within block.\",E049:\"A {a} cannot be named '{b}'.\",E050:\"Mozilla acequires the yield expression to be parenthesized here.\",E051:null,E052:\"Unclosed template literal.\",E053:\"Export declaration must be in global scope.\",E054:\"Class properties must be methods. Expected '(' but instead saw '{a}'.\",E055:\"The '{a}' option cannot be set after any executable code.\",E056:\"'{a}' was used before it was declared, which is illegal for '{b}' variables.\",E057:\"Invalid meta property: '{a}.{b}'.\",E058:\"Missing semicolon.\"},warnings={W001:\"'hasOwnProperty' is a really bad name.\",W002:\"Value of '{a}' may be overwritten in IE 8 and earlier.\",W003:\"'{a}' was used before it was defined.\",W004:\"'{a}' is already defined.\",W005:\"A dot following a number can be confused with a decimal point.\",W006:\"Confusing minuses.\",W007:\"Confusing plusses.\",W008:\"A leading decimal point can be confused with a dot: '{a}'.\",W009:\"The array literal notation [] is preferable.\",W010:\"The object literal notation {} is preferable.\",W011:null,W012:null,W013:null,W014:\"Bad line breaking before '{a}'.\",W015:null,W016:\"Unexpected use of '{a}'.\",W017:\"Bad operand.\",W018:\"Confusing use of '{a}'.\",W019:\"Use the isNaN function to compare with NaN.\",W020:\"Read only.\",W021:\"Reassignment of '{a}', which is is a {b}. Use 'var' or 'let' to declare bindings that may change.\",W022:\"Do not assign to the exception parameter.\",W023:\"Expected an identifier in an assignment and instead saw a function invocation.\",W024:\"Expected an identifier and instead saw '{a}' (a reserved word).\",W025:\"Missing name in function declaration.\",W026:\"Inner functions should be listed at the top of the outer function.\",W027:\"Unreachable '{a}' after '{b}'.\",W028:\"Label '{a}' on {b} statement.\",W030:\"Expected an assignment or function call and instead saw an expression.\",W031:\"Do not use 'new' for side effects.\",W032:\"Unnecessary semicolon.\",W033:\"Missing semicolon.\",W034:'Unnecessary directive \"{a}\".',W035:\"Empty block.\",W036:\"Unexpected /*member '{a}'.\",W037:\"'{a}' is a statement label.\",W038:\"'{a}' used out of scope.\",W039:\"'{a}' is not allowed.\",W040:\"Possible strict violation.\",W041:\"Use '{a}' to compare with '{b}'.\",W042:\"Avoid EOL escaping.\",W043:\"Bad escaping of EOL. Use option multistr if needed.\",W044:\"Bad or unnecessary escaping.\",W045:\"Bad number '{a}'.\",W046:\"Don't use extra leading zeros '{a}'.\",W047:\"A trailing decimal point can be confused with a dot: '{a}'.\",W048:\"Unexpected control character in regular expression.\",W049:\"Unexpected escaped character '{a}' in regular expression.\",W050:\"JavaScript URL.\",W051:\"Variables should not be deleted.\",W052:\"Unexpected '{a}'.\",W053:\"Do not use {a} as a constructor.\",W054:\"The Function constructor is a form of eval.\",W055:\"A constructor name should start with an uppercase letter.\",W056:\"Bad constructor.\",W057:\"Weird construction. Is 'new' necessary?\",W058:\"Missing '()' invoking a constructor.\",W059:\"Avoid arguments.{a}.\",W060:\"document.write can be a form of eval.\",W061:\"eval can be harmful.\",W062:\"Wrap an immediate function invocation in parens to assist the reader in understanding that the expression is the result of a function, and not the function itself.\",W063:\"Math is not a function.\",W064:\"Missing 'new' prefix when invoking a constructor.\",W065:\"Missing radix parameter.\",W066:\"Implied eval. Consider passing a function instead of a string.\",W067:\"Bad invocation.\",W068:\"Wrapping non-IIFE function literals in parens is unnecessary.\",W069:\"['{a}'] is better written in dot notation.\",W070:\"Extra comma. (it breaks older versions of IE)\",W071:\"This function has too many statements. ({a})\",W072:\"This function has too many parameters. ({a})\",W073:\"Blocks are nested too deeply. ({a})\",W074:\"This function's cyclomatic complexity is too high. ({a})\",W075:\"Duplicate {a} '{b}'.\",W076:\"Unexpected parameter '{a}' in get {b} function.\",W077:\"Expected a single parameter in set {a} function.\",W078:\"Setter is defined without getter.\",W079:\"Redefinition of '{a}'.\",W080:\"It's not necessary to initialize '{a}' to 'undefined'.\",W081:null,W082:\"Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.\",W083:\"Don't make functions within a loop.\",W084:\"Assignment in conditional expression\",W085:\"Don't use 'with'.\",W086:\"Expected a 'break' statement before '{a}'.\",W087:\"Forgotten 'debugger' statement?\",W088:\"Creating global 'for' variable. Should be 'for (var {a} ...'.\",W089:\"The body of a for in should be wrapped in an if statement to filter unwanted properties from the prototype.\",W090:\"'{a}' is not a statement label.\",W091:null,W093:\"Did you mean to return a conditional instead of an assignment?\",W094:\"Unexpected comma.\",W095:\"Expected a string and instead saw {a}.\",W096:\"The '{a}' key may produce unexpected results.\",W097:'Use the function form of \"use strict\".',W098:\"'{a}' is defined but never used.\",W099:null,W100:\"This character may get silently deleted by one or more browsers.\",W101:\"Line is too long.\",W102:null,W103:\"The '{a}' property is deprecated.\",W104:\"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz).\",W105:\"Unexpected {a} in '{b}'.\",W106:\"Identifier '{a}' is not in camel case.\",W107:\"Script URL.\",W108:\"Strings must use doublequote.\",W109:\"Strings must use singlequote.\",W110:\"Mixed double and single quotes.\",W112:\"Unclosed string.\",W113:\"Control character in string: {a}.\",W114:\"Avoid {a}.\",W115:\"Octal literals are not allowed in strict mode.\",W116:\"Expected '{a}' and instead saw '{b}'.\",W117:\"'{a}' is not defined.\",W118:\"'{a}' is only available in Mozilla JavaScript extensions (use moz option).\",W119:\"'{a}' is only available in ES{b} (use 'esversion: {b}').\",W120:\"You might be leaking a variable ({a}) here.\",W121:\"Extending prototype of native object: '{a}'.\",W122:\"Invalid typeof value '{a}'\",W123:\"'{a}' is already defined in outer scope.\",W124:\"A generator function shall contain a yield statement.\",W125:\"This line contains non-breaking spaces: http://jshint.com/doc/options/#nonbsp\",W126:\"Unnecessary grouping operator.\",W127:\"Unexpected use of a comma operator.\",W128:\"Empty array elements acequire elision=true.\",W129:\"'{a}' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.\",W130:\"Invalid element after rest element.\",W131:\"Invalid parameter after rest parameter.\",W132:\"`var` declarations are forbidden. Use `let` or `const` instead.\",W133:\"Invalid for-{a} loop left-hand-side: {b}.\",W134:\"The '{a}' option is only available when linting ECMAScript {b} code.\",W135:\"{a} may not be supported by non-browser environments.\",W136:\"'{a}' must be in function scope.\",W137:\"Empty destructuring.\",W138:\"Regular parameters should not come after default parameters.\"},info={I001:\"Comma warnings can be turned off with 'laxcomma'.\",I002:null,I003:\"ES5 option is now set per default\"};exports.errors={},exports.warnings={},exports.info={},_.each(errors,function(desc,code){exports.errors[code]={code:code,desc:desc}}),_.each(warnings,function(desc,code){exports.warnings[code]={code:code,desc:desc}}),_.each(info,function(desc,code){exports.info[code]={code:code,desc:desc}})},{\"../lodash\":\"/node_modules/jshint/lodash.js\"}],\"/node_modules/jshint/src/name-stack.js\":[function(_dereq_,module){\"use strict\";function NameStack(){this._stack=[]}Object.defineProperty(NameStack.prototype,\"length\",{get:function(){return this._stack.length}}),NameStack.prototype.push=function(){this._stack.push(null)},NameStack.prototype.pop=function(){this._stack.pop()},NameStack.prototype.set=function(token){this._stack[this.length-1]=token},NameStack.prototype.infer=function(){var type,nameToken=this._stack[this.length-1],prefix=\"\";return nameToken&&\"class\"!==nameToken.type||(nameToken=this._stack[this.length-2]),nameToken?(type=nameToken.type,\"(string)\"!==type&&\"(number)\"!==type&&\"(identifier)\"!==type&&\"default\"!==type?\"(expression)\":(nameToken.accessorType&&(prefix=nameToken.accessorType+\" \"),prefix+nameToken.value)):\"(empty)\"},module.exports=NameStack},{}],\"/node_modules/jshint/src/options.js\":[function(_dereq_,module,exports){\"use strict\";exports.bool={enforcing:{bitwise:!0,freeze:!0,camelcase:!0,curly:!0,eqeqeq:!0,futurehostile:!0,notypeof:!0,es3:!0,es5:!0,forin:!0,funcscope:!0,immed:!0,iterator:!0,newcap:!0,noarg:!0,nocomma:!0,noempty:!0,nonbsp:!0,nonew:!0,undef:!0,singleGroups:!1,varstmt:!1,enforceall:!1},relaxing:{asi:!0,multistr:!0,debug:!0,boss:!0,evil:!0,globalstrict:!0,plusplus:!0,proto:!0,scripturl:!0,sub:!0,supernew:!0,laxbreak:!0,laxcomma:!0,validthis:!0,withstmt:!0,moz:!0,noyield:!0,eqnull:!0,lastsemic:!0,loopfunc:!0,expr:!0,esnext:!0,elision:!0},environments:{mootools:!0,couch:!0,jasmine:!0,jquery:!0,node:!0,qunit:!0,rhino:!0,shelljs:!0,prototypejs:!0,yui:!0,mocha:!0,module:!0,wsh:!0,worker:!0,nonstandard:!0,browser:!0,browserify:!0,devel:!0,dojo:!0,typed:!0,phantom:!0},obsolete:{onecase:!0,regexp:!0,regexdash:!0}},exports.val={maxlen:!1,indent:!1,maxerr:!1,predef:!1,globals:!1,quotmark:!1,scope:!1,maxstatements:!1,maxdepth:!1,maxparams:!1,maxcomplexity:!1,shadow:!1,strict:!0,unused:!0,latedef:!1,ignore:!1,ignoreDelimiters:!1,esversion:5},exports.inverted={bitwise:!0,forin:!0,newcap:!0,plusplus:!0,regexp:!0,undef:!0,eqeqeq:!0,strict:!0},exports.validNames=Object.keys(exports.val).concat(Object.keys(exports.bool.relaxing)).concat(Object.keys(exports.bool.enforcing)).concat(Object.keys(exports.bool.obsolete)).concat(Object.keys(exports.bool.environments)),exports.renamed={eqeq:\"eqeqeq\",windows:\"wsh\",sloppy:\"strict\"},exports.removed={nomen:!0,onevar:!0,passfail:!0,white:!0,gcl:!0,smarttabs:!0,trailing:!0},exports.noenforceall={varstmt:!0,strict:!0}},{}],\"/node_modules/jshint/src/reg.js\":[function(_dereq_,module,exports){\"use strict\";exports.unsafeString=/@cc|<\\/?|script|\\]\\s*\\]|<\\s*!|&lt/i,exports.unsafeChars=/[\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/,exports.needEsc=/[\\u0000-\\u001f&<\"\\/\\\\\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/,exports.needEscGlobal=/[\\u0000-\\u001f&<\"\\/\\\\\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,exports.starSlash=/\\*\\//,exports.identifier=/^([a-zA-Z_$][a-zA-Z0-9_$]*)$/,exports.javascriptURL=/^(?:javascript|jscript|ecmascript|vbscript|livescript)\\s*:/i,exports.fallsThrough=/^\\s*falls?\\sthrough\\s*$/,exports.maxlenException=/^(?:(?:\\/\\/|\\/\\*|\\*) ?)?[^ ]+$/},{}],\"/node_modules/jshint/src/scope-manager.js\":[function(_dereq_,module){\"use strict\";var _=_dereq_(\"../lodash\"),events=_dereq_(\"events\"),marker={},scopeManager=function(state,predefined,exported,declared){function _newScope(type){_current={\"(labels)\":Object.create(null),\"(usages)\":Object.create(null),\"(breakLabels)\":Object.create(null),\"(parent)\":_current,\"(type)\":type,\"(params)\":\"functionparams\"===type||\"catchparams\"===type?[]:null},_scopeStack.push(_current)}function warning(code,token){emitter.emit(\"warning\",{code:code,token:token,data:_.slice(arguments,2)})}function error(code,token){emitter.emit(\"warning\",{code:code,token:token,data:_.slice(arguments,2)})}function _setupUsages(labelName){_current[\"(usages)\"][labelName]||(_current[\"(usages)\"][labelName]={\"(modified)\":[],\"(reassigned)\":[],\"(tokens)\":[]})}function _checkForUnused(){if(\"functionparams\"===_current[\"(type)\"])return _checkParams(),void 0;var curentLabels=_current[\"(labels)\"];for(var labelName in curentLabels)curentLabels[labelName]&&\"exception\"!==curentLabels[labelName][\"(type)\"]&&curentLabels[labelName][\"(unused)\"]&&_warnUnused(labelName,curentLabels[labelName][\"(token)\"],\"var\")}function _checkParams(){var params=_current[\"(params)\"];if(params)for(var unused_opt,param=params.pop();param;){var label=_current[\"(labels)\"][param];if(unused_opt=_getUnusedOption(state.funct[\"(unusedOption)\"]),\"undefined\"===param)return;if(label[\"(unused)\"])_warnUnused(param,label[\"(token)\"],\"param\",state.funct[\"(unusedOption)\"]);else if(\"last-param\"===unused_opt)return;param=params.pop()}}function _getLabel(labelName){for(var i=_scopeStack.length-1;i>=0;--i){var scopeLabels=_scopeStack[i][\"(labels)\"];if(scopeLabels[labelName])return scopeLabels}}function usedSoFarInCurrentFunction(labelName){for(var i=_scopeStack.length-1;i>=0;i--){var current=_scopeStack[i];if(current[\"(usages)\"][labelName])return current[\"(usages)\"][labelName];if(current===_currentFunctBody)break}return!1}function _checkOuterShadow(labelName,token){if(\"outer\"===state.option.shadow)for(var isGlobal=\"global\"===_currentFunctBody[\"(type)\"],isNewFunction=\"functionparams\"===_current[\"(type)\"],outsideCurrentFunction=!isGlobal,i=0;_scopeStack.length>i;i++){var stackItem=_scopeStack[i];isNewFunction||_scopeStack[i+1]!==_currentFunctBody||(outsideCurrentFunction=!1),outsideCurrentFunction&&stackItem[\"(labels)\"][labelName]&&warning(\"W123\",token,labelName),stackItem[\"(breakLabels)\"][labelName]&&warning(\"W123\",token,labelName)}}function _latedefWarning(type,labelName,token){state.option.latedef&&(state.option.latedef===!0&&\"function\"===type||\"function\"!==type)&&warning(\"W003\",token,labelName)}var _current,_scopeStack=[];_newScope(\"global\"),_current[\"(predefined)\"]=predefined;var _currentFunctBody=_current,usedPredefinedAndGlobals=Object.create(null),impliedGlobals=Object.create(null),unuseds=[],emitter=new events.EventEmitter,_getUnusedOption=function(unused_opt){return void 0===unused_opt&&(unused_opt=state.option.unused),unused_opt===!0&&(unused_opt=\"last-param\"),unused_opt},_warnUnused=function(name,tkn,type,unused_opt){var line=tkn.line,chr=tkn.from,raw_name=tkn.raw_text||name;unused_opt=_getUnusedOption(unused_opt);var warnable_types={vars:[\"var\"],\"last-param\":[\"var\",\"param\"],strict:[\"var\",\"param\",\"last-param\"]};unused_opt&&warnable_types[unused_opt]&&-1!==warnable_types[unused_opt].indexOf(type)&&warning(\"W098\",{line:line,from:chr},raw_name),(unused_opt||\"var\"===type)&&unuseds.push({name:name,line:line,character:chr})},scopeManagerInst={on:function(names,listener){names.split(\" \").forEach(function(name){emitter.on(name,listener)})},isPredefined:function(labelName){return!this.has(labelName)&&_.has(_scopeStack[0][\"(predefined)\"],labelName)},stack:function(type){var previousScope=_current;_newScope(type),type||\"functionparams\"!==previousScope[\"(type)\"]||(_current[\"(isFuncBody)\"]=!0,_current[\"(context)\"]=_currentFunctBody,_currentFunctBody=_current)},unstack:function(){var i,j,subScope=_scopeStack.length>1?_scopeStack[_scopeStack.length-2]:null,isUnstackingFunctionBody=_current===_currentFunctBody,isUnstackingFunctionParams=\"functionparams\"===_current[\"(type)\"],isUnstackingFunctionOuter=\"functionouter\"===_current[\"(type)\"],currentUsages=_current[\"(usages)\"],currentLabels=_current[\"(labels)\"],usedLabelNameList=Object.keys(currentUsages);for(currentUsages.__proto__&&-1===usedLabelNameList.indexOf(\"__proto__\")&&usedLabelNameList.push(\"__proto__\"),i=0;usedLabelNameList.length>i;i++){var usedLabelName=usedLabelNameList[i],usage=currentUsages[usedLabelName],usedLabel=currentLabels[usedLabelName];if(usedLabel){var usedLabelType=usedLabel[\"(type)\"];if(usedLabel[\"(useOutsideOfScope)\"]&&!state.option.funcscope){var usedTokens=usage[\"(tokens)\"];if(usedTokens)for(j=0;usedTokens.length>j;j++)usedLabel[\"(function)\"]===usedTokens[j][\"(function)\"]&&error(\"W038\",usedTokens[j],usedLabelName)}if(_current[\"(labels)\"][usedLabelName][\"(unused)\"]=!1,\"const\"===usedLabelType&&usage[\"(modified)\"])for(j=0;usage[\"(modified)\"].length>j;j++)error(\"E013\",usage[\"(modified)\"][j],usedLabelName);if((\"function\"===usedLabelType||\"class\"===usedLabelType)&&usage[\"(reassigned)\"])for(j=0;usage[\"(reassigned)\"].length>j;j++)error(\"W021\",usage[\"(reassigned)\"][j],usedLabelName,usedLabelType)}else if(isUnstackingFunctionOuter&&(state.funct[\"(isCapturing)\"]=!0),subScope)if(subScope[\"(usages)\"][usedLabelName]){var subScopeUsage=subScope[\"(usages)\"][usedLabelName];subScopeUsage[\"(modified)\"]=subScopeUsage[\"(modified)\"].concat(usage[\"(modified)\"]),subScopeUsage[\"(tokens)\"]=subScopeUsage[\"(tokens)\"].concat(usage[\"(tokens)\"]),subScopeUsage[\"(reassigned)\"]=subScopeUsage[\"(reassigned)\"].concat(usage[\"(reassigned)\"]),subScopeUsage[\"(onlyUsedSubFunction)\"]=!1}else subScope[\"(usages)\"][usedLabelName]=usage,isUnstackingFunctionBody&&(subScope[\"(usages)\"][usedLabelName][\"(onlyUsedSubFunction)\"]=!0);else if(\"boolean\"==typeof _current[\"(predefined)\"][usedLabelName]){if(delete declared[usedLabelName],usedPredefinedAndGlobals[usedLabelName]=marker,_current[\"(predefined)\"][usedLabelName]===!1&&usage[\"(reassigned)\"])for(j=0;usage[\"(reassigned)\"].length>j;j++)warning(\"W020\",usage[\"(reassigned)\"][j])}else if(usage[\"(tokens)\"])for(j=0;usage[\"(tokens)\"].length>j;j++){var undefinedToken=usage[\"(tokens)\"][j];undefinedToken.forgiveUndef||(state.option.undef&&!undefinedToken.ignoreUndef&&warning(\"W117\",undefinedToken,usedLabelName),impliedGlobals[usedLabelName]?impliedGlobals[usedLabelName].line.push(undefinedToken.line):impliedGlobals[usedLabelName]={name:usedLabelName,line:[undefinedToken.line]})}}if(subScope||Object.keys(declared).forEach(function(labelNotUsed){_warnUnused(labelNotUsed,declared[labelNotUsed],\"var\")}),subScope&&!isUnstackingFunctionBody&&!isUnstackingFunctionParams&&!isUnstackingFunctionOuter){var labelNames=Object.keys(currentLabels);for(i=0;labelNames.length>i;i++){var defLabelName=labelNames[i];currentLabels[defLabelName][\"(blockscoped)\"]||\"exception\"===currentLabels[defLabelName][\"(type)\"]||this.funct.has(defLabelName,{excludeCurrent:!0})||(subScope[\"(labels)\"][defLabelName]=currentLabels[defLabelName],\"global\"!==_currentFunctBody[\"(type)\"]&&(subScope[\"(labels)\"][defLabelName][\"(useOutsideOfScope)\"]=!0),delete currentLabels[defLabelName])}}_checkForUnused(),_scopeStack.pop(),isUnstackingFunctionBody&&(_currentFunctBody=_scopeStack[_.findLastIndex(_scopeStack,function(scope){return scope[\"(isFuncBody)\"]||\"global\"===scope[\"(type)\"]})]),_current=subScope},addParam:function(labelName,token,type){if(type=type||\"param\",\"exception\"===type){var previouslyDefinedLabelType=this.funct.labeltype(labelName);previouslyDefinedLabelType&&\"exception\"!==previouslyDefinedLabelType&&(state.option.node||warning(\"W002\",state.tokens.next,labelName))}if(_.has(_current[\"(labels)\"],labelName)?_current[\"(labels)\"][labelName].duplicated=!0:(_checkOuterShadow(labelName,token,type),_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":token,\"(unused)\":!0},_current[\"(params)\"].push(labelName)),_.has(_current[\"(usages)\"],labelName)){var usage=_current[\"(usages)\"][labelName];usage[\"(onlyUsedSubFunction)\"]?_latedefWarning(type,labelName,token):warning(\"E056\",token,labelName,type)}},validateParams:function(){if(\"global\"!==_currentFunctBody[\"(type)\"]){var isStrict=state.isStrict(),currentFunctParamScope=_currentFunctBody[\"(parent)\"];currentFunctParamScope[\"(params)\"]&&currentFunctParamScope[\"(params)\"].forEach(function(labelName){var label=currentFunctParamScope[\"(labels)\"][labelName];label&&label.duplicated&&(isStrict?warning(\"E011\",label[\"(token)\"],labelName):state.option.shadow!==!0&&warning(\"W004\",label[\"(token)\"],labelName))})}},getUsedOrDefinedGlobals:function(){var list=Object.keys(usedPredefinedAndGlobals);return usedPredefinedAndGlobals.__proto__===marker&&-1===list.indexOf(\"__proto__\")&&list.push(\"__proto__\"),list},getImpliedGlobals:function(){var values=_.values(impliedGlobals),hasProto=!1;return impliedGlobals.__proto__&&(hasProto=values.some(function(value){return\"__proto__\"===value.name}),hasProto||values.push(impliedGlobals.__proto__)),values},getUnuseds:function(){return unuseds},has:function(labelName){return Boolean(_getLabel(labelName))},labeltype:function(labelName){var scopeLabels=_getLabel(labelName);return scopeLabels?scopeLabels[labelName][\"(type)\"]:null},addExported:function(labelName){var globalLabels=_scopeStack[0][\"(labels)\"];if(_.has(declared,labelName))delete declared[labelName];else if(_.has(globalLabels,labelName))globalLabels[labelName][\"(unused)\"]=!1;else{for(var i=1;_scopeStack.length>i;i++){var scope=_scopeStack[i];if(scope[\"(type)\"])break;if(_.has(scope[\"(labels)\"],labelName)&&!scope[\"(labels)\"][labelName][\"(blockscoped)\"])return scope[\"(labels)\"][labelName][\"(unused)\"]=!1,void 0}exported[labelName]=!0}},setExported:function(labelName,token){this.block.use(labelName,token)\n},addlabel:function(labelName,opts){var type=opts.type,token=opts.token,isblockscoped=\"let\"===type||\"const\"===type||\"class\"===type,isexported=\"global\"===(isblockscoped?_current:_currentFunctBody)[\"(type)\"]&&_.has(exported,labelName);if(_checkOuterShadow(labelName,token,type),isblockscoped){var declaredInCurrentScope=_current[\"(labels)\"][labelName];if(declaredInCurrentScope||_current!==_currentFunctBody||\"global\"===_current[\"(type)\"]||(declaredInCurrentScope=!!_currentFunctBody[\"(parent)\"][\"(labels)\"][labelName]),!declaredInCurrentScope&&_current[\"(usages)\"][labelName]){var usage=_current[\"(usages)\"][labelName];usage[\"(onlyUsedSubFunction)\"]?_latedefWarning(type,labelName,token):warning(\"E056\",token,labelName,type)}declaredInCurrentScope?warning(\"E011\",token,labelName):\"outer\"===state.option.shadow&&scopeManagerInst.funct.has(labelName)&&warning(\"W004\",token,labelName),scopeManagerInst.block.add(labelName,type,token,!isexported)}else{var declaredInCurrentFunctionScope=scopeManagerInst.funct.has(labelName);!declaredInCurrentFunctionScope&&usedSoFarInCurrentFunction(labelName)&&_latedefWarning(type,labelName,token),scopeManagerInst.funct.has(labelName,{onlyBlockscoped:!0})?warning(\"E011\",token,labelName):state.option.shadow!==!0&&declaredInCurrentFunctionScope&&\"__proto__\"!==labelName&&\"global\"!==_currentFunctBody[\"(type)\"]&&warning(\"W004\",token,labelName),scopeManagerInst.funct.add(labelName,type,token,!isexported),\"global\"===_currentFunctBody[\"(type)\"]&&(usedPredefinedAndGlobals[labelName]=marker)}},funct:{labeltype:function(labelName,options){for(var onlyBlockscoped=options&&options.onlyBlockscoped,excludeParams=options&&options.excludeParams,currentScopeIndex=_scopeStack.length-(options&&options.excludeCurrent?2:1),i=currentScopeIndex;i>=0;i--){var current=_scopeStack[i];if(current[\"(labels)\"][labelName]&&(!onlyBlockscoped||current[\"(labels)\"][labelName][\"(blockscoped)\"]))return current[\"(labels)\"][labelName][\"(type)\"];var scopeCheck=excludeParams?_scopeStack[i-1]:current;if(scopeCheck&&\"functionparams\"===scopeCheck[\"(type)\"])return null}return null},hasBreakLabel:function(labelName){for(var i=_scopeStack.length-1;i>=0;i--){var current=_scopeStack[i];if(current[\"(breakLabels)\"][labelName])return!0;if(\"functionparams\"===current[\"(type)\"])return!1}return!1},has:function(labelName,options){return Boolean(this.labeltype(labelName,options))},add:function(labelName,type,tok,unused){_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":tok,\"(blockscoped)\":!1,\"(function)\":_currentFunctBody,\"(unused)\":unused}}},block:{isGlobal:function(){return\"global\"===_current[\"(type)\"]},use:function(labelName,token){var paramScope=_currentFunctBody[\"(parent)\"];paramScope&&paramScope[\"(labels)\"][labelName]&&\"param\"===paramScope[\"(labels)\"][labelName][\"(type)\"]&&(scopeManagerInst.funct.has(labelName,{excludeParams:!0,onlyBlockscoped:!0})||(paramScope[\"(labels)\"][labelName][\"(unused)\"]=!1)),token&&(state.ignored.W117||state.option.undef===!1)&&(token.ignoreUndef=!0),_setupUsages(labelName),token&&(token[\"(function)\"]=_currentFunctBody,_current[\"(usages)\"][labelName][\"(tokens)\"].push(token))},reassign:function(labelName,token){this.modify(labelName,token),_current[\"(usages)\"][labelName][\"(reassigned)\"].push(token)},modify:function(labelName,token){_setupUsages(labelName),_current[\"(usages)\"][labelName][\"(modified)\"].push(token)},add:function(labelName,type,tok,unused){_current[\"(labels)\"][labelName]={\"(type)\":type,\"(token)\":tok,\"(blockscoped)\":!0,\"(unused)\":unused}},addBreakLabel:function(labelName,opts){var token=opts.token;scopeManagerInst.funct.hasBreakLabel(labelName)?warning(\"E011\",token,labelName):\"outer\"===state.option.shadow&&(scopeManagerInst.funct.has(labelName)?warning(\"W004\",token,labelName):_checkOuterShadow(labelName,token)),_current[\"(breakLabels)\"][labelName]=token}}};return scopeManagerInst};module.exports=scopeManager},{\"../lodash\":\"/node_modules/jshint/lodash.js\",events:\"/node_modules/browserify/node_modules/events/events.js\"}],\"/node_modules/jshint/src/state.js\":[function(_dereq_,module,exports){\"use strict\";var NameStack=_dereq_(\"./name-stack.js\"),state={syntax:{},isStrict:function(){return this.directive[\"use strict\"]||this.inClassBody||this.option.module||\"implied\"===this.option.strict},inMoz:function(){return this.option.moz},inES6:function(){return this.option.moz||this.option.esversion>=6},inES5:function(strict){return strict?!(this.option.esversion&&5!==this.option.esversion||this.option.moz):!this.option.esversion||this.option.esversion>=5||this.option.moz},reset:function(){this.tokens={prev:null,next:null,curr:null},this.option={},this.funct=null,this.ignored={},this.directive={},this.jsonMode=!1,this.jsonWarnings=[],this.lines=[],this.tab=\"\",this.cache={},this.ignoredLines={},this.forinifcheckneeded=!1,this.nameStack=new NameStack,this.inClassBody=!1}};exports.state=state},{\"./name-stack.js\":\"/node_modules/jshint/src/name-stack.js\"}],\"/node_modules/jshint/src/style.js\":[function(_dereq_,module,exports){\"use strict\";exports.register=function(linter){linter.on(\"Identifier\",function(data){linter.getOption(\"proto\")||\"__proto__\"===data.name&&linter.warn(\"W103\",{line:data.line,\"char\":data.char,data:[data.name,\"6\"]})}),linter.on(\"Identifier\",function(data){linter.getOption(\"iterator\")||\"__iterator__\"===data.name&&linter.warn(\"W103\",{line:data.line,\"char\":data.char,data:[data.name]})}),linter.on(\"Identifier\",function(data){linter.getOption(\"camelcase\")&&data.name.replace(/^_+|_+$/g,\"\").indexOf(\"_\")>-1&&!data.name.match(/^[A-Z0-9_]*$/)&&linter.warn(\"W106\",{line:data.line,\"char\":data.from,data:[data.name]})}),linter.on(\"String\",function(data){var code,quotmark=linter.getOption(\"quotmark\");quotmark&&(\"single\"===quotmark&&\"'\"!==data.quote&&(code=\"W109\"),\"double\"===quotmark&&'\"'!==data.quote&&(code=\"W108\"),quotmark===!0&&(linter.getCache(\"quotmark\")||linter.setCache(\"quotmark\",data.quote),linter.getCache(\"quotmark\")!==data.quote&&(code=\"W110\")),code&&linter.warn(code,{line:data.line,\"char\":data.char}))}),linter.on(\"Number\",function(data){\".\"===data.value.charAt(0)&&linter.warn(\"W008\",{line:data.line,\"char\":data.char,data:[data.value]}),\".\"===data.value.substr(data.value.length-1)&&linter.warn(\"W047\",{line:data.line,\"char\":data.char,data:[data.value]}),/^00+/.test(data.value)&&linter.warn(\"W046\",{line:data.line,\"char\":data.char,data:[data.value]})}),linter.on(\"String\",function(data){var re=/^(?:javascript|jscript|ecmascript|vbscript|livescript)\\s*:/i;linter.getOption(\"scripturl\")||re.test(data.value)&&linter.warn(\"W107\",{line:data.line,\"char\":data.char})})}},{}],\"/node_modules/jshint/src/vars.js\":[function(_dereq_,module,exports){\"use strict\";exports.reservedVars={arguments:!1,NaN:!1},exports.ecmaIdentifiers={3:{Array:!1,Boolean:!1,Date:!1,decodeURI:!1,decodeURIComponent:!1,encodeURI:!1,encodeURIComponent:!1,Error:!1,eval:!1,EvalError:!1,Function:!1,hasOwnProperty:!1,isFinite:!1,isNaN:!1,Math:!1,Number:!1,Object:!1,parseInt:!1,parseFloat:!1,RangeError:!1,ReferenceError:!1,RegExp:!1,String:!1,SyntaxError:!1,TypeError:!1,URIError:!1},5:{JSON:!1},6:{Map:!1,Promise:!1,Proxy:!1,Reflect:!1,Set:!1,Symbol:!1,WeakMap:!1,WeakSet:!1}},exports.browser={Audio:!1,Blob:!1,addEventListener:!1,applicationCache:!1,atob:!1,blur:!1,btoa:!1,cancelAnimationFrame:!1,CanvasGradient:!1,CanvasPattern:!1,CanvasRenderingContext2D:!1,CSS:!1,clearInterval:!1,clearTimeout:!1,close:!1,closed:!1,Comment:!1,CustomEvent:!1,DOMParser:!1,defaultStatus:!1,Document:!1,document:!1,DocumentFragment:!1,Element:!1,ElementTimeControl:!1,Event:!1,event:!1,fetch:!1,FileReader:!1,FormData:!1,focus:!1,frames:!1,getComputedStyle:!1,HTMLElement:!1,HTMLAnchorElement:!1,HTMLBaseElement:!1,HTMLBlockquoteElement:!1,HTMLBodyElement:!1,HTMLBRElement:!1,HTMLButtonElement:!1,HTMLCanvasElement:!1,HTMLCollection:!1,HTMLDirectoryElement:!1,HTMLDivElement:!1,HTMLDListElement:!1,HTMLFieldSetElement:!1,HTMLFontElement:!1,HTMLFormElement:!1,HTMLFrameElement:!1,HTMLFrameSetElement:!1,HTMLHeadElement:!1,HTMLHeadingElement:!1,HTMLHRElement:!1,HTMLHtmlElement:!1,HTMLIFrameElement:!1,HTMLImageElement:!1,HTMLInputElement:!1,HTMLIsIndexElement:!1,HTMLLabelElement:!1,HTMLLayerElement:!1,HTMLLegendElement:!1,HTMLLIElement:!1,HTMLLinkElement:!1,HTMLMapElement:!1,HTMLMenuElement:!1,HTMLMetaElement:!1,HTMLModElement:!1,HTMLObjectElement:!1,HTMLOListElement:!1,HTMLOptGroupElement:!1,HTMLOptionElement:!1,HTMLParagraphElement:!1,HTMLParamElement:!1,HTMLPreElement:!1,HTMLQuoteElement:!1,HTMLScriptElement:!1,HTMLSelectElement:!1,HTMLStyleElement:!1,HTMLTableCaptionElement:!1,HTMLTableCellElement:!1,HTMLTableColElement:!1,HTMLTableElement:!1,HTMLTableRowElement:!1,HTMLTableSectionElement:!1,HTMLTemplateElement:!1,HTMLTextAreaElement:!1,HTMLTitleElement:!1,HTMLUListElement:!1,HTMLVideoElement:!1,history:!1,Image:!1,Intl:!1,length:!1,localStorage:!1,location:!1,matchMedia:!1,MessageChannel:!1,MessageEvent:!1,MessagePort:!1,MouseEvent:!1,moveBy:!1,moveTo:!1,MutationObserver:!1,name:!1,Node:!1,NodeFilter:!1,NodeList:!1,Notification:!1,navigator:!1,onbeforeunload:!0,onblur:!0,onerror:!0,onfocus:!0,onload:!0,onresize:!0,onunload:!0,open:!1,openDatabase:!1,opener:!1,Option:!1,parent:!1,performance:!1,print:!1,Range:!1,requestAnimationFrame:!1,removeEventListener:!1,resizeBy:!1,resizeTo:!1,screen:!1,scroll:!1,scrollBy:!1,scrollTo:!1,sessionStorage:!1,setInterval:!1,setTimeout:!1,SharedWorker:!1,status:!1,SVGAElement:!1,SVGAltGlyphDefElement:!1,SVGAltGlyphElement:!1,SVGAltGlyphItemElement:!1,SVGAngle:!1,SVGAnimateColorElement:!1,SVGAnimateElement:!1,SVGAnimateMotionElement:!1,SVGAnimateTransformElement:!1,SVGAnimatedAngle:!1,SVGAnimatedBoolean:!1,SVGAnimatedEnumeration:!1,SVGAnimatedInteger:!1,SVGAnimatedLength:!1,SVGAnimatedLengthList:!1,SVGAnimatedNumber:!1,SVGAnimatedNumberList:!1,SVGAnimatedPathData:!1,SVGAnimatedPoints:!1,SVGAnimatedPreserveAspectRatio:!1,SVGAnimatedRect:!1,SVGAnimatedString:!1,SVGAnimatedTransformList:!1,SVGAnimationElement:!1,SVGCSSRule:!1,SVGCircleElement:!1,SVGClipPathElement:!1,SVGColor:!1,SVGColorProfileElement:!1,SVGColorProfileRule:!1,SVGComponentTransferFunctionElement:!1,SVGCursorElement:!1,SVGDefsElement:!1,SVGDescElement:!1,SVGDocument:!1,SVGElement:!1,SVGElementInstance:!1,SVGElementInstanceList:!1,SVGEllipseElement:!1,SVGExternalResourcesRequired:!1,SVGFEBlendElement:!1,SVGFEColorMatrixElement:!1,SVGFEComponentTransferElement:!1,SVGFECompositeElement:!1,SVGFEConvolveMatrixElement:!1,SVGFEDiffuseLightingElement:!1,SVGFEDisplacementMapElement:!1,SVGFEDistantLightElement:!1,SVGFEFloodElement:!1,SVGFEFuncAElement:!1,SVGFEFuncBElement:!1,SVGFEFuncGElement:!1,SVGFEFuncRElement:!1,SVGFEGaussianBlurElement:!1,SVGFEImageElement:!1,SVGFEMergeElement:!1,SVGFEMergeNodeElement:!1,SVGFEMorphologyElement:!1,SVGFEOffsetElement:!1,SVGFEPointLightElement:!1,SVGFESpecularLightingElement:!1,SVGFESpotLightElement:!1,SVGFETileElement:!1,SVGFETurbulenceElement:!1,SVGFilterElement:!1,SVGFilterPrimitiveStandardAttributes:!1,SVGFitToViewBox:!1,SVGFontElement:!1,SVGFontFaceElement:!1,SVGFontFaceFormatElement:!1,SVGFontFaceNameElement:!1,SVGFontFaceSrcElement:!1,SVGFontFaceUriElement:!1,SVGForeignObjectElement:!1,SVGGElement:!1,SVGGlyphElement:!1,SVGGlyphRefElement:!1,SVGGradientElement:!1,SVGHKernElement:!1,SVGICCColor:!1,SVGImageElement:!1,SVGLangSpace:!1,SVGLength:!1,SVGLengthList:!1,SVGLineElement:!1,SVGLinearGradientElement:!1,SVGLocatable:!1,SVGMPathElement:!1,SVGMarkerElement:!1,SVGMaskElement:!1,SVGMatrix:!1,SVGMetadataElement:!1,SVGMissingGlyphElement:!1,SVGNumber:!1,SVGNumberList:!1,SVGPaint:!1,SVGPathElement:!1,SVGPathSeg:!1,SVGPathSegArcAbs:!1,SVGPathSegArcRel:!1,SVGPathSegClosePath:!1,SVGPathSegCurvetoCubicAbs:!1,SVGPathSegCurvetoCubicRel:!1,SVGPathSegCurvetoCubicSmoothAbs:!1,SVGPathSegCurvetoCubicSmoothRel:!1,SVGPathSegCurvetoQuadraticAbs:!1,SVGPathSegCurvetoQuadraticRel:!1,SVGPathSegCurvetoQuadraticSmoothAbs:!1,SVGPathSegCurvetoQuadraticSmoothRel:!1,SVGPathSegLinetoAbs:!1,SVGPathSegLinetoHorizontalAbs:!1,SVGPathSegLinetoHorizontalRel:!1,SVGPathSegLinetoRel:!1,SVGPathSegLinetoVerticalAbs:!1,SVGPathSegLinetoVerticalRel:!1,SVGPathSegList:!1,SVGPathSegMovetoAbs:!1,SVGPathSegMovetoRel:!1,SVGPatternElement:!1,SVGPoint:!1,SVGPointList:!1,SVGPolygonElement:!1,SVGPolylineElement:!1,SVGPreserveAspectRatio:!1,SVGRadialGradientElement:!1,SVGRect:!1,SVGRectElement:!1,SVGRenderingIntent:!1,SVGSVGElement:!1,SVGScriptElement:!1,SVGSetElement:!1,SVGStopElement:!1,SVGStringList:!1,SVGStylable:!1,SVGStyleElement:!1,SVGSwitchElement:!1,SVGSymbolElement:!1,SVGTRefElement:!1,SVGTSpanElement:!1,SVGTests:!1,SVGTextContentElement:!1,SVGTextElement:!1,SVGTextPathElement:!1,SVGTextPositioningElement:!1,SVGTitleElement:!1,SVGTransform:!1,SVGTransformList:!1,SVGTransformable:!1,SVGURIReference:!1,SVGUnitTypes:!1,SVGUseElement:!1,SVGVKernElement:!1,SVGViewElement:!1,SVGViewSpec:!1,SVGZoomAndPan:!1,Text:!1,TextDecoder:!1,TextEncoder:!1,TimeEvent:!1,top:!1,URL:!1,WebGLActiveInfo:!1,WebGLBuffer:!1,WebGLContextEvent:!1,WebGLFramebuffer:!1,WebGLProgram:!1,WebGLRenderbuffer:!1,WebGLRenderingContext:!1,WebGLShader:!1,WebGLShaderPrecisionFormat:!1,WebGLTexture:!1,WebGLUniformLocation:!1,WebSocket:!1,window:!1,Window:!1,Worker:!1,XDomainRequest:!1,XMLHttpRequest:!1,XMLSerializer:!1,XPathEvaluator:!1,XPathException:!1,XPathExpression:!1,XPathNamespace:!1,XPathNSResolver:!1,XPathResult:!1},exports.devel={alert:!1,confirm:!1,console:!1,Debug:!1,opera:!1,prompt:!1},exports.worker={importScripts:!0,postMessage:!0,self:!0,FileReaderSync:!0},exports.nonstandard={escape:!1,unescape:!1},exports.couch={require:!1,respond:!1,getRow:!1,emit:!1,send:!1,start:!1,sum:!1,log:!1,exports:!1,module:!1,provides:!1},exports.node={__filename:!1,__dirname:!1,GLOBAL:!1,global:!1,module:!1,acequire:!1,Buffer:!0,console:!0,exports:!0,process:!0,setTimeout:!0,clearTimeout:!0,setInterval:!0,clearInterval:!0,setImmediate:!0,clearImmediate:!0},exports.browserify={__filename:!1,__dirname:!1,global:!1,module:!1,acequire:!1,Buffer:!0,exports:!0,process:!0},exports.phantom={phantom:!0,acequire:!0,WebPage:!0,console:!0,exports:!0},exports.qunit={asyncTest:!1,deepEqual:!1,equal:!1,expect:!1,module:!1,notDeepEqual:!1,notEqual:!1,notPropEqual:!1,notStrictEqual:!1,ok:!1,propEqual:!1,QUnit:!1,raises:!1,start:!1,stop:!1,strictEqual:!1,test:!1,\"throws\":!1},exports.rhino={defineClass:!1,deserialize:!1,gc:!1,help:!1,importClass:!1,importPackage:!1,java:!1,load:!1,loadClass:!1,Packages:!1,print:!1,quit:!1,readFile:!1,readUrl:!1,runCommand:!1,seal:!1,serialize:!1,spawn:!1,sync:!1,toint32:!1,version:!1},exports.shelljs={target:!1,echo:!1,exit:!1,cd:!1,pwd:!1,ls:!1,find:!1,cp:!1,rm:!1,mv:!1,mkdir:!1,test:!1,cat:!1,sed:!1,grep:!1,which:!1,dirs:!1,pushd:!1,popd:!1,env:!1,exec:!1,chmod:!1,config:!1,error:!1,tempdir:!1},exports.typed={ArrayBuffer:!1,ArrayBufferView:!1,DataView:!1,Float32Array:!1,Float64Array:!1,Int16Array:!1,Int32Array:!1,Int8Array:!1,Uint16Array:!1,Uint32Array:!1,Uint8Array:!1,Uint8ClampedArray:!1},exports.wsh={ActiveXObject:!0,Enumerator:!0,GetObject:!0,ScriptEngine:!0,ScriptEngineBuildVersion:!0,ScriptEngineMajorVersion:!0,ScriptEngineMinorVersion:!0,VBArray:!0,WSH:!0,WScript:!0,XDomainRequest:!0},exports.dojo={dojo:!1,dijit:!1,dojox:!1,define:!1,require:!1},exports.jquery={$:!1,jQuery:!1},exports.mootools={$:!1,$$:!1,Asset:!1,Browser:!1,Chain:!1,Class:!1,Color:!1,Cookie:!1,Core:!1,Document:!1,DomReady:!1,DOMEvent:!1,DOMReady:!1,Drag:!1,Element:!1,Elements:!1,Event:!1,Events:!1,Fx:!1,Group:!1,Hash:!1,HtmlTable:!1,IFrame:!1,IframeShim:!1,InputValidator:!1,instanceOf:!1,Keyboard:!1,Locale:!1,Mask:!1,MooTools:!1,Native:!1,Options:!1,OverText:!1,Request:!1,Scroller:!1,Slick:!1,Slider:!1,Sortables:!1,Spinner:!1,Swiff:!1,Tips:!1,Type:!1,typeOf:!1,URI:!1,Window:!1},exports.prototypejs={$:!1,$$:!1,$A:!1,$F:!1,$H:!1,$R:!1,$break:!1,$continue:!1,$w:!1,Abstract:!1,Ajax:!1,Class:!1,Enumerable:!1,Element:!1,Event:!1,Field:!1,Form:!1,Hash:!1,Insertion:!1,ObjectRange:!1,PeriodicalExecuter:!1,Position:!1,Prototype:!1,Selector:!1,Template:!1,Toggle:!1,Try:!1,Autocompleter:!1,Builder:!1,Control:!1,Draggable:!1,Draggables:!1,Droppables:!1,Effect:!1,Sortable:!1,SortableObserver:!1,Sound:!1,Scriptaculous:!1},exports.yui={YUI:!1,Y:!1,YUI_config:!1},exports.mocha={mocha:!1,describe:!1,xdescribe:!1,it:!1,xit:!1,context:!1,xcontext:!1,before:!1,after:!1,beforeEach:!1,afterEach:!1,suite:!1,test:!1,setup:!1,teardown:!1,suiteSetup:!1,suiteTeardown:!1},exports.jasmine={jasmine:!1,describe:!1,xdescribe:!1,it:!1,xit:!1,beforeEach:!1,afterEach:!1,setFixtures:!1,loadFixtures:!1,spyOn:!1,expect:!1,runs:!1,waitsFor:!1,waits:!1,beforeAll:!1,afterAll:!1,fail:!1,fdescribe:!1,fit:!1,pending:!1}},{}]},{},[\"/node_modules/jshint/src/jshint.js\"])}),ace.define(\"ace/mode/javascript_worker\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/worker/mirror\",\"ace/mode/javascript/jshint\"],function(acequire,exports,module){\"use strict\";function startRegex(arr){return RegExp(\"^(\"+arr.join(\"|\")+\")\")}var oop=acequire(\"../lib/oop\"),Mirror=acequire(\"../worker/mirror\").Mirror,lint=acequire(\"./javascript/jshint\").JSHINT,disabledWarningsRe=startRegex([\"Bad for in variable '(.+)'.\",'Missing \"use strict\"']),errorsRe=startRegex([\"Unexpected\",\"Expected \",\"Confusing (plus|minus)\",\"\\\\{a\\\\} unterminated regular expression\",\"Unclosed \",\"Unmatched \",\"Unbegun comment\",\"Bad invocation\",\"Missing space after\",\"Missing operator at\"]),infoRe=startRegex([\"Expected an assignment\",\"Bad escapement of EOL\",\"Unexpected comma\",\"Unexpected space\",\"Missing radix parameter.\",\"A leading decimal point can\",\"\\\\['{a}'\\\\] is better written in dot notation.\",\"'{a}' used out of scope\"]),JavaScriptWorker=exports.JavaScriptWorker=function(sender){Mirror.call(this,sender),this.setTimeout(500),this.setOptions()};oop.inherits(JavaScriptWorker,Mirror),function(){this.setOptions=function(options){this.options=options||{esnext:!0,moz:!0,devel:!0,browser:!0,node:!0,laxcomma:!0,laxbreak:!0,lastsemic:!0,onevar:!1,passfail:!1,maxerr:100,expr:!0,multistr:!0,globalstrict:!0},this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.changeOptions=function(newOptions){oop.mixin(this.options,newOptions),this.doc.getValue()&&this.deferredUpdate.schedule(100)},this.isValidJS=function(str){try{eval(\"throw 0;\"+str)}catch(e){if(0===e)return!0}return!1},this.onUpdate=function(){var value=this.doc.getValue();if(value=value.replace(/^#!.*\\n/,\"\\n\"),!value)return this.sender.emit(\"annotate\",[]);var errors=[],maxErrorLevel=this.isValidJS(value)?\"warning\":\"error\";lint(value,this.options,this.options.globals);for(var results=lint.errors,errorAdded=!1,i=0;results.length>i;i++){var error=results[i];if(error){var raw=error.raw,type=\"warning\";if(\"Missing semicolon.\"==raw){var str=error.evidence.substr(error.character);str=str.charAt(str.search(/\\S/)),\"error\"==maxErrorLevel&&str&&/[\\w\\d{(['\"]/.test(str)?(error.reason='Missing \";\" before statement',type=\"error\"):type=\"info\"}else{if(disabledWarningsRe.test(raw))continue;infoRe.test(raw)?type=\"info\":errorsRe.test(raw)?(errorAdded=!0,type=maxErrorLevel):\"'{a}' is not defined.\"==raw?type=\"warning\":\"'{a}' is defined but never used.\"==raw&&(type=\"info\")}errors.push({row:error.line-1,column:error.character-1,text:error.reason,type:type,raw:raw})}}this.sender.emit(\"annotate\",errors)}}.call(JavaScriptWorker.prototype)}),ace.define(\"ace/lib/es5-shim\",[\"require\",\"exports\",\"module\"],function(){function Empty(){}function doesDefinePropertyWork(object){try{return Object.defineProperty(object,\"sentinel\",{}),\"sentinel\"in object}catch(exception){}}function toInteger(n){return n=+n,n!==n?n=0:0!==n&&n!==1/0&&n!==-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n))),n}Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if(\"function\"!=typeof target)throw new TypeError(\"Function.prototype.bind called on incompatible \"+target);var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));return Object(result)===result?result:this}return target.apply(that,args.concat(slice.call(arguments)))};return target.prototype&&(Empty.prototype=target.prototype,bound.prototype=new Empty,Empty.prototype=null),bound});var defineGetter,defineSetter,lookupGetter,lookupSetter,supportsAccessors,call=Function.prototype.call,prototypeOfArray=Array.prototype,prototypeOfObject=Object.prototype,slice=prototypeOfArray.slice,_toString=call.bind(prototypeOfObject.toString),owns=call.bind(prototypeOfObject.hasOwnProperty);if((supportsAccessors=owns(prototypeOfObject,\"__defineGetter__\"))&&(defineGetter=call.bind(prototypeOfObject.__defineGetter__),defineSetter=call.bind(prototypeOfObject.__defineSetter__),lookupGetter=call.bind(prototypeOfObject.__lookupGetter__),lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)),2!=[1,2].splice(0).length)if(function(){function makeArray(l){var a=Array(l+2);return a[0]=a[1]=0,a}var lengthBefore,array=[];return array.splice.apply(array,makeArray(20)),array.splice.apply(array,makeArray(26)),lengthBefore=array.length,array.splice(5,0,\"XXX\"),lengthBefore+1==array.length,lengthBefore+1==array.length?!0:void 0}()){var array_splice=Array.prototype.splice;Array.prototype.splice=function(start,deleteCount){return arguments.length?array_splice.apply(this,[void 0===start?0:start,void 0===deleteCount?this.length-start:deleteCount].concat(slice.call(arguments,2))):[]}}else Array.prototype.splice=function(pos,removeCount){var length=this.length;pos>0?pos>length&&(pos=length):void 0==pos?pos=0:0>pos&&(pos=Math.max(length+pos,0)),length>pos+removeCount||(removeCount=length-pos);var removed=this.slice(pos,pos+removeCount),insert=slice.call(arguments,2),add=insert.length;if(pos===length)add&&this.push.apply(this,insert);else{var remove=Math.min(removeCount,length-pos),tailOldPos=pos+remove,tailNewPos=tailOldPos+add-remove,tailCount=length-tailOldPos,lengthAfterRemove=length-remove;if(tailOldPos>tailNewPos)for(var i=0;tailCount>i;++i)this[tailNewPos+i]=this[tailOldPos+i];else if(tailNewPos>tailOldPos)for(i=tailCount;i--;)this[tailNewPos+i]=this[tailOldPos+i];if(add&&pos===lengthAfterRemove)this.length=lengthAfterRemove,this.push.apply(this,insert);else for(this.length=lengthAfterRemove+add,i=0;add>i;++i)this[pos+i]=insert[i]}return removed};Array.isArray||(Array.isArray=function(obj){return\"[object Array]\"==_toString(obj)});var boxedString=Object(\"a\"),splitString=\"a\"!=boxedString[0]||!(0 in boxedString);if(Array.prototype.forEach||(Array.prototype.forEach=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError;for(;length>++i;)i in self&&fun.call(thisp,self[i],i,object)}),Array.prototype.map||(Array.prototype.map=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(result[i]=fun.call(thisp,self[i],i,object));return result}),Array.prototype.filter||(Array.prototype.filter=function(fun){var value,object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,result=[],thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)i in self&&(value=self[i],fun.call(thisp,value,i,object)&&result.push(value));return result}),Array.prototype.every||(Array.prototype.every=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&!fun.call(thisp,self[i],i,object))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0,thisp=arguments[1];if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");for(var i=0;length>i;i++)if(i in self&&fun.call(thisp,self[i],i,object))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduce of empty array with no initial value\");var result,i=0;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i++];break}if(++i>=length)throw new TypeError(\"reduce of empty array with no initial value\")}for(;length>i;i++)i in self&&(result=fun.call(void 0,result,self[i],i,object));return result}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(fun){var object=toObject(this),self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):object,length=self.length>>>0;if(\"[object Function]\"!=_toString(fun))throw new TypeError(fun+\" is not a function\");if(!length&&1==arguments.length)throw new TypeError(\"reduceRight of empty array with no initial value\");var result,i=length-1;if(arguments.length>=2)result=arguments[1];else for(;;){if(i in self){result=self[i--];break}if(0>--i)throw new TypeError(\"reduceRight of empty array with no initial value\")}do i in this&&(result=fun.call(void 0,result,self[i],i,object));while(i--);return result}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=0;for(arguments.length>1&&(i=toInteger(arguments[1])),i=i>=0?i:Math.max(0,length+i);length>i;i++)if(i in self&&self[i]===sought)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(sought){var self=splitString&&\"[object String]\"==_toString(this)?this.split(\"\"):toObject(this),length=self.length>>>0;if(!length)return-1;var i=length-1;for(arguments.length>1&&(i=Math.min(i,toInteger(arguments[1]))),i=i>=0?i:length-Math.abs(i);i>=0;i--)if(i in self&&sought===self[i])return i;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(object){return object.__proto__||(object.constructor?object.constructor.prototype:prototypeOfObject)}),!Object.getOwnPropertyDescriptor){var ERR_NON_OBJECT=\"Object.getOwnPropertyDescriptor called on a non-object: \";Object.getOwnPropertyDescriptor=function(object,property){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT+object);if(owns(object,property)){var descriptor,getter,setter;if(descriptor={enumerable:!0,configurable:!0},supportsAccessors){var prototype=object.__proto__;object.__proto__=prototypeOfObject;var getter=lookupGetter(object,property),setter=lookupSetter(object,property);if(object.__proto__=prototype,getter||setter)return getter&&(descriptor.get=getter),setter&&(descriptor.set=setter),descriptor}return descriptor.value=object[property],descriptor}}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(object){return Object.keys(object)}),!Object.create){var createEmpty;createEmpty=null===Object.prototype.__proto__?function(){return{__proto__:null}}:function(){var empty={};for(var i in empty)empty[i]=null;return empty.constructor=empty.hasOwnProperty=empty.propertyIsEnumerable=empty.isPrototypeOf=empty.toLocaleString=empty.toString=empty.valueOf=empty.__proto__=null,empty},Object.create=function(prototype,properties){var object;if(null===prototype)object=createEmpty();else{if(\"object\"!=typeof prototype)throw new TypeError(\"typeof prototype[\"+typeof prototype+\"] != 'object'\");var Type=function(){};Type.prototype=prototype,object=new Type,object.__proto__=prototype}return void 0!==properties&&Object.defineProperties(object,properties),object}}if(Object.defineProperty){var definePropertyWorksOnObject=doesDefinePropertyWork({}),definePropertyWorksOnDom=\"undefined\"==typeof document||doesDefinePropertyWork(document.createElement(\"div\"));if(!definePropertyWorksOnObject||!definePropertyWorksOnDom)var definePropertyFallback=Object.defineProperty}if(!Object.defineProperty||definePropertyFallback){var ERR_NON_OBJECT_DESCRIPTOR=\"Property description must be an object: \",ERR_NON_OBJECT_TARGET=\"Object.defineProperty called on non-object: \",ERR_ACCESSORS_NOT_SUPPORTED=\"getters & setters can not be defined on this javascript engine\";Object.defineProperty=function(object,property,descriptor){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(ERR_NON_OBJECT_TARGET+object);if(\"object\"!=typeof descriptor&&\"function\"!=typeof descriptor||null===descriptor)throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR+descriptor);if(definePropertyFallback)try{return definePropertyFallback.call(Object,object,property,descriptor)}catch(exception){}if(owns(descriptor,\"value\"))if(supportsAccessors&&(lookupGetter(object,property)||lookupSetter(object,property))){var prototype=object.__proto__;object.__proto__=prototypeOfObject,delete object[property],object[property]=descriptor.value,object.__proto__=prototype}else object[property]=descriptor.value;else{if(!supportsAccessors)throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);owns(descriptor,\"get\")&&defineGetter(object,property,descriptor.get),owns(descriptor,\"set\")&&defineSetter(object,property,descriptor.set)}return object}}Object.defineProperties||(Object.defineProperties=function(object,properties){for(var property in properties)owns(properties,property)&&Object.defineProperty(object,property,properties[property]);return object}),Object.seal||(Object.seal=function(object){return object}),Object.freeze||(Object.freeze=function(object){return object});try{Object.freeze(function(){})}catch(exception){Object.freeze=function(freezeObject){return function(object){return\"function\"==typeof object?object:freezeObject(object)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(object){return object}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(object){if(Object(object)===object)throw new TypeError;for(var name=\"\";owns(object,name);)name+=\"?\";object[name]=!0;var returnValue=owns(object,name);return delete object[name],returnValue}),!Object.keys){var hasDontEnumBug=!0,dontEnums=[\"toString\",\"toLocaleString\",\"valueOf\",\"hasOwnProperty\",\"isPrototypeOf\",\"propertyIsEnumerable\",\"constructor\"],dontEnumsLength=dontEnums.length;for(var key in{toString:null})hasDontEnumBug=!1;Object.keys=function(object){if(\"object\"!=typeof object&&\"function\"!=typeof object||null===object)throw new TypeError(\"Object.keys called on a non-object\");var keys=[];for(var name in object)owns(object,name)&&keys.push(name);if(hasDontEnumBug)for(var i=0,ii=dontEnumsLength;ii>i;i++){var dontEnum=dontEnums[i];owns(object,dontEnum)&&keys.push(dontEnum)}return keys}}Date.now||(Date.now=function(){return(new Date).getTime()});var ws=\"\t\\n\u000b\\f\\r   ᠎             　\\u2028\\u2029﻿\";if(!String.prototype.trim||ws.trim()){ws=\"[\"+ws+\"]\";var trimBeginRegexp=RegExp(\"^\"+ws+ws+\"*\"),trimEndRegexp=RegExp(ws+ws+\"*$\");String.prototype.trim=function(){return(this+\"\").replace(trimBeginRegexp,\"\").replace(trimEndRegexp,\"\")}}var toObject=function(o){if(null==o)throw new TypeError(\"can't convert \"+o+\" to object\");return Object(o)}});";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactHtmlParser = __webpack_require__(41);

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _reactHelmet = __webpack_require__(2);

var _Nav = __webpack_require__(42);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(SiteHeader, _React$Component);

    function SiteHeader(props) {
        _classCallCheck(this, SiteHeader);

        return _possibleConstructorReturn(this, (SiteHeader.__proto__ || Object.getPrototypeOf(SiteHeader)).call(this, props));
    }

    _createClass(SiteHeader, [{
        key: 'render',
        value: function render() {
            var siteTitle = this.props.title;
            var siteRoot = this.props.siteRoot;

            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { 'http-equiv': 'Content-Type', content: 'text/html; charset=ISO-8859-1' }),
                    _react2.default.createElement('meta', { name: 'robots', content: 'index, follow' }),
                    _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
                    _react2.default.createElement('meta', { name: 'description', content: 'Front-end Web Developer' }),
                    _react2.default.createElement('meta', { name: 'keywords', content: 'Web Developer, Web Designer, React, Wordpress, SEO, SEM, Angular, PHP, Front-end Web Develoepr' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'Patrick Harden | Front End Web Developer'
                    ),
                    _react2.default.createElement('link', { rel: 'canonical', href: siteRoot }),
                    _react2.default.createElement('script', { async: true, src: 'https://www.google-analytics.com/analytics.js' }),
                    _react2.default.createElement('script', { async: true, src: '/assets/js/autotrack.custom.js' })
                ),
                _react2.default.createElement(_Nav2.default, null)
            );
        }
    }]);

    return SiteHeader;
}(_react2.default.Component));

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _reactstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
    _inherits(Navigation, _React$Component);

    function Navigation(props) {
        _classCallCheck(this, Navigation);

        var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            isOpen: false
        };
        return _this;
    }

    _createClass(Navigation, [{
        key: 'toggle',
        value: function toggle() {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'navWrapper' },
                _react2.default.createElement(
                    _reactstrap.Navbar,
                    { color: 'white', dark: true, fixed: 'top', expand: 'md' },
                    _react2.default.createElement(
                        'div',
                        { className: 'containerr' },
                        _react2.default.createElement(
                            _reactstrap.Row,
                            null,
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { xs: '3' },
                                _react2.default.createElement(
                                    _reactstrap.NavbarBrand,
                                    { href: '/' },
                                    'Patrick Harden'
                                )
                            ),
                            _react2.default.createElement(
                                _reactstrap.Col,
                                { xs: '9', className: 'text-right' },
                                _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.toggle }),
                                _react2.default.createElement(
                                    _reactstrap.Collapse,
                                    { isOpen: this.state.isOpen, navbar: true },
                                    _react2.default.createElement(
                                        _reactstrap.Nav,
                                        { className: 'ml-auto', navbar: true },
                                        _react2.default.createElement(
                                            _reactstrap.NavItem,
                                            null,
                                            _react2.default.createElement(
                                                _reactStatic.Link,
                                                { to: '/', className: 'nav-link', onClick: this.toggle },
                                                'Home'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.NavItem,
                                            null,
                                            _react2.default.createElement(
                                                _reactStatic.Link,
                                                { to: '/#work', className: 'nav-link', onClick: this.toggle },
                                                'Work'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            _reactstrap.NavItem,
                                            null,
                                            _react2.default.createElement(
                                                _reactStatic.Link,
                                                { to: '/contact', className: 'nav-link', onClick: this.toggle },
                                                'Contact'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navigation;
}(_react2.default.Component));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
   _inherits(SiteFooter, _React$Component);

   function SiteFooter(props) {
      _classCallCheck(this, SiteFooter);

      return _possibleConstructorReturn(this, (SiteFooter.__proto__ || Object.getPrototypeOf(SiteFooter)).call(this, props));
   }

   _createClass(SiteFooter, [{
      key: 'render',
      value: function render() {
         var siteTitle = this.props.title;
         var siteCreator = this.props.siteCreator;
         var siteCreatorURL = this.props.siteCreatorURL;

         return _react2.default.createElement(
            'footer',
            { id: 'contact', 'class': 'footer' },
            _react2.default.createElement(
               'div',
               { 'class': 'containerr' },
               _react2.default.createElement(
                  'h2',
                  { 'class': 'secondary-header' },
                  'Looking to start a project?'
               ),
               _react2.default.createElement(
                  'a',
                  { 'class': 'hero__link', href: 'mailto: patch2908@gmail.com' },
                  'Let\'s talk.'
               )
            ),
            _react2.default.createElement(
               'div',
               { 'class': 'containerr' },
               _react2.default.createElement(
                  'ul',
                  { 'class': 'social-list' },
                  _react2.default.createElement(
                     'li',
                     { 'class': 'social-list__item' },
                     _react2.default.createElement(
                        'a',
                        { href: 'https://github.com/PatrickHarden', target: '_blank', 'class': 'social-list__item-link' },
                        'GitHub'
                     )
                  ),
                  _react2.default.createElement(
                     'li',
                     { 'class': 'social-list__item' },
                     _react2.default.createElement(
                        'a',
                        { href: 'https://www.linkedin.com/in/patrick-harden-299a97154/', target: '_blank', 'class': 'social-list__item-link' },
                        'LinkedIn'
                     )
                  ),
                  _react2.default.createElement(
                     'li',
                     { 'class': 'social-list__item' },
                     _react2.default.createElement(
                        'a',
                        { href: 'images/ResumeSingle.pdf', target: '_blank', 'class': 'social-list__item-link' },
                        'Resume'
                     )
                  ),
                  _react2.default.createElement(
                     'li',
                     { 'class': 'social-list__item' },
                     _react2.default.createElement(
                        _reactStatic.Link,
                        { to: '/contact', 'class': 'social-list__item-link' },
                        'Message'
                     )
                  ),
                  _react2.default.createElement(
                     'li',
                     { 'class': 'social-list__item' },
                     _react2.default.createElement(
                        'a',
                        { href: 'mailto: patch2908@gmail.com', 'class': 'social-list__item-link' },
                        'Email'
                     )
                  )
               )
            )
         );
      }
   }]);

   return SiteFooter;
}(_react2.default.Component));

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.c73e7bf8.js.map