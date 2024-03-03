import React from 'react';
import aboutImg from '../../../assets/about/about-company-img.png';
import '../../../styles/about/aboutcompany/aboutCompany.css';

const AboutCompany = () => {

    return (
        <div className='abtcmp-container'>
            <div className='abtcmp-container--inner1'>
                <div className='abtcmp-container--inner1-container'>
                    <div className='abtcmp-container--inner1-container--inner'></div>
                    <img src={aboutImg} alt='Management img' className='abtcmp-container--inner1-container--aboutImg'/>
                </div>
            </div>
            <div className='abtcmp-container--inner2'>
                <div className='abtcmp-container--inner2--container'>
                    <div className='abtcmp-container--inner2--container--inner'></div>
                    <h2 className='abtcmp-container--inner2--container--inner-header'>About Our Company</h2>
                    <p className='abtcmp-container--inner2--container--inner-desc'>
                        Nobody understands loans and financial needs better than us,
                        With 3cube Technologies, you can always have the emergency
                        financial support you need. We ensure quick disbursals and easy 
                        loan amounts with easy repayment options. Check your eligibility 
                        today and get started in the right direction.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default AboutCompany