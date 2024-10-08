'use client'
import { useState } from 'react'

type Props = {
	children: React.ReactNode
	disableHoverEffect?: boolean
	disablePressedEffect?: boolean
	className?: string
}
export function AnimateContent(props: Props) {
	const [isPressed, setIsPressed] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	return (
		<div
			className={props.className}
			onMouseEnter={() => setIsHovered(true)}
			onMouseDown={() => {
				setIsHovered(false)
				setIsPressed(true)
			}}
			onMouseUp={() => {
				setIsHovered(false)
				setIsPressed(false)
			}}
			onMouseLeave={() => {
				setIsHovered(false)
				setIsPressed(false)
			}}>
			<div
				className={`transition-all ${props.disableHoverEffect ? '' : isHovered ? 'scale-105' : 'scale-100'} ${props.disablePressedEffect ? '' : isPressed ? 'scale-95' : 'scale-100'}`}>
				{props.children}
			</div>
		</div>
	)
}
