"use client"

import Item from "./Item"
import { Itask } from "@/types/task"

interface Props {
	tasks: Itask[]
	getSelectedTask: (selectedTask: Itask) => void
}

function List({ tasks, getSelectedTask }: Props) {
	return (
		<aside className="flex flex-col self-stretch gap-4">
			<h2 className="text-2xl text-sky-200 text-center">Estudos do dia</h2>
			<ul>
				{tasks.map((task) => (
					<Item getSelectedTask={getSelectedTask} key={task.id} {...task} />
				))}
			</ul>
		</aside>
	)
}

export default List
