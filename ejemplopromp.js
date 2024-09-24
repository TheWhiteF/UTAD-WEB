function calcularArea() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificación de números negativos
    if (base <= 0 || altura <= 0) {
        alert('No se permiten números negativos o 0 en la base o la altura.');
        return;
    }
    
    if (isNaN(base) || isNaN(altura) || base === 0 || altura === 0) {
        document.getElementById('resultado').placeholder = 'Ingresa valores válidos';
        return;
    }

    const area = (base * altura) / 2;
    document.getElementById('resultado').value = area.toFixed(2);
}

function borrar(){
 // Limpiar los valores de los campos
 document.getElementById('base').value = '';
 document.getElementById('altura').value = '';
 document.getElementById('resultado').value = '';

 // Restaurar los placeholders originales
 document.getElementById('base').placeholder = 'Ingresa la base';
 document.getElementById('altura').placeholder = 'Ingresa la altura';
 document.getElementById('resultado').placeholder = 'El área aparecerá aquí';
}
