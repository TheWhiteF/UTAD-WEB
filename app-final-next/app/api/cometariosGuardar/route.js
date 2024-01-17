export async function PUT(request) {
    const data = await request.json();
    try {
      const filePath = 'data/comercios.txt';
      let users = [];
  
      try {
        const existingData = readFileSync(filePath, 'utf-8');
        users = existingData.split('||\n').filter(Boolean);
      } catch (error) {
        // El archivo no existe o no puede ser leído, se maneja según sea necesario
      }
  
      // Verifica si el usuario ya existe en la lista
      const userIndex = users.findIndex((user) => user.includes(data.CIF));
  
      if (userIndex !== -1) {
        // Actualiza los datos del usuario
        users[userIndex] = `${data.CIF}||\n${JSON.stringify(data)} ||\n`;
      }
  
      // Guarda los datos actualizados en el archivo
      writeFileSync(filePath, users.join('||\n'));
  
      return NextResponse.json({ message: 'Guardando datos...', status: 200 });
    } catch (e) {
      return NextResponse.json({ message: 'Error al guardar datos...', status: 500 });
    }
  }