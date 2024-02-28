import React from 'react'

import { About } from '@/Components/About'
import { Intro } from '@/Components/Intro'
import { WorkTime } from '@/Components/WorkTime'

const Home = () => {
	return (
		<main className='flex flex-col items-center px-4'>
			<Intro />
			<About />
			<WorkTime />
		</main>
	)
}

export default Home