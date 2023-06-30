import { Itask } from "@/types/task"
import { CheckIcon } from "@heroicons/react/24/solid"

interface Props extends Itask {
	getSelectedTask: (task: Itask) => void
}

export default function Item({ name, time, isSelected, isCompleted, id, getSelectedTask }: Props) {
	return (
		<li
			className={`mb-4 gap-8 flex justify-between items-center px-4 py-2 rounded cursor-pointer ${isSelected ? "bg-sky-600" : ""} ${
				isCompleted ? "bg-green-600" : ""
			}`}
			onClick={() => !isCompleted && getSelectedTask({ name, time, isSelected, isCompleted, id })}
		>
			<h3 className="text-lg text-white">{name}</h3>
			<span className="text-lg font-bold text-sky-100">{time}</span>
			{isCompleted && <CheckIcon className="h-6 w-6 text-green-100" />}
		</li>
	)
}
