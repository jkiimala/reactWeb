import React from 'react';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this line is included
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from "./components/Skills";
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <section id="about" className="min-h-screen bg-gray-100 p-8">
          <About />
        </section>

        
        <section id="skills" className="min-h-screen bg-gray-100 p-8">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen bg-white p-8">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen bg-gray-100 p-8">
          <Contact />
        </section>
      </main>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
