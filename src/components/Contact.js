import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../images/man.webp'; // Tuodaan kuva

const reviews = [
  {
    id: 1,
    name: "Lemmy Kilmister",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    rating: 5,
  },
  {
    id: 2,
    name: "Elvis Presley",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jimi Hendrix",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    rating: 5,
  },
];

const stars = (rating) => {
  return Array.from({ length: rating }, (_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  ));
};

const Contact = () => {
  return (
    <div className="contact">
      
      <section className="#bae6fd">
      
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl -mt-96">
            Contact info & trusted reviews from my customers.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {reviews.map((review) => (
              <blockquote key={review.id} className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-4">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="size-32 rounded-full object-cover"
                  />

                  <div>
                    <div className="flex justify-center gap-0.5 text-green-500">
                      {stars(review.rating)}
                    </div>
                    <p className="mt-0.5 text-lg font-medium text-gray-900">{review.name}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-700">{review.review}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>


      <h2 className="text-3 font-bold mb-3 cursor-pointer text-center"><a href="https://jkiimala.github.io" target="_blank" rel="noopener noreferrer">Portfolio Website | jkiimala.github.io</a></h2>
      
      <p className="text-gray-700 text-center my-3">Social Media Links</p>
      <div className="social-icons text-center space-x-2">
        
        <a href="https://www.linkedin.com/in/jkiimala" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        {/* Lisää muita some-ikoneita tarvittaessa */}
      </div>
      
    </div>
  );
};

export default Contact;