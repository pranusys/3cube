import React from 'react';
import phoneIcon from '../../../assets/icons/phone.svg';
import emailIcon from '../../../assets/icons/email.svg';
import locationIcon from '../../../assets/icons/location.svg';
import contactPic from '../../../assets/enterprise/contact.svg';

const Contact = () => {

    const contactOptions = [
        {
            icon : phoneIcon,
            desc : '+62 478-2240-190',
            link: 'tel:+62 478-2240-190'
        },
        {
            icon : emailIcon,
            desc : 'adminsttor@hmail.com',
            link : 'mailto:adminsttor@hmail.com'
        },
        {
            icon: locationIcon,
            desc : 'Hayam Wuruk Street, Badung, Bali',
            link : '/'
        }
    ];

  return (
    <div className='w-full h-auto p-[1%] grid grid-cols-2 ssm:flex ssm:flex-col relative'>
        <div className='w-full h-full p-[15%]'>
              <div>
                <img src={contactPic} alt="contact pic" />
              </div>
        </div>
        <div>
            <div className='mt-[30%] mx-[50px] ssm:mt-[0]'>
              <div className='font-bold text-[35px] ssm:text-[28px] tracking-[1px] mr-[25%] ssm:mr-0'>
                  <h3>
                    Got any questions? Don't 
                    hesitate to get in touch.
                  </h3>
              </div>
              <div className='contact-options mt-[30px]'>
                {
                    contactOptions.map((option, index) => {
                        return (
                            <div className='flex justify-start items-center my-[35px]'>
                                <a href={option.link}>
                                    <img src={option.icon} alt="icon"/>
                                </a>
                                
                                <p className='text-[#242537] text-[16px] tracking-[1px] ml-[15px]'>
                                    {option.desc}
                                </p>
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