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
            'backgroundPosition': 'center',
        }} className='w-full h-[100vh] bg-black'>
            <Navbar />
            <div>
              <div className='ssm:bg-white mt-[250px] ssm:mx-auto ssm:rounded-[18px] ssm:w-[90%] ssm:justify-center ssm:items-center ssm:flex ssm:flex-col ssm:p-[2%]'>
                  <div className="ssm:w-full text-center text-[45px] font-[900] ssm:flex-col ssm:justify-start ssm:items-center ssm:hidden">
                      <div className="inline-block ssm:none w-1/2 ssm:w-0 text-right text-[#242537]">EMPOWERING</div>
                      <div className="inline-block ssm:none w-1/2 ssm:w-0 text-left text-white ssm:text-[#242537]">BUSINESS</div>
                  </div>
                  <div className='md:invisible text-center text-[30px] font-[900] text-[#242537]'>
                    <h1>EMPOWERING</h1>
                    <h1>BUSINESS</h1>
                  </div>
                  <button className='rounded-[18px] w-[130px] mt-[45px] bg-[#0065A8] block text-white mx-auto p-[8px]'>
                    <a href="/">About us</a>
                  </button>
              </div>
            </div>
    </div>
  )
}

export default TopSection