import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'

const HeaderIcons = () => {
  return (
    <div className='icons'>
      <div className='anchorIcons'>
        <a href="https://github.com/Amanjadon2000" target='_blank'><BsGithub /></a>
          <p>&nbsp;GitHub</p>
      </div>
      <div className='anchorIcons'>
        <a href="https://www.linkedin.com/in/aman-jadon-5b11b4242/" target='_blank' ><FaLinkedin /></a>
          <p>&nbsp;LinkedIn</p>

      </div>
      <div className='anchorIcons'>
        <a href="https://leetcode.com/amanjadon2000/" target='_blank' ><SiLeetcode /></a>
          <p>&nbsp;LeetCode</p>
      </div>
      <div className="anchorIcons">
      <a href="https://auth.geeksforgeeks.org/user/amanjadon2000/practice"><SiGeeksforgeeks /></a>
          <p>&nbsp;GeeksForGeeks</p>
      </div>
    </div>
  )
}

export default HeaderIcons
