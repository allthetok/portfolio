import { Intro } from '@/Components/Intro'
import { WorkTime } from '@/Components/WorkTime'
import React from 'react'

const Home = () => {
	return (
		<main className='flex flex-col items-center px-4'>
			<Intro />
			<WorkTime />
		</main>
	)
}

export default Home