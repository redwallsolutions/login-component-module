import { ICommonProps } from '@redwallsolutions/common-interfaces-ts'
import { ReactNode } from 'react';

export interface IBox {
    isBack?:boolean
    isFirstTime?:boolean
}

export interface IBoxProps {
    onSubmit?:(data:any) => void
    getApi?: (data:any) => void
    buttonText?:string
    subtleText?:ReactNode
}

export interface ILoginProps {
	getLoginController?:(controller:any) => void
	isBackFace?: boolean
	frontTitle?: string
	backTitle?: string
	frontImg?: string
	backImg?: string
	frontButtonText?: string
	backButtonText?: string
	endText?: string
	onFrontSubmit?: (data: any) => void
	onBackSubmit?: (data: any) => void
}