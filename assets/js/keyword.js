// Variables pour stocker l'article sélectionné et les éléments HTML
let selectedArticleData = null;
const commandInput = document.getElementById("command-input");
const articleBox = document.getElementById("article-box");
const articleTitle = document.getElementById("article-title");
const articleContent = document.getElementById("article-content");
const messageBox = document.getElementById("message");

// Créer un élément pour afficher "keyword-display"
const keywordDisplay = document.createElement("div");
keywordDisplay.id = "keyword-display";
keywordDisplay.style.marginTop = "10px";
keywordDisplay.style.padding = "10px";
keywordDisplay.style.backgroundColor = "#f9f9f9"; // Ajoutez un peu de style pour le rendre plus visible
keywordDisplay.style.border = "1px solid #ddd";
keywordDisplay.style.borderRadius = "5px";
articleBox.appendChild(keywordDisplay); // Ajouter "keyword-display" à la boîte de l'article

// Fonction pour charger et afficher l'article avec "keyword-display"
function loadArticle(fileName) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'articles/' + fileName, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const article = JSON.parse(xhr.responseText);

      // Stocker les données de l'article sélectionné
      selectedArticleData = article;

      // Mettre à jour les informations de l'article dans l'interface
      articleTitle.textContent = `Veuillez entrer le mot-clé pour : ${article.title}`;
      articleContent.textContent = ""; // Effacer le contenu initial
      articleBox.style.display = "block";
      messageBox.style.display = "none"; // Cacher le message d'erreur

      // Afficher "keyword-display" s'il est présent dans l'article JSON
      if (article["keyword-display"]) {
        keywordDisplay.textContent = `Indice du mot-clé : ${article["keyword-display"]}`;
        keywordDisplay.style.display = "block";
      } else {
        keywordDisplay.style.display = "none"; // Masquer s'il n'existe pas
      }

      // Réinitialiser le champ d'entrée
      commandInput.value = "";
      commandInput.focus(); // Mettre le focus sur l'input
    } else if (xhr.readyState === 4) {
      articleTitle.textContent = "Erreur";
      articleContent.textContent = "Impossible de charger l'article.";
      keywordDisplay.style.display = "none"; // Masquer "keyword-display" en cas d'erreur
    }
  };

  xhr.send();
}

// Écouteur d'événements pour l'input de commande
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
    // Afficher l'article si le mot-clé est correct
    articleTitle.textContent = selectedArticleData.title;
    articleContent.textContent = selectedArticleData.content;
    messageBox.style.display = "none"; // Cacher le message d'erreur
    keywordDisplay.style.display = "none"; // Cacher l'indice une fois que le mot-clé est correct
  } else {
    // Afficher un message d'erreur si le mot-clé est incorrect
    messageBox.style.display = "block";
    messageBox.textContent = "Mot incorrect. Veuillez réessayer.";
  }
}

// Fonction pour initialiser les articles disponibles et gérer leur sélection
function initializeArticles() {
  document.querySelectorAll(".select").forEach(item => {
    item.addEventListener("click", () => {
      // Récupérer le nom de l'article sélectionné à partir de l'élément cliqué
      const selectedArticleId = item.textContent.trim().split("[")[1].replace("]", "").toLowerCase();

      // Charger l'article correspondant
      loadArticle(selectedArticleId + '.json'); // Appelle la fonction avec le nom du fichier JSON
    });
  });
}

// Initialiser l'affichage des articles au démarrage
initializeArticles();
