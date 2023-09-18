import React from 'react';
import logo from '../../assets/cube3logoicon.svg';;

const Navbar = () => {

    const leftOpt = [
        {name : 'Enterprise Business', link : '/enterprise-business'},
        {name : 'Join Us', link : '/'},
    ];

    const rightOpt = [
        {name : 'Retail Business', link : '/retail-business'},
        {name : 'Login', link : '/'},
    ];

    const windowLocation = window.location.pathname;

  return (
    <div className='px-[2%] py-[3%]'>
        <div className='flex justify-between items-center'>
            <div>
                <ul className='list-none flex'>
                    {
                        leftOpt.map((item, index) => {
                            return (
                                <a href={item.link} className={
                                    windowLocation === '/retail-business'
                                    ? 'text-white mx-[15px] font-bold'
                                    : 'mx-[15px] font-bold'
                                    }>
                                    <li key={index}>{item.name}</li>
                                </a>
                            )
                        })
                    }
                </ul>
            </div>
            <div 
                style = {{
                    top:'5%',
                    right:'50%',
                    transform:'translate(50%, 10%)'
                }}
                className='w-[50px] h-[50px] absolute'>
                <a href="/">
                    <img src={logo} alt='Logo' className='w-full h-full'/>
                </a>
            </div>
            <div>
            <ul className='list-none flex'>
                    {
                        rightOpt.map((item, index) => {
                            return (
                                <a href={item.link} className={
                                    windowLocation === '/retail-business'
                                    ? 'text-black mx-[15px] font-bold'
                                    : 'mx-[15px] font-bold text-white'
                                }>
                                    <li key={index}>{item.name}</li>
                                </a>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar