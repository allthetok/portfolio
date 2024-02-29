'use client'
import React from 'react'
import { useActiveSectionContext } from '@/context/action-section-context'
import { useSectionInView } from '@/hooks/sectionscroll'
import { projects } from '@/content/textdata'

const Projects = () => {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
	return (
		<section ref={ref} id='work' className='mt-28 mb-28 max-w-[60rem] text-center sm:mb-0'>
			<div className='flex flex-col'>
				<h2 className='text-slate-300 text-7xl font-extrabold'>My Projects</h2>
				<div className='flex flex-col md:flex-row justify-center my-20'>
					<div className='w-full md:w-7/12'>
						{projects.map}
					</div>
				</div>
			</div>
		</section>
	)
}

export { Projects }