Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _scrollreveal = require('scrollreveal');

var _scrollreveal2 = _interopRequireDefault(_scrollreveal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line semi


// eslint-disable-line semi


/**
 * Creates React Component that will have animated elements on scroll
 *
 * @param {array|object} srOptions
 * @param {string} srOptions.selector
 * @param {object} srOptions.options
 * @param {number} srOptions.interval
 * @return {function} React component
 */
var ReactScrollreveal = function ReactScrollreveal() {
  var srOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var sr = (0, _scrollreveal2.default)();

    var ComponentWithScrollReveal = function (_React$Component) {
      _inherits(ComponentWithScrollReveal, _React$Component);

      function ComponentWithScrollReveal() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ComponentWithScrollReveal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentWithScrollReveal.__proto__ || Object.getPrototypeOf(ComponentWithScrollReveal)).call.apply(_ref, [this].concat(args))), _this), _this.forEachSrElement = function (fn) {
          var elements = [];

          _this.forEachSrOption(function (_ref2) {
            var selector = _ref2.selector;

            elements.concat(Array.prototype.slice.apply(document.querySelectorAll(selector)));
          });

          elements.forEach(fn);
        }, _this.forEachSrOption = function (fn) {
          if (Array.isArray(srOptions)) {
            srOptions.forEach(function (options) {
              fn(options);
            });
          } else if ((typeof srOptions === 'undefined' ? 'undefined' : _typeof(srOptions)) === 'object') {
            fn(srOptions);
          } else {
            throw new TypeError('Invalid arguments were passed');
          }
        }, _this.applyRevealAnimation = function (_ref3) {
          var selector = _ref3.selector,
              _ref3$options = _ref3.options,
              options = _ref3$options === undefined ? {} : _ref3$options,
              interval = _ref3.interval;

          var revealElements = _this.getRevealElements(selector);
          var opts = Object.assign({}, options);

          // revealElements can be NodeList or single node
          if (revealElements.length || !!revealElements.nodeType) {
            sr.reveal(revealElements, opts, interval);
          }
        }, _this.getRef = function (node) {
          _this.animationContainer = node;
          // eslint-disable-next-line
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(ComponentWithScrollReveal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.initialize();
        }
      }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
          this.refresh();
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.clear();
        }

        /**
         *
         * @param {function} fn
         */


        /**
         * Iterates through all srOptions and applies given function
         *
         * @param {function} fn
         * @return undefined
         */

      }, {
        key: 'getRevealElements',


        /**
         * Get reveal elements by given selector
         *
         * @param {string} selector
         * @return {NodeList}
         */
        value: function getRevealElements(selector) {
          return selector ? this.animationContainer.querySelectorAll(selector) : this.animationContainer;
        }

        /**
         * Init scrollreveal for all reveal elements by selector
         *
         * @param {number} interval - ScrollReveal's interval value to make sequential animation
         * @param {object} options - ScrollReveal's options (see https://github.com/jlmakes/scrollreveal#2-configuration)
         * @param {string} selector - selector that gets elements to reveal
         */

      }, {
        key: 'initialize',


        /**
         * Initialize sr animations for every reveal element by given selector
         *
         * @return undefined
         */
        value: function initialize() {
          if (!this.animationContainer) {
            return;
          }

          this.forEachSrOption(this.applyRevealAnimation);
        }
      }, {
        key: 'clear',
        value: function clear(clearStyles) {
          // clearing styles makes sr animation initialize again
          // on same element that were still in DOM
          if (clearStyles) {
            this.forEachSrElement(function (el) {
              sr.clear(el);
            });
          } else {
            // remove event listeners
            // on component unmount event
            // sr.destroy();
          }
        }
      }, {
        key: 'refresh',
        value: function refresh() {
          this.clear(true);
          this.initialize();
        }

        /**
         * Gets ref to the child's component desired animation container DOM node
         *
         * @param {object} node
         * @return undefined
         */

      }, {
        key: 'render',
        value: function render() {
          return _react2.default.createElement(Component, _extends({
            animationContainerReference: this.getRef,
            destroyRevealAnimation: this.clear,
            refreshRevealAnimation: this.refresh
          }, this.props));
        }
      }]);

      return ComponentWithScrollReveal;
    }(_react2.default.Component);

    ComponentWithScrollReveal.displayName = 'ComponentWithScrollReveal';


    return ComponentWithScrollReveal;
  };
};

exports.default = ReactScrollreveal;