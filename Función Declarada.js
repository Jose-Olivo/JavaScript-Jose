// Función declarada
function nombre() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = "¡Hola desde una función declarada!";
    outputElement.style.display = 'block';
}

// Event listener para el botón
document.getElementById('showMessage').addEventListener('click', nombre);

// Función para ocultar la pantalla de carga
function ocultarPantallaCarga() {
    const pantallaCarga = document.querySelector('.pantalla-carga');
    pantallaCarga.classList.add('oculta');
}

// Esperar a que se cargue el contenido
window.addEventListener('load', function() {
    // Simular un tiempo de carga
    setTimeout(ocultarPantallaCarga, 2000);
});

// Función declarada
function nombre() {
    const outputElement = document.getElementById('output');
    outputElement.textContent = "¡Hola desde una función declarada!";
    outputElement.style.display = 'block';
}

// Event listener para el botón
document.getElementById('showMessage').addEventListener('click', nombre);
