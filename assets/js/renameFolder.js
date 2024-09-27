// Initialisation des noms de dossiers dans localStorage s'ils n'existent pas encore
function initializeFolders() {
  for (let i = 1; i <= 7; i++) {
    if (!localStorage.getItem(`folder${i}`)) {
      localStorage.setItem(`folder${i}`, `Dossier${i}`);
    }
  }
}

// Mise à jour de l'affichage des dossiers à partir de localStorage
function updateFolderDisplay() {
  for (let i = 1; i <= 7; i++) {
    const folderElement = document.getElementById(`folder${i}`);
    const folderName = localStorage.getItem(`folder${i}`);
    if (folderElement && folderName) {
      folderElement.textContent = `/DOC:[${folderName}]`;
    }
  }
}

// Fonction de renommage de dossier
function renameFolder(folderNumber, newName) {
  if (folderNumber < 1 || folderNumber > 7) {
    alert("Numéro de dossier invalide. Veuillez entrer un numéro entre 1 et 7.");
    return;
  }

  // Mettre à jour le localStorage
  localStorage.setItem(`folder${folderNumber}`, newName);
  updateFolderDisplay();

  // Envoyer la commande au serveur
  sendRenameCommand(folderNumber, newName);
}

// Fonction pour envoyer la commande de renommage au serveur
function sendRenameCommand(folderNumber, newName) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'server.php', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = xhr.responseText.trim();
      // Vous pouvez gérer la réponse du serveur ici si nécessaire
      console.log(response);
    }
  };

  // Envoie la commande de renommage au serveur
  xhr.send(`command=rename ${folderNumber} ${encodeURIComponent(newName)}`);
}

// Gestion de la commande
document.getElementById('command-input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const command = this.value.trim();
    const commandParts = command.split(' ');

    if (commandParts[0] === 'rename' && commandParts.length === 3) {
      const folderNumber = parseInt(commandParts[1], 10);
      const newName = commandParts[2];

      if (!isNaN(folderNumber) && newName.length > 0) {
        renameFolder(folderNumber, newName);
      } else {
        alert('Commande invalide. Utilisez : rename (numéro du dossier) (nouveau nom)');
      }
    } else {
      alert('Commande non reconnue.');
    }

    this.value = '';
  }
});

document.addEventListener('DOMContentLoaded', function () {
  initializeFolders();
  updateFolderDisplay();
});
