import React from 'react'

const Skills = () => {
  return (
    <section className="skills">
 
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      
      <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
        ICT Skills.
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-center tracking-tighter">
      Coding & Web Development | Data Science & Analytics | Sales & Marketing | Customer Service & Admin Support | Artificial Intelligence
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-cyan-700 px-12 py-3 text-sm font-medium text-white shadow-md hover:bg-black hover:scale-90 sm:w-auto"
          href="#contact"
        >
          Read Reviews
        </a>

        
      </div>
    </div>
  </div>

    </section>
  );
};

export default Skills;