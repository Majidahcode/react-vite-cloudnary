import React, { useState } from "react";
import "./Hello1.css";
import Home from "../../Pages/Home";
import LastPage from "../lastPage/lastPge";

const Hello1 = () => {
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
        <LastPage />
      )}
    </div>
  );
};

const SplashScreen = ({ onClose }) => {
  return (
    <div className="splash-screen">
      {/* <h1>مرحباً بك!</h1>
      <p>هذه صفحة البداية.</p> */}
       <p>
        طيب ليه  محد قالي هالكلام من زمان <span className="tow2">عشانك</span> كنت في جامعه ي اخي وي اختي جامعه مدرسه ما تعلمتك الاشياء الي لازم تتعلمها عشان تعيش ب هالدنيا العيشه الصح الدراسه في وادي والحياه ومطباتها في وادي ثاااني خالص يمكن في المريخ  🙃
       </p>
       <p>
        وهالوقت الي احنا فيه بذات <span className="tow">بعنوان</span> <span className="tow1">الوحيد الي</span> <span className="tow3">يظهر</span> <span className="tow4">ويبرز</span> <span className="tow4">هو</span> <span className="tow5">المميز</span> الي تكلم عن نفسه بكل ثقه الي <span className="tow6">سوق لنفسه</span> بشكل عبقري مختلف <span className="tow7">جذاب</span> مثير للاهتمام <span className="tow8">احيانا من كثر ما انه جذاب تلقى نفسك ما خليت جلسه الا وتكلمت عنه وسوقت له</span> <span className="tow9">من غير مايقولك تكلم عني </span>
       </p>
       <p>
        اوووووباااااااااااااا وصلت والله جابك بس اضغط هذا الزر ي مميز 
       </p>
      <button className="close-button" onClick={onClose}>
        ❌
      </button>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
        {/* <FontAwesomeIcon icon="fa-solid fa-radiation" className="war" /> */}
      {/* <h1>الصفحة الرئيسية</h1> */}
     
    </div>
  );
};

export default Hello1;
