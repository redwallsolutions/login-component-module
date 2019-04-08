import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Form } from 'informed';
import { InputField } from 'form-component-module';
import { FormGroup, ButtonStyled } from './Style';

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

      _this.props.onSubmit(formObject);
    };

    _this.exposeBoxController = function () {
      return {
        toggleButtonLoading: _this.toggleButtonLoading
      };
    };

    _this.renderFormGroups = function () {
      return _this.props.formGroups && _this.props.formGroups.map(function (formGroup) {
        return React.createElement(FormGroup, {
          key: formGroup.name,
          justify: formGroup.justify || 'center'
        }, React.createElement(InputField, {
          field: formGroup.name,
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getBoxController(this.exposeBoxController());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          buttonText = _this$props.buttonText,
          buttonLoadingText = _this$props.buttonLoadingText,
          subtleText = _this$props.subtleText;
      return React.createElement(Form, {
        onSubmit: this.onSubmit,
        getApi: this.props.getFormApi,
        autocomplete: "off"
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
      }, buttonText))));
    }
  }]);

  return BoxContent;
}(Component);

BoxContent.defaultProps = {
  buttonText: 'Submit',
  buttonLoadingText: 'Submiting',
  onSubmit: function onSubmit() {
    return console.log("submited");
  },
  getFormApi: function getFormApi(formApi) {
    console.log("Form Api ", formApi);
  }
};
export default BoxContent;