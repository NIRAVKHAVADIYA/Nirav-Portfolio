import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

import c1 from '../../assets/c1.jpg';
//import c2 from '../../assets/c2.jpg';
//import c3 from '../../assets/c3.png';
//import c4 from '../../assets/c4.jpg';

import co1 from '../../assets/co1.png';
import co2 from '../../assets/co2.png';
import co3 from '../../assets/co3.png';
import co4 from '../../assets/co4.png';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2mw6auo', 'template_wuosbp5', form.current,'VGRVFSuVwnnPLCewn')
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email Sent!!");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
        {/* <div id='clients'>
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>hello this is for demo this text is not ezists in real worSoftware engineer with a passion for continuous learning and staying current with
                     emerging technologies to build innovative solutions.ld.
            </p>
            <div className='clientImgs'>
                <img src={c1} alt='' className='clientImg'/>
                <img src={c1} alt='' className='clientImg'/>
                <img src={c1} alt='' className='clientImg'/>
                <img src={c1} alt='' className='clientImg'/>
            </div>
        </div> */}
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Fill out this form for work with me and get opportunitties.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='name'/>
                <input type='email' className='email' placeholder='Your Email' name='email'/>
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={co1} alt='' className='link' />
                    <img src={co2} alt='' className='link' />
                    <img src={co3} alt='' className='link' />
                    <img src={co4} alt='' className='link' />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
