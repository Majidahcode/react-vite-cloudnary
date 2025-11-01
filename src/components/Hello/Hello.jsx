import React, { useState } from "react";
import "./Hello.css";
import Home from "../../Pages/Home";
import Hello1 from "../Hello1/Hello1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons";
import ChatOnboarding from "../whatsApp"

const Hello = () => {
  const [showSplash, setShowSplash] = useState(true);

  // دالة لإخفاء صفحة البداية عند الضغط على الزر
  const handleCloseSplash = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onClose={handleCloseSplash} />
      ) : (
        <Hello1 />
      )}
    </div>
  );
};

const SplashScreen = ({ onClose }) => {
  return (
    <div className="splash-screen warning-box">
      {/* <h1>مرحباً بك!</h1>
      <p>هذه صفحة البداية.</p> */}
<FontAwesomeIcon icon={faCircleRadiation} className="war"/>       
{/* <p>
        من غير <span className="one">رسميات</span> ونجيب ارقام تقول لنا كم نسبه <span className="one2">العاطلين</span> والي رفضوهم لمن قدموا على وظائف من غير <span className="one3">الدوشه</span> هذي كلها احنا عارفين <span className="one4">كويس</span> 
      </p>
      <p>قد ايش صارت ازمه الشباب هذي الايام <span className="one5">هو</span> <span className="one6">كيف</span> يلقى شغل يلقى وظيفه كيف يعمل سيره ذاتيه محترمه كيف يبرز نفسه وسط <span className="one7">ال 7 مليار انسان🤯</span> </p>
      <p>
         من هذول ال7 مليار <span className="one8">انسان</span> درس <span className="one9">الثانوي والجامعه</span> ويا سلام  <span className="one10">طيب!!!</span> صدمه العمر بتجي بعد التخرج طيب وبعدين وشسوي<span className="one11"> ماهو التالي ؟</span> والله التالي انك تروح تقدم على وظيفه <span className="one12">طيب</span> رحت وقدمت على وظيفه رح يسألونك سؤال جدا بيييسط هي سيرتك الذاتيه وينها <span className="one13">😕سيره ذاتيه</span> والله انا اسمي احمد عمري 24 سنه  <span className="one14">هييييي عمي</span> انت مو قاعد تسمع لاستاذ الابتدائي  ابغى سيره ذاتيه انت حتى ما تعرف تتكلم عن نفسك كويس ما عندك <span className="one15">مهاره تسويق لنفسك</span> احنا بنعتذر ما نقدر نوظفك <span className="one16">والله محترمين</span> اذا جاوبوك بالطريقه وماشرشحوك  بكلام يدخلك في اكتئاب 
      </p> */}
       <video src=""></video>
        <video className="about-video" src="https://res.cloudinary.com/dadtybpaw/video/upload/v1759319079/video-hello-page1_mosuqx.mp4" 
        
        autoPlay
  // muted
  playsInline
  controls
  preload="auto"
  crossOrigin="anonymous"
  poster="https://res.cloudinary.com/dadtybpaw/video/upload/q_auto,f_auto,w_720/v1759319079/video-poster.jpg"
        
        ></video>

      <button className="hello" onClick={onClose}>
        لو سمحتااا ممكن تضغطني😊
      </button>
      {/* <ChatOnboarding/> */}
    </div>
  );
};

// const MainContent = () => {
//   return (
//     <div className="main-content">
//       {/* <h1>الصفحة الرئيسية</h1> */}
     
//     </div>
//   );
// };

export default Hello;


