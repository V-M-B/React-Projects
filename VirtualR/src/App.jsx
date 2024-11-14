
import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'

export default function App(props) {
  

  return (
    <>
      <Navbar/>
      <div className="max-7-xl mx-auto pt-20 px6">
      <HeroSection/>
      </div>
    </>
  )
}
