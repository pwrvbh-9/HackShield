import React from 'react'
import Navbar from './components/Navbar'
import LandingSection from './components/LandingSection'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <LandingSection />
      </div>
      <Services />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App