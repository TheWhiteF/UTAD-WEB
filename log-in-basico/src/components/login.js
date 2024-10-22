// Login.js
import React, { useState, useEffect } from "react";
import Mensaje from "./mensaje";

function Login() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [usuarios, setUsuarios] = useState([]);
  
    // Obtener los usuarios desde la API
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsuarios(data))
        .catch((error) => console.error("Error al obtener los usuarios:", error));
    }, []);
  
    const manejarCambioEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const manejarCambioUsername = (e) => {
      setUsername(e.target.value);
    };
  
    const manejarLogin = (e) => {
      e.preventDefault();
  
      // Buscar si el usuario existe con el email introducido
      const usuario = usuarios.find((user) => user.email === email);
  
      if (usuario) {
        // Verificar si el username coincide con el nombre de usuario del usuario
        if (usuario.username === username) {
          setMensaje(`Bienvenido, ${usuario.username}!`);
        } else {
          setMensaje("Error: Username incorrecto.");
        }
      } else {
        setMensaje("Error: Email no encontrado.");
      }
    };
  
    return (
      <div>
        <form onSubmit={manejarLogin}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={manejarCambioEmail}
            />
          </div>
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={manejarCambioUsername}
            />
          </div>
          <button type="submit">Iniciar sesión</button>
        </form>
        {/* Renderizado condicional del mensaje */}
        {mensaje && <Mensaje mensaje={mensaje} />}
      </div>
    );
  }
  
  export default Login;
