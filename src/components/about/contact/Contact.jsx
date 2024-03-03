import React from 'react';
import phoneIcon from '../../../assets/icons/phone.svg';
import emailIcon from '../../../assets/icons/email.svg';
import locationIcon from '../../../assets/icons/location.svg';
import contactPic from '../../../assets//about/contactPic.png';
import '../../../styles/about/contact/contact.css';

const Contact = () => {

    const contactOptions = [
        {
            icon : phoneIcon,
            desc : '+91 7845468126',
            link: 'tel:+91-7845468126'
        },
        {
            icon : emailIcon,
            desc : 'care@3cube.in',
            link : 'mailto:care@3cube.in'
        },
        {
            icon: locationIcon,
            desc : `THREE CUBE TECHNOLOGIES PVT LTD, Ground Floor, Sivanandam Apartments, 
            # 1 B&C, East Park Road, Pulla Avenue, Shenoy Nagar, Chennai - 600023`,
            link : '/'
        }
    ];

  return (
    <div className='contact-container'>
        <div className='contact-container--inner1'>
              <div>
                <img src={contactPic} alt="contact pic" />
              </div>
        </div>
        <div className='contact-container--inner2'>
            <div className='contact-container--inner2-cnt'>
              <div className='contact-container--inner2-cnt-inner'>
                  <h2 className='contact-container--inner2-cnt-inner--header'>Request for Free Consultation</h2>
                  <h3 className='contact-container--inner2-cnt-inner--header2'>
                    Help your Business to get on a New Stage!
                  </h3>
              </div>
              <div className='contact-options mt-[30px] ssm:mt-0'>
                {
                    contactOptions.map((option, index) => {
                        return (
                            <div className='flex justify-start items-center my-[35px] text-justify'>
                                <div className='w-[35px] h-[35px]'>
                                    <a href={option.link}>
                                        <img src={option.icon} alt="icon" className='w-full h-full'/>
                                    </a>
                                </div>
                                <div className='w-full h-auto '>
                                    <p className='text-[14px] tracking-[1px] ml-[10px]'>
                                        {option.desc}
                                    </p>
                                </div>
                                
                            </div>
                        )
                    })
                }
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Contact