import React, { FC } from 'react'
import { render } from 'react-dom'
import Login from './lib'
import styled, { createGlobalStyle } from 'styled-components'

const Reset = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

let loginController;

const App: FC = () => {
	const getLoginController = (controller) => {
		loginController = controller
		console.log(loginController)
	}
	
	return (
		<>
			<Reset />
			<Login getLoginController={getLoginController}/>
		</>
	)
}

render(<App />, document.querySelector('#app'))
