import React from 'react'
import Image from 'next/image'
import logoLarge from '../public/assets/shawnpotter.png'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Greeting() {
	return (
		<div className='w-full h-screen mdxl:h-3/4 lg:h-full text-center relative'>
			<div className='flex h-full w-full z-0'>
				<div className='absolute w-full md:h-[50rem] lg:h-screen bg-black/[0.4] z-10'></div>
				<div className='flex w-full md:h-[50rem] lg:h-screen bg-[#020101] bg-planets bg-center md:bg-auto z-0'></div>
			</div>
			<div className='flex h-full md:h-4/5 mdxl:h-full lg:h-screen w-full p-2 -top-2 md:-top-0 justify-center items-center z-20 absolute'>
				<div>
					<Image
						className='py-2 mx-auto'
						src={logoLarge}
						alt='word logo'
					/>
					<h1 className='py-2 text-gray-100'>Software Engineer</h1>
					<p className='py-4 text-gray-300 max-w-[70%] font-semibold m-auto'>
						Front End and Full Stack
						<br />
						Based in the Pacific Northwest
					</p>
					<div className='flex items-center justify-between max-w-xs m-auto py-4'>
						<a
							href='https://www.linkedin.com/in/shawn-potter/'
							aria-label="Link to Shawn's LinkedIn page"
						>
							<div className='bg-[#0077b6] shadow-md shadow-gray-900 rounded-xl p-4 sm:p-5 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-300'>
								<FaLinkedin
									className='text-2xl'
									color='#e6e6e6'
								/>
							</div>
						</a>
						<a
							href='https://github.com/shawnpotter'
							aria-label="Link to Shawn's GitHub page"
						>
							<div className='bg-[#0077b6] shadow-md shadow-gray-900 rounded-xl p-4 sm:p-5 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-300'>
								<FaGithub
									className='text-2xl'
									color='#e6e6e6'
								/>
							</div>
						</a>
						<a
							href='#contact'
							aria-label='Click to send an email to Shawn'
						>
							<div className='bg-[#0077b6] shadow-md shadow-gray-900 rounded-xl p-4 sm:p-5 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-300'>
								<AiOutlineMail
									className='text-2xl'
									color='#e6e6e6'
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
