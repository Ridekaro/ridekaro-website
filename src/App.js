import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Crousel from './components/crousel';



const App = () => {
  return (
    <div className='bg-site w-full  bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Gallery />
      <Nav />
      <Services />
      <Contact />
      <Crousel/>
      <About />
      <Footer />
    </div>
  );
};

export default App;
