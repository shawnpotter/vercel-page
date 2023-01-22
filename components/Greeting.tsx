import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Greeting() 
{
	return (
		<div className='w-full h-screen text-center'>
			<div className='max-w-7xl w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-50'>
						{/* Tagline location */}
					</p>
					<h1 className='py-4 text-gray-50'>
						Hi, I'm Shawn
					</h1>
					<h1 className='py-2 text-gray-50'>
						A Software Engineer
					</h1>
					<p className='py-4 text-gray-100 max-w-[70%] m-auto'>
						I'm a recent software development graduate from Green River College 
						specializing in front-end and full-stack development.
					</p>
					<div className='flex items-center justify-between max-w-xs m-auto py-4'>
						<div className='rounded-full shadow shadow-black p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<a href='https://www.linkedin.com/in/shawn-potter/' aria-label="Link to Shawn's LinkedIn page">
								<FaLinkedin />
							</a>
						</div>
						<div className='rounded-full shadow shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
							<a href='https://github.com/shawnpotter' aria-label="Link to Shawn's GitHub page">
								<FaGithub />
							</a>
						</div>
						<div className='rounded-full shadow shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
							<a href='mailto:shawnpotter.inquires@gmail.com' aria-label="Click to send an email to Shawn">
								<AiOutlineMail />
							</a>
						</div>
						<div className='rounded-full shadow shadow-black p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
							{/* This will eventually be a link */}
							{/* <a href='/' aria-label=""> */}
								<BsFillPersonLinesFill />
							{/* </a> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}