import React from 'react'

import { About } from '@/Components/About'
import { Intro } from '@/Components/Intro'
import { WorkTime } from '@/Components/WorkTime'
import { Projects } from '@/Components/Projects'
import { Email } from '@/Components/Email'
import { Cursor } from '@/Components/Cursor'

const Content = () => {
	return (
		<main className='flex flex-col items-center'>
			<Cursor />
			<Intro />
			<About />
			<WorkTime />
			<Projects />
			<Email />
		</main>
	)
}

export default Content