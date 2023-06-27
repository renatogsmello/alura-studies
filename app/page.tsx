import Form from "@/pages/components/Form"
import List from "@/pages/components/List"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-sky-900">
			<div className="z-10 w-full max-w-3xl items-center justify-between font-mono text-sm lg:flex gap-12">
				<Form />
				<List />
			</div>
		</main>
	)
}
