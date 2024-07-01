import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PartnerSlides from '../components/PartnerSlides'
import AboutHome from '../components/AboutHome'
import PatternBg from '../components/PatternBg'
import ObjectivesHome from '../components/ObjectivesHome'
import ServicesHome from '../components/ServicesHome'

const Home = () => {
  return (
    <div>
      <PatternBg/>
      <Navbar/>
      <Hero/>
      <PartnerSlides/>
      <AboutHome/>
      <ObjectivesHome/>
      <ServicesHome/>
    </div>
  )
}

export default Home