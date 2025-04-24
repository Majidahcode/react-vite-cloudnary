import React from 'react'
import './hero.css'
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-section">
        <img src="" alt="" />
        <h1 className='title'>مع تشفير كل    <span>تصميم</span>  ممكن <span>يصير</span> <br />
            
        </h1>
        <p className='disc'>تحب الجديد امممم الغريب اوووو المفيد يا سيدي الفريد </p>
        <p className='disc'>تحب كل هذي الحاجات    </p>
        <p className='disc'>  ياهلا واالله معاك تشفير شخصيا وهنا تقدر تتواصل معي بس خذلك لفه على الموقع وبعدين تعال وتفلسف علي ب ال     </p>
        <p>اووو معليش اقصد الموقع الشخصي المميز الي يمثلك <span className='cv'>cv</span> </p>
        <ul className='lang flex'>
          <div className="one"></div>
          <li><a href="">Python</a></li>
          <li><a href="">Teilwaind</a></li>
          <li><a href="">Js</a></li>
          <li><a href="">React</a></li>
          <li><a href="">Bootstrap</a></li>
          <li><a href="">Mern</a></li>
          
          {/* <span> وزياده..كمان</span> */}
        </ul>
        <span className='goDown'>⇣</span>
        </div>
      <div className="right-section"><img src="https://res.cloudinary.com/dadtybpaw/image/upload/v1745424424/my_project/bq2o4c93c2yvq6ltivbi.png" alt="" /></div>
    </section>
  )
}
