(function() {
    const codeDisplay = document.getElementById('code-display');
    const runBtn = document.getElementById('run-btn');
    const output = document.getElementById('output');
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    const autoExecutableFunction = (function() {
        const message = "¡Hola! Soy una función autoejecutable.";
        return function() {
            console.log(message);
            return message;
        };
    })();

    /* crea una constante cuyo alcance 
    puede ser global o local para el bloque en el que se declara.*/
    const code = `
(function() {
    const message = "¡Hola! Soy una función autoejecutable.";
    return function() {
        console.log(message);
        return message;
    };
})();`;

    // Función para mostrar el contenido principal
    function showMainContent() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        // Iniciar el efecto de escritura después de mostrar el contenido
        typeWriter();
    }

    // Simular un tiempo de carga
    setTimeout(showMainContent, 2000);

    // Efecto de escritura para el código
    let i = 0;
    function typeWriter() {
        if (i < code.length) {
            codeDisplay.innerHTML += code.charAt(i);
            i++;
            setTimeout(typeWriter, 20);
        }
    }

    runBtn.addEventListener('click', function() {
        const result = autoExecutableFunction();
        output.textContent = '';
        let j = 0;
        function typeOutput() {
            if (j < result.length) {
                output.textContent += result.charAt(j);
                j++;
                setTimeout(typeOutput, 30);
            } else {
                output.innerHTML += '<br><br>La función se ha ejecutado. Revisa también la consola.';
            }
        }
        typeOutput();

        // Efecto de "pulsación" en el botón
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = 'scale(1)', 100);
    });

    // Ejecutar la función cuando se carga la página
    console.log(autoExecutableFunction());
})();

