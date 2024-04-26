import React from 'react'

import Hero from './Hero/Hero'
import Feature from './Section2/Section2'
import Section3 from "./Section3/Section3"
import Newsletter from './Newsletter/Newsletter'
import Section4 from "./Section4/Section4"
import Section5 from "./Section5/Section5"

const Home = () => {
  return (
    <div>
       <Hero/>
      <Feature/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
  
}

export default Home;