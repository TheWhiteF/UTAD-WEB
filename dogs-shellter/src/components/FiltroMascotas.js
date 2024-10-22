import React, { useState } from 'react';

const FiltroMascotas = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    tipo: '',
    estado: '',
    edad: '',
    sexo: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="filtro-container">
      <select name="tipo" value={filters.tipo} onChange={handleFilterChange}>
        <option value="">Tipo de Mascota</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
      </select>
      <select name="estado" value={filters.estado} onChange={handleFilterChange}>
        <option value="">Estado</option>
        <option value="saludable">Saludable</option>
        <option value="especial">Especial</option>
      </select>
      <select name="edad" value={filters.edad} onChange={handleFilterChange}>
        <option value="">Edad</option>
        <option value="cachorro">Cachorro</option>
        <option value="adulto">Adulto</option>
      </select>
      <select name="sexo" value={filters.sexo} onChange={handleFilterChange}>
        <option value="">Sexo</option>
        <option value="macho">Macho</option>
        <option value="hembra">Hembra</option>
      </select>
    </div>
  );
};

export default FiltroMascotas;

