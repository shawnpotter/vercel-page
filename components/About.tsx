import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

export default function About() {
	return (
		<div
			id='about'
			className='w-full lg:h-screen p-5 items-center'
		>
			<div className='max-w-7xl pt-20 m-auto flex flex-col justify-center h-full'>
				<div className='col-span-2'>
					<h2 className='py-4'>About Me</h2>
					<p className='py-2'>
						In June of 2022 I graduated with my Bachelors in Software
						Development. It's been a long road getting to this point and hasn't
						always been an easy one. Adversity, nor a pandemic, could stop me
						from finally achieving my goals.
					</p>
					<p className='py-2'>
						Getting deeper into web development I realized that I had found a
						niche, something that I can not just do, but be actively good at.
						Since graduating I've spent my time expanding my tech stack and
						working on projects. My focus has mostly on front-end and full-stack
						development with an emphasis in React.js. However I've also taken
						the time to learn other popular frameworks like AngularJS.
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
