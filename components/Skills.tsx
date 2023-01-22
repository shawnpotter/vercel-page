import React from 'react'
import { 
	IoLogoAngular, IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoNodejs, IoLogoReact, IoLogoSass 
} from 'react-icons/io5'
import { FaJava } from 'react-icons/fa'
import { 
	SiBootstrap, SiCsharp, SiDocker, SiGithub, SiGraphql, SiJetbrains, SiJquery, SiMysql, SiNextdotjs, SiPhp, SiPostman, SiSpring, SiTailwindcss, SiTypescript, SiVisualstudio, SiVisualstudiocode 
} from 'react-icons/si'

export default function Skills() 
{
	return(
		<div className='w-full lg:h-screen p-5'>
			<div className='max-w-7xl mx-auto flex flex-col justify-center h-full'>
				
				<h2 className='py-4'>
					Skills
				</h2>

				<h3 className='py-4 text-lg'>
					Languages
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
				
					{/* Candidate for Componentization */}
					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoHtml5 size={60} color='#E44D26' className='w-'/>
							</div>
							<div>
								<p className='text-xl'>HTML</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoCss3 size={60} color='#264DE4'/>
							</div>
							<div>
								<p className='text-xl'>CSS</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoJavascript size={60} color='Gold'/>
							</div>
							<div>
								<p className='text-xl'>JavaScript</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<FaJava size={60} color='#5382A1'/>
							</div>
							<div>
								<p className='text-xl'>Java</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiMysql size={60} color='#00618A'/>
							</div>
							<div>
								<p className='text-xl'>MySQL</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiTypescript size={60} color='#3178C6'/>
							</div>
							<div>
								<p className='text-xl'>TypeScript</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiPhp size={60} color='#4f5b93'/>
							</div>
							<div>
								<p className='text-xl'>PHP</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiCsharp size={60} color='#189F20'/>
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

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoReact size={60} color='SkyBlue'/>
							</div>
							<div>
								<p className='text-xl'>React</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiNextdotjs size={60} color='White'/>
							</div>
							<div>
								<p className='text-xl'>Next.js</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoNodejs size={60} color='#84CE24'/>
							</div>
							<div>
								<p className='text-xl'>Node.js</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiJquery size={60} color='#0868AB'/>
							</div>
							<div>
								<p className='text-xl'>jQuery</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoSass size={60} color='#CD6799'/>
							</div>
							<div>
								<p className='text-xl'>SASS</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiSpring size={60} color='#6eb442'/>
							</div>
							<div>
								<p className='text-xl'>Spring</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<IoLogoAngular size={60} color='#DD0031'/>
							</div>
							<div>
								<p className='text-xl'>Angular</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiTailwindcss size={60} color='#38BDF8'/>
							</div>
							<div>
								<p className='text-xl'>TailwindCSS</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiBootstrap size={60} color='#8012F1'/>
							</div>
							<div>
								<p className='text-xl'>Bootstrap</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiGraphql size={60} color='DeepPink'/>
							</div>
							<div>
								<p className='text-xl'>GraphQL</p>
							</div>
						</div>
					</div>


				</div>

				<h3 className='py-4 text-lg'>
					Technologies
				</h3>
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiVisualstudio size={60} color='#875FC6'/>
							</div>
							<div>
								<p className='text-xl'>Visual Studio</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiVisualstudiocode size={60} color='#25AEF3'/>
							</div>
							<div>
								<p className='text-xl'>VS Code</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiJetbrains size={60} color='DeepPink'/>
							</div>
							<div>
								<p className='text-xl'>JetBrains</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiGithub size={60} color='White'/>
							</div>
							<div>
								<p className='text-xl'>GitHub</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiPostman size={60} color='#FD6C35'/>
							</div>
							<div>
								<p className='text-xl'>Postman</p>
							</div>
						</div>
					</div>

					<div className='p-6 shadow shadow-black rounded-xl hover:scale-105 ease-in duration-300 sm:p-2'>
						<div className='grid grid-cols-2 gap-4 justify-center items-center'>
							<div className='m-auto'>
								<SiDocker size={60} color='DodgerBlue'/>
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