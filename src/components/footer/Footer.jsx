import React from 'react'
import logo from '../../assets/cube3logo.svg'

const Footer = () => {
  return (
    <div className='w-full h-[30vh] bg-[#242537] px-[4%] py-[2%]'>
        <div className='flex '>
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
            <div>
                <h2 className='text-white'>Get in Touch</h2>
                <p className='text-white text-[14px] px-[20px]'>
                    3cube, 123 Main Street, Anytown, CA 12345 USA
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer