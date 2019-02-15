import React, { PureComponent } from 'react'
import Particles from 'react-particles-js'
import particlesConfig from './../assets/js/particlesjs-config.json'
import LoginContent from './LoginContent'
import {LoginFonts} from './Style'
class Login extends PureComponent {

  render() {
    return (
      <React.Fragment>
        <LoginFonts/>
        <Particles params={particlesConfig} style={{position:'fixed',zIndex:1, width: '100vw'}}/>
        <LoginContent {...this.props}/>
      </React.Fragment>
    )
  }

}

export default Login
