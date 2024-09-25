document.addEventListener('DOMContentLoaded', function () {
    const inputAera = document.getElementById('input-area');
    const bar = document.getElementById('progress-bar-container');
    const progressBar = document.getElementById('progress-bar');
    const output = document.getElementById('output'); // Récupère le div output
    output.style.display = 'none';
    inputAera.style.display = 'none';

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
            // Une fois la barre remplie à 100%, afficher le contenu de output
            inputAera.style.display = 'flex';
            output.style.display = 'block'; // Affiche le contenu du div output
            bar.style.display = 'none'; 
        }
    }

    // Démarrer la barre de chargement au chargement de la page
    updateProgressBar();
});