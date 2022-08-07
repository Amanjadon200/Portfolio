import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import MyTechnicalSkills from './components/mytechnicalskills/MyTechnicalSkills'

import './index.css'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/> 
    <About/> 
    <Experience/>
    <Portfolio/>
    <Contact/>
    <MyTechnicalSkills/>
    
    </>

  )
}

export default App
