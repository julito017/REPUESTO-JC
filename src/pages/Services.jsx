// src/pages/Services.js
import React from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import { SERVICIOS } from "../utils/constants";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>Además de repuestos, ofrecemos servicios especializados para el mantenimiento de tu vehículo.</p>
        </div>
        <div className="service-grid">
          {SERVICIOS.map((servicio, index) => (
            <ServiceCard key={index} servicio={servicio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;