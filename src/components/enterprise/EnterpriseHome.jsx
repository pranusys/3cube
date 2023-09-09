import React from 'react'
import TopSection from './topsection/TopSection'
import Stats from './stats/Stats'
import Features from './features/Features'
import Contact from './contact/Contact'
import Footer from '../footer/Footer'

const EnterpriseHome = () => {
  return (
    <div>
        <TopSection />
        <Stats />
        <Features />
        <Contact />
        <Footer />
    </div>
  )
}

export default EnterpriseHome