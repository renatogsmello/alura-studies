interface Props {
	time: number | undefined
}
export default function Clock({ time = 0 }: Props) {
	const minutes = Math.floor(time / 60)
	const seconds = time % 60
	const [minuteTens, minuteUnits] = String(minutes).padStart(2, "0")
	const [secondsTens, secondsUnits] = String(seconds).padStart(2, "0")
	return (
		<div className="flex justify-center items-center gap-1">
			<span className="text-6xl p-3 bg-sky-300 text-sky-950 rounded">{minuteTens}</span>
			<span className="text-6xl p-3 bg-sky-300 text-sky-950 rounded">{minuteUnits}</span>
			<span className="text-6xl text-sky-200"> :</span>
			<span className="text-6xl p-3 bg-sky-300 text-sky-950 rounded">{secondsTens}</span>
			<span className="text-6xl p-3 bg-sky-300 text-sky-950 rounded">{secondsUnits}</span>
		</div>
	)
}
