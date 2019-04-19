"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _shortid = _interopRequireDefault(require("shortid"));

var _lodash = _interopRequireDefault(require("lodash.assign"));

var _constants = require("../../utilities/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var propTypes = {
  /**
   * **Assistive text for accessibility**
   * * `label`: This label appears in the legend.
   */
  assistiveText: _propTypes.default.shape({
    label: _propTypes.default.string
  }),

  /**
   * Children are expected to be Radio components.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Custom CSS classes added to `slds-radio_button-group` node.
   */
  className: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),

  /**
   * **Text labels for internationalization**
   * This object is merged with the default props object on every render.
   * * `error`: Message to display when any of Checkboxes are in an error state.
   * * `label`: This label appears above the button group.
   */
  labels: _propTypes.default.shape({
    error: _propTypes.default.string,
    label: _propTypes.default.string
  }),

  /**
   * This event fires when the radio selection changes.
   */
  onChange: _propTypes.default.func,

  /**
   * Disable all radio inputs.
   */
  disabled: _propTypes.default.bool,

  /**
   * Adds an indicator that this field is required.
   */
  required: _propTypes.default.bool,

  /**
   * The name of this radio group.
   */
  name: _propTypes.default.string,

  /**
   * The ID of the error message, for linking to radio inputs with aria-describedby.
   */
  errorId: _propTypes.default.string
};
var defaultProps = {
  labels: {},
  assistiveText: {}
};
/**
 * A styled select list that can have a single entry checked at any one time.
 * The RadioButtonGroup component wraps [Radio](/components/radios) components, which should be used as children.
 */

var RadioButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioButtonGroup, _React$Component);

  function RadioButtonGroup(props) {
    var _this;

    _classCallCheck(this, RadioButtonGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioButtonGroup).call(this, props)); // Merge objects of strings with their default object

    _this.labels = _this.props.labels ? (0, _lodash.default)({}, defaultProps.labels, _this.props.labels) : defaultProps.labels;
    _this.generatedName = _shortid.default.generate();
    _this.generatedErrorId = _this.labels.error ? _shortid.default.generate() : null;
    return _this;
  }

  _createClass(RadioButtonGroup, [{
    key: "getErrorId",
    value: function getErrorId() {
      if (this.hasError()) {
        return this.props.errorId || this.generatedErrorId;
      }

      return undefined;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.props.name || this.generatedName;
    }
  }, {
    key: "hasError",
    value: function hasError() {
      return !!this.labels.error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = _react.default.Children.map(this.props.children, function (child) {
        return _react.default.cloneElement(child, {
          name: _this2.getName(),
          onChange: _this2.props.onChange,
          'aria-describedby': _this2.getErrorId(),
          disabled: _this2.props.disabled
        });
      });

      return _react.default.createElement("fieldset", {
        className: (0, _classnames.default)('slds-form-element', {
          'slds-has-error': this.labels.error
        })
      }, _react.default.createElement("legend", {
        className: (0, _classnames.default)('slds-form-element__legend', 'slds-form-element__label', this.props.assistiveText.label ? 'slds-assistive-text' : '')
      }, this.props.required ? _react.default.createElement("abbr", {
        className: "slds-required",
        title: "required"
      }, "*") : null, this.props.assistiveText.label ? this.props.assistiveText.label : this.labels.label), _react.default.createElement("div", {
        className: (0, _classnames.default)('slds-form-element__control', this.props.className)
      }, _react.default.createElement("div", {
        style: this.props.style,
        className: "slds-radio_button-group"
      }, children), this.labels.error ? _react.default.createElement("div", {
        id: this.getErrorId(),
        className: "slds-form-element__help"
      }, this.labels.error) : null));
    }
  }]);

  return RadioButtonGroup;
}(_react.default.Component);

RadioButtonGroup.displayName = _constants.RADIO_BUTTON_GROUP;
RadioButtonGroup.propTypes = propTypes;
RadioButtonGroup.defaultProps = defaultProps;
var _default = RadioButtonGroup;
exports.default = _default;