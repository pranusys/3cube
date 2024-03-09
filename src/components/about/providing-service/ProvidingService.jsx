import React from 'react';
import providingServiceBg from '../../../assets/about/providingservice.png';
import '../../../styles/about/providingservice/providingservice.css';
import '../../../styles/inputs/inputs.css';

const ProvidingService = () => {
  return (
    <div className='providingservice-container'>
        <div className='providingservice-container--inner'>
                    <div className='providingservice-container--inner--circle'></div>
                    <h2 className='providingservice-container--inner-header'>Providing Service</h2>
                    <p className='providingservice-container--inner-desc'>
                        With 35+ years of experience in multinational banks, offers a comprehensive range of 
                        financial services, aiming to exceed client expectations and 
                        remain a trusted partner in the ever-evolving financial landscape.
                    </p>
                    <div className='providingservice-container--inner--div2'>
                        <input type='email' placeholder='Enter your email' className='emailField'/>
                        <button className='providing-service-btn'>
                            Submit 
                        </button>
                    </div>
        </div>
        <div style={{width: '100%', height: '100%'}}>
            <img src={providingServiceBg}  alt="About pic" />
        </div>
    </div>
  )
}

export default ProvidingService