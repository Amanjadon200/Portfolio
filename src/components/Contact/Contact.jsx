// import React from 'react'
import './contact.css'
import React ,{useRef} from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5ql5m08', 'template_zw4mi8t', form.current, 'dGIYZCqOXAYcP4ZOB')
    e.target.reset();
  };
  return (
    <section id='contact' className=''>
      {/* <h2>Contact me</h2> */}
      <div className='outer-article'>
      
      <div className='abc'>
          <div className='article'>
            <h4>Email</h4>
            <p>jadonaman471@gmail.com</p>
            <a href="mailto:jadonaman471@gmail.com">send a message</a>
          </div>

          <div className='article'>
            <h4>WhatsApp</h4>
            <p>+91.........</p>
            <a href="https://api.whatsapp.com/send?phone=919193030579" target="_blank">send a message</a>
          </div>
        </div>

        <div id='form' >
          <h2>Contact Me</h2>
          <h5>Lets's Talk</h5>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='enter your name' required />
            <input type="email" name='email' placeholder='enter your email' required />
            <textarea  name="message" rows="10" cols={40} placeholder='Type Your Message Here'></textarea>
            <button className='btn submit' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
