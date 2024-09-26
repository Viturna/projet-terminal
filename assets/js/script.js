// script.js
document.getElementById('command-input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const command = this.value.trim(); // Récupère la commande saisie par l'utilisateur
    if (command.length > 0) {
      displayCommand(command); // Affiche la commande dans la zone de sortie
      sendCommand(command); // Envoie la commande au serveur
    }
    this.value = ''; // Réinitialise l'entrée de texte
  }
});

// Fonction pour envoyer la commande au serveur
function sendCommand(command) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'server.php', true); // Envoie une requête POST à server.php
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = xhr.responseText.trim(); // Récupère la réponse
      try {
        const jsonResponse = JSON.parse(response); // Tente d'analyser la réponse JSON
        if (jsonResponse.redirect) {
          window.location.href = jsonResponse.redirect; // Redirige si une redirection est fournie
        } else if (jsonResponse.action === 'history.back') {
          history.back();
        } else if (jsonResponse.action === 'toggleDinnerbone') {
          toggleDinnerboneEffect();
          updateTerminal(jsonResponse.message);
        } else if (jsonResponse.action === 'toggleDinnerborne') {
          toggleDinnerborneEffect();
          updateTerminal(jsonResponse.message);
        } else if (jsonResponse.action === 'reload') {
          window.location.reload();
        } else {
          updateTerminal(jsonResponse); // Met à jour le terminal avec la sortie
        }
      } catch (e) {
        updateTerminal(response); // Met à jour le terminal avec la sortie
      }
    }
  };

  xhr.send('command=' + encodeURIComponent(command)); // Envoie la commande
}

// Fonction pour afficher la commande dans le terminal
function displayCommand(command) {
  const outputDiv = document.getElementById('output');
  // const articleDisplay = document.getElementById('article-display');

  // if (articleDisplay.style.display === 'block') {
  //   return;
  // }

  outputDiv.innerHTML += `<div><span>> </span>${command}</div>`;
  outputDiv.scrollTop = outputDiv.scrollHeight;
}


// Fonction pour mettre à jour le terminal avec la sortie
function updateTerminal(output) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML += `<div>${output}</div>`;
  outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Inverser l'affichage (Dinnerbone)
function toggleDinnerboneEffect() {
  const terminalDiv = document.getElementById('terminal');
  terminalDiv.classList.toggle('reverse');
}

function toggleDinnerborneEffect() {
  const terminalDiv = document.getElementById('terminal');
  terminalDiv.classList.toggle('reverse');
}
