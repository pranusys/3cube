import React from 'react';
import toolsBg from '../../../assets/home/ToolsBg.svg';
import upIncreaseIcon from '../../../assets/icons/upincreaseicon.svg';


const Tools = () => {
    const content = [
        {
            sno : 1,
            icon : upIncreaseIcon,
            head : 'Advanced tools',
            desc: 'Use Unify thoroughly thought and automated libraries to your businesses.'
        },
        {
            sno: 2,
            icon : upIncreaseIcon,
            head : 'Smart dashboards',
            desc : 'Use Unify thoroughly thought and automated libraries to your businesses.'
        },
        {
            sno: 3,
            icon : upIncreaseIcon,
            head : 'Powerful Features',
            desc : 'Use Unify thoroughly thought and automated libraries to your businesses.'
        }

    ];
    return (
        <div
            style={{
                backgroundImage: `url(${toolsBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} 
            className='w-full h-[90vh]'>
                <div className='flex flex-col w-full h-full justify-center items-center'>
                    {
                        content.map((item, index) => {
                            return (
                                <div className='flex bg-[#B5D2E6] hover:bg-white border-l-2 border-r-2 border-[#0065A8] p-[8px] justify-center items-center rounded-[20px] w-[500px] my-[15px]'>
                                    <div className='p-[12px]'>
                                        <img src={item.icon} alt="Tools icon" className='w-[35px] h-[35px]'/>
                                    </div>
                                    <div className='flex flex-col ml-[12px]'>
                                        <h3 className='text-[#0065A8] font-bold tracking-[1px] text-[24px]'>{item.head}</h3>
                                        <p className='text-[18px] py-[8px]'>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
        </div>
    )
}

export default Tools