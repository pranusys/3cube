import React from 'react';
import enterpriseBg from '../../../assets/enterprise/enterpriseAppBg.svg';
import upIncreaseIcon from '../../../assets/icons/upincreaseicon.svg';

const EnterpriseApps = () => {
  const features = [
    {
      icon: upIncreaseIcon,
      title: 'Smart dashboards',
      content: 'Use Unify thoroughly thought automated libraries to your businesses.'
    },
    {
      icon: upIncreaseIcon,
      title: 'Smart dashboards',
      content: 'Use Unify thoroughly thought automated libraries to your businesses.'
    },
    {
      icon: upIncreaseIcon,
      title: 'Smart dashboards',
      content: 'Use Unify thoroughly thought automated libraries to your businesses.'
    },
    {
      icon: upIncreaseIcon,
      title: 'Smart dashboards',
      content: 'Use Unify thoroughly thought automated libraries to your businesses.'
    }
  ];
  return (
    <div className='h-[90vh] w-full ssm:h-auto relative overflow-auto'>
      
        <img src={enterpriseBg} alt="enterprise background" className='w-[90%] ssm:w-full left-[-15%] absolute z-[-1] h-full'/>
        <h1 className='text-[#0065A8] text-[35px] ssm:text-[28px] font-bold absolute top-[30%] ssm:top-[2%] p-[18px]'>Apple for Enterprise</h1>
      
      <div className='grid grid-cols-2 ssm:flex ld:ml-[15%] ld:mt-[20%] ssm:flex-wrap w-auto ml-[45%] mt-[12%] ssm:ml-0 ssm:w-full ssm:mt-[20%] ssm:p-[2%] ssm:justify-center ssm:items-center'>
          {
            features.map((item, index) => {
              return(
                <div className='bg-white border-l-2 border-r-2  border-[#0065A8] p-[8px] justify-center items-center text-center flex flex-col ssm:my-[12px] rounded-[20px] h-[210px] w-[250px] my-[15px]'>
                                    <div className='p-[12px]'>
                                        <img src={item.icon} alt="Tools icon" className='w-[35px] h-[35px]'/>
                                    </div>
                                    <div className='flex flex-col ml-[12px]'>
                                        <h3 className='text-[#0065A8] font-bold tracking-[1px] text-[20px] ssm:text-[18px]'>{item.title}</h3>
                                        <p className='text-[16px] py-[8px] ssm:text-[14px]'>{item.content}</p>
                                    </div>
                </div>
              );
            })
          }
      </div>
    </div>
  )
}

export default EnterpriseApps