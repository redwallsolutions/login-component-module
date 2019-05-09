import React, { PureComponent } from 'react'
import Particles from 'react-particles-js'
import { withTheme } from 'styled-components';

import particlesConfig from './../assets/js/particlesjs-config.json'
import LoginContent from './LoginContent'
import {LoginFonts, getParticleColorStyled} from './Style'


class Login extends PureComponent {

  render() {
    const { theme, appearance } = this.props;
    const {particles: {color, ...rest}} = particlesConfig
    const themeColor = getParticleColorStyled({theme, appearance})
    return (
      <>
        <LoginFonts/>
        <Particles params={{particles: {...rest, color: themeColor}}} style={{position:'fixed',zIndex:1, width: '100vw', height: '100vh'}}/>
        <LoginContent {...this.props}/>
      </>
    )
  }

}

Login.defaultProps = {
  appearance: 'default'
}

export default withTheme(Login)
