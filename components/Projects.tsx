import Image from 'next/image'
import React from 'react'
import SnekLogo from '../public/assets/snek.png'
import PricingApp from '../public/assets/pricingapp.png'
import Link from 'next/link'
import ProjectItem from './projects/ProjectItem'

export default function Projects()
{
	return  (
		<div className='w-full'>
			<div className='max-w-7xl mx-auto px-2 py-16'>
				<h2 className='uppercase py-2'>Projects</h2>
				
				<div className='grid md:grid-cols-2 gap-8'>
				
					<ProjectItem
						title='Snek Bot'
						backgroundImg={SnekLogo}
						stack = 'Node.js, Discord.js'
						projectUrl='https://github.com/ShawnPotter/snek-bot' 
						buttonText='View Repository'
					/>
					<ProjectItem
						title={'Canvas Pricing App'}
						backgroundImg={PricingApp}
						stack = {'Next.js, Solidity'}
						projectUrl={'https://canvas-pricing-app.vercel.app/'} 
						buttonText='View Page'
					/>
					
				</div>
				

			</div>
		</div>
	)
}