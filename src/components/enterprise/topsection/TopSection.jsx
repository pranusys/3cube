import React from 'react';
import Navbar from '../../navbar/Navbar';
import bgImg from '../../../assets/enterprise/bgImg.svg';
import playBtn from '../../../assets/enterprise/icons/playBtn.svg';

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
            <div className='w-[40%] mt-[12%] ml-[10%]'>
                <h1 className='text-[50px] font-[900]'>
                  <b className='text-[#242537]'>Enterprise</b> 
                  <b className='text-[#0065A8]'>&nbsp;Business</b>
                </h1>
                <p className='text-[18px] py-[12px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <div className='flex'>
                    <button className='rounded-[18px] w-[130px] text-[16px] mt-[7%] bg-[#0065A8] text-white p-[8px]'>
                        <a href="/">About us</a>
                    </button>
                    <button className='bg-transparent text-[16px] ml-[15px] mt-[7%] p-[8px] text-black flex'>
                        <a href="/" className='flex'>
                            <img src={playBtn} alt="playBtn" className='w-[25px] h-[25px]'/>
                            <p >&nbsp;Start Demo</p>
                        </a>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default TopSection