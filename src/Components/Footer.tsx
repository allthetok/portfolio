import React from 'react'
import Link from 'next/link'
import LinkIcon from '@mui/icons-material/Link'
import { Typography } from '@mui/material'
// import './Footer.css'

const Footer = () => {
	return (
		<footer className='position-footer'>
			<div className='footer-background'></div>
			<Typography variant='body2' color='text.secondary' align='center' sx={{
				width: '100%',
				height: '35px',
				fontSize: '1rem',
				color: '#daddeb',
				paddingTop: '10px',
				verticalAlign: 'middle',
				// background: 'linear-gradient(109.6deg, rgb(218, 185, 252) 11.2%, rgb(125, 89, 252) 91.1%)'
				background: 'linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(1, 179, 201) 97.6%)'
			}}>
				{'Copyright © '}
				<Link target='_blank' rel='noopener noreferrer' href='https://github.com/allthetok/portfolio' className='git-link'>
					<LinkIcon sx={{
						verticalAlign: 'bottom',
						'&hover': {
							cursor: 'pointer'
						}
					}} />
				</Link>
				{' '}Allen Tokjuman{' - '}
				{new Date().getFullYear()}
			</Typography>
		</footer>
	)
}

export { Footer }