function createLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    
    const loader = document.createElement('div');
    loader.className = 'loader';
    
    const loadingText = document.createElement('p');
    loadingText.textContent = 'Cargando...';
    
    loadingScreen.appendChild(loader);
    loadingScreen.appendChild(loadingText);
    
    document.body.appendChild(loadingScreen);
    
    return loadingScreen;
}

function removeLoadingScreen(loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
        loadingScreen.remove();
    }, 500); // Dar tiempo para la transición antes de remover el elemento
}

document.addEventListener('DOMContentLoaded', async () => {
    const loadingScreen = createLoadingScreen();
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'none';

    // Simular un tiempo de carga
    await new Promise(resolve => setTimeout(resolve, 2000));

    mainContent.style.display = 'block';
    removeLoadingScreen(loadingScreen);
});

const button = document.getElementById('showMessage');
const messageElement = document.getElementById('message');

async function nombre() {
    button.disabled = true;
    button.textContent = 'Cargando...';
    messageElement.style.opacity = '0';
    messageElement.textContent = '';
    
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        messageElement.textContent = '¡Esta es una función asíncrona!';
        messageElement.style.opacity = '1';
    } catch (error) {
        messageElement.textContent = 'Ocurrió un error';
        messageElement.style.opacity = '1';
    } finally {
        button.disabled = false;
        button.textContent = 'Mostrar Mensaje Dinámico';
    }
}

