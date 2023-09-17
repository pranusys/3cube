import React from 'react';
import TopSection from './topsection/TopSection';
import Stats from './stats/Stats';
import RetailApps from './apps/RetailApps';
import Features from './features/Features';
import Contact from './contact/Contact';
import Footer from '../footer/Footer';

const RetailHome = () => {
    console.log(window.location.pathname);
  return (
    <div>
        {/* <TopSection />
        <Stats />
        <EnterpriseApps />
        <Features />
        <Contact />
        <Footer /> */}
        <TopSection />
        <Stats />
        <RetailApps />
        <Features />
        <Contact />
        <Footer />
    </div>
  )
}

export default RetailHome