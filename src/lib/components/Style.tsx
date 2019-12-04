import styled, { createGlobalStyle, keyframes, css } from 'styled-components'
import Color from 'color'
import { createThemeWithAppearance } from '@redwallsolutions/theming-component-module'
import { IBox } from './interfaces'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'

const theme = createThemeWithAppearance()

export const LoginFonts = createGlobalStyle`
  .login-component-module {
    font-family: Aria, Helvetica, Tahoma, Geneva, sans-serif;
  }

  .login-component-module * {
    box-sizing: border-box;
  }
`

export const Background = styled.div<ICommonProps>`
	position: relative;
	background: ${props => theme(props).contrast};
	box-shadow: 0 0 200px 0px
		${props =>
			Color(theme(props).contrast(props))
				.darken(0.2)
				.grayscale()
				.string()}
		inset;
	min-height: 100vh;
	height: auto;
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
    transform: perspective(50em) scale(.8) rotateY(-120deg);
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(-120deg);
  }
`

const flipFrontReverse = keyframes`
  0% {
    transform: perspective(50em) scale(.7) rotateY(-120deg);
  }
  100% {
    transform: perspective(50em) scale(1) rotateY(0deg);
  }
`

const flipFrontAnimationProps = css`
	animation: ${flipFront} 2s ease-in-out both;
`

const flipFrontAnimationPropsReverse = css`
	animation: ${flipFrontReverse} .8s .24s ease-in-out both;
`

const flipBack = keyframes`
  0% {
    transform: perspective(50em) scale(.7) rotateY(240deg);
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
	animation: ${flipBack} 1.2s ease-in-out both;
`
const flipBackAnimationPropsReverse = css`
	animation: ${flipBackReverse} 2s ease-in-out both;
`

export const Box = styled.div<IBox & ICommonProps>`
  box-shadow: 0 0 0.5px 0 rgba(0,0,0,.2), 0 0 150px 0 ${props =>
		Color(theme(props).contrast(props))
			.darken(0.1)
			.grayscale()
			.string()};
  background-color: ${props =>
		Color(theme(props).contrast(props))
			.lighten(0.5)
			.string()};
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
    ${props => props.isBack && !props.isFirstTime && flipBackAnimationProps};
    ${props =>
			!props.isBack && !props.isFirstTime && flipBackAnimationPropsReverse};
    ${props => props.isBack && props.isFirstTime && flipBackAnimationProps};
    opacity: 0;
  }

  &.front {
    animation: ${props =>
			props.isFirstTime && !props.isBack
				? comin
				: ''} 3s cubic-bezier(0,1.06,0,.99) .3s both;
    ${props => !props.isFirstTime && props.isBack && flipFrontAnimationProps}
    ${props =>
			!props.isFirstTime && !props.isBack && flipFrontAnimationPropsReverse}
    ${props => props.isFirstTime && props.isBack && flipFrontAnimationProps}
  }

  @media (max-width: 768px){
    width: 70vw;
  }

  @media (max-width: 720px) {
    width: 100vw;
  }

`

export const BoxHeader = styled.div<IBox & ICommonProps>`
	background-color: ${props => (props.isBack ? 'white' : theme(props).color)};
	box-shadow: 0 0 80px 0
		${props =>
			Color(theme(props).color(props))
				.grayscale()
				.fade(0.8)
				.string()}
		inset;
	height: 28%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const BoxHeaderImg = styled.img`
	height: 40%;

	@media (max-width: 769px) {
		height: 30%;
	}
`

export const BoxTitle = styled.h2<ICommonProps>`
	color: ${props =>
		Color(theme(props).color(props))
			.grayscale()
			.fade(0.3)
			.string()};
	text-align: center;
	::after {
		content: '.';
		color: ${props => theme(props).color};
		font-size: 40px;
	}
`

export const SubtleLink = styled.a<ICommonProps>`
	opacity: 0.7;
	font-size: 12px;
	cursor: pointer;
	color: ${props =>
		Color(theme(props).color(props))
			.fade(0.3)
			.grayscale()
			.string()};
	&:active,
	&:focus,
	&:hover {
		color: ${props =>
			Color(theme(props).color(props))
				.grayscale()
				.string()};
	}
`
export const Text = styled.p<ICommonProps>`
	margin: 3em 0 0 0;
	font-size: 16px;
	text-align: center;
	color: ${props =>
		Color(theme(props).color(props))
			.fade(0.3)
			.string()};
	transition: color 0.3s;
	&:hover,
	&:focus,
	&:active {
		color: ${props =>
			Color(theme(props).color(props))
				.grayscale()
				.string()};
	}
`

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 10px;
`

export const InputContainer = styled.div`
	width: 65%;
`

export const getParticleColorStyled = (props: ICommonProps) => {
	return {
		value: Color(theme(props).color(props)).hex()
	}
}
