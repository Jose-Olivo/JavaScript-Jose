document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const output = document.getElementById('output');

    const funcionExpresiva = function() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("¡Esta es una función expresiva!");
            }, 2000);
        });
    }

    startButton.addEventListener('click', async () => {
        startButton.disabled = true;
        output.textContent = "Procesando...";
        output.classList.add('show');

        try {
            const result = await funcionExpresiva();
            output.textContent = result;
            output.style.animation = 'fadeIn 0.5s ease-out';
        } catch (error) {
            output.textContent = "Ocurrió un error: " + error.message;
        } finally {
            startButton.disabled = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const pantallaCarga = document.querySelector('.pantalla-carga');

    // Función para ocultar la pantalla de carga
    function ocultarPantallaCarga() {
        pantallaCarga.classList.add('oculta');
    }

    // Simular un tiempo de carga
    setTimeout(ocultarPantallaCarga, 2000);

    const startButton = document.getElementById('startButton');
    const output = document.getElementById('output');

    const funcionExpresiva = function() {
        return new Promise((resolve) => { //representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.
            setTimeout(() => {
                resolve("¡Esta es una función expresiva!");
            }, 2000);
        });
    }

    startButton.addEventListener('click', async () => {
        startButton.disabled = true;
        output.textContent = "Procesando...";
        output.classList.add('show');

        try {
            const result = await funcionExpresiva();
            output.textContent = result;
            output.style.animation = 'fadeIn 0.5s ease-out';
        } catch (error) {
            output.textContent = "Ocurrió un error: " + error.message;
        } finally {
            startButton.disabled = false;
        }
    });
});
