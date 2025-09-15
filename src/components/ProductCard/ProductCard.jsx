import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Función para formatear el precio en soles peruanos
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN'
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
    // Aquí puedes agregar una notificación si quieres
  };

  return (
    <div className="product-card" data-id={product.id}>
      <div className="product-img">
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div className="product-info">
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <div className="product-price">
          {/* CAMBIA ESTA LÍNEA: */}
          <span className="price">{formatPrice(product.precio)}</span>
          <button className="btn add-to-cart" onClick={handleAddToCart}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;