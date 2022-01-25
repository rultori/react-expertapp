import React from 'react';

export const GiftGridItem = ({ title, url}) => {
   
  return (
    <div className="card animate__animated animate__flip animate__repeat-2">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
