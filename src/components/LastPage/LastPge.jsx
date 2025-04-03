import React, { useState } from "react";
import "./LastPage.css";
import Home from "../../Pages/Home";
import WowPage from "../WowPage/WowPage";

const LastPage = () => {
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
        <Home />
      )}
    </div>
  );
};

const SplashScreen = ({ onClose }) => {
  return (
    <div className="splash-screen">
      {/* <h1>مرحباً بك!</h1>
      <p>هذه صفحة البداية.</p> */}
      <br />
      <h1>
        تعال اقول لك على سر في الانترنت 🫢
      </h1>
      <h2>
        فيه موقع على الانترنت اسمه <span>تشفير</span> عنوانه 
      </h2>
      <br />
      <h3>
      تبغى موقع عليه الكلام والا موقع <span>مشي الحال</span> 
      </h3>
    
      <button className="lastPage" onClick={onClose}>
        ✖️
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

export default LastPage;
