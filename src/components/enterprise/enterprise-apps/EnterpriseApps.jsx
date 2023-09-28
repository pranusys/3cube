import React from 'react';
import enterpriseBg from '../../../assets/enterprise/enterpriseAppBg.svg';
// import upIncreaseIcon from '../../../assets/icons/upincreaseicon.svg';

const EnterpriseApps = () => {
  const features = [
    {
      // icon: upIncreaseIcon,
      // title: '20+',
      title: '20+',
      content: 'Happy customers'
    },
    {
      // icon: upIncreaseIcon,
      title: '15+',
      content: 'Financial Solutions across industries'
    },
    {
      // icon: upIncreaseIcon,
      title: '8',
      content: 'Industry Awards'
    },
    {
      // icon: upIncreaseIcon,
      title: '95%',
      content: 'Client Retention Rate'
    }
  ];
  return (
    <div className='h-auto w-full relative overflow-auto'>
      
        <img src={enterpriseBg} alt="enterprise background" className='w-[90%] ssm:w-full left-[-15%] absolute z-[-1] h-full'/>
        {/* <h1 className='text-[#0065A8] text-[35px] ssm:text-[28px] ssm:relative font-bold absolute top-[30%] ssm:top-[2%] p-[18px]'>Apple for Enterprise</h1> */}
      
      <div className='grid grid-cols-2 ssm:flex ld:mt-[20%] ssm:flex-wrap w-auto float-right mt-[12%] ssm:w-full ssm:mt-[20%] ssm:p-[2%] ssm:justify-center ssm:items-center'>
          {
            features.map((item, index) => {
              return(
                <div 
                      style={{
                        transform: 'translateY(-50%)'
                      }}
                      className='bg-white border-l-2 border-r-2 relative top-[50%] mx-[12px] my-[25px] border-[#0065A8] p-[8px] justify-center items-center text-center flex flex-col ssm:my-[12px] rounded-[20px] h-[210px] w-[270px]'>
                                    {/* <div className='p-[12px]'>
                                        <img src={item.icon} alt="Tools icon" className='w-[35px] h-[35px]'/>
                                    </div> */}
                                    <div className='flex flex-col ml-[12px]'>
                                        <div className='p-[12px]'>
                                          <h2 className='text-[#0065A8] font-bold tracking-[1px] text-[35px]'>{item.title}</h2>
                                        </div>
                                        <p className='text-[14px] py-[8px]'>{item.content}</p>
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