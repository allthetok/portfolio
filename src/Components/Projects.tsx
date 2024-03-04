'use client'
import React from 'react'
import { useSectionInView } from '@/hooks/sectionscroll'
import { projects } from '@/content/textdata'
import { ProjectItem } from './ProjectItem'
import { ProjectDtl } from '@/helpers/types'

const Projects = () => {
	const { ref } = useSectionInView('Projects', 0.5)
	return (
		<section ref={ref} id='projects' className='mt-0 mb-0 pt-28 mr-0 text-center background-gradient-large w-full'>
			<div className='flex flex-col w-[1760px] mx-auto project-sec'>
				<h2 className='text-slate-300 text-7xl font-extrabold uppercase text-shdw-sm tracking-wider'>My Projects</h2>
				<div className='flex flex-col md:flex-row justify-center mt-20 w-[1760px] ml-32 project-dtl-sec'>
					<div className='w-full mx-auto project-map-sec'>
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