document.getElementById('citaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const nombre = document.getElementById('nombre').value; 
    const fechaCita = document.getElementById('fechaCita').value; 
    document.getElementById('mensaje').textContent = `Hola  ${nombre}! tu cita fue agendada correctamente para el dia: ${fechaCita}.`;
    document.getElementById('mensaje').style.display = 'block';
    this.reset(); 
});
