import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Background, Box, BoxHeader, BoxHeaderImg, FormGroup, SubtleText, BoxTitle, ButtonStyled, Text, NavLinkStyled} from './Style';
import { Form } from 'informed';
import Field from './Field';
import BoxContent from './BoxContent';
import RedwallLogoLight from '../assets/img/redwall-logo-light.png';
import RedwallLogoDark from '../assets/img/redwall-logo-dark.png';
import { FaUserAlt , FaLock, FaEnvelope} from 'react-icons/fa';
import { HashRouter, Route} from 'react-router-dom';
import Particles from 'react-particles-js';
import particlesConfig from './../assets/js/particlesjs-config.json';
class Login extends Component {

  constructor(props) {
    super(props);
    this.firstTime = true;
  }

  state = {
    frontButtonIsLoading: false,
    backButtonIsLoading: false
  }

  componentDidMount() {
    this.firstTime = false;
  }

  isBack = () => window.location.hash === '#/new';
  isFirstTime = () => this.firstTime;
  extractFrontFormApi = (formApi) => {
    this.formApi = formApi;
  }

  frontOnSubmit = (data) => {
    this.props.frontOnSubmit(data);
  }

  backOnSubmit = (data) => {
    this.props.backOnSubmit(data);
  }
  render() {
    const {frontTitle, frontButtonText, frontButtonLoadingText,
          backTitle, backButtonText, backButtonLoadingText} = this.props;
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
                  <BoxTitle>{frontTitle}</BoxTitle>
                  <BoxContent
                    buttonText={frontButtonText}
                    buttonLoadingText={frontButtonLoadingText}
                    onSubmit={this.frontOnSubmit}
                    subtleText={<SubtleText style={{position: 'relative',left: '2em'}}>Esqueci a senha</SubtleText>}
                    formGroups={[{
                      name:'email',
                      type:'email',
                      icon:<FaEnvelope/>,
                      placeholder:'E-mail'
                    }, {
                      name:'password',
                      type: 'password',
                      icon: <FaLock/>,
                      placeholder: 'Senha'
                    }]}/>
                  <NavLinkStyled to='/new'>
                    <Text>
                      Quero criar uma conta!
                    </Text>
                  </NavLinkStyled>
                </Box>
                <Box className='back' isBack={this.isBack()} isFirstTime={this.isFirstTime()}>
                  <BoxHeader isBack={true}>
                    <BoxHeaderImg src={RedwallLogoDark}/>
                  </BoxHeader>
                  <BoxTitle>
                    {backTitle}
                  </BoxTitle>
                  <BoxContent
                    buttonText={backButtonText}
                    buttonLoadingText={backButtonLoadingText}
                    onSubmit={this.backOnSubmit}
                    subtleText={
                      <NavLinkStyled to='/'>
                        <SubtleText>
                          Voltar para login
                        </SubtleText>
                      </NavLinkStyled>
                    }
                    formGroups={[{
                      name:'fullName',
                      placeholder:'Nome Completo',
                      type: 'text',
                      icon:<FaUserAlt/>
                    }, {
                      name:'email',
                      type:'email',
                      icon:<FaEnvelope/>,
                      placeholder:'Seu melhor email'
                    }, {
                      name:'password',
                      type: 'password',
                      icon: <FaLock/>,
                      placeholder: 'Senha'
                    }]}/>
                </Box>
              </React.Fragment>
            )}/>
          </HashRouter>
        </Background>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  frontTitle: PropTypes.string,
  backTitle: PropTypes.string,
  frontButtonText: PropTypes.string,
  backButtonText: PropTypes.string,
  frontButtonLoadingText: PropTypes.string,
  backButtonLoadingText: PropTypes.string,
  frontOnSubmit: PropTypes.func
}

Login.defaultProps = {
  frontTitle: 'Faça Login',
  backTitle: 'Cadastre-se',
  frontButtonText: 'Entrar',
  backButtonText: 'Cadastrar',
  frontButtonLoadingText: 'Entrando',
  backButtonLoadingText: 'Cadastrando',
  frontOnSubmit: (data)=>{
    setTimeout(function () {
      data.component.toggleButtonLoading();
    }, 500);
  },
  backOnSubmit: (data)=>{
    setTimeout(function () {
      data.component.toggleButtonLoading();
    }, 500);
  }
}

export default Login;
