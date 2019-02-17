import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Background, Box, BoxHeader, BoxHeaderImg, BoxTitle, Text, SubtleLink } from './Style';
import BoxContent from './BoxContent';
import RedwallLogoLight from '../assets/img/redwall-logo-light.png';
import RedwallLogoDark from '../assets/img/redwall-logo-dark.png';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';

var LoginContent =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginContent, _Component);

  function LoginContent(props) {
    var _this;

    _classCallCheck(this, LoginContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginContent).call(this, props));
    _this.state = {
      frontButtonIsLoading: false,
      backButtonIsLoading: false,
      isBackFace: _this.props.isBackFace
    };

    _this.isBack = function () {
      return _this.state.isBackFace;
    };

    _this.isFirstTime = function () {
      return _this.firstTime;
    };

    _this.extractFrontFormApi = function (formApi) {
      _this.frontFormApi = formApi;
    };

    _this.extractBackFormApi = function (formApi) {
      _this.backFormApi = formApi;
    };

    _this.extractFrontBoxController = function (boxController) {
      _this.frontBoxController = boxController;
    };

    _this.extractBackBoxController = function (boxController) {
      _this.backBoxController = boxController;
    };

    _this.frontOnSubmit = function (data) {
      _this.props.frontOnSubmit(data);
    };

    _this.backOnSubmit = function (data) {
      _this.props.backOnSubmit(data);
    };

    _this.toggleFace = function () {
      _this.setState({
        isBackFace: !_this.state.isBackFace
      });
    };

    _this.setFrontFace = function () {
      if (_this.state.isBackFace) {
        _this.setState({
          isBackFace: false
        });
      }
    };

    _this.setBackFace = function () {
      if (!_this.state.isBackFace) {
        _this.setState({
          isBackFace: true
        });
      }
    };

    _this.toggleFrontFaceButtonLoading = function () {
      _this.frontBoxController.toggleButtonLoading();
    };

    _this.toggleBackFaceButtonLoading = function () {
      _this.backBoxController.toggleButtonLoading();
    };

    _this.clearFrontFaceInput = function () {
      _this.frontFormApi.reset();
    };

    _this.clearBackFaceInput = function () {
      _this.backFormApi.reset();
    };

    _this.exposeLoginController = function () {
      return {
        toggleFace: _this.toggleFace,
        setFrontFace: _this.setFrontFace,
        setBackFace: _this.setBackFace,
        clearFrontFaceInput: _this.clearFrontFaceInput,
        clearBackFaceInput: _this.clearBackFaceInput,
        toggleFrontFaceButtonLoading: _this.toggleFrontFaceButtonLoading,
        toggleBackFaceButtonLoading: _this.toggleBackFaceButtonLoading
      };
    };

    _this.firstTime = true;
    return _this;
  }

  _createClass(LoginContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.firstTime = false;
      this.props.getLoginController(this.exposeLoginController());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          frontTitle = _this$props.frontTitle,
          frontButtonText = _this$props.frontButtonText,
          frontButtonLoadingText = _this$props.frontButtonLoadingText,
          backTitle = _this$props.backTitle,
          backButtonText = _this$props.backButtonText,
          backButtonLoadingText = _this$props.backButtonLoadingText;
      return React.createElement(React.Fragment, null, React.createElement(Background, null, React.createElement(React.Fragment, null, React.createElement(Box, {
        className: "front",
        isBack: this.isBack(),
        isFirstTime: this.isFirstTime()
      }, React.createElement(BoxHeader, {
        isBack: false
      }, React.createElement(BoxHeaderImg, {
        src: RedwallLogoLight
      })), React.createElement(BoxTitle, null, frontTitle), React.createElement(BoxContent, {
        getBoxController: this.extractFrontBoxController,
        getFormApi: this.extractFrontFormApi,
        buttonText: frontButtonText,
        buttonLoadingText: frontButtonLoadingText,
        onSubmit: this.frontOnSubmit,
        subtleText: React.createElement(SubtleLink, {
          style: {
            position: 'relative',
            left: '2em'
          }
        }, "Esqueci a senha"),
        formGroups: [{
          name: 'email',
          type: 'email',
          icon: React.createElement(FaEnvelope, null),
          placeholder: 'E-mail'
        }, {
          name: 'password',
          type: 'password',
          icon: React.createElement(FaLock, null),
          placeholder: 'Senha'
        }]
      }), React.createElement(SubtleLink, {
        onClick: this.toggleFace
      }, React.createElement(Text, null, "Quero criar uma conta!"))), React.createElement(Box, {
        className: "back",
        isBack: this.isBack(),
        isFirstTime: this.isFirstTime()
      }, React.createElement(BoxHeader, {
        isBack: true
      }, React.createElement(BoxHeaderImg, {
        src: RedwallLogoDark
      })), React.createElement(BoxTitle, null, backTitle), React.createElement(BoxContent, {
        getBoxController: this.extractBackBoxController,
        getFormApi: this.extractBackFormApi,
        buttonText: backButtonText,
        buttonLoadingText: backButtonLoadingText,
        onSubmit: this.backOnSubmit,
        subtleText: React.createElement(SubtleLink, {
          onClick: this.toggleFace
        }, "Voltar para login"),
        formGroups: [{
          name: 'fullName',
          placeholder: 'Nome Completo',
          type: 'text',
          icon: React.createElement(FaUserAlt, null)
        }, {
          name: 'email',
          type: 'email',
          icon: React.createElement(FaEnvelope, null),
          placeholder: 'Seu melhor email'
        }, {
          name: 'password',
          type: 'password',
          icon: React.createElement(FaLock, null),
          placeholder: 'Senha'
        }]
      })))));
    }
  }]);

  return LoginContent;
}(Component);

LoginContent.defaultProps = {
  frontTitle: 'Faça Login',
  backTitle: 'Cadastre-se',
  frontButtonText: 'Entrar',
  backButtonText: 'Cadastrar',
  frontButtonLoadingText: 'Entrando',
  backButtonLoadingText: 'Cadastrando',
  frontOnSubmit: function frontOnSubmit(data) {
    setTimeout(function () {
      data.component.toggleButtonLoading();
    }, 500);
  },
  backOnSubmit: function backOnSubmit(data) {
    setTimeout(function () {
      data.component.toggleButtonLoading();
    }, 500);
  },
  isBackFace: false,
  getLoginController: function getLoginController(loginController) {
    console.log("Login controller ".concat(loginController));
  }
};
export default LoginContent;