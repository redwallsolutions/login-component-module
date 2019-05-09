import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import Particles from 'react-particles-js';
import { withTheme } from 'styled-components';
import particlesConfig from './../assets/js/particlesjs-config.json';
import LoginContent from './LoginContent';
import { LoginFonts, getParticleColorStyled } from './Style';

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
      var _this$props = this.props,
          theme = _this$props.theme,
          appearance = _this$props.appearance;

      var _particlesConfig$part = particlesConfig.particles,
          color = _particlesConfig$part.color,
          rest = _objectWithoutProperties(_particlesConfig$part, ["color"]);

      var themeColor = getParticleColorStyled({
        theme: theme,
        appearance: appearance
      });
      return React.createElement(React.Fragment, null, React.createElement(LoginFonts, null), React.createElement(Particles, {
        params: {
          particles: _objectSpread({}, rest, {
            color: themeColor
          })
        },
        style: {
          position: 'fixed',
          zIndex: 1,
          width: '100vw',
          height: '100vh'
        }
      }), React.createElement(LoginContent, this.props));
    }
  }]);

  return Login;
}(PureComponent);

Login.defaultProps = {
  appearance: 'default'
};
export default withTheme(Login);