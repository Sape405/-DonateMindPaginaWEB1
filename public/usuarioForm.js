document.getElementById('usuarioForm').addEventListener('submit', function(e){
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const numero = document.getElementById('numero').value;
    const edad = document.getElementById('edad').value;
    const fechaRegistro = document.getElementById('fechaRegistro').value;

    db.collection('Usuarios').add({
        nombre: nombre,
        correo: correo,
        numero: numero,
        edad: parseInt(edad),
        fechaRegistro: fechaRegistro
    })
    .then(() => {
        alert('Usuario registrado correctamente');
        document.getElementById('usuarioForm').reset();
    })
    .catch(error => {
        console.error('Error al registrar usuario:', error);
    });
});
