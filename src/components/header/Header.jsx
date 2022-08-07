import React from 'react'
import CTA from './CTA'
import './header.css'
import me from '../../assets/me.png'
import HeaderIcons from './HeaderIcons'

const header = () => {
  return (
    <div className='outer-header-div'>
      <div className="container header-container">
        <h5>Hii I am</h5>
      
        <h1>Aman Jadon</h1>
        <h5 className=''>Full stack Developer And a Coder</h5>
        <CTA/>
        <div>

        </div>
        
      </div>
      <div className='outer-image-container'>
        <HeaderIcons/>
        
        <img src={me} className="me"></img>
     
        </div>
    </div>
  )
}

export default header
