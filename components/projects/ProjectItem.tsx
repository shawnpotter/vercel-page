import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Props {
	title: string
	backgroundImg: StaticImageData
	stack: string
	info: string
	projectUrl: string
	buttonText: string
	altText: string
}

const ProjectItem: React.FC<Props> = ({
	title,
	backgroundImg,
	stack,
	info,
	projectUrl,
	buttonText,
	altText,
}) => {
	return (
		<div className='bg-[#495057] relative flex items-center h-auto w-full min-h-[350px] md:min-h-[500px] shadow-md shadow-gray-900 rounded-xl p-4 group hover:bg-gradient-to-r from-[#212529] to-[#495057]'>
			<Image
				className='m-auto group-hover:opacity-10'
				src={backgroundImg}
				alt={altText}
			/>
			<div className='hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 lg:w-1/2'>
				<h3 className='text-2xl font-bold text-gray-50 tracking-widest text-center'>
					{title}
				</h3>
				<p className='pb-4 pt-2 font-semibold text-gray-50 text-center'>
					{stack}
				</p>
				<p className='pb-4 pt-2 text-gray-50 text-center'>{info}</p>
				<Link href={projectUrl}>
					<p className='rounded-lg text-center p-3 bg-[#f1faee] text-gray-900 shadow-md shadow-gray-800 font-bold text-lg cursor-pointer'>
						{buttonText}
					</p>
				</Link>
			</div>
		</div>
	)
}

export default ProjectItem
