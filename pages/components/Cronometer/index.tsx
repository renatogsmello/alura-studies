import timeToSeconds from "@/pages/common/utils/time"
import Button from "../Button"
import Clock from "./Clock"
import { Itask } from "@/types/task"
import { useEffect, useState } from "react"

interface Props {
	selected: Itask | undefined
	finishTask: () => void
}

export default function Cronometer({ selected, finishTask }: Props) {
	const [time, setTime] = useState<number>()

	useEffect(() => {
		if (selected?.time) {
			setTime(timeToSeconds(selected.time))
		}
	}, [selected])

	function countdown(count: number = 0) {
		setTimeout(() => {
			if (count > 0) {
				setTime(count - 1)
				return countdown(count - 1)
			}
			finishTask()
		}, 1000)
	}
	return (
		<div className="flex flex-col gap-4">
			<p className="text-md text-white">Escolha um card e inicie o cronômetro</p>
			<Clock time={time} />
			<Button onClick={() => countdown(time)}>Começar!</Button>
		</div>
	)
}
