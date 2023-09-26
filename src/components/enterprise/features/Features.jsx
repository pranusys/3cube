import React from 'react';
import serviceAndSupportImg from '../../../assets/enterprise/serviceAndSupport.svg';
import rightArrow from '../../../assets/enterprise/icons/rightArrow.svg';
import leftArrow from '../../../assets/enterprise/icons/leftArrow.svg';



const Features = () => {
    const features = [
        {
            bgColor: 'white',
            bgImg : '',
            content : (
                <div className='w-full h-full flex flex-col justify-center p-[25px] text-left'>
                    <h2 className='text-[#242537] font-bold text-[22px] py-[6px] tracking-[1px] '>Technology Consultation</h2>
                    <p className='text-[#242537] font-bold text-[22px] py-[6px]'>Best-in-class devices to help your teams do their best work</p>
                    <div className='border-l-2 border-[grey]'>
                        <p className='text-black text-[14px] py-[6px] text-justify px-[10px]'>
                            Your business needs the best-in-class devices that help boost productivity and provide 
                            value for money. We help you deploy the right computing solutions that 
                            streamline business processes, improve workflows, and enhance performance.
                        </p>
                    </div>
                </div>
            )
        },
        {
            bgColor: '#D9D9D9',
            bgImg : serviceAndSupportImg,
            content : (
                <div className='w-full h-full flex flex-col justify-center text-black items-center text-center'>
                    <h2 className='text-[35px] text-white py-[8px]'>Service & Support</h2>
                    
                </div>
            )

        },
        {
            bgColor : '',
            bgImg : '',
            content : (
                <div className='w-full h-full flex flex-col justify-center items-center p-[5%]'>
                    <div className='w-[80%]'>
                        <h2 className='text-[22px] font-bold my-[5px]'>Networking & Security</h2>
                        <p className='my-[10px] text-[14px] text-justify'>
                            Your business needs the best-in-class devices that help boost productivity and provide value for money. 
                        </p>
                    </div>
                    <div className='w-[80%] h-[100px] flex'>
                        <div className='bg-[#242537] p-[8px]'>
                            <p className='text-white font-bold text-[14px]'>
                                We secure what matters most to you 
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <button className='my-[8px] mx-[5px]'>
                                <img src={rightArrow} alt="right arrow" className='w-[30px] h-[30px]'/>
                            </button>
                            <button className='my-[8px] mx-[5px]'>
                                <img src={leftArrow} alt="left arrow" className='w-[30px] h-[30px]'/>
                            </button>
                        </div>
                    </div>
                </div>
            )
        },
        {
            bgColor : '#242537',
            bgImg : '',
            content : (
                <div className='w-full h-full text-white flex flex-col justify-center p-[25px] text-left'>
                    <h2 className='font-bold text-[22px] py-[6px] tracking-[1px] '>Post-Sales Support</h2>
                    <div className='border-l-2 border-[grey]'>
                        <p className='text-[14px] py-[6px] text-justify px-[10px]'>
                        Your business needs the best-in-class devices that help boost productivity and provide value 
                        for money. We help you deploy the right computing solutions that streamline business processes, 
                        improve workflows, and enhance performance.
                        </p>
                    </div>
                </div>
            )
        },
        {
            bgColor : '',
            bgImg: '',
            content : (
                <div className='w-full h-full flex flex-col justify-center p-[25px] text-left'>
                    <h2 className='text-[#242537] font-bold text-[22px] py-[6px] tracking-[1px] '>Certification</h2>
                    <h2 className='text-[#242537] font-bold text-[22px] py-[6px]'>Best-in-class devices to help your teams.</h2>
                    <div className='border-l-2 border-[grey]'>
                        <p className='text-black text-[14px] py-[6px] text-justify px-[10px]'>
                            Your business needs the best-in-class devices that help boost productivity and provide 
                            value for money. We help you deploy the right computing solutions that 
                            streamline business processes, improve workflows, and enhance performance.
                        </p>
                    </div>
                </div>
            )
        },
        {
            bgColor : '#242537',
            bgImg : '',
            content : (
                
                <div className='w-full h-full text-white flex flex-col justify-center p-[25px] text-left'>
                    <h2 className='font-bold text-[22px] py-[6px] tracking-[1px] '>Integration</h2>
                    <div className='border-l-2 border-[grey]'>
                        <p className='text-[14px] py-[6px] text-justify px-[10px]'>
                        Your business needs the best-in-class devices that help boost productivity and provide value 
                        for money. We help you deploy the right computing solutions that streamline business processes, 
                        improve workflows, and enhance performance.
                        </p>
                    </div>
                </div>
            )
        },
        
    ];
    return (
        <div className='w-full h-auto'>
            <div className='grid grid-cols-3 my-[45px] ssm:flex ssm:flex-wrap ssm:justify-center ssm:items-center'>
                {
                    features.map((feature, index) => {
                        return(
                            <div>
                                <div 
                                    className='h-[340px] ssm:w-[350px]' 
                                    style={{
                                        backgroundColor: feature.bgColor ?? '',
                                        backgroundImage: `url(${feature.bgImg})` ?? '',
                                        backgroundPosition: feature.bgImg ? 'center' : '',
                                        backgroundSize: feature.bgImg ? 'cover' : '',
                                        backgroundRepeat: feature.bgImg ? 'no-repeat' : '',
                                    }}>
                                    {feature.content}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Features