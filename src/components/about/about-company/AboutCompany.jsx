import React from 'react';
import aboutImg from '../../../assets/about/about-company-img.png';

const AboutCompany = () => {

    return (
        <div className='grid grid-cols-2 w-[100%] bg-[#242537] ssm:flex ssm:flex-wrap ssm:justify-center ssm:items-center ssm:h-auto h-[100vh]'>
            <div className='px-[20%] py-[15%] ssm:px-[12%] ssm:py-[7%]'>
                <div className='relative z-[1] w-[320px] ssm:w-[280px] ssm:h-[330px] h-[400px] my-[20px] p-[2%]'>
                    <div className='w-full h-full z-[-1] absolute border-4 ssm:left-[2%] border-[#0065A8]'></div>
                    <img src={aboutImg} alt='Management img' className='absolute z-[-1] w-full h-full ssm:top-[20px] ssm:left-0 top-[25px] left-[25px]'/>
                </div>
            </div>
            <div className='w-full h-full flex relative z-[1] flex-wrap text-justify ssm:my-[45px] justify-center items-center p-[2%] text-white ssm:mx-[12%]'>
                <div className='relative'>
                    <div className='w-[90px] h-[90px] z-[-1] top-[-5%] absolute rounded-[50%] bg-[#99c4e1]'></div>
                    <h2 className='text-white text-[35px] ssm:text-[28px] tracking-[1px] font-bold'>About Our Company</h2>
                    <p className='text-[18px] ssm:text-[16px] py-[28px] tracking-[1px] pr-[15%] ssm:pr-0'>
                        Nobody understands loans and financial needs better than us,
                        With 3cube Technologies, you can always have the emergency
                        financial support you need. We ensure quick disbursals and easy 
                        loan amounts with easy repayment options. Check your eligibility 
                        today and get started in the right direction.
                    </p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default AboutCompany