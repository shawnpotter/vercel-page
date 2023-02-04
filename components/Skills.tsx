import React from 'react'
import { 
	IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoSass 
} from 'react-icons/io5'
import { FaJava } from 'react-icons/fa'
import { 
	SiBootstrap, SiCsharp, SiDocker, SiGithub, SiHibernate, SiJetbrains, SiJquery, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPostman, SiPython, SiSpring, SiTailwindcss, SiTypescript, SiVisualstudio, SiVisualstudiocode 
} from 'react-icons/si'
import SkillItem from './skills/SkillItem'

export default function Skills() 
{
	return(
		<div id='skills' className='w-full lg:h-screen p-5'>
			<div className='max-w-7xl py-16 mx-auto flex flex-col justify-center h-full'>
				
				<h2 className='py-4'>
					Skills
				</h2>

				<h3 className='py-4 text-lg'>
					Languages
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					<SkillItem
						icon={IoLogoHtml5}
						colorString="#E44D26"
						name="HTML" 
					/>
					<SkillItem
						icon={IoLogoCss3}
						colorString="#264DE4"
						name="CSS" 
					/>
					<SkillItem
						icon={IoLogoJavascript}
						colorString="Gold"
						name="JavaScript" 
					/>
					<SkillItem
						icon={FaJava}
						colorString="#5382A1"
						name="Java" 
					/>
					<SkillItem
						icon={SiTypescript}
						colorString="#3178C6"
						name="TypeScript" 
					/>
					<SkillItem
						icon={SiPhp}
						colorString="#4f5b93"
						name="PHP" 
					/>
					<SkillItem
						icon={SiCsharp}
						colorString="#189F20"
						name="C#" 
					/>
					<SkillItem
						icon={SiPython}
						colorString="#FFD342"
						name="Python" 
					/>
				</div>

				<h3 className='py-4 text-lg'>
					Frameworks & Libraries
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					<SkillItem
						icon={IoLogoReact}
						colorString="SkyBlue"
						name="React" 
					/>
					<SkillItem
						icon={SiNextdotjs}
						colorString="White"
						name="Next.js" 
					/>
					<SkillItem
						icon={IoLogoNodejs}
						colorString="#84CE24"
						name="Node.js" 
					/>
					<SkillItem
						icon={SiJquery}
						colorString="#0868AB"
						name="jQuery" 
					/>
					<SkillItem
						icon={IoLogoSass}
						colorString="#CD6799"
						name="SASS" 
					/>
					<SkillItem
						icon={SiSpring}
						colorString="#6eb442"
						name="Spring" 
					/>
{/* 
					<SkillItem
						icon={IoLogoAngular}
						colorString="#DD0031"
						name="Angular" 
					/>
 */}
 					<SkillItem
						icon={SiTailwindcss}
						colorString="#38BDF8"
						name="TailwindCSS" 
					/>
					<SkillItem
						icon={SiBootstrap}
						colorString="#8012F1"
						name="Bootstrap" 
					/>
{/* 
					<SkillItem
						icon={SiGraphql}
						colorString="DeepPink"
						name="GraphQL" 
					/>
*/}
				</div>

				<h3 className='py-4 text-lg'>
					Databases
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>

					<SkillItem
						icon={SiMysql}
						colorString="#00618A"
						name="MySQL" 
					/>
					<SkillItem
						icon={SiMongodb}
						colorString="#53B441"
						name="MongoDB" 
					/>
					<SkillItem
						icon={SiHibernate}
						colorString="#BCAE79"
						name="Hibernate" 
					/>
				</div>

				<h3 className='py-4 text-lg'>
					Technologies
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					<SkillItem
						icon={SiVisualstudio}
						colorString="#875FC6"
						name="Visual Studio" 
					/>
					<SkillItem
						icon={SiVisualstudiocode}
						colorString="#25AEF3"
						name="VS Code" 
					/>
					<SkillItem
						icon={SiJetbrains}
						colorString="DeepPink"
						name="JetBrains" 
					/>
					<SkillItem
						icon={SiGithub}
						colorString="White"
						name="GitHub" 
					/>
					<SkillItem
						icon={SiPostman}
						colorString="#FD6C35"
						name="Postman" 
					/>
					<SkillItem
						icon={SiDocker}
						colorString="DodgerBlue"
						name="Docker" 
					/>
				</div>
			</div>		
		</div>
	)
}