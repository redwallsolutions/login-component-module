import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Background, Box, BoxHeader, BoxHeaderImg, FormGroup, BoxTitle, ButtonStyled, Text, SubtleLink} from './Style';
import { Form } from 'informed';
import Field from './Field';
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
  }

  isBack = () => this.state.isBackFace

  isFirstTime = () => this.firstTime

  extractFrontFormApi = (formApi) => {
    this.formApi = formApi
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
  render() {
    const {frontTitle, frontButtonText, frontButtonLoadingText,
          backTitle, backButtonText, backButtonLoadingText} = this.props;
    return (
      <React.Fragment>
        <Background>
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
                subtleText={<SubtleLink style={{position: 'relative',left: '2em'}}>Esqueci a senha</SubtleLink>}
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
              <SubtleLink onClick={this.toggleFace}>
                <Text>
                  Quero criar uma conta!
                </Text>
              </SubtleLink>
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
                  <SubtleLink onClick={this.toggleFace}>
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
      </React.Fragment>
    );
  }
}

LoginContent.propTypes = {
  frontTitle: PropTypes.string,
  backTitle: PropTypes.string,
  frontButtonText: PropTypes.string,
  backButtonText: PropTypes.string,
  frontButtonLoadingText: PropTypes.string,
  backButtonLoadingText: PropTypes.string,
  frontOnSubmit: PropTypes.func,
  isBackFace: PropTypes.bool
}

LoginContent.defaultProps = {
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
  },
  isBackFace: false
}

export default LoginContent;
