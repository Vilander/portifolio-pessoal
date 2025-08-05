import React from 'react';
import { Carousel } from 'react-bootstrap';

// items: um array de objetos { image, alt, link? }
const Carrossel = ({ items, id }) => {
  return (
    <Carousel id={id} ride="carousel" interval={3000}>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.alt}
              />
            </a>
          ) : (
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.alt}
            />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrossel;