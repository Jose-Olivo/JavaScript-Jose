// Función para mostrar el contenido principal
function showMainContent() {
    document.getElementById('initialLoadingScreen').classList.add('hide');
    document.getElementById('mainContent').style.display = 'block';
}

// Simular un tiempo de carga
window.addEventListener('load', function() {
    setTimeout(showMainContent, 2000); // Muestra el contenido principal después de 2 segundos
});

function procesarDatos(callback) {
    const nombre = document.getElementById('nameInput').value || 'Invitado';
    // Ya no mostramos la pantalla de carga aquí
    setTimeout(() => {
        callback(nombre);
    }, 1000);
}

function mostrarMensaje(nombre) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = `Hola ${nombre}, bienvenido.`;
    messageElement.classList.add('show-message');
    
    setTimeout(() => {
        messageElement.classList.remove('show-message');
    }, 3000);
}


