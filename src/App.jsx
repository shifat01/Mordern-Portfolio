import React from 'react'
import Navbar from './sections/components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ParticlesBackground from './sections/components/ParticlesBackground'
import CustomCursor from './sections/components/CustomCursor'
import IntroAnimation from './sections/components/IntroAnimation'

const App = () => {

  const [introDone, setIntroDone] = React.useState(false);
  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => {setIntroDone(true)}}/>}

      {introDone && (
        <div className='relative gradient text-white'>
        <CustomCursor/> 
        {/* <ParticlesBackground/> */}

        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
      )}
    </>
  )
}

export default App