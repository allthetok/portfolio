import React from 'react'
import { TimeLineDtl } from '@/helpers/types'

type WorkTimeItemProps = {
	timeItem: TimeLineDtl
}

const WorkTimeItem = ({ timeItem }: WorkTimeItemProps) => {
	return (
		<ol className='flex flex-col md-flex-row relative border-l border-stone-200 '>
			<div className='p-1 border border-transparent hover:border rounded-3xl hover:bg-indigo-900/20'>
				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-[1.5rem] -left-1.5 border border-white' />
					<div className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
						<span className='inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md'>
							{timeItem.from} - {timeItem.to}
						</span>
						<div className='text-xl font-semibold text-gray-300 text-nowrap'>
							{timeItem.title} - {timeItem.company}
						</div>
					</div>
					<p className='my-2 text-sm text-slate-300 text-left'>
						{timeItem.details}
					</p>
					<ul className='mt-2 flex flex-wrap'>
						{timeItem.skills.map((skill: string, index: number) => (
							<li className='mr-1.5 mt-2' key={index}>
								<div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>
									{skill}
								</div>
							</li>
						))}
					</ul>
				</li>
			</div>
		</ol>
	)
}

export { WorkTimeItem }