import React from 'react'
import TopSection from './topsection/TopSection'
import Stats from './stats/Stats'
import Features from './features/Features'
import Contact from './contact/Contact'
import Footer from '../footer/Footer'
import EnterpriseApps from './enterprise-apps/EnterpriseApps'

const EnterpriseHome = () => {
  return (
    <div>
        <TopSection />
        <Stats />
        <EnterpriseApps />
        <Features />
        <Contact />
        <Footer />
    </div>
  )
}

export default EnterpriseHome