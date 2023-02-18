import Image from "next/image";
import React from "react";

interface Props 
{
	icon: string
	name: string
	altText: string
}

const SkillItem: React.FC<Props> =({icon, name, altText}) =>
{
	return(
		<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
			<div className='grid grid-cols-2 gap-4 justify-center items-center'>
				<div className='m-auto text-[3rem]'>
					<Image src={icon} alt={altText} width={50} height={50}/>
				</div>
				<div>
					<p className='text-xl'>{name}</p>
				</div>
			</div>
		</div>
	)
}

export default SkillItem