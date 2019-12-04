import React, { FC, useEffect } from 'react'
import { Form } from '@redwallsolutions/form-component-module'
import { IBoxProps } from './interfaces'

const BoxContent: FC<IBoxProps> = ({ onSubmit, getApi, children }) => {
	useEffect(() => {}, [])
	return (
		<Form onSubmit={onSubmit} getApi={getApi}>
			{children}
		</Form>
	)
}

export default BoxContent
