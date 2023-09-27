import React from 'react';
import Navbar from '../../navbar/Navbar';
import bgImgPic from '../../../assets/retail/bgImgPic.svg';
import playBtn from '../../../assets/enterprise/icons/playBtn.svg';

const TopSection = () => {
  return (
    <div 
        style = {{
            backgroundImage : `url(${bgImgPic})`,
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover',
            backgroundPosition : 'center'

        }}
        className='w-full h-[100vh]'>
            <Navbar />
            {/* <img src={bgImgPic} alt="bgImgPic" className='w-[50%] absolute bottom-0 right-0 top-0' /> */}
            <div
                style={{
                    transform:'translateY(-50%)'
                }} 
                className='w-[40%] relative ssm:top-[50%] top-[40%] ssm:w-[95%] ssm:bg-[#00385d] ssm:rounded-[15px] ssm:p-[12px] px-[2%] py-[8px] ssm:mx-auto'>
                <h2 className='text-[45px] ssm:text-[28px] font-[900]'>
                  <b className='text-white'>Retail</b> 
                  <b className='text-[#0065A8]'>&nbsp;Business</b>
                </h2>
                <p className='text-[14px] py-[12px] text-white ssm:text-[14px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                </p>
                <div className='flex ssm:flex-wrap'>
                    <button className='rounded-[18px] ssm:ml-[15px] w-[130px] text-[14px] mt-[7%] bg-[#0065A8] text-white p-[8px]'>
                        <a href="/">Learn More</a>
                    </button>
                    <button className='bg-transparent text-[14px] ml-[15px] mt-[7%] p-[8px] bg-white rounded-[18px] text-black flex'>
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