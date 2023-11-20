function registrarEquipo() {
    // Implementa la lógica para registrar la información del equipo y mostrarla en la página.
    var registrosDiv = document.getElementById('registros');
    var serial = document.getElementById('serial').value;
    var modelo = document.getElementById('modelo').value;
    var marca = document.getElementById('marca').value;
    var descripcion = document.getElementById('descripcion').value;

    var nuevoRegistro = document.createElement('div');
    nuevoRegistro.innerHTML = '<strong>Serial:</strong> ' + serial +
                              ' | <strong>Modelo:</strong> ' + modelo +
                              ' | <strong>Marca:</strong> ' + marca +
                              ' | <strong>Descripción:</strong> ' + descripcion;
    
    registrosDiv.appendChild(nuevoRegistro);

    // Limpiar los campos después de registrar.
    document.getElementById('serial').value = '';
    document.getElementById('modelo').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('descripcion').value = '';
}

function imprimirRegistros() {
    // Implementa la lógica para imprimir los registros (puedes usar window.print() para imprimir la página).
    window.print();
}