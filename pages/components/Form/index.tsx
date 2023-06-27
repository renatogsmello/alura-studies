"use client"
import React from "react"
import Button from "../Button"

class Form extends React.Component {
	render(): React.ReactNode {
		return (
			<form className="flex flex-1 flex-col gap-6">
				<div className="flex flex-col gap-1">
					<label htmlFor="task" className="text-sky-200">
						Adicione um novo estudo
					</label>
					<input
						type="text"
						id="task"
						name="task"
						placeholder="O que você quer estudar?"
						required
						className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="time" className="text-sky-200">
						Tempo
					</label>
					<input
						type="time"
						step="1"
						id="time"
						name="time"
						min="00:00:00"
						max="01:30:00"
						required
						className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<Button />
			</form>
		)
	}
}

export default Form
