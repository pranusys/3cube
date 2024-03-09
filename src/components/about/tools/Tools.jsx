import React from 'react';
import pointsImg from '../../../assets/about/points.svg';
import '../../../styles/about/tools/tools.css';

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
    <div className='tools-container'>
            <div style={{width: '100%', height: '100%'}}>
                <img src={pointsImg} alt="points img" style={{width: '100%', height: '100%'}} />
            </div>
            <div className='tools-circle'>
            <div className='tools-container--inner2'>
                            {
                                rightStats.map((stat) => {
                                    return (
                                        <div 
                                            style = {{
                                                marginLeft:'15px',
                                                marginRight:'15px',
                                                width:'180px'
                                            }}>
                                            <h2 className='tools-container--inner2-header'>{stat.header}</h2>
                                            <p className='tools-container--inner2-desc'>
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