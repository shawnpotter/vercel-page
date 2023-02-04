import React from "react";

interface Props 
{
	icon: React.ElementType
	colorString: string
	name: string
}

const SkillItem: React.FC<Props> =({icon, colorString, name}) =>
{
	return(
		<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
			<div className='grid grid-cols-2 gap-4 justify-center items-center'>
				<div className='m-auto'>
					{React.createElement(icon, {size: 50, color: `${colorString}`})}
				</div>
				<div>
					<p className='text-xl'>{name}</p>
				</div>
			</div>
		</div>
	)
}

export default SkillItem