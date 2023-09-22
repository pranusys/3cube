import React from 'react';
import aboutPic from '../../../assets/home/aboutpic.svg';

const About = () => {
  return (
    <div className='w-full h-auto p-[3%] grid grid-cols-2 ssm:flex ssm:flex-wrap'>
        <div className='relative'>
            <h1 className='absolute text-[120px] ml-[50px] ssm:text-[75px] font-[900] mt-[15%] text-[#00000026]'>About Us</h1>
            <div className='mt-[30%] mx-[50px]'>
              <div className='font-bold text-[30px] tracking-[1px]'>
                  <h3 className='text-[35px] ssm:text-[28px]'>We are Skilled in Providing Superior Service.</h3>
              </div>
              <p className='text-justify my-[15px] text-[16px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco
              </p>
              <a href="/">
                <button className='border-2 border-[#242537] p-[8px] my-[20px] text-[#242537]'>
                  Learn More
                </button>
              </a>
            </div>
        </div>
        <div className='w-full h-full'>
            <img src={aboutPic}  alt="About pic" />
        </div>
    </div>
  )
}

export default About