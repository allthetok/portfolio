interface TimeLineDtl {
	from: string,
	to: string,
	title: string,
	company: string,
	details: string,
	skills: string[]
}

interface AboutDtl {
	heading: string,
	details: string
}

interface ProjectDtl {
	name: string,
	description: string,
	libraries: string[],
	images: string[],
	link: string,
	frontend: string,
	backend: string
}

export { type TimeLineDtl, type AboutDtl, type ProjectDtl }