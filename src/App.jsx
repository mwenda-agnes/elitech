import React from 'react';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () =>  {
  return (
   <div>
<Header />
<Nav />
<About />
<Experience />
<Services />
<Testimonials />
<Portfolio />
<Contact />
<Footer  />
   </div>
  )
}
export default App
