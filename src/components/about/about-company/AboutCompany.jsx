import React from 'react';
import managementImg from '../../../assets/home/managementImg.svg';
import rightArrowIcon from '../../../assets/icons/rightArrow.svg';

const AboutCompany = () => {
    const points = [
        {
            desc: 'Aenean quam ornare. Curabitur blandit.'
        },
        {
            desc: 'Aenean quam ornare. Curabitur blandit.'
        },
        {
            desc: 'Aenean quam ornare. Curabitur blandit.'
        },
        {
            desc: 'Aenean quam ornare. Curabitur blandit.'
        },
        {
            desc: 'Aenean quam ornare. Curabitur blandit.'
        },
        {
            desc: 'Aenean quam ornare. Curabitur blandit.'
        }
    ];

    return (
        <div className='grid grid-cols-2 w-[100%] bg-[#242537] ssm:flex ssm:flex-wrap ssm:justify-center ssm:items-center ssm:h-auto h-[100vh]'>
            <div className='px-[20%] py-[15%] ssm:px-[12%] ssm:py-[7%]'>
                <div>
                    <img src={managementImg} alt='Management img' className='w-[100%] h-[100%]'/>
                </div>
            </div>
            <div className='w-full h-full flex flex-wrap text-justify justify-center items-center p-[2%] text-white ssm:mx-[12%]'>
                <div>
                    <h2 className='text-white text-[38px] ssm:text-[28px] tracking-[1px] font-bold'>About Our Company</h2>
                    
                    <p className='text-[16px] py-[12px] tracking-[1px] pr-[30%]'>
                        Nobody understands loans and financial needs better than us,
                        With 3cube Technologies, you can always have the emergency
                        financial support you need. We ensure quick disbursals and easy 
                        loan amounts with easy repayment options. Check your eligibility 
                        today and get started in the right direction.
                    </p>
                    <div className='grid grid-cols-2 ssm:flex ssm:flex-wrap justify-center items-center w-full'>
                        {
                            points.map((point, index) => {
                                return (
                                    <div className='flex ssm:w-full flex-row items-center my-[5px]'>
                                        {/* <div className='w-[20px] h-[20px] rounded-[50%] bg-[#0065A8]'></div> */}
                                        <img src={rightArrowIcon} alt="Right arrow icon" className='w-[30px] h-[30px] rounded-[50%] mr-[10px]'/>
                                        <p className=' text-[16px] py-[12px] tracking-[1px] pr-[30%]'>
                                            {point.desc}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutCompany