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
		<section ref={ref} id='projects' className='mt-32 mb-28 mr-0 text-center'>
			<div className='flex flex-col'>
				<h2 className='text-slate-300 text-7xl font-extrabold uppercase text-shdw-sm tracking-wider'>My Projects</h2>
				<div className='flex flex-col md:flex-row justify-center my-20 w-[1760px] ml-40'>
					<div className='w-full mx-auto'>
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