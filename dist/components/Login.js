import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import { Background, Box, BoxHeader, BoxHeaderImg, FormGroup, SubtleText, BoxTitle, ButtonStyled, Text, NavLinkStyled } from './Style';
import { Form } from 'informed';
import Field from './Field';
import BoxContent from './BoxContent';
import RedwallLogoLight from '../assets/img/redwall-logo-light.png';
import RedwallLogoDark from '../assets/img/redwall-logo-dark.png';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import { HashRouter, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from './../assets/js/particlesjs-config.json';

var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));
    _this.state = {
      frontButtonIsLoading: false,
      backButtonIsLoading: false
    };

    _this.isBack = function () {
      return window.location.hash === '#/new';
    };

    _this.isFirstTime = function () {
      return _this.firstTime;
    };

    _this.extractFrontFormApi = function (formApi) {
      _this.formApi = formApi;
    };

    _this.frontOnSubmit = function (data) {
      _this.props.frontOnSubmit(data);
    };

    _this.backOnSubmit = function (data) {
      _this.props.backOnSubmit(data);
    };

    _this.firstTime = true;
    return _this;
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.firstTime = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          frontTitle = _this$props.frontTitle,
          frontButtonText = _this$props.frontButtonText,
          frontButtonLoadingText = _this$props.frontButtonLoadingText,
          backTitle = _this$props.backTitle,
          backButtonText = _this$props.backButtonText,
          backButtonLoadingText = _this$props.backButtonLoadingText;
      return React.createElement(React.Fragment, null, React.createElement(Particles, {
        params: particlesConfig,
        style: {
          position: 'fixed',
          zIndex: 1,
          width: '100vw'
        }
      }), React.createElement(Background, null, React.createElement(HashRouter, null, React.createElement(Route, {
        path: "/",
        render: function render() {
          return React.createElement(React.Fragment, null, React.createElement(Box, {
            className: "front",
            isBack: _this2.isBack(),
            isFirstTime: _this2.isFirstTime()
          }, React.createElement(BoxHeader, {
            isBack: false
          }, React.createElement(BoxHeaderImg, {
            src: RedwallLogoLight
          })), React.createElement(BoxTitle, null, frontTitle), React.createElement(BoxContent, {
            buttonText: frontButtonText,
            buttonLoadingText: frontButtonLoadingText,
            onSubmit: _this2.frontOnSubmit,
            subtleText: React.createElement(SubtleText, {
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
          }), React.createElement(NavLinkStyled, {
            to: "/new"
          }, React.createElement(Text, null, "Quero criar uma conta!"))), React.createElement(Box, {
            className: "back",
            isBack: _this2.isBack(),
            isFirstTime: _this2.isFirstTime()
          }, React.createElement(BoxHeader, {
            isBack: true
          }, React.createElement(BoxHeaderImg, {
            src: RedwallLogoDark
          })), React.createElement(BoxTitle, null, backTitle), React.createElement(BoxContent, {
            buttonText: backButtonText,
            buttonLoadingText: backButtonLoadingText,
            onSubmit: _this2.backOnSubmit,
            subtleText: React.createElement(NavLinkStyled, {
              to: "/"
            }, React.createElement(SubtleText, null, "Voltar para login")),
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
          })));
        }
      }))));
    }
  }]);

  return Login;
}(Component);

Login.defaultProps = {
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
  }
};
export default Login;