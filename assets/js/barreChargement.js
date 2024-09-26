document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const bar = document.getElementById('progress-bar-container');
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;
    let speed = 30; // Vitesse initiale (plus le nombre est grand, plus c'est lent)

    // Fonction pour mettre à jour la barre de progression
    function updateProgressBar() {
        if (progress < 100) {
            progress += 1;
            progressBar.style.width = progress + '%';
            progressBar.textContent = progress + '%';

            // Relance la fonction à la vitesse définie
            setTimeout(updateProgressBar, speed);
        } else {
            loader.style.display = 'none';
            bar.style.display = 'none';
        }
    }

    // Démarrer la barre de chargement au chargement de la page
    updateProgressBar();
});
