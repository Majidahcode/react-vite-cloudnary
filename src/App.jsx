import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Pages/Home";
import NextPage from "./Pages/NextPage";
import AboutMePage from "./Pages/AboutMePage";
import AskAboutProg from "./Pages/AskAboutProg";
import Sourses from "./Pages/Sourses";
import Content from "./Pages/Content";
import Hello from "./components/Hello/Hello";
import FileUploader from "./components/FileUploader";

import ContactUs from "./components/4-ContactUs/contact";
import Footer from "./components/5-Footer/footer";

import "./App.css";

// مكون لتحديد ما إذا كنا في صفحة تحتوي على Footer/ContactUs
const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const showFooter = currentPath === "/home" || currentPath === "/content";

  return (
    <>
      {children}

      {/* مكونات تظهر فقط في صفحات معينة */}
      {showFooter && <ContactUs />}
      {showFooter && <Footer />}

      {/* زر الصعود للأعلى يظهر فقط في صفحات معينة */}
      <ScrollToTopButton />

      {/* رافع الملفات يظهر فقط في صفحات معينة */}
      {showFooter && <FileUploader />}
    </>
  );
};

const ScrollToTopButton = () => {
  const [showScrollBTN, setShowScrollBTN] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBTN(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    const topElement = document.getElementById("up");
    if (topElement) {
      topElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="scrollToUp"
      style={{ opacity: showScrollBTN ? 1 : 0, transition: "opacity 0.5s" }}
      onClick={handleScrollToTop}
    >
      ↥
    </button>
  );
};


function App() {
  return (
    <Router>
      <div id="up" className="container">
        <LayoutWrapper>
          <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/nextPage" element={<NextPage />} />
            <Route path="/AboutMePage" element={<AboutMePage />} />
            <Route path="/AskAboutProg" element={<AskAboutProg />} />
            <Route path="/Sourses" element={<Sourses />} />
            <Route path="/Content" element={<Content />} />
          </Routes>
        </LayoutWrapper>
      </div>
    </Router>
  );
}

export default App;
