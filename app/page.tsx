"use client"
import Cronometer from "@/pages/components/Cronometer"
import Form from "@/pages/components/Form"
import List from "@/pages/components/List"
import { Itask } from "@/types/task"
import { useState } from "react"

export default function Home() {
	const [tasks, setTasks] = useState<Itask[] | []>([])
	const [selected, setSelected] = useState<Itask>()

	function getSelectedTask(selectedTask: Itask) {
		setSelected(selectedTask)
		setTasks((oldTasks) => oldTasks.map((task) => ({ ...task, isSelected: task.id === selectedTask.id ? true : false })))
	}
	function finishTask() {
		if (selected) {
			setTasks((oldTasks) =>
				oldTasks.map((task) => {
					if (task.id === selected.id) {
						return { ...task, isCompleted: true }
					}
					return task
				})
			)
		}
	}
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-900">
			<div className="z-10 w-full max-w-3xl items-center justify-between font-mono text-sm lg:flex gap-12">
				<div className="flex flex-col gap-12">
					<Form setTasks={setTasks} />
					<Cronometer selected={selected} finishTask={finishTask} />
				</div>
				<List tasks={tasks} getSelectedTask={getSelectedTask} />
			</div>
		</main>
	)
}
