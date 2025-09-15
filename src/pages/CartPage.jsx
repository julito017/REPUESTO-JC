import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN'
    }).format(price);
  };

  const calculateTotals = () => {
    const subtotal = getCartTotal();
    const envio = subtotal > 100 ? 0 : 15;
    const descuento = subtotal > 200 ? 20 : (subtotal > 100 ? 10 : 0);
    const total = subtotal + envio - descuento;

    return { subtotal, envio, descuento, total };
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    // Simular proceso de pago
    setTimeout(() => {
      setIsProcessing(false);
      alert('¡Compra realizada con éxito! Gracias por tu compra.');
    }, 2000);
  };

  const { subtotal, envio, descuento, total } = calculateTotals();

  if (cartItems.length === 0) {
    return (
      <section className="cart">
        <div className="container">
          <div className="section-title">
            <h2>Carrito de Compras</h2>
            <p>Revisa y gestiona los productos que has seleccionado</p>
          </div>
          <div className="empty-cart">
            <i className="fas fa-shopping-cart"></i>
            <h3>Tu carrito está vacío</h3>
            <p>Agrega algunos productos para comenzar</p>
            <Link to="/productos" className="btn">Ver Productos</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <div className="container">
        <div className="section-title">
          <h2>Carrito de Compras</h2>
          <p>Revisa y gestiona los productos que has seleccionado</p>
        </div>
        
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item" data-id={item.id}>
                <div className="cart-item-img">
                  <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="cart-item-info">
                  <h3>{item.nombre}</h3>
                  <p>{item.descripcion}</p>
                  <span className="price">{formatPrice(item.precio)} c/u</span>
                </div>
                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, item.cantidad - 1)}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input 
                    type="number" 
                    value={item.cantidad} 
                    min="1" 
                    className="quantity-input"
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                  />
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(item.id, item.cantidad + 1)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="cart-item-total">
                  <span>{formatPrice(item.precio * item.cantidad)}</span>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-card">
              <h3>Resumen de Compra</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="summary-row">
                  <span>Envío</span>
                  <span>{envio === 0 ? 'Gratis' : formatPrice(envio)}</span>
                </div>
                <div className="summary-row">
                  <span>Descuento</span>
                  <span>{descuento === 0 ? formatPrice(0) : `-${formatPrice(descuento)}`}</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <button 
                className="btn checkout-btn" 
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Procesando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-credit-card"></i> Proceder al Pago
                  </>
                )}
              </button>
              <div className="continue-shopping">
                <Link to="/productos">
                  <i className="fas fa-arrow-left"></i> Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;