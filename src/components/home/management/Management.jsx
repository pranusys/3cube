import React from 'react';
import managementImg from '../../../assets/home/managementImg.svg';

const Management = () => {
    

    return (
        <div className='grid grid-cols-2 w-[100%] ssm:flex ssm:flex-wrap ssm:justify-center ssm:items-center h-auto'>
            <div className='px-[15%] py-[6%] ssm:px-[10%] ssm:py-[5%] flex justify-center items-center'>
                <div>
                    <img src={managementImg} alt='Management img' className='w-[100%] h-[100%]'/>
                </div>
            </div>
            <div className='w-full h-full flex flex-wrap text-justify justify-center items-center p-[2%] ssm:mx-[12%]'>
                <div>
                    <h2 className='text-[#0065A8] text-[28px] ssm:text-[22px] font-[700]'>Management Team</h2>
                    <h2 className='text-[#242537] font-[700] text-[28px] ssm:text-[22px]'>
                        Our comprehensive range of services for corporate employees includes asset leasing.
                    </h2>
                    <p className='text-[#242537] text-[20px] ssm:text-[18px] py-[25px] tracking-[1px] ssm:pr-0'>
                        We provide you with a test account that can be set up in 
                        seconds. Our main focus is getting responses to you as 
                        soon as we can.
                    </p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Management