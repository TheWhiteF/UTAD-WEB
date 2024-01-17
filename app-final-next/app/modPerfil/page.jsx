"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Page() {

    const router = useRouter();
    const emailUser = localStorage.getItem("email");
    const [user, setUser] = useState(null);

    const [formData, setFormData] = useState({
        city: '',
        interest:'',
        email:emailUser
      });

      const handleInputChange = (e) => {
        const { name, value} = e.target;
      
        setFormData({
          ...formData,
          [name]: value, // Actualiza el campo correspondiente en formData
        });
      };

      const handleModificarInformacion = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/api/users', {
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
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/users");
                const data = await res.json();
                const usuarios = data.users;
                const userEncontrado = usuarios.find((users) => users.email === emailUser);

                if (userEncontrado) {
                    setUser(userEncontrado);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [emailUser]);


    const handleDeleteUser = async (userId) => {
        const confirmed = window.confirm("¿Estás seguro de que quieres eliminar a este usuario?");
        if (confirmed) {
          // Continuar con la eliminación
          alert("Eliminando usuario");
          fetch("/api/users", {
                method: "DELETE",
                headers: {
                //Authorization: `Bearer ${tokenJWT}`
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(userId)
            })
        }
      };

    return (
        <>
            {user ? (
                <div>
                    <div className=" mt-5 max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold mb-2">{user.email}</h2>
                            <p className="text-gray-600">Contraseña: {user.password}</p>
                            <p className="text-gray-600">Nombre usuario: {user.name}</p>
                            <p className="text-gray-600">Edad: {user.year}</p>
                            <p className="text-gray-600">Ciudad: {user.city}</p>
                            <p className="text-gray-600">Intereses: {user.interest}</p>
                            <button
                            onClick={() => handleDeleteUser(user)}
                            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                            Dar de baja el comercio
                            </button>

                        </div>
                    </div>

                    <form onSubmit={handleModificarInformacion} className=" mt-5 max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 font-semibold">Ciudad:</label>
                            <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="interest" className="block text-gray-700 font-semibold">Intereses:</label>
                            <input
                            type="text"
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                            Guardar Cambios
                        </button>
                    </form>
                </div>
                
            ) : (
                <p>Usuario no encontrado</p>
            )}
        </>
    );
}