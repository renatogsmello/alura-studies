"use client"
import React from "react"

interface Props {
	type?: "button" | "submit" | "reset" | undefined
	children?: React.ReactNode
	onClick?: () => void
}

function Button({ type, children, onClick }: Props) {
	return (
		<button
			type={type}
			onClick={onClick}
			className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
		>
			{children}
		</button>
	)
}

export default Button
