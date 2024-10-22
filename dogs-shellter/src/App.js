import React, { useState, useEffect } from 'react';
import FiltroMascotas from './components/FiltroMascotas';
import ListaMascotas from './components/ListaMascotas';
import SolicitudAdopcion from './components/SolicitudAdopcion';
import './App.css';

const App = () => {
  const [filtros, setFiltros] = useState({});
  const [mascotas, setMascotas] = useState([
    // Simular una lista de mascotas
    { id: 1, nombre: 'Max', tipo: 'perro', estado: 'saludable', edad: 'adulto', sexo: 'macho', foto: 'max.jpg', descripcion: 'Perro muy amigable' },
    { id: 2, nombre: 'Luna', tipo: 'gato', estado: 'especial', edad: 'cachorro', sexo: 'hembra', foto: 'luna.jpg', descripcion: 'Gatita juguetona' },
    { id: 3, nombre: 'Rocky', tipo: 'perro', estado: 'saludable', edad: 'cachorro', sexo: 'macho', foto: 'rocky.jpg', descripcion: 'Cachorro enérgico' },
    { id: 4, nombre: 'Bella', tipo: 'perro', estado: 'enfermo', edad: 'adulto', sexo: 'hembra', foto: 'bella.jpg', descripcion: 'Perra tranquila y cariñosa' },
    { id: 5, nombre: 'Simba', tipo: 'gato', estado: 'saludable', edad: 'adulto', sexo: 'macho', foto: 'simba.jpg', descripcion: 'Gato independiente y curioso' },
    { id: 6, nombre: 'Chloe', tipo: 'gato', estado: 'especial', edad: 'adulto', sexo: 'hembra', foto: 'chloe.jpg', descripcion: 'Gatita con necesidades especiales' },
    { id: 7, nombre: 'Rex', tipo: 'perro', estado: 'saludable', edad: 'adulto', sexo: 'macho', foto: 'rex.jpg', descripcion: 'Perro fiel y protector' },
    { id: 8, nombre: 'Milo', tipo: 'gato', estado: 'saludable', edad: 'cachorro', sexo: 'macho', foto: 'milo.jpg', descripcion: 'Gatito juguetón y activo' },
    { id: 9, nombre: 'Sasha', tipo: 'perro', estado: 'especial', edad: 'adulto', sexo: 'hembra', foto: 'sasha.jpg', descripcion: 'Perra cariñosa con necesidades especiales' },
    { id: 10, nombre: 'Oliver', tipo: 'gato', estado: 'saludable', edad: 'adulto', sexo: 'macho', foto: 'oliver.jpg', descripcion: 'Gato amistoso y curioso' },
    { id: 11, nombre: 'Daisy', tipo: 'perro', estado: 'enfermo', edad: 'adulto', sexo: 'hembra', foto: 'daisy.jpg', descripcion: 'Perra en recuperación, necesita cuidado' },
    { id: 12, nombre: 'Toby', tipo: 'gato', estado: 'saludable', edad: 'cachorro', sexo: 'macho', foto: 'toby.jpg', descripcion: 'Gatito curioso y lleno de energía' },
    { id: 13, nombre: 'Bailey', tipo: 'perro', estado: 'saludable', edad: 'adulto', sexo: 'macho', foto: 'bailey.jpg', descripcion: 'Perro amigable y juguetón' },
    { id: 14, nombre: 'Mia', tipo: 'gato', estado: 'especial', edad: 'cachorro', sexo: 'hembra', foto: 'mia.jpg', descripcion: 'Gatita con cuidados especiales' },
    { id: 15, nombre: 'Buddy', tipo: 'perro', estado: 'saludable', edad: 'cachorro', sexo: 'macho', foto: 'buddy.jpg', descripcion: 'Cachorro juguetón y enérgico' },
    { id: 16, nombre: 'Lola', tipo: 'gato', estado: 'saludable', edad: 'adulto', sexo: 'hembra', foto: 'lola.jpg', descripcion: 'Gata amorosa y tranquila' },
    { id: 17, nombre: 'Charlie', tipo: 'perro', estado: 'enfermo', edad: 'adulto', sexo: 'macho', foto: 'charlie.jpg', descripcion: 'Perro mayor en recuperación' },
    { id: 18, nombre: 'Nala', tipo: 'gato', estado: 'saludable', edad: 'cachorro', sexo: 'hembra', foto: 'nala.jpg', descripcion: 'Gatita curiosa y juguetona' },
    { id: 19, nombre: 'Zeus', tipo: 'perro', estado: 'saludable', edad: 'adulto', sexo: 'macho', foto: 'zeus.jpg', descripcion: 'Perro fuerte y protector' },
    { id: 20, nombre: 'Cleo', tipo: 'gato', estado: 'especial', edad: 'adulto', sexo: 'hembra', foto: 'cleo.jpg', descripcion: 'Gata con necesidades especiales, muy cariñosa' }
    // Más mascotas...
  ]);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  const handleFilterChange = (newFilters) => {
    setFiltros(newFilters);
  };

  const handleSelectMascota = (mascota) => {
    setMascotaSeleccionada(mascota);
  };

  const handleSubmit = (formData) => {
    console.log('Solicitud enviada:', formData);
    // Aquí enviarás los datos a la fundación (puedes hacer una llamada a la API)
  };

  return (
    <div className="adopcion-app">
      <FiltroMascotas onFilterChange={handleFilterChange} />
      <ListaMascotas
        mascotas={mascotas}
        filtros={filtros}  // Pasamos los filtros aquí
        onSelectMascota={handleSelectMascota}
      />
      <SolicitudAdopcion
        mascotaSeleccionada={mascotaSeleccionada}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;

