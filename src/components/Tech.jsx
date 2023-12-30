

import React from 'react'
import { technologies } from '../data'
import BallCanvas from './Canvas/Ball'
import StarWrapper from '../constants/SectionWrapper'
import Skills from "../components/skills/Skills"
const Tech = () => {
  const hidecomponent=window.innerWidth<=400;
  return (
  
       <div className='balls'>
        {hidecomponent?(<Skills/>)
        :(
      <div className='Tech_container'>
      <div className='skills'><h1 style={{fontSize:"30px",marginTop:"2vw"}}>What Skills I Have</h1></div>
    <div className='tech_icons'>
    {technologies.map((technology) => (
      <div className="ballss" style={{width:"100px",height:"100px",display:"flex"}} key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>
    ))}
    </div>
      </div>
      )}
        
      
      

    </div>
    
  )
}

export default StarWrapper(Tech, "");
