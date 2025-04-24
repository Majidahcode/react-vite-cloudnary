import React from 'react'
import {useEffect ,useState } from 'react'
import "./main.css"
import { myProjects } from '../myPorject'
export default function Main() {
  const [currentActive, setcurrentActive] = useState("all")
  const [arry, setArry] = useState(myProjects)

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory)
    const newArry = myProjects.filter((item)=>{
      return item.category === buttonCategory
  })

  setArry(newArry)

}
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
      
  //     if (window.scrollY < 2200) {
        
  //       setshowScrollLeftSection(true);
  //     } else {

  //       setshowScrollLeftSection(false);
  //     }
      
      
  //   });
  // }, []);

const [ShowScrollLeftSection, setshowScrollLeftSection] = useState(false);


  return (
    <main className='main flex' >
      <div className="flex left-section" >
        <button onClick={()=> {
          setcurrentActive("all")
          setArry([
            {projectTitle: "react project",category :"towColors",projectP:"موقع بلونين",imgPath:"https://res.cloudinary.com/dadtybpaw/image/upload/v1745424451/my_project/idmfsffu2vjrqrqux7ow.png"},
            
              { 
                projectTitle: "Neon Website موقع ب الوان ضوئيه",
                category: "neon",
                projectP: "خيارات اكثر في كيف تبغى يكون شكل موقعك المميز",
                imgPath: "https://res.cloudinary.com/dadtybpaw/image/upload/v1745424441/my_project/kyjldd9hvfqtpqocxptc.png",
                link: "https://sensational-starburst-b82f23.netlify.app/" // الرابط الذي تريد فتحه
              },
              // بقية المشاريع
            
            
                    {projectTitle: "css project",category :"css",projectP:"This Is Porject Build By CSS",imgPath:"https://res.cloudinary.com/dadtybpaw/image/upload/v1745424434/my_project/f440k3nqkcqkfjeq8uva.png",link: "https://majidahcode.github.io/photograghic-website/"},
                    {projectTitle: "node & express project",category :"node & express",projectP:"This Is Porject Build By Node & Express",imgPath:"https://res.cloudinary.com/dadtybpaw/image/upload/v1745424422/my_project/vydrlh5zrw6bvaimq12j.jpg", link: "https://sensational-starburst-b82f23.netlify.app/" // الرابط الذي تريد فتحه
                    },
                    {projectTitle: "javascript project",category :"javaScript",projectP:"This Is Porject Build By JavaScript",imgPath:"https://res.cloudinary.com/dadtybpaw/image/upload/v1745424411/my_project/ug318ki4yp7qs12xdkbj.png"},
                    {projectTitle: "bootstrap project",category :"dark",projectP:"متغير اللون داكن وفاتح",imgPath:"https://res.cloudinary.com/dadtybpaw/image/upload/v1745424408/my_project/kfs4igiopntmjj9yfpze.png",link: "https://majidahcode.github.io/Personal-Website-with-Dark-Light-Mode/" }

          ])
        }} className={currentActive === "all" ? "active" : null} href="">كل المشاريع</button>
      
        <button onClick={() => {
          handleClick("javaScript")
        }} className={currentActive === "javaScript"? "active" : null}  href="">رسميه</button>

        <button onClick={() => {
            handleClick("node & express")

        }} className={currentActive === "node & express"? "active" : null}  href="">زجاجيه</button>
<button onClick={() => {
          handleClick("neon")

      }} className={currentActive === "neon"? "active" : null} href="">الوان ضوئيه </button>
        
        <button onClick={() => {
          handleClick("css")

      }} className={currentActive === "css"? "active" : null} href="">الوان زاهيه</button>
        

        <button onClick={() => {
          handleClick("dark")

      }} className={currentActive === "dark"? "active" : null} href="">داكن وفاتح</button>
        
        <button onClick={() => {
          handleClick("towColors")

        }} className={currentActive === "towColors"? "active" : null} href="">لونين</button>
      </div>


      <div className="right-section">
      {arry.map((item) => {
  return (
    <div key={item.imgPath} className="container-card">
      <div className="card">
        <a 
          href={item.link || "#"} 
          target={item.link ? "_blank" : "_self"} 
          rel={item.link ? "noopener noreferrer" : ""}
        >
          <img src={item.imgPath} alt={item.projectTitle} />
        </a>
        <h1>{item.projectTitle}</h1>
        <p>{item.projectP}</p>
        <div className="footer-card">
          <span>📎 ❤</span>
          <span>more →</span>
        </div>
      </div>
    </div>
  );
})}


        
      </div>

    </main>
  )
}
