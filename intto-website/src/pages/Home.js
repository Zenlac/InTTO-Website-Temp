import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PartnerSlides from '../components/PartnerSlides'
import BgPattern from '../components/BgPattern'
import AboutHome from '../components/AboutHome'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <PartnerSlides/>
      <BgPattern/>
      <AboutHome/>
    </div>
  )
}

export default Home