import React from 'react';
import './InfoCard.css'

const InfoCard = ({ imageSrc, imageAlt, children }) => {
  return (
    <div className="info-card">
      <img src={imageSrc} alt={imageAlt} />
      <span>
        {children}
      </span>
    </div>
  );
};

export default InfoCard;