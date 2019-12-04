import React, { FC } from 'react'
import Particles from 'react-particles-js'

import particlesConfig from '../assets/js/particlesjs-config'
import LoginContent from './LoginContent'
import { LoginFonts, getParticleColorStyled } from './Style'
import { ILoginProps } from './interfaces.js'
import {
	ICommonProps,
	IThemeMode
} from '@redwallsolutions/common-interfaces-ts'

const Login: FC<ILoginProps & ICommonProps> = props => {
	const {
		theme = { mode: 'light' as IThemeMode },
		appearance = 'default'
	} = props
	const {
		particles: { color, ...rest }
	} = particlesConfig
	const themeColor = getParticleColorStyled({ theme, appearance })
	return (
		<>
			<LoginFonts />
			<Particles
				params={{ particles: { ...rest, color: themeColor } }}
				style={{
					position: 'fixed',
					zIndex: 1,
					width: '100vw',
					height: '100vh'
				}}
			/>
			<LoginContent {...props} />
		</>
	)
}

export default Login
