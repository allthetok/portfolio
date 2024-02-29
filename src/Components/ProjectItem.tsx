/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { ProjectDtl } from '@/helpers/types'

type ProjectItemProps = {
	indProj: ProjectDtl
}

const ProjectItem = ({ indProj }: ProjectItemProps) => {
	return (
		<div className='flex flex-row justify-center mb-20 gap-x-10'>
			{/* <Carousel NextIcon={<ArrowForwardIcon/>} PrevIcon={<ArrowBackIcon/>} stopAutoPlayOnHover={true} interval={10000} animation={'fade'} className='carousel-width'>
				{indProj.images.map((screenshot: string, index: number) => (
					<img key={index} className='image-carousel border border-white rounded-3xl' src={screenshot} alt='Project Screenshot' />
				))}
			</Carousel> */}
			<div className='flex flex-row'>
				<div className='flex flex-col w-[560px]'>
					<h2 className='text-slate-300 text-3xl font-bold'>
						{indProj.name}
					</h2>
					<p className='text-slate-100 text-md font-semibold'>
						{indProj.description}
					</p>
					<div className='flex flex-row flex-wrap justify-center w-[420px] max-h-[180px]'>
						{indProj.libraries.map((library: string, index: number) => (
							<div key={index} className='px-2 py-3 mx-[0.375rem] my-1 text-xl rounded-[5px] font-bold text-slate-800 max-h-[80px] bg-slate-300'>
								{library}
							</div>
						))}
					</div>
				</div>
				{/* <div className='flex flex-row flex-wrap justify-center w-[420px] max-h-[180px]'>
					{indProj.libraries.map((library: string, index: number) => (
						<div key={index} className='px-2 py-3 mx-[0.375rem] my-1 text-xl rounded-[5px] font-bold text-slate-800 max-h-[80px] bg-slate-300'>
							{library}
						</div>
					))}
				</div> */}
			</div>
			<Carousel NextIcon={<ArrowForwardIcon/>} PrevIcon={<ArrowBackIcon/>} stopAutoPlayOnHover={true} interval={10000} animation={'fade'} className='carousel-width'>
				{indProj.images.map((screenshot: string, index: number) => (
					<img key={index} className='image-carousel border border-white rounded-3xl' src={screenshot} alt='Project Screenshot' />
				))}
			</Carousel>
		</div>
	)
}

export { ProjectItem }