webpackJsonp([2],{

/***/ "+Op1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wrapDisplayName = __webpack_require__("/JZL");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _withWidth = __webpack_require__("/U7w");

var _withWidth2 = _interopRequireDefault(_withWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Dialog will responsively be full screen *at or below* the given breakpoint
 * (defaults to 'sm' for mobile devices).
 * Notice that this Higher-order Component is incompatible with server side rendering.
 */
var withMobileDialog = function withMobileDialog() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (Component) {
    var _options$breakpoint = options.breakpoint,
        breakpoint = _options$breakpoint === undefined ? 'sm' : _options$breakpoint;


    function WithMobileDialog(props) {
      return _react2.default.createElement(Component, (0, _extends3.default)({ fullScreen: (0, _withWidth.isWidthDown)(breakpoint, props.width, true) }, props));
    }

    WithMobileDialog.propTypes =  false ? {
      width: _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
    } : {};

    if (false) {
      WithMobileDialog.displayName = (0, _wrapDisplayName2.default)(Component, 'withMobileDialog');
    }

    return (0, _withWidth2.default)()(WithMobileDialog);
  };
};

exports.default = withMobileDialog;

/***/ }),

/***/ "+X65":
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__("O4Lo"),
    isObject = __webpack_require__("yCNF");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "+Ygu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = __webpack_require__("cebZ");

var _Typography2 = _interopRequireDefault(_Typography);

var _StepIcon = __webpack_require__("Cw5q");

var _StepIcon2 = _interopRequireDefault(_StepIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    horizontal: {},
    vertical: {},
    active: {
      fontWeight: 500
    },
    completed: {
      fontWeight: 500
    },
    disabled: {
      cursor: 'default'
    },
    iconContainer: {},
    iconContainerNoAlternative: {
      paddingRight: theme.spacing.unit
    },
    alternativeLabelRoot: {
      flexDirection: 'column'
    },
    alternativeLabel: {
      textAlign: 'center',
      marginTop: theme.spacing.unit * 2
    }
  };
};

function StepLabel(props) {
  var _classNames, _classNames2;

  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'disabled', 'icon', 'last', 'optional', 'orientation']);


  var className = (0, _classnames2.default)(classes.root, classes[orientation], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.completed, completed), (0, _defineProperty3.default)(_classNames, classes.alternativeLabelRoot, alternativeLabel), (0, _defineProperty3.default)(_classNames, 'classNameProp', classNameProp), _classNames));
  var labelClassName = (0, _classnames2.default)((_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.alternativeLabel, alternativeLabel), (0, _defineProperty3.default)(_classNames2, classes.completed, completed), (0, _defineProperty3.default)(_classNames2, classes.active, active), _classNames2));

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    icon && _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(classes.iconContainer, (0, _defineProperty3.default)({}, classes.iconContainerNoAlternative, !alternativeLabel))
      },
      _react2.default.createElement(_StepIcon2.default, {
        completed: completed,
        active: active,
        icon: icon,
        alternativeLabel: alternativeLabel
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Typography2.default,
        { type: 'body1', className: labelClassName },
        children
      ),
      optional
    )
  );
}

StepLabel.propTypes =  false ? {
  /**
   * @ignore
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children: _propTypes2.default.node,
  /**
   * Custom styles for component.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label - if not set will be set by Step component.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * The optional node to display.
   */
  optional: _propTypes2.default.node,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

StepLabel.defaultProps = {
  active: false,
  alternativeLabel: false,
  completed: false,
  disabled: false,
  last: false,
  orientation: 'horizontal'
};

StepLabel.muiName = 'StepLabel';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepLabel' })(StepLabel);

/***/ }),

/***/ "+dzM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _isNan = __webpack_require__("MICi");

var _isNan2 = _interopRequireDefault(_isNan);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = __webpack_require__("ppkW");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__("O4Lo");

var _debounce2 = _interopRequireDefault(_debounce);

var _reactScrollbarSize = __webpack_require__("XTqB");

var _reactScrollbarSize2 = _interopRequireDefault(_reactScrollbarSize);

var _normalizeScrollLeft = __webpack_require__("NPDY");

var _scroll = __webpack_require__("yTkK");

var _scroll2 = _interopRequireDefault(_scroll);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _TabIndicator = __webpack_require__("YtsB");

var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

var _TabScrollButton = __webpack_require__("GRdp");

var _TabScrollButton2 = _interopRequireDefault(_TabScrollButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch' // Add iOS momentum scrolling.
    },
    flexContainer: {
      display: 'flex'
    },
    scrollingContainer: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },
    scrollable: {
      overflowX: 'scroll'
    },
    centered: {
      justifyContent: 'center'
    },
    buttonAuto: (0, _defineProperty3.default)({}, theme.breakpoints.down('sm'), {
      display: 'none'
    })
  };
};

var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      indicatorStyle: {},
      scrollerStyle: {
        marginBottom: 0
      },
      showLeftScroll: false,
      showRightScroll: false,
      mounted: false
    }, _this.getConditionalElements = function () {
      var _this$props = _this.props,
          classes = _this$props.classes,
          buttonClassName = _this$props.buttonClassName,
          scrollable = _this$props.scrollable,
          scrollButtons = _this$props.scrollButtons,
          TabScrollButtonProp = _this$props.TabScrollButton,
          theme = _this$props.theme;

      var conditionalElements = {};
      conditionalElements.scrollbarSizeListener = scrollable ? _react2.default.createElement(_reactScrollbarSize2.default, {
        onLoad: _this.handleScrollbarSizeChange,
        onChange: _this.handleScrollbarSizeChange
      }) : null;

      var showScrollButtons = scrollable && (scrollButtons === 'auto' || scrollButtons === 'on');

      conditionalElements.scrollButtonLeft = showScrollButtons ? _react2.default.createElement(TabScrollButtonProp, {
        direction: theme && theme.direction === 'rtl' ? 'right' : 'left',
        onClick: _this.handleLeftScrollClick,
        visible: _this.state.showLeftScroll,
        className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.buttonAuto, scrollButtons === 'auto'), buttonClassName)
      }) : null;

      conditionalElements.scrollButtonRight = showScrollButtons ? _react2.default.createElement(TabScrollButtonProp, {
        direction: theme && theme.direction === 'rtl' ? 'left' : 'right',
        onClick: _this.handleRightScrollClick,
        visible: _this.state.showRightScroll,
        className: (0, _classnames2.default)((0, _defineProperty3.default)({}, classes.buttonAuto, scrollButtons === 'auto'), buttonClassName)
      }) : null;

      return conditionalElements;
    }, _this.getTabsMeta = function (value, direction) {
      var tabsMeta = void 0;
      if (_this.tabs) {
        var rect = _this.tabs.getBoundingClientRect();
        // create a new object with ClientRect class props + scrollLeft
        tabsMeta = {
          clientWidth: _this.tabs ? _this.tabs.clientWidth : 0,
          scrollLeft: _this.tabs ? _this.tabs.scrollLeft : 0,
          scrollLeftNormalized: _this.tabs ? (0, _normalizeScrollLeft.getNormalizedScrollLeft)(_this.tabs, direction) : 0,
          scrollWidth: _this.tabs ? _this.tabs.scrollWidth : 0,
          left: rect.left,
          right: rect.right
        };
      }

      var tabMeta = void 0;
      if (_this.tabs && value !== false) {
        var children = _this.tabs.children[0].children;

        if (children.length > 0) {
          var tab = children[_this.valueToIndex[value]];
           false ? (0, _warning2.default)(Boolean(tab), 'Material-UI: the value provided `' + value + '` is invalid') : void 0;
          tabMeta = tab ? tab.getBoundingClientRect() : null;
        }
      }
      return { tabsMeta: tabsMeta, tabMeta: tabMeta };
    }, _this.tabs = undefined, _this.valueToIndex = {}, _this.handleResize = (0, _debounce2.default)(function () {
      _this.updateIndicatorState(_this.props);
      _this.updateScrollButtonState();
    }, 166), _this.handleLeftScrollClick = function () {
      if (_this.tabs) {
        _this.moveTabsScroll(-_this.tabs.clientWidth);
      }
    }, _this.handleRightScrollClick = function () {
      if (_this.tabs) {
        _this.moveTabsScroll(_this.tabs.clientWidth);
      }
    }, _this.handleScrollbarSizeChange = function (_ref2) {
      var scrollbarHeight = _ref2.scrollbarHeight;

      _this.setState({
        scrollerStyle: {
          marginBottom: -scrollbarHeight
        }
      });
    }, _this.handleTabsScroll = (0, _debounce2.default)(function () {
      _this.updateScrollButtonState();
    }, 166), _this.moveTabsScroll = function (delta) {
      var theme = _this.props.theme;


      if (_this.tabs) {
        var themeDirection = theme && theme.direction;
        var multiplier = themeDirection === 'rtl' ? -1 : 1;
        var nextScrollLeft = _this.tabs.scrollLeft + delta * multiplier;
        // Fix for Edge
        var invert = themeDirection === 'rtl' && (0, _normalizeScrollLeft.detectScrollType)() === 'reverse' ? -1 : 1;
        _scroll2.default.left(_this.tabs, invert * nextScrollLeft);
      }
    }, _this.scrollSelectedIntoView = function () {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          value = _this$props2.value;


      var themeDirection = theme && theme.direction;

      var _this$getTabsMeta = _this.getTabsMeta(value, themeDirection),
          tabsMeta = _this$getTabsMeta.tabsMeta,
          tabMeta = _this$getTabsMeta.tabMeta;

      if (!tabMeta || !tabsMeta) {
        return;
      }

      if (tabMeta.left < tabsMeta.left) {
        // left side of button is out of view
        var nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.left - tabsMeta.left);
        _scroll2.default.left(_this.tabs, nextScrollLeft);
      } else if (tabMeta.right > tabsMeta.right) {
        // right side of button is out of view
        var _nextScrollLeft = tabsMeta.scrollLeft + (tabMeta.right - tabsMeta.right);
        _scroll2.default.left(_this.tabs, _nextScrollLeft);
      }
    }, _this.updateScrollButtonState = function () {
      var _this$props3 = _this.props,
          scrollable = _this$props3.scrollable,
          scrollButtons = _this$props3.scrollButtons,
          theme = _this$props3.theme;

      var themeDirection = theme && theme.direction;

      if (_this.tabs && scrollable && scrollButtons !== 'off') {
        var _this$tabs = _this.tabs,
            scrollWidth = _this$tabs.scrollWidth,
            clientWidth = _this$tabs.clientWidth;

        var scrollLeft = (0, _normalizeScrollLeft.getNormalizedScrollLeft)(_this.tabs, themeDirection);

        var showLeftScroll = themeDirection === 'rtl' ? scrollWidth > clientWidth + scrollLeft : scrollLeft > 0;

        var showRightScroll = themeDirection === 'rtl' ? scrollLeft > 0 : scrollWidth > clientWidth + scrollLeft;

        if (showLeftScroll !== _this.state.showLeftScroll || showRightScroll !== _this.state.showRightScroll) {
          _this.setState({ showLeftScroll: showLeftScroll, showRightScroll: showRightScroll });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({ mounted: true });
      this.updateIndicatorState(this.props);
      this.updateScrollButtonState();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.updateScrollButtonState();

      // The index might have changed at the same time.
      // We need to check again the right indicator position.
      this.updateIndicatorState(this.props);

      if (this.state.indicatorStyle !== prevState.indicatorStyle) {
        this.scrollSelectedIntoView();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.handleResize.cancel();
      this.handleTabsScroll.cancel();
    }
  }, {
    key: 'updateIndicatorState',
    value: function updateIndicatorState(props) {
      var theme = props.theme,
          value = props.value;


      var themeDirection = theme && theme.direction;

      var _getTabsMeta = this.getTabsMeta(value, themeDirection),
          tabsMeta = _getTabsMeta.tabsMeta,
          tabMeta = _getTabsMeta.tabMeta;

      var left = 0;

      if (tabMeta && tabsMeta) {
        var correction = themeDirection === 'rtl' ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        left = tabMeta.left - tabsMeta.left + correction;
      }

      var indicatorStyle = {
        left: left,
        // May be wrong until the font is loaded.
        width: tabMeta ? tabMeta.width : 0
      };

      if ((indicatorStyle.left !== this.state.indicatorStyle.left || indicatorStyle.width !== this.state.indicatorStyle.width) && !(0, _isNan2.default)(indicatorStyle.left) && !(0, _isNan2.default)(indicatorStyle.width)) {
        this.setState({ indicatorStyle: indicatorStyle });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames3,
          _this2 = this;

      var _props = this.props,
          buttonClassName = _props.buttonClassName,
          centered = _props.centered,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          fullWidth = _props.fullWidth,
          indicatorClassName = _props.indicatorClassName,
          indicatorColor = _props.indicatorColor,
          onChange = _props.onChange,
          scrollable = _props.scrollable,
          scrollButtons = _props.scrollButtons,
          TabScrollButtonProp = _props.TabScrollButton,
          textColor = _props.textColor,
          theme = _props.theme,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['buttonClassName', 'centered', 'children', 'classes', 'className', 'fullWidth', 'indicatorClassName', 'indicatorColor', 'onChange', 'scrollable', 'scrollButtons', 'TabScrollButton', 'textColor', 'theme', 'value']);


      var className = (0, _classnames2.default)(classes.root, classNameProp);
      var scrollerClassName = (0, _classnames2.default)(classes.scrollingContainer, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.fixed, !scrollable), (0, _defineProperty3.default)(_classNames3, classes.scrollable, scrollable), _classNames3));
      var tabItemContainerClassName = (0, _classnames2.default)(classes.flexContainer, (0, _defineProperty3.default)({}, classes.centered, centered && !scrollable));

      var indicator = _react2.default.createElement(_TabIndicator2.default, {
        style: this.state.indicatorStyle,
        className: indicatorClassName,
        color: indicatorColor
      });

      this.valueToIndex = {};
      var childIndex = 0;
      var children = _react2.default.Children.map(childrenProp, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return null;
        }

        var childValue = child.props.value || childIndex;
        _this2.valueToIndex[childValue] = childIndex;
        var selected = childValue === value;

        childIndex += 1;
        return _react2.default.cloneElement(child, {
          fullWidth: fullWidth,
          indicator: selected && !_this2.state.mounted && indicator,
          selected: selected,
          onChange: onChange,
          textColor: textColor,
          value: childValue
        });
      });

      var conditionalElements = this.getConditionalElements();

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: className }, other),
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        conditionalElements.scrollbarSizeListener,
        _react2.default.createElement(
          'div',
          { className: classes.flexContainer },
          conditionalElements.scrollButtonLeft,
          _react2.default.createElement(
            'div',
            {
              className: scrollerClassName,
              style: this.state.scrollerStyle,
              ref: function ref(node) {
                _this2.tabs = node;
              },
              role: 'tablist',
              onScroll: this.handleTabsScroll
            },
            _react2.default.createElement(
              'div',
              { className: tabItemContainerClassName },
              children
            ),
            this.state.mounted && indicator
          ),
          conditionalElements.scrollButtonRight
        )
      );
    }
  }]);
  return Tabs;
}(_react2.default.Component);

Tabs.propTypes =  false ? {
  /**
   * The CSS class name of the scroll button elements.
   */
  buttonClassName: _propTypes2.default.string,
  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: _propTypes2.default.bool,
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the tabs will grow to use all the available space.
   * This property is intended for small views, like on mobile.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The CSS class name of the indicator element.
   */
  indicatorClassName: _propTypes2.default.string,
  /**
   * Determines the color of the indicator.
   */
  indicatorColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf(['accent', 'primary'])]),
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {number} value We default to the index of the child
   */
  onChange: _propTypes2.default.func,
  /**
   * True invokes scrolling properties and allow for horizontally scrolling
   * (or swiping) the tab bar.
   */
  scrollable: _propTypes2.default.bool,
  /**
   * Determine behavior of scroll buttons when tabs are set to scroll
   * `auto` will only present them on medium and larger viewports
   * `on` will always present them
   * `off` will never present them
   */
  scrollButtons: _propTypes2.default.oneOf(['auto', 'on', 'off']),
  /**
   * The component used to render the scroll buttons.
   */
  TabScrollButton: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Determines the color of the `Tab`.
   */
  textColor: _propTypes2.default.oneOf(['accent', 'primary', 'inherit']),
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: _propTypes2.default.any
} : {};

Tabs.defaultProps = {
  centered: false,
  fullWidth: false,
  indicatorColor: 'accent',
  scrollable: false,
  scrollButtons: 'auto',
  TabScrollButton: _TabScrollButton2.default,
  textColor: 'inherit'
};

exports.default = (0, _withStyles2.default)(styles, { withTheme: true, name: 'MuiTabs' })(Tabs);

/***/ }),

/***/ "/4tu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var lightGreen = {
  50: '#f1f8e9',
  100: '#dcedc8',
  200: '#c5e1a5',
  300: '#aed581',
  400: '#9ccc65',
  500: '#8bc34a',
  600: '#7cb342',
  700: '#689f38',
  800: '#558b2f',
  900: '#33691e',
  A100: '#ccff90',
  A200: '#b2ff59',
  A400: '#76ff03',
  A700: '#64dd17',
  contrastDefaultColor: 'dark'
};

exports.default = lightGreen;

/***/ }),

/***/ "/aIv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SwitchBase = __webpack_require__("a8jb");

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

var _RadioButtonChecked = __webpack_require__("Tkn0");

var _RadioButtonChecked2 = _interopRequireDefault(_RadioButtonChecked);

var _RadioButtonUnchecked = __webpack_require__("u7Wp");

var _RadioButtonUnchecked2 = _interopRequireDefault(_RadioButtonUnchecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {
      color: theme.palette.primary[500]
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
};

var _ref = _react2.default.createElement(_RadioButtonUnchecked2.default, null);

var _ref2 = _react2.default.createElement(_RadioButtonChecked2.default, null);

function Radio(props) {
  return _react2.default.createElement(_SwitchBase2.default, (0, _extends3.default)({
    inputType: 'radio',
    icon: _ref,
    checkedIcon: _ref2
  }, props));
}

Radio.propTypes =  false ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   * If a string is provided, it will be used as a font ligature.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   * If a string is provided, it will be used as a font ligature.
   */
  icon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  inputType: _propTypes2.default.string,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiRadio' })(Radio);

/***/ }),

/***/ "/yGL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.text.secondary
    }
  };
};

var TableHead = function (_React$Component) {
  (0, _inherits3.default)(TableHead, _React$Component);

  function TableHead() {
    (0, _classCallCheck3.default)(this, TableHead);
    return (0, _possibleConstructorReturn3.default)(this, (TableHead.__proto__ || (0, _getPrototypeOf2.default)(TableHead)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableHead, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {
          head: true
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'component']);


      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
        children
      );
    }
  }]);
  return TableHead;
}(_react2.default.Component);

TableHead.propTypes =  false ? {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
} : {};

TableHead.defaultProps = {
  component: 'thead'
};

TableHead.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableHead' })(TableHead);

/***/ }),

/***/ "0Z9u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };
  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return (0, _react.createElement)(component, componentProps, children);
};

Arrow.contextTypes = {
  popper: _propTypes2.default.object.isRequired
};

Arrow.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};

exports.default = Arrow;

/***/ }),

/***/ "0d2P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__("ppkW");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _throttle = __webpack_require__("+X65");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
	width: '100px',
	height: '100px',
	position: 'absolute',
	top: '-100000px',
	overflow: 'scroll',
	msOverflowStyle: 'scrollbar'
};

var ScrollbarSize = function (_Component) {
	(0, _inherits3.default)(ScrollbarSize, _Component);

	function ScrollbarSize() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ScrollbarSize);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ScrollbarSize.__proto__ || (0, _getPrototypeOf2.default)(ScrollbarSize)).call.apply(_ref, [this].concat(args))), _this), _this.setMeasurements = function () {
			_this.scrollbarHeight = _this.node.offsetHeight - _this.node.clientHeight;
			_this.scrollbarWidth = _this.node.offsetWidth - _this.node.clientWidth;
		}, _this.handleResize = (0, _throttle2.default)(function () {
			var onChange = _this.props.onChange;


			var prevHeight = _this.scrollbarHeight;
			var prevWidth = _this.scrollbarWidth;
			_this.setMeasurements();
			if (prevHeight !== _this.scrollbarHeight || prevWidth !== _this.scrollbarWidth) {
				onChange({ scrollbarHeight: _this.scrollbarHeight, scrollbarWidth: _this.scrollbarWidth });
			}
		}, 166), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ScrollbarSize, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var onLoad = this.props.onLoad;


			if (onLoad) {
				this.setMeasurements();
				onLoad({ scrollbarHeight: this.scrollbarHeight, scrollbarWidth: this.scrollbarWidth });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.handleResize.cancel();
		}
	}, {
		key: 'render',
		// Corresponds to 10 frames at 60 Hz.

		value: function render() {
			var _this2 = this;

			var onChange = this.props.onChange;


			return _react2.default.createElement(
				'div',
				null,
				onChange ? _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }) : null,
				_react2.default.createElement('div', {
					style: styles,
					ref: function ref(node) {
						_this2.node = node;
					}
				})
			);
		}
	}]);
	return ScrollbarSize;
}(_react.Component);

ScrollbarSize.defaultProps = {
	onLoad: null,
	onChange: null
};
exports.default = ScrollbarSize;

/***/ }),

/***/ "14YY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var yellow = {
  50: '#fffde7',
  100: '#fff9c4',
  200: '#fff59d',
  300: '#fff176',
  400: '#ffee58',
  500: '#ffeb3b',
  600: '#fdd835',
  700: '#fbc02d',
  800: '#f9a825',
  900: '#f57f17',
  A100: '#ffff8d',
  A200: '#ffff00',
  A400: '#ffea00',
  A700: '#ffd600',
  contrastDefaultColor: 'dark'
};

exports.default = yellow;

/***/ }),

/***/ "1S3F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__("wrym");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Redirect> outside a <Router>');

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["a" /* createLocation */])(prevProps.to);
    var nextTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["a" /* createLocation */])(this.props.to);

    if (Object(__WEBPACK_IMPORTED_MODULE_4_history__["b" /* locationsAreEqual */])(prevTo, nextTo)) {
      __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
      return;
    }

    this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;


    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Redirect.propTypes = {
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),

/***/ "33H0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BottomNavigation = __webpack_require__("wHDr");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BottomNavigation).default;
  }
});

var _BottomNavigationButton = __webpack_require__("loWh");

Object.defineProperty(exports, 'BottomNavigationButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BottomNavigationButton).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "3SrW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("Sfvb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none'
    },
    colorAccent: {
      color: theme.palette.secondary.A200
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorContrast: {
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    colorError: {
      color: theme.palette.error[500]
    },
    colorPrimary: {
      color: theme.palette.primary[500]
    }
  };
};

function Icon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'color']);


  var className = (0, _classnames2.default)('material-icons', classes.root, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], color !== 'inherit'), classNameProp);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({ className: className, 'aria-hidden': 'true' }, other),
    children
  );
}

Icon.propTypes =  false ? {
  /**
   * The name of the icon font ligature.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['inherit', 'accent', 'action', 'contrast', 'disabled', 'error', 'primary'])
} : {};

Icon.defaultProps = {
  color: 'inherit'
};

Icon.muiName = 'Icon';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiIcon' })(Icon);

/***/ }),

/***/ "3r6y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Route__ = __webpack_require__("MfZD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__("yL62");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref.ariaCurrent,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive', 'ariaCurrent']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Route__["a" /* default */], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        'aria-current': isActive && ariaCurrent
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  activeClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  isActive: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  ariaCurrent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['page', 'step', 'location', 'true'])
};

NavLink.defaultProps = {
  activeClassName: 'active',
  ariaCurrent: 'true'
};

/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),

/***/ "4NQe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormGroup = __webpack_require__("bD+u");

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _helpers = __webpack_require__("Sfvb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent FormGroup

var RadioGroup = function (_React$Component) {
  (0, _inherits3.default)(RadioGroup, _React$Component);

  function RadioGroup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.radios = [], _this.focus = function () {
      if (!_this.radios || !_this.radios.length) {
        return;
      }

      var focusRadios = _this.radios.filter(function (n) {
        return !n.disabled;
      });

      if (!focusRadios.length) {
        return;
      }

      var selectedRadio = (0, _helpers.find)(focusRadios, function (n) {
        return n.checked;
      });

      if (selectedRadio) {
        selectedRadio.focus();
        return;
      }

      focusRadios[0].focus();
    }, _this.handleRadioChange = function (event, checked) {
      if (checked && _this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          name = _props.name,
          value = _props.value,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'name', 'value', 'onChange']);


      this.radios = [];

      return _react2.default.createElement(
        _FormGroup2.default,
        (0, _extends3.default)({ role: 'radiogroup' }, other),
        _react2.default.Children.map(children, function (child, index) {
          if (!_react2.default.isValidElement(child)) {
            return null;
          }

          return _react2.default.cloneElement(child, {
            key: index,
            name: name,
            inputRef: function inputRef(node) {
              if (node) {
                _this2.radios.push(node);
              }
            },
            checked: value === child.props.value,
            onChange: _this2.handleRadioChange
          });
        })
      );
    }
  }]);
  return RadioGroup;
}(_react2.default.Component);

RadioGroup.propTypes =  false ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * The name used to reference the value of the control.
   */
  name: _propTypes2.default.string,
  /**
   * @ignore
   */
  onBlur: _propTypes2.default.func,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback
   * @param {string} value The `value` of the selected radio button
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onKeyDown: _propTypes2.default.func,
  /**
   * Value of the selected radio button.
   */
  value: _propTypes2.default.string
} : {};

exports.default = RadioGroup;

/***/ }),

/***/ "4TAa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _IconButton = __webpack_require__("nz+8");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Input = __webpack_require__("fzMo");

var _Input2 = _interopRequireDefault(_Input);

var _Menu = __webpack_require__("Vvdx");

var _Select = __webpack_require__("ZToG");

var _Select2 = _interopRequireDefault(_Select);

var _TableCell = __webpack_require__("Q6Mt");

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Toolbar = __webpack_require__("pXSj");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__("cebZ");

var _Typography2 = _interopRequireDefault(_Typography);

var _KeyboardArrowLeft = __webpack_require__("aeWn");

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = __webpack_require__("q8cD");

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent TableCell

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      // Increase the specificity to override TableCell.
      '&:last-child': {
        padding: 0
      }
    },
    toolbar: {
      height: 56,
      minHeight: 56,
      paddingRight: 2
    },
    spacer: {
      flex: '1 1 100%'
    },
    caption: {
      flexShrink: 0
    },
    input: {
      fontSize: 'inherit',
      flexShrink: 0
    },
    selectRoot: {
      marginRight: theme.spacing.unit * 4
    },
    select: {
      marginLeft: theme.spacing.unit,
      width: 34,
      textAlign: 'right',
      paddingRight: 22,
      color: theme.palette.text.secondary,
      height: 32,
      lineHeight: '32px'
    },
    actions: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5
    }
  };
};

/**
 * A `TableCell` based component for placing inside `TableFooter` for pagination.
 */

var _ref2 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

var _ref3 = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref4 = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref5 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

