// src/pages/ContactPage.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      });
    }, 2000);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contacto</h2>
          <p>Estamos aquí para ayudarte. Contáctanos para cualquier consulta sobre repuestos o servicios.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Dirección</h3>
                <p>Av. Principal #123, Ciudad</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Teléfono</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>info@respuestostenorio.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Horario</h3>
                <p>Lun-Vie: 8:00 AM - 7:00 PM<br/>Sáb: 9:00 AM - 5:00 PM<br/>Dom: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="mensaje"
                  placeholder="Mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;