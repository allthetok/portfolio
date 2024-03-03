/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Image from 'next/image'
import { useActiveSectionContext } from '@/context/action-section-context'
import { useSectionInView } from '@/hooks/sectionscroll'
import { aboutData, aboutImages, skillsData } from '@/content/textdata'
import Carousel from 'react-material-ui-carousel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { AboutDtl } from '@/helpers/types'

const About = () => {
	const { ref } = useSectionInView('Personal', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section ref={ref} id='about' className='mb-36 mt-[44rem] w-auto text-center ml-36'>
			<div className='flex flex-col'>
				{/* <h2 className='text-transparent tracking-tight text-6xl font-extrabold mb-10'>About Me</h2> */}
				<div className='flex flex-row items-start justify-normal gap-x-10 max-w-[1920px]'>
					{/* <Image className='rounded-3xl mr-[-10rem]' src='/about/6.png' alt='Picture of Me!' width={600} height={500}/> */}
					<Carousel NextIcon={<ArrowForwardIcon/>} PrevIcon={<ArrowBackIcon/>} stopAutoPlayOnHover={true} interval={10000} animation={'fade'} className='about-carousel ml-0 w-3xl'>
						{aboutImages.map((screenshot: string, index: number) => (
							<img key={index} className='image-carousel border border-teal-300 rounded-3xl about-img' src={screenshot} alt='Pic of Me!' />
						))}
					</Carousel>
					<div className='flex flex-col justify-center items-start gap-y-20 max-w-3xl my-auto p-4 border border-transparent hover:border rounded-3xl hover:bg-indigo-900/20'>
						{/* <h2 className='text-3xl text-slate-200 font-extrabold -mb-12 tracking-wide font-sans'>Hey, I'm Allen T.</h2> */}
						<div className='w-full min-w-64'>
							{aboutData.map((item: AboutDtl, index: number) => (
								<div className='flex flex-col mb-4' key={index}>
									{/* <h2 className='text-slate-300 text-5xl font-extrabold text-nowrap'>
										{item.heading}
									</h2> */}
									<p className='text-md text-slate-300 leading-7 w-[560px] flex-wrap text-left'>
										{item.details}
									</p>
								</div>
							))}
						</div>
						<div className='flex flex-col justify-center items-center mt-[-5rem] w-[460px]'>
							{/* <h2 className='text-slate-300 text-5xl font-extrabold text-nowrap mb-8'>
								Development Skills
							</h2>
							<div className='flex flex-row flex-wrap justify-center w-[420px] max-h-[180px]'>
								{skillsData.map((skill: string, index: number) => (
									<div key={index} className='px-2 py-3 mx-[0.375rem] my-1 text-xl rounded-[5px] font-bold text-slate-800 max-h-[80px] bg-slate-300'>
										{skill}
									</div>
								))}
							</div> */}
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
					{/* <Image className='rounded-3xl' src='/about/5.jpg' alt='Picture of Me!' width={800} height={500}/> */}
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