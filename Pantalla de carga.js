function loadMainContent() {
    return new Promise((resolve) => {
      // Simulamos una carga de contenido
      setTimeout(() => {
        const mainContent = `
          <div class="content">
            <h1>¡Bienvenido!</h1>
            <p>Has llegado a la página principal.</p>
          </div>
          <nav class="main-menu">
                <ul>
                    <li><a href="Función Asíncrona.html">Función Asíncrona</a></li>
                    <li><a href="Función Autoejecutable.html">Función Autoejecutable</a></li>
                    <li><a href="Funcion Callback.html">Funcion Callback</a></li>
                    <li><a href="Calendario.html">Calendario</a></li>
                    <li><a href="Función de Orden Superior.html">Función de Orden Superior</a></li>
                </ul>
            </nav>
            <na class="main-menu">
                <ul>
                    <li><a href="Función Declarada.html">Función Declarada</a></li>
                    <li><a href="Función Expresiva.html">Función Expresiva</a></li>
                    <li><a href="Función Generadora.html">Función Generadora</a></li>
                    <li><a href="Función Flecha.html">Función Flecha</a></li>
                </ul>
        `;
        resolve(mainContent);
      }, 3000); // Simula 3 segundos de carga
    });
  }
  
  async function initializeApp() {
    const loadingElement = document.querySelector('.loading-container');
    const mainElement = document.querySelector('#main-content');
  
    try {
      const content = await loadMainContent();
      loadingElement.style.opacity = '0';
      setTimeout(() => {
        loadingElement.style.display = 'none';
        mainElement.innerHTML = content;
        mainElement.style.opacity = '1';
      }, 500); // Espera a que termine la transición de opacidad
    } catch (error) {
      console.error('Error al cargar el contenido:', error);
    }
  }
  
  // Iniciar la aplicación cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', initializeApp);
  
  