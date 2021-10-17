import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';

function SkillBar({valueProps, name}) {
    const [value, setValue] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setValue(valueProps)
        }, 1)
    }, [])
    return (
        <div className='skill-bar'>
            <div className='d-flex align-items-center '>
                <div className='progress-skill-bar-wrapper d-flex me-5'>
                    <div class="progress-skill-bar" style={{width: `${value}%`}}/>
                </div>
                <CountUp duration={1} end={valueProps} suffix='%' className='percentage'/>
            </div>
            <p className='fs-5 fw-bold'>{name}</p>
           
        </div>
        
    )
}

export default SkillBar
