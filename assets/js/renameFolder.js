const commandInput = document.getElementById("command-input");
const outputDiv = document.getElementById("output");

// Événement pour gérer l'entrée de commande
commandInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = commandInput.value.trim();
        commandInput.value = '';

        if (command.startsWith("rename ")) {
            const args = command.split(" ");
            if (args.length === 3) {
                const oldName = args[1];
                const newName = args[2];
                renameFolder(oldName, newName);
            } else {
                outputDiv.innerHTML += `<p>[ERROR] Utilisation : rename [ancien_nom] [nouveau_nom]</p>`;
            }
        } else {
            outputDiv.innerHTML += `<p>[ERROR] Commande non reconnue.</p>`;
        }
    }
});

// Fonction pour renommer le dossier
function renameFolder(oldName, newName) {
    fetch('renameFolder.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `oldName=${encodeURIComponent(oldName)}&newName=${encodeURIComponent(newName)}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            outputDiv.innerHTML += `<p>[SUCCESS] Le dossier "${oldName}" a été renommé en "${newName}".</p>`;
            updateFolderDisplay(oldName, newName); // Met à jour l'affichage
        } else {
            outputDiv.innerHTML += `<p>[ERROR] ${data.message}</p>`;
        }
    })
    .catch(error => {
        console.error('Erreur lors de la communication avec le serveur:', error);
    });
}

// Fonction pour mettre à jour l'affichage des dossiers
function updateFolderDisplay(oldName, newName) {
    const folders = document.querySelectorAll('#output .folder');
    folders.forEach(folder => {
        if (folder.textContent.includes(oldName)) {
            folder.textContent = folder.textContent.replace(oldName, newName);
        }
    });
}
