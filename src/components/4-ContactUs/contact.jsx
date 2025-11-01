import React, { useState } from 'react';
import './contact.css';

export default function ContactUs() {
  const [lang, setLang] = useState('ar');
  const [submitted, setSubmitted] = useState(false);

  const t = {
    en: {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone Number",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      success: "Message sent successfully!",
      required: "This field is required",
      language: "عربي"
    },
    ar: {
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الجوال",
      subject: "الموضوع",
      message: "رسالتك",
      send: "إرسال الرسالة",
      success: "تم إرسال الرسالة بنجاح!",
      required: "هذا الحقل مطلوب",
      language: "EN"
    }
  };

  const tr = t[lang];

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <>
      <section className="contact" id="contact">
        <form
          action="https://formspree.io/f/mqaqrkdl"
          method="POST"
          className="form-contact"
          onSubmit={handleSubmit}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        >

          <button
            type="button"
            className="lang-switch"
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            style={{ marginBottom: '10px' }}
          >
            {tr.language}
          </button>

          <div className="input-group">
            <div className="input-box">
              <input type="text" name="name" placeholder={tr.fullName} required />
              <input type="email" name="email" placeholder={tr.email} required />
            </div>
            <div className="input-box">
              <input type="tel" name="phone" placeholder={tr.phone} required />
              <input type="text" name="subject" placeholder={tr.subject} required />
            </div>
          </div>

          <div className="input-group-2">
            <textarea name="message" cols="30" rows="10" placeholder={tr.message} required />

            <div className="btn-group">
              <input type="submit" value={tr.send} className="btn" />
              <a
                href="https://wa.me/966530683075"
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                <i className="bx bxl-whatsapp" style={{ marginRight: '8px' }}></i>
                
              </a>
            </div>

            {submitted && <p className="success-msg">{tr.success}</p>}
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="footer">
  <p>
    ✨ {lang === 'ar' ? 'ابزر شخصيتك ب موقع احترافي' : 'Showcase your identity professionally ✨'}
  </p>
  <p>
    {lang === 'ar' ? (
      <>
        يقول انتهى زماني .. <span>CV</span>
      </>
    ) : (
      <>
        <span>CV</span>? That’s old.. Let your website speak!
      </>
    )}
  </p>
</div>

      </footer>
    </>
  );
}
