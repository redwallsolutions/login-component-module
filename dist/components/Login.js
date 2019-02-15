import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './../assets/js/particlesjs-config.json';
import LoginContent from './LoginContent';
import { LoginFonts } from './Style';

var Login =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Login, _PureComponent);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(LoginFonts, null), React.createElement(Particles, {
        params: particlesConfig,
        style: {
          position: 'fixed',
          zIndex: 1,
          width: '100vw'
        }
      }), React.createElement(LoginContent, this.props));
    }
  }]);

  return Login;
}(PureComponent);

export default Login;