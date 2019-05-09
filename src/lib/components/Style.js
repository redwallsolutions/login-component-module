import styled, {createGlobalStyle, keyframes, css} from 'styled-components';
import Color from 'color';
import Theming from 'theming-component-module';

const theme = Theming.createThemeWithAppearance()

const defaultProps = {
  theme: 'light',
  appearance: 'default'
}

const primaryColor = 'red';
const invalidColor = 'red';

export const LoginFonts = createGlobalStyle `
  .login-component-module {
    font-family: Aria, Helvetica, Tahoma, Geneva, sans-serif;
  }

  .login-component-module * {
    box-sizing: border-box;
  }
`

export const Background = styled.div `
  position: relative;
  background: ${props => theme(props).contrast};
  box-shadow: 0 0 200px 0px ${props => Color(theme(props).contrast(props)).darken(0.2).grayscale().string()} inset;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

Background.defaultProps = defaultProps

const comin = keyframes`
  0% {
    transform: perspective(50em) scale(0) rotateY(180deg);
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(0);
  }
`

const flipFront = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: perspective(50em) scale(.7) rotateY(180deg);
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(180deg);
  }
`

const flipFrontReverse = keyframes`
  0% {
    transform: perspective(50em) scale(.7) rotateY(180deg);
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(0deg);
  }
`

const flipFrontAnimationProps = css`
  animation: ${flipFront} 2s ease-in-out both;
`

const flipFrontAnimationPropsReverse = css`
  animation: ${flipFrontReverse} 1s ease-in-out both;
`

const flipBack = keyframes`
  0% {
    transform: perspective(50em) scale(.7) rotateY(-180deg);
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(0deg);
    opacity: 1;
  }
`

const flipBackReverse = keyframes`
  0% {
    transform: rotateY(0deg);
    opacity: 1;
  }
  50% {
    transform: perspective(50em) scale(.7) rotateY(-170deg);
    opacity: 1;
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(-170deg);
    opacity: 0;
}
`

const flipBackAnimationProps = css`
  animation: ${flipBack} 1s ease-in-out both;
`
const flipBackAnimationPropsReverse = css`
  animation: ${flipBackReverse} 2s ease-in-out both;
`

export const Box = styled.div `
  box-shadow: 0 0 0.5px 0 rgba(0,0,0,.2), 0 0 150px 0 ${props => Color(theme(props).contrast(props)).darken(.1).grayscale().string()};
  background-color: ${props => Color(theme(props).contrast(props)).lighten(0.5).string()};
  width: 35vw;
  height: 100%;
  z-index: 1;
  position: absolute;
  &.front,&.back {
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  &.back {
    transform:rotateY(-180deg);
    ${props=>props.isBack && !props.isFirstTime && flipBackAnimationProps};
    ${props=>!props.isBack && !props.isFirstTime && flipBackAnimationPropsReverse};
    ${props=>props.isBack && props.isFirstTime && flipBackAnimationProps};
    opacity: 0;
  }

  &.front {
    animation: ${props=> props.isFirstTime && !props.isBack ? comin : ''} 3s cubic-bezier(0,1.06,0,.99) .3s both;
    ${props=> (!props.isFirstTime && props.isBack) && flipFrontAnimationProps}
    ${props=> (!props.isFirstTime && !props.isBack) && flipFrontAnimationPropsReverse}
    ${props=> (props.isFirstTime && props.isBack) && flipFrontAnimationProps}
  }

  @media (max-width: 768px){
    width: 70vw;
  }

  @media (max-width: 415px) {
    width: 100vw;
  }

`

Box.defaultProps = defaultProps

export const BoxHeader = styled.div `
  background-color: ${props=> props.isBack ? 'white' : theme(props).color};
  box-shadow: 0 0 80px 0 ${props => Color(theme(props).color(props)).grayscale().fade(.8).string()} inset;
  height: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
`

BoxHeader.defaultProps = defaultProps

export const BoxHeaderImg = styled.img `
  height: 40%;

  @media (max-width: 769px) {
    height: 30%;
  }
`

export const BoxTitle = styled.h2 `
  color: ${props => Color(theme(props).color(props)).grayscale().fade(.3).string()};
  text-align: center;
  ::after {
    content: ".";
    color: ${props => theme(props).color};
    font-size: 40px;
  }
`

BoxTitle.defaultProps = defaultProps

export const FormGroup = styled.div`
  display: flex;
  width: 70%;
  justify-content: ${props => props.justify};
  align-items: center;
`

FormGroup.defaultProps = {
  justify: 'center'
}

export const SubtleLink = styled.a`
  opacity: .7;
  font-size: 12px;
  cursor: pointer;
  color: ${props => Color(theme(props).color(props)).fade(.3).grayscale().string()};
  &:active,&:focus,&:hover {
    color: ${props => Color(theme(props).color(props)).grayscale().string()};
  }
`
export const Text = styled.p`
  margin: 3em 0 0 0;
  font-size: 16px;
  text-align: center;
  color: ${props => Color(theme(props).color(props)).fade(.3).string()};
  transition: color .3s;
  &:hover,&:focus,&:active {
    color: ${props => Color(theme(props).color(props)).grayscale().string()};
  }
`

SubtleLink.defaultProps = Text.defaultProps = defaultProps

export const getParticleColorStyled = (props) => {
  return {
    value: Color(theme(props).color(props)).hex()
  }
}
