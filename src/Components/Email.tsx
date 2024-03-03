/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import Image from 'next/image'
import { useActiveSectionContext } from '@/context/action-section-context'
import { useSectionInView } from '@/hooks/sectionscroll'
import { sendEmail } from '@/actions/resend'
import { Submit } from './Submit'
import toast from 'react-hot-toast'

const Email = () => {
	const { ref } = useSectionInView('Contact', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section id='contact' ref={ref}	className='min-h-[50vh] mt-96 mb-12 text-center flex flex-col'>
			<h2 className='text-5xl text-slate-300 font-bold'>Contact me</h2>
			<p className='text-gray-700 mt-6 dark:text-white/80'>
				Please contact me directly at{' '}
				<a className='underline' href='mailto:al.tokjuman@gmail.com'>
					al.tokjuman@gmail.com
				</a>{' '}
					or through this form.
			</p>

			<form className='mt-10 flex flex-col dark:text-black' action={async (formData: any) => {
				const { data, error } = await sendEmail(formData)
				if (error) {
					toast.error(error)
					return
				}
				toast.success('Email sent successfully!')
			}}>
				<input className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'	name='senderEmail' type='email'	required maxLength={500} placeholder='Your email' />
				<textarea className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' name='message' placeholder='Your message' required maxLength={5000} />
				<Submit />
			</form>
		</section>
	)
}

export { Email }