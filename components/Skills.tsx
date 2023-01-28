import React from 'react'
import { 
	IoLogoAngular, IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoSass 
} from 'react-icons/io5'
import { FaJava } from 'react-icons/fa'
import { 
	SiBootstrap, SiCsharp, SiDocker, SiGithub, SiGraphql, SiHibernate, SiJetbrains, SiJquery, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPostman, SiSpring, SiTailwindcss, SiTypescript, SiVisualstudio, SiVisualstudiocode 
} from 'react-icons/si'

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
				
					{/* Candidate for Componentization */}
					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoHtml5 size={50} color='#E44D26' className='w-'/>
							</div>
							<div>
								<p className='text-xl'>HTML</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoCss3 size={50} color='#264DE4'/>
							</div>
							<div>
								<p className='text-xl'>CSS</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoJavascript size={50} color='Gold'/>
							</div>
							<div>
								<p className='text-xl'>JavaScript</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<FaJava size={50} color='#5382A1'/>
							</div>
							<div>
								<p className='text-xl'>Java</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiTypescript size={50} color='#3178C6'/>
							</div>
							<div>
								<p className='text-xl'>TypeScript</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiPhp size={50} color='#4f5b93'/>
							</div>
							<div>
								<p className='text-xl'>PHP</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiCsharp size={50} color='#189F20'/>
							</div>
							<div>
								<p className='text-xl'>C#</p>
							</div>
						</div>
					</div>

				</div>

				<h3 className='py-4 text-lg'>
					Frameworks & Libraries
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoReact size={50} color='SkyBlue'/>
							</div>
							<div>
								<p className='text-xl'>React</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiNextdotjs size={50} color='White'/>
							</div>
							<div>
								<p className='text-xl'>Next.js</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoNodejs size={50} color='#84CE24'/>
							</div>
							<div>
								<p className='text-xl'>Node.js</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiJquery size={50} color='#0868AB'/>
							</div>
							<div>
								<p className='text-xl'>jQuery</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoSass size={50} color='#CD6799'/>
							</div>
							<div>
								<p className='text-xl'>SASS</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiSpring size={50} color='#6eb442'/>
							</div>
							<div>
								<p className='text-xl'>Spring</p>
							</div>
						</div>
					</div>
{/* 
					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoAngular size={50} color='#DD0031'/>
							</div>
							<div>
								<p className='text-xl'>Angular</p>
							</div>
						</div>
					</div>
 */}
					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiTailwindcss size={50} color='#38BDF8'/>
							</div>
							<div>
								<p className='text-xl'>TailwindCSS</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiBootstrap size={50} color='#8012F1'/>
							</div>
							<div>
								<p className='text-xl'>Bootstrap</p>
							</div>
						</div>
					</div>

					{/* 					
					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiGraphql size={50} color='DeepPink'/>
							</div>
							<div>
								<p className='text-xl'>GraphQL</p>
							</div>
						</div>
					</div> 
					*/}


				</div>

				<h3 className='py-4 text-lg'>
					Databases
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiMysql size={50} color='#00618A'/>
							</div>
							<div>
								<p className='text-xl'>MySQL</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiMongodb size={50} color='#53B441'/>
							</div>
							<div>
								<p className='text-xl'>MongoDB</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiHibernate size={50} color='#BCAE79'/>
							</div>
							<div>
								<p className='text-xl'>Hibernate</p>
							</div>
						</div>
					</div>

				</div>

				<h3 className='py-4 text-lg'>
					Technologies
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiVisualstudio size={50} color='#875FC6'/>
							</div>
							<div>
								<p className='text-xl'>Visual Studio</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiVisualstudiocode size={50} color='#25AEF3'/>
							</div>
							<div>
								<p className='text-xl'>VS Code</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiJetbrains size={50} color='DeepPink'/>
							</div>
							<div>
								<p className='text-xl'>JetBrains</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiGithub size={50} color='White'/>
							</div>
							<div>
								<p className='text-xl'>GitHub</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiPostman size={50} color='#FD6C35'/>
							</div>
							<div>
								<p className='text-xl'>Postman</p>
							</div>
						</div>
					</div>

					<div className='p-2 shadow shadow-black  hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiDocker size={50} color='DodgerBlue'/>
							</div>
							<div>
								<p className='text-xl'>Docker</p>
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
}