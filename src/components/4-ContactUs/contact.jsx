import React from 'react';
import './contact.css';

export default function ContactUs() {
  return (
    <>
      <section className="contact" id="contact">
        <form action="" className='form-contact'>
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="input-group-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            />
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </form>
      </section>
      <footer className="footer">
        <div className="social">
          <i className="bx bxl-github" style={{ color: '#ffffff' }} />
          <i className="bx bxl-discord-alt" style={{ color: '#ffffff' }} />
          <i className="bx bxl-instagram-alt" style={{ color: '#ffffff' }} />
          <i className="bx bxl-facebook-circle" style={{ color: '#ffffff' }} />
        </div>
        {/* <ul className="list">
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
        </ul> */}
        <div className="footer">
        <p>✨ابزر شخصيتك ب موقع احترافي </p>
        <p>يقول انتهى زماني .. <span>CV</span> ال</p>
        </div>

        <p className="copyright">@MajidahCode | All Rights Reserved</p>
      </footer>
    </>
  );
}