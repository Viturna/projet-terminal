let answer = false;
let image = "../assets/img/morpion1.png"; // Chemin par défaut

// Fonction pour envoyer la commande au serveur et traiter la réponse
function sendCommand(command) {
    // Vérifie si la commande correspond à la clé actuelle
    if (command.trim() === currentKey) {
        answer = true; // Passe answer à true
        console.log("Commande correcte, answer est maintenant : " + answer);
        checkAnswer(); // Appelle la fonction pour vérifier et afficher l'article
    }
}

function checkAnswer() {
    if (answer === true) {
        document.getElementById("game").style.display = "none";      
        document.getElementById("article-box").style.display = "block";
    }
}

// Exemple d'appel pour la commande 'rond' via l'input
document.getElementById("command-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = event.target.value;
        sendCommand(command); // Envoie la commande entrée
        event.target.value = ''; // Réinitialise l'input après l'envoi de la commande
    }
});
