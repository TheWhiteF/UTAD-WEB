import React, { useState } from 'react';

const Comentario = ({ usuario }) => {
  const [formData, setFormData] = useState({
    resenas: usuario.resenas,
    CIF: usuario.CIF
  });

  let debounceTimeout;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Cancelar el timeout anterior si existe
    clearTimeout(debounceTimeout);

    // Establecer un nuevo timeout
    debounceTimeout = setTimeout(() => {
      setFormData({
        ...formData,
        [name]: formData[name] + '||' + value,
      });
    }, 1000); // Esperar 1000 milisegundos (ajusta este valor según tus necesidades)
  };

  const handleModificarInformacion = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/modComercio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log("cambio de info correcta")
      } else {
        console.error('Error al actualizar la información.');
      }
    } catch (error) {
      console.error("Error en la solicitud de actualización", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleModificarInformacion} className="mt-5 max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <div className="mb-4">
          <label htmlFor="resenas" className="block text-gray-700 font-semibold">Comentario:</label>
          <input
            type="text"
            id="resenas"
            name="resenas"
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Subir comentario
        </button>
      </form>
    </div>
  );
};

export default Comentario;