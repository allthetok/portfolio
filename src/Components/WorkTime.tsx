'use client'
import React from 'react'
import { useActiveSectionContext } from '@/context/action-section-context'
import { useSectionInView } from '@/hooks/sectionscroll'
import { WorkTimeItem } from './WorkTimeItem'

const WorkTime = () => {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
	return (
		<section ref={ref} id='home' className='mt-64 mb-28 max-w-[50rem] text-center sm:mb-0'>
			Hello
		</section>

	)
}

export { WorkTime }