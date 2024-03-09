import React from 'react';
import Navbar from '../../navbar/Navbar';
import playBtn from '../../../assets/enterprise/icons/playBtn.svg';
import bgImgPic from '../../../assets/about/bgImgPic.svg';
import '../../../styles/about/topsection/topsection.css'; 


const TopSection = () => {
  return (
    <div 
        className='topSection-container'
        style={{
            width: "100%",
            height: '90vh'
        }}>
            <Navbar />
            <img src={bgImgPic} 
                style={{
                    position: 'absolute',
                    right:'0',
                    top:'0',
                    zIndex: '-1',
                    height: '600px'
                }}
                alt="bgImgPic" />
            <div className='topSection-container--inner'>
                <div className='topSection-container--inner--inner'></div>
                <h2 className='topSection-container--inner-header'>
                  <b style={{color: 'black'}}>About Our</b> 
                  <b style={{color: '#0065A8'}}>&nbsp;Business</b>
                </h2>
                <p className='topSection-container--inner-desc'>
                    Nobody understands loans and financial needs better than us.
                    With 3cube Technologies, you can always have the emergency
                    financial support you need.
                </p>
                <div className='topSection-container--inner--inner2'>
                    <button className='topSection-container--inner--inner2--btn1'>
                        <a href="/">Learn More</a>
                    </button>
                    <button className='topSection-container--inner--inner2--btn2'>
                        <a href="/" style={{display: 'flex'}}>
                            <img src={playBtn} 
                                alt="playBtn" 
                                style={{width: '25px', height: '25px'}}/>
                            <p >&nbsp;Start Demo</p>
                        </a>
                    </button>
                </div>
            </div>
    </div>
  )
}

export default TopSection