var TablePagination = function (_React$Component) {
  (0, _inherits3.default)(TablePagination, _React$Component);

  function TablePagination() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TablePagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TablePagination.__proto__ || (0, _getPrototypeOf2.default)(TablePagination)).call.apply(_ref, [this].concat(args))), _this), _this.handleBackButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page - 1);
    }, _this.handleNextButtonClick = function (event) {
      _this.props.onChangePage(event, _this.props.page + 1);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TablePagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var count = nextProps.count,
          onChangePage = nextProps.onChangePage,
          rowsPerPage = nextProps.rowsPerPage;

      var newLastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
      if (this.props.page > newLastPage) {
        onChangePage(null, newLastPage);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          colSpanProp = _props.colSpan,
          Component = _props.component,
          count = _props.count,
          labelDisplayedRows = _props.labelDisplayedRows,
          labelRowsPerPage = _props.labelRowsPerPage,
          onChangePage = _props.onChangePage,
          onChangeRowsPerPage = _props.onChangeRowsPerPage,
          page = _props.page,
          rowsPerPage = _props.rowsPerPage,
          rowsPerPageOptions = _props.rowsPerPageOptions,
          theme = _props.theme,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'colSpan', 'component', 'count', 'labelDisplayedRows', 'labelRowsPerPage', 'onChangePage', 'onChangeRowsPerPage', 'page', 'rowsPerPage', 'rowsPerPageOptions', 'theme']);


      var colSpan = void 0;

      if (Component === _TableCell2.default || Component === 'td') {
        colSpan = colSpanProp || 1000; // col-span over everything
      }

      var themeDirection = theme && theme.direction;

      return _react2.default.createElement(
        Component,
        (0, _extends3.default)({ className: classes.root, colSpan: colSpan }, other),
        _react2.default.createElement(
          _Toolbar2.default,
          { className: classes.toolbar },
          _react2.default.createElement('div', { className: classes.spacer }),
          rowsPerPageOptions.length > 1 && _react2.default.createElement(
            _Typography2.default,
            { type: 'caption', className: classes.caption },
            labelRowsPerPage
          ),
          rowsPerPageOptions.length > 1 && _react2.default.createElement(
            _Select2.default,
            {
              classes: { root: classes.selectRoot, select: classes.select },
              input: _react2.default.createElement(_Input2.default, {
                classes: {
                  root: classes.input
                },
                disableUnderline: true
              }),
              value: rowsPerPage,
              onChange: onChangeRowsPerPage
            },
            rowsPerPageOptions.map(function (rowsPerPageOption) {
              return _react2.default.createElement(
                _Menu.MenuItem,
                { key: rowsPerPageOption, value: rowsPerPageOption },
                rowsPerPageOption
              );
            })
          ),
          _react2.default.createElement(
            _Typography2.default,
            { type: 'caption', className: classes.caption },
            labelDisplayedRows({
              from: count === 0 ? 0 : page * rowsPerPage + 1,
              to: Math.min(count, (page + 1) * rowsPerPage),
              count: count,
              page: page
            })
          ),
          _react2.default.createElement(
            'div',
            { className: classes.actions },
            _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleBackButtonClick, disabled: page === 0 },
              themeDirection === 'rtl' ? _ref2 : _ref3
            ),
            _react2.default.createElement(
              _IconButton2.default,
              {
                onClick: this.handleNextButtonClick,
                disabled: page >= Math.ceil(count / rowsPerPage) - 1
              },
              themeDirection === 'rtl' ? _ref4 : _ref5
            )
          )
        )
      );
    }
  }]);
  return TablePagination;
}(_react2.default.Component);

TablePagination.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  colSpan: _propTypes2.default.number,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The total number of rows.
   */
  count: _propTypes2.default.number.isRequired,
  /**
   * Useful to customize the displayed rows label.
   */
  labelDisplayedRows: _propTypes2.default.func,
  /**
   * Useful to customize the rows per page label. Invoked with a `{ from, to, count, page }`
   * object.
   */
  labelRowsPerPage: _propTypes2.default.node,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback
   * @param {number} page The page selected
   */
  onChangePage: _propTypes2.default.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {object} event The event source of the callback
   */
  onChangeRowsPerPage: _propTypes2.default.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: _propTypes2.default.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: _propTypes2.default.number.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   */
  rowsPerPageOptions: _propTypes2.default.array,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired
} : {};

TablePagination.defaultProps = {
  component: _TableCell2.default,
  labelDisplayedRows: function labelDisplayedRows(_ref6) {
    var from = _ref6.from,
        to = _ref6.to,
        count = _ref6.count;
    return from + '-' + to + ' of ' + count;
  },
  labelRowsPerPage: 'Rows per page:',
  rowsPerPageOptions: [5, 10, 25]
};

exports.default = (0, _withStyles2.default)(styles, { withTheme: true, name: 'MuiTablePagination' })(TablePagination);

/***/ }),

/***/ "4YF7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__("ygJi");
function actionSetStart(left, right, redRemaining) {
    return {
        type: types_1.ACTION_SET_START,
        left: left, right: right, redRemaining: redRemaining
    };
}
exports.actionSetStart = actionSetStart;


/***/ }),

/***/ "52Em":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__ = __webpack_require__("p5BY");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Prompt__["a" /* default */]);

/***/ }),

/***/ "5DZT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Divider = __webpack_require__("o4cM");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Divider).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "5SeW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = __webpack_require__("cebZ");

var _Typography2 = _interopRequireDefault(_Typography);

var _CardContent = __webpack_require__("xG2a");

var _CardContent2 = _interopRequireDefault(_CardContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent CardContent

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    avatar: {
      flex: '0 0 auto',
      marginRight: theme.spacing.unit * 2
    },
    action: {
      flex: '0 0 auto',
      alignSelf: 'flex-start',
      marginTop: theme.spacing.unit * -1,
      marginRight: theme.spacing.unit * -2
    },
    content: {
      flex: '1 1 auto'
    },
    title: {},
    subheader: {}
  };
};

function CardHeader(props) {
  var avatar = props.avatar,
      action = props.action,
      classes = props.classes,
      classNameProp = props.className,
      subheader = props.subheader,
      title = props.title,
      other = (0, _objectWithoutProperties3.default)(props, ['avatar', 'action', 'classes', 'className', 'subheader', 'title']);


  return _react2.default.createElement(
    _CardContent2.default,
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
    avatar && _react2.default.createElement(
      'div',
      { className: classes.avatar },
      avatar
    ),
    _react2.default.createElement(
      'div',
      { className: classes.content },
      _react2.default.createElement(
        _Typography2.default,
        { type: avatar ? 'body2' : 'headline', component: 'span', className: classes.title },
        title
      ),
      _react2.default.createElement(
        _Typography2.default,
        {
          type: avatar ? 'body2' : 'body1',
          component: 'span',
          color: 'secondary',
          className: classes.subheader
        },
        subheader
      )
    ),
    action && _react2.default.createElement(
      'div',
      { className: classes.action },
      action
    )
  );
}

CardHeader.propTypes =  false ? {
  /**
   * The action to display in the card header.
   */
  action: _propTypes2.default.node,
  /**
   * The Avatar for the Card Header.
   */
  avatar: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The content of the component.
   */
  subheader: _propTypes2.default.node,
  /**
   * The content of the Card Title.
   */
  title: _propTypes2.default.node
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardHeader' })(CardHeader);

/***/ }),

/***/ "5vLB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Table = __webpack_require__("GhCA");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Table).default;
  }
});

var _TableBody = __webpack_require__("6lDk");

Object.defineProperty(exports, 'TableBody', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TableBody).default;
  }
});

var _TableCell = __webpack_require__("Q6Mt");

Object.defineProperty(exports, 'TableCell', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TableCell).default;
  }
});

var _TableFooter = __webpack_require__("oDBx");

Object.defineProperty(exports, 'TableFooter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TableFooter).default;
  }
});

var _TableHead = __webpack_require__("/yGL");

Object.defineProperty(exports, 'TableHead', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TableHead).default;
  }
});

var _TablePagination = __webpack_require__("4TAa");

Object.defineProperty(exports, 'TablePagination', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TablePagination).default;
  }
});

var _TableRow = __webpack_require__("MrLf");

Object.defineProperty(exports, 'TableRow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TableRow).default;
  }
});

var _TableSortLabel = __webpack_require__("hRCu");

Object.defineProperty(exports, 'TableSortLabel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TableSortLabel).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "6Qry":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _ButtonBase = __webpack_require__("VopY");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _IconButton = __webpack_require__("nz+8");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent ButtonBase

var styles = exports.styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.ease
  };
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: theme.spacing.unit * 6,
      transition: theme.transitions.create(['min-height', 'background-color'], transition),
      padding: '0 ' + theme.spacing.unit * 3 + 'px 0 ' + theme.spacing.unit * 3 + 'px',
      position: 'relative',
      '&:hover:not($disabled)': {
        cursor: 'pointer'
      }
    },
    expanded: {
      minHeight: 64
    },
    focused: {
      backgroundColor: theme.palette.grey[300]
    },
    disabled: {
      opacity: 0.38,
      color: theme.palette.action.disabled
    },
    content: {
      display: 'flex',
      flexGrow: 1,
      transition: theme.transitions.create(['margin'], transition),
      margin: '12px 0',
      '& > :last-child': {
        paddingRight: theme.spacing.unit * 4
      }
    },
    contentExpanded: {
      margin: '20px 0'
    },
    expandIcon: {
      color: theme.palette.text.icon,
      position: 'absolute',
      top: '50%',
      right: theme.spacing.unit,
      transform: 'translateY(-50%) rotate(0deg)',
      transition: theme.transitions.create('transform', transition)
    },
    expandIconExpanded: {
      transform: 'translateY(-50%) rotate(180deg)'
    }
  };
};

var ExpansionPanelSummary = function (_React$Component) {
  (0, _inherits3.default)(ExpansionPanelSummary, _React$Component);

  function ExpansionPanelSummary() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExpansionPanelSummary);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExpansionPanelSummary.__proto__ || (0, _getPrototypeOf2.default)(ExpansionPanelSummary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focused: false
    }, _this.handleFocus = function () {
      _this.setState({
        focused: true
      });
    }, _this.handleBlur = function () {
      _this.setState({
        focused: false
      });
    }, _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick;

      if (onChange) {
        onChange(event);
      }
      if (onClick) {
        onClick(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExpansionPanelSummary, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disabled = _props.disabled,
          expanded = _props.expanded,
          expandIcon = _props.expandIcon,
          onChange = _props.onChange,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'disabled', 'expanded', 'expandIcon', 'onChange']);
      var focused = this.state.focused;


      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({
          focusRipple: false,
          disableRipple: true,
          disabled: disabled,
          component: 'div',
          'aria-expanded': expanded,
          className: (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), (0, _defineProperty3.default)(_classNames, classes.expanded, expanded), (0, _defineProperty3.default)(_classNames, classes.focused, focused), _classNames), className)
        }, other, {
          onKeyboardFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onClick: this.handleChange
        }),
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes.content, (0, _defineProperty3.default)({}, classes.contentExpanded, expanded)) },
          children
        ),
        expandIcon && _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: disabled,
            className: (0, _classnames2.default)(classes.expandIcon, (0, _defineProperty3.default)({}, classes.expandIconExpanded, expanded)),
            component: 'div',
            tabIndex: '-1',
            'aria-hidden': 'true'
          },
          expandIcon
        )
      );
    }
  }]);
  return ExpansionPanelSummary;
}(_react2.default.Component);

ExpansionPanelSummary.propTypes =  false ? {
  /**
   * The content of the expansion panel summary.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: _propTypes2.default.bool,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: _propTypes2.default.node,
  /**
   * @ignore
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func
} : {};

ExpansionPanelSummary.defaultProps = {
  disabled: false
};

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanelSummary' })(ExpansionPanelSummary);

/***/ }),

/***/ "6cJI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__ = __webpack_require__("bXVx");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Switch__["a" /* default */]);

/***/ }),

/***/ "6dUG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("VopY");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _helpers = __webpack_require__("Sfvb");

var _Icon = __webpack_require__("nGxd");

var _Icon2 = _interopRequireDefault(_Icon);

var _reactHelpers = __webpack_require__("ZY1E");

__webpack_require__("VJec");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Ensure CSS specificity

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      width: theme.spacing.unit * 6,
      height: theme.spacing.unit * 6,
      padding: 0,
      borderRadius: '50%',
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      })
    },
    colorAccent: {
      color: theme.palette.secondary.A200
    },
    colorContrast: {
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    colorPrimary: {
      color: theme.palette.primary[500]
    },
    colorInherit: {
      color: 'inherit'
    },
    disabled: {
      color: theme.palette.action.disabled
    },
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    icon: {
      width: '1em',
      height: '1em'
    },
    keyboardFocused: {
      backgroundColor: theme.palette.text.divider
    }
  };
};

/**
 * Refer to the [Icons](/style/icons) section of the documentation
 * regarding the available icon options.
 */
// @inheritedComponent ButtonBase

function IconButton(props) {
  var _classNames;

  var buttonRef = props.buttonRef,
      children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      rootRef = props.rootRef,
      other = (0, _objectWithoutProperties3.default)(props, ['buttonRef', 'children', 'classes', 'className', 'color', 'disabled', 'rootRef']);


  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], color !== 'default'), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), className),
      centerRipple: true,
      keyboardFocusedClassName: classes.keyboardFocused,
      disabled: disabled,
      rootRef: buttonRef,
      ref: rootRef
    }, other),
    _react2.default.createElement(
      'span',
      { className: classes.label },
      typeof children === 'string' ? _react2.default.createElement(
        _Icon2.default,
        { className: classes.icon },
        children
      ) : _react2.default.Children.map(children, function (child) {
        if ((0, _reactHelpers.isMuiElement)(child, ['Icon', 'SvgIcon'])) {
          return _react2.default.cloneElement(child, {
            className: (0, _classnames2.default)(classes.icon, child.props.className)
          });
        }

        return child;
      })
    )
  );
}

IconButton.propTypes =  false ? {
  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: _propTypes2.default.func,
  /**
   * The icon element.
   * If a string is provided, it will be used as an icon font ligature.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['default', 'inherit', 'primary', 'contrast', 'accent']),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * Use that property to pass a ref callback to the root component.
   */
  rootRef: _propTypes2.default.func
} : {};

IconButton.defaultProps = {
  color: 'default',
  disabled: false,
  disableRipple: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiIconButton' })(IconButton);

/***/ }),

/***/ "6lDk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(13),
      color: theme.palette.text.primary
    }
  };
};

var TableBody = function (_React$Component) {
  (0, _inherits3.default)(TableBody, _React$Component);

  function TableBody() {
    (0, _classCallCheck3.default)(this, TableBody);
    return (0, _possibleConstructorReturn3.default)(this, (TableBody.__proto__ || (0, _getPrototypeOf2.default)(TableBody)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableBody, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {
          body: true
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'component']);

      var className = (0, _classnames2.default)(classes.root, classNameProp);

      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({ className: className }, other),
        children
      );
    }
  }]);
  return TableBody;
}(_react2.default.Component);

TableBody.propTypes =  false ? {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
} : {};

TableBody.defaultProps = {
  component: 'tbody'
};

TableBody.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableBody' })(TableBody);

/***/ }),

/***/ "78Lv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__("Su6/");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(props) {
  var raised = props.raised,
      other = (0, _objectWithoutProperties3.default)(props, ['raised']);


  return _react2.default.createElement(_Paper2.default, (0, _extends3.default)({ elevation: raised ? 8 : 2 }, other));
} // @inheritedComponent Paper

Card.propTypes =  false ? {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the card will use raised styling.
   */
  raised: _propTypes2.default.bool
} : {};

Card.defaultProps = {
  raised: false
};

exports.default = Card;

/***/ }),

/***/ "79nE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  rootMedia: {
    width: '100%'
  }
};

var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];

function CardMedia(props) {
  var _classNames;

  var classes = props.classes,
      className = props.className,
      ComponentProp = props.component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'component', 'image', 'src', 'style']);


   false ? (0, _warning2.default)(Boolean(image || src), 'Material-UI: either `image` or `src` property must be specified.') : void 0;

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(ComponentProp) !== -1;
  var composedStyle = !isMediaComponent && image ? (0, _extends3.default)({ backgroundImage: 'url(' + image + ')' }, style) : style;
  var composedClassName = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.root, !isMediaComponent), (0, _defineProperty3.default)(_classNames, classes.rootMedia, isMediaComponent), _classNames), className);

  return _react2.default.createElement(ComponentProp, (0, _extends3.default)({
    className: composedClassName,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other));
}

CardMedia.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Component for rendering image.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: _propTypes2.default.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: _propTypes2.default.string,
  /**
   * @ignore
   */
  style: _propTypes2.default.object
} : {};

CardMedia.defaultProps = {
  component: 'div'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardMedia' })(CardMedia);

/***/ }),

/***/ "7L6O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _brcast = __webpack_require__("KkuI");

var _brcast2 = _interopRequireDefault(_brcast);

var _themeListener = __webpack_require__("iZUb");

var _themeListener2 = _interopRequireDefault(_themeListener);

var _exactProp = __webpack_require__("qAet");

var _exactProp2 = _interopRequireDefault(_exactProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
var MuiThemeProvider = function (_React$Component) {
  (0, _inherits3.default)(MuiThemeProvider, _React$Component);

  function MuiThemeProvider(props, context) {
    (0, _classCallCheck3.default)(this, MuiThemeProvider);

    // Get the outer theme from the context, can be null
    var _this = (0, _possibleConstructorReturn3.default)(this, (MuiThemeProvider.__proto__ || (0, _getPrototypeOf2.default)(MuiThemeProvider)).call(this, props, context));

    _this.broadcast = (0, _brcast2.default)();
    _this.unsubscribeId = null;
    _this.outerTheme = null;
    _this.outerTheme = _themeListener2.default.initial(context);
    // Propagate the theme so it can be accessed by the children
    _this.broadcast.setState(_this.mergeOuterLocalTheme(_this.props.theme));
    return _this;
  }

  (0, _createClass3.default)(MuiThemeProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _ref;

      return _ref = {}, (0, _defineProperty3.default)(_ref, _themeListener.CHANNEL, this.broadcast), (0, _defineProperty3.default)(_ref, 'muiThemeProviderOptions', {
        sheetsManager: this.props.sheetsManager,
        disableStylesGeneration: this.props.disableStylesGeneration
      }), _ref;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Subscribe on the outer theme, if present
      this.unsubscribeId = _themeListener2.default.subscribe(this.context, function (outerTheme) {
        _this2.outerTheme = outerTheme;
        // Forward the parent theme update to the children
        _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Propagate a local theme update
      if (this.props.theme !== nextProps.theme) {
        this.broadcast.setState(this.mergeOuterLocalTheme(nextProps.theme));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        _themeListener2.default.unsubscribe(this.context, this.unsubscribeId);
      }
    }
    // We are not using the React state in order to avoid unnecessary rerender.

  }, {
    key: 'mergeOuterLocalTheme',


    // Simple merge between the outer theme and the local theme
    value: function mergeOuterLocalTheme(localTheme) {
      // To support composition of theme.
      if (typeof localTheme === 'function') {
         false ? (0, _warning2.default)(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n')) : void 0;
        return localTheme(this.outerTheme);
      }

      if (!this.outerTheme) {
        return localTheme;
      }

      return (0, _extends3.default)({}, this.outerTheme, localTheme);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return MuiThemeProvider;
}(_react2.default.Component);

MuiThemeProvider.propTypes =  false ? {
  /**
   * You can only provide a single element with react@15, a node with react@16.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server side.
   * You can significantly speed up the traversal with this property.
   */
  disableStylesGeneration: _propTypes2.default.bool,
  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes2.default.object,
  /**
   * A theme object.
   */
  theme: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]).isRequired
} : {};

MuiThemeProvider.defaultProps = {
  disableStylesGeneration: false,
  sheetsManager: null
};

MuiThemeProvider.childContextTypes = (0, _extends3.default)({}, _themeListener2.default.contextTypes, {
  muiThemeProviderOptions: _propTypes2.default.object
});

MuiThemeProvider.contextTypes = _themeListener2.default.contextTypes;

// Add a wrapper component to generate some helper messages in the development
// environment.
// eslint-disable-next-line import/no-mutable-exports
var MuiThemeProviderWrapper = MuiThemeProvider;

if (false) {
  MuiThemeProviderWrapper = function MuiThemeProviderWrapper(props) {
    return _react2.default.createElement(MuiThemeProvider, props);
  };
  MuiThemeProviderWrapper.propTypes = (0, _exactProp2.default)(MuiThemeProvider.propTypes, 'MuiThemeProvider');
}

exports.default = MuiThemeProviderWrapper;

/***/ }),

/***/ "7orI":
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "8QhD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__ = __webpack_require__("ciQf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__("dCLN");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<BrowserRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { BrowserRouter as Router }`.');
  };

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (BrowserRouter);

/***/ }),

/***/ "8UB2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ListItem = __webpack_require__("jZ7G");

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: (0, _extends3.default)({}, theme.typography.subheading, {
      height: 24,
      boxSizing: 'content-box',
      background: 'none',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&:focus': {
        background: theme.palette.text.divider
      },
      '&:hover': {
        backgroundColor: theme.palette.text.divider
      }
    }),
    selected: {
      backgroundColor: theme.palette.text.divider
    }
  };
}; // @inheritedComponent ListItem

function MenuItem(props) {
  var classes = props.classes,
      classNameProp = props.className,
      component = props.component,
      selected = props.selected,
      role = props.role,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'component', 'selected', 'role']);


  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.selected, selected), classNameProp);

  return _react2.default.createElement(_ListItem2.default, (0, _extends3.default)({
    button: true,
    role: role,
    tabIndex: -1,
    className: className,
    component: component
  }, other));
}

MenuItem.propTypes =  false ? {
  /**
   * Menu item contents.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * @ignore
   */
  role: _propTypes2.default.string,
  /**
   * Use to apply selected styling.
   */
  selected: _propTypes2.default.bool
} : {};

MenuItem.defaultProps = {
  role: 'menuitem',
  selected: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiMenuItem' })(MenuItem);

/***/ }),

/***/ "9uhF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__ = __webpack_require__("t1d2");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_StaticRouter__["a" /* default */]);

/***/ }),

/***/ "Amio":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends8 = __webpack_require__("Dd8w");

var _extends9 = _interopRequireDefault(_extends8);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactEventListener = __webpack_require__("ppkW");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = __webpack_require__("CMPy");

var _ClickAwayListener = __webpack_require__("jI+e");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _helpers = __webpack_require__("Sfvb");

var _Slide = __webpack_require__("iJ6+");

var _Slide2 = _interopRequireDefault(_Slide);

var _SnackbarContent = __webpack_require__("EQ5b");

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  var gutter = theme.spacing.unit * 3;
  var top = { top: 0 };
  var bottom = { bottom: 0 };
  var right = { justifyContent: 'flex-end' };
  var left = { justifyContent: 'flex-start' };
  var topSpace = { top: gutter };
  var bottomSpace = { bottom: gutter };
  var rightSpace = { right: gutter };
  var leftSpace = { left: gutter };
  var center = {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  };

  return {
    root: {
      zIndex: theme.zIndex.snackbar,
      position: 'fixed',
      display: 'flex',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    anchorTopCenter: (0, _extends9.default)({}, top, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({}, center))),
    anchorBottomCenter: (0, _extends9.default)({}, bottom, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({}, center))),
    anchorTopRight: (0, _extends9.default)({}, top, right, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      left: 'auto'
    }, topSpace, rightSpace))),
    anchorBottomRight: (0, _extends9.default)({}, bottom, right, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      left: 'auto'
    }, bottomSpace, rightSpace))),
    anchorTopLeft: (0, _extends9.default)({}, top, left, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      right: 'auto'
    }, topSpace, leftSpace))),
    anchorBottomLeft: (0, _extends9.default)({}, bottom, left, (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), (0, _extends9.default)({
      right: 'auto'
    }, bottomSpace, leftSpace)))
  };
};

var Snackbar = function (_React$Component) {
  (0, _inherits3.default)(Snackbar, _React$Component);

  function Snackbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Snackbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Snackbar.__proto__ || (0, _getPrototypeOf2.default)(Snackbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // Used to only render active snackbars.
      exited: false
    }, _this.timerAutoHide = null, _this.handleMouseEnter = function (event) {
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
      _this.handlePause();
    }, _this.handleMouseLeave = function (event) {
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
      _this.handleResume();
    }, _this.handleClickAway = function (event) {
      if (_this.props.onClose) {
        _this.props.onClose(event, 'clickaway');
      }
    }, _this.handlePause = function () {
      clearTimeout(_this.timerAutoHide);
    }, _this.handleResume = function () {
      if (_this.props.autoHideDuration != null) {
        if (_this.props.resumeHideDuration !== undefined) {
          _this.setAutoHideTimer(_this.props.resumeHideDuration);
          return;
        }
        _this.setAutoHideTimer((_this.props.autoHideDuration || 0) * 0.5);
      }
    }, _this.handleTransitionExited = function () {
      _this.setState({ exited: true });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Snackbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!this.props.open) {
        this.setState({ exited: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.open) {
        this.setAutoHideTimer();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open && this.state.exited) {
        this.setState({ exited: false });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.open !== this.props.open) {
        if (this.props.open) {
          this.setAutoHideTimer();
        } else {
          clearTimeout(this.timerAutoHide);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHide);
    }

    // Timer that controls delay before snackbar auto hides

  }, {
    key: 'setAutoHideTimer',
    value: function setAutoHideTimer() {
      var _this2 = this;

      var autoHideDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (!this.props.onClose || this.props.autoHideDuration == null) {
        return;
      }

      clearTimeout(this.timerAutoHide);
      this.timerAutoHide = setTimeout(function () {
        if (!_this2.props.onClose || _this2.props.autoHideDuration == null) {
          return;
        }

        _this2.props.onClose(null, 'timeout');
      }, autoHideDuration || this.props.autoHideDuration || 0);
    }

    // Pause the timer when the user is interacting with the Snackbar
    // or when the user hide the window.


    // Restart the timer when the user is no longer interacting with the Snackbar
    // or when the window is shown back.

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          action = _props.action,
          _props$anchorOrigin = _props.anchorOrigin,
          vertical = _props$anchorOrigin.vertical,
          horizontal = _props$anchorOrigin.horizontal,
          autoHideDuration = _props.autoHideDuration,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          message = _props.message,
          onClose = _props.onClose,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExited = _props.onExited,
          onExiting = _props.onExiting,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          open = _props.open,
          resumeHideDuration = _props.resumeHideDuration,
          SnackbarContentProps = _props.SnackbarContentProps,
          TransitionProp = _props.transition,
          transitionDuration = _props.transitionDuration,
          other = (0, _objectWithoutProperties3.default)(_props, ['action', 'anchorOrigin', 'autoHideDuration', 'children', 'classes', 'className', 'message', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExited', 'onExiting', 'onMouseEnter', 'onMouseLeave', 'open', 'resumeHideDuration', 'SnackbarContentProps', 'transition', 'transitionDuration']);


      if (!open && this.state.exited) {
        return null;
      }

      var transitionProps = {
        in: open,
        appear: true,
        timeout: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: (0, _helpers.createChainedFunction)(this.handleTransitionExited, onExited)
      };
      var transitionContent = children || _react2.default.createElement(_SnackbarContent2.default, (0, _extends9.default)({ message: message, action: action }, SnackbarContentProps));

      var transition = void 0;
      if (TransitionProp) {
        transition = _react2.default.createElement(
          TransitionProp,
          transitionProps,
          transitionContent
        );
      } else {
        transition = _react2.default.createElement(
          _Slide2.default,
          (0, _extends9.default)({ direction: vertical === 'top' ? 'down' : 'up' }, transitionProps),
          transitionContent
        );
      }

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onFocus: this.handleResume, onBlur: this.handlePause },
        _react2.default.createElement(
          _ClickAwayListener2.default,
          { onClickAway: this.handleClickAway },
          _react2.default.createElement(
            'div',
            (0, _extends9.default)({
              className: (0, _classnames2.default)(classes.root, classes['anchor' + (0, _helpers.capitalizeFirstLetter)(vertical) + (0, _helpers.capitalizeFirstLetter)(horizontal)], className),
              onMouseEnter: this.handleMouseEnter,
              onMouseLeave: this.handleMouseLeave
            }, other),
            transition
          )
        )
      );
    }
  }]);
  return Snackbar;
}(_react2.default.Component);

Snackbar.propTypes =  false ? {
  /**
   * The action to display.
   */
  action: _propTypes2.default.node,
  /**
   * The anchor of the `Snackbar`.
   */
  anchorOrigin: _propTypes2.default.shape({
    horizontal: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.oneOf(['top', 'center', 'bottom'])])
  }),
  /**
   * The number of milliseconds to wait before automatically dismissing.
   * This behavior is disabled by default with the `null` value.
   */
  autoHideDuration: _propTypes2.default.number,
  /**
   * If you wish the take control over the children of the component you can use this property.
   * When used, you replace the `SnackbarContent` component with the children.
   */
  children: _propTypes2.default.element,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * When displaying multiple consecutive Snackbars from a parent rendering a single
   * <Snackbar/>, add the key property to ensure independent treatment of each message.
   * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and
   * features such as autoHideDuration may be canceled.
   */
  key: _propTypes2.default.any,
  /**
   * The message to display.
   */
  message: _propTypes2.default.node,
  /**
   * Callback fired when the component requests to be closed.
   *
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   *
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired before the transition is entering.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the transition has entered.
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired when the transition is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fired before the transition is exiting.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the transition has exited.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the transition is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onMouseLeave: _propTypes2.default.func,
  /**
   * If true, `Snackbar` is open.
   */
  open: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` property isn't specified, it does nothing.
   * If `autoHideDuration` property is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: _propTypes2.default.number,
  /**
   * Properties applied to the `SnackbarContent` element.
   */
  SnackbarContentProps: _propTypes2.default.object,
  /**
   * Transition component.
   */
  transition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
} : {};

