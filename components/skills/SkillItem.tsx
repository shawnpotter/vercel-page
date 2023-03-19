import Image from 'next/image'
import React from 'react'

interface Props {
	icon: string
	name: string
	altText: string
}

const SkillItem: React.FC<Props> = ({ icon, name, altText }) => {
	return (
		<div className='p-2 pt-4 text-white shadow-md shadow-gray-900 rounded-xl bg-[#495057] hover:scale-105 ease-in duration-300'>
			<div className='grid grid-rows-2 justify-center items-center'>
				<div className='m-auto'>
					<Image
						src={icon}
						alt={altText}
						width={50}
						height={50}
					/>
				</div>
				<div className='m-auto'>
					<p className='font-semibold text-center text-xs xs:text-sm md:text-xl'>
						{name}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SkillItem
