const outputDiv = document.getElementById('changeCharacters');
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !?"; // Tous les caractères possibles
let currentText = ""; // Chaîne de texte initialisée vide

// Génère une chaîne de texte aléatoire de longueur 20
function generateRandomText(length) {
  let text = "";
  for (let i = 0; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return text;
}

// Initialise currentText avec une chaîne aléatoire
currentText = generateRandomText(20); // Par exemple, une chaîne de 20 caractères

function changeCharacters() {
  let newText = "";
  for (let i = 0; i < currentText.length; i++) {
    if (Math.random() < 0.3) { // Change environ 30% des caractères
      newText += characters.charAt(Math.floor(Math.random() * characters.length)); // Remplace par un caractère aléatoire
    } else {
      newText += currentText[i]; // Garde le caractère d'origine
    }
  }
  currentText = newText;
  outputDiv.textContent = currentText; // Met à jour le texte affiché
}

// Change les caractères toutes les 100 millisecondes
setInterval(changeCharacters, 50);
