import React, { useState } from 'react';

const SolicitudAdopcion = ({ mascotaSeleccionada, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
    comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="formulario-adopcion">
      {mascotaSeleccionada ? (
        <form onSubmit={handleSubmit}>
          <h2>Adoptar a {mascotaSeleccionada.nombre}</h2>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            placeholder="Dirección"
          />
          <input
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
          />
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            placeholder="Comentarios"
          />
          <button type="submit">Enviar Solicitud</button>
        </form>
      ) : (
        <p>Por favor selecciona una mascota antes de completar la solicitud.</p>
      )}
    </div>
  );
};

export default SolicitudAdopcion;
