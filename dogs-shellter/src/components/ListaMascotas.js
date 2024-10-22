import React from 'react';

const ListaMascotas = ({ mascotas, onSelectMascota, filtros }) => {
  // Filtrar mascotas en función de los filtros proporcionados
  const mascotasFiltradas = mascotas.filter((mascota) => {
    const { tipo, estado, edad, sexo } = filtros;

    // Verificar si los filtros aplicados coinciden con los datos de la mascota
    const coincideTipo = tipo ? mascota.tipo === tipo : true;
    const coincideEstado = estado ? mascota.estado === estado : true;
    const coincideEdad = edad ? mascota.edad === edad : true;
    const coincideSexo = sexo ? mascota.sexo === sexo : true;

    // Solo se devuelven aquellas mascotas que coincidan con todos los filtros
    return coincideTipo && coincideEstado && coincideEdad && coincideSexo;
  });

  return (
    <div className="mascotas-list">
      {mascotasFiltradas.length > 0 ? (
        mascotasFiltradas.map((mascota) => (
          <div
            key={mascota.id}
            className="mascota-item"
            onClick={() => onSelectMascota(mascota)}
          >
           
            <h3>{mascota.nombre}</h3>
            <p>{mascota.descripcion}</p>
          </div>
        ))
      ) : (
        <p>No hay mascotas disponibles según los filtros seleccionados.</p>
      )}
    </div>
  );
};

export default ListaMascotas;

