/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import Image from 'next/image'
import { useSectionInView } from '@/hooks/sectionscroll'
import { sendEmail } from '@/actions/resend'
import { Submit } from './Submit'
import toast from 'react-hot-toast'

const Email = () => {
	const { ref } = useSectionInView('Contact', 0.5)

	return (
		<section id='contact' ref={ref}	className='min-h-[50vh] w-full pt-64 pb-32 text-center flex flex-col background-gradient-large'>
			<div className='flex flex-col text-center max-w-[560px] mx-auto'>
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
			</div>
		</section>
	)
}

export { Email }