/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import Carousel from 'react-material-ui-carousel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { ProjectDtl } from '@/helpers/types'
import { BsArrowUpRight } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'

type ProjectItemProps = {
	indProj: ProjectDtl
}

const ProjectItem = ({ indProj }: ProjectItemProps) => {
	return (
		<div className='flex 2xl:flex-row mx-auto flex-col justify-center mb-12 gap-x-10 bg-indigo-700/20 rounded-3xl max-w-[1600px] py-8 px-3'>
			{/* <Carousel NextIcon={<ArrowForwardIcon/>} PrevIcon={<ArrowBackIcon/>} stopAutoPlayOnHover={true} interval={10000} animation={'fade'} className='carousel-width'>
				{indProj.images.map((screenshot: string, index: number) => (
					<img key={index} className='image-carousel border border-white rounded-3xl' src={screenshot} alt='Project Screenshot' />
				))}
			</Carousel> */}
			<div className='flex flex-row'>
				<div className='flex flex-col w-[560px]'>
					<Link className='text-slate-300 text-3xl w-72 mx-auto rounded-3xl font-bold mb-2 p-2 uppercase text-shdw-sm flex flex-row justify-center gap-x-4 hover:bg-indigo-700/40 hover:scale-105 tracking-wider' href={indProj.link} target='_blank'>
						{indProj.name}
						<div className='text-slate-300 pt-1'>
							<BsArrowUpRight />
						</div>
					</Link>
					<div className='text-slate-300 text-3xl font-bold pb-4 uppercase flex flex-row justify-center gap-x-4 -ml-4'>
						<Link className='flex items-center rounded-full bg-purple-700/40 px-3 py-2 text-xs font-medium leading-5 text-slate-300 hover:bg-purple-700/70 hover:scale-105' href={indProj.frontend} target='_blank'>
							<FaGithubSquare size={20} color='white' />
							Frontend
						</Link>
						<Link className='flex items-center rounded-full bg-blue-700/40 px-3 py-2 text-xs font-medium leading-5 text-slate-300 hover:bg-blue-700/70 hover:scale-105'  href={indProj.backend} target='_blank'>
							<FaGithubSquare size={20} color='white' />
							Backend
						</Link>
					</div>
					<p className='text-slate-300 text-md mb-5 text-left'>
						{indProj.description}
					</p>
					<ul className='mt-2 flex flex-wrap'>
						{indProj.libraries.map((lib: string, index: number) => (
							<li className='mr-1.5 mt-2' key={index}>
								<div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>
									{lib}
								</div>
							</li>
						))}
					</ul>
					{/* <h2 className='text-slate-300 text-3xl font-bold'>
						Libraries & Utilities
					</h2>
					<div className='flex flex-row flex-wrap justify-center w-[560px] max-h-[180px]'>
						{indProj.libraries.map((library: string, index: number) => (
							<div key={index} className='px-1 py-2 mx-1 my-1 text-xl rounded-[5px] font-bold text-slate-800 max-h-[60px] bg-slate-300'>
								{library}
							</div>
						))}
					</div> */}
				</div>
				{/* <div className='flex flex-row flex-wrap justify-center w-[420px] max-h-[180px]'>
					{indProj.libraries.map((library: string, index: number) => (
						<div key={index} className='px-2 py-3 mx-[0.375rem] my-1 text-xl rounded-[5px] font-bold text-slate-800 max-h-[80px] bg-slate-300'>
							{library}
						</div>
					))}
				</div> */}
			</div>
			<Carousel NextIcon={<ArrowForwardIcon/>} PrevIcon={<ArrowBackIcon/>} stopAutoPlayOnHover={true} interval={10000} animation={'fade'} className='project-carousel'>
				{indProj.images.map((screenshot: string, index: number) => (
					<img key={index} className='image-carousel border border-white rounded-3xl' src={screenshot} alt='Project Screenshot' />
				))}
			</Carousel>
		</div>
	)
}

export { ProjectItem }