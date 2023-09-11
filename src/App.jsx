import React from 'react'
import Header       from  '../src/components/Header'
import Nav          from  '../src/components/Nav'
import About        from  '../src/components/About'
import Services     from  './components/Services'
import Contact      from  '../src/components/Contact'
import Portfolio    from  '../src/components/Portfolio'

import Experience   from  '../src/components/Experience'
import Testimonials from  '../src/components/Testimonials'
import Footer       from  '../src/components/Footer' 

const App = () => {
  return (
    <>
      <Header /> 
    <Nav /> 
     <About />   
    <Experience />
    <Services />
     <Portfolio />     
     <Testimonials />
    <Contact />   
    <Footer/> 



    </>
  )
}

export default App