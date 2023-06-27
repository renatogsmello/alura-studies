"use client"
function List() {
	const tasks = [
		{
			name: "React",
			time: "02:00:00",
		},
		{
			name: "Javascript e typescript",
			time: "01:00:00",
		},
	]
	return (
		<aside className="flex flex-col self-stretch gap-4">
			<h2 className="text-2xl text-sky-200 text-center">Estudos do dia</h2>
			<ul>
				{tasks.map((task, index) => (
					<li key={index} className="mb-4 gap-8 flex justify-between items-center">
						<h3 className="text-lg text-white">{task.name}</h3>
						<span className="text-lg font-bold text-sky-400">{task.time}</span>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default List
