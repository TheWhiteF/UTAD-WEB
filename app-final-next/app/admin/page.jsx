"use client"
// Importaciones...
import React, { useState, useEffect } from 'react';
import RegistroComercios from '@/components/registroComercios';

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

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchAddress, setSearchAddress] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
      setFilteredUsers(usersData); // Inicializar los usuarios filtrados con todos los usuarios
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    const confirmed = window.confirm("¿Estás seguro de que quieres eliminar a este usuario?");
    if (confirmed) {
      try {
        await fetch("http://localhost:3000/api/regisComer", {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: userId }), // Enviar el id en un objeto
        });
        // Actualizar la lista después de la eliminación
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers); // Actualizar también la lista filtrada
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
      }
    }
  };

  // Filtrar la lista de usuarios según los campos de búsqueda
  useEffect(() => {
    const updatedFilteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchName.toLowerCase()) &&
      user.address.toLowerCase().includes(searchAddress.toLowerCase())
    );
    setFilteredUsers(updatedFilteredUsers);
  }, [users, searchName, searchAddress]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RegistroComercios />

      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="mr-2"
        />
        <input
          type="text"
          placeholder="Buscar por dirección"
          value={searchAddress}
          onChange={(e) => setSearchAddress(e.target.value)}
        />
      </div>

      <ul>
        <p>Lista de comercios</p>
        {Array.isArray(filteredUsers) && filteredUsers.map((user) => (
          <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md text-back flex justify-between">
            <h5 className="font-bold">{user.name}</h5>
            <button
              onClick={() => handleDeleteUser(user.id)}
              className="ml-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Admin;