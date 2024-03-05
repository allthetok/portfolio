'use client'
import React from 'react'
import { useSectionInView } from '@/hooks/sectionscroll'
import { WorkTimeItem } from './WorkTimeItem'
import { timelineData, timelineDataQU, timelineDataSWE } from '@/content/textdata'
import { TimeLineDtl } from '@/helpers/types'

const WorkTime = () => {
	const { ref } = useSectionInView('Work', 0.5)
	return (
		<section ref={ref} id='work' className='min-h-[100vh] mb-0 text-center py-12 background-gradient-large w-full'>
			<div className='flex flex-col'>
				<div className='flex flex-row justify-center max-w-[72rem] mx-auto work-time-dir gap-x-10'>
					{/* <div className='w-full md:w-7/12 flex-wrap'>
						{timelineData.map((item: TimeLineDtl, index: number) => (
							<WorkTimeItem timeItem={item} key={index} />
						))}
					</div> */}
					<div className='w-full md:w-7/12 flex-wrap'>
						{timelineDataSWE.map((item: TimeLineDtl, index: number) => (
							<WorkTimeItem timeItem={item} key={index} />
						))}
					</div>
					<div className='w-full md:w-7/12 flex-wrap'>
						{timelineDataQU.map((item: TimeLineDtl, index: number) => (
							<WorkTimeItem timeItem={item} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export { WorkTime }