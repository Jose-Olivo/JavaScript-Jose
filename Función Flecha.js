document.addEventListener('DOMContentLoaded', () => {
    // elemento de la pantalla de carga
    const pantallaCarga = document.querySelector('.pantalla-carga');

    // ocultar la pantalla de carga
    function ocultarPantallaCarga() {
        pantallaCarga.classList.add('oculta');
    }

    setTimeout(ocultarPantallaCarga, 2000);

    const botonInicio = document.getElementById('botonInicio');
    const salida = document.getElementById('salida');

    // Devuelve un nuevo objeto Promise que se resuelve con el valor dado.ó+
    const funcionFlecha = (mensaje) => {
        return new Promise((resolve) => { //representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
            setTimeout(() => {
                resolve(`¡Esta es una función flecha! ${mensaje}`);
            }, 1000);
        });
    }

    botonInicio.addEventListener('click', async () => {
        botonInicio.disabled = true;
        salida.textContent = "Procesando...";
        salida.classList.add('mostrar');

        try {
            const resultado = await funcionFlecha("Observa su poder y flexibilidad.");
            salida.textContent = resultado;
            salida.style.animation = 'aparecer 0.5s ease-out';
        } catch (error) {
            salida.textContent = "Ocurrió un error: " + error.message;
        } finally {
            botonInicio.disabled = false;
        }
    });

    // Agregar partículas flotantes
    const contenedor = document.querySelector('.contenedor');
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background-color: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: flotar ${Math.random() * 10 + 5}s infinite ease-in-out;
        `;
        contenedor.appendChild(particula);
    }
});

