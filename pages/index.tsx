import Head from 'next/head'
import Navbar from '../components/Navbar'
import Greeting from '../components/Greeting'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Shawn Potter</title>
				<meta
					name='description'
					content='Software Engineer Based In The Pacific Northwest'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<Navbar />
			<Greeting />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<div className='flex justify-center pt-6 pb-12'>
				<Link href='/'>
					<div className='bg-[#0077b6] text-black rounded-xl shadow-md shadow-gray-900 p-4 cursor-pointer hover:scale-105 hover:bg-[#0d4b6d] ease-in duration-300'>
						<HiOutlineChevronDoubleUp size={30} />
					</div>
				</Link>
			</div>
		</div>
	)
}
