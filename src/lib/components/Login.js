import React, { PureComponent } from 'react'
import Particles from 'react-particles-js'
import { withTheme } from 'styled-components';
import comment from './../assets/img/comment.png';
import like from './../assets/img/like.png';
import person from './../assets/img/person.png';

import particlesConfig from './../assets/js/particlesjs-config.json'
import LoginContent from './LoginContent'
import {LoginFonts, getParticleColorStyled} from './Style'


class Login extends PureComponent {

  componentDidMount() {

  }

  render() {
    const { theme, appearance } = this.props;
    const {particles: {color, shape:{type, images}, ...rest}} = particlesConfig
    const themeColor = getParticleColorStyled({theme, appearance})
    const customType = 'images'
    const customImages = [{
      src: like,
      width: 1,
      height: 1
    }, {
      src: comment,
      width: 1,
      height: 1
    }, {
      src: person,
      width: 1,
      height: 1
    }]
    return (
      <>
        <LoginFonts/>
        <Particles params={{particles: {...rest, color: themeColor, shape: {type: customType, images: customImages}}}} style={{position:'fixed',zIndex:1, width: '100vw', height: '100vh'}}/>
        <LoginContent {...this.props}/>
      </>
    )
  }

}

Login.defaultProps = {
  appearance: 'default'
}

export default withTheme(Login)
