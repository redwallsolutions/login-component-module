import React, {Component} from 'react';
import {Background, Box, BoxHeader, BoxHeaderImg, FormGroup, SubtleLink} from './Style';
import { Form } from 'informed';
import Field from './Field';
import RedwallLogoLight from '../assets/img/redwall-logo-light.png';
import { FaUserAlt , FaLock} from 'react-icons/fa';
import { BoxTitle, ButtonStyled, Text } from './Style';
import {Link, HashRouter, NavLink, Route} from 'react-router-dom';

import Particles from 'react-particles-js';
import particlesConfig from './../assets/js/particlesjs-config.json';
class Login extends Component {

  constructor(props) {
    super(props);
    this.firstTime = true;
  }

  componentDidMount() {
    this.firstTime = false;
  }

  isBack = () => window.location.hash === '#/new';
  isFirstTime = () => this.firstTime;
  render() {
    const {title, buttonText} = this.props;
    return (
      <React.Fragment>
        <Particles params={particlesConfig} style={{position:'fixed',zIndex:1, width: '100vw'}}/>
        <Background>
          <HashRouter>
            <Route path='/' render={()=>(
              <React.Fragment>
                <Box className='front' isBack={this.isBack()} isFirstTime={this.isFirstTime()}>
                  <BoxHeader isBack={false}>
                    <BoxHeaderImg src={RedwallLogoLight}/>
                  </BoxHeader>
                  <BoxTitle>{title}</BoxTitle>
                  <Form>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <FormGroup>
                        <Field field='login' placeholder='Username' icon={<FaUserAlt/>}/>
                      </FormGroup>
                      <FormGroup>
                        <Field type='password' field='password' placeholder='Password' icon={<FaLock/>}/>
                      </FormGroup>
                      <FormGroup justify='space-between'>
                        <SubtleLink style={{position: 'relative',left: '2em'}}>
                          Esqueci a senha
                        </SubtleLink>
                        <ButtonStyled>
                          {buttonText}
                        </ButtonStyled>
                      </FormGroup>
                    </div>
                  </Form>
                  <Link to="/new">
                    <Text>
                      Quero criar uma conta!
                    </Text>
                  </Link>
                </Box>
                <Box className='back' isBack={this.isBack()} isFirstTime={this.isFirstTime()}>
                  <BoxHeader isBack={true}>
                    <BoxHeaderImg src={RedwallLogoLight}/>
                  </BoxHeader>
                </Box>
              </React.Fragment>
            )}/>
          </HashRouter>
        </Background>
      </React.Fragment>
    );
  }

}

export default Login;
