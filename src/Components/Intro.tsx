/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowDown, BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useActiveSectionContext } from '@/context/action-section-context'
import { useSectionInView } from '@/hooks/sectionscroll'

const Intro = () => {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section ref={ref} id='home' className='mb-24 max-w-[50rem] text-center h-[125vh]'>
			<div className='mt-56'>
				<div className='flex items-center justify-center mt-5'>
					<Image src='/profile2.png' alt='Me!'	width='240'	height='240' quality='95' priority={true} className='h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
				</div>
				<h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-slate-300 flex flex-col'>
					<span className='font-semibold'>Hi there! I'm <span className='font-extrabold'>Allen Tokjuman.</span></span>
					<span className='font-semibold'>I'm a full-stack software engineer</span>
					<span className='font-semibold'>with 5 years of experience building</span>
					<span className='font-semibold'>production-scale web applications.</span>
				</h1>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
					<Link href='#contact' className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
						onClick={() => {
							setActiveSection('Contact')
							setTimeOfLastClick(Date.now())
						}}>
							Contact me here
						<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
					</Link>
					<a className='group bg-zinc-200 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-zinc-700 hover:text-slate-100 active:scale-105 transition' href='/CV.pdf' download>
						Download Resume
						<HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
					</a>
					<a className='bg-blue-800 p-4 text-white hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack' href='www.linkedin.com/in/allen-tokjuman-97b531131' target='_blank'>
						<BsLinkedin className='text-white'/>
					</a>
					<a className='bg-purple-700 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack' href='https://github.com/allthetok' target='_blank'>
						<FaGithubSquare  className='text-white'/>
					</a>
				</div>
				{/* <Link href='#about' className='group text-white px-7 py-32 flex flex-row justify-center items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 transition text-5xl font-extrabold text-shdw hover:text-shdw'
					onClick={() => {
						setActiveSection('Personal')
						setTimeOfLastClick(Date.now())
					}}>
						Explore
					<BsArrowDown className='opacity-70 group-hover:translate-x-1 transition' />
				</Link> */}
			</div>
		</section>
	)
}

export { Intro }