import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
	const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string)
	if (state.succeeded) {
		return (
			<div id='contact'>
				<div className='flex justify-center py-20'>
					<h2>Thank You For Messaging Me!</h2>
				</div>
			</div>
		)
	}
	return (
		<div
			id='contact'
			className='w-full lg:h-5/6 p-5'
		>
			<div className='mx-auto max-w-7xl py-16 flex flex-col justify-center h-full'>
				<h2 className='py-4'>Contact Me</h2>
				<div className='grid lg:grid-cols-5 gap-8 text-gray-50'>
					{/* Left */}
					<div className='bg-[#495057] col-span-3 lg:col-span-2 w-full h-full rounded-xl shadow-md shadow-gray-900 px-4'>
						<div className='lg:p-4 h-full'>
							{/* picture */}
							{/* 
						<div>
							<img className='hover:scale-105 ease-in duration-300' src='' />
						</div> 
						*/}
							<div>
								<h2 className='py-2'>Shawn Potter</h2>
								<p>Software Engineer</p>
								<p className='py-4'>
									I am available for full-time positions. Contact me and let's
									talk.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8 font-semibold'>Connect With Me</p>
								<div className='flex items-center justify-between max-w-xs m-auto py-4 text-black'>
									<div className='bg-[#0077b6] rounded-xl shadow-md shadow-gray-900 p-5 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-200'>
										<a
											href='https://www.linkedin.com/in/shawn-potter/'
											aria-label="Link to Shawn's LinkedIn page"
										>
											<FaLinkedin
												className='text-2xl'
												color='#e6e6e6'
											/>
										</a>
									</div>
									<div className='bg-[#0077b6] rounded-xl shadow-md shadow-gray-900 p-5 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-200'>
										<a
											href='https://github.com/shawnpotter'
											aria-label="Link to Shawn's GitHub page"
										>
											<FaGithub
												className='text-2xl'
												color='#e6e6e6'
											/>
										</a>
									</div>
									<div className='bg-[#0077b6] rounded-xl shadow-md shadow-gray-900 p-5 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-200'>
										<a
											href='mailto:shawnpotter.inquires@gmail.com'
											aria-label='Click to send an email to Shawn'
										>
											<AiOutlineMail
												className='text-2xl'
												color='#e6e6e6'
											/>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Right */}
					<div className='bg-[#495057] text-white col-span-3 w-full h-auto rounded-xl shadow-md shadow-gray-900 lg:p-4'>
						<div className='p-4'>
							<form onSubmit={handleSubmit}>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label
											className='uppercase text-sm py-2 font-semibold'
											htmlFor='name'
										>
											Name
										</label>
										<input
											className='rounded-xl border-2 p-3 flex bg-[#212529] border-[#6c757d] placeholder:text-gray-50 placeholder:opacity-80'
											type='text'
											id='name'
											name='name'
											placeholder='First and Last'
											required
										/>
										<ValidationError
											prefix='name'
											field='name'
											errors={state.errors}
										/>
									</div>
									<div className='flex flex-col'>
										<label
											className='uppercase text-sm py-2 font-semibold'
											htmlFor='number'
										>
											Number
										</label>
										<input
											className='rounded-xl border-2 p-3 flex bg-[#212529] border-[#6c757d] placeholder:text-gray-50 placeholder:opacity-80'
											type='telephone'
											id='number'
											name='number'
											placeholder='(555) 555-5555'
											required
										/>
										<ValidationError
											prefix='number'
											field='number'
											errors={state.errors}
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label
										className='uppercase text-sm py-2 font-semibold'
										htmlFor='email'
									>
										Email
									</label>
									<input
										className='rounded-xl border-2 p-3 flex bg-[#212529] border-[#6c757d] placeholder:text-gray-50 placeholder:opacity-80'
										type='email'
										id='email'
										name='_replyto'
										placeholder='email@example.com'
										required
									/>
									<ValidationError
										prefix='email'
										field='email'
										errors={state.errors}
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label
										className='uppercase text-sm py-2 font-semibold'
										htmlFor='subject'
									>
										Subject
									</label>
									<input
										className='rounded-xl border-2 p-3 flex bg-[#212529] border-[#6c757d] placeholder:text-gray-50 placeholder:opacity-80'
										type='text'
										id='subject'
										name='_subject'
										placeholder='Subject'
										required
									/>
									<ValidationError
										prefix='subject'
										field='subject'
										errors={state.errors}
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label
										className='uppercase text-sm py-2 font-semibold'
										htmlFor='message'
									>
										Message
									</label>
									<textarea
										className='rounded-xl border-2 p-3 flex bg-[#212529] border-[#6c757d] placeholder:text-gray-50 placeholder:opacity-80'
										rows={10}
										id='message'
										name='message'
										placeholder='Ask me anything...'
										required
									/>
									<ValidationError
										prefix='message'
										field='message'
										errors={state.errors}
									/>
								</div>
								<button
									className='w-full p-4 mt-4 text-gray-50 font-semibold text disabled:shadow rounded-xl shadow-black uppercase bg-[#0077b6]'
									type='submit'
									disabled={state.submitting}
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
