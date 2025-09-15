// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="container">
          <div className="hero-content">
            <h2>Los mejores repuestos para tu vehículo</h2>
            <p>Calidad garantizada, precios competitivos y entrega rápida. Todo lo que necesitas para mantener tu auto en perfecto estado.</p>
            <Link to="/productos" className="btn">Ver Productos</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;