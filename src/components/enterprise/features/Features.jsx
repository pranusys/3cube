import React from 'react';
import serviceAndSupportImg from '../../../assets/enterprise/serviceAndSupport.svg';
// import rightArrow from '../../../assets/enterprise/icons/rightArrow.svg';
// import leftArrow from '../../../assets/enterprise/icons/leftArrow.svg';



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
                <div className='w-full h-full flex flex-col justify-center p-[25px] text-left'>
                    <h2 className='text-[#242537] font-bold text-[22px] py-[6px] tracking-[1px] '>Mutual Funds</h2>
                    {/* <p className='text-[#242537] font-bold text-[22px] py-[6px]'>Best-in-class devices to help your teams do their best work</p> */}
                    <div className='border-l-2 border-[grey]'>
                        <p className='text-black text-[14px] py-[6px] text-justify px-[10px]'>
                            Our financial experts offer tailored mutual fund recommendations and management 
                            services to help clients diversify their portfolio, 
                            save for retirement, and achieve financial goals.
                        </p>
                    </div>
                </div>
            )
        },
        {
            bgColor : '#242537',
            bgImg : '',
            content : (
                <div className='w-full h-full flex flex-col text-white justify-center p-[25px] text-left'>
                    <h2 className='font-bold text-[22px] py-[6px] tracking-[1px] '>Insurance</h2>
                    {/* <h2 className='text-[#242537] font-bold text-[22px] py-[6px]'>Best-in-class devices to help your teams.</h2> */}
                    <div className='border-l-2 border-[grey]'>
                        <p className=' text-[14px] py-[6px] text-justify px-[10px]'>
                            Our team of experts offers comprehensive insurance solutions, including life, 
                            health, and property coverage, to 
                            protect your assets, health, and loved ones, ensuring a secure financial future.
                        </p>
                    </div>
                </div>
            )
        },
        {
            bgColor : '',
            bgImg: '',
            content : (
                <div className='w-full h-full text-black flex flex-col justify-center p-[25px] text-left'>
                    <h2 className='font-bold text-[22px] py-[6px] tracking-[1px] '>Loans</h2>
                    <div className='border-l-2 border-[grey]'>
                        <p className='text-[14px] py-[6px] text-justify px-[10px]'>
                            We provide customized loan solutions for personal, home, and business financing, ensuring 
                            competitive terms and responsible borrowing, backed by our experienced team.
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
                    <h2 className='font-bold text-[22px] py-[6px] tracking-[1px] '>Mobility</h2>
                    <div className='border-l-2 border-[grey]'>
                        <p className='text-[14px] py-[6px] text-justify px-[10px]'>
                            3Cube Technologies utilizes advanced technology to provide innovative 
                            mobility solutions, enhancing convenience, productivity, and connectivity for individuals and 
                            businesses, ensuring seamless access to information and services.
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