import { NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';

export async function PUT(request) {
  const data = await request.json();
  try {
    const users = JSON.parse(readFileSync('data/comercios.txt'));

    // Verifica si el usuario ya existe en la lista
    const userIndex = users.findIndex((user) => user.CIF === data.CIF);

    if (userIndex !== -1) {
      // Actualiza los datos del usuario
      users[userIndex] = { ...users[userIndex], ...data };
    }

    // Guarda los datos actualizados en el archivo
    writeFileSync('data/comercios.txt', JSON.stringify(users, null, 2));

    return NextResponse.json({ message: 'Guardando datos...', status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Error al guardar datos...', status: 500 });
  }
}