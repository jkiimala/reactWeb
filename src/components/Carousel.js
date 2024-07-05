import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../custom-bootstrap.scss'; // Import custom Bootstrap SCSS
import codeImage from '../images/code.jpg';
import codeImage2 from '../images/code2.jpg';
import codeImage3 from '../images/code3.jpg';

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-item-wrapper bg-sky-800">
          <img
            className="d-block w-100"
            src={codeImage}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className="carousel-item-wrapper bg-sky-800">
          <img
            className="d-block w-100"
            src={codeImage2}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-item-wrapper bg-sky-800">
          <img
            className="d-block w-100"
            src={codeImage3}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
