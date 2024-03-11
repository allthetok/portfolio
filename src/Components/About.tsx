/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { useSectionInView } from '@/hooks/sectionscroll'
import { aboutData, aboutImages, skillsData } from '@/content/textdata'
import Carousel from 'react-material-ui-carousel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { AboutDtl } from '@/helpers/types'

const About = () => {
	const { ref } = useSectionInView('Personal', 0.5)
	return (
		<section ref={ref} id='about' className='min-h-[125vh] w-auto pt-24 text-center ml-36 background-gradient-sec'>
			<div className='flex flex-col'>
				<div className='flex flex-row items-start justify-normal gap-x-10 max-w-[1920px] about-sec'>
					<Carousel NextIcon={<ArrowForwardIcon/>} PrevIcon={<ArrowBackIcon/>} stopAutoPlayOnHover={true} interval={10000} animation={'fade'} className='about-carousel ml-0 w-3xl'>
						{aboutImages.map((screenshot: string, index: number) => (
							<img key={index} className='image-carousel border border-teal-300 rounded-3xl about-img' src={screenshot} alt='Pic of Me!' />
						))}
					</Carousel>
					<div className='flex flex-col justify-center items-start gap-y-20 max-w-3xl my-auto p-4 border border-transparent hover:border rounded-3xl hover:bg-indigo-900/20'>
						<h2 className='text-3xl text-slate-200 font-bold -mb-16 tracking-wide font-sans'>A little about me.</h2>
						<div className='w-full min-w-64'>
							{aboutData.map((item: AboutDtl, index: number) => (
								<div className='flex flex-col mb-4' key={index}>
									<p className='text-md text-slate-300 leading-7 w-[560px] flex-wrap text-left'>
										{item.details}
									</p>
								</div>
							))}
						</div>
						<div className='flex flex-col justify-center items-center mt-[-5rem] w-[460px]'>
							<ul className='mt-2 flex flex-wrap'>
								{skillsData.map((skill: string, index: number) => (
									<li className='mr-1.5 mt-2' key={index}>
										<div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>
											{skill}
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export { About }

{/* <h2 className='text-slate-300 text-7xl font-extrabold'>About Me</h2> */}
{/* <div className='flex flex-col md:flex-row justify-center my-20'>
					<div className='w-full md:w-7/12'>
						{timelineData.map((item: TimeLineDtl, index: number) => (
							<WorkTimeItem timeItem={item} key={index} />
						))}
					</div>
				</div> */}