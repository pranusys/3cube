import React from 'react';
import pointsImg from '../../../assets/about/points.svg';

const Tools = () => {

    const rightStats = [
        {
            count : 1,
            header : '30+',
            desc : 'Years of Man Experience'
        },
        {
            count : 2,
            header : '15+',
            desc: 'People Team'
        },
        {
            count : 3,
            header : '15+',
            desc : 'Services'
        },
        {
            count : 4,
            header : '10+',
            desc : 'Corporates'
        },
    ];

  return (
    <div className='grid grid-cols-2 w-[100%] ssm:flex ssm:flex-wrap ssm:justify-center ssm:items-center ssm:h-auto h-[100vh]'>
            <div className='w-full h-full'>
                <img src={pointsImg} alt="points img" className='w-full h-full' />
            </div>
            <div className='w-full h-full flex relative z-[1] flex-wrap text-justify ssm:my-[45px] justify-center items-center p-[2%] text-black ssm:mx-[12%]'>
            <div className='grid grid-cols-2 ssm:flex ssm:flex-wrap ssm:justify-center ssm:items-center w-full mx-[12%] p-[12px]'>
                            {
                                rightStats.map((stat) => {
                                    return (
                                        <div 
                                            className={
                                                'mx-[15px] w-[180px]'
                                            }>
                                            <h2 className='text-[45px] ssm:text-[28px] font-bold'>{stat.header}</h2>
                                            <p className='text-[14px] py-[10px]'>
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

export default Tools