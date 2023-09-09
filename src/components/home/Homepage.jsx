import React from 'react'
import TopSection from './topsection/TopSection'
import About from './about/About'
import Features from './features/Features'
import Stats from './stats/Stats'
import Tools from './tools/Tools'
import Management from './management/Management'
import Contact from './contact/Contact'
import Footer from '../footer/Footer'

const Homepage = () => {
  return (
    <div>
        <TopSection />
        <About />
        <Features />
        <Stats />
        <Tools />
        <Management />
        <Contact />
        <Footer />
    </div>
  )
}

export default Homepage