Snackbar.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center'
  },
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

exports.default = (0, _withStyles2.default)(styles, { flip: false, name: 'MuiSnackbar' })(Snackbar);

/***/ }),

/***/ "BSVS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Badge = __webpack_require__("kZwz");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Badge).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "BZRO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var actionTypes = __webpack_require__("ygJi");
function actionPot(player, score, isFinal) {
    if (isFinal === void 0) { isFinal = false; }
    return {
        type: actionTypes.ACTION_POT,
        player: player,
        score: score,
        isFinal: isFinal
    };
}
exports.actionPot = actionPot;
function actionFaul(player, score) {
    return {
        type: actionTypes.ACTION_FAUL,
        player: player,
        score: score
    };
}
exports.actionFaul = actionFaul;
function actionFreeball(player) {
    return {
        type: actionTypes.ACTION_FREEBALL,
        player: player
    };
}
exports.actionFreeball = actionFreeball;
function actionFinalMiss() {
    return {
        type: actionTypes.ACTION_FINAL_MISS,
    };
}
exports.actionFinalMiss = actionFinalMiss;
function actionUndo() {
    return {
        type: actionTypes.ACTION_UNDO
    };
}
exports.actionUndo = actionUndo;


/***/ }),

/***/ "Bdlu":
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__("7orI")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "CIox":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__ = __webpack_require__("onEH");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prompt__ = __webpack_require__("p5BY");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_1__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Redirect__ = __webpack_require__("1S3F");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_2__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__("s4hp");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_3__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__("twkG");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_4__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StaticRouter__ = __webpack_require__("t1d2");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_5__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch__ = __webpack_require__("bXVx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_6__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matchPath__ = __webpack_require__("Een0");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_7__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__withRouter__ = __webpack_require__("vC7t");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_8__withRouter__["a"]; });



















/***/ }),

/***/ "CKIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: (0, _extends3.default)({}, theme.typography.subheading, {
      color: theme.palette.text.secondary,
      margin: 0
    })
  };
};

function DialogContentText(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className']);


  return _react2.default.createElement(
    'p',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

DialogContentText.propTypes =  false ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogContentText' })(DialogContentText);

/***/ }),

/***/ "CnBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deepOrange = {
  50: '#fbe9e7',
  100: '#ffccbc',
  200: '#ffab91',
  300: '#ff8a65',
  400: '#ff7043',
  500: '#ff5722',
  600: '#f4511e',
  700: '#e64a19',
  800: '#d84315',
  900: '#bf360c',
  A100: '#ff9e80',
  A200: '#ff6e40',
  A400: '#ff3d00',
  A700: '#dd2c00',
  contrastDefaultColor: 'light'
};

exports.default = deepOrange;

/***/ }),

/***/ "CsXX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("VopY");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _StepLabel = __webpack_require__("+Ygu");

var _StepLabel2 = _interopRequireDefault(_StepLabel);

var _reactHelpers = __webpack_require__("ZY1E");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    background: 'none'
  },
  alternativeLabel: {
    margin: '0 auto'
  }
}; // @inheritedComponent ButtonBase

function StepButton(props) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      disabled = props.disabled,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'disabled', 'icon', 'last', 'optional', 'orientation']);


  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.alternativeLabel, alternativeLabel), classNameProp);
  var childProps = {
    active: active,
    alternativeLabel: alternativeLabel,
    completed: completed,
    disabled: disabled,
    icon: icon,
    optional: optional,
    orientation: orientation
  };
  var child = (0, _reactHelpers.isMuiElement)(children, ['StepLabel']) ? _react2.default.cloneElement(children, childProps) : _react2.default.createElement(
    _StepLabel2.default,
    childProps,
    children
  );

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({ disabled: disabled, className: className }, other),
    child
  );
}

StepButton.propTypes =  false ? {
  /**
   * @ignore
   * Passed in via `Step` - passed through to `StepLabel`.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * Sets completed styling. Is passed to StepLabel.
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   * Disables the button and sets disabled styling. Is passed to StepLabel.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * The optional node to display.
   */
  optional: _propTypes2.default.node,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepButton' })(StepButton);

/***/ }),

/***/ "Cw5q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _CheckCircle = __webpack_require__("v9RR");

var _CheckCircle2 = _interopRequireDefault(_CheckCircle);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _StepPositionIcon = __webpack_require__("wXe2");

var _StepPositionIcon2 = _interopRequireDefault(_StepPositionIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'block'
    },
    completed: {
      fill: theme.palette.primary[500]
    }
  };
};

/**
 * @ignore - internal component.
 */
function StepIcon(props) {
  var completed = props.completed,
      icon = props.icon,
      active = props.active,
      classes = props.classes;


  if (typeof icon === 'number' || typeof icon === 'string') {
    if (completed) {
      return _react2.default.createElement(_CheckCircle2.default, { className: (0, _classnames2.default)(classes.root, classes.completed) });
    }
    return _react2.default.createElement(_StepPositionIcon2.default, { className: classes.root, position: icon, active: active });
  }

  return icon;
}

StepIcon.propTypes =  false ? {
  /**
   * Whether this step is active.
   */
  active: _propTypes2.default.bool,
  /**
   * Classses for component style customizations.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: _propTypes2.default.node
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepIcon' })(StepIcon);

/***/ }),

/***/ "DOCz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      flex: '1 1 auto'
    },
    line: {
      display: 'block',
      borderColor: theme.palette.line.stepper
    },
    rootVertical: {
      marginLeft: 12, // half icon
      padding: '0 0 ' + theme.spacing.unit + 'px'
    },
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1
    },
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: 24
    },
    alternativeLabelRoot: {
      position: 'absolute',
      top: theme.spacing.unit + 4,
      left: 'calc(50% + 20px)',
      right: 'calc(-50% + 20px)'
    },
    alternativeLabelLine: {
      marginLeft: 0
    }
  };
};

/**
 * @ignore - internal component.
 */
function StepConnector(props) {
  var _classNames, _classNames2;

  var alternativeLabel = props.alternativeLabel,
      classNameProp = props.className,
      classes = props.classes,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['alternativeLabel', 'className', 'classes', 'orientation']);


  var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.root, !alternativeLabel), (0, _defineProperty3.default)(_classNames, classes.rootVertical, orientation === 'vertical'), (0, _defineProperty3.default)(_classNames, classes.alternativeLabelRoot, alternativeLabel), _classNames), classNameProp);
  var lineClassName = (0, _classnames2.default)(classes.line, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.lineHorizontal, orientation === 'horizontal'), (0, _defineProperty3.default)(_classNames2, classes.lineVertical, orientation === 'vertical'), (0, _defineProperty3.default)(_classNames2, classes.alternativeLabelLine, alternativeLabel), _classNames2));

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    _react2.default.createElement('span', { className: lineClassName })
  );
}

StepConnector.propTypes =  false ? {
  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Useful to extend the style applied to the component.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

StepConnector.defaultProps = {
  alternativeLabel: false,
  orientation: 'horizontal'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepConnector' })(StepConnector);

/***/ }),

/***/ "DsHM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Checkbox = __webpack_require__("Xshb");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkbox).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "E83m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZE = 50;

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return (clampedValue - min) / (max - min);
}

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-block'
    },
    primaryColor: {
      color: theme.palette.primary[500]
    },
    accentColor: {
      color: theme.palette.secondary.A200
    },
    svgIndeterminate: {
      animation: 'mui-progress-circular-rotate 1.4s linear infinite'
    },
    svgDeterminate: {
      transform: 'rotate(-90deg)'
    },
    circle: {
      stroke: 'currentColor',
      strokeLinecap: 'round'
    },
    circleIndeterminate: {
      animation: 'mui-progress-circular-dash 1.4s ease-in-out infinite',
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: '80,200',
      strokeDashoffset: 0
    },
    '@keyframes mui-progress-circular-rotate': {
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@keyframes mui-progress-circular-dash': {
      '0%': {
        strokeDasharray: '1,200',
        strokeDashoffset: 0
      },
      '50%': {
        strokeDasharray: '100,200',
        strokeDashoffset: -15
      },
      '100%': {
        strokeDasharray: '100,200',
        strokeDashoffset: -120
      }
    }
  };
};

function CircularProgress(props) {
  var _classNames;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      max = props.max,
      min = props.min,
      mode = props.mode,
      size = props.size,
      style = props.style,
      thickness = props.thickness,
      value = props.value,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color', 'max', 'min', 'mode', 'size', 'style', 'thickness', 'value']);


  var rootProps = {};

  var circleStyle = {};
  if (mode === 'determinate') {
    var relVal = getRelativeValue(value, min, max) * 100;
    var circumference = 2 * Math.PI * (SIZE / 2 - 5);

    circleStyle.strokeDashoffset = Math.round((100 - relVal) / 100 * circumference * 1000) / 1000 + 'px';
    circleStyle.strokeDasharray = Math.round(circumference * 1000) / 1000;

    rootProps['aria-valuenow'] = value;
    rootProps['aria-valuemin'] = min;
    rootProps['aria-valuemax'] = max;
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, color !== 'inherit' && classes[color + 'Color'], className),
      style: (0, _extends3.default)({ width: size, height: size }, style),
      role: 'progressbar'
    }, rootProps, other),
    _react2.default.createElement(
      'svg',
      {
        className: (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.svgIndeterminate, mode === 'indeterminate'), (0, _defineProperty3.default)(_classNames, classes.svgDeterminate, mode === 'determinate'), _classNames)),
        viewBox: '0 0 ' + SIZE + ' ' + SIZE
      },
      _react2.default.createElement('circle', {
        className: (0, _classnames2.default)(classes.circle, (0, _defineProperty3.default)({}, classes.circleIndeterminate, mode === 'indeterminate')),
        style: circleStyle,
        cx: SIZE / 2,
        cy: SIZE / 2,
        r: SIZE / 2 - 5,
        fill: 'none',
        strokeWidth: thickness
      })
    )
  );
}

CircularProgress.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['primary', 'accent', 'inherit']),
  /**
   * The max value of progress in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   * The mode of show your progress. Indeterminate
   * for when there is no value for progress.
   * Determinate for controlled progress value.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   * The size of the circle.
   */
  size: _propTypes2.default.number,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * The thickness of the circle.
   */
  thickness: _propTypes2.default.number,
  /**
   * The value of progress in determinate mode.
   */
  value: _propTypes2.default.number
} : {};

CircularProgress.defaultProps = {
  color: 'primary',
  max: 100,
  min: 0,
  mode: 'indeterminate',
  size: 40,
  thickness: 3.6,
  value: 0
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCircularProgress', flip: false })(CircularProgress);

/***/ }),

/***/ "EQ5b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Paper = __webpack_require__("Su6/");

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = __webpack_require__("cebZ");

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  var _root;

  var reverseType = theme.palette.type === 'light' ? 'dark' : 'light';
  var backgroundColor = theme.palette.shades[reverseType].background.default;

  return {
    root: (_root = {
      pointerEvents: 'initial',
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '6px ' + theme.spacing.unit * 3 + 'px'
    }, (0, _defineProperty3.default)(_root, theme.breakpoints.up('md'), {
      minWidth: 288,
      maxWidth: 568,
      borderRadius: 2
    }), (0, _defineProperty3.default)(_root, theme.breakpoints.down('md'), {
      flexGrow: 1
    }), _root),
    message: {
      padding: theme.spacing.unit + 'px 0'
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: theme.spacing.unit * 3,
      marginRight: -theme.spacing.unit
    }
  };
};

function SnackbarContent(props) {
  var action = props.action,
      classes = props.classes,
      className = props.className,
      message = props.message,
      other = (0, _objectWithoutProperties3.default)(props, ['action', 'classes', 'className', 'message']);


  return _react2.default.createElement(
    _Paper2.default,
    (0, _extends3.default)({
      component: _Typography2.default,
      headlineMapping: {
        body1: 'div'
      },
      role: 'alertdialog',
      square: true,
      elevation: 6,
      className: (0, _classnames2.default)(classes.root, className)
    }, other),
    _react2.default.createElement(
      'div',
      { className: classes.message },
      message
    ),
    action ? _react2.default.createElement(
      'div',
      { className: classes.action },
      action
    ) : null
  );
}

SnackbarContent.propTypes =  false ? {
  /**
   * The action to display.
   */
  action: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The message to display.
   */
  message: _propTypes2.default.node
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSnackbarContent' })(SnackbarContent);

/***/ }),

/***/ "Een0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__("Bdlu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),

/***/ "F8kA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__("8QhD");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__("nT98");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__("yL62");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__("XLvd");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__("3r6y");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__("52Em");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__("PGPo");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__("MfZD");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__("dCLN");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__("9uhF");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__("6cJI");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__("yt5j");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__("tfLY");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),

/***/ "FKtm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "FjXB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIconCustom = global.__MUI_SvgIcon__ || _SvgIcon2.default;

var _ref = _react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' });

var Poll = function Poll(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

Poll = (0, _pure2.default)(Poll);
Poll.muiName = 'SvgIcon';

exports.default = Poll;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "GRdp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("VopY");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _KeyboardArrowLeft = __webpack_require__("aeWn");

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = __webpack_require__("q8cD");

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      color: 'inherit',
      flex: '0 0 ' + theme.spacing.unit * 7 + 'px'
    }
  };
};

/**
 * @ignore - internal component.
 */

var _ref = _react2.default.createElement(_KeyboardArrowLeft2.default, null);

var _ref2 = _react2.default.createElement(_KeyboardArrowRight2.default, null);

function TabScrollButton(props) {
  var classes = props.classes,
      classNameProp = props.className,
      direction = props.direction,
      onClick = props.onClick,
      visible = props.visible,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'direction', 'onClick', 'visible']);


  var className = (0, _classnames2.default)(classes.root, classNameProp);

  if (!visible) {
    return _react2.default.createElement('div', { className: className });
  }

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({ className: className, onClick: onClick, tabIndex: -1 }, other),
    direction === 'left' ? _ref : _ref2
  );
}

TabScrollButton.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Which direction should the button indicate?
   */
  direction: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Callback to execute for button press.
   */
  onClick: _propTypes2.default.func,
  /**
   * Should the button be present or just consume space.
   */
  visible: _propTypes2.default.bool
} : {};

TabScrollButton.defaultProps = {
  visible: true
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTabScrollButton' })(TabScrollButton);

/***/ }),

/***/ "GhCA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      width: '100%',
      borderCollapse: 'collapse',
      borderSpacing: 0,
      overflow: 'hidden'
    }
  };
};

var Table = function (_React$Component) {
  (0, _inherits3.default)(Table, _React$Component);

  function Table() {
    (0, _classCallCheck3.default)(this, Table);
    return (0, _possibleConstructorReturn3.default)(this, (Table.__proto__ || (0, _getPrototypeOf2.default)(Table)).apply(this, arguments));
  }

  (0, _createClass3.default)(Table, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {}
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          children = _props.children,
          ComponentProp = _props.component,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'children', 'component']);


      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
        children
      );
    }
  }]);
  return Table;
}(_react2.default.Component);

Table.propTypes =  false ? {
  /**
   * The content of the table, normally `TableHeader` and `TableBody`.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
} : {};

Table.defaultProps = {
  component: 'table'
};

Table.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTable' })(Table);

/***/ }),

/***/ "GjM+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popper = __webpack_require__("Zgw8");

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {
  return null;
};

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({ data: data });
        }
        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;

      // If Popper isn't instantiated, hide the popperElement
      // to avoid flash of unstyled content

      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      var _data$offsets$popper = data.offsets.popper,
          top = _data$offsets$popper.top,
          left = _data$offsets$popper.left,
          position = _data$offsets$popper.position;


      return _extends({
        position: position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return !!_this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;

        return { top: top, left: left };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updatePopper();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled) {
        this._updatePopper();
      }

      if (this._popper && lastProps.children !== this.props.children) {
        this._popper.scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_updatePopper',
    value: function _updatePopper() {
      this._destroyPopper();
      if (this._node) {
        this._createPopper();
      }
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled;

      var modifiers = _extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });

      if (this._arrowNode) {
        modifiers.arrow = {
          element: this._arrowNode
        };
      }

      this._popper = new _popper2.default(this._getTargetNode(), this._node, {
        placement: placement,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // schedule an update to make sure everything gets positioned correct
      // after being instantiated
      this._popper.scheduleUpdate();
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = _objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

      var popperRef = function popperRef(node) {
        _this2._node = node;
        if (typeof innerRef === 'function') {
          innerRef(node);
        }
      };
      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();
      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var _popperProps;

        var popperProps = (_popperProps = {
          ref: popperRef,
          style: popperStyle
        }, _defineProperty(_popperProps, 'data-placement', popperPlacement), _defineProperty(_popperProps, 'data-x-out-of-boundaries', popperHide), _popperProps);
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._popper && this._popper.scheduleUpdate
        });
      }

      var componentProps = _extends({}, restProps, {
        style: _extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = popperRef;
      } else {
        componentProps.innerRef = popperRef;
      }

      return (0, _react.createElement)(component, componentProps, children);
    }
  }]);

  return Popper;
}(_react.Component);

Popper.contextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};
Popper.childContextTypes = {
  popper: _propTypes2.default.object.isRequired
};
Popper.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  placement: _propTypes2.default.oneOf(_popper2.default.placements),
  eventsEnabled: _propTypes2.default.bool,
  modifiers: _propTypes2.default.object,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};
Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  modifiers: {}
};
exports.default = Popper;

/***/ }),

/***/ "Gqvp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attributes = undefined;

exports.default = function () {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Snooker Calculator"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Application allows you to calculate players score and remaining score on table."
    ),
    _react2.default.createElement(
      "p",
      null,
      "If you run the app after several balls were potted you can use ",
      _react2.default.createElement(
        "strong",
        null,
        "Set Start data"
      ),
      " screen to update the starting score."
    ),
    _react2.default.createElement(
      "p",
      null,
      "There are some ",
      _react2.default.createElement(
        "em",
        null,
        "limitations"
      ),
      " now."
    ),
    _react2.default.createElement(
      "ul",
      null,
      _react2.default.createElement(
        "li",
        null,
        "In ",
        _react2.default.createElement(
          "strong",
          null,
          "Set Start data"
        ),
        " menu you can not specify that the next ball is coloured. So app will always start with red ball as ball on."
      ),
      _react2.default.createElement(
        "li",
        null,
        "Fauls where red was potted are not implemented. If such situtation happens you need to use ",
        _react2.default.createElement(
          "em",
          null,
          "Start data"
        ),
        " to reduce the number of reds"
      ),
      _react2.default.createElement(
        "li",
        null,
        "Free Ball is always red. Faul situations on last stage (e.g. you have to pot brown and get snookered after faul) are not present."
      )
    ),
    _react2.default.createElement(
      "p",
      null,
      "If you have any suggestion on how to fix the limitations above or other bugreports or (",
      _react2.default.createElement(
        "em",
        null,
        "prefferable"
      ),
      ") fixes - you can start an issue or pull request on ",
      _react2.default.createElement(
        "a",
        { href: "https://github.com/IBestuzhev/snooker-calc" },
        "project's GitHub"
      )
    )
  );
};

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attributes = exports.attributes = {};
;

/***/ }),

/***/ "H3Px":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stepper = __webpack_require__("W3d+");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Stepper).default;
  }
});

var _Step = __webpack_require__("XY7D");

Object.defineProperty(exports, 'Step', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Step).default;
  }
});

var _StepButton = __webpack_require__("CsXX");

Object.defineProperty(exports, 'StepButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StepButton).default;
  }
});

var _StepContent = __webpack_require__("lp/y");

Object.defineProperty(exports, 'StepContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StepContent).default;
  }
});

var _StepLabel = __webpack_require__("+Ygu");

Object.defineProperty(exports, 'StepLabel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StepLabel).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "HF/c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

__webpack_require__("WdaU");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// So we don't have any override priority issue.

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: theme.spacing.unit + 'px ' + theme.spacing.unit / 2 + 'px',
      flex: '0 0 auto'
    },
    action: {
      margin: '0 ' + theme.spacing.unit / 2 + 'px'
    },
    button: {
      minWidth: 64
    }
  };
};

function DialogActions(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    _react2.default.Children.map(children, function (child) {
      if (!_react2.default.isValidElement(child)) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: classes.action },
        _react2.default.cloneElement(child, {
          className: (0, _classnames2.default)(classes.button, child.props.className)
        })
      );
    })
  );
}

DialogActions.propTypes =  false ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogActions' })(DialogActions);

/***/ }),

/***/ "HIVZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__("M/nl");
} else {
  module.exports = require('./index.dev');
}

/***/ }),

/***/ "HJTf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Transition = __webpack_require__("TAxY");

var _Transition2 = _interopRequireDefault(_Transition);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _transitions = __webpack_require__("CMPy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent Transition

var styles = exports.styles = function styles(theme) {
  return {
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    entered: {
      height: 'auto'
    },
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },
    wrapperInner: {
      width: '100%'
    }
  };
};

var Collapse = function (_React$Component) {
  (0, _inherits3.default)(Collapse, _React$Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Collapse.__proto__ || (0, _getPrototypeOf2.default)(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.wrapper = null, _this.autoTransitionDuration = undefined, _this.handleEnter = function (node) {
      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var _this$props = _this.props,
          timeout = _this$props.timeout,
          theme = _this$props.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = duration2 + 'ms';
        _this.autoTransitionDuration = duration2;
      } else if (typeof timeout === 'number') {
        node.style.transitionDuration = timeout + 'ms';
      } else if (timeout && typeof timeout.enter === 'number') {
        node.style.transitionDuration = timeout.enter + 'ms';
      } else {
        // The propType will warn in this case.
      }

      node.style.height = wrapperHeight + 'px';

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleEntered = function (node) {
      node.style.height = 'auto';

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    }, _this.handleExit = function (node) {
      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;
      node.style.height = wrapperHeight + 'px';

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.handleExiting = function (node) {
      var _this$props2 = _this.props,
          timeout = _this$props2.timeout,
          theme = _this$props2.theme;

      var wrapperHeight = _this.wrapper ? _this.wrapper.clientHeight : 0;

      if (timeout === 'auto') {
        var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
        node.style.transitionDuration = duration2 + 'ms';
        _this.autoTransitionDuration = duration2;
      } else if (typeof timeout === 'number') {
        node.style.transitionDuration = timeout + 'ms';
      } else if (timeout && typeof timeout.exit === 'number') {
        node.style.transitionDuration = timeout.exit + 'ms';
      } else {
        // The propType will warn in this case.
      }

      node.style.height = _this.props.collapsedHeight;

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    }, _this.addEndListener = function (node, next) {
      if (_this.props.timeout === 'auto') {
        setTimeout(next, _this.autoTransitionDuration || 0);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Collapse, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          appear = _props.appear,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          collapsedHeight = _props.collapsedHeight,
          ComponentProp = _props.component,
          containerProps = _props.containerProps,
          onEnter = _props.onEnter,
          onEntered = _props.onEntered,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExiting = _props.onExiting,
          style = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          other = (0, _objectWithoutProperties3.default)(_props, ['appear', 'children', 'classes', 'className', 'collapsedHeight', 'component', 'containerProps', 'onEnter', 'onEntered', 'onEntering', 'onExit', 'onExiting', 'style', 'theme', 'timeout']);


      return _react2.default.createElement(
        _Transition2.default,
        (0, _extends3.default)({
          appear: appear,
          onEntering: this.handleEntering,
          onEnter: this.handleEnter,
          onEntered: this.handleEntered,
          onExiting: this.handleExiting,
          onExit: this.handleExit,
          addEndListener: this.addEndListener,
          timeout: timeout === 'auto' ? null : timeout
        }, other),
        function (state, otherInner) {
          return _react2.default.createElement(
            ComponentProp,
            (0, _extends3.default)({
              className: (0, _classnames2.default)(classes.container, (0, _defineProperty3.default)({}, classes.entered, state === 'entered'), className),
              style: (0, _extends3.default)({}, style, {
                minHeight: collapsedHeight
              })
            }, otherInner),
            _react2.default.createElement(
              'div',
              {
                className: classes.wrapper,
                ref: function ref(node) {
                  _this2.wrapper = node;
                }
              },
              _react2.default.createElement(
                'div',
                { className: classes.wrapperInner },
                children
              )
            )
          );
        }
      );
    }
  }]);
  return Collapse;
}(_react2.default.Component);

Collapse.propTypes =  false ? {
  /**
   * @ignore
   */
  appear: _propTypes2.default.bool,
  /**
   * The content node to be collapsed.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The height of the container when collapsed.
   */
  collapsedHeight: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * Properties applied to the `Collapse` container.
   */
  containerProps: _propTypes2.default.object,
  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes2.default.bool,
  /**
   * @ignore
   */
  onEnter: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntered: _propTypes2.default.func,
  /**
   * @ignore
   */
  onEntering: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExit: _propTypes2.default.func,
  /**
   * @ignore
   */
  onExiting: _propTypes2.default.func,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
} : {};

Collapse.defaultProps = {
  appear: false,
  collapsedHeight: '0px',
  component: 'div',
  timeout: _transitions.duration.standard
};

exports.default = (0, _withStyles2.default)(styles, {
  withTheme: true,
  name: 'MuiCollapse'
})(Collapse);

/***/ }),

/***/ "HSnN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__("Izpu");

var _LocationUtils = __webpack_require__("xIPz");

var _createTransitionManager = __webpack_require__("tqq1");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "Iauv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__("Wpbd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__("FKtm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__("okyF");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["default"])(a.state, b.state);
};

/***/ }),

/***/ "IiIQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),

/***/ "Izpu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "Ju3X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Card = __webpack_require__("78Lv");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Card).default;
  }
});

var _CardContent = __webpack_require__("xG2a");

Object.defineProperty(exports, 'CardContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CardContent).default;
  }
});

var _CardActions = __webpack_require__("Thdd");

Object.defineProperty(exports, 'CardActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CardActions).default;
  }
});

var _CardMedia = __webpack_require__("79nE");

Object.defineProperty(exports, 'CardMedia', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CardMedia).default;
  }
});

var _CardHeader = __webpack_require__("5SeW");

Object.defineProperty(exports, 'CardHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CardHeader).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "KGR4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff',
  contrastDefaultColor: 'light'
};

exports.default = blue;

/***/ }),

