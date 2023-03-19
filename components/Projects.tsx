import React from 'react'
import SnekLogo from '../public/assets/snek.png'
import PricingApp from '../public/assets/pricingapp.png'
import BookKeeper from '../public/assets/bookkeeper.png'
import ProjectItem from './projects/ProjectItem'
import Dashboard from '../public/assets/dashboard.png'

export default function Projects() {
	return (
		<div
			id='projects'
			className='w-full lg:h-full p-5'
		>
			<div className='max-w-7xl mx-auto py-16 flex flex-col justify-center h-full'>
				<h2 className='py-4'>Projects</h2>

				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title={'Fullstack Dashboard'}
						backgroundImg={Dashboard}
						stack={'MongoDB, Express, React, Node, Material UI, Redux'}
						info={
							'Currently hosted on OnRender for free. Please allow time for the API to boot up when loading the page'
						}
						projectUrl={'https://admin-frontend-mhdp.onrender.com/'}
						buttonText='View Page'
						altText=''
						ariaLabel=''
					/>

					<ProjectItem
						title='S.N.E.K. Bot'
						backgroundImg={SnekLogo}
						stack='Node.js, Discord.js, MongoDB'
						info={'Currently hosted from local computer and not available 24/7'}
						projectUrl='https://github.com/ShawnPotter/snek-bot'
						buttonText='View Repository'
						altText=''
						ariaLabel=''
					/>

					<ProjectItem
						title={'Canvas Pricing App'}
						backgroundImg={PricingApp}
						stack={'Next.js, Solidity'}
						info={
							'Tech Demo. Must be connected to the Rinkeby Test Network to use'
						}
						projectUrl={'https://canvas-pricing-app.vercel.app/'}
						buttonText='View Page'
						altText=''
						ariaLabel=''
					/>

					<ProjectItem
						title={'Book Keeper'}
						backgroundImg={BookKeeper}
						stack={'Java, Spring, Javascript, Bootstrap 5, MySQL'}
						info={
							'School project. Full site is not available, but repository access available upon request'
						}
						projectUrl={'mailto:shawnpotter.inquires@gmail.com'}
						buttonText='Request Access'
						altText=''
						ariaLabel=''
					/>
				</div>
			</div>
		</div>
	)
}
