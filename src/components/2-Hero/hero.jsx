import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <section className='hero flex'>
      {/* طبقتا الخلفية */}
      <div className="hero-overlay base"></div>
      <div className="hero-overlay hover"></div>

      <div className="left-section">
        <h1 className='title'>
          مع تشفير كل <span>تصميم</span> ممكن <span>يصير</span> <br />
        </h1>
        <p className='disc'>تحب الجديد امممم الغريب اوووو المفيد يا سيدي الفريد</p>
        <p className='disc'>تحب كل هذي الحاجات</p>
        <p className='disc'>ياهلا والله معاك تشفير شخصيا وهنا تقدر تتواصل معي بس خذلك لفه على المكاااااان وبعدين تعال وتفلسف علي ب ال </p>
        <span className='cv'>cv</span>
        <p className='disc'>اووو معليش اقصد الموقع الشخصي المميز الي يمثلك</p>

        <ul className='lang flex'>
          <div className="one"></div>
          <li><a href="">Python</a></li>
          <li><a href="">Tailwind</a></li>
          <li><a href="">Js</a></li>
          <li><a href="">React</a></li>
          <li><a href="">Bootstrap</a></li>
          <li><a href="">Mern</a></li>
        </ul>

        <span className='goDown'>⇣</span>
      </div>

      <div className="right-section">
        <img
          src="https://res.cloudinary.com/dadtybpaw/image/upload/f_auto,q_auto/v1745424424/my_project/bq2o4c93c2yvq6ltivbi.png"
          alt=""
          loading="lazy"
        />
      </div>
    </section>
  )
}
