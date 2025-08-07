import React from 'react';
import './Carrossel.css';

const Carrossel = ({ items, id }) => {
  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {items.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  className="d-block w-100"
                  alt={item.alt || `Slide ${index + 1}`}
                />
              </a>
            ) : (
              <img
                src={item.image}
                className="d-block w-100"
                alt={item.alt || `Slide ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default Carrossel;
