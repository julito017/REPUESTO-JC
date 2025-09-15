// src/components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>RESPUESTOS TENORIO</h3>
            <p>MERCEDES JULIO CESAR - Tu tienda de confianza para repuestos de autos de alta calidad con servicio profesional.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/carrito">Carrito</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Horario de Atención</h3>
            <ul>
              <li>Lunes a Viernes: 8:00 AM - 7:00 PM</li>
              <li>Sábados: 9:00 AM - 5:00 PM</li>
              <li>Domingos: 10:00 AM - 2:00 PM</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contacto</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Av. Principal #123, Ciudad</li>
              <li><i className="fas fa-phone"></i> (123) 456-7890</li>
              <li><i className="fas fa-envelope"></i> info@respuestostenorio.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-legal">
          <div className="legal-links">
            <a href="#">Libro de Reclamaciones</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Derecho de Reserva</a>
            <a href="#">Términos y Condiciones</a>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 RESPUESTOS TENORIO MERCEDES JULIO CESAR - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;