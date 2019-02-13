import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Form } from 'informed';
import Field from './Field';
import { FormGroup, SubtleText, ButtonStyled } from './Style';
import { FaLock, FaUserAlt } from 'react-icons/fa';

var BoxContent =
/*#__PURE__*/
function (_Component) {
  _inherits(BoxContent, _Component);

  function BoxContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BoxContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BoxContent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      buttonIsLoading: false
    };

    _this.toggleButtonLoading = function () {
      _this.setState({
        buttonIsLoading: !_this.state.buttonIsLoading
      });
    };

    _this.onSubmit = function (formObject) {
      _this.setState({
        buttonIsLoading: true
      });

      _this.props.onSubmit({
        component: {
          toggleButtonLoading: _this.toggleButtonLoading,
          formObject: formObject
        }
      });
    };

    _this.renderFormGroups = function () {
      return _this.props.formGroups && _this.props.formGroups.map(function (formGroup) {
        return React.createElement(FormGroup, {
          key: formGroup.name,
          justify: formGroup.justify || 'center'
        }, React.createElement(Field, {
          name: formGroup.name,
          type: formGroup.type,
          placeholder: formGroup.placeholder,
          icon: formGroup.icon
        }));
      }) || React.createElement("p", {
        style: {
          textAlign: 'center'
        }
      }, "No content.");
    };

    return _this;
  }

  _createClass(BoxContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttonText = _this$props.buttonText,
          buttonLoadingText = _this$props.buttonLoadingText,
          subtleText = _this$props.subtleText;
      return React.createElement(Form, {
        onSubmit: this.onSubmit
      }, React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }
      }, this.renderFormGroups(), React.createElement(FormGroup, {
        justify: "space-between",
        style: {
          marginTop: '1em'
        }
      }, subtleText, React.createElement(ButtonStyled, {
        disabled: this.state.buttonIsLoading,
        type: "submit"
      }, this.state.buttonIsLoading ? buttonLoadingText + '...' : buttonText))));
    }
  }]);

  return BoxContent;
}(Component);

BoxContent.defaultProps = {
  buttonText: 'Submit',
  buttonLoadingText: 'Submiting',
  onSubmit: function onSubmit() {
    return console.log("submited");
  }
};
export default BoxContent;