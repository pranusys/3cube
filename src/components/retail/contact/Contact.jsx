import React from 'react';
import phoneIcon from '../../../assets/icons/phone.svg';
import emailIcon from '../../../assets/icons/email.svg';
import locationIcon from '../../../assets/icons/location.svg';
import contactPic from '../../../assets/retail/contactPic.svg';

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
            desc : `THREE CUBE TECHNOLOGIES PVT LTD,
            Ground Floor, Sivanandam Apartments,
            # 1 B&C,  East Park Road,
            Pulla Avenue, Shenoy Nagar,
            Chennai - 600023`,
            link : '/'
        }
    ];

  return (
    <div className='w-full h-auto p-[1%] grid grid-cols-2 ssm:flex ssm:flex-wrap relative bg-[#242537] overflow-auto'>
        <div className='w-full h-full p-[15%] ssm:p-[2%] flex justify-center items-center'>
              <div>
                <img src={contactPic} alt="contact pic" />
              </div>
        </div>
        <div>
            <div className='mt-[30%] mx-[50px]'>
              <div className='font-bold text-[30px] text-white tracking-[1px] mr-[25%] ssm:mr-0'>
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
                                <div className='h-[35px] w-[35px]'>
                                    <a href={option.link}>
                                        <img src={option.icon} alt="Contact icon" 
                                            className='w-full h-full'
                                        />
                                    </a>
                                </div>
                                <div className='w-full h-auto '>
                                    <p className='text-white text-[14px] tracking-[1px] ml-[10px]'>
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