/***/ "KMAb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("GiK3");
var react_router_dom_1 = __webpack_require__("F8kA");
var react_router_dom_2 = __webpack_require__("F8kA");
var hello_1 = __webpack_require__("VKi+");
var names_1 = __webpack_require__("RRHe");
var scores_1 = __webpack_require__("hjiS");
var starter_1 = __webpack_require__("lo5y");
var AppBar_1 = __webpack_require__("U9Ys");
var Toolbar_1 = __webpack_require__("pXSj");
var Button_1 = __webpack_require__("WdaU");
var Typography_1 = __webpack_require__("cebZ");
var withWidth_1 = __webpack_require__("/U7w");
var styles_1 = __webpack_require__("WiM9");
__webpack_require__("pfMu");
var Hidden_1 = __webpack_require__("7tRF");
var Drawer_1 = __webpack_require__("oJww");
var withStyles_1 = __webpack_require__("3rUI");
var Home_1 = __webpack_require__("VMvG");
var People_1 = __webpack_require__("bRnz");
var Poll_1 = __webpack_require__("FjXB");
var Build_1 = __webpack_require__("ygfL");
var NavButton2 = /** @class */ (function (_super) {
    __extends(NavButton2, _super);
    function NavButton2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavButton2.prototype.handleNavigation = function () {
        this.context.router.history.push(this.props.to);
    };
    NavButton2.prototype.render = function () {
        var _this = this;
        var isMatch = this.props.to == this.context.router.route.location.pathname;
        var baseColor = this.props.inversed ? "default" : "contrast";
        return (React.createElement(Button_1.default, { color: isMatch ? "accent" : baseColor, onClick: function () { return _this.handleNavigation(); } }, this.props.children));
    };
    NavButton2.contextTypes = {
        router: react_router_dom_1.Link.contextTypes.router
    };
    return NavButton2;
}(React.Component));
var NavButton = styles_1.withTheme()(function (props) {
    var baseColor = props.inversed ? "default" : "contrast";
    return (React.createElement(Button_1.default, { color: baseColor, dense: !props.inversed, component: function (subProps) { return (React.createElement(react_router_dom_1.NavLink, __assign({ exact: props.exact, to: props.to, activeStyle: { color: props.theme.palette.secondary.A200 } }, subProps))); } }, props.children));
});
var NavMenu = withStyles_1.default(function (theme) { return ({
    iconGutter: {
        marginRight: theme.spacing.unit,
    }
}); })(function (props) { return (React.createElement("div", { style: { display: "flex", flexDirection: "inherit" } },
    React.createElement(NavButton, { exact: true, to: publicPath, inversed: props.inversed },
        React.createElement(Home_1.default, { className: props.classes.iconGutter }),
        " Intro"),
    React.createElement(NavButton, { to: publicPath + "names", inversed: props.inversed },
        React.createElement(People_1.default, { className: props.classes.iconGutter }),
        "Names"),
    React.createElement(NavButton, { to: publicPath + "scores", inversed: props.inversed },
        React.createElement(Poll_1.default, { className: props.classes.iconGutter }),
        "Score Board"),
    React.createElement(NavButton, { to: publicPath + "starter", inversed: props.inversed },
        React.createElement(Build_1.default, { className: props.classes.iconGutter }),
        "Set Start data"))); });
exports.App = withWidth_1.default()(/** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            drawerOpen: false
        };
        return _this;
    }
    class_1.prototype.render = function () {
        var _this = this;
        return (React.createElement(styles_1.MuiThemeProvider, { theme: styles_1.createMuiTheme() },
            React.createElement("div", { style: { padding: 20, maxWidth: "960px", margin: "0 auto", marginTop: "80px" } },
                React.createElement(AppBar_1.default, null,
                    React.createElement(Toolbar_1.default, null,
                        React.createElement(Typography_1.default, { type: "title", color: "inherit", style: { flex: 1 } }, "Snooker calculator"),
                        React.createElement(Hidden_1.default, { smDown: true },
                            React.createElement(NavMenu, null)),
                        React.createElement(Hidden_1.default, { smUp: true },
                            React.createElement(Button_1.default, { color: "contrast", onClick: function () { return _this.setState({ drawerOpen: true }); } }, "Menu")))),
                React.createElement(Drawer_1.default, { anchor: "right", open: this.props.width == 'xs' && this.state.drawerOpen, onClick: function () { return _this.setState({ drawerOpen: false }); } },
                    React.createElement(NavMenu, { inversed: true })),
                this.props.children,
                React.createElement(react_router_dom_2.Switch, null,
                    React.createElement(react_router_dom_2.Route, { exact: true, path: publicPath, component: hello_1.Hello }),
                    React.createElement(react_router_dom_2.Route, { path: publicPath + "names", component: names_1.NameForm }),
                    React.createElement(react_router_dom_2.Route, { path: publicPath + "scores", component: scores_1.ScoreBoard }),
                    React.createElement(react_router_dom_2.Route, { path: publicPath + "starter", component: starter_1.Starter }),
                    React.createElement(react_router_dom_2.Redirect, { to: publicPath })))));
    };
    return class_1;
}(React.Component)));
// export const App = withStyles(theme => ({flex: {}}))(_App)
// export const App = (_App)


/***/ }),

/***/ "KNBb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tooltip = __webpack_require__("c61G");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tooltip).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "KUQt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Switch = __webpack_require__("fsXy");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Switch).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "Kdur":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _Collapse = __webpack_require__("HJTf");

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Paper = __webpack_require__("Su6/");

var _Paper2 = _interopRequireDefault(_Paper);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactHelpers = __webpack_require__("ZY1E");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  var transition = {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.ease
  };

  return {
    root: {
      position: 'relative',
      margin: 0,
      transition: theme.transitions.create(['margin'], transition),
      '&:before': {
        position: 'absolute',
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: theme.palette.text.divider,
        transition: theme.transitions.create(['opacity', 'background-color'], transition)
      },
      '&:first-child': {
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        '&:before': {
          display: 'none'
        }
      },
      '&:last-child': {
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2
      },
      '&$expanded + &': {
        '&:before': {
          display: 'none'
        }
      }
    },
    expanded: {
      margin: theme.spacing.unit * 2 + 'px 0',
      '&:first-child': {
        marginTop: 0
      },
      '&:last-child': {
        marginBottom: 0
      },
      '&:before': {
        opacity: 0
      }
    },
    disabled: {
      backgroundColor: theme.palette.text.divider
    }
  };
}; // @inheritedComponent Paper

var ExpansionPanel = function (_React$Component) {
  (0, _inherits3.default)(ExpansionPanel, _React$Component);

  function ExpansionPanel() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ExpansionPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExpansionPanel.__proto__ || (0, _getPrototypeOf2.default)(ExpansionPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _this.isControlled = null, _this.handleChange = function (event) {
      var onChange = _this.props.onChange;

      var expanded = !_this.state.expanded;

      if (onChange) {
        onChange(event, expanded);
      }

      if (!_this.isControlled) {
        _this.setState({ expanded: expanded });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ExpansionPanel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          expanded = _props.expanded,
          defaultExpanded = _props.defaultExpanded;

      this.isControlled = expanded !== undefined;
      this.setState({
        expanded: this.isControlled ? expanded : defaultExpanded
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.isControlled) {
        this.setState({
          expanded: nextProps.expanded
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props2 = this.props,
          childrenProp = _props2.children,
          classes = _props2.classes,
          classNameProp = _props2.className,
          CollapsePropsProp = _props2.CollapseProps,
          defaultExpanded = _props2.defaultExpanded,
          disabled = _props2.disabled,
          expandedProp = _props2.expanded,
          onChange = _props2.onChange,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'classes', 'className', 'CollapseProps', 'defaultExpanded', 'disabled', 'expanded', 'onChange']);
      var expanded = this.state.expanded;


      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.expanded, expanded), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames), classNameProp);

      var summary = null;

      var children = _react2.default.Children.map(childrenProp, function (child) {
        if (!_react2.default.isValidElement(child)) {
          return null;
        }

        if ((0, _reactHelpers.isMuiElement)(child, ['ExpansionPanelSummary'])) {
          summary = _react2.default.cloneElement(child, {
            disabled: disabled,
            expanded: expanded,
            onChange: _this2.handleChange
          });
          return null;
        }

        return child;
      });

      var CollapseProps = !expanded ? {
        'aria-hidden': 'true'
      } : null;

      return _react2.default.createElement(
        _Paper2.default,
        (0, _extends3.default)({ className: className, elevation: 1, square: true }, other),
        summary,
        _react2.default.createElement(
          _Collapse2.default,
          (0, _extends3.default)({ 'in': expanded, timeout: 'auto' }, CollapseProps, CollapsePropsProp),
          children
        )
      );
    }
  }]);
  return ExpansionPanel;
}(_react2.default.Component);

ExpansionPanel.propTypes =  false ? {
  /**
   * The content of the expansion panel.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Properties applied to the `Collapse` element.
   */
  CollapseProps: _propTypes2.default.object,
  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: _propTypes2.default.bool,
  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: _propTypes2.default.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: _propTypes2.default.func
} : {};

ExpansionPanel.defaultProps = {
  defaultExpanded: false,
  disabled: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanel' })(ExpansionPanel);

/***/ }),

/***/ "KgpJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var withWidth_1 = __webpack_require__("/U7w");
var scores_1 = __webpack_require__("mr5k");
var withStyles_1 = __webpack_require__("3rUI");
var scores_potlist_1 = __webpack_require__("rf4U");
var React = __webpack_require__("GiK3");
var material_ui_1 = __webpack_require__("Q4lS");
var react_redux_1 = __webpack_require__("RH2O");
var scores_2 = __webpack_require__("BZRO");
var connector = react_redux_1.connect(scores_1.CanPotSelector, { actionPot: scores_2.actionPot, actionUndo: scores_2.actionUndo, actionFaul: scores_2.actionFaul, actionFreeball: scores_2.actionFreeball, actionFinalMiss: scores_2.actionFinalMiss }, function (stateProps, dispatchProps, ownProps) {
    var actionPotDispatch = dispatchProps.actionPot;
    var actionPotNew = function (p, s) { return actionPotDispatch(p, s, stateProps.showMissBtn); };
    return __assign({}, stateProps, dispatchProps, ownProps, { actionPot: actionPotNew });
});
exports.Potter = connector(withWidth_1.default()(withStyles_1.default(scores_potlist_1.BallStyles)(function (props) {
    var freeballChecker = function (player) { return props.canPotFreeball == player; };
    var classes = props.classes;
    return (React.createElement("div", null,
        React.createElement("h3", null, "Scoring"),
        [1, 2, 3, 4, 5, 6, 7].map(function (score) { return (React.createElement(material_ui_1.Grid, { container: true, key: "score-" + score, spacing: 0 },
            React.createElement(material_ui_1.Grid, { item: true, xs: 5 },
                React.createElement(material_ui_1.Typography, { align: "center" },
                    React.createElement(material_ui_1.Button, { className: classes.btnBlock, dense: withWidth_1.isWidthDown("sm", props.width), onClick: function () { return props.actionPot("left", score); }, disabled: !props.canPotColor("left", score) },
                        React.createElement(material_ui_1.Hidden, { smDown: true }, "to Left"),
                        React.createElement(material_ui_1.Hidden, { smUp: true }, "<<")))),
            React.createElement(material_ui_1.Grid, { item: true, xs: 2 },
                React.createElement(material_ui_1.Typography, { align: "center" },
                    React.createElement("span", { className: classes.smallAvatar + " " + classes["ball" + score] }, score))),
            React.createElement(material_ui_1.Grid, { item: true, xs: 5 },
                React.createElement(material_ui_1.Typography, { align: "center" },
                    React.createElement(material_ui_1.Button, { className: classes.btnBlock, dense: withWidth_1.isWidthDown("sm", props.width), onClick: function () { return props.actionPot("right", score); }, disabled: !props.canPotColor("right", score) },
                        React.createElement(material_ui_1.Hidden, { smDown: true }, "to Right"),
                        React.createElement(material_ui_1.Hidden, { smUp: true }, ">>")))))); }),
        props.showMissBtn ?
            React.createElement(material_ui_1.Typography, { align: "center", component: "div" },
                React.createElement(material_ui_1.Button, { raised: true, color: "primary", hidden: !props.showMissBtn, onClick: function () { return props.actionFinalMiss(); } }, "Begin final stage"))
            : null,
        React.createElement("h3", null, "Fauls"),
        React.createElement(material_ui_1.Typography, { align: "center", component: "div" },
            React.createElement(material_ui_1.Button, { raised: true, color: "accent", onClick: function () { return props.drawerOpener(); } }, "Add Faul Points")),
        React.createElement("h3", null, "Free ball"),
        React.createElement(material_ui_1.Typography, { align: "center" },
            React.createElement(material_ui_1.Button, { onClick: function () { return props.actionFreeball("left"); }, disabled: !freeballChecker("left"), raised: true, color: "primary" },
                React.createElement(material_ui_1.Hidden, { smDown: true }, "to Left"),
                React.createElement(material_ui_1.Hidden, { smUp: true }, "<<")),
            React.createElement(material_ui_1.Button, { onClick: function () { return props.actionFreeball("right"); }, disabled: !freeballChecker("right"), raised: true, color: "primary" },
                React.createElement(material_ui_1.Hidden, { smDown: true }, "to Right"),
                React.createElement(material_ui_1.Hidden, { smUp: true }, ">>"))),
        React.createElement("h3", null, "Undo"),
        React.createElement(material_ui_1.Typography, { align: "center" },
            React.createElement(material_ui_1.Button, { onClick: function () { return props.actionUndo(); }, raised: true, color: "accent" }, "Undo last action"))));
})));


/***/ }),

/***/ "KkuI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createBroadcast (initialState) {
  var listeners = {};
  var id = 1;
  var _state = initialState;

  function getState () {
    return _state
  }

  function setState (state) {
    _state = state;
    var keys = Object.keys(listeners);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (listeners[keys[i]]) { listeners[keys[i]](state); }
    }
  }

  // subscribe to changes and return the subscriptionId
  function subscribe (listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.')
    }
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    return currentId
  }

  // remove subscription by removing the listener function
  function unsubscribe (id) {
    listeners[id] = undefined;
  }

  return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
}

/* harmony default export */ __webpack_exports__["default"] = (createBroadcast);


/***/ }),

/***/ "Knuv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00',
  contrastDefaultColor: 'dark'
};

exports.default = orange;

/***/ }),

/***/ "LLq1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("awF4")

/**
 * `requestAnimationFrame()`
 */

var request = global.requestAnimationFrame
  || global.webkitRequestAnimationFrame
  || global.mozRequestAnimationFrame
  || fallback

var prev = +new Date
function fallback (fn) {
  var curr = +new Date
  var ms = Math.max(0, 16 - (curr - prev))
  var req = setTimeout(fn, ms)
  return prev = curr, req
}

/**
 * `cancelAnimationFrame()`
 */

var cancel = global.cancelAnimationFrame
  || global.webkitCancelAnimationFrame
  || global.mozCancelAnimationFrame
  || clearTimeout

if (Function.prototype.bind) {
  request = request.bind(global)
  cancel = cancel.bind(global)
}

exports = module.exports = request
exports.cancel = cancel


/***/ }),

/***/ "M/nl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__("lx7a");

/***/ }),

/***/ "MfZD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__ = __webpack_require__("s4hp");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Route__["a" /* default */]);

/***/ }),

/***/ "MrLf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      color: 'inherit',
      display: 'table-row',
      height: 48,
      '&:focus': {
        outline: 'none'
      },
      verticalAlign: 'middle'
    },
    head: {
      height: 56
    },
    footer: {
      height: 56
    },
    hover: {
      '&:hover': {
        background: theme.palette.background.contentFrame
      }
    },
    selected: {
      background: theme.palette.background.appBar
    }
  };
};

/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 */
function TableRow(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      hover = props.hover,
      selected = props.selected,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'component', 'hover', 'selected']);
  var table = context.table;


  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.head, table && table.head), (0, _defineProperty3.default)(_classNames, classes.footer, table && table.footer), (0, _defineProperty3.default)(_classNames, classes.hover, table && hover), (0, _defineProperty3.default)(_classNames, classes.selected, table && selected), _classNames), classNameProp);

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

TableRow.propTypes =  false ? {
  /**
   * Should be valid `<tr>` children such as `TableCell`.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, the table row will shade on hover.
   */
  hover: _propTypes2.default.bool,
  /**
   * If `true`, the table row will have the selected shading.
   */
  selected: _propTypes2.default.bool
} : {};

TableRow.defaultProps = {
  component: 'tr',
  hover: false,
  selected: false
};

TableRow.contextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableRow' })(TableRow);

/***/ }),

/***/ "NPDY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Based on https://github.com/react-bootstrap/dom-helpers/blob/master/src/util/inDOM.js
var inDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var cachedType;
function _setScrollType(type) {
    cachedType = type;
}
exports._setScrollType = _setScrollType;
// Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
function detectScrollType() {
    if (cachedType) {
        return cachedType;
    }
    if (!inDOM || !window.document.body) {
        return 'indeterminate';
    }
    var dummy = window.document.createElement('div');
    dummy.appendChild(document.createTextNode('ABCD'));
    dummy.dir = 'rtl';
    dummy.style.fontSize = '14px';
    dummy.style.width = '4px';
    dummy.style.height = '1px';
    dummy.style.position = 'absolute';
    dummy.style.top = '-1000px';
    dummy.style.overflow = 'scroll';
    document.body.appendChild(dummy);
    cachedType = 'reverse';
    if (dummy.scrollLeft > 0) {
        cachedType = 'default';
    }
    else {
        dummy.scrollLeft = 1;
        if (dummy.scrollLeft === 0) {
            cachedType = 'negative';
        }
    }
    document.body.removeChild(dummy);
    return cachedType;
}
exports.detectScrollType = detectScrollType;
// Based on https://stackoverflow.com/a/24394376
function getNormalizedScrollLeft(element, direction) {
    var scrollLeft = element.scrollLeft;
    // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
    if (direction !== 'rtl') {
        return scrollLeft;
    }
    var type = detectScrollType();
    if (type === 'indeterminate') {
        return Number.NaN;
    }
    switch (type) {
        case 'negative':
            return element.scrollWidth - element.clientWidth + scrollLeft;
        case 'reverse':
            return element.scrollWidth - element.clientWidth - scrollLeft;
    }
    return scrollLeft;
}
exports.getNormalizedScrollLeft = getNormalizedScrollLeft;
function setNormalizedScrollLeft(element, scrollLeft, direction) {
    // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior
    if (direction !== 'rtl') {
        element.scrollLeft = scrollLeft;
        return;
    }
    var type = detectScrollType();
    if (type === 'indeterminate') {
        return;
    }
    switch (type) {
        case 'negative':
            element.scrollLeft = element.clientWidth - element.scrollWidth + scrollLeft;
            break;
        case 'reverse':
            element.scrollLeft = element.scrollWidth - element.clientWidth - scrollLeft;
            break;
        default:
            element.scrollLeft = scrollLeft;
            break;
    }
}
exports.setNormalizedScrollLeft = setNormalizedScrollLeft;


/***/ }),

/***/ "PGPo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__ = __webpack_require__("1S3F");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Redirect__["a" /* default */]);

/***/ }),

/***/ "PXKu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dialog = __webpack_require__("lmKt");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dialog).default;
  }
});

var _DialogActions = __webpack_require__("HF/c");

Object.defineProperty(exports, 'DialogActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogActions).default;
  }
});

var _DialogTitle = __webpack_require__("jn27");

Object.defineProperty(exports, 'DialogTitle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogTitle).default;
  }
});

var _DialogContent = __webpack_require__("sKKu");

Object.defineProperty(exports, 'DialogContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogContent).default;
  }
});

var _DialogContentText = __webpack_require__("CKIC");

Object.defineProperty(exports, 'DialogContentText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DialogContentText).default;
  }
});

var _withMobileDialog = __webpack_require__("+Op1");

