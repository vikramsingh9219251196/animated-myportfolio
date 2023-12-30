import React from 'react'
import CV from "../components/About/CV/CV1.pdf"
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className='btn'style={{cursor:"pointer"}} >Download CV</a>
    </div>
  )
}

export default CTA

