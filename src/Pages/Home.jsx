import React from 'react'
import Header from "../components/1-Header/header"
import Hero from "../components/2-Hero/hero"
import Main from "../components/3-Main/Main"
// import ContactUs from "../components/4-ContactUs/contact"
import HelloPage from '../components/PopUpPages/HelloPages/HelloPage'
import WebsiteVScv from '../components/WebsiteVScv/WebiteVScv'
import Hello from '../components/Hello/Hello'
export default function Home() {
  
  return (

    <>
    
      {/* <HelloPage/> */}
      {/* <Hello/> */}
      {/* <LastPage/> */}
      <Header/>
      <Hero/>
      <WebsiteVScv/>
      <Main/>
      {/* <ContactUs/> */}
    
      </>
  )
}