Object.defineProperty(exports, 'withMobileDialog', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withMobileDialog).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "Q4lS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppBar__ = __webpack_require__("U9Ys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__AppBar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return __WEBPACK_IMPORTED_MODULE_0__AppBar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Avatar__ = __webpack_require__("Oyr6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Avatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Avatar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return __WEBPACK_IMPORTED_MODULE_1__Avatar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Badge__ = __webpack_require__("BSVS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Badge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Badge__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return __WEBPACK_IMPORTED_MODULE_2__Badge___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BottomNavigation__ = __webpack_require__("33H0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__BottomNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__BottomNavigation__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "BottomNavigation", function() { return __WEBPACK_IMPORTED_MODULE_3__BottomNavigation___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__BottomNavigation__, "BottomNavigationButton")) __webpack_require__.d(__webpack_exports__, "BottomNavigationButton", function() { return __WEBPACK_IMPORTED_MODULE_3__BottomNavigation__["BottomNavigationButton"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button__ = __webpack_require__("WdaU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Button__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_4__Button___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ButtonBase__ = __webpack_require__("VopY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ButtonBase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ButtonBase__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ButtonBase", function() { return __WEBPACK_IMPORTED_MODULE_5__ButtonBase___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Card__ = __webpack_require__("Ju3X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Card__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return __WEBPACK_IMPORTED_MODULE_6__Card___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__Card__, "CardActions")) __webpack_require__.d(__webpack_exports__, "CardActions", function() { return __WEBPACK_IMPORTED_MODULE_6__Card__["CardActions"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__Card__, "CardContent")) __webpack_require__.d(__webpack_exports__, "CardContent", function() { return __WEBPACK_IMPORTED_MODULE_6__Card__["CardContent"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__Card__, "CardHeader")) __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return __WEBPACK_IMPORTED_MODULE_6__Card__["CardHeader"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__Card__, "CardMedia")) __webpack_require__.d(__webpack_exports__, "CardMedia", function() { return __WEBPACK_IMPORTED_MODULE_6__Card__["CardMedia"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Checkbox__ = __webpack_require__("DsHM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Checkbox__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_7__Checkbox___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Chip__ = __webpack_require__("ySDz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Chip__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Chip", function() { return __WEBPACK_IMPORTED_MODULE_8__Chip___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_ClickAwayListener__ = __webpack_require__("jI+e");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_ClickAwayListener___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__utils_ClickAwayListener__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ClickAwayListener", function() { return __WEBPACK_IMPORTED_MODULE_9__utils_ClickAwayListener___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Dialog__ = __webpack_require__("PXKu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__Dialog__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "DialogActions")) __webpack_require__.d(__webpack_exports__, "DialogActions", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["DialogActions"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "DialogContent")) __webpack_require__.d(__webpack_exports__, "DialogContent", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["DialogContent"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "DialogContentText")) __webpack_require__.d(__webpack_exports__, "DialogContentText", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["DialogContentText"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "DialogTitle")) __webpack_require__.d(__webpack_exports__, "DialogTitle", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["DialogTitle"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__Dialog__, "withMobileDialog")) __webpack_require__.d(__webpack_exports__, "withMobileDialog", function() { return __WEBPACK_IMPORTED_MODULE_10__Dialog__["withMobileDialog"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Divider__ = __webpack_require__("5DZT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__Divider__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return __WEBPACK_IMPORTED_MODULE_11__Divider___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Drawer__ = __webpack_require__("oJww");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__Drawer__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return __WEBPACK_IMPORTED_MODULE_12__Drawer___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__ = __webpack_require__("kfgG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanel", function() { return __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__, "ExpansionPanelActions")) __webpack_require__.d(__webpack_exports__, "ExpansionPanelActions", function() { return __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__["ExpansionPanelActions"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__, "ExpansionPanelDetails")) __webpack_require__.d(__webpack_exports__, "ExpansionPanelDetails", function() { return __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__["ExpansionPanelDetails"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__, "ExpansionPanelSummary")) __webpack_require__.d(__webpack_exports__, "ExpansionPanelSummary", function() { return __WEBPACK_IMPORTED_MODULE_13__ExpansionPanel__["ExpansionPanelSummary"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Form__ = __webpack_require__("pPD4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__Form__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormControl")) __webpack_require__.d(__webpack_exports__, "FormControl", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormControl"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormGroup")) __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormGroup"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormLabel")) __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormLabel"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormHelperText")) __webpack_require__.d(__webpack_exports__, "FormHelperText", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormHelperText"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__Form__, "FormControlLabel")) __webpack_require__.d(__webpack_exports__, "FormControlLabel", function() { return __WEBPACK_IMPORTED_MODULE_14__Form__["FormControlLabel"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Hidden__ = __webpack_require__("7tRF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Hidden___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__Hidden__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return __WEBPACK_IMPORTED_MODULE_15__Hidden___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Icon__ = __webpack_require__("nGxd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__Icon__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_16__Icon___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__IconButton__ = __webpack_require__("nz+8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__IconButton__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return __WEBPACK_IMPORTED_MODULE_17__IconButton___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Input__ = __webpack_require__("fzMo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__Input__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_18__Input___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_18__Input__, "InputLabel")) __webpack_require__.d(__webpack_exports__, "InputLabel", function() { return __WEBPACK_IMPORTED_MODULE_18__Input__["InputLabel"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_18__Input__, "InputAdornment")) __webpack_require__.d(__webpack_exports__, "InputAdornment", function() { return __WEBPACK_IMPORTED_MODULE_18__Input__["InputAdornment"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Grid__ = __webpack_require__("lRCh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__Grid__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_19__Grid___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__List__ = __webpack_require__("HwzN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__List__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "List", function() { return __WEBPACK_IMPORTED_MODULE_20__List___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_20__List__, "ListItem")) __webpack_require__.d(__webpack_exports__, "ListItem", function() { return __WEBPACK_IMPORTED_MODULE_20__List__["ListItem"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_20__List__, "ListItemAvatar")) __webpack_require__.d(__webpack_exports__, "ListItemAvatar", function() { return __WEBPACK_IMPORTED_MODULE_20__List__["ListItemAvatar"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_20__List__, "ListItemIcon")) __webpack_require__.d(__webpack_exports__, "ListItemIcon", function() { return __WEBPACK_IMPORTED_MODULE_20__List__["ListItemIcon"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_20__List__, "ListItemSecondaryAction")) __webpack_require__.d(__webpack_exports__, "ListItemSecondaryAction", function() { return __WEBPACK_IMPORTED_MODULE_20__List__["ListItemSecondaryAction"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_20__List__, "ListItemText")) __webpack_require__.d(__webpack_exports__, "ListItemText", function() { return __WEBPACK_IMPORTED_MODULE_20__List__["ListItemText"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_20__List__, "ListSubheader")) __webpack_require__.d(__webpack_exports__, "ListSubheader", function() { return __WEBPACK_IMPORTED_MODULE_20__List__["ListSubheader"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Menu__ = __webpack_require__("Vvdx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__Menu__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return __WEBPACK_IMPORTED_MODULE_21__Menu___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_21__Menu__, "MenuItem")) __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return __WEBPACK_IMPORTED_MODULE_21__Menu__["MenuItem"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_21__Menu__, "MenuList")) __webpack_require__.d(__webpack_exports__, "MenuList", function() { return __WEBPACK_IMPORTED_MODULE_21__Menu__["MenuList"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Modal__ = __webpack_require__("FdYf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__Modal__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_22__Modal___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Paper__ = __webpack_require__("Su6/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__Paper__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return __WEBPACK_IMPORTED_MODULE_23__Paper___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Popover__ = __webpack_require__("g+yz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__Popover__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_24__Popover___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Progress__ = __webpack_require__("p/BV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__Progress__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_25__Progress__, "CircularProgress")) __webpack_require__.d(__webpack_exports__, "CircularProgress", function() { return __WEBPACK_IMPORTED_MODULE_25__Progress__["CircularProgress"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_25__Progress__, "LinearProgress")) __webpack_require__.d(__webpack_exports__, "LinearProgress", function() { return __WEBPACK_IMPORTED_MODULE_25__Progress__["LinearProgress"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Radio__ = __webpack_require__("SjfM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__Radio__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return __WEBPACK_IMPORTED_MODULE_26__Radio___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_26__Radio__, "RadioGroup")) __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_26__Radio__["RadioGroup"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Select__ = __webpack_require__("ZToG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__Select__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return __WEBPACK_IMPORTED_MODULE_27__Select___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Snackbar__ = __webpack_require__("qX37");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__Snackbar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return __WEBPACK_IMPORTED_MODULE_28__Snackbar___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_28__Snackbar__, "SnackbarContent")) __webpack_require__.d(__webpack_exports__, "SnackbarContent", function() { return __WEBPACK_IMPORTED_MODULE_28__Snackbar__["SnackbarContent"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Stepper__ = __webpack_require__("H3Px");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__Stepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__Stepper__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Stepper", function() { return __WEBPACK_IMPORTED_MODULE_29__Stepper___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_29__Stepper__, "Step")) __webpack_require__.d(__webpack_exports__, "Step", function() { return __WEBPACK_IMPORTED_MODULE_29__Stepper__["Step"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_29__Stepper__, "StepButton")) __webpack_require__.d(__webpack_exports__, "StepButton", function() { return __WEBPACK_IMPORTED_MODULE_29__Stepper__["StepButton"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_29__Stepper__, "StepContent")) __webpack_require__.d(__webpack_exports__, "StepContent", function() { return __WEBPACK_IMPORTED_MODULE_29__Stepper__["StepContent"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_29__Stepper__, "StepLabel")) __webpack_require__.d(__webpack_exports__, "StepLabel", function() { return __WEBPACK_IMPORTED_MODULE_29__Stepper__["StepLabel"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__styles__ = __webpack_require__("WiM9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__styles__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_30__styles__, "MuiThemeProvider")) __webpack_require__.d(__webpack_exports__, "MuiThemeProvider", function() { return __WEBPACK_IMPORTED_MODULE_30__styles__["MuiThemeProvider"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_30__styles__, "withStyles")) __webpack_require__.d(__webpack_exports__, "withStyles", function() { return __WEBPACK_IMPORTED_MODULE_30__styles__["withStyles"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_30__styles__, "withTheme")) __webpack_require__.d(__webpack_exports__, "withTheme", function() { return __WEBPACK_IMPORTED_MODULE_30__styles__["withTheme"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_30__styles__, "createMuiTheme")) __webpack_require__.d(__webpack_exports__, "createMuiTheme", function() { return __WEBPACK_IMPORTED_MODULE_30__styles__["createMuiTheme"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__colors__ = __webpack_require__("wY2/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__colors__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return __WEBPACK_IMPORTED_MODULE_31__colors__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__SvgIcon__ = __webpack_require__("VJec");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__SvgIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__SvgIcon__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "SvgIcon", function() { return __WEBPACK_IMPORTED_MODULE_32__SvgIcon___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Switch__ = __webpack_require__("KUQt");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__Switch__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_33__Switch___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__Table__ = __webpack_require__("5vLB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34__Table__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return __WEBPACK_IMPORTED_MODULE_34__Table___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__Table__, "TableBody")) __webpack_require__.d(__webpack_exports__, "TableBody", function() { return __WEBPACK_IMPORTED_MODULE_34__Table__["TableBody"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__Table__, "TableCell")) __webpack_require__.d(__webpack_exports__, "TableCell", function() { return __WEBPACK_IMPORTED_MODULE_34__Table__["TableCell"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__Table__, "TableFooter")) __webpack_require__.d(__webpack_exports__, "TableFooter", function() { return __WEBPACK_IMPORTED_MODULE_34__Table__["TableFooter"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__Table__, "TableHead")) __webpack_require__.d(__webpack_exports__, "TableHead", function() { return __WEBPACK_IMPORTED_MODULE_34__Table__["TableHead"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__Table__, "TablePagination")) __webpack_require__.d(__webpack_exports__, "TablePagination", function() { return __WEBPACK_IMPORTED_MODULE_34__Table__["TablePagination"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__Table__, "TableRow")) __webpack_require__.d(__webpack_exports__, "TableRow", function() { return __WEBPACK_IMPORTED_MODULE_34__Table__["TableRow"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_34__Table__, "TableSortLabel")) __webpack_require__.d(__webpack_exports__, "TableSortLabel", function() { return __WEBPACK_IMPORTED_MODULE_34__Table__["TableSortLabel"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Tabs__ = __webpack_require__("ceAg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35__Tabs__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_35__Tabs___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_35__Tabs__, "Tab")) __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_35__Tabs__["Tab"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Typography__ = __webpack_require__("cebZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36__Typography__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return __WEBPACK_IMPORTED_MODULE_36__Typography___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__TextField__ = __webpack_require__("rtxM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37__TextField__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return __WEBPACK_IMPORTED_MODULE_37__TextField___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Toolbar__ = __webpack_require__("pXSj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38__Toolbar__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return __WEBPACK_IMPORTED_MODULE_38__Toolbar___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Tooltip__ = __webpack_require__("KNBb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39__Tooltip__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_39__Tooltip___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__transitions__ = __webpack_require__("aYnh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__transitions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40__transitions__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_40__transitions__, "Slide")) __webpack_require__.d(__webpack_exports__, "Slide", function() { return __WEBPACK_IMPORTED_MODULE_40__transitions__["Slide"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_40__transitions__, "Grow")) __webpack_require__.d(__webpack_exports__, "Grow", function() { return __WEBPACK_IMPORTED_MODULE_40__transitions__["Grow"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_40__transitions__, "Fade")) __webpack_require__.d(__webpack_exports__, "Fade", function() { return __WEBPACK_IMPORTED_MODULE_40__transitions__["Fade"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_40__transitions__, "Collapse")) __webpack_require__.d(__webpack_exports__, "Collapse", function() { return __WEBPACK_IMPORTED_MODULE_40__transitions__["Collapse"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__utils_withWidth__ = __webpack_require__("/U7w");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__utils_withWidth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41__utils_withWidth__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "withWidth", function() { return __WEBPACK_IMPORTED_MODULE_41__utils_withWidth___default.a; });
































// eslint-disable-next-line import/first

















/***/ }),

/***/ "Q6Mt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("Sfvb");

var _colorManipulator = __webpack_require__("YXVs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      // Workaround for a rendering bug with spanned columns in Chrome 62.0.
      // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
      borderBottom: '1px solid\n    ' + (theme.palette.type === 'light' ? (0, _colorManipulator.lighten)((0, _colorManipulator.fade)(theme.palette.text.lightDivider, 1), 0.925) : (0, _colorManipulator.darken)((0, _colorManipulator.fade)(theme.palette.text.lightDivider, 1), 0.685)),
      textAlign: 'left'
    },
    numeric: {
      textAlign: 'right',
      flexDirection: 'row-reverse' // can be dynamically inherited at runtime by contents
    },
    head: {
      fontWeight: theme.typography.fontWeightMedium,
      position: 'relative' // Workaround for Tooltip positioning issue.
    },
    paddingDefault: {
      padding: theme.spacing.unit / 2 + 'px ' + theme.spacing.unit * 7 + 'px ' + theme.spacing.unit / 2 + 'px ' + theme.spacing.unit * 3 + 'px',
      '&:last-child': {
        paddingRight: theme.spacing.unit * 3
      }
    },
    paddingDense: {
      paddingRight: theme.spacing.unit * 3
    },
    paddingCheckbox: {
      padding: '0 12px'
    },
    footer: {
      borderBottom: 0
    }
  };
};

function TableCell(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      component = props.component,
      sortDirection = props.sortDirection,
      numeric = props.numeric,
      padding = props.padding,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'component', 'sortDirection', 'numeric', 'padding']);
  var table = context.table;

  var Component = void 0;
  if (component) {
    Component = component;
  } else {
    Component = table && table.head ? 'th' : 'td';
  }

  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.numeric, numeric), (0, _defineProperty3.default)(_classNames, classes['padding' + (0, _helpers.capitalizeFirstLetter)(padding)], padding !== 'none' && padding !== 'default'), (0, _defineProperty3.default)(_classNames, classes.paddingDefault, padding !== 'none'), (0, _defineProperty3.default)(_classNames, classes.head, table && table.head), (0, _defineProperty3.default)(_classNames, classes.footer, table && table.footer), _classNames), classNameProp);

  var ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return _react2.default.createElement(
    Component,
    (0, _extends3.default)({ className: className, 'aria-sort': ariaSort }, other),
    children
  );
}

TableCell.propTypes =  false ? {
  /**
   * The table cell contents.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * If `true`, content will align to the right.
   */
  numeric: _propTypes2.default.bool,
  /**
   * Sets the padding applied to the cell.
   */
  padding: _propTypes2.default.oneOf(['default', 'checkbox', 'dense', 'none']),
  /**
   * Set aria-sort direction.
   */
  sortDirection: _propTypes2.default.oneOf(['asc', 'desc', false])
} : {};

TableCell.defaultProps = {
  numeric: false,
  padding: 'default'
};

TableCell.contextTypes = {
  table: _propTypes2.default.object.isRequired
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableCell' })(TableCell);

/***/ }),

/***/ "Q7NZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = exports.Popper = exports.Target = exports.Manager = undefined;

var _Manager2 = __webpack_require__("n1VI");

var _Manager3 = _interopRequireDefault(_Manager2);

var _Target2 = __webpack_require__("nVWB");

var _Target3 = _interopRequireDefault(_Target2);

var _Popper2 = __webpack_require__("GjM+");

var _Popper3 = _interopRequireDefault(_Popper2);

var _Arrow2 = __webpack_require__("0Z9u");

var _Arrow3 = _interopRequireDefault(_Arrow2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Manager = _Manager3.default;
exports.Target = _Target3.default;
exports.Popper = _Popper3.default;
exports.Arrow = _Arrow3.default;

/***/ }),

/***/ "RRHe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__("RH2O");
var React = __webpack_require__("GiK3");
var names_1 = __webpack_require__("jyHq");
var Typography_1 = __webpack_require__("cebZ");
var Grid_1 = __webpack_require__("lRCh");
var TextField_1 = __webpack_require__("rtxM");
var Button_1 = __webpack_require__("WdaU");
var mapStateToProperty = function (state) { return state.names; };
var _NameForm = /** @class */ (function (_super) {
    __extends(_NameForm, _super);
    function _NameForm(props, context) {
        var _this = _super.call(this, props, context) || this;
        var left = props.left, right = props.right;
        _this.state = { left: left, right: right };
        return _this;
    }
    _NameForm.prototype.changer = function (field) {
        var _this = this;
        return function (e) {
            var val = e.target.value;
            _this.setState((_a = {}, _a[field] = val, _a));
            var _a;
        };
    };
    _NameForm.prototype.submit = function (e) {
        e.preventDefault();
        this.props.setName(this.state.left, this.state.right);
        return false;
    };
    _NameForm.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("p", null, "Form goes here"),
            React.createElement("p", null,
                this.props.left,
                " VS ",
                this.props.right),
            React.createElement("form", { onSubmit: function (e) { return _this.submit(e); } },
                React.createElement("p", null,
                    React.createElement("input", { type: "text", value: this.state.left, onChange: this.changer('left') })),
                React.createElement("p", null,
                    React.createElement("input", { type: "text", value: this.state.right, onChange: this.changer('right') })),
                React.createElement("p", null,
                    React.createElement("input", { type: "submit", value: "Submit" })))));
    };
    return _NameForm;
}(React.Component));
exports._NameFormSC = function (props) {
    var left;
    var right;
    var onSubmit = function (e) {
        e.preventDefault();
        if (left.value && right.value) {
            props.setName(left.value, right.value);
        }
    };
    return (React.createElement("div", null,
        React.createElement(Typography_1.default, { type: "subheading", gutterBottom: true },
            props.left,
            " VS ",
            props.right),
        React.createElement("form", { onSubmit: onSubmit },
            React.createElement(Grid_1.default, { container: true, justify: "center" },
                React.createElement(Grid_1.default, { item: true, xs: 6, sm: 4, lg: 3 },
                    React.createElement(TextField_1.default, { fullWidth: true, inputRef: function (i) { return left = i; }, defaultValue: props.left, label: "Left User" })),
                React.createElement(Grid_1.default, { item: true, xs: 6, sm: 4, lg: 3 },
                    React.createElement(TextField_1.default, { fullWidth: true, inputRef: function (i) { return right = i; }, defaultValue: props.right, label: "Right User" })),
                React.createElement(Grid_1.default, { item: true, xs: 12 },
                    React.createElement(Typography_1.default, { align: "center" },
                        React.createElement(Button_1.default, { type: "submit", raised: true, color: "primary" }, "Submit")))))));
};
exports.NameForm = react_redux_1.connect(mapStateToProperty, { setName: names_1.setName })(exports._NameFormSC);


/***/ }),

/***/ "S4fw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' });

var CheckBox = function CheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
CheckBox = (0, _pure2.default)(CheckBox);
CheckBox.muiName = 'SvgIcon';

exports.default = CheckBox;

/***/ }),

/***/ "SIiw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' });

var CheckBoxOutlineBlank = function CheckBoxOutlineBlank(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
CheckBoxOutlineBlank = (0, _pure2.default)(CheckBoxOutlineBlank);
CheckBoxOutlineBlank.muiName = 'SvgIcon';

exports.default = CheckBoxOutlineBlank;

/***/ }),

/***/ "SjfM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Radio = __webpack_require__("/aIv");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Radio).default;
  }
});

var _RadioGroup = __webpack_require__("4NQe");

Object.defineProperty(exports, 'RadioGroup', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RadioGroup).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "TfKr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__("Dd8w");

var _extends4 = _interopRequireDefault(_extends3);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("VopY");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _helpers = __webpack_require__("Sfvb");

var _Icon = __webpack_require__("nGxd");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: (0, _extends4.default)({}, theme.typography.button, (0, _defineProperty3.default)({
      maxWidth: 264,
      position: 'relative',
      minWidth: 72,
      padding: 0,
      height: 48,
      flex: 'none',
      overflow: 'hidden'
    }, theme.breakpoints.up('md'), {
      minWidth: 160
    })),
    rootLabelIcon: {
      height: 72
    },
    rootAccent: {
      color: theme.palette.text.secondary
    },
    rootAccentSelected: {
      color: theme.palette.secondary.A200
    },
    rootAccentDisabled: {
      color: theme.palette.text.disabled
    },
    rootPrimary: {
      color: theme.palette.text.secondary
    },
    rootPrimarySelected: {
      color: theme.palette.primary[500]
    },
    rootPrimaryDisabled: {
      color: theme.palette.text.disabled
    },
    rootInherit: {
      color: 'inherit',
      opacity: 0.7
    },
    rootInheritSelected: {
      opacity: 1
    },
    rootInheritDisabled: {
      opacity: 0.4
    },
    fullWidth: {
      flexGrow: 1
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },
    labelContainer: (0, _defineProperty3.default)({
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12
    }, theme.breakpoints.up('md'), {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    }),
    label: (0, _defineProperty3.default)({
      fontSize: theme.typography.pxToRem(theme.typography.fontSize),
      whiteSpace: 'normal'
    }, theme.breakpoints.up('md'), {
      fontSize: theme.typography.pxToRem(theme.typography.fontSize - 1)
    }),
    labelWrapped: (0, _defineProperty3.default)({}, theme.breakpoints.down('md'), {
      fontSize: theme.typography.pxToRem(theme.typography.fontSize - 2)
    })
  };
}; // @inheritedComponent ButtonBase

var Tab = function (_React$Component) {
  (0, _inherits3.default)(Tab, _React$Component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      wrappedText: false
    }, _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onClick = _this$props.onClick;


      if (onChange) {
        onChange(event, value);
      }

      if (onClick) {
        onClick(event);
      }
    }, _this.label = undefined, _this.checkTextWrap = function () {
      if (_this.label) {
        var wrappedText = _this.label.getClientRects().length > 1;
        if (_this.state.wrappedText !== wrappedText) {
          _this.setState({ wrappedText: wrappedText });
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tab, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkTextWrap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.wrappedText === prevState.wrappedText) {
        /**
         * At certain text and tab lengths, a larger font size may wrap to two lines while the smaller
         * font size still only requires one line.  This check will prevent an infinite render loop
         * fron occurring in that scenario.
         */
        this.checkTextWrap();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          iconProp = _props.icon,
          indicator = _props.indicator,
          labelProp = _props.label,
          onChange = _props.onChange,
          selected = _props.selected,
          styleProp = _props.style,
          textColor = _props.textColor,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'disabled', 'fullWidth', 'icon', 'indicator', 'label', 'onChange', 'selected', 'style', 'textColor', 'value']);


      var icon = void 0;

      if (iconProp !== undefined) {
        icon = _react2.default.isValidElement(iconProp) ? iconProp : _react2.default.createElement(
          _Icon2.default,
          null,
          iconProp
        );
      }

      var label = void 0;

      if (labelProp !== undefined) {
        label = _react2.default.createElement(
          'div',
          { className: classes.labelContainer },
          _react2.default.createElement(
            'span',
            {
              className: (0, _classnames2.default)(classes.label, (0, _defineProperty3.default)({}, classes.labelWrapped, this.state.wrappedText)),
              ref: function ref(node) {
                _this2.label = node;
              }
            },
            labelProp
          )
        );
      }

      var className = (0, _classnames2.default)(classes.root, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes['root' + (0, _helpers.capitalizeFirstLetter)(textColor)], true), (0, _defineProperty3.default)(_classNames2, classes['root' + (0, _helpers.capitalizeFirstLetter)(textColor) + 'Disabled'], disabled), (0, _defineProperty3.default)(_classNames2, classes['root' + (0, _helpers.capitalizeFirstLetter)(textColor) + 'Selected'], selected), (0, _defineProperty3.default)(_classNames2, classes.rootLabelIcon, icon && label), (0, _defineProperty3.default)(_classNames2, classes.fullWidth, fullWidth), _classNames2), classNameProp);

      var style = {};

      if (textColor !== 'accent' && textColor !== 'inherit') {
        style.color = textColor;
      }

      style = (0, _keys2.default)(style).length > 0 ? (0, _extends4.default)({}, style, styleProp) : styleProp;

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends4.default)({
          focusRipple: true,
          className: className,
          style: style,
          role: 'tab',
          'aria-selected': selected,
          disabled: disabled
        }, other, {
          onClick: this.handleChange
        }),
        _react2.default.createElement(
          'span',
          { className: classes.wrapper },
          icon,
          label
        ),
        indicator
      );
    }
  }]);
  return Tab;
}(_react2.default.Component);

Tab.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the tab will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @ignore
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The icon element. If a string is provided, it will be used as a font ligature.
   */
  icon: _propTypes2.default.node,
  /**
   * @ignore
   * For server side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: _propTypes2.default.node,
  /**
   * The label element.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   */
  selected: _propTypes2.default.bool,
  /**
   * @ignore
   */
  style: _propTypes2.default.object,
  /**
   * @ignore
   */
  textColor: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf(['accent', 'primary', 'inherit'])]),
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: _propTypes2.default.any
} : {};

Tab.defaultProps = {
  disabled: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTab' })(Tab);

/***/ }),

/***/ "Thdd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactHelpers = __webpack_require__("ZY1E");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    height: 52,
    display: 'flex',
    alignItems: 'center',
    padding: '2px 4px'
  },
  action: {
    margin: '0 4px'
  }
};

function CardActions(props) {
  var disableActionSpacing = props.disableActionSpacing,
      children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['disableActionSpacing', 'children', 'classes', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    disableActionSpacing ? children : (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.action)
  );
}

CardActions.propTypes =  false ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the card actions do not have additional margin.
   */
  disableActionSpacing: _propTypes2.default.bool
} : {};

CardActions.defaultProps = {
  disableActionSpacing: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardActions' })(CardActions);

/***/ }),

/***/ "Tkn0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' });

var RadioButtonChecked = function RadioButtonChecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
RadioButtonChecked = (0, _pure2.default)(RadioButtonChecked);
RadioButtonChecked.muiName = 'SvgIcon';

exports.default = RadioButtonChecked;

/***/ }),

/***/ "UNto":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _reactHelpers = __webpack_require__("ZY1E");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: theme.spacing.unit * 2 + 'px ' + theme.spacing.unit + 'px'
    },
    action: {
      marginLeft: theme.spacing.unit
    }
  };
};

function ExpansionPanelActions(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    (0, _reactHelpers.cloneChildrenWithClassName)(children, classes.action)
  );
}

ExpansionPanelActions.propTypes =  false ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanelActions' })(ExpansionPanelActions);

/***/ }),

/***/ "V4bX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853',
  contrastDefaultColor: 'dark'
};

exports.default = green;

/***/ }),

/***/ "VKi+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("GiK3");
var utils_1 = __webpack_require__("blYj");
var WelcomeContent = __webpack_require__("Gqvp").default;
var RulesContent = __webpack_require__("vqiW");
exports.Hello = function (props) { return (React.createElement("div", null,
    React.createElement(WelcomeContent, null),
    React.createElement("hr", null),
    React.createElement(utils_1.Bundle, { showLoader: true, load: RulesContent }, function (Rules) { return ((Rules)
        ?
            React.createElement(Rules, null)
        :
            React.createElement("span", null, "loading...")); }))); };


/***/ }),

/***/ "VMvG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIconCustom = global.__MUI_SvgIcon__ || _SvgIcon2.default;

var _ref = _react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' });

var Home = function Home(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

Home = (0, _pure2.default)(Home);
Home.muiName = 'SvgIcon';

exports.default = Home;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "Vvdx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Menu = __webpack_require__("lFHO");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Menu).default;
  }
});

var _MenuList = __webpack_require__("BtXX");

Object.defineProperty(exports, 'MenuList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MenuList).default;
  }
});

var _MenuItem = __webpack_require__("8UB2");

Object.defineProperty(exports, 'MenuItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MenuItem).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "W3d+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Paper = __webpack_require__("Su6/");

var _Paper2 = _interopRequireDefault(_Paper);

var _StepConnector = __webpack_require__("DOCz");

var _StepConnector2 = _interopRequireDefault(_StepConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent Paper

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      padding: theme.spacing.unit * 3
    },
    horizontal: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    vertical: {
      flexDirection: 'column'
    }
  };
};

function Stepper(props) {
  var activeStep = props.activeStep,
      alternativeLabel = props.alternativeLabel,
      classes = props.classes,
      classNameProp = props.className,
      children = props.children,
      connectorProp = props.connector,
      nonLinear = props.nonLinear,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['activeStep', 'alternativeLabel', 'classes', 'className', 'children', 'connector', 'nonLinear', 'orientation']);


  var className = (0, _classnames2.default)(classes.root, classNameProp, alternativeLabel ? null : classes[orientation]);

  var connector = connectorProp ? _react2.default.cloneElement(connectorProp, { orientation: orientation }) : null;
  var childrenArray = _react2.default.Children.toArray(children);
  var steps = childrenArray.map(function (step, index) {
    var controlProps = {
      index: index,
      orientation: orientation,
      active: false,
      completed: false,
      disabled: false,
      last: index + 1 === childrenArray.length,
      alternativeLabel: alternativeLabel,
      connector: connectorProp
    };

    if (activeStep === index) {
      controlProps.active = true;
    } else if (!nonLinear && activeStep > index) {
      controlProps.completed = true;
    } else if (!nonLinear && activeStep < index) {
      controlProps.disabled = true;
    }

    return [!alternativeLabel && connector && index > 0 && _react2.default.cloneElement(connector, {
      key: 'connect-' + (index - 1) + '-to-' + index // eslint-disable-line react/no-array-index-key
    }), _react2.default.cloneElement(step, (0, _extends3.default)({}, controlProps, step.props))];
  });

  return _react2.default.createElement(
    _Paper2.default,
    (0, _extends3.default)({ square: true, elevation: 0, className: className }, other),
    steps
  );
}

Stepper.propTypes =  false ? {
  /**
   * Set the active step (zero based index).
   */
  activeStep: _propTypes2.default.number,
  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Two or more `<Step />` components.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * A component to be placed between each step.
   */
  connector: _propTypes2.default.element,
  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: _propTypes2.default.bool,
  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

Stepper.defaultProps = {
  activeStep: 0,
  alternativeLabel: false,
  connector: _react2.default.createElement(_StepConnector2.default, null),
  nonLinear: false,
  orientation: 'horizontal'
};

Stepper.muiName = 'Stepper';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepper' })(Stepper);

/***/ }),

/***/ "WP1D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = __webpack_require__("2KeS");
var names_1 = __webpack_require__("rdTg");
var scores_1 = __webpack_require__("mr5k");
var starter_1 = __webpack_require__("hs1l");
exports.rootReducer = redux_1.combineReducers({
    names: names_1.nameReducer,
    score: scores_1.scoreReducer,
    starter: starter_1.starterReducer
});


/***/ }),

/***/ "WiM9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MuiThemeProvider = __webpack_require__("7L6O");

Object.defineProperty(exports, 'MuiThemeProvider', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MuiThemeProvider).default;
  }
});

var _withStyles = __webpack_require__("3rUI");

Object.defineProperty(exports, 'withStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withStyles).default;
  }
});

var _withTheme = __webpack_require__("Jf5W");

Object.defineProperty(exports, 'withTheme', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withTheme).default;
  }
});

var _createMuiTheme = __webpack_require__("Sedw");

Object.defineProperty(exports, 'createMuiTheme', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createMuiTheme).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "Wpbd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "XLvd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__ = __webpack_require__("onEH");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_MemoryRouter__["a" /* default */]);

/***/ }),

/***/ "XTqB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollbarSize = __webpack_require__("0d2P");

var _ScrollbarSize2 = _interopRequireDefault(_ScrollbarSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ScrollbarSize2.default;

/***/ }),

/***/ "XY7D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {},
    horizontal: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      '&:first-child': {
        paddingLeft: 0
      },
      '&:last-child': {
        paddingRight: 0
      }
    },
    alternativeLabel: {
      flex: 1,
      position: 'relative',
      marginLeft: 0
    }
  };
};

function Step(props) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      connector = props.connector,
      disabled = props.disabled,
      index = props.index,
      last = props.last,
      orientation = props.orientation,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'connector', 'disabled', 'index', 'last', 'orientation']);


  var className = (0, _classnames2.default)(classes.root, classes[orientation], (0, _defineProperty3.default)({}, classes.alternativeLabel, alternativeLabel), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    _react2.default.Children.map(children, function (child) {
      return _react2.default.cloneElement(child, (0, _extends3.default)({
        active: active,
        alternativeLabel: alternativeLabel,
        completed: completed,
        disabled: disabled,
        icon: index + 1,
        last: last,
        orientation: orientation
      }, child.props));
    }),
    connector && alternativeLabel && !last && _react2.default.cloneElement(connector, { orientation: orientation, alternativeLabel: alternativeLabel })
  );
}

Step.propTypes =  false ? {
  /**
   * Sets the step as active. Is passed to child components.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   * Passed down from Stepper if alternativeLabel is also set.
   */
  connector: _propTypes2.default.element,
  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: _propTypes2.default.bool,
  /**
   * @ignore
   * Used internally for numbering.
   */
  index: _propTypes2.default.number,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical'])
} : {};

Step.defaultProps = {
  active: false,
  completed: false,
  disabled: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStep' })(Step);

/***/ }),

/***/ "Xshb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SwitchBase = __webpack_require__("a8jb");

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

var _IndeterminateCheckBox = __webpack_require__("guZ3");

var _IndeterminateCheckBox2 = _interopRequireDefault(_IndeterminateCheckBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    default: {
      color: theme.palette.text.secondary
    },
    checked: {
      color: theme.palette.primary[500]
    },
    disabled: {
      color: theme.palette.action.disabled
    }
  };
};

function Checkbox(props) {
  var checkedIcon = props.checkedIcon,
      icon = props.icon,
      indeterminate = props.indeterminate,
      indeterminateIcon = props.indeterminateIcon,
      other = (0, _objectWithoutProperties3.default)(props, ['checkedIcon', 'icon', 'indeterminate', 'indeterminateIcon']);


  return _react2.default.createElement(_SwitchBase2.default, (0, _extends3.default)({
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    icon: indeterminate ? indeterminateIcon : icon
  }, other));
}

Checkbox.propTypes =  false ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   * If a string is provided, it will be used as a font ligature.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   * If a string is provided, it will be used as a font ligature.
   */
  icon: _propTypes2.default.node,
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes2.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   * If a string is provided, it will be used as a font ligature.
   */
  indeterminateIcon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  inputType: _propTypes2.default.string,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

Checkbox.defaultProps = {
  indeterminate: false,
  indeterminateIcon: _react2.default.createElement(_IndeterminateCheckBox2.default, null)
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCheckbox' })(Checkbox);

/***/ }),

/***/ "Xv21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      flexGrow: 1,
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 3 + 'px'
    }
  };
};

function ExpansionPanelDetails(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'children', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

ExpansionPanelDetails.propTypes =  false ? {
  /**
   * The content of the expansion panel details.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiExpansionPanelDetails' })(ExpansionPanelDetails);

/***/ }),

/***/ "YtsB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("Sfvb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'absolute',
      height: 2,
      bottom: 0,
      width: '100%',
      transition: theme.transitions.create(),
      willChange: 'left, width'
    },
    colorAccent: {
      backgroundColor: theme.palette.secondary.A200
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary[500]
    }
  };
};

/**
 * @ignore - internal component.
 */
function TabIndicator(props) {
  var classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      styleProp = props.style;

  var colorPredefined = ['primary', 'accent'].indexOf(color) !== -1;
  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], colorPredefined), classNameProp);

  var style = colorPredefined ? styleProp : (0, _extends3.default)({}, styleProp, {
    backgroundColor: color
  });

  return _react2.default.createElement('div', { className: className, style: style });
}

