import React from 'react'
import SkillItem from './skills/SkillItem'
import Css3Logo from '../public/assets/svg/css3-original.svg'
import JSLogo from '../public/assets/svg/javascript-original.svg'
import HtmlLogo from '../public/assets/svg/html5-original.svg'
import JavaLogo from '../public/assets/svg/java-original.svg'
import TsLogo from '../public/assets/svg/typescript-original.svg'
import PhpLogo from '../public/assets/svg/php-original.svg'
import CsLogo from '../public/assets/svg/csharp-original.svg'
import PythonLogo from '../public/assets/svg/python-original.svg'
import ReactLogo from '../public/assets/svg/react-original.svg'
import NextLogo from '../public/assets/svg/nextjs-original.svg'
import NodeLogo from '../public/assets/svg/nodejs-original.svg'
import JqLogo from '../public/assets/svg/jquery-original.svg'
import SassLogo from '../public/assets/svg/sass-original.svg'
import SpringLogo from '../public/assets/svg/spring-original.svg'
import TailwindLogo from '../public/assets/svg/tailwindcss-plain.svg'
import BootstrapLogo from '../public/assets/svg/bootstrap-original.svg'
import MysqlLogo from '../public/assets/svg/mysql-original.svg'
import MongodbLogo from '../public/assets/svg/mongodb-original.svg'
import HibernateLogo from '../public/assets/svg/hibernate-icon.svg'
import VisualStudioLogo from '../public/assets/svg/visualstudio-plain.svg'
import VscodeLogo from '../public/assets/svg/vscode-original.svg'
import JetbrainsLogo from '../public/assets/svg/jetbrains-original.svg'
import GithubLogo from '../public/assets/svg/github-original.svg'
import PostmanLogo from '../public/assets/svg/getpostman-icon.svg'
import DockerLogo from '../public/assets/svg/docker-plain.svg'


export default function Skills() 
{
	return(
		<div id='skills' className='w-full lg:h-full p-5'>
			<div className='max-w-7xl py-16 mx-auto flex flex-col justify-center h-full'>
				
				<h2 className='py-4'>
					Skills
				</h2>

				<h3 className='py-4 text-lg'>
					Languages
				</h3>
				<div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
					<SkillItem
						icon={HtmlLogo}
						name='HTML5'
						altText='HTML 5 Icon'
					/>
					<SkillItem
						icon={Css3Logo}
						name='CSS'
						altText='Cascading Style Sheets 3 Icon'
					/>
					<SkillItem
						icon={JSLogo}
						name='JavaScript'
						altText='JavaScript Icon'
					/>
					<SkillItem
						icon={JavaLogo}
						name='Java'
						altText='Java icon'
					/>
					<SkillItem
						icon={TsLogo}
						name='TypeScript'
						altText='TypeScript logo'
					/>
					<SkillItem
						icon={PhpLogo}
						name='PHP'
						altText='PHP logo'
					/>
					<SkillItem
						icon={CsLogo}
						name='C#'
						altText='C Sharp logo'
					/>
					<SkillItem
						icon={PythonLogo}
						name='Python'
						altText='Python logo'
					/>
				</div>

				<h3 className='py-4 text-lg'>
					Frameworks & Libraries
				</h3>
				<div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
					<SkillItem
						icon={ReactLogo}
						name='React.js'
						altText='React logo'
					/>
					<SkillItem
						icon={NextLogo}
						name='Next.js'
						altText='Next.js logo'
					/>
					<SkillItem
						icon={NodeLogo}
						name='Node.js'
						altText='Node.js logo'
					/>
					<SkillItem
						icon={JqLogo}
						name='jQuery'
						altText='jQuery Logo'
					/>
					<SkillItem
						icon={SassLogo}
						name='SASS'
						altText='SASS logo'
					/>
					<SkillItem
						icon={SpringLogo}
						name='Spring'
						altText='Spring Framework logo'
					/>
{/* 
					<SkillItem
						icon={AngularLogo}
						name='AngularJS'
						altText='Angular logo'
					/>
*/}
					<SkillItem
						icon={TailwindLogo}
						name='TailwindCSS'
						altText='Tailwind CSS logo'
					/>
					<SkillItem
						icon={BootstrapLogo}
						name='Bootstrap'
						altText='Bootstrap logo'
					/>
{/* 
					<SkillItem
						icon={GraphqlLogo}
						name='GraphQL'
						altText='GraphQL logo'
					/>
*/}
				</div>

				<h3 className='py-4 text-lg'>
					Databases
				</h3>
				<div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
					<SkillItem
						icon={MysqlLogo}
						name='MySQL'
						altText='MySQL database logo'
					/>
					<SkillItem
						icon={MongodbLogo}
						name='MongoDB'
						altText='Mongo Database logo'
					/>
					<SkillItem
						icon={HibernateLogo}
						name='Hibernate'
						altText='Hibernate database logo'
					/>
 				</div>
				
				<h3 className='py-4 text-lg'>
					Technologies
				</h3>
				<div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
					<SkillItem
						icon={VisualStudioLogo}
						name='Visual Studio'
						altText='logo for Visual Studio'
					/>
					<SkillItem
						icon={VscodeLogo}
						name='VS Code'
						altText='logo for Visual Studio Code'
					/>
					<SkillItem
						icon={JetbrainsLogo}
						name='Jetbrains'
						altText='logo for Jetbrains IDE'
					/>
					<SkillItem
						icon={GithubLogo}
						name='GitHub'
						altText='logo for GitHub'
					/>
					<SkillItem
						icon={PostmanLogo}
						name='Postman'
						altText='logo for Postman'
					/>
					<SkillItem
						icon={DockerLogo}
						name='Docker'
						altText='logo for Docker'
					/>
				</div>
			</div>		
		</div>
	)
}