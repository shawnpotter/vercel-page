import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

export default function About() {
	return (
		<div
			id='about'
			className='w-full lg:h-full xl:h-screen p-5 items-center'
		>
			<div className='max-w-7xl pt-20 m-auto flex flex-col justify-center h-full'>
				<div className='col-span-2'>
					<h2 className='py-4'>About Me</h2>
					<p className='py-2'>
						In June of 2022, I graduated with my Bachelor's in Software
						Development. An avid gamer, I've was always interested in technology
						and how it works. When I started learning to code in High School I
						knew it was something I wanted to pursue.
					</p>
					<p className='py-2'>
						Getting deeper into software development I realized that I had found
						a niche in life, something that I can not just do, but be actively
						good at. Since graduating I've spent my time expanding my tech stack
						and working on projects. My focus has mostly been on front-end and
						full-stack development with an emphasis on React.js. However, I've
						also taken the time to learn other popular frameworks.
					</p>
					<p className='py-2'>
						Currently I work as a contract software developer working with
						Artificial Intelligence, where I work with AI models to perfect them
						into useful tools for developers like me.
					</p>
					<div className='flex pt-20 justify-center md:mr-20 md:justify-end'>
						<blockquote className='grid-row-2 text-lg italic p-3 bg-[#131518]/50 rounded-2xl w-full md:w-2/5 self-center font-roboto-slab'>
							<div>
								<RiDoubleQuotesL className='inline' />
								<span>Courage is found in unlikely places.</span>
								<RiDoubleQuotesR className='inline' />
							</div>
							<div className='flex md:pt-2 justify-end'>
								<p>― J.R.R. Tolkien</p>
							</div>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	)
}
