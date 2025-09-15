// src/components/Header/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <i className="fas fa-car"></i>
            <div>
              <h1>RESPUESTOS TENORIO</h1>
              <span>MERCEDES JULIO CESAR</span>
            </div>
          </Link>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><Link to="/" className={isActive('/')}>Inicio</Link></li>
              <li><Link to="/productos" className={isActive('/productos')}>Productos</Link></li>
              <li><Link to="/servicios" className={isActive('/servicios')}>Servicios</Link></li>
              <li>
                <Link to="/carrito" className={`cart-icon ${isActive('/carrito')}`}>
                  <i className="fas fa-shopping-cart"></i>
                  <span className="cart-count">{getTotalItems()}</span>
                </Link>
              </li>
              <li><Link to="/contacto" className={isActive('/contacto')}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;