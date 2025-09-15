// src/pages/Products.js
import React from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { PRODUCTOS } from '../utils/constants';

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Productos</h2>
          <p>Ofrecemos una amplia gama de repuestos de alta calidad para todas las marcas y modelos de vehículos.</p>
        </div>
        <div className="product-grid">
          {PRODUCTOS.map(producto => (
            <ProductCard key={producto.id} product={producto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;