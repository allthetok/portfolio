'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '../content/textdata'
import Link from 'next/link'
import { useActiveSectionContext } from '@/context/action-section-context'

const Navbar = () => {
	const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<header className='z-[999] relative'>
			{/* <div className='fixed top-0 h-[4.5rem] right-0 w-[600px] border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-2xl'></div> */}
			<nav className='flex fixed h-[4.5rem] py-2 nav-top left-[25px]'>
				<ul className='flex w-[22rem] flex-wrap nav-flex items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
					{links.map((link) => (
						<li className='h-3/4 flex items-center justify-center relative' key={link.hash}>
							<Link className={`flex w-full items-center justify-center px-3 py-3 hover:text-slate-400 transition uppercase text-2xl text-slate-200 text-shdw font-semibold tracking-[0.2em] ${activeSection === link.name ? 'text-shdw-act' : ''}`} href={link.hash}
								onClick={() => {
									setActiveSection(link.name)
									setTimeOfLastClick(Date.now())
								}}>
								{link.name}
								{link.name === activeSection && (
									<span className='rounded-full absolute inset-0 -z-10 text-shdw-act'></span>
								)}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export { Navbar }