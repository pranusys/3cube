import React from 'react';
import Navbar from '../../navbar/Navbar';
import playBtn from '../../../assets/enterprise/icons/playBtn.svg';

const TopSection = () => {
  return (
    <div 
        className='w-full h-[100vh] relative'>
            <Navbar />
            {/* <img src={bgImgPic} alt="bgImgPic" className='w-[50%] absolute bottom-0 right-0 top-0' /> */}
            <div className='w-[40%] mt-[10%] ml-[10%] ssm:w-[95%] ssm:mt-[30vh] ssm:bg-[#00385d] ssm:rounded-[15px] ssm:p-[12px] ssm:mx-auto'>
                <h1 className='text-[50px] ssm:text-[28px] font-[900]'>
                  <b className='text-black'>About Our</b> 
                  <b className='text-[#0065A8]'>&nbsp;Business</b>
                </h1>
                <p className='text-[18px] py-[12px] text-black ssm:text-[16px]'>
                    Nobody understands loans and financial needs better than us.
                    With 3cube Technologies, you can always have the emergency
                    financial support you need.
                </p>
                <div className='flex ssm:flex-wrap'>
                    <button className='rounded-[18px] ssm:ml-[15px] w-[130px] text-[16px] mt-[7%] bg-[#0065A8] text-white p-[8px]'>
                        <a href="/">Learn More</a>
                    </button>
                    <button className='bg-transparent text-[16px] ml-[15px] mt-[7%] p-[8px] bg-black rounded-[18px] text-black flex'>
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