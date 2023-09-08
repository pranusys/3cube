import React from 'react'

const Navbar = () => {

    const leftOpt = [
        {name : 'Enterprise Business', link : '/'},
        {name : 'Join Us', link : '/'},
    ];

    const rightOpt = [
        {name : 'Retail Business', link : '/'},
        {name : 'Login', link : '/'},
    ];

  return (
    <div className='px-[2%] py-[3%]'>
        <div className='flex justify-between items-center'>
            <div>
                <ul className='list-none flex'>
                    {
                        leftOpt.map((item, index) => {
                            return (
                                <a href={item.link} className='mx-[15px] font-bold'>
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
                                <a href={item.link} className='mx-[15px] font-bold text-white'>
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