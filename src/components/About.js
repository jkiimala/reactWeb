import React from 'react';
import Image1 from '../images/ab1.webp';
import Image2 from '../images/ab2.webp';
import Image3 from '../images/ab3.webp';
import Image4 from '../images/ab4.webp';

const About = () => {
  return (
    <section className="about py-6 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
        <img
          src={Image1}
          alt="Profile"
          className="h-72 w-full object-cover shadow-lg border-2 border-cyan-500 transform transition duration-500 hover:scale-110"
        />
        <img
          src={Image2}
          alt="Profile"
          className="h-72 w-full object-cover shadow-lg border-2 border-cyan-500 transform transition duration-500 hover:scale-110"
        />
        <img
          src={Image3}
          alt="Profile"
          className="h-72 w-full object-cover shadow-lg border-2 border-cyan-500 transform transition duration-500 hover:scale-110"
        />
        <img
          src={Image4}
          alt="Profile"
          className="h-72 w-full object-cover shadow-lg border-2 border-cyan-500 transform transition duration-500 hover:scale-110"
        />
      </div>

      <section className="py-5 flex items-center justify-center">
  <div className="max-w-screen-xl px-4 py-4 flex flex-col lg:flex-row items-center justify-center">
    <div className="max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900">
        React & Tailwind CSS
        <strong className="font-extrabold text-cyan-800 sm:block mb-8 mt-4"> Website.</strong>
      </h1>

      <p className="mt-4 sm:text-xl tracking-tighter mb-8 text-gray-700 text-left">
        Experienced web designer & front-end developer with 10+ years in cross-functional remote projects e.g. 
        (e-commerce, productization, marketing research, networking, web design/development). Operational efficiency, sustainability 
        and corporate responsibility in mind.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full lg:w-auto rounded bg-black px-12 py-3 text-sm font-medium text-white shadow-md hover:bg-cyan-600 hover:scale-90"
          href="#skills"
        >
          Get Started
        </a>

        <a
          className="block w-full lg:w-auto bg-cyan-600 rounded px-12 py-3 text-sm font-bold text-white shadow-md hover:text-white hover:bg-black hover:scale-90 active:text-white"
          href="#projects"
        >
          Projects
        </a>
      </div>
    </div>
  </div>
</section>


    </section>
  );
};

export default About;

