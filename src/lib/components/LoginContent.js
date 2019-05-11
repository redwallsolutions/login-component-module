import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Background, Box, BoxHeader, BoxHeaderImg, BoxTitle, Text, SubtleLink} from './Style';
import BoxContent from './BoxContent';
import RedwallLogoLight from '../assets/img/redwall-logo-light.png';
import RedwallLogoDark from '../assets/img/redwall-logo-dark.png';
import { FaUserAlt , FaLock, FaEnvelope} from 'react-icons/fa';
class LoginContent extends Component {

  constructor(props) {
    super(props);
    this.firstTime = true;
  }

  state = {
    frontButtonIsLoading: false,
    backButtonIsLoading: false,
    isBackFace: this.props.isBackFace
  }

  componentDidMount() {
    this.firstTime = false
    this.props.getLoginController(this.exposeLoginController())
  }

  isBack = () => this.state.isBackFace

  isFirstTime = () => this.firstTime

  extractFrontFormApi = (formApi) => {
    this.frontFormApi = formApi
  }

  extractBackFormApi = (formApi) => {
    this.backFormApi = formApi
  }

  extractFrontBoxController = (boxController) =>{
    this.frontBoxController = boxController
  }

  extractBackBoxController = (boxController) =>{
    this.backBoxController = boxController
  }

  frontOnSubmit = (data) => {
    this.props.frontOnSubmit(data);
  }

  backOnSubmit = (data) => {
    this.props.backOnSubmit(data);
  }

  toggleFace = () => {
    this.setState({
      isBackFace: !this.state.isBackFace
    });
  }

  setFrontFace = () => {
    if(this.state.isBackFace) {
      this.setState({
        isBackFace: false
      });
    }
  }

  setBackFace = () => {
    if(!this.state.isBackFace) {
      this.setState({
        isBackFace:true
      });
    }
  }

  toggleFrontFaceButtonLoading = () => {
    this.frontBoxController.toggleButtonLoading()
  }

  toggleBackFaceButtonLoading = () => {
    this.backBoxController.toggleButtonLoading()
  }

  clearFrontFaceInput = () => {
    this.frontFormApi.reset()
  }

  clearBackFaceInput = () => {
    this.backFormApi.reset()
  }

  exposeLoginController = () => ({
    toggleFace: this.toggleFace,
    setFrontFace: this.setFrontFace,
    setBackFace: this.setBackFace,
    clearFrontFaceInput: this.clearFrontFaceInput,
    clearBackFaceInput: this.clearBackFaceInput,
    toggleFrontFaceButtonLoading: this.toggleFrontFaceButtonLoading,
    toggleBackFaceButtonLoading: this.toggleBackFaceButtonLoading

  })


  render() {
    const {frontTitle, frontButtonText,
          backTitle, backButtonText, appearance, endText} = this.props;
    return (
      <Background appearance={appearance} className='login-component-module'>
        <React.Fragment>
          <Box appearance={appearance} className='front' isBack={this.isBack()} isFirstTime={this.isFirstTime()}>
            <BoxHeader appearance={appearance} isBack={false}>
              <BoxHeaderImg appearance={appearance} src={RedwallLogoLight}/>
            </BoxHeader>
            <BoxTitle appearance={appearance}>{frontTitle}</BoxTitle>
            <BoxContent
              appearance={appearance}
              getBoxController={this.extractFrontBoxController}
              getFormApi={this.extractFrontFormApi}
              buttonText={frontButtonText}
              onSubmit={this.frontOnSubmit}
              subtleText={
                <SubtleLink style={{position: 'relative',left: '2em'}} onClick={this.props.frontOnSubtleLinkClick}>
                  Esqueci a senha
                </SubtleLink>
              }
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
            <SubtleLink appearance={appearance} onClick={this.toggleFace}>
              <Text appearance={appearance}>
                {endText}
              </Text>
            </SubtleLink>
          </Box>
          <Box appearance={appearance} className='back' isBack={this.isBack()} isFirstTime={this.isFirstTime()}>
            <BoxHeader appearance={appearance} isBack={true}>
              <BoxHeaderImg appearance={appearance} src={RedwallLogoDark}/>
            </BoxHeader>
            <BoxTitle appearance={appearance}>
              {backTitle}
            </BoxTitle>
            <BoxContent
              appearance={appearance}
              getBoxController={this.extractBackBoxController}
              getFormApi={this.extractBackFormApi}
              buttonText={backButtonText}
              onSubmit={this.backOnSubmit}
              subtleText={
                <SubtleLink appearance={appearance} onClick={this.toggleFace}>
                  Voltar para login
                </SubtleLink>
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
      </Background>
    );
  }
}

LoginContent.propTypes = {
  frontTitle: PropTypes.string,
  backTitle: PropTypes.string,
  frontButtonText: PropTypes.string,
  backButtonText: PropTypes.string,
  endText: PropTypes.string,
  frontButtonLoadingText: PropTypes.string,
  backButtonLoadingText: PropTypes.string,
  frontOnSubmit: PropTypes.func,
  frontOnSubtleLinkClick: PropTypes.func,
  isBackFace: PropTypes.bool,
  getLoginController: PropTypes.func
}

LoginContent.defaultProps = {
  frontTitle: 'Faça Login',
  backTitle: 'Cadastre-se',
  frontButtonText: 'Entrar',
  backButtonText: 'Cadastrar',
  frontButtonLoadingText: 'Entrando',
  backButtonLoadingText: 'Cadastrando',
  endText: 'Faça sua conta agora',
  frontOnSubtleLinkClick: () => {
    console.log("subtleText clicked")
  },
  frontOnSubmit: (data)=>{
    setTimeout(function () {
      data.component.toggleButtonLoading();
    }, 500);
  },
  backOnSubmit: (data)=>{
    setTimeout(function () {
      data.component.toggleButtonLoading();
    }, 500);
  },
  isBackFace: false,
  getLoginController: (loginController) => {
    console.log(`Login controller ${loginController}`);
  }
}

export default LoginContent;
