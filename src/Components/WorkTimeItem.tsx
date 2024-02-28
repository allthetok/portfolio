import React from 'react'
import { TimeLineDtl } from '@/helpers/types'

type WorkTimeItemProps = {
	timeItem: TimeLineDtl
}

const WorkTimeItem = ({ timeItem }: WorkTimeItemProps) => {
	return (
		<ol className='flex flex-col md-flex-row relative border-l border-stone-200'>
			<li className='mb-10 ml-4'>
				<div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-[1.5rem] -left-1.5 border border-white' />
				<p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
					<span className='inline-block px-2 py-1 font-semibold text-white bg-stone-900'
				</p>
			</li>
		</ol>
	)
}

export { WorkTimeItem }