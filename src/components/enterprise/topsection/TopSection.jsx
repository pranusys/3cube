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
                
                <div className='w-[40%] mt-[12%] ml-[5%] ssm:w-[95%] ssm:mt-[30vh] ssm:bg-white ssm:rounded-[15px] ssm:p-[12px] ssm:mx-auto'>
                    <h2 className='text-[45px] ssm:text-[28px] font-[900]'>
                    <b className='text-[#242537]'>Enterprise</b> 
                    <b className='text-[#0065A8]'>&nbsp;Business</b>
                    </h2>
                    <p className='text-[14px] py-[12px] ssm:text-[14px]'>
We offers specialized financial solutions for enterprise businesses, focusing on capital allocation, operational efficiency, and complex portfolio management to ensure sustained growth and success.                        
                    </p>
                    <div className='flex ssm:flex-wrap'>
                        <button className='rounded-[18px] w-[130px] text-[14px] ssm:ml-[15px] mt-[7%] bg-[#0065A8] text-white p-[8px]'>
                            <a href="/">About us</a>
                        </button>
                        <button
                            className='bg-transparent text-[14px] ml-[15px] mt-[7%] p-[8px] text-black flex'>
                                <img src={playBtn} alt="playBtn" className='w-[25px] h-[25px]'/>
                                <p>&nbsp;Start Demo</p>
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default TopSection