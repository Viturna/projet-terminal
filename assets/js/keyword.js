// Variables pour stocker l'article sélectionné et les éléments HTML
let selectedArticleData = null;
const commandInput = document.getElementById("command-input");
const articleBox = document.getElementById("article-box");
const articleTitle = document.getElementById("article-title");
const articleContent = document.getElementById("article-content");
const messageBox = document.getElementById("message");

// Écouteur d'événements pour le champ de commande
commandInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkKeyword();
  }
});

// Fonction pour vérifier le mot-clé
function checkKeyword() {
  if (!selectedArticleData) return; // S'assurer qu'un article est chargé

  const userInput = commandInput.value.trim().toLowerCase();

  // Vérifier si l'entrée correspond au mot-clé de l'article chargé
  if (userInput === selectedArticleData.keyword.toLowerCase()) {
    articleTitle.textContent = selectedArticleData.title;
    articleContent.textContent = selectedArticleData.content;
    messageBox.style.display = "none"; // Cacher le message d'erreur
  } else {
    messageBox.style.display = "block";
  }
}
