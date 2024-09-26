const outputDiv = document.getElementById('changeCharacters');
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !?"; // Tous les caractères possibles
let currentText = ""; // Chaîne de texte initialisée vide

// Fonction pour générer une chaîne aléatoire
function generateRandomText(length, lines) {
  let text = "";
  for (let j = 0; j < lines; j++) {
    let line = "";
    for (let i = 0; i < length; i++) {
      line += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    text += line + "\n"; // Ajouter un saut de ligne pour chaque ligne générée
  }
  return text;
}

// Fonction pour initialiser la génération de texte
function initText() {
  const length = parseInt(outputDiv.getAttribute('data-length')) || 20; // Récupère la longueur depuis l'attribut data-length
  const lines = parseInt(outputDiv.getAttribute('data-lines')) || 1;    // Récupère le nombre de lignes depuis l'attribut data-lines

  currentText = generateRandomText(length, lines); // Génère le texte avec les paramètres de longueur et de lignes
  outputDiv.textContent = currentText; // Met à jour l'affichage initial
}

// Fonction pour modifier aléatoirement une partie des caractères
function changeCharacters() {
  let newText = "";
  for (let i = 0; i < currentText.length; i++) {
    if (Math.random() < 0.3 && currentText[i] !== "\n") { // Ne change pas les sauts de ligne
      newText += characters.charAt(Math.floor(Math.random() * characters.length)); // Remplace par un caractère aléatoire
    } else {
      newText += currentText[i]; // Garde le caractère d'origine
    }
  }
  currentText = newText;
  outputDiv.textContent = currentText; // Met à jour le texte affiché
}

// Initialise la génération au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  initText(); // Initialise le texte au chargement
  setInterval(changeCharacters, 50); // Lance l'intervalle de modification des caractères
});
