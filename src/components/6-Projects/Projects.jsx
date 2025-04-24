import React from 'react';
import "../../assets/style-projects.css";

export default function Projects() {
  // دالة لتوجيه المستخدم إلى الرابط عند النقر على البطاقة
  const handleCardClick = (url) => {
    window.open(url, '_blank'); // يفتح الرابط في صفحة جديدة
  };

  return (
    <>
      <div className="wrapper">
        {/* صورة خلفية (يمكنك إظهارها بإزالة التعليق إذا كانت موجودة) */}
        {/* <img className="bg-img-1" src="/images-projects/6698edit-removebg-preview.png" alt="bg" /> */}

        {/* فيديو خلفية */}
        <video
          src="https://res.cloudinary.com/dadtybpaw/video/upload/v1745424621/my_project/f9emljfdsh58094ke3gw.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* البطاقات */}
        <div className="container-projects">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label
            htmlFor="c1"
            className="card-project"
       
       />
          <h1
            onClick={() => handleCardClick('https://sensational-starburst-b82f23.netlify.app/')}
          
          >
<i class="fa-solid fa-share-from-square"></i>
          </h1>


          
          <input type="radio" name="slide" id="c2" />
          <label
            htmlFor="c2"
            className="card-project"
          />
                    <h1
            onClick={() => handleCardClick('https://majidahcode.github.io/Personal-Website-with-Dark-Light-Mode/')}

                    
                    >
<i class="fa-solid fa-share-from-square"></i>

                    </h1>

          
          <input type="radio" name="slide" id="c3" />
          <label
            htmlFor="c3"
            className="card-project"
          />
                    <h1
            onClick={() => handleCardClick('https://www.example.com/link3')}
                    
                    >
<i class="fa-solid fa-share-from-square"></i>

                    </h1>

          
          <input type="radio" name="slide" id="c4" />
          <label
            htmlFor="c4"
            className="card-project"
          />
                    <h1
            onClick={() => handleCardClick('https://majidahcode.github.io/Samirah-Website/')}
                    
                    >
<i class="fa-solid fa-share-from-square"></i>

                    </h1>

          
          <input type="radio" name="slide" id="c5" />
          <label
            htmlFor="c5"
            className="card-project"
          />
          <h1
            onClick={() => handleCardClick('https://majidahcode.github.io/Bader-Khaled/')}
          
          >
<i class="fa-solid fa-share-from-square"></i>

          </h1>

          <input type="radio" name="slide" id="c6" />
          <label
            htmlFor="c6"
            className="card-project"
          />
                    <h1
            onClick={() => handleCardClick('https://majidahcode.github.io/photograghic-website/#top')}

                    
                    >
<i class="fa-solid fa-share-from-square"></i>

                    </h1>

        </div>
      </div>
    </>
  );
}

// import React from 'react';
// import "../../assets/style-projects.css";

// export default function Projects() {
//   return (
//     <>
//       <div className="wrapper">
//         {/* فيديو الخلفية */}
//         <video
//           src="/images-projects/8303104-hd_1920_1080_24fps.mp4"
//           autoPlay
//           loop
//           muted
//         ></video>

//         {/* البطاقات مع روابط */}
//         <div className="container-projects">
//           <input type="radio" name="slide" id="c1" defaultChecked />
//           <a href="https://example.com/project1" target="_blank" rel="noopener noreferrer">
//             <label htmlFor="c1" className="card-project" />
//           </a>

//           <input type="radio" name="slide" id="c2" />
//           <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer">
//             <label htmlFor="c2" className="card-project" />
//           </a>

//           <input type="radio" name="slide" id="c3" />
//           <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer">
//             <label htmlFor="c3" className="card-project" />
//           </a>

//           <input type="radio" name="slide" id="c4" />
//           <a href="https://example.com/project4" target="_blank" rel="noopener noreferrer">
//             <label htmlFor="c4" className="card-project" />
//           </a>

//           <input type="radio" name="slide" id="c5" />
//           <a href="https://example.com/project5" target="_blank" rel="noopener noreferrer">
//             <label htmlFor="c5" className="card-project" />
//           </a>

//           <input type="radio" name="slide" id="c6" />
//           <a href="https://example.com/project6" target="_blank" rel="noopener noreferrer">
//             <label htmlFor="c6" className="card-project" />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }
