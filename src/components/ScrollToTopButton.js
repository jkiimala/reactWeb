import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Käytetään FontAwesome ikonia, asenna tarvittaessa

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        cursor: 'pointer',
        display: visible ? 'block' : 'none',
        backgroundColor: 'rgb(7 89 133)',
        color: '#fff',
        padding: '10px',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
      }}
    >
      <FaArrowUp size={20} />
    </div>
  );
};

export default ScrollToTopButton;
