document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el elemento de la pantalla de carga
    const pantallaCarga = document.querySelector('.pantalla-carga');

    // oculta la pantalla de carga
    function ocultarPantallaCarga() {
        pantallaCarga.classList.add('oculta');
    }

    // tiempo de carga 
    setTimeout(ocultarPantallaCarga, 2000);

    const botonMostrar = document.getElementById('botonMostrar');
    const mensajesDiv = document.getElementById('mensajes');

    function* generadorMensajes() {
        yield "¡Hola! Esta es una función generadora.";
        yield "Puedo pausar y reanudar mi ejecución.";
        yield "Cada vez que me llamas, te doy el siguiente valor.";
        yield "¡Soy muy útil para manejar secuencias!";
        yield "Y ahora...";
        yield "¡He terminado mi funcion Instructora!";
        yield "¡Maria Teresa";
    }

    const generador = generadorMensajes();

    function mostrarSiguienteMensaje() {
        const resultado = generador.next();
        if (!resultado.done) {
            const mensajeElement = document.createElement('div');
            mensajeElement.textContent = resultado.value;
            mensajeElement.className = 'mensaje';
            mensajesDiv.appendChild(mensajeElement);
        } else {
            botonMostrar.disabled = true;
            botonMostrar.textContent = 'Completado';
        }
    }

    botonMostrar.addEventListener('click', mostrarSiguienteMensaje);

    
    const particulas = document.querySelector('.particulas');
    for (let i = 0; i < 50; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.width = `${Math.random() * 10 + 5}px`;
        particula.style.height = particula.style.width;
        particula.style.left = `${Math.random() * 100}%`;
        particula.style.top = `${Math.random() * 100}%`;
        particula.style.animationDelay = `${Math.random() * 15}s`;
        particulas.appendChild(particula);
    }
});

