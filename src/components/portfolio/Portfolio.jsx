import React from 'react'
import './portfolio.css'
const portfolio = () => {
  return (
    <section id='portfolio' className=''>
      <div id='projects'>
        <h3>Projects</h3>
        <ul>
          <div className='project-list'>

            <li>Created a Spotify Clone </li>
          <p>&nbsp;&nbsp;&nbsp; used Technologies-- HTML, CSS, javaScript</p>
            <p><a href="https://stellar-daifuku-2348e7.netlify.app/" target="_blank" >click here</a></p>
          </div>

          <div className='project-list'>

            <li>Created a NotesApp</li>
            <p>&nbsp;&nbsp;&nbsp; used Technologies -- Html,Css,javaScript,React</p>
            <p> <a href="https://stupendous-kashata-48fa99.netlify.app/" target="_blank" rel="noopener noreferrer">click here</a></p>
          </div>
          <div className='project-list'>

            <li>Created a website which tells which key is pressed and  the code of that key </li>
            <p>&nbsp;&nbsp;&nbsp; used Technologies-- HTML, CSS, javaScript</p>
            <p><a href="https://fantastic-starship-b31d0b.netlify.app" target="_blank">click here</a></p>
          </div>
          <div className='project-list'>

            <li>Created a Rock Paper and Scissors</li>
            <p>&nbsp;&nbsp;&nbsp; used Technologies-- HTML, CSS, javaScript</p>
            <p><a href="https://clever-kringle-91eaae.netlify.app/" target="_blank">click here</a></p>
          </div>

        </ul>
      </div>
    </section>
  )
}

export default portfolio
