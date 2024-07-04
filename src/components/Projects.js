import React from 'react';
import profileImage from '../images/pirate.webp'; // Tuodaan kuva
import profileImage2 from '../images/beer.webp'; // Tuodaan kuva
import profileImage3 from '../images/pig.webp'; // Tuodaan kuva
import profileImage4 from '../images/worms.webp'; // Tuodaan kuva
import profileImage5 from '../images/captain.webp'; // Tuodaan kuva

const Projects = () => {
  return (
    <section className="projects">
      
      <h2 className="text-3xl font-extrabold sm:text-5xl mt-32 mb-10 text-center">My JavaScript Games.</h2>

      <div className="grid grid-cols-4 gap-10 mb-10">
  <div><a href="https://jkiimala.github.io/captainJackpot/" target="_blank">
  <img
                    src={profileImage}
                    alt="Profile"
                    className="size-32 rounded-full object-cover shadow-lg"
                  /></a></div>
                  
  <div><a href="https://jkiimala.github.io/beerClicker/" target="_blank">
  <img
                    src={profileImage2}
                    alt="Profile"
                    className="size-32 rounded-full object-cover shadow-lg"
                  /></a></div>
  <div><a href="https://jkiimala.github.io/sikanoppa/" target="_blank">
  <img
                    src={profileImage3}
                    alt="Profile"
                    className="size-32 rounded-full object-cover shadow-lg"
                  /></a></div>
  <div><a href="https://jkiimala.github.io/spaceWorms/" target="_blank">
  <img
                    src={profileImage4}
                    alt="Profile"
                    className="size-32 rounded-full object-cover shadow-lg"
                  /></a></div>

</div>

      <p className="text-gray-700 text-center mb-5"></p>

      <a href="https://jkiimala.github.io/captainJackpot/" target="_blank" className="relative mb-10 block rounded-tr-3xl border border-green-600">
  <span
    className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-red-600 px-6 py-4 font-medium uppercase tracking-widest text-white"
  >
    THIS WAY TO THE TREASURE!
  </span>

  <img
    src={profileImage5}
    alt="Profile"
    className="h-80 w-full rounded-tr-3xl object-contain"
  />

  <div className="p-4 text-center">
    <strong className="text-xl font-medium text-gray-900"> Dead Men Tell No Tails </strong>

    <p className="mt-2 text-pretty text-gray-700">
      Captain Jackpot is a simple pirate style JavaScript Slot Machine. Do not lose all your money playing it!
    </p>

    <span
      className="mt-4 mb-10 block rounded-md border border-green-600 bg-green-600 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900"
    >
      Play Captain Jackpot
    </span>
  </div>
</a>
      
    </section>
  );
};

export default Projects;