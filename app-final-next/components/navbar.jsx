import React from 'react';

const navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Logo</div>
        <div className="space-x-4">
          <a href="/admin" className="text-white hover:text-gray-300">Admin</a>
          <a href="/" className="text-white hover:text-gray-300">Login</a>
          <a href="/registrar" className="text-white hover:text-gray-300">Registrarse</a>
          <a href="/Comercios" className="text-white hover:text-gray-300">Comercio</a>
          <a href="/anonimo" className="text-white hover:text-gray-300">Anonimo</a>
        </div>
      </div>
    </nav>
  );
};

export default navbar;