TabIndicator.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   * The color of the tab indicator.
   */
  color: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.oneOf(['accent', 'primary'])]),
  /**
   * @ignore
   * The style of the root element.
   */
  style: _propTypes2.default.object
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTabIndicator' })(TabIndicator);

/***/ }),

/***/ "ZToG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Select = __webpack_require__("Y95k");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Select).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "Zgw8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE10$1() && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("DuR2")))

/***/ }),

/***/ "a8jb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _IconButton = __webpack_require__("nz+8");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _CheckBoxOutlineBlank = __webpack_require__("SIiw");

var _CheckBoxOutlineBlank2 = _interopRequireDefault(_CheckBoxOutlineBlank);

var _CheckBox = __webpack_require__("S4fw");

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Icon = __webpack_require__("nGxd");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'none'
  },
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0
  },
  default: {},
  checked: {},
  disabled: {}
};

/**
 * @ignore - internal component.
 */

var SwitchBase = function (_React$Component) {
  (0, _inherits3.default)(SwitchBase, _React$Component);

  function SwitchBase() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SwitchBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SwitchBase.__proto__ || (0, _getPrototypeOf2.default)(SwitchBase)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.input = null, _this.button = null, _this.isControlled = null, _this.handleInputChange = function (event) {
      var checked = event.target.checked;

      if (!_this.isControlled) {
        _this.setState({ checked: checked });
      }

      if (_this.props.onChange) {
        _this.props.onChange(event, checked);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SwitchBase, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var props = this.props;


      this.isControlled = props.checked !== undefined;

      if (!this.isControlled) {
        // not controlled, use internal state
        this.setState({
          checked: props.defaultChecked !== undefined ? props.defaultChecked : false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props,
          checkedProp = _props.checked,
          classes = _props.classes,
          classNameProp = _props.className,
          checkedIcon = _props.checkedIcon,
          disabledProp = _props.disabled,
          iconProp = _props.icon,
          inputProps = _props.inputProps,
          inputRef = _props.inputRef,
          inputType = _props.inputType,
          name = _props.name,
          onChange = _props.onChange,
          tabIndex = _props.tabIndex,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['checked', 'classes', 'className', 'checkedIcon', 'disabled', 'icon', 'inputProps', 'inputRef', 'inputType', 'name', 'onChange', 'tabIndex', 'value']);
      var muiFormControl = this.context.muiFormControl;

      var disabled = disabledProp;

      if (muiFormControl) {
        if (typeof disabled === 'undefined') {
          disabled = muiFormControl.disabled;
        }
      }

      var checked = this.isControlled ? checkedProp : this.state.checked;
      var className = (0, _classnames2.default)(classes.root, classes.default, classNameProp, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.checked, checked), (0, _defineProperty3.default)(_classNames, classes.disabled, disabled), _classNames));

      var icon = checked ? checkedIcon : iconProp;

      if (typeof icon === 'string') {
        icon = _react2.default.createElement(
          _Icon2.default,
          null,
          icon
        );
      }

      return _react2.default.createElement(
        _IconButton2.default,
        (0, _extends3.default)({
          component: 'span',
          className: className,
          disabled: disabled,
          tabIndex: null,
          role: undefined,
          rootRef: function rootRef(node) {
            _this2.button = node;
          }
        }, other),
        icon,
        _react2.default.createElement('input', (0, _extends3.default)({
          type: inputType,
          name: name,
          checked: this.isControlled ? checkedProp : undefined,
          onChange: this.handleInputChange,
          className: classes.input,
          disabled: disabled,
          tabIndex: tabIndex,
          value: value
        }, inputProps, {
          ref: function ref(node) {
            _this2.input = node;
            if (inputRef) {
              inputRef(node);
            }
          }
        }))
      );
    }
  }]);
  return SwitchBase;
}(_react2.default.Component);

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.


SwitchBase.propTypes =  false ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   * If a string is provided, it will be used as a font ligature.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   * If a string is provided, it will be used as a font ligature.
   */
  icon: _propTypes2.default.node,
  /**
   * If `true`, the component appears indeterminate.
   */
  indeterminate: _propTypes2.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   * If a string is provided, it will be used as a font ligature.
   */
  indeterminateIcon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  inputType: _propTypes2.default.string,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

SwitchBase.defaultProps = {
  checkedIcon: _react2.default.createElement(_CheckBox2.default, null),
  disableRipple: false,
  icon: _react2.default.createElement(_CheckBoxOutlineBlank2.default, null),
  inputType: 'checkbox'
};

SwitchBase.contextTypes = {
  muiFormControl: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSwitchBase' })(SwitchBase);

/***/ }),

/***/ "aYnh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Slide = __webpack_require__("iJ6+");

Object.defineProperty(exports, 'Slide', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slide).default;
  }
});

var _Grow = __webpack_require__("sY1Q");

Object.defineProperty(exports, 'Grow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Grow).default;
  }
});

var _Fade = __webpack_require__("TjCR");

Object.defineProperty(exports, 'Fade', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Fade).default;
  }
});

var _Collapse = __webpack_require__("HJTf");

Object.defineProperty(exports, 'Collapse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Collapse).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "aeWn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' });

var KeyboardArrowLeft = function KeyboardArrowLeft(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
KeyboardArrowLeft = (0, _pure2.default)(KeyboardArrowLeft);
KeyboardArrowLeft.muiName = 'SvgIcon';

exports.default = KeyboardArrowLeft;

/***/ }),

/***/ "awF4":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "b631":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var deepPurple = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea',
  contrastDefaultColor: 'light'
};

exports.default = deepPurple;

/***/ }),

/***/ "bRnz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIconCustom = global.__MUI_SvgIcon__ || _SvgIcon2.default;

var _ref = _react2.default.createElement('path', { d: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' });

var People = function People(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

People = (0, _pure2.default)(People);
People.muiName = 'SvgIcon';

exports.default = People;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "bXVx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__("Een0");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Switch> outside a <Router>');
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
      if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          sensitive = _element$props.sensitive,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),

/***/ "blYj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("GiK3");
var Bundle = /** @class */ (function (_super) {
    __extends(Bundle, _super);
    function Bundle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // short for "module" but that's a keyword in js, so "mod"
            mod: null
        };
        return _this;
    }
    Bundle.prototype.componentWillMount = function () {
        this.load(this.props);
    };
    Bundle.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    };
    Bundle.prototype.load = function (props) {
        var _this = this;
        this.setState({
            mod: null
        });
        props.load(function (mod) {
            _this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            });
        });
    };
    Bundle.prototype.render = function () {
        if (this.props.showLoader) {
            return this.props.children(this.state.mod);
        }
        return this.state.mod ? this.props.children(this.state.mod) : null;
    };
    return Bundle;
}(React.Component));
exports.Bundle = Bundle;
exports.default = Bundle;


/***/ }),

/***/ "bndy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),

/***/ "c61G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("O27J");

var _reactEventListener = __webpack_require__("ppkW");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _debounce = __webpack_require__("O4Lo");

var _debounce2 = _interopRequireDefault(_debounce);

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPopper = __webpack_require__("Q7NZ");

var _helpers = __webpack_require__("Sfvb");

var _common = __webpack_require__("q5MA");

var _common2 = _interopRequireDefault(_common);

var _grey = __webpack_require__("RZKI");

var _grey2 = _interopRequireDefault(_grey);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use a class component so we can get a reference.
/* eslint-disable react/no-multi-comp, no-underscore-dangle */

var TargetChildren = function (_React$Component) {
  (0, _inherits3.default)(TargetChildren, _React$Component);

  function TargetChildren() {
    (0, _classCallCheck3.default)(this, TargetChildren);
    return (0, _possibleConstructorReturn3.default)(this, (TargetChildren.__proto__ || (0, _getPrototypeOf2.default)(TargetChildren)).apply(this, arguments));
  }

  (0, _createClass3.default)(TargetChildren, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return TargetChildren;
}(_react2.default.Component);

TargetChildren.propTypes =  false ? {
  children: _propTypes2.default.node.isRequired
} : {};

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline',
      flexDirection: 'inherit' // Makes the wrapper more transparent.
    },
    popper: {
      zIndex: theme.zIndex.tooltip
    },
    popperClose: {
      pointerEvents: 'none'
    },
    tooltip: (0, _defineProperty3.default)({
      background: _grey2.default[700],
      borderRadius: 2,
      color: _common2.default.fullWhite,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(14),
      minHeight: theme.spacing.unit * 4,
      lineHeight: '32px',
      opacity: 0,
      padding: '0 ' + theme.spacing.unit + 'px',
      transform: 'scale(0)',
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shortest
      })
    }, theme.breakpoints.up('sm'), {
      minHeight: 22,
      lineHeight: '22px',
      padding: '0 ' + theme.spacing.unit + 'px',
      fontSize: theme.typography.pxToRem(10)
    }),
    tooltipLeft: (0, _defineProperty3.default)({
      transformOrigin: 'right center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipRight: (0, _defineProperty3.default)({
      transformOrigin: 'left center',
      margin: '0 ' + theme.spacing.unit * 3 + 'px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipTop: (0, _defineProperty3.default)({
      transformOrigin: 'center bottom',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipBottom: (0, _defineProperty3.default)({
      transformOrigin: 'center top',
      margin: theme.spacing.unit * 3 + 'px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipOpen: {
      opacity: 0.9,
      transform: 'scale(1)'
    }
  };
};

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}

var Tooltip = function (_React$Component2) {
  (0, _inherits3.default)(Tooltip, _React$Component2);

  function Tooltip() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {}, _this2.enterTimer = null, _this2.leaveTimer = null, _this2.touchTimer = null, _this2.isControlled = null, _this2.popper = null, _this2.children = null, _this2.ignoreNonTouchEvents = false, _this2.handleResize = (0, _debounce2.default)(function () {
      if (_this2.popper) {
        _this2.popper._popper.scheduleUpdate();
      }
    }, 166), _this2.handleRequestOpen = function (event) {
      var children = _this2.props.children;

      if (typeof children !== 'string') {
        var childrenProps = _react2.default.Children.only(children).props;

        if (event.type === 'focus' && childrenProps.onFocus) {
          childrenProps.onFocus(event);
        }

        if (event.type === 'mouseover' && childrenProps.onMouseOver) {
          childrenProps.onMouseOver(event);
        }
      }

      if (_this2.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(_this2.leaveTimer);
      if (_this2.props.enterDelay > 0) {
        _this2.leaveTimer = setTimeout(function () {
          _this2.requestOpen(event);
        }, _this2.props.enterDelay);
      } else {
        _this2.requestOpen(event);
      }
    }, _this2.requestOpen = function (event) {
      if (!_this2.isControlled) {
        _this2.setState({ open: true });
      }

      if (_this2.props.onOpen) {
        _this2.props.onOpen(event, true);
      }
    }, _this2.handleClose = function (event) {
      var children = _this2.props.children;

      if (typeof children !== 'string') {
        var childrenProps = _react2.default.Children.only(children).props;

        if (event.type === 'blur' && childrenProps.onBlur) {
          childrenProps.onBlur(event);
        }

        if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
          childrenProps.onMouseLeave(event);
        }
      }

      clearTimeout(_this2.leaveTimer);
      if (_this2.props.leaveDelay) {
        _this2.leaveTimer = setTimeout(function () {
          _this2.requestClose(event);
        }, _this2.props.leaveDelay);
      } else {
        _this2.requestClose(event);
      }
    }, _this2.requestClose = function (event) {
      _this2.ignoreNonTouchEvents = false;

      if (!_this2.isControlled) {
        _this2.setState({ open: false });
      }

      if (_this2.props.onClose) {
        _this2.props.onClose(event, false);
      }
    }, _this2.handleTouchStart = function (event) {
      _this2.ignoreNonTouchEvents = true;
      var children = _this2.props.children;

      if (typeof children !== 'string') {
        var childrenProps = _react2.default.Children.only(children).props;

        if (childrenProps.onTouchStart) {
          childrenProps.onTouchStart(event);
        }
      }

      clearTimeout(_this2.touchTimer);
      event.persist();
      _this2.touchTimer = setTimeout(function () {
        _this2.handleRequestOpen(event);
      }, 1e3);
    }, _this2.handleTouchEnd = function (event) {
      var children = _this2.props.children;

      if (typeof children !== 'string') {
        var childrenProps = _react2.default.Children.only(children).props;

        if (childrenProps.onTouchEnd) {
          childrenProps.onTouchEnd(event);
        }
      }

      clearTimeout(_this2.touchTimer);
      clearTimeout(_this2.leaveTimer);
      event.persist();
      _this2.leaveTimer = setTimeout(function () {
        _this2.requestClose(event);
      }, 1500 + _this2.props.leaveDelay);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(Tooltip, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var props = this.props;


      this.isControlled = props.open !== undefined;

      if (!this.isControlled) {
        // not controlled, use internal state
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
       false ? (0, _warning2.default)(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled button children to the Tooltip component.', 'A disabled element do not fire events.', 'But the Tooltip needs to listen to the children element events to display the title.', '', 'Place a `div` over top of the element.'].join('\n')) : void 0;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      this.handleResize.cancel();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          childrenProp = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableTriggerFocus = _props.disableTriggerFocus,
          disableTriggerHover = _props.disableTriggerHover,
          disableTriggerTouch = _props.disableTriggerTouch,
          enterDelay = _props.enterDelay,
          id = _props.id,
          leaveDelay = _props.leaveDelay,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openProp = _props.open,
          rawPlacement = _props.placement,
          _props$PopperProps = _props.PopperProps;
      _props$PopperProps = _props$PopperProps === undefined ? {} : _props$PopperProps;
      var PopperClassName = _props$PopperProps.PopperClassName,
          PopperOther = (0, _objectWithoutProperties3.default)(_props$PopperProps, ['PopperClassName']),
          theme = _props.theme,
          title = _props.title,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'disableTriggerFocus', 'disableTriggerHover', 'disableTriggerTouch', 'enterDelay', 'id', 'leaveDelay', 'onClose', 'onOpen', 'open', 'placement', 'PopperProps', 'theme', 'title']);


      var themeDirection = theme && theme.direction;
      var placement = themeDirection === 'rtl' ? flipPlacement(rawPlacement) : rawPlacement;
      var open = this.isControlled ? openProp : this.state.open;
      var childrenProps = {};

      childrenProps['aria-describedby'] = id;

      if (!disableTriggerTouch) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableTriggerHover) {
        childrenProps.onMouseOver = this.handleRequestOpen;
        childrenProps.onMouseLeave = this.handleClose;
      }

      if (!disableTriggerFocus) {
        childrenProps.onFocus = this.handleRequestOpen;
        childrenProps.onBlur = this.handleClose;
      }

      if (typeof childrenProp !== 'string' && childrenProp.props) {
         false ? (0, _warning2.default)(!childrenProp.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', 'Remove this title property `' + childrenProp.props.title + '` or the Tooltip component.'].join('\n')) : void 0;
      }

      return _react2.default.createElement(
        _reactEventListener2.default,
        { target: 'window', onResize: this.handleResize },
        _react2.default.createElement(
          _reactPopper.Manager,
          (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
          _react2.default.createElement(
            _reactPopper.Target,
            null,
            function (_ref2) {
              var targetProps = _ref2.targetProps;
              return _react2.default.createElement(
                TargetChildren,
                {
                  ref: function ref(node) {
                    _this3.children = (0, _reactDom.findDOMNode)(node);
                    targetProps.ref(_this3.children);
                  }
                },
                typeof childrenProp !== 'string' ? _react2.default.cloneElement(childrenProp, childrenProps) : childrenProp
              );
            }
          ),
          _react2.default.createElement(
            _reactPopper.Popper,
            (0, _extends3.default)({
              placement: placement,
              eventsEnabled: open,
              className: (0, _classnames2.default)(classes.popper, (0, _defineProperty3.default)({}, classes.popperClose, !open), PopperClassName)
            }, PopperOther, {
              ref: function ref(node) {
                _this3.popper = node;
              }
            }),
            function (_ref3) {
              var popperProps = _ref3.popperProps,
                  restProps = _ref3.restProps;
              return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, popperProps, restProps, {
                  style: (0, _extends3.default)({}, popperProps.style, {
                    left: popperProps.style.left || 0
                  }, restProps.style)
                }),
                _react2.default.createElement(
                  'div',
                  {
                    id: id,
                    role: 'tooltip',
                    'aria-hidden': !open,
                    className: (0, _classnames2.default)(classes.tooltip, (0, _defineProperty3.default)({}, classes.tooltipOpen, open), classes['tooltip' + (0, _helpers.capitalizeFirstLetter)(placement.split('-')[0])])
                  },
                  title
                )
              );
            }
          )
        )
      );
    }
  }]);
  return Tooltip;
}(_react2.default.Component);

Tooltip.propTypes =  false ? {
  /**
   * Tooltip reference node.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Do not respond to focus events.
   */
  disableTriggerFocus: _propTypes2.default.bool,
  /**
   * Do not respond to hover events.
   */
  disableTriggerHover: _propTypes2.default.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTriggerTouch: _propTypes2.default.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   */
  enterDelay: _propTypes2.default.number,
  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: _propTypes2.default.string,
  /**
   * The number of milliseconds to wait before hidding the tooltip.
   */
  leaveDelay: _propTypes2.default.number,
  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes2.default.func,
  /**
   * If `true`, the tooltip is shown.
   */
  open: _propTypes2.default.bool,
  /**
   * Tooltip placement
   */
  placement: _propTypes2.default.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: _propTypes2.default.object,
  /**
   * @ignore
   */
  theme: _propTypes2.default.object.isRequired,
  /**
   * Tooltip title.
   */
  title: _propTypes2.default.node.isRequired
} : {};

Tooltip.defaultProps = {
  disableTriggerFocus: false,
  disableTriggerHover: false,
  disableTriggerTouch: false,
  enterDelay: 0,
  leaveDelay: 0,
  placement: 'bottom'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTooltip', withTheme: true })(Tooltip);

/***/ }),

/***/ "ceAg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tabs = __webpack_require__("+dzM");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tabs).default;
  }
});

var _Tab = __webpack_require__("TfKr");

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tab).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "ciQf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__("crWv");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__("xIPz");

var _PathUtils = __webpack_require__("Izpu");

var _createTransitionManager = __webpack_require__("tqq1");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__("zFGm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ "d4eG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createReducer(initialState, reducerMap) {
    return function (state, action) {
        if (state === void 0) { state = initialState; }
        var reducer = reducerMap[action.type];
        return reducer
            ? reducer(state, action)
            : state;
    };
}
exports.createReducer = createReducer;


/***/ }),

/***/ "dCLN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__ = __webpack_require__("twkG");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_Router__["a" /* default */]);

/***/ }),

/***/ "fsXy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SwitchBase = __webpack_require__("a8jb");

var _SwitchBase2 = _interopRequireDefault(_SwitchBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative',
      flexShrink: 0
    },
    bar: {
      borderRadius: 7,
      display: 'block',
      position: 'absolute',
      width: 34,
      height: 14,
      top: '50%',
      marginTop: -7,
      left: '50%',
      marginLeft: -17,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? '#000' : '#fff',
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    },
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },
    // For SwitchBase
    default: {
      zIndex: 1,
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    checked: {
      color: theme.palette.primary[500],
      transform: 'translateX(14px)',
      '& + $bar': {
        backgroundColor: theme.palette.primary[500],
        opacity: 0.5
      }
    },
    disabled: {
      color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
      '& + $bar': {
        backgroundColor: theme.palette.type === 'light' ? '#000' : '#fff',
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    }
  };
};

function Switch(props) {
  var classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className']);

  var icon = _react2.default.createElement('span', { className: classes.icon });

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(classes.root, className) },
    _react2.default.createElement(_SwitchBase2.default, (0, _extends3.default)({
      icon: icon,
      classes: {
        default: classes.default,
        checked: classes.checked,
        disabled: classes.disabled
      },
      checkedIcon: icon
    }, other)),
    _react2.default.createElement('span', { className: classes.bar })
  );
}

Switch.propTypes =  false ? {
  /**
   * If `true`, the component is checked.
   */
  checked: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  /**
   * The icon to display when the component is checked.
   * If a string is provided, it will be used as a font ligature.
   */
  checkedIcon: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  defaultChecked: _propTypes2.default.bool,
  /**
   * If `true`, the switch will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes2.default.bool,
  /**
   * The icon to display when the component is unchecked.
   * If a string is provided, it will be used as a font ligature.
   */
  icon: _propTypes2.default.node,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: _propTypes2.default.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes2.default.func,
  /**
   * The input component property `type`.
   */
  inputType: _propTypes2.default.string,
  /*
   * @ignore
   */
  name: _propTypes2.default.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  tabIndex: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  /**
   * The value of the component.
   */
  value: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSwitch' })(Switch);

/***/ }),

/***/ "guZ3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z' });

var IndeterminateCheckBox = function IndeterminateCheckBox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
IndeterminateCheckBox = (0, _pure2.default)(IndeterminateCheckBox);
IndeterminateCheckBox.muiName = 'SvgIcon';

exports.default = IndeterminateCheckBox;

/***/ }),

/***/ "hRCu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("VopY");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _ArrowDownward = __webpack_require__("rySA");

var _ArrowDownward2 = _interopRequireDefault(_ArrowDownward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent ButtonBase

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      cursor: 'pointer',
      display: 'inline-flex',
      justifyContent: 'flex-start',
      flexDirection: 'inherit',
      alignItems: 'center',
      '&:hover': {
        color: theme.palette.text.primary
      },
      '&:focus': {
        color: theme.palette.text.primary
      }
    },
    active: {
      color: theme.palette.text.primary,
      '& $icon': {
        opacity: 1
      }
    },
    icon: {
      height: 16,
      marginRight: 4,
      marginLeft: 4,
      opacity: 0,
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shorter
      }),
      userSelect: 'none',
      width: 16
    },
    desc: {
      transform: 'rotate(0deg)'
    },
    asc: {
      transform: 'rotate(180deg)'
    }
  };
};

/**
 * A button based label for placing inside `TableCell` for column sorting.
 */
function TableSortLabel(props) {
  var active = props.active,
      classes = props.classes,
      classNameProp = props.className,
      children = props.children,
      direction = props.direction,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'classes', 'className', 'children', 'direction']);

  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.active, active), classNameProp);

  var iconClassName = (0, _classnames2.default)(classes.icon, (0, _defineProperty3.default)({}, classes[direction], !!direction));

  return _react2.default.createElement(
    _ButtonBase2.default,
    (0, _extends3.default)({ className: className, component: 'span', disableRipple: true }, other),
    children,
    _react2.default.createElement(_ArrowDownward2.default, { className: iconClassName })
  );
}

TableSortLabel.propTypes =  false ? {
  /**
   * If `true`, the label will have the active styling (should be true for the sorted column).
   */
  active: _propTypes2.default.bool,
  /**
   * Label contents, the arrow will be appended automatically.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The current sort direction.
   */
  direction: _propTypes2.default.oneOf(['asc', 'desc'])
} : {};

TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableSortLabel' })(TableSortLabel);

/***/ }),

/***/ "hjiS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("GiK3");
var react_redux_1 = __webpack_require__("RH2O");
var scores_1 = __webpack_require__("mr5k");
var scores_2 = __webpack_require__("BZRO");
var Grid_1 = __webpack_require__("lRCh");
var Chip_1 = __webpack_require__("ySDz");
var Avatar_1 = __webpack_require__("Oyr6");
var Typography_1 = __webpack_require__("cebZ");
var withStyles_1 = __webpack_require__("3rUI");
var Drawer_1 = __webpack_require__("oJww");
var Button_1 = __webpack_require__("WdaU");
var Badge_1 = __webpack_require__("BSVS");
var FormControl_1 = __webpack_require__("615u");
var FormLabel_1 = __webpack_require__("IO+1");
var RadioGroup_1 = __webpack_require__("4NQe");
var FormControlLabel_1 = __webpack_require__("oHIf");
var Radio_1 = __webpack_require__("/aIv");
var Dialog_1 = __webpack_require__("PXKu");
var List_1 = __webpack_require__("HwzN");
var withWidth_1 = __webpack_require__("/U7w");
var withWidth_2 = __webpack_require__("/U7w");
var scores_potlist_1 = __webpack_require__("rf4U");
var scores_potter_1 = __webpack_require__("KgpJ");
var material_ui_1 = __webpack_require__("Q4lS");
var ScoreBoardDesign = /** @class */ (function (_super) {
    __extends(ScoreBoardDesign, _super);
    function ScoreBoardDesign() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            faulDrawerOpen: false,
            faulPoints: "4",
            potPopup: false,
            potFilter: function (p) { return true; }
        };
        return _this;
    }
    ScoreBoardDesign.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(Grid_1.default, { container: true },
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Badge_1.default, { color: "primary", badgeContent: "+" + this.props.starter.left },
                        React.createElement(Chip_1.default, { label: this.props.users.left, avatar: React.createElement(Avatar_1.default, null, this.props.scoreLeft || "0") }))),
                React.createElement(Grid_1.default, { item: true, xs: 6 },
                    React.createElement(Typography_1.default, { align: "right", component: "div" },
                        React.createElement(Badge_1.default, { color: "primary", badgeContent: "+" + this.props.starter.right },
                            React.createElement(Chip_1.default, { label: this.props.users.right, avatar: React.createElement(Avatar_1.default, null, this.props.scoreRight || "0") })))),
                React.createElement(Grid_1.default, { item: true, xs: 3, sm: 2 },
                    React.createElement(scores_potlist_1.PotsList, { player: "left", popupOpener: function () { return _this.setState({ potPopup: true }); } })),
                React.createElement(Grid_1.default, { item: true, xs: 6, sm: 8 },
                    "Scoreboards (",
                    this.props.scoreLeft - this.props.scoreRight,
                    " difference,",
                    this.props.scoreOnTable,
                    " scores left,",
                    15 - this.props.pottedReds,
                    " Reds remaining) (",
                    this.props.starter.redRemaining,
                    " reds at the start)",
                    React.createElement(scores_potter_1.Potter, { drawerOpener: function () { return _this.setState({ faulDrawerOpen: true }); } })),
                React.createElement(Grid_1.default, { item: true, xs: 3, sm: 2 },
                    React.createElement(scores_potlist_1.PotsList, { player: "right", popupOpener: function () { return _this.setState({ potPopup: true }); } }))),
            React.createElement(Drawer_1.default, { open: this.state.faulDrawerOpen, anchor: "bottom", onBackdropClick: function (e) { return _this.setState({ faulDrawerOpen: false }); } },
                React.createElement("div", { style: { padding: 20 } },
                    React.createElement(Typography_1.default, { type: "display1" }, "Fauls (who failed, not who gains score)"),
                    React.createElement(Grid_1.default, { container: true, alignItems: "flex-end" },
                        React.createElement(Grid_1.default, { item: true, xs: 6, sm: 3, className: "flex-order-btn-left" },
                            React.createElement(Button_1.default, { raised: true, onClick: function () {
                                    _this.props.actionFaul("left", parseInt(_this.state.faulPoints));
                                    _this.setState({ faulDrawerOpen: false });
                                } }, "Left")),
                        React.createElement(Grid_1.default, { item: true, xs: 12, sm: 6, className: "flex-order-radio" },
                            React.createElement(FormControl_1.default, null,
                                React.createElement(FormLabel_1.default, null, "Points"),
                                React.createElement(RadioGroup_1.default, { value: this.state.faulPoints, onChange: function (e, value) { _this.setState({ faulPoints: value }); } }, [4, 5, 6, 7].map(function (score) { return (React.createElement(FormControlLabel_1.default, { key: score, value: "" + score, control: React.createElement(Radio_1.default, null), label: "" + score })); })))),
                        React.createElement(Grid_1.default, { item: true, xs: 6, sm: 3, className: "flex-order-btn-right" },
                            React.createElement(Typography_1.default, { align: "right", component: "div" },
                                React.createElement(Button_1.default, { raised: true, onClick: function () {
                                        _this.props.actionFaul("right", parseInt(_this.state.faulPoints));
                                        _this.setState({ faulDrawerOpen: false });
                                    } }, "Right")))))),
            React.createElement(Dialog_1.default, { open: this.state.potPopup, onClose: function () { return _this.setState({ potPopup: false }); }, fullScreen: withWidth_2.isWidthDown("sm", this.props.width), fullWidth: this.props.width == "sm" },
                React.createElement(Dialog_1.DialogTitle, null, "History of pots"),
                React.createElement(Dialog_1.DialogContent, null,
                    React.createElement(material_ui_1.AppBar, { position: "static" },
                        React.createElement(material_ui_1.Tabs, { value: this.state.potFilter, onChange: function (e, v) { _this.setState({ potFilter: v }); }, fullWidth: true },
                            React.createElement(material_ui_1.Tab, { value: function (p) { return true; }, label: "Both" }),
                            React.createElement(material_ui_1.Tab, { value: function (p) { return p.player == "left"; }, label: this.props.users.left }),
                            React.createElement(material_ui_1.Tab, { value: function (p) { return p.player == 'right'; }, label: this.props.users.right }))),
                    React.createElement(List_1.default, null, this.props.allPots.filter(function (pot) { return pot.score > 0; }).filter(this.state.potFilter).map(function (pot, i) { return (React.createElement(List_1.ListItem, { key: i },
                        React.createElement(List_1.ListItemAvatar, null,
                            React.createElement(Avatar_1.default, { classes: { root: _this.props.classes["ball" + pot.score] } }, pot.score)),
                        React.createElement(List_1.ListItemText, { primary: React.createElement("span", null,
                                pot.player === "right" ?
                                    (React.createElement("span", null,
                                        React.createElement("span", { style: { fontSize: "1.5em" } }, "\u21E8"),
                                        " ",
                                        _this.props.users.right)) : (React.createElement("span", null,
                                    React.createElement("span", { style: { fontSize: "1.5em" } }, "\u21E6"),
                                    " ",
                                    _this.props.users.left)),
                                pot.isFaul ? ' FAUL' : null,
                                pot.isFreeball ? ' (Free Ball)' : null) }))); }))),
                React.createElement(Dialog_1.DialogActions, null,
                    React.createElement(Button_1.default, { color: "primary", autoFocus: true, onClick: function (e) { return _this.setState({ potPopup: false }); } }, "Close")))));
    };
    return ScoreBoardDesign;
}(React.Component));
exports.ScoreBoardDesign = ScoreBoardDesign;
exports.ScoreBoard = react_redux_1.connect(scores_1.ScoreBoardSelector, { actionFaul: scores_2.actionFaul, })(withWidth_1.default()(withStyles_1.default(scores_potlist_1.BallStyles)(ScoreBoardDesign)));


