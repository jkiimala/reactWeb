import React from 'react';



const About = () => {
  return (
    <section className="about">

     
     <section className="#bae6fd">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl -mt-10">
        React & Tailwind CSS
        <strong className="font-extrabold text-cyan-700 sm:block mb-8"> Website. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-start tracking-tighter mb-8">
      Experienced web designer & front-end developer with 10+ years in cross-functional remote projects e.g. 
      (e-commerce, productization, marketing research, networking, web design/development). Operational efficiency, sustainability 
      and corporate responsibility in mind.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-cyan-700 px-12 py-3 text-sm font-medium text-white shadow-md
           hover:bg-cyan-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#skills"
        >
          Get Started
        </a>

        <a
          className="block w-full bg-red-600 rounded px-12 py-3 text-sm font-bold text-white shadow-md
           hover:text-white hover:bg-cyan-600 focus:outline-none focus:ring active:text-white sm:w-auto"
          href="#contact"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </section>
  );
};

export default About;
