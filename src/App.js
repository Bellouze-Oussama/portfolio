import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Pr.js';
import Services from './Sr';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
