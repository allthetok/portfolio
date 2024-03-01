'use client'
import React from 'react'
import { useActiveSectionContext } from '@/context/action-section-context'
import { useSectionInView } from '@/hooks/sectionscroll'
import { projects } from '@/content/textdata'
import { ProjectItem } from './ProjectItem'
import { ProjectDtl } from '@/helpers/types'

const Projects = () => {
	const { ref } = useSectionInView('Projects', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
	return (
		<section ref={ref} id='projects' className='mt-12 mb-28 text-center sm:mb-0'>
			<div className='flex flex-col'>
				<h2 className='text-slate-300 text-7xl font-extrabold'>My Projects</h2>
				<div className='flex flex-col md:flex-row justify-center my-20 w-[2800px]'>
					<div className='w-full'>
						{projects.map((proj: ProjectDtl, index: number) => (
							<ProjectItem indProj={proj} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export { Projects }