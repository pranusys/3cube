import React from 'react'
import TopSection from './topsec/TopSection'
import AboutCompany from './about-company/AboutCompany'
import Footer from '../footer/Footer'
import Tools from './tools/Tools'
import Contact from './contact/Contact'
import ProvidingService from './providing-service/ProvidingService'

const AboutHome = () => {
  return (
    <div>
        <TopSection />
        <AboutCompany/>
        <Tools />
        <ProvidingService />
        <Contact />
        <Footer />
    </div>
  )
}

export default AboutHome