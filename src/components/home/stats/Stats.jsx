import React from 'react';
import quotationPic from '../../../assets/icons/quotation.svg';
import businessImgPic from '../../../assets/home/businessImgPic.svg';
import arrowLinkIcon from '../../../assets/icons/linkArrowIcon.svg';

const Stats = () => {
    const links = [
        {
            index : '01',
            name : 'Enterprise Business',
            link : '/',
            img : businessImgPic
        },
        {
            index : '02',
            name : 'Retail Business',
            link : '/',
            img : businessImgPic
        },

    ];

    const rightStats = [
        {
            count : 1,
            header : '45k+',
            desc : 'users - from new startups to public companies'
        },
        {
            count : 2,
            header : '23%',
            desc: 'users - from new startups to public companies'
        },
        {
            count : 3,
            header : '9.3%',
            desc : 'users - from new startups to public companies'
        },
        {
            count : 4,
            header : '2X',
            desc : 'users - from new startups to public companies'
        },
    ];


    return (
        <div className='w-full h-auto p-[2%] ssm:flex ssm:flex-wrap grid grid-cols-2'>
            {/* left */}
            <div>
                <div className='mx-[12%] my-[12%] relative'>
                    <img 
                        src={quotationPic} alt="Stats pic" 
                        className='w-[80px] h-[65px] absolute z-[-1] top-[35%]'/>
                    <h2 className='text-[28px] tracking-[1px] font-bold text-black'>It's all about speed</h2>
                    <p className='py-[12px] text-[18px] text-black text-justify'>
                        We provide you with a test account that can be set up in 
                        seconds. Our main focus is getting responses to you as 
                        soon as we can.
                    </p>
                    <p className='py-[35px] text-[18px] text-black text-justify'>
                        We provide you with a test account that can be set up in 
                        seconds. Our main focus is getting responses to you as 
                        soon as we can.
                    </p>
                    <div className='links flex flex-col w-full'>
                        {
                            links.map((link) => (
                                <a href={link.link}>
                                    <div className='flex flex-row ssm:mr-[15%] mr-[25%] ssm:justify-center justify-between items-center p-[15px] border-t-2 border-black'>
                                            <div>
                                                <h3 className='font-bold text-[18px]'>{link.index}</h3>
                                            </div>
                                            <div className='flex w-[290px]'>
                                                <img src={link.img} alt="Link icon" className='w-[45px] h-[45px] mr-[10px]'/>
                                                <div className='flex flex-col'>
                                                    <h3 className='font-bold text-[18px] ssm:text-[16px]'>{link.name}</h3>
                                                    <p className='text-[14px]'>{link.name}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={arrowLinkIcon} alt="Arrow link icon" className='w-[35px] h-[35px]'/>
                                            </div>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
            { /* right */}
            <div className='p-[2%] flex justify-center items-center '>
                        <div className='grid grid-cols-2 ssm:flex ssm:flex-wrap w-full mx-[12%] p-[12px]'>
                            {
                                rightStats.map((stat) => {
                                    return (
                                        <div 
                                            className='mx-[8px]'>
                                            <h2 className='text-[45px] font-bold'>{stat.header}</h2>
                                            <p className='text-[18px] py-[10px]'>
                                                {stat.desc}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
            </div>
        </div>

    )
}

export default Stats