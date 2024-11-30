document.addEventListener('DOMContentLoaded', () => {
    const loadingContainer = document.querySelector('.loading-container');
    const mainContent = document.getElementById('main-content');
    const progressBar = document.querySelector('.progress-bar');
    const menuItems = document.querySelectorAll('.main-menu li');

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(showMainContent, 1000);
        }
        progressBar.style.width = `${progress}%`;
    }, 200);

    function animateMenu() {
        menuItems.forEach((item, index) => {
            item.style.animationDelay = `${0.1 * (index + 1)}s`;
        });
    }

    function showMainContent() {
        loadingContainer.style.opacity = '0';
        setTimeout(() => {
            loadingContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 50);
        }, 1000);
    }

    animateMenu();
});

