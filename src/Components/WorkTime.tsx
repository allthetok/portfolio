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
		<section ref={ref} id='work' className='min-h-[125vh] mb-0 text-center -mt-16 pb-12 background-gradient-large w-full'>
			<div className='flex flex-col'>
				{/* <h2 className='text-slate-300 text-6xl font-extrabold text-shdw-sm tracking-wider uppercase'>Experience</h2> */}
				<div className='flex flex-row justify-center max-w-[60rem] mx-auto'>
					<div className='w-full md:w-7/12 flex-wrap'>
						{timelineData.map((item: TimeLineDtl, index: number) => (
							<WorkTimeItem timeItem={item} key={index} />
						))}
					</div>
					{/* <div className='w-full md:w-7/12 flex-wrap'>
						{timelineData.slice(3,6).map((item: TimeLineDtl, index: number) => (
							<WorkTimeItem timeItem={item} key={index} />
						))}
					</div> */}
				</div>
			</div>
		</section>
	)
}

export { WorkTime }