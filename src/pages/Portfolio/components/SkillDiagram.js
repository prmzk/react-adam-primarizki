import { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';
import CountUp from 'react-countup';

function SkillDiagram({valueProps, name}) {
    const [value, setValue] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setValue(valueProps)
        }, 1)
    }, [])
    return (
        <div className='skill-diagram-wrapper d-flex justify-content-center align-items-center'>
            <div className='skill-diagram'>
                <CircularProgressbarWithChildren 
                    counterClockwise
                    value={value}
                    styles={{
                        path: {
                        stroke: '#f37b83',
                        strokeLinecap: 'butt',
                        transition: 'stroke-dashoffset 1s ease 0s',
                        transformOrigin: 'center center',
                        strokeWidth: 18,
                        },
                        trail: {
                        stroke: '#daabbb5d',
                        strokeLinecap: 'butt',
                        strokeWidth: 8,
                        },
                    }}
                    
                >
                    <CountUp duration={1} end={valueProps} suffix='%' className='percentage'/>
                </CircularProgressbarWithChildren >
                <p className='mt-4 text-center fs-5 fw-bold'>{name}</p>
            </div>
        </div>
    )
}

export default SkillDiagram
  