import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
import {RiContactsLine} from 'react-icons/ri'
import {BsBook} from 'react-icons/bs'
import './nav.css'
import { useState } from 'react'
const nav = () => {
  const [active,setActive]=new useState('#');
  return (
    <nav >

      <a href="#" onClick={()=>setActive('#')} className={active==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about"onClick={()=>setActive('#about')} className={active==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''}><BsBook/></a>
      <a href="#portfolio" onClick={()=>setActive('#portfolio')} className={active==='#portfolio'?'active':''}><AiOutlineProject/></a>
      <a href="#contact" onClick={()=>setActive('#contact')} className={active==='#contact'?'active':''}><RiContactsLine/></a>

    
    </nav>
  )
}

export default nav
