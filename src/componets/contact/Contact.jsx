import React from 'react'
import {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_lnd6p2s', 'template_ejjzvbe', form.current, '3_OkNOtMHKpAZM7-W')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset()
};


  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get In Touch</h2>

      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className="contact__title">Let's Talk!</h3>
          <p className="contact__details">Let me know what you think in email if you need to!</p>
        </div>
        {/* <form ref={form} onSubmit={sendEmail} action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" name="user_name" placeholder='Insert Your Name' required/>
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" name='user_email'placeholder='Insert Your email' required/>
            </div>
          </div>
          <div className="contact__form-div">
              <input type="text" className="contact__form-input" name='subject'placeholder='Insert Your Subject' required/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea name="message" id='' cols="30" rows="10" className="contact__form-input" placeholder='let me know what you need' required></textarea>
            </div>

            <button className="btn" type='submit'>Send</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact