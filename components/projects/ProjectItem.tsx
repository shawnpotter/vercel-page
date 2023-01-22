import React from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface Props 
{
	title: string
	backgroundImg: StaticImageData
	stack: string
	projectUrl: string
	buttonText: string
}

const ProjectItem: React.FC<Props> = ({title, backgroundImg, stack, projectUrl, buttonText}) =>
{

	return(
		<div className='relative flex items-center h-auto w-full shadow shadow-black rounded-xl p-4 group hover:bg-gradient-to-r from-blue-800 to-blue-600'>
			<Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='' aria-label="Snek-Bot's logo of a simplistic snake" />
			<div className='hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
				<h3 className='text-2xl text-white tracking-widest text-center'>{title}</h3>
				<p className='pb-4 pt-2 text-white text-center'>{stack}</p>
				<Link href={projectUrl}>
					<p className='text-center p-3 rounded-lg bg-white text-gray-900 font-bold text-lg cursor-pointer'>{buttonText}</p>
				</Link>
			</div>
		</div>
	)
}

export default ProjectItem