import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/1-Header/header";
import Hero from "./components/2-Hero/hero";
import Main from "./components/3-Main/Main";
import ContactUs from "./components/4-ContactUs/contact";
import Footer from "./components/5-Footer/footer";
import "./App.css";
import Home from "./Pages/Home"

import NextPage from "./Pages/NextPage";
import AboutMePage from "./Pages/AboutMePage";
import AskAboutProg from "./Pages/AskAboutProg";
import Sourses from "./Pages/Sourses";
import Content from "./Pages/Content";
import HelloPage from "./components/PopUpPages/HelloPages/HelloPage";
import Hello from "./components/Hello/Hello";
// import MainPage from "./Pages/mainPage";



function App() {
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [ShowScrollBTN, setshowScrollBTN] = useState(false);

  return (
   
    <Router>
      <div id="up" className="container">
        <Routes>
          
          {/* <Hello/> */}
          <Route path="/" element={<Hello/>} /> 
          <Route path="/Home" element={<Home />} /> 
          <Route path="/nextPage" element={<NextPage />} />
          <Route path="/AboutMePage" element={<AboutMePage />} />
          <Route path="/AskAboutProg" element={<AskAboutProg />} />
          <Route path="/Sourses" element={<Sourses />} />
          <Route path="/Content" element={<Content />} />
        </Routes>
        {/* <Main /> */}
        
        {/* <Footer /> */}
        <a
          style={{ opacity: ShowScrollBTN ? 1 : 0, transition: "1s" }}
          href="#up"
        >
          <button className="scrollToUp">↥</button>
        </a>
      </div>
    </Router>
  );
}

export default App;
