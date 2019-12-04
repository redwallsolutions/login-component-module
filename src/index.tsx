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

const App: FC = () => {
	return (
		<>
			<Reset />
			<Login />
		</>
	)
}

render(<App />, document.querySelector('#app'))
