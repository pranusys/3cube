import React from 'react';
import logo from '../../assets/cube3logoicon.svg';

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
    const customStyle = windowLocation === '/about'
    ? { transform: 'translate(30%, 3%)' }
    : { transform: 'translate(50%, 5%)' };

  return (
    <div className={
        windowLocation === '/about' 
        ? 'w-[70%] overflow-auto'
         : 'overflow-auto'
        }>
        <div 
                style ={customStyle}
                className={
                    windowLocation === '/about'
                    ? 'w-[50px] h-[50px] absolute top-[3%] right-[65%] ssm:top-[5%] ssm:right-[50%]'
                    : 'w-[50px] h-[50px] absolute top-[5%] right-[50%]'

                }>
                <a href="/">
                    <img src={logo} alt='Logo' className='w-full h-full'/>
                </a>
        </div>
    <div className='px-[2%] py-[3%] ssm:hidden'>
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
            
            <div>
            <ul className='list-none flex'>
                    {
                        rightOpt.map((item, index) => {
                            return (
                                <a href={item.link} className={
                                    windowLocation === '/retail-business'
                                    ? 'text-black mx-[15px] font-bold'
                                    : windowLocation === '/about' ? 'text-black mx-[15px] font-bold'
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
        <div className='md:invisible'>
            <input type="checkbox" id="active" />
            <label for="active" className="menu-btn"><span></span></label>
            <label for="active" className="close"></label>
            <div className="wrapper">
                <ul>
                    <li><a href="/enterprise-business">Enterprise Business</a></li>
                    <li><a href="/">Join us</a></li>
                    <li><a href="/retail-business">Retail Business</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar