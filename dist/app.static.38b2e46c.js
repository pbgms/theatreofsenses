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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(5);

var _reactStatic = __webpack_require__(1);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactHotLoader.AppContainer,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);

  // Hot Module Replacement
  if (false) {
    module.hot.accept('./App', function () {
      render(require('./App').default);
    });
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactStatic = __webpack_require__(1);

var _WorkList = __webpack_require__(7);

var _WorkList2 = _interopRequireDefault(_WorkList);

var _About = __webpack_require__(9);

var _About2 = _interopRequireDefault(_About);

var _Events = __webpack_require__(10);

var _Events2 = _interopRequireDefault(_Events);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import 404 from 'containers/404';


var data = {
  title: {
    en: 'Theatre of senses',
    lt: 'Pojūčių teatras'
  },
  items: [{
    slug: 'events',
    name: { en: 'Events', lt: 'Renginiai' }
  }, {
    slug: 'works',
    name: { en: 'Works', lt: 'Darbai' }
  }, {
    slug: 'about',
    name: { en: 'About', lt: 'Apie' }
  }]
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      lang: typeof window !== 'undefined' && window.location ? window.location.hostname === 'pojuciuteatras' ? 'lt' : 'en' : 'en',
      current: typeof window !== 'undefined' && window.location ? window.location.pathname : ''
    };

    _this.toggleLang = _this.toggleLang.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        lang: window.location.hostname === 'pojuciuteatras' ? 'lt' : 'en',
        current: window.location.pathname
      });
    }
  }, {
    key: 'toggleLang',
    value: function toggleLang() {
      this.setState({ lang: this.state.lang === 'lt' ? 'en' : 'lt' });
    }
  }, {
    key: 'generateLanguageBlock',
    value: function generateLanguageBlock() {
      var lang = this.state.lang;


      var langBlock = void 0;

      if (lang === 'en') {
        langBlock = _react2.default.createElement(
          'div',
          { className: 'language-block' },
          _react2.default.createElement(
            'span',
            { className: 'lang-block-text' },
            'en ',
            _react2.default.createElement(
              'span',
              { className: 'lang-block-click', onClick: this.toggleLang },
              'lt'
            )
          )
        );
      } else {
        langBlock = _react2.default.createElement(
          'div',
          { className: 'language-block' },
          _react2.default.createElement(
            'span',
            { className: 'lang-block-text' },
            _react2.default.createElement(
              'span',
              { className: 'lang-block-click', onClick: this.toggleLang },
              'en'
            ),
            ' lt'
          )
        );
      }
      return langBlock;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var pathname = this.state.current;

      var lang = this.state.lang;

      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          'div',
          { className: 'App' },
          _react2.default.createElement(
            _reactStatic.Head,
            null,
            _react2.default.createElement('meta', { charset: 'utf-8' }),
            _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
            _react2.default.createElement('meta', { property: 'og:url', content: 'http://www.theatreofsenses.com/' }),
            _react2.default.createElement('meta', { property: 'og:title', content: 'Theatre of senses' }),
            _react2.default.createElement('meta', { property: 'og:description', content: 'Theatre of senses creates participatory performances' }),
            _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/logo.png' }),
            _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/bendra.jpg' }),
            _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/bendra1.jpg' }),
            _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/beforethelight/12967441_1195397820500203_7812589370848680694_o.jpg' }),
            _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/picturesofsenses/DSC_2878.JPG' }),
            _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/primordial/15400421_1356627651014436_8408958191387817476_n.jpg' }),
            _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/stonewatersting/vyt_3199.jpg' }),
            _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/tenseinsense/DSC_0151.JPG' }),
            _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/font-awesome.min.css' }),
            _react2.default.createElement('link', { rel: 'shortcut icon', href: '/favicon.ico' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'App-left' },
            _react2.default.createElement(
              'div',
              { className: 'App-logo-block' },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/' },
                _react2.default.createElement('img', { src: '/images/logo.png', className: 'App-logo', alt: 'logo' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'left-lower-block' },
              _react2.default.createElement(
                'div',
                { className: 'App-title' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/' },
                  data.title[lang]
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'App-menu' },
                _react2.default.createElement(
                  'div',
                  { className: 'menu-item-normal' },
                  data.items.map(function (item, index) {

                    var activeSlug = pathname.indexOf('/' + item.slug) > -1;
                    var itemClasses = (0, _classnames2.default)('App-menu-item', { Appmenuitemactive: activeSlug });
                    var urlSlug = '/' + lang + '/' + item.slug;

                    return _react2.default.createElement(
                      'div',
                      { key: item.slug, className: itemClasses, onClick: function onClick() {
                          return _this2.setState({ current: urlSlug });
                        } },
                      _react2.default.createElement(
                        _reactStatic.Link,
                        { to: urlSlug },
                        item.name[lang]
                      )
                    );
                  })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'App-menu-item App-menu-item-fb' },
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.facebook.com/pojuciuteatras', target: '_blank', rel: 'noopener noreferrer' },
                    _react2.default.createElement('i', { className: 'fa fa-facebook-square', 'aria-hidden': 'true' }),
                    'acebook'
                  )
                ),
                this.generateLanguageBlock()
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'App-right-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'App-right' },
              _react2.default.createElement(
                _reactStatic.Switch,
                null,
                _react2.default.createElement(_reactStatic.Route, { path: '/', exact: true, render: function render() {
                    return null;
                  } }),
                _react2.default.createElement(_reactStatic.Route, { path: '/:lang/about', render: function render() {
                    return _react2.default.createElement(_About2.default, { lang: lang });
                  } }),
                _react2.default.createElement(_reactStatic.Route, { path: '/:lang/events', render: function render() {
                    return _react2.default.createElement(_Events2.default, { lang: lang });
                  } }),
                _react2.default.createElement(_reactStatic.Route, { path: '/:lang/works', component: _WorkList2.default })
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Work = __webpack_require__(8);

var _Work2 = _interopRequireDefault(_Work);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkList = function (_Component) {
    _inherits(WorkList, _Component);

    function WorkList(props) {
        _classCallCheck(this, WorkList);

        var _this = _possibleConstructorReturn(this, (WorkList.__proto__ || Object.getPrototypeOf(WorkList)).call(this, props));

        props.works.works.sort(function (a, b) {
            return b.date.localeCompare(a.date);
        });
        return _this;
    }

    _createClass(WorkList, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var lang = this.props.lang;

            var works = this.props.works.works;

            var label = this.props.works.labels;

            return _react2.default.createElement(
                'div',
                { key: 'works' },
                _react2.default.createElement(
                    'div',
                    { className: 'works-block' },
                    _react2.default.createElement(
                        'div',
                        { className: 'App-right-heading-works' },
                        label.title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'works-menu' },
                        works.map(function (item, i) {

                            // this.props.work comes from react-static children route
                            var defaultSlug = _this2.props.work ? _this2.props.work.slug : '';
                            var itemClasses = (0, _classnames2.default)('works-menu-item', { worksmenuitemactive: item.slug === defaultSlug });

                            return _react2.default.createElement(
                                'div',
                                { className: itemClasses, key: item.slug },
                                _react2.default.createElement(
                                    _reactStatic.Link,
                                    { to: '/' + lang + '/works/' + item.slug },
                                    item.name
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(_reactStatic.Route, { path: '/:lang/works/:name', component: _Work2.default })
            );
        }
    }]);

    return WorkList;
}(_react.Component);

exports.default = (0, _reactStatic.getRouteProps)(WorkList);

/***/ }),
/* 8 */
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

var Work = function (_Component) {
    _inherits(Work, _Component);

    function Work(props) {
        _classCallCheck(this, Work);

        var _this = _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this, props));

        _this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
            readMore: false
        };

        _this.closeLightbox = _this.closeLightbox.bind(_this);
        _this.gotoNext = _this.gotoNext.bind(_this);
        _this.gotoPrevious = _this.gotoPrevious.bind(_this);
        _this.openLightbox = _this.openLightbox.bind(_this);
        return _this;
    }

    _createClass(Work, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                lightboxIsOpen: false,
                currentImage: 0
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener("keyup", this.handleKeyboard.bind(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener("keyup", this.handleKeyboard.bind(this));
        }
    }, {
        key: 'openLightbox',
        value: function openLightbox(index, event) {
            event.preventDefault();
            this.setState({
                currentImage: index,
                lightboxIsOpen: true
            });
        }
    }, {
        key: 'closeLightbox',
        value: function closeLightbox() {
            this.setState({
                currentImage: 0,
                lightboxIsOpen: false
            });
        }
    }, {
        key: 'gotoPrevious',
        value: function gotoPrevious() {
            this.setState({
                currentImage: this.state.currentImage - 1
            });
        }
    }, {
        key: 'gotoNext',
        value: function gotoNext() {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        }
    }, {
        key: 'handleKeyboard',
        value: function handleKeyboard(event) {
            if (event.keyCode === 37) {
                //esc
                this.gotoPrevious();
            }

            if (event.keyCode === 39) {
                //enter
                this.gotoNext();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var work = this.props.work;
            var label = this.props.works.labels;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'App-right-heading' },
                    work.name,
                    _react2.default.createElement(
                        'div',
                        { className: 'text-inline' },
                        work.date
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'App-right-text' },
                    work.description
                ),
                work.readMore && _react2.default.createElement(
                    'div',
                    { className: 'App-right-text' },
                    !this.state.readMore && _react2.default.createElement(
                        'div',
                        { className: 'readMorelink', onClick: function onClick() {
                                _this2.setState({ readMore: true });
                            } },
                        'Read more'
                    ),
                    this.state.readMore && _react2.default.createElement(
                        'div',
                        { className: 'readMorelink', onClick: function onClick() {
                                _this2.setState({ readMore: false });
                            } },
                        'Read less'
                    ),
                    this.state.readMore && _react2.default.createElement(
                        'div',
                        null,
                        work.readMore
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'image-gallery' },
                    work.images.map(function (img, index) {
                        return _react2.default.createElement('img', { src: '/images/works/' + img.src, alt: '', onClick: function onClick(event) {
                                return _this2.openLightbox(index, event);
                            }, key: index });
                    })
                ),
                work.imagesAuthor && _react2.default.createElement(
                    'div',
                    { className: 'photosBy' },
                    label.imagesAuthor,
                    ' ',
                    work.imagesAuthor
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'App-right-subheading' },
                    _react2.default.createElement(
                        'b',
                        null,
                        label.performers
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'App-right-text performers' },
                    work.performers.split('\n').map(function (item, key) {
                        return _react2.default.createElement(
                            'span',
                            { key: key },
                            item,
                            _react2.default.createElement('br', null)
                        );
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'App-right-subheading' },
                    _react2.default.createElement(
                        'b',
                        null,
                        label.rider
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'App-right-text' },
                    work.rider.duration !== '' && _react2.default.createElement(
                        'div',
                        { className: 'rider-item' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-label' },
                            'Duration:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-text' },
                            work.rider.duration
                        )
                    ),
                    work.rider.language !== '' && _react2.default.createElement(
                        'div',
                        { className: 'rider-item' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-label' },
                            'Language:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-text' },
                            work.rider.language
                        )
                    ),
                    work.rider.stage !== '' && _react2.default.createElement(
                        'div',
                        { className: 'rider-item' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-label' },
                            'Stage:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-text' },
                            work.rider.stage
                        )
                    ),
                    work.rider.light !== '' && _react2.default.createElement(
                        'div',
                        { className: 'rider-item' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-label' },
                            'Light:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-text' },
                            work.rider.light
                        )
                    ),
                    work.rider.sound !== '' && _react2.default.createElement(
                        'div',
                        { className: 'rider-item' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-label' },
                            'Sound:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-text' },
                            work.rider.sound
                        )
                    ),
                    work.rider.schedule !== '' && _react2.default.createElement(
                        'div',
                        { className: 'rider-item' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-label' },
                            'Schedule:'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'rider-item-text' },
                            work.rider.schedule
                        )
                    )
                ),
                this.state.lightboxIsOpen && work.images[this.state.currentImage] && _react2.default.createElement(
                    'div',
                    { className: 'lightbox' },
                    _react2.default.createElement(
                        'div',
                        { className: 'arrow close', onClick: this.closeLightbox },
                        '\u2715'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'arrow arrowRight', onClick: this.gotoPrevious },
                        '\u2794'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'lightboxImage' },
                        _react2.default.createElement('img', { className: 'image', src: '/images/works/' + work.images[this.state.currentImage].src, alt: '' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'arrow arrowLeft', onClick: this.gotoNext },
                        '\u2794'
                    ),
                    _react2.default.createElement('div', { className: 'shade', onClick: this.closeLightbox })
                )
            );
        }
    }]);

    return Work;
}(_react.Component);

exports.default = (0, _reactStatic.getRouteProps)(Work);

/***/ }),
/* 9 */
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

var About = function (_Component) {
  _inherits(About, _Component);

  function About(props) {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

    _this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    _this.closeLightbox = _this.closeLightbox.bind(_this);
    _this.gotoNext = _this.gotoNext.bind(_this);
    _this.gotoPrevious = _this.gotoPrevious.bind(_this);
    _this.openLightbox = _this.openLightbox.bind(_this);
    return _this;
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('keyup', this.handleKeyboard.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keyup', this.handleKeyboard.bind(this));
    }
  }, {
    key: 'openLightbox',
    value: function openLightbox(index, event) {
      event.preventDefault();
      this.setState({
        currentImage: index,
        lightboxIsOpen: true
      });
    }
  }, {
    key: 'closeLightbox',
    value: function closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false
      });
    }
  }, {
    key: 'gotoPrevious',
    value: function gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1
      });
    }
  }, {
    key: 'gotoNext',
    value: function gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1
      });
    }
  }, {
    key: 'handleKeyboard',
    value: function handleKeyboard(event) {
      if (event.keyCode === 37) {
        // esc
        this.gotoPrevious();
      }

      if (event.keyCode === 39) {
        // enter
        this.gotoNext();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log('About', this.props);

      var lang = this.props.lang;

      var data = this.props.data;

      return _react2.default.createElement(
        'div',
        { key: 'about' },
        _react2.default.createElement(
          _reactStatic.Head,
          null,
          _react2.default.createElement('meta', { charset: 'utf-8' }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
          _react2.default.createElement('meta', { property: 'og:url', content: 'http://www.theatreofsenses.com' + this.props.match.path }),
          _react2.default.createElement('meta', { property: 'og:title', content: 'Theatre of senses' }),
          _react2.default.createElement('meta', { property: 'og:description', content: 'Theatre of senses creates participatory performances' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/logo.png' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/bendra.jpg' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/bendra1.jpg' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/beforethelight/12967441_1195397820500203_7812589370848680694_o.jpg' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/picturesofsenses/DSC_2878.JPG' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/primordial/15400421_1356627651014436_8408958191387817476_n.jpg' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/stonewatersting/vyt_3199.jpg' }),
          _react2.default.createElement('meta', { property: 'og:image', content: 'http://www.theatreofsenses.com/images/works/tenseinsense/DSC_0151.JPG' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: '/css/font-awesome.min.css' }),
          _react2.default.createElement('link', { rel: 'shortcut icon', href: '/favicon.ico' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'works-block' },
          _react2.default.createElement(
            'div',
            { className: 'App-right-heading-works' },
            data.labels.title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'image-gallery-about' },
          data.images.map(function (img, index) {
            return index < 2 && _react2.default.createElement(
              'div',
              { key: index, className: 'image-about' },
              _react2.default.createElement('img', {
                src: '/images/' + img.src,
                alt: '',
                onClick: function onClick(event) {
                  return _this2.openLightbox(index, event);
                },
                key: index
              })
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'App-right-text', style: { fontSize: '14px' } },
          _react2.default.createElement(
            'ul',
            { className: 'aboutList' },
            data.text.split('\n').map(function (item, key) {
              return _react2.default.createElement(
                'li',
                { key: key },
                item
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'aboutBlock' },
          _react2.default.createElement(
            'div',
            { className: 'aboutSubheading' },
            _react2.default.createElement(
              'b',
              null,
              data.labels.team
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: 'App-right-text' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                data.labels.director
              ),
              _react2.default.createElement(
                'div',
                { className: 'person' },
                data.director
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'title' },
                data.labels.scenographer
              ),
              _react2.default.createElement(
                'div',
                { className: 'person' },
                data.scenographer
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'title' },
                data.labels.team
              ),
              _react2.default.createElement(
                'div',
                { className: 'person' },
                data.team.split('\n').map(function (item, key) {
                  return _react2.default.createElement(
                    'span',
                    { key: key },
                    item,
                    _react2.default.createElement('br', null)
                  );
                })
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                { className: 'title' },
                data.labels.management
              ),
              _react2.default.createElement(
                'div',
                { className: 'person' },
                data.management
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'aboutSubheading' },
            _react2.default.createElement(
              'b',
              null,
              data.labels.writeUs
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: 'App-right-text', style: { fontSize: '17px' } },
              _react2.default.createElement(
                'a',
                { href: 'http://www.facebook.com/pojuciuteatras', target: '_blank', rel: 'noopener noreferrer' },
                _react2.default.createElement('i', { className: 'fa fa-facebook-square', 'aria-hidden': 'true' }),
                'acebook'
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'a',
                { href: 'mailto:hi@theatreofsenses.com' },
                'hi@theatreofsenses.com'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'App-right-subheading' },
          _react2.default.createElement(
            'b',
            null,
            data.labels.press
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'App-right-text' },
          data.press.map(function (el, i) {
            return _react2.default.createElement(
              'div',
              { key: i, style: { paddingBottom: '5px' } },
              _react2.default.createElement(
                'a',
                { href: el.href, target: '_blank', rel: 'noopener noreferrer' },
                el.text
              )
            );
          })
        ),
        this.state.lightboxIsOpen && data.images[this.state.currentImage] && _react2.default.createElement(
          'div',
          { className: 'lightbox' },
          _react2.default.createElement(
            'div',
            { className: 'arrow close', onClick: this.closeLightbox },
            '\u2715'
          ),
          _react2.default.createElement(
            'div',
            { className: 'arrow arrowRight', onClick: this.gotoPrevious },
            '\u2794'
          ),
          _react2.default.createElement(
            'div',
            { className: 'lightboxImage' },
            _react2.default.createElement('img', { className: 'image', src: '/images/' + data.images[this.state.currentImage].src, alt: '' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'arrow arrowLeft', onClick: this.gotoNext },
            '\u2794'
          ),
          _react2.default.createElement('div', { className: 'shade', onClick: this.closeLightbox })
        )
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = (0, _reactStatic.getRouteProps)(About);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(11);

var _moment2 = _interopRequireDefault(_moment);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Events = function (_Component) {
    _inherits(Events, _Component);

    function Events(props) {
        _classCallCheck(this, Events);

        var _this = _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this, props));

        _this.state = {
            data: props.data.years.filter(function (year) {
                return (0, _moment2.default)(year.name, 'YYYY').isSameOrAfter((0, _moment2.default)(), 'year');
            }).sort(function (a, b) {
                return a.name > b.name;
            }),
            activeSlug: 'upcoming'
        };
        return _this;
    }

    _createClass(Events, [{
        key: 'changePeriod',
        value: function changePeriod(slug) {

            var data = this.props.data;

            if (slug === 'upcoming') this.setState({
                data: data.years.filter(function (year) {
                    return (0, _moment2.default)(year.name, 'YYYY').isSameOrAfter((0, _moment2.default)(), 'year');
                }).sort(function (a, b) {
                    return a.name > b.name;
                }),
                activeSlug: 'upcoming'
            });else this.setState({
                data: data.years.filter(function (year) {
                    return (0, _moment2.default)(year.name, 'YYYY').isBefore((0, _moment2.default)(), 'year');
                }).sort(function (a, b) {
                    return a.name > b.name;
                }),
                activeSlug: 'past'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log('Events', this.props);

            var data = this.props.data;

            var lang = this.props.lang;

            return _react2.default.createElement(
                'div',
                { key: 'events' },
                _react2.default.createElement(
                    'div',
                    { className: 'works-block' },
                    _react2.default.createElement(
                        'div',
                        { className: 'App-right-heading-works' },
                        data.labels.title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'events-menu' },
                    data.menuItems.map(function (item, index) {
                        var eventMenuClasses = (0, _classnames2.default)('events-menu-item', { eventsmenuitemactive: item.slug === _this2.state.activeSlug });
                        return _react2.default.createElement(
                            'div',
                            { className: eventMenuClasses, onClick: function onClick() {
                                    return _this2.changePeriod(item.slug);
                                }, key: index },
                            item.name
                        );
                    })
                ),
                this.state.data.map(function (year, i) {

                    return _react2.default.createElement(
                        'div',
                        { key: i },
                        _react2.default.createElement(
                            'div',
                            { className: 'events-year' },
                            year.name
                        ),
                        year.months.map(function (month, j) {

                            return _react2.default.createElement(
                                'div',
                                { className: 'events-month-block', key: j },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'events-month' },
                                    month.name
                                ),
                                month.events.map(function (event, k) {

                                    return _react2.default.createElement(
                                        'div',
                                        { key: k, className: 'event-in-month' },
                                        _react2.default.createElement(
                                            'div',
                                            null,
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'event-date' },
                                                event.date
                                            ),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'event-name' },
                                                event.name
                                            ),
                                            event.link && _react2.default.createElement(
                                                'a',
                                                { className: 'event-link', target: '_blank', rel: 'noopener noreferrer', href: event.link },
                                                data.labels.link
                                            )
                                        )
                                    );
                                })
                            );
                        })
                    );
                })
            );
        }
    }]);

    return Events;
}(_react.Component);

exports.default = (0, _reactStatic.getRouteProps)(Events);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=app.static.38b2e46c.js.map