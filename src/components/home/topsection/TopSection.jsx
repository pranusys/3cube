import React from 'react';
import bgImg from '../../../assets/home/TopBg.svg';
import Navbar from '../../navbar/Navbar';

const TopSection = () => {
  return (
    <div 
        style={{
            'backgroundImage': 'url(' + bgImg + ')',
            'backgroundSize': 'cover',
            'backgroundRepeat': 'no-repeat',
            'backgroundPosition': 'center center'
        }} className='w-full h-[100vh] bg-black'>
            <Navbar />
            <div>
                <h1 className='text-center text-[45px] font-[900] mt-[15%]'>
                  <b className='text-[#242537]'>EMPOWERING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b> 
                  <b className='text-white'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BUSINESS</b>
                </h1>
                <button className='rounded-[18px] w-[130px] mt-[7%] bg-[#0065A8] block text-white mx-auto p-[8px]'>
                  <a href="/">About us</a>
                </button>
            </div>
    </div>
  )
}

export default TopSection