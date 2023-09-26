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
        }} className='w-full h-[100vh] bg-black block'>
            <Navbar />
            <div>
              <div 
                  style={{
                    transform : 'translateY(50%)',
                  }}
                  className='ssm:bg-white relative top-[50%] ssm:mx-auto ssm:rounded-[18px] ssm:w-[90%] ssm:justify-center ssm:items-center ssm:flex ssm:flex-col ssm:p-[2%]'>
                  <div className="ssm:w-full text-center text-[45px] font-[900] ssm:flex-col ssm:justify-start ssm:items-center ssm:hidden">
                      <div className="inline-block ssm:none w-1/2 ssm:w-0 text-right text-[#242537]">EMPOWERING&nbsp;</div>
                      <div className="inline-block ssm:none w-1/2 ssm:w-0 text-left text-white ssm:text-[#242537]">&nbsp;BUSINESS</div>
                  </div>
                  <div className="ssm:w-full text-center text-[35px] tracking-[3px] font-[900] ssm:flex-col py-[6px] ssm:justify-start ssm:items-center ssm:hidden">
                      <div className="inline-block ssm:none w-1/2 ssm:w-0 text-right text-[#242537]">Three Cube Technologies&nbsp;</div>
                      <div className="inline-block ssm:none w-1/2 ssm:w-0 text-left text-white ssm:text-[#242537]">&nbsp;Private Limited (TCTPL)</div>
                  </div>
                  <div className="ssm:w-full text-center text-[14px] tracking-[2px] font-[900] py-[6px] ssm:flex-col ssm:justify-start ssm:items-center ssm:hidden">
                      <div className="inline-block ssm:none w-1/2 ssm:w-0 text-right text-[#242537]">Through its innovative & business friendly&nbsp;</div>
                      <div className="inline-block ssm:none w-1/2 ssm:w-0 text-left text-white ssm:text-[#242537]">&nbsp;financial tools aim to help businesses</div>
                  </div>
                  <div className='md:hidden text-center text-[#242537]'>
                    <h1 className='text-[28px] font-[900] py-[6px]'>EMPOWERING BUSINESS</h1>
                    <p className='text-[22px] py-[6px]'>
                      Three Cube Technologies Private Limited (TCTPL)
                    </p>
                    <p className='text-[14px] py-[6px]'>
                      Through its innovative & business friendly financial tools aim to help businesses.
                    </p>
                  </div>
                  <button className='rounded-[18px] my-[12px] w-[130px] bg-[#0065A8] block text-white mx-auto p-[8px]'>
                    <a href="/about">About us</a>
                  </button>
              </div>
            </div>
            {/* 
            // */}
            <div
              // style={{
              //   transform: 'translateY(50%)'
              // }} 
              className='flex ssm:flex-col mt-[180px] justify-center items-center'>
              <div className='w-1/2 ssm:w-full'>
                  <div className='mx-[25%] float-left overflow-hidden w-1/2'>
                      <div className="marquee whitespace-nowrap text-[22px]">
                          <div className='flex'>
                              <h3 className='mx-[20px]'>Asset Leasing</h3>
                              <h3 className='mx-[20px]'>Early Pay</h3>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='w-1/2 ssm:w-full text-white ssm:text-black'>
                  <div className='mx-[25%] float-left overflow-hidden w-1/2'>
                      <div class="marquee whitespace-nowrap text-[22px]">
                      <div className='flex'>
                              <h3 className='mx-[20px]'>Mutual Funding</h3>
                              <h3 className='mx-[20px]'>Loans</h3>
                              <h3 className='mx-[20px]'>Insurance</h3>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            
            
    </div>
  )
}

export default TopSection