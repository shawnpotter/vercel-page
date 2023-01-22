import React from 'react'

export default function About()
{
	return(
		<div className='w-full md:h-screen p-5 items-center pb-16'>
			<div className='max-w-7xl m-auto md:grid grid-cols-2 gap-8'>
				<div className='col-span-2'>
					<h2 className='py-4'>
						About Me
					</h2>
					<p className='py-2'>
						In June of 2022 I graduated with my Bachelors in Software Development. 
						It's been a long road getting to this point and hasn't always been an 
						easy one. There was a lot of bumps along the way and maybe some day I
						will be willing to tell the entire story.
					</p>
					<p className='py-2'>
						Adversity, nor a pandemic, could stop me from finally achiving my goals.
						Getting deeper into programming I realized that I had found a niche,
						something that I can not just do, but be actively good at. Since graduating
						I've been spending my time learning and expanding my skill base while job 
						hunting. My focus right now is mostly on front-end and full-stack Development
						with an emphasis in React.js. However I've also taken the time to learn About
						Angular, MongoDB, GraphQL and other languages and tools. 

					</p>
					<p className='py-2'>
						I look forward to where life takes me, knowing that I can already weather what 
						the storm throws my way.
					</p>
				</div>
			</div>
		</div>
	)
}
