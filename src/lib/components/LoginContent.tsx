import React, { FC, useState, useEffect, useContext } from 'react'
import {
	Background,
	Box,
	BoxHeader,
	BoxHeaderImg,
	BoxTitle,
	Text,
	SubtleLink,
	FormContainer,
	InputContainer
} from './Style'
import BoxContent from './BoxContent'
import RedwallLogoLight from '../assets/img/redwall-logo-light.png'
import RedwallLogoDark from '../assets/img/redwall-logo-dark.png'
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa'
import { ILoginProps } from './interfaces'
import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import { ThemeContext } from 'styled-components'
import { InputField } from '@redwallsolutions/form-component-module'
import Button from '@redwallsolutions/button-component-module'

let firstTime = true

const LoginContent: FC<ILoginProps & ICommonProps> = ({
	getLoginController,
	isBackFace,
	theme = { mode: 'light' },
	appearance = 'default',
	frontTitle = 'Faça Login',
	backTitle = 'Cadastre-se',
	frontImg = RedwallLogoLight,
	backImg = RedwallLogoDark,
	frontButtonText = 'Entrar',
	backButtonText = 'Cadastrar',
	endText = 'Faça sua conta agora',
	onFrontSubmit,
	onBackSubmit
}) => {
	const [frontButtonIsLoading, setFrontButtonIsLoading] = useState(false)
	const [backButtonIsLoading, setBackButtonIsLoading] = useState(false)
	const [isBackFaceState, setIsBackFaceState] = useState(isBackFace)

	useEffect(() => {
		firstTime = false
		if(getLoginController) {
			getLoginController({setFrontButtonIsLoading, setBackButtonIsLoading})
		}
	}, [])

	const themeToApply = useContext(ThemeContext) || theme

	return (
		<Background
			appearance={appearance}
			theme={themeToApply}
			className="login-component-module"
		>
			<React.Fragment>
				<Box
					appearance={appearance}
					theme={themeToApply}
					className="front"
					isBack={isBackFaceState}
					isFirstTime={firstTime}
				>
					<BoxHeader appearance={appearance} theme={themeToApply}>
						<BoxHeaderImg src={frontImg} />
					</BoxHeader>
					<BoxTitle appearance={appearance} theme={themeToApply}>
						{frontTitle}
					</BoxTitle>
					<BoxContent
						buttonText={frontButtonText}
						subtleText={
							<SubtleLink style={{ position: 'relative', left: '2em' }}>
								Esqueci a senha
							</SubtleLink>
						}
						onSubmit={onFrontSubmit}
					>
						<FormContainer>
							<InputContainer>
								<InputField
									field="login"
									label="Usuário"
									shouldFitContainer
									required
								/>
							</InputContainer>
							<InputContainer>
								<InputField
									field="password"
									label="Senha"
									type="password"
									shouldFitContainer
									required
								/>
							</InputContainer>
							<InputContainer>
								<Button
									type="submit"
									theme={themeToApply}
									appearance={appearance}
									shouldFitContainer
									isLoading={frontButtonIsLoading}
								>
									{frontButtonText}
								</Button>
							</InputContainer>
						</FormContainer>
					</BoxContent>
					<SubtleLink
						appearance={appearance}
						theme={themeToApply}
						onClick={() => {
							setIsBackFaceState(true)
						}}
					>
						<Text appearance={appearance} theme={themeToApply}>
							{endText}
						</Text>
					</SubtleLink>
				</Box>
				<Box
					appearance={appearance}
					theme={themeToApply}
					className="back"
					isBack={isBackFaceState}
					isFirstTime={firstTime}
				>
					<BoxHeader appearance={appearance} theme={themeToApply} isBack={true}>
						<BoxHeaderImg src={backImg} />
					</BoxHeader>
					<BoxTitle appearance={appearance} theme={themeToApply}>
						{backTitle}
					</BoxTitle>
					<BoxContent buttonText={backButtonText} onSubmit={onBackSubmit}>
						<FormContainer>
							<InputContainer>
								<InputField
									field="login"
									label="Usuário"
									shouldFitContainer
									required
								/>
							</InputContainer>
							<InputContainer>
								<InputField
									field="password"
									label="Senha"
									type="password"
									shouldFitContainer
									required
								/>
							</InputContainer>
							<InputContainer>
								<Button
									type="submit"
									theme={themeToApply}
									appearance={appearance}
									isLoading={backButtonIsLoading}
									shouldFitContainer
								>
									{backButtonText}
								</Button>
							</InputContainer>
							<div style={{ height: 50 }} />
							<SubtleLink
								appearance={appearance}
								theme={themeToApply}
								onClick={() => {
									setIsBackFaceState(false)
								}}
							>
								Voltar para login
							</SubtleLink>
						</FormContainer>
					</BoxContent>
				</Box>
			</React.Fragment>
		</Background>
	)
}

export default LoginContent
