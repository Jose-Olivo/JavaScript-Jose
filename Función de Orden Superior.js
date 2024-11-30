document.addEventListener('DOMContentLoaded', () => {
    const pantallaCarga = document.querySelector('.pantalla-carga');

    // Simular un tiempo de carga
    setTimeout(() => {
        pantallaCarga.classList.add('oculta');
    }, 2000);

    const btnMostrarMensaje = document.getElementById('btnMostrarMensaje');
    const btnMostrarOtroMensaje = document.getElementById('btnMostrarOtroMensaje');
    const mensajesContainer = document.getElementById('mensajes');

    const funcionOrdenSuperior = (funcion) => {
        return funcion();
    };

    const mensaje = () => {
        return "Esta es una función de orden superior";
    };

    const otroMensaje = () => {
        return "Las funciones de orden superior pueden recibir o devolver otras funciones";
    };

    const mostrarMensaje = (obtenerMensaje) => {
        const nuevoMensaje = funcionOrdenSuperior(obtenerMensaje);
        const mensajeElement = document.createElement('div');
        mensajeElement.textContent = nuevoMensaje;
        mensajeElement.className = 'mensaje';
        mensajesContainer.appendChild(mensajeElement);

        // Scroll al último mensaje
        mensajesContainer.scrollTop = mensajesContainer.scrollHeight;
    };

    btnMostrarMensaje.addEventListener('click', () => mostrarMensaje(mensaje));
    btnMostrarOtroMensaje.addEventListener('click', () => mostrarMensaje(otroMensaje));

    // Efecto de partículas
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background-color: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: flotar ${Math.random() * 5 + 2}s infinite ease-in-out;
        `;
        container.appendChild(particula);
    }
});

// Animación de partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes flotar {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px); }
    }
`;
document.head.appendChild(style);

