import React from 'react'

import { About } from '@/Components/About'
import { Intro } from '@/Components/Intro'
import { WorkTime } from '@/Components/WorkTime'
import { Projects } from '@/Components/Projects'

const Home = () => {
	return (
		<main className='flex flex-col items-center px-4'>
			<Intro />
			<About />
			<WorkTime />
			<Projects />
		</main>
	)
}

export default Home