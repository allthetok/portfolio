'use client'
import React from 'react'
import { useActiveSectionContext } from '@/context/action-section-context'
import { useSectionInView } from '@/hooks/sectionscroll'
import { WorkTimeItem } from './WorkTimeItem'
import { timelineData } from '@/content/textdata'
import { TimeLineDtl } from '@/helpers/types'

const WorkTime = () => {
	const { ref } = useSectionInView('Work', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
	return (
		<section ref={ref} id='work' className='mt-28 mb-28 max-w-[60rem] text-center sm:mb-0'>
			<div className='flex flex-col'>
				<h2 className='text-slate-300 text-7xl font-extrabold'>Work Experience</h2>
				<div className='flex flex-col md:flex-row justify-center my-20'>
					<div className='w-full md:w-7/12'>
						{timelineData.map((item: TimeLineDtl, index: number) => (
							<WorkTimeItem timeItem={item} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export { WorkTime }