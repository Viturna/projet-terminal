// Variables pour la navigation
let currentIndex = 0; // Indice de l'élément sélectionné
const selects = document.querySelectorAll('#output .select'); // Sélectionne tous les dossiers

// Fonction pour mettre à jour la sélection
function updateSelection() {
  selects.forEach((select, index) => {
    if (index === currentIndex) {
      select.style.backgroundColor = '#00ff00'; // Change la couleur de fond pour indiquer la sélection
      select.style.color = '#000'; // Change la couleur du texte pour indiquer la sélection
      select.style.padding = '10px';
      select.style.borderRadius = '2px';
    } else {
      select.style.backgroundColor = 'transparent'; // Réinitialise la couleur de fond
      select.style.color = '#00ff00'; // Change la couleur du texte pour indiquer la sélection
      select.style.padding = '10px';
    }
  });
}

// Événement pour gérer la navigation par flèches
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowDown') {
    currentIndex = (currentIndex + 1) % selects.length;
    updateSelection();
    event.preventDefault();
  } else if (event.key === 'ArrowUp') {
    currentIndex = (currentIndex - 1 + selects.length) % selects.length;
    updateSelection();
    event.preventDefault();
  } else if (event.key === 'Enter') {
    const selectedselect = selects[currentIndex].textContent.trim();
    handleselectSelection(selectedselect);
  }
});

// Fonction pour gérer la sélection d'un dossier
function handleselectSelection(selectName) {
  // Extrait le nom du dossier sans crochets
  const selectWithoutBrackets = selectName.replace(/.*\[(.*?)\].*/, '$1');
  console.log(`Dossier sélectionné : ${selectWithoutBrackets}`); // Affiche le nom du dossier dans la console

  // Charge l'article JSON correspondant au dossier sélectionné
  loadArticle(selectWithoutBrackets + '.json'); // Appelle la fonction loadArticle avec le nom du fichier JSON
}

// Fonction pour charger et afficher l'article
function loadArticle(fileName) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'articles/' + fileName, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const article = JSON.parse(xhr.responseText);

      // Mettre à jour le titre et le contenu de l'article
      document.getElementById('article-title').textContent = article.title;
      document.getElementById('article-content').textContent = article.content;

      //Difficulté snaaaake
      if (article.difficulty) {
        difficulty = article.difficulty; // Met à jour la difficulté de Snake
      }
      // Afficher la div de l'article
      document.getElementById('article-display').style.display = 'block';

      document.getElementById('article-list').style.display = 'none';

      document.getElementById('input-area').style.display = 'flex';

      startSnakeGame();
    } else if (xhr.readyState === 4) {
      document.getElementById('article-title').textContent = "Erreur";
      document.getElementById('article-content').textContent = "Impossible de charger l'article.";
    }
  };

  xhr.send();
}

// Initialiser la sélection visuelle
updateSelection();
