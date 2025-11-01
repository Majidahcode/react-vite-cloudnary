import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer className='footer flex'>
      {/* <ul className='flex'>
      <li><a href="">About</a></li>
      <li><a href="">Porjects</a></li>
      <li><a href="">Porfile</a></li>
      <li><a href="">Uses</a></li>
    </ul> */}
      <div className="social">
        {/* GitHub */}
        <a
          href="https://github.com/Majidahcode"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="bx bxl-github" style={{ color: '#ffffff' }} />
        </a>

        {/* <i className="bx bxl-discord-alt" style={{ color: '#ffffff' }} /> */}

        {/* Twitter */}

        <a
          href="https://twitter.com/Tashfeeer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="bx bxl-twitter" style={{ color: '#ffffff' }} />
        </a>

        {/* LinkedIn */}


        <a
          href="https://www.linkedin.com/in/tashfeer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="bx bxl-linkedin" style={{ color: '#ffffff' }} />
        </a>

          {/* WhatsApp (استخدمي الرقم بصيغة دولية بدون +، مثلاً 966501234567) */}
  <a
                href="https://wa.me/966530683075"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                <i className="bx bxl-whatsapp" style={{ color: '#ffffff' }}></i>
                
              </a>
              
      </div>


      <p className="copyright">@Tashfeer | All Rights Reserved</p>
      <p className="copyright">@تشفير جميع الحقوق محفوظه   </p>
    </footer>
  )
}
