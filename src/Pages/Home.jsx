// import React from 'react'

import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Header from "../Components/Header"


const Home = () => {
  return (
  <div className=" container ">
    <Header/>
    {/* Contact */}
    <Contact/>
    <Footer/>
  </div>
  )
}

export default Home