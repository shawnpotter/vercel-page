import Head from 'next/head'
import Navbar from '../components/Navbar'
import Greeting from '../components/Greeting'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


export default function Home() 
{
  return (
    <div>
      <Head>
        <title>Shawn Potter | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Greeting/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
