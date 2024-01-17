"use client"

import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

async function getUsers() {
  try {
    const res = await fetch("http://localhost:3000/api/regisComer");
    if (!res.ok) {
      throw new Error("La respuesta de la red no fue exitosa");
    }
    const data = await res.json();
    console.log(data.users);
    return data.users || [];
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
}

const anonimo = () => {
  const [users, setUsers] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [searchActivity, setSearchActivity] = useState('');
  const [searchName, setSearchName] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
      setFilteredUsers(usersData); // Inicialmente, la lista filtrada es la misma que la lista completa
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterUsers = () => {
      const filtered = users.filter((user) =>
        user.ciudad.toLowerCase().includes(searchCity.toLowerCase()) &&
        user.actividad.toLowerCase().includes(searchActivity.toLowerCase()) &&
        user.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setFilteredUsers(filtered);
    };

    filterUsers();
  }, [searchCity, searchActivity, searchName, users]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-4">
        <label className="text-lg font-bold">Buscar por Ciudad:</label>
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          className="p-2 border rounded"
          placeholder="Ingrese una ciudad"
        />
      </div>

      <div className="mb-4">
        <label className="text-lg font-bold">Buscar por Actividad:</label>
        <input
          type="text"
          value={searchActivity}
          onChange={(e) => setSearchActivity(e.target.value)}
          className="p-2 border rounded"
          placeholder="Ingrese una actividad"
        />
      </div>

      <div className="mb-4">
        <label className="text-lg font-bold">Buscar por Nombre:</label>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="p-2 border rounded"
          placeholder="Ingrese un nombre"
        />
      </div>

      <ul className="flex flex-wrap -mx-4">
        <p className="w-full text-2xl font-bold mb-4">Comercios</p>
        {Array.isArray(filteredUsers) && filteredUsers.map((user) => (
          <li key={uuidv4()} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
            <h5 className="text-xl font-bold mb-2">{user.name}</h5>
            <p className="text-gray-600">{user.ciudad}</p>
            <h5 className="text-lg font-bold mt-4 mb-2">{user.actividad}</h5>
            <p className="text-gray-600">{user.titulo}</p>
            <h5 className="text-lg font-bold mt-4 mb-2">Teléfono: {user.phone}</h5>
            <p className="text-gray-600">{user.resumen}</p>
            <img className="w-full h-32 object-cover rounded mt-4" src={`/images/${user.fotos}.jpg`} alt="NO IMAGENES INTRODUCIDAS" />
            <h5 className="text-lg font-bold mt-4 mb-2">Puntuacion: {user.scoring}</h5>
            <p className="text-gray-600">Comentarios del comercio:{user.resenas}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default anonimo;