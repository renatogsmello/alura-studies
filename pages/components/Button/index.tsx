"use client"
import React from "react"

class Button extends React.Component {
	render(): React.ReactNode {
		return (
			<button
				type="button"
				className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
			>
				Botão
			</button>
		)
	}
}

export default Button
