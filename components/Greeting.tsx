import React from 'react';
import Image from 'next/image';
import logoLarge from '../public/assets/shawnpotter.png'
import { AiOutlineMail } from 'react-icons/ai';
/* import { BsFillPersonLinesFill } from 'react-icons/bs'; */
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Greeting() 
{
	return (
		<div className='w-full h-screen text-center'>
			<div className='max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>

					{/* Tagline location */}
{/* 
					<p className='uppercase text-sm tracking-widest text-gray-50'>
						
					</p>
 */}
					<Image className='py-2 mx-auto' src={logoLarge} alt=''/>
					<h1 className='py-2 text-gray-50'>
						Software Engineer
					</h1>
					<p className='py-4 text-gray-100 max-w-[70%] m-auto'>
						I specialize in front-end and full-stack development.
					</p>
					<div className='flex items-center justify-between max-w-xs m-auto py-4'>
						<div className='bg-[#BCB8B1] shadow-md shadow-gray-900 rounded-xl p-5 cursor-pointer hover:scale-105 hover:bg-[#B2B2BD] ease-in duration-300'>
							<a href='https://www.linkedin.com/in/shawn-potter/' aria-label="Link to Shawn's LinkedIn page">
								<FaLinkedin className='text-2xl' color='black' />
							</a>
						</div>
						<div className='bg-[#BCB8B1] shadow-md shadow-gray-900 rounded-xl p-5 cursor-pointer hover:scale-105 hover:bg-[#B2B2BD] ease-in duration-300'>
							<a href='https://github.com/shawnpotter' aria-label="Link to Shawn's GitHub page">
								<FaGithub className='text-2xl' color='black' />
							</a>
						</div>
						<div className='bg-[#BCB8B1] shadow-md shadow-gray-900 rounded-xl p-5 cursor-pointer hover:scale-105 hover:bg-[#B2B2BD] ease-in duration-300'>
							<a href='mailto:shawnpotter.inquires@gmail.com' aria-label="Click to send an email to Shawn">
								<AiOutlineMail className='text-2xl' color='black' />
							</a>
						</div>
{/* 						
						<div className='shadow shadow-black p-5 cursor-pointer hover:scale-105 ease-in duration-300'>
							<a href='/' aria-label="">
								<BsFillPersonLinesFill className='text-2xl' />
							</a>
						</div> 
*/}
					</div>
				</div>
			</div>
		</div>
	)
}