import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
/* import { BsFillPersonLinesFill } from 'react-icons/bs' */

export default function Navbar() {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className='fixed bg-[#343a40] w-full h-12 shadow shadow-black z-[100] md:h-20'>
			<div className='flex justify-end items-center w-full h-full px-2 2xl:px-16'>
				<div>
					<ul className='hidden md:flex font-semibold'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/#about'>
							<li className='ml-10 text-sm uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/#skills'>
							<li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Projects
							</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-sm uppercase hover:border-b'>
								Contact
							</li>
						</Link>
					</ul>
					<div className='md:hidden'>
						<AiOutlineMenu
							onClick={handleNav}
							size={25}
						/>
					</div>
				</div>
			</div>

			<div
				className={
					nav ? 'md:hidden fixed right-0 top-0 w-full h-screen bg-black/50' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-[#343a40] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div className='flex w-full items-center justify-end'>
						<div
							onClick={handleNav}
							className='bg-[#343a40] rounded-xl shadow shadow-gray-900 p-3 cursor-pointer'
						>
							<AiOutlineClose size={25} />
						</div>
					</div>
					<div className='border-b border-gray-300 my-4'>
						<p className='w-[85%] md:w-[90%] py-4'>{/* Tagline location */}</p>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase font-semibold'>
							<Link href='/'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									Home
								</li>
							</Link>
							<Link href='#about'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									About
								</li>
							</Link>
							<Link href='#skills'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									Skills
								</li>
							</Link>
							<Link href='#projects'>
								<li
									onClick={() => setNav(false)}
									className='py-4 text-sm'
								>
									Projects
								</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-white font-semibold'>
								Connect With Me
							</p>
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<Link href='https://www.linkedin.com/in/shawn-potter/'>
									<div className='bg-[#0077b6] rounded-xl shadow shadow-gray-900 p-3 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-300'>
										<FaLinkedin
											className='text-xl'
											color='#e6e6e6'
										/>
									</div>
								</Link>

								<Link href='https://github.com/shawnpotter'>
									<div className='bg-[#0077b6] rounded-xl shadow shadow-gray-900 p-3 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-300'>
										<FaGithub
											className='text-xl'
											color='#e6e6e6'
										/>
									</div>
								</Link>

								<Link href='mailto:shawnpotter.inquires@gmail.com'>
									<div className='bg-[#0077b6] rounded-xl shadow shadow-gray-900 p-3 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-300'>
										<AiOutlineMail
											className='text-xl'
											color='#e6e6e6'
										/>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