/***/ }),

/***/ "hs1l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__("ygJi");
var utils_1 = __webpack_require__("d4eG");
exports.StarterSelector = function (s) { return s.starter; };
exports.starterReducer = utils_1.createReducer({
    left: 0,
    right: 0,
    redRemaining: 15
}, (_a = {},
    _a[types_1.ACTION_SET_START] = function (state, action) {
        var left = action.left, right = action.right, redRemaining = action.redRemaining;
        return __assign({}, state, { left: left, right: right, redRemaining: redRemaining });
    },
    _a));
var _a;


/***/ }),

/***/ "iSqa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "jI+e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("O27J");

var _reactEventListener = __webpack_require__("ppkW");

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDescendant = function isDescendant(el, target) {
  if (target !== null && target.parentNode) {
    return el === target || isDescendant(el, target.parentNode);
  }
  return false;
};

/**
 * Listen for click events that are triggered outside of the component children.
 */

var ClickAwayListener = function (_React$Component) {
  (0, _inherits3.default)(ClickAwayListener, _React$Component);

  function ClickAwayListener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ClickAwayListener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ClickAwayListener.__proto__ || (0, _getPrototypeOf2.default)(ClickAwayListener)).call.apply(_ref, [this].concat(args))), _this), _this.mounted = false, _this.handleClickAway = function (event) {
      // Ignore events that have been `event.preventDefault()` marked.
      if (event.defaultPrevented) {
        return;
      }

      // IE11 support, which trigger the handleClickAway even after the unbind
      if (_this.mounted) {
        var el = (0, _reactDom.findDOMNode)(_this);

        if (event.target instanceof HTMLElement && document.documentElement && document.documentElement.contains(event.target) && !isDescendant(el, event.target)) {
          _this.props.onClickAway(event);
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ClickAwayListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactEventListener2.default,
        {
          target: 'document',
          onMouseup: this.handleClickAway,
          onTouchend: this.handleClickAway
        },
        this.props.children
      );
    }
  }]);
  return ClickAwayListener;
}(_react2.default.Component);

ClickAwayListener.propTypes =  false ? {
  children: _propTypes2.default.node.isRequired,
  onClickAway: _propTypes2.default.func.isRequired
} : {};

exports.default = ClickAwayListener;

/***/ }),

/***/ "jn27":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Typography = __webpack_require__("cebZ");

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 3 + 'px       20px ' + theme.spacing.unit * 3 + 'px',
      flex: '0 0 auto'
    }
  };
};

function DialogTitle(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      disableTypography = props.disableTypography,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'disableTypography']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    disableTypography ? children : _react2.default.createElement(
      _Typography2.default,
      { type: 'title' },
      children
    )
  );
}

DialogTitle.propTypes =  false ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: _propTypes2.default.bool
} : {};

DialogTitle.defaultProps = {
  disableTypography: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogTitle' })(DialogTitle);

/***/ }),

/***/ "jyHq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__("ygJi");
function setName(left, right) {
    if (left === void 0) { left = 'User 1'; }
    if (right === void 0) { right = 'User 2'; }
    return {
        type: types_1.ACTION_SET_NAME,
        left: left,
        right: right,
    };
}
exports.setName = setName;


/***/ }),

/***/ "k5k7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__("Iauv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__("okyF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__("IiIQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__("iSqa");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createHashHistory);

/***/ }),

/***/ "kZwz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("Sfvb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RADIUS = 12;

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      display: 'inline-flex'
    },
    badge: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -RADIUS,
      right: -RADIUS,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      fontSize: theme.typography.pxToRem(RADIUS),
      width: RADIUS * 2,
      height: RADIUS * 2,
      borderRadius: '50%',
      backgroundColor: theme.palette.color,
      color: theme.palette.textColor,
      zIndex: 1 // Render the badge on top of potential ripples.
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary[500],
      color: theme.palette.getContrastText(theme.palette.primary[500])
    },
    colorAccent: {
      backgroundColor: theme.palette.secondary.A200,
      color: theme.palette.getContrastText(theme.palette.secondary.A200)
    }
  };
};

function Badge(props) {
  var badgeContent = props.badgeContent,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      children = props.children,
      other = (0, _objectWithoutProperties3.default)(props, ['badgeContent', 'classes', 'className', 'color', 'children']);


  var badgeClassName = (0, _classnames2.default)(classes.badge, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalizeFirstLetter)(color)], color !== 'default'));

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
    children,
    _react2.default.createElement(
      'span',
      { className: badgeClassName },
      badgeContent
    )
  );
}

Badge.propTypes =  false ? {
  /**
   * The content rendered within the badge.
   */
  badgeContent: _propTypes2.default.node.isRequired,
  /**
   * The badge will be added relative to this node.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['default', 'primary', 'accent'])
} : {};

Badge.defaultProps = {
  color: 'default'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBadge' })(Badge);

/***/ }),

/***/ "kfgG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ExpansionPanel = __webpack_require__("Kdur");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpansionPanel).default;
  }
});

var _ExpansionPanelActions = __webpack_require__("UNto");

Object.defineProperty(exports, 'ExpansionPanelActions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpansionPanelActions).default;
  }
});

var _ExpansionPanelDetails = __webpack_require__("Xv21");

Object.defineProperty(exports, 'ExpansionPanelDetails', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpansionPanelDetails).default;
  }
});

var _ExpansionPanelSummary = __webpack_require__("6Qry");

Object.defineProperty(exports, 'ExpansionPanelSummary', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpansionPanelSummary).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "kjbi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__("crWv");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__("xIPz");

var _PathUtils = __webpack_require__("Izpu");

var _createTransitionManager = __webpack_require__("tqq1");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__("zFGm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),

/***/ "l3n3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSITION_DURATION = 4; // 400ms

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5
    },
    primaryColor: {
      backgroundColor: theme.palette.primary[100]
    },
    primaryColorBar: {
      backgroundColor: theme.palette.primary[500]
    },
    primaryDashed: {
      background: 'radial-gradient(' + theme.palette.primary[100] + ' 0%, ' + theme.palette.primary[100] + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    accentColor: {
      backgroundColor: theme.palette.secondary.A100
    },
    accentColorBar: {
      backgroundColor: theme.palette.secondary.A400
    },
    accentDashed: {
      background: 'radial-gradient(' + theme.palette.secondary.A100 + ' 0%, ' + theme.palette.secondary.A100 + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: 'buffer 3s infinite linear'
    },
    bufferBar2: {
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    rootBuffer: {
      backgroundColor: 'transparent'
    },
    rootQuery: {
      transform: 'rotate(180deg)'
    },
    indeterminateBar1: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    indeterminateBar2: {
      width: 'auto',
      willChange: 'left, right',
      animation: 'mui-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    determinateBar1: {
      willChange: 'transform',
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    bufferBar1: {
      zIndex: 1,
      transition: 'transform .' + TRANSITION_DURATION + 's linear'
    },
    bufferBar2Primary: {
      transition: 'transform .' + TRANSITION_DURATION + 's linear',
      backgroundColor: theme.palette.primary[100]
    },
    bufferBar2Accent: {
      transition: 'transform .' + TRANSITION_DURATION + 's linear',
      backgroundColor: theme.palette.secondary.A100
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes mui-indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes mui-indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};

function LinearProgress(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      mode = props.mode,
      value = props.value,
      valueBuffer = props.valueBuffer,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color', 'mode', 'value', 'valueBuffer']);


  var dashedClass = (0, _classnames2.default)(classes.dashed, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.primaryDashed, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.accentDashed, color === 'accent'), _classNames));

  var rootClassName = (0, _classnames2.default)(classes.root, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.primaryColor, color === 'primary'), (0, _defineProperty3.default)(_classNames2, classes.accentColor, color === 'accent'), (0, _defineProperty3.default)(_classNames2, classes.rootBuffer, mode === 'buffer'), (0, _defineProperty3.default)(_classNames2, classes.rootQuery, mode === 'query'), _classNames2), className);
  var primaryClassName = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.primaryColorBar, color === 'primary'), (0, _defineProperty3.default)(_classNames3, classes.accentColorBar, color === 'accent'), (0, _defineProperty3.default)(_classNames3, classes.indeterminateBar1, mode === 'indeterminate' || mode === 'query'), (0, _defineProperty3.default)(_classNames3, classes.determinateBar1, mode === 'determinate'), (0, _defineProperty3.default)(_classNames3, classes.bufferBar1, mode === 'buffer'), _classNames3));
  var secondaryClassName = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, (0, _defineProperty3.default)(_classNames4, classes.bufferBar2, mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.primaryColorBar, color === 'primary' && mode !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.primaryColor, color === 'primary' && mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.accentColorBar, color === 'accent' && mode !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.accentColor, color === 'accent' && mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.indeterminateBar2, mode === 'indeterminate' || mode === 'query'), _classNames4));
  var inlineStyles = { primary: {}, secondary: {} };
  var rootProps = {};

  if (mode === 'determinate') {
    if (value !== undefined) {
      inlineStyles.primary.transform = 'scaleX(' + value / 100 + ')';
      rootProps['aria-valuenow'] = Math.round(value);
    } else {
       false ? (0, _warning2.default)(false, 'Material-UI: you need to provide a value property ' + 'when LinearProgress is in determinate mode.') : void 0;
    }
  } else if (mode === 'buffer') {
    if (value !== undefined) {
      inlineStyles.primary.transform = 'scaleX(' + value / 100 + ')';
      inlineStyles.secondary.transform = 'scaleX(' + (valueBuffer || 0) / 100 + ')';
    } else {
       false ? (0, _warning2.default)(false, 'Material-UI: you need to provide a value property when LinearProgress is ' + 'in buffer mode.') : void 0;
    }
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: rootClassName }, rootProps, other),
    mode === 'buffer' ? _react2.default.createElement('div', { className: dashedClass }) : null,
    _react2.default.createElement('div', { className: primaryClassName, style: inlineStyles.primary }),
    mode === 'determinate' ? null : _react2.default.createElement('div', { className: secondaryClassName, style: inlineStyles.secondary })
  );
}

LinearProgress.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['primary', 'accent']),
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  /**
   * The value of progress, only works in determinate and buffer mode.
   * Value between 0 and 100.
   */
  value: _propTypes2.default.number,
  /**
   * The value of buffer, only works in buffer mode.
   * Value between 0 and 100.
   */
  valueBuffer: _propTypes2.default.number
} : {};

LinearProgress.defaultProps = {
  color: 'primary',
  mode: 'indeterminate'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiLinearProgress' })(LinearProgress);

/***/ }),

/***/ "lmKt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("Sfvb");

var _Modal = __webpack_require__("FdYf");

var _Modal2 = _interopRequireDefault(_Modal);

var _Fade = __webpack_require__("TjCR");

var _Fade2 = _interopRequireDefault(_Fade);

var _transitions = __webpack_require__("CMPy");

var _Paper = __webpack_require__("Su6/");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    paper: {
      display: 'flex',
      margin: theme.spacing.unit * 4,
      flexDirection: 'column',
      flex: '0 1 auto',
      position: 'relative',
      maxHeight: '90vh',
      overflowY: 'auto', // Fix IE11 issue, to remove at some point.
      '&:focus': {
        outline: 'none'
      }
    },
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 360)
    },
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm
    },
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md
    },
    fullWidth: {
      width: '100%'
    },
    fullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: '100%',
      borderRadius: 0
    }
  };
};

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
// @inheritedComponent Modal

function Dialog(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      fullScreen = props.fullScreen,
      fullWidth = props.fullWidth,
      ignoreBackdropClick = props.ignoreBackdropClick,
      ignoreEscapeKeyUp = props.ignoreEscapeKeyUp,
      maxWidth = props.maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyUp = props.onEscapeKeyUp,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      TransitionProp = props.transition,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'fullScreen', 'fullWidth', 'ignoreBackdropClick', 'ignoreEscapeKeyUp', 'maxWidth', 'onBackdropClick', 'onClose', 'onEnter', 'onEntered', 'onEntering', 'onEscapeKeyUp', 'onExit', 'onExited', 'onExiting', 'open', 'transition', 'transitionDuration']);


  return _react2.default.createElement(
    _Modal2.default,
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, className),
      BackdropTransitionDuration: transitionDuration,
      ignoreBackdropClick: ignoreBackdropClick,
      ignoreEscapeKeyUp: ignoreEscapeKeyUp,
      onBackdropClick: onBackdropClick,
      onEscapeKeyUp: onEscapeKeyUp,
      onClose: onClose,
      show: open,
      role: 'dialog'
    }, other),
    _react2.default.createElement(
      TransitionProp,
      {
        appear: true,
        'in': open,
        timeout: transitionDuration,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered,
        onExit: onExit,
        onExiting: onExiting,
        onExited: onExited
      },
      _react2.default.createElement(
        _Paper2.default,
        {
          elevation: 24,
          className: (0, _classnames2.default)(classes.paper, classes['paperWidth' + (0, _helpers.capitalizeFirstLetter)(maxWidth)], (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.fullScreen, fullScreen), (0, _defineProperty3.default)(_classNames, classes.fullWidth, fullWidth), _classNames))
        },
        children
      )
    )
  );
}

Dialog.propTypes =  false ? {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, it will be full-screen
   */
  fullScreen: _propTypes2.default.bool,
  /**
   * If specified, stretches dialog to max width.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  ignoreBackdropClick: _propTypes2.default.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  ignoreEscapeKeyUp: _propTypes2.default.bool,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application.
   */
  maxWidth: _propTypes2.default.oneOf(['xs', 'sm', 'md']),
  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes2.default.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes2.default.func,
  /**
   * Callback fired before the dialog enters.
   */
  onEnter: _propTypes2.default.func,
  /**
   * Callback fired when the dialog has entered.
   */
  onEntered: _propTypes2.default.func,
  /**
   * Callback fired when the dialog is entering.
   */
  onEntering: _propTypes2.default.func,
  /**
   * Callback fires when the escape key is released and the modal is in focus.
   */
  onEscapeKeyUp: _propTypes2.default.func,
  /**
   * Callback fired before the dialog exits.
   */
  onExit: _propTypes2.default.func,
  /**
   * Callback fired when the dialog has exited.
   */
  onExited: _propTypes2.default.func,
  /**
   * Callback fired when the dialog is exiting.
   */
  onExiting: _propTypes2.default.func,
  /**
   * If `true`, the Dialog is open.
   */
  open: _propTypes2.default.bool,
  /**
   * Transition component.
   */
  transition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number })])
} : {};

Dialog.defaultProps = {
  fullScreen: false,
  fullWidth: false,
  ignoreBackdropClick: false,
  ignoreEscapeKeyUp: false,
  maxWidth: 'sm',
  open: false,
  transition: _Fade2.default,
  transitionDuration: { enter: _transitions.duration.enteringScreen, exit: _transitions.duration.leavingScreen }
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialog' })(Dialog);

/***/ }),

/***/ "lo5y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = __webpack_require__("RH2O");
var React = __webpack_require__("GiK3");
var starter_1 = __webpack_require__("4YF7");
var react_router_1 = __webpack_require__("CIox");
var Button_1 = __webpack_require__("WdaU");
var TextField_1 = __webpack_require__("rtxM");
var Grid_1 = __webpack_require__("lRCh");
var mapStateToProps = function (state) { return state.starter; };
var connector = react_redux_1.connect(mapStateToProps, { actionSetStart: starter_1.actionSetStart });
var StarterDesign = /** @class */ (function (_super) {
    __extends(StarterDesign, _super);
    function StarterDesign(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { fireRedirect: false };
        return _this;
    }
    StarterDesign.prototype.render = function () {
        var _this = this;
        var left, right, reds;
        var fireRedirect = this.state.fireRedirect;
        if (fireRedirect) {
            return React.createElement(react_router_1.Redirect, { to: publicPath + "scores" });
        }
        return (React.createElement("form", { onSubmit: function (e) {
                e.preventDefault();
                _this.props.actionSetStart(parseInt(left.value), parseInt(right.value), parseInt(reds.value));
                _this.setState({ fireRedirect: true });
            } },
            React.createElement(Grid_1.default, { container: true, justify: "flex-end" },
                React.createElement(Grid_1.default, { item: true, xs: 12, sm: 4 },
                    React.createElement(TextField_1.default, { fullWidth: true, inputRef: function (i) { return left = i; }, defaultValue: "" + this.props.left, label: "Left" })),
                React.createElement(Grid_1.default, { item: true, xs: 12, sm: 4 },
                    React.createElement(TextField_1.default, { fullWidth: true, label: "Right", defaultValue: "" + this.props.right, inputRef: function (i) { return right = i; } })),
                React.createElement(Grid_1.default, { item: true, xs: 12, sm: 4 },
                    React.createElement(TextField_1.default, { fullWidth: true, label: "Reds on Table", defaultValue: "" + this.props.redRemaining, inputRef: function (i) { return reds = i; } })),
                React.createElement(Grid_1.default, { item: true, xs: 12, sm: 8 },
                    React.createElement(Button_1.default, { raised: true, color: "primary", type: "submit" }, "Save"),
                    React.createElement(Button_1.default, { color: "accent", onClick: function (e) {
                            left.value = '0';
                            right.value = '0';
                            reds.value = '15';
                        } }, "Reset")))));
    };
    return StarterDesign;
}(React.Component));
exports.StarterDesign = StarterDesign;
exports.Starter = connector(StarterDesign);


/***/ }),

/***/ "loWh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _ButtonBase = __webpack_require__("VopY");

var _ButtonBase2 = _interopRequireDefault(_ButtonBase);

var _Icon = __webpack_require__("nGxd");

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @inheritedComponent ButtonBase

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      transition: theme.transitions.create(['color', 'padding-top'], {
        duration: theme.transitions.duration.short
      }),
      paddingTop: 8,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      minWidth: 80,
      maxWidth: 168,
      color: theme.palette.text.secondary,
      flex: '1'
    },
    selected: {
      paddingTop: 6,
      color: theme.palette.primary[500]
    },
    selectedIconOnly: {
      paddingTop: theme.spacing.unit * 2
    },
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(theme.typography.fontSize - 2),
      opacity: 1,
      transition: 'font-size 0.2s, opacity 0.2s',
      transitionDelay: '0.1s'
    },
    selectedLabel: {
      fontSize: theme.typography.pxToRem(theme.typography.fontSize)
    },
    hiddenLabel: {
      opacity: 0,
      transitionDelay: '0s'
    },
    icon: {
      display: 'block',
      margin: 'auto'
    }
  };
};

var BottomNavigationButton = function (_React$Component) {
  (0, _inherits3.default)(BottomNavigationButton, _React$Component);

  function BottomNavigationButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, BottomNavigationButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BottomNavigationButton.__proto__ || (0, _getPrototypeOf2.default)(BottomNavigationButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onClick = _this$props.onClick;


      if (onChange) {
        onChange(event, value);
      }

      if (onClick) {
        onClick(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(BottomNavigationButton, [{
    key: 'render',
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          iconProp = _props.icon,
          label = _props.label,
          onChange = _props.onChange,
          selected = _props.selected,
          showLabelProp = _props.showLabel,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'className', 'icon', 'label', 'onChange', 'selected', 'showLabel', 'value']);


      var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.selected, selected), (0, _defineProperty3.default)(_classNames, classes.selectedIconOnly, !showLabelProp && !selected), _classNames), classNameProp);

      var icon = null;

      if (iconProp) {
        if (_react2.default.isValidElement(iconProp) && typeof iconProp !== 'string') {
          icon = _react2.default.cloneElement(iconProp, {
            className: (0, _classnames2.default)(classes.icon, iconProp.props.className)
          });
        } else {
          icon = _react2.default.createElement(
            _Icon2.default,
            null,
            iconProp
          );
        }
      }

      var labelClassName = (0, _classnames2.default)(classes.label, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.selectedLabel, selected), (0, _defineProperty3.default)(_classNames2, classes.hiddenLabel, !showLabelProp && !selected), _classNames2));

      return _react2.default.createElement(
        _ButtonBase2.default,
        (0, _extends3.default)({ className: className, focusRipple: true, onClick: this.handleChange }, other),
        _react2.default.createElement(
          'span',
          { className: classes.wrapper },
          icon,
          _react2.default.createElement(
            'span',
            { className: labelClassName },
            label
          )
        )
      );
    }
  }]);
  return BottomNavigationButton;
}(_react2.default.Component);

BottomNavigationButton.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The icon element. If a string is provided, it will be used as a font ligature.
   */
  icon: _propTypes2.default.node,
  /**
   * The label element.
   */
  label: _propTypes2.default.node,
  /**
   * @ignore
   */
  onChange: _propTypes2.default.func,
  /**
   * @ignore
   */
  onClick: _propTypes2.default.func,
  /**
   * @ignore
   */
  selected: _propTypes2.default.bool,
  /**
   * If `true`, the BottomNavigationButton will show its label.
   */
  showLabel: _propTypes2.default.bool,
  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: _propTypes2.default.any
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBottomNavigationButton' })(BottomNavigationButton);

/***/ }),

/***/ "lp/y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _Collapse = __webpack_require__("HJTf");

var _Collapse2 = _interopRequireDefault(_Collapse);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit,
      marginLeft: 12, // half icon
      paddingLeft: theme.spacing.unit + 12, // margin + half icon
      paddingRight: theme.spacing.unit,
      borderLeft: '1px solid ' + theme.palette.line.stepper
    },
    last: {
      borderLeft: 'none'
    },
    transition: {}
  };
};

function StepContent(props) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      completed = props.completed,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      Transition = props.transition,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties3.default)(props, ['active', 'alternativeLabel', 'children', 'classes', 'className', 'completed', 'last', 'optional', 'orientation', 'transition', 'transitionDuration']);


   false ? (0, _warning2.default)(orientation === 'vertical', 'Material-UI: <StepContent /> is only designed for use with the vertical stepper.') : void 0;

  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.last, last), classNameProp);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    _react2.default.createElement(
      Transition,
      {
        'in': active,
        className: classes.transition,
        timeout: transitionDuration,
        unmountOnExit: true
      },
      children
    )
  );
}

StepContent.propTypes =  false ? {
  /**
   * @ignore
   * Expands the content.
   */
  active: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: _propTypes2.default.bool,
  /**
   * Step content.
   */
  children: _propTypes2.default.node,
  /**
   * @ignore
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * @ignore
   */
  completed: _propTypes2.default.bool,
  /**
   * @ignore
   */
  last: _propTypes2.default.bool,
  /**
   * @ignore
   * Set internally by Step when it's supplied with the optional property.
   */
  optional: _propTypes2.default.bool,
  /**
   * @ignore
   */
  orientation: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  /**
   * Collapse component.
   */
  transition: _propTypes2.default.func,
  /**
   * Adjust the duration of the content expand transition.
   * Passed as a property to the transition component.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({ enter: _propTypes2.default.number, exit: _propTypes2.default.number }), _propTypes2.default.oneOf(['auto'])])
} : {};

StepContent.defaultProps = {
  transition: _Collapse2.default,
  transitionDuration: 'auto'
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepContent' })(StepContent);

/***/ }),

/***/ "lx7a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__("sGP0");
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),

/***/ "m02y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var lime = {
  50: '#f9fbe7',
  100: '#f0f4c3',
  200: '#e6ee9c',
  300: '#dce775',
  400: '#d4e157',
  500: '#cddc39',
  600: '#c0ca33',
  700: '#afb42b',
  800: '#9e9d24',
  900: '#827717',
  A100: '#f4ff81',
  A200: '#eeff41',
  A400: '#c6ff00',
  A700: '#aeea00',
  contrastDefaultColor: 'dark'
};

exports.default = lime;

/***/ }),

