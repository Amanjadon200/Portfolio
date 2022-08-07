import React from 'react'
import cv from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='CTA'>
      <a href={cv} download className='btn'>Download CV</a>
      <a href="#contact" className='btn'>Lets talk</a>
    </div>
  )
}

export default CTA
