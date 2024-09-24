// Variables pour la navigation
let currentIndex = 0; // Indice de l'élément sélectionné
const folders = document.querySelectorAll('#output .folder'); // Sélectionne tous les dossiers

// Fonction pour mettre à jour la sélection
function updateSelection() {
    folders.forEach((folder, index) => {
        if (index === currentIndex) {
            folder.style.backgroundColor = '#00ff00'; // Change la couleur de fond pour indiquer la sélection
            folder.style.color = '#000'; // Change la couleur du texte pour indiquer la sélection
            folder.style.padding = '10px';
            folder.style.borderRadius = '2px';
        } else {
            folder.style.backgroundColor = 'transparent'; // Réinitialise la couleur de fond
            folder.style.color = '#00ff00'; // Change la couleur du texte pour indiquer la sélection
            folder.style.padding = '10px';
        }
    });
}

// Événement pour gérer la navigation par flèches
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        // Flèche vers le bas
        currentIndex = (currentIndex + 1) % folders.length; // Passe au dossier suivant
        updateSelection();
        event.preventDefault(); // Empêche le défilement de la page
    } else if (event.key === 'ArrowUp') {
        // Flèche vers le haut
        currentIndex = (currentIndex - 1 + folders.length) % folders.length; // Passe au dossier précédent
        updateSelection();
        event.preventDefault(); // Empêche le défilement de la page
    } else if (event.key === 'Enter') {
        // Touche "Entrée"
        const selectedFolder = folders[currentIndex].textContent.trim();
        handleFolderSelection(selectedFolder);
    }
});

// Fonction pour gérer la sélection d'un dossier
function handleFolderSelection(folderName) {
  // Extrait le nom du dossier sans crochets
  const folderWithoutBrackets = folderName.replace(/.*\[(.*?)\].*/, '$1');
  console.log(`Dossier sélectionné : ${folderWithoutBrackets}`); // Affiche le nom du dossier dans la console

  // Redirige vers le fichier PHP correspondant
  window.location.href = `${folderWithoutBrackets}.php`; // Redirection vers dossier.php
}


// Initialiser la sélection visuelle
updateSelection();