/***/ "mr5k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__("d4eG");
var types_1 = __webpack_require__("ygJi");
var reselect_1 = __webpack_require__("bndy");
var starter_1 = __webpack_require__("hs1l");
var names_1 = __webpack_require__("rdTg");
var PotsSelector = function (state) { return state.score.pots; };
var getPotListPlayerSelector = function () { return reselect_1.createSelector(PotsSelector, function (state, player) { return player; }, function (pots, player) { return pots.filter(function (p) { return p.player == player; }); }); };
var potIsRed = function (p) { return (!p.isFaul && !p.isFreeball && p.score == 1); };
var RedCountSelector = reselect_1.createSelector(PotsSelector, starter_1.StarterSelector, function (pots, starter) {
    var redPotted = pots.reduce(function (s, p) { return (potIsRed(p) ? s + 1 : s); }, 0);
    redPotted += (15 - starter.redRemaining);
    return redPotted;
});
var LastSuccessSelector = reselect_1.createSelector(PotsSelector, function (pots) { return pots.filter(function (p) { return !p.isFaul && !p.isFreeball; }).slice(-1)[0]; });
var HasPottedFinalSelector = reselect_1.createSelector(PotsSelector, function (pots) { return pots.some(function (p) { return p.score == 0; }); });
var LastPotSelector = reselect_1.createSelector(PotsSelector, function (pots) { return pots.slice(-1)[0]; });
var CanPotFreeBallSelector = reselect_1.createSelector(LastPotSelector, HasPottedFinalSelector, function (lastPot, hasPottedFinal) { return (!hasPottedFinal && lastPot && lastPot.isFaul && lastPot.score > 0) ? lastPot.player : undefined; });
var ShowMissBtnSelector = reselect_1.createSelector(RedCountSelector, HasPottedFinalSelector, function (pottedReds, hasPottedFinal) { return pottedReds >= 15 && !hasPottedFinal; });
var CanPotColorSelector = reselect_1.createSelector(RedCountSelector, LastPotSelector, LastSuccessSelector, HasPottedFinalSelector, function (pottedReds, lastPot, lastSuccessPot, hasPottedFinal) {
    var canPotColor = function (player, score) {
        if (score === 1) {
            return pottedReds < 15;
        }
        if (pottedReds < 15) {
            return lastPot && lastPot.player == player && lastPot.score == 1;
        }
        if (hasPottedFinal) {
            return score == (Math.max(1, lastSuccessPot.score) + 1);
        }
        if (lastPot && lastPot.score == 1) {
            return lastPot.player == player;
        }
        return true;
    };
    return canPotColor;
});
exports.CanPotSelector = reselect_1.createStructuredSelector({
    canPotColor: CanPotColorSelector,
    canPotFreeball: CanPotFreeBallSelector,
    showMissBtn: ShowMissBtnSelector
});
exports.getPotListSelector = function () {
    var potSelector = getPotListPlayerSelector();
    return reselect_1.createStructuredSelector({
        pots: potSelector,
        lastPot: reselect_1.createSelector(PotsSelector, function (state, player) { return player; }, function (pots, player) {
            var lastPot = pots.filter(function (_a) {
                var score = _a.score;
                return score > 0;
            }).slice(-1)[0];
            if (lastPot && lastPot.player == player) {
                return lastPot;
            }
            return null;
        })
    });
};
var ScoreOnTableSelector = reselect_1.createSelector(RedCountSelector, HasPottedFinalSelector, LastSuccessSelector, function (pottedReds, hasPottedFinal, lastSuccessPot) {
    var scoreOnTable = (15 - pottedReds) * 8 + (2 + 3 + 4 + 5 + 6 + 7);
    if (hasPottedFinal && lastSuccessPot.score > 0) {
        var sub = lastSuccessPot.score;
        while (sub > 1) {
            scoreOnTable -= sub;
            sub--;
        }
    }
    return scoreOnTable;
});
var getPlayerScoreSelector = function (player) {
    var potSelector = getPotListPlayerSelector();
    return reselect_1.createSelector(function (state) { return potSelector(state, player); }, starter_1.StarterSelector, function (pots, starter) { return pots.reduce(function (s, p) { return (s + p.score); }, 0) + starter[player]; });
};
exports.ScoreBoardSelector = reselect_1.createStructuredSelector({
    users: names_1.NameSelector,
    starter: starter_1.StarterSelector,
    pottedReds: RedCountSelector,
    scoreLeft: getPlayerScoreSelector("left"),
    scoreRight: getPlayerScoreSelector("right"),
    scoreOnTable: ScoreOnTableSelector,
    allPots: PotsSelector,
});
exports.scoreReducer = utils_1.createReducer({
    pots: [],
}, (_a = {},
    _a[types_1.ACTION_POT] = function (state, action) {
        var newPot = {
            player: action.player,
            score: action.score,
            isFaul: false,
            isFreeball: false
        };
        var allPots = state.pots.concat([newPot]);
        var hasPottedFinal = state.pots.some(function (p) { return p.score == 0; });
        if (action.isFinal && !hasPottedFinal && action.score > 1) {
            allPots = allPots.concat([{ player: action.player, score: 0, isFreeball: false, isFaul: false }]);
        }
        return __assign({}, state, { pots: allPots });
    },
    _a[types_1.ACTION_FAUL] = function (state, action) {
        var otherPlayer = action.player == 'left' ? 'right' : "left";
        var newPot = {
            player: otherPlayer,
            score: action.score,
            isFaul: true,
            isFreeball: false
        };
        var pots = state.pots.concat([newPot]);
        var pottedReds = state.pots.reduce(function (s, p) { return ((!p.isFaul && !p.isFreeball && p.score == 1) ? s + 1 : s); }, 0);
        var hasPottedFinal = state.pots.some(function (p) { return p.score == 0; });
        if (pottedReds >= 15 && !hasPottedFinal && action.score > 1) {
            pots = pots.concat([{ player: otherPlayer, score: 0, isFreeball: false, isFaul: false }]);
        }
        return __assign({}, state, { pots: pots });
    },
    _a[types_1.ACTION_FREEBALL] = function (state, action) {
        var newPot = {
            player: action.player,
            score: 1,
            isFreeball: true,
            isFaul: false
        };
        return __assign({}, state, { pots: state.pots.concat([newPot]) });
    },
    _a[types_1.ACTION_FINAL_MISS] = function (state, action) {
        if (state.pots.length == 0 || state.pots.some(function (p) { return p.score == 0; })) {
            return state;
        }
        var lastPot = state.pots.slice(-1)[0];
        return __assign({}, state, { pots: state.pots.concat([{ player: lastPot.player, score: 0, isFaul: true, isFreeball: false }]) });
    },
    _a[types_1.ACTION_UNDO] = function (state) {
        if (state.pots.length == 0) {
            return state;
        }
        var lastPot = state.pots.slice(-1)[0];
        var limit = -1;
        if (lastPot.score == 0 && !lastPot.isFaul) {
            limit = -2;
        }
        return __assign({}, state, { pots: state.pots.slice(0, limit) });
    },
    _a));
var _a;


/***/ }),

/***/ "n1VI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return (0, _react.createElement)(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(_react.Component);

Manager.childContextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};
Manager.propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool])
};
Manager.defaultProps = {
  tag: 'div'
};
exports.default = Manager;

/***/ }),

/***/ "nGxd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__("3SrW");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Icon).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "nT98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__("kjbi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__("dCLN");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<HashRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { HashRouter as Router }`.');
  };

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  hashType: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (HashRouter);

/***/ }),

/***/ "nVWB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return (0, _react.createElement)(component, componentProps, children);
};

Target.contextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};

Target.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};

exports.default = Target;

/***/ }),

/***/ "nz+8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IconButton = __webpack_require__("6dUG");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_IconButton).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "o1/Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__("okyF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__("Iauv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__("IiIQ");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createMemoryHistory);

/***/ }),

/***/ "o4cM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      height: 1,
      margin: 0, // Reset browser default style.
      border: 'none',
      flexShrink: 0
    },
    default: {
      backgroundColor: theme.palette.text.divider
    },
    inset: {
      marginLeft: 72
    },
    light: {
      backgroundColor: theme.palette.text.lightDivider
    },
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    }
  };
};

function Divider(props) {
  var _classNames;

  var absolute = props.absolute,
      classes = props.classes,
      classNameProp = props.className,
      inset = props.inset,
      light = props.light,
      other = (0, _objectWithoutProperties3.default)(props, ['absolute', 'classes', 'className', 'inset', 'light']);


  var className = (0, _classnames2.default)(classes.root, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.absolute, absolute), (0, _defineProperty3.default)(_classNames, classes.inset, inset), (0, _defineProperty3.default)(_classNames, light ? classes.light : classes.default, true), _classNames), classNameProp);

  return _react2.default.createElement('hr', (0, _extends3.default)({ className: className }, other));
}

Divider.propTypes =  false ? {
  absolute: _propTypes2.default.bool,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * If `true`, the divider will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * If `true`, the divider will have a lighter color.
   */
  light: _propTypes2.default.bool
} : {};

Divider.defaultProps = {
  absolute: false,
  inset: false,
  light: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDivider' })(Divider);

/***/ }),

/***/ "oDBx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.text.secondary
    }
  };
};

var TableFooter = function (_React$Component) {
  (0, _inherits3.default)(TableFooter, _React$Component);

  function TableFooter() {
    (0, _classCallCheck3.default)(this, TableFooter);
    return (0, _possibleConstructorReturn3.default)(this, (TableFooter.__proto__ || (0, _getPrototypeOf2.default)(TableFooter)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableFooter, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // eslint-disable-line class-methods-use-this
      return {
        table: {
          footer: true
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          ComponentProp = _props.component,
          other = (0, _objectWithoutProperties3.default)(_props, ['children', 'classes', 'className', 'component']);


      return _react2.default.createElement(
        ComponentProp,
        (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, classNameProp) }, other),
        children
      );
    }
  }]);
  return TableFooter;
}(_react2.default.Component);

TableFooter.propTypes =  false ? {
  /**
   * The content of the component, normally `TableRow`.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
} : {};

TableFooter.defaultProps = {
  component: 'tfoot'
};

TableFooter.childContextTypes = {
  table: _propTypes2.default.object
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiTableFooter' })(TableFooter);

/***/ }),

/***/ "okyF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "onEH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__ = __webpack_require__("HSnN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__("twkG");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
  };

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),

/***/ "p/BV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CircularProgress = __webpack_require__("E83m");

Object.defineProperty(exports, 'CircularProgress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CircularProgress).default;
  }
});

var _LinearProgress = __webpack_require__("l3n3");

Object.defineProperty(exports, 'LinearProgress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LinearProgress).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "p5BY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Prompt> outside a <Router>');

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),

/***/ "pfMu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "q8cD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z' });

var KeyboardArrowRight = function KeyboardArrowRight(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
KeyboardArrowRight = (0, _pure2.default)(KeyboardArrowRight);
KeyboardArrowRight.muiName = 'SvgIcon';

exports.default = KeyboardArrowRight;

/***/ }),

/***/ "qAet":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.specialProperty = undefined;

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__("fZjL");

var _keys2 = _interopRequireDefault(_keys);

var _extends3 = __webpack_require__("Dd8w");

var _extends4 = _interopRequireDefault(_extends3);

exports.default = exactProp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.

var specialProperty = exports.specialProperty = 'exact-prop: \u200B';

function exactProp(propTypes, componentNameInError) {
  return (0, _extends4.default)({}, propTypes, (0, _defineProperty3.default)({}, specialProperty, function (props) {
    var unknownProps = (0, _keys2.default)(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });
    if (unknownProps.length > 0) {
      return new TypeError(componentNameInError + ': unknown props found: ' + unknownProps.join(', ') + '. Please remove the unknown properties.');
    }
    return null;
  }));
}

/***/ }),

/***/ "qMEF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("GiK3");
var ReactDOM = __webpack_require__("O27J");
var react_hot_loader_1 = __webpack_require__("rGbO");
var react_router_dom_1 = __webpack_require__("F8kA");
var redux_1 = __webpack_require__("2KeS");
var react_redux_1 = __webpack_require__("RH2O");
// import { Hello } from "./components/hello";
// import { NameForm } from './components/names';
var app_1 = __webpack_require__("KMAb");
var reducers_1 = __webpack_require__("WP1D");
function getStore() {
    var store = redux_1.createStore(reducers_1.rootReducer);
    if (false) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers/index', function () {
            var nextRootReducer = require('./reducers/index').rootReducer;
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
var store = getStore();
// function render(App: any, Hello: any, NameForm: any) {
function render(App) {
    return ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(App, null)))), document.getElementById("example"));
}
render(app_1.App);
if (false) {
    var reload = function () {
        var NextApp = require("./components/app").App;
        // let NextHello = require("./components/hello").Hello;
        // let NextName = require("./components/names").NameForm;
        render(NextApp);
    };
    // module.hot.accept('./components/hello', reload);
    module.hot.accept('./components/app', reload);
    // module.hot.accept('./components/names', reload);
}


/***/ }),

/***/ "qX37":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Snackbar = __webpack_require__("Amio");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Snackbar).default;
  }
});

var _SnackbarContent = __webpack_require__("EQ5b");

Object.defineProperty(exports, 'SnackbarContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SnackbarContent).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "qndO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea',
  contrastDefaultColor: 'dark'
};

exports.default = lightBlue;

/***/ }),

/***/ "rGbO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HIVZ")


/***/ }),

/***/ "rOk0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var amber = {
  50: '#fff8e1',
  100: '#ffecb3',
  200: '#ffe082',
  300: '#ffd54f',
  400: '#ffca28',
  500: '#ffc107',
  600: '#ffb300',
  700: '#ffa000',
  800: '#ff8f00',
  900: '#ff6f00',
  A100: '#ffe57f',
  A200: '#ffd740',
  A400: '#ffc400',
  A700: '#ffab00',
  contrastDefaultColor: 'dark'
};

exports.default = amber;

/***/ }),

/***/ "rdTg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__("ygJi");
var utils_1 = __webpack_require__("d4eG");
exports.NameSelector = function (s) { return s.names; };
exports.nameReducer = utils_1.createReducer({
    'left': 'User 1',
    'right': 'User 2'
}, (_a = {},
    _a[types_1.ACTION_SET_NAME] = function (state, action) {
        var left = action.left, right = action.right;
        // return Object.assign({}, state, {left, right})
        return __assign({}, state, { left: left, right: right });
    },
    _a));
var _a;


/***/ }),

/***/ "rf4U":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var withStyles_1 = __webpack_require__("3rUI");
var _ = __webpack_require__("M4fF");
var React = __webpack_require__("GiK3");
var Typography_1 = __webpack_require__("cebZ");
var Chip_1 = __webpack_require__("ySDz");
var Avatar_1 = __webpack_require__("Oyr6");
var react_redux_1 = __webpack_require__("RH2O");
var scores_1 = __webpack_require__("mr5k");
exports.BallStyles = {
    ball1: {
        backgroundColor: "red",
    },
    ball2: {
        backgroundColor: "yellow",
        color: "black!important"
    },
    ball3: {
        backgroundColor: "green",
    },
    ball4: {
        backgroundColor: "brown"
    },
    ball5: {
        backgroundColor: "blue"
    },
    ball6: {
        backgroundColor: "pink",
        color: "black!important"
    },
    ball7: {
        backgroundColor: "black"
    },
    ballDisabled: {
        opacity: 0.2
    },
    smallAvatar: {
        width: 20,
        height: 20,
        display: "inline-block",
        borderRadius: "50%",
        color: "white",
        marginTop: "8px"
    },
    btnBlock: {
        display: "block",
        width: "100%",
    },
    fullSizeChip: {
        "min-width": "100%",
        "justify-content": "flex-start"
    }
};
var connector = react_redux_1.connect(function () {
    var selector = scores_1.getPotListSelector();
    return function (s, p) { return selector(s, p.player); };
});
exports.PotsList = connector(withStyles_1.default(exports.BallStyles)(function (props) {
    var stats = _.chain(props.pots)
        .filter(function (i) { return i.score > 0 && !i.isFaul && !i.isFreeball; })
        .countBy(function (i) { return i.score; })
        .toPairs()
        .sortBy(function (e) { return e[0]; })
        .value();
    return (React.createElement("div", null,
        stats.map(function (_a, i) {
            var score = _a[0], count = _a[1];
            return (React.createElement(Typography_1.default, { key: i, gutterBottom: true, component: "div" },
                React.createElement("div", { style: { display: "inline-flex" } },
                    " ",
                    React.createElement(Chip_1.default, { classes: { avatar: props.classes["ball" + score] }, label: "" + count, avatar: React.createElement(Avatar_1.default, null, score), style: { marginLeft: props.player == 'right' ? "auto" : 0 } }))));
        }),
        props.lastPot && (React.createElement("div", null,
            React.createElement("hr", null),
            React.createElement("p", null, "Last:"),
            React.createElement("div", { style: { display: "inline-flex" } },
                React.createElement(Chip_1.default, { classes: { avatar: props.classes["ball" + props.lastPot.score] }, label: props.lastPot.isFaul ? "Faul" : (props.lastPot.isFreeball ? "FB" : "Pot"), avatar: React.createElement(Avatar_1.default, null, props.lastPot.score), style: { marginLeft: props.player == 'right' ? "auto" : 0 }, onClick: props.popupOpener })))),
        React.createElement("ul", { className: "potter", hidden: true }, props.pots.map(function (pot, index) { return (React.createElement("li", { key: index },
            pot.score,
            pot.isFaul ? 'FAUL' : null,
            pot.isFreeball ? '(Free Ball)' : null)); }))));
}));


/***/ }),

/***/ "rySA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z' });

var ArrowDownward = function ArrowDownward(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};

ArrowDownward = (0, _pure2.default)(ArrowDownward);
ArrowDownward.muiName = 'SvgIcon';

exports.default = ArrowDownward;

/***/ }),

/***/ "s4hp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__("Een0");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, 'You should not use <Route> or withRouter() outside a <Router>');

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return path ? Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null : null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),

/***/ "sGP0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */

var React = __webpack_require__("GiK3");

var Component = React.Component;

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      if (this.props.component) {
        return React.createElement(this.props.component, this.props.props);
      }

      return React.Children.only(this.props.children);
    }
  }]);

  return AppContainer;
}(Component);

module.exports = AppContainer;

/***/ }),

/***/ "sKKu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  var spacing = theme.spacing.unit * 3;
  return {
    root: {
      flex: '1 1 auto',
      overflowY: 'auto',
      padding: '0 ' + spacing + 'px ' + spacing + 'px ' + spacing + 'px',
      '&:first-child': {
        paddingTop: spacing
      }
    }
  };
};

function DialogContent(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'children', 'className']);


  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other),
    children
  );
}

DialogContent.propTypes =  false ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiDialogContent' })(DialogContent);

/***/ }),

/***/ "t1d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__("Izpu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__("twkG");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;


  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["parsePath"])(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),

/***/ "tfLY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__ = __webpack_require__("vC7t");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_withRouter__["a" /* default */]);

/***/ }),

/***/ "tqq1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__("GvBW");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "twkG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),

/***/ "u7Wp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' });

var RadioButtonUnchecked = function RadioButtonUnchecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
RadioButtonUnchecked = (0, _pure2.default)(RadioButtonUnchecked);
RadioButtonUnchecked.muiName = 'SvgIcon';

exports.default = RadioButtonUnchecked;

/***/ }),

/***/ "up6+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var teal = {
  50: '#e0f2f1',
  100: '#b2dfdb',
  200: '#80cbc4',
  300: '#4db6ac',
  400: '#26a69a',
  500: '#009688',
  600: '#00897b',
  700: '#00796b',
  800: '#00695c',
  900: '#004d40',
  A100: '#a7ffeb',
  A200: '#64ffda',
  A400: '#1de9b6',
  A700: '#00bfa5',
  contrastDefaultColor: 'dark'
};

exports.default = teal;

/***/ }),

/***/ "v9RR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore - internal component.
 */
var _ref = _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' });

var CheckCircle = function CheckCircle(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};
CheckCircle = (0, _pure2.default)(CheckCircle);
CheckCircle.muiName = 'SvgIcon';

exports.default = CheckCircle;

/***/ }),

/***/ "vC7t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__("hYij");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__("s4hp");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], { render: function render(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),

/***/ "vIY5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff',
  contrastDefaultColor: 'light'
};

exports.default = purple;

/***/ }),

/***/ "vqiW":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__("4XgK"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),

/***/ "vsfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cyan = {
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4',
  contrastDefaultColor: 'dark'
};

exports.default = cyan;

/***/ }),

/***/ "wHDr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 56,
      backgroundColor: theme.palette.background.paper
    }
  };
};

function BottomNavigation(props) {
  var childrenProp = props.children,
      classes = props.classes,
      classNameProp = props.className,
      onChange = props.onChange,
      showLabels = props.showLabels,
      value = props.value,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'onChange', 'showLabels', 'value']);


  var className = (0, _classnames2.default)(classes.root, classNameProp);

  var children = _react2.default.Children.map(childrenProp, function (child, childIndex) {
    if (!_react2.default.isValidElement(child)) {
      return null;
    }

    var childValue = child.props.value || childIndex;
    return _react2.default.cloneElement(child, {
      selected: childValue === value,
      showLabel: child.props.showLabel !== undefined ? child.props.showLabel : showLabels,
      value: childValue,
      onChange: onChange
    });
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: className }, other),
    children
  );
}

BottomNavigation.propTypes =  false ? {
  /**
   * The content of the component.
   */
  children: _propTypes2.default.node.isRequired,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child
   */
  onChange: _propTypes2.default.func,
  /**
   * If `true`, all `BottomNavigationButton`s will show their labels.
   * By default only the selected `BottomNavigationButton` will show its label.
   */
  showLabels: _propTypes2.default.bool,
  /**
   * The value of the currently selected `BottomNavigationButton`.
   */
  value: _propTypes2.default.any
} : {};

BottomNavigation.defaultProps = {
  showLabels: false
};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiBottomNavigation' })(BottomNavigation);

/***/ }),

/***/ "wXe2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      fill: theme.palette.action.disabled
    },
    active: {
      fill: theme.palette.primary[500]
    },
    text: {
      fill: theme.palette.getContrastText(theme.palette.primary[500]),
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    }
  };
};

/**
 * @ignore - internal component.
 */

var _ref = _react2.default.createElement('circle', { cx: '12', cy: '12', r: '10' });

function StepPositionIcon(props) {
  var position = props.position,
      classes = props.classes,
      classNameProp = props.className,
      active = props.active;

  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes.active, active), classNameProp);

  return _react2.default.createElement(
    _SvgIcon2.default,
    { className: className },
    _ref,
    _react2.default.createElement(
      'text',
      { className: classes.text, x: '12', y: '16', textAnchor: 'middle' },
      position
    )
  );
}

StepPositionIcon.propTypes =  false ? {
  /**
   * Whether this step is active.
   */
  active: _propTypes2.default.bool,
  /**
   * Classses for component style customizations.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The step position as a number.
   */
  position: _propTypes2.default.node
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiStepPosition' })(StepPositionIcon);

/***/ }),

/***/ "wY2/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("q5MA");

Object.defineProperty(exports, 'common', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_common).default;
  }
});

var _red = __webpack_require__("VhVK");

Object.defineProperty(exports, 'red', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_red).default;
  }
});

var _pink = __webpack_require__("jDmL");

Object.defineProperty(exports, 'pink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pink).default;
  }
});

var _purple = __webpack_require__("vIY5");

Object.defineProperty(exports, 'purple', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_purple).default;
  }
});

var _deepPurple = __webpack_require__("b631");

Object.defineProperty(exports, 'deepPurple', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deepPurple).default;
  }
});

var _indigo = __webpack_require__("UOC6");

Object.defineProperty(exports, 'indigo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_indigo).default;
  }
});

var _blue = __webpack_require__("KGR4");

Object.defineProperty(exports, 'blue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blue).default;
  }
});

var _lightBlue = __webpack_require__("qndO");

Object.defineProperty(exports, 'lightBlue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lightBlue).default;
  }
});

var _cyan = __webpack_require__("vsfb");

Object.defineProperty(exports, 'cyan', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cyan).default;
  }
});

var _teal = __webpack_require__("up6+");

Object.defineProperty(exports, 'teal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_teal).default;
  }
});

var _green = __webpack_require__("V4bX");

Object.defineProperty(exports, 'green', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_green).default;
  }
});

var _lightGreen = __webpack_require__("/4tu");

Object.defineProperty(exports, 'lightGreen', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lightGreen).default;
  }
});

var _lime = __webpack_require__("m02y");

Object.defineProperty(exports, 'lime', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_lime).default;
  }
});

var _yellow = __webpack_require__("14YY");

Object.defineProperty(exports, 'yellow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_yellow).default;
  }
});

var _amber = __webpack_require__("rOk0");

Object.defineProperty(exports, 'amber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_amber).default;
  }
});

var _orange = __webpack_require__("Knuv");

Object.defineProperty(exports, 'orange', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_orange).default;
  }
});

var _deepOrange = __webpack_require__("CnBG");

Object.defineProperty(exports, 'deepOrange', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_deepOrange).default;
  }
});

var _brown = __webpack_require__("wmMQ");

Object.defineProperty(exports, 'brown', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brown).default;
  }
});

var _grey = __webpack_require__("RZKI");

Object.defineProperty(exports, 'grey', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_grey).default;
  }
});

var _blueGrey = __webpack_require__("yalH");

Object.defineProperty(exports, 'blueGrey', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blueGrey).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "wmMQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var brown = {
  50: '#efebe9',
  100: '#d7ccc8',
  200: '#bcaaa4',
  300: '#a1887f',
  400: '#8d6e63',
  500: '#795548',
  600: '#6d4c41',
  700: '#5d4037',
  800: '#4e342e',
  900: '#3e2723',
  A100: '#d7ccc8',
  A200: '#bcaaa4',
  A400: '#8d6e63',
  A700: '#5d4037',
  contrastDefaultColor: 'light'
};

exports.default = brown;

/***/ }),

/***/ "wrym":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__("xuWB");
/* unused harmony reexport createBrowserHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__("k5k7");
/* unused harmony reexport createHashHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__("o1/Q");
/* unused harmony reexport createMemoryHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__("Iauv");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__("okyF");
/* unused harmony reexport parsePath */
/* unused harmony reexport createPath */










/***/ }),

/***/ "xG2a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("+6Bu");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("KSGD");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("HW6M");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("3rUI");

var _withStyles2 = _interopRequireDefault(_withStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      padding: theme.spacing.unit * 2,
      '&:last-child': {
        paddingBottom: theme.spacing.unit * 3
      }
    }
  };
};

function CardContent(props) {
  var classes = props.classes,
      className = props.className,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className']);


  return _react2.default.createElement('div', (0, _extends3.default)({ className: (0, _classnames2.default)(classes.root, className) }, other));
}

CardContent.propTypes =  false ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string
} : {};

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiCardContent' })(CardContent);

/***/ }),

/***/ "xIPz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__("Wpbd");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__("FKtm");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__("Izpu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "xuWB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("GvBW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__("Iauv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__("okyF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__("IiIQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__("iSqa");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
  var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createBrowserHistory);

/***/ }),

/***/ "yL62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("GiK3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("KSGD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__("crWv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ['replace', 'to', 'innerRef']); // eslint-disable-line no-unused-vars

    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Link> outside a <Router>');

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired,
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      createHref: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ "yTkK":
/***/ (function(module, exports, __webpack_require__) {

var raf = __webpack_require__("LLq1")

function scroll (prop, element, to, options, callback) {
  var start = +new Date
  var from = element[prop]
  var cancelled = false

  var ease = inOutSine
  var duration = 350

  if (typeof options === 'function') {
    callback = options
  }
  else {
    options = options || {}
    ease = options.ease || ease
    duration = options.duration || duration
    callback = callback || function () {}
  }

  if (from === to) {
    return callback(
      new Error('Element already at target scroll position'),
      element[prop]
    )
  }

  function cancel () {
    cancelled = true
  }

  function animate (timestamp) {
    if (cancelled) {
      return callback(
        new Error('Scroll cancelled'),
        element[prop]
      )
    }

    var now = +new Date
    var time = Math.min(1, ((now - start) / duration))
    var eased = ease(time)

    element[prop] = (eased * (to - from)) + from

    time < 1 ? raf(animate) : raf(function () {
      callback(null, element[prop])
    })
  }

  raf(animate)

  return cancel
}

function inOutSine (n) {
  return .5 * (1 - Math.cos(Math.PI * n))
}

module.exports = {
  top: function (element, to, options, callback) {
    return scroll('scrollTop', element, to, options, callback)
  },
  left: function (element, to, options, callback) {
    return scroll('scrollLeft', element, to, options, callback)
  }
}


/***/ }),

/***/ "yalH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blueGrey = {
  50: '#eceff1',
  100: '#cfd8dc',
  200: '#b0bec5',
  300: '#90a4ae',
  400: '#78909c',
  500: '#607d8b',
  600: '#546e7a',
  700: '#455a64',
  800: '#37474f',
  900: '#263238',
  A100: '#cfd8dc',
  A200: '#b0bec5',
  A400: '#78909c',
  A700: '#455a64',
  contrastDefaultColor: 'light'
};

exports.default = blueGrey;

/***/ }),

/***/ "ygJi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTION_SET_NAME = "ACTION_SET_NAME";
exports.ACTION_POT = "ACTION_POT";
exports.ACTION_FAUL = "ACTION_FAUL";
exports.ACTION_FREEBALL = "ACTION_FREEBALL";
exports.ACTION_UNDO = "ACTION_UNDO";
exports.ACTION_FINAL_MISS = "ACTION_FINAL_MISS";
exports.ACTION_SET_START = "ACTION_SET_START";


/***/ }),

/***/ "ygfL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("9rdB");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("VJec");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIconCustom = global.__MUI_SvgIcon__ || _SvgIcon2.default;

var _ref = _react2.default.createElement('path', { d: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z' });

var Build = function Build(props) {
  return _react2.default.createElement(
    SvgIconCustom,
    props,
    _ref
  );
};

Build = (0, _pure2.default)(Build);
Build.muiName = 'SvgIcon';

exports.default = Build;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2")))

/***/ }),

/***/ "yt5j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__ = __webpack_require__("Een0");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react_router_es_matchPath__["a" /* default */]);

/***/ }),

/***/ "zFGm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ })

},["qMEF"]);
//# sourceMappingURL=app.1b4936239f10b5849074.bundle.js.map