import './App.css';
import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Pr.js';
import Services from './Sr';
import Footer from './Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App overflow-x-hidden">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
