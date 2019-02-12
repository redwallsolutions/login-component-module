import styled, {createGlobalStyle, keyframes, css} from 'styled-components';
// import pattern from '../assets/img/pattern.jpg';
import Poppins from '../assets/fonts/Poppins-Regular.ttf';

export const LoginFonts = createGlobalStyle `
  @font-face {
    font-family: Poppins;
    src: url(${Poppins}), format("TrueType");
    font-display: fallback;
  }

  body {
    padding: 0;
    margin: 0;
    overflow:hidden;
    font-family: Poppins, sans-serif;
  }
`

const backgroundGradientColor = 'linear-gradient(180deg, rgba(10,10,10, 0.96), rgba(30, 30, 30, 0.96))';
const primaryColor = 'rgb(45, 99, 122)';

export const Background = styled.div `
  background: ${backgroundGradientColor};
  box-shadow: 0 0 200px 0px rgb(0,0,0) inset;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
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
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(0deg);
  }
`

const flipBackReverse = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: perspective(50em) scale(.7) rotateY(-170deg);
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(-170deg);
}
`

const flipBackAnimationProps = css`
  animation: ${flipBack} 1s ease-in-out both;
`
const flipBackAnimationPropsReverse = css`
  animation: ${flipBackReverse} 2s ease-in-out both;
`

export const Box = styled.div `
  box-shadow: 0 0 0.5px 0 rgba(0,0,0,.1), 0 0 150px 0 rgba(0,0,0,.93);
  background-color: white;
  width: 35vw;
  height: 100vh;
  color: rgb(89, 89, 89);
  z-index: 3;
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
  }

  &.front {
    animation: ${props=> props.isFirstTime && !props.isBack ? comin : ''} 3s cubic-bezier(0,1.06,0,.99) .3s both;
    ${props=> (!props.isFirstTime && props.isBack) && flipFrontAnimationProps}
    ${props=> (!props.isFirstTime && !props.isBack) && flipFrontAnimationPropsReverse}
    ${props=> (props.isFirstTime && props.isBack) && flipFrontAnimationProps}
  }

`

export const BoxHeader = styled.div `
  background-color: ${props=> props.isBack ? 'white' : '#E30613'};
  box-shadow: 0 0 80px 0 rgba(0,0,0,0.2) inset;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxHeaderImg = styled.img `
  height: 40%;
`

export const BoxTitle = styled.h2 `
  color: rgba(94, 94, 94, 0.89);
  text-align: center;
  margin: 3em 0 1.4em 0;
  ::after {
    content: ".";
    color: ${primaryColor};
    font-size: 40px;
  }
`
export const FormGroup = styled.div`
  display: flex;
  width: 70%;
  justify-content: ${props => props.justify};
  align-items: center;
  margin-bottom: .5em;
`

FormGroup.defaultProps = {
  justify: 'center'
}

export const InputIcon = styled.span`
  z-index: 1;
  color: ${props => props.isFocused ? primaryColor : 'inherit'};
  position: relative;
  left: 1.6em;
  transition: box-shadow 0.2s, color 0.2s, transform 0.3s ease-in-out;
`
export const InputStyled = styled.input`
  text-indent: ${props => props.isFocused ? 3 : 3.5}em;
  outline: 0;
  padding: 10px;
  font-size: 15px;
  background-color: #fff;
  border:none;
  border-bottom: 1px solid #eee;
  display: block;
  width: 100%;
  line-height: 1.5;
  background-clip: padding-box;
  transition: border-color 0.15s ease-out, text-indent, 0.2s ease-in-out;
  box-sizing: border-box;
  &:focus{
    border-color: ${primaryColor};

  }
  &::placeholder {
    color: #6c757d;
    opacity: .5;
  }
  &:focus::placeholder {
    color: ${primaryColor};
  }
  &:not([value=""]) {
    border-color: ${primaryColor};
  }
`
export const ButtonStyled = styled.button`
  padding: 10px 35px;
  outline: no;
  border: 1px solid ${primaryColor};
  border-radius: 6px;
  font-size: 17px;
  background-color: transparent;
  transition: background .2s, color .2s, border .1s;
  cursor: pointer;
  color: ${primaryColor};
  &:hover,:active,:focus {
    color: #fff;
    background-color: ${primaryColor};
    border-color: transparent;
    box-shadow: 0 0 30px -3px rgba(0,0,0,0.3) inset;
  }
`

export const SubtleLink = styled.a`
  opacity: .7;
  font-size: 12px;
  cursor: pointer;
  &:active,&:focus,&:hover {
    color: ${primaryColor}
  }
`
export const Text = styled.p`
  margin: 3em 0 0 0;
  font-size: 16px;
  text-align: center;
  color: ${primaryColor};
  transition: color .3s;
  &:hover,&:focus,&:active {
    color: rgb(89,89,89);
  }
`
