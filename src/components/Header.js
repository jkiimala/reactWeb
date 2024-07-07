import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ bottom: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-sky-800 shadow fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto p-6 flex justify-between items-center">
        <a href="#about" onClick={scrollToTop} className="text-base font-semibold cursor-pointer text-white">
          Front-End Web Developer
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <nav className={`${isOpen ? "block" : "hidden"} md:flex md:items-center`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 ml-auto items-end text-xs uppercase tracking-tight">
            <li>
              <a href="#about" onClick={scrollToTop} className="px-3 py-2 text-white rounded hover:bg-sky-600">
                About Me
              </a>
            </li>
            
            <li>
              <a href="#skills" className="px-3 py-2 text-white rounded hover:bg-sky-600">
                Skills
              </a>
            </li>

            <li>
              <a href="#carousel" className="px-3 py-2 text-white rounded hover:bg-sky-600">
                Photos
              </a>
            </li>
            <li>

              <a href="#projects" className="px-3 py-2 text-white rounded hover:bg-sky-600">
                Games
              </a>
            </li>
            <li>
              <a href="#contact" onClick={scrollToBottom} className="px-3 py-2 text-white rounded hover:bg-sky-600">
                Contact Info
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;










