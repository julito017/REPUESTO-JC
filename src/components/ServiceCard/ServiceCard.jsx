// src/components/ServiceCard/ServiceCard.js
import React from 'react';

const ServiceCard = ({ servicio }) => {
  return (
    <div className="service-card">
      <i className={servicio.icono}></i>
      <h3>{servicio.titulo}</h3>
      <p>{servicio.descripcion}</p>
    </div>
  );
};

export default ServiceCard;