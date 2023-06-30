"use client"
import React, { useState } from "react"
import Button from "../Button"
import { Itask } from "@/types/task"
import { v4 as uuidV4 } from "uuid"

interface Props {
	setTasks: React.Dispatch<React.SetStateAction<Itask[]>>
}

function Form({ setTasks }: Props) {
	const [name, setName] = useState("")
	const [time, setTime] = useState("00:00")

	function addTask(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setTasks((oldTasks) => [...oldTasks, { name, time, isSelected: false, isCompleted: false, id: uuidV4() }])
		setName("")
		setTime("00:00")
	}
	return (
		<form className="flex flex-1 flex-col gap-6" onSubmit={addTask}>
			<div className="flex flex-col gap-1">
				<label htmlFor="task" className="text-sky-200">
					Adicione um novo estudo
				</label>
				<input
					type="text"
					id="task"
					name="task"
					value={name}
					onChange={(event) => setName(event.target.value)}
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
					value={time}
					onChange={(event) => setTime(event.target.value)}
					min="00:00:00"
					max="01:30:00"
					required
					className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6"
				/>
			</div>
			<Button type="submit">Adicionar</Button>
		</form>
	)
}

export default Form
