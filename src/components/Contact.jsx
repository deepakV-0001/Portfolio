import React from 'react'
import '../components/contact.css';
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';




const data=[{
   name:'Email',
   target:'ddt8764156581@gmail.com',
   link:'mailto:ddt8764156581@gmail.com',
   icon:<AiOutlineMail  className='contact_option-icon'/>,
},
{
  name:'Messanger',
  target:'Deepak Ddt',
  link:'https://www.instagram.com/deepak_ddt/',
  icon:<RiMessengerLine className='contact_option-icon'/>,
},
{
  name:'WhatsApp',
  target:'7728025028',
  link:'https://api.whatsapp.com/send?phone=+917728025028',
  icon:<AiOutlineWhatsApp className='contact_option-icon'/>
},
]

const Contact = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
<section id='contact'>
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact_container">
    <div className="contact_options">
      {
        data.map((value,idx)=>{
          return(
            <article key={idx} className='contact_option'>
        {value.icon}
        <h4>{value.name}</h4>
        <h5 >{value.target}</h5>
        <a href={value.link} target="_blank">Send a message</a>

      </article>
          )
        })
      }
    </div>

    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Full Name' required/>
      <input type="email" name='email' placeholder='Email' required />
      <textarea name="message" rows="7" placeholder='Your message' required></textarea>
      <button className='btn btn-primary' type='submit'>Send Message</button>
    </form>
  </div>
</section>
  )
}

export default Contact