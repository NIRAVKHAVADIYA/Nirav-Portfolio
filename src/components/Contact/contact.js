import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

import co1 from '../../assets/co1.png'; // GitHub
import co2 from '../../assets/co2.png'; // LinkedIn
import co3 from '../../assets/co3.png'; // Email
import co4 from '../../assets/co4.png'; // Portfolio

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

 const sendEmail = (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus('');

  emailjs
    .sendForm(
      'service_2mw6auo',
      'template_wuosbp5',
      form.current,
      'VGRVFSuVwnnPLCewn'
    )
    .then(
      () => {
        setLoading(false);
        setStatus('success');
        form.current.reset();

        // 🔹 auto remove success message
        setTimeout(() => {
          setStatus('');
        }, 3000);
      },
      () => {
        setLoading(false);
        setStatus('error');

        // 🔹 auto remove error message
        setTimeout(() => {
          setStatus('');
        }, 3000);
      }
    );
};


  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>

        <span className="contactDesc">
          Have a project or opportunity? Let’s connect and build something great together.
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="name"
            required
          />

          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="email"
            required
          />

          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="submitBtn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="successMsg">✅ Message sent successfully!</p>
          )}

          {status === 'error' && (
            <p className="errorMsg">❌ Something went wrong. Please try again.</p>
          )}

          <div className="links">
            <a href="https://github.com/NIRAVKHAVADIYA" target="_blank" rel="noreferrer">
              <img src={co1} alt="GitHub" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/nirav-khavadiya-0a464328a/" target="_blank" rel="noreferrer">
              <img src={co2} alt="LinkedIn" className="link" />
            </a>
            <a href="https://x.com/Nirav_patel_001">
              <img src={co3} alt="Email" className="link" />
            </a>
            <a href="https://www.instagram.com/iam_nk_001/?next=%2F&hl=en" target="_blank" rel="noreferrer">
              <img src={co4} alt="Portfolio" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
