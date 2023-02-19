import React from 'react'
import SnekLogo from '../public/assets/snek.png'
import PricingApp from '../public/assets/pricingapp.png'
import BookKeeper from '../public/assets/bookkeeper.png'
import ProjectItem from './projects/ProjectItem'

export default function Projects()
{
	return  (
		<div id='projects' className='w-full lg:h-full p-5'>
			<div className='max-w-7xl mx-auto px-2 py-16 flex flex-col justify-center h-full'>
				<h2 className='py-4'>Projects</h2>
				
				<div className='grid md:grid-cols-2 gap-8'>
				
					<ProjectItem
						title='S.N.E.K. Bot'
						backgroundImg={SnekLogo}
						stack = 'Node.js, Discord.js, MongoDB'
						projectUrl='https://github.com/ShawnPotter/snek-bot' 
						buttonText='View Repository'
						altText=''
						ariaLabel=''
					/>
					<ProjectItem
						title={'Canvas Pricing App'}
						backgroundImg={PricingApp}
						stack = {'Next.js, Solidity'}
						projectUrl={'https://canvas-pricing-app.vercel.app/'} 
						buttonText='View Page'
						altText=''
						ariaLabel=''
					/>

					<ProjectItem
						title={'Book Keeper'}
						backgroundImg={BookKeeper}
						stack = {'Java, Spring Boot, Javascript, Bootstrap 5, MySQL'}
						projectUrl={'mailto:shawnpotter.inquires@gmail.com'} 
						buttonText='Request Repo Access'
						altText=''
						ariaLabel=''
					/>
					
				</div>
				

			</div>
		</div>
	)
}