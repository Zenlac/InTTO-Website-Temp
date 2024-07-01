import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PartnerSlides from '../components/PartnerSlides'
import AboutHome from '../components/AboutHome'
import PatternBg from '../components/PatternBg'

const Home = () => {
  return (
    <div>
      <PatternBg/>
      <Navbar/>
      <Hero/>
      <PartnerSlides/>
      <AboutHome/>
    </div>
  )
}

export default Home