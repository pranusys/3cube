import React from 'react'
import logo from '../../assets/cube3logo.svg'

const Footer = () => {
    const learnMoreLinks = [
        { name: 'About Us', link: '/' },
        { name: 'Services', link: '/' },
        { name: 'Team', link: '/' },
        { name: 'Terms of use', link: '/' },
        { name: 'Privacy Policy', link: '/' },
    ];
  return (
    <div className='w-full h-[40vh] bg-[#242537] px-[4%] py-[2%] ssm:h-auto '>
        <div className='grid w-full h-full grid-cols-4 ssm:flex ssm:flex-wrap justify-between items-center'>
            {/* logo */}
            <div>
                <a href='/'>
                    <img src={logo} alt="Logo" className='w-[100px] h-[100px] mt-[30px] ml-[30px]'/>
                </a>
                <p className='text-white text-[14px] px-[20px]'>
                    © 2022 3cube.
                    All rights reserved.
                </p>
            </div>
            {/* Get in Touch */}
            <div className='ssm:p-[25px]'>
                <div className='h-[50px]'>
                    <h2 className='text-white text-[24px]'>Get in Touch</h2>
                </div>
                <p className='text-white text-[14px] px-[20px] py-[8px] tracking-[2px]'>
                    3cube, 123 Main Street, Anytown, CA 12345 USA
                </p>
                <p className='text-white text-[14px] px-[20px] py-[8px] tracking-[2px]'>
                        +62 478-2240-190
                </p>
                <p className='text-white text-[14px] px-[20px] py-[8px] tracking-[2px]'>
                        contac@domain.com
                </p>
            </div>
            { /* Learn More */}
            <div className='ssm:p-[25px]'>
                <div className='h-[50px]'>
                    <h2 className='text-white text-[24px]'>Learn More</h2>
                </div>
                <ul className='list-none flex flex-col'>
                        {
                            learnMoreLinks.map((link, index) => (
                                <li>
                                    <a href={link.link} key={index} className='text-white text-[14px] px-[20px] py-[8px] tracking-[2px]'>
                                        {link.name}
                                    </a>
                                </li>
                            ))
                        }
                    
                </ul>
            </div>
            { /* Newsletter */}
            <div className='ssm:p-[25px]'>
                <div className='h-[50px]'>
                    <h2 className='text-white text-[24px]'>Our Newsletter</h2>
                </div>
                <p className='text-white text-[14px] px-[20px] py-[8px] tracking-[2px]'>
                    Subscribe to our newsletter to 
                    get our news & deals delivered 
                    to you.
                </p>
                <div className='flex w-[300px] py-[12px]'>
                    <input type="email" placeholder='Your Email' className='w-[200px] h-[40px] rounded-[5px] px-[10px] py-[5px] outline-none'/>
                    <button className='h-[40px] bg-[#0065A8] text-white rounded-[5px] px-[10px] py-[5px] outline-none ml-[10px]'>
                        Join
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer