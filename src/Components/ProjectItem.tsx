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
		<Carousel NextIcon={<ArrowForwardIcon/>} PrevIcon={<ArrowBackIcon/>} stopAutoPlayOnHover={true} interval={10000} animation={'fade'}>
			{indProj.images.map((screenshot: string, index: number) => (
				<img key={index} className='image-carousel' src={screenshot} alt='Project Screenshot' />
			))}
		</Carousel>
	)
}

export { ProjectItem }