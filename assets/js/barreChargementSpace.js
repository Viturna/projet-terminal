document.addEventListener('DOMContentLoaded', function () {
  const progressBar = document.getElementById('progress-bar');
  let progress = 0;
  let speed = 1500; // Vitesse initiale (plus le nombre est grand, plus c'est lent)

  // Fonction pour mettre à jour la barre de progression
  function updateProgressBar() {
    if (progress < 100) {
      // Accélérer la barre de progression quand l'utilisateur appuie sur "espace"
      document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
          progress += 10; // Réduit la vitesse pour accélérer la barre
        }
      });
      progress += 1;
      progressBar.style.width = progress + '%';
      progressBar.textContent = progress + '%';

      // Relance la fonction à la vitesse définie
      setTimeout(updateProgressBar, speed);
    } else {


    }
  }

  // Démarrer la barre de chargement au chargement de la page
  updateProgressBar();


});
