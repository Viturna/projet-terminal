<?php

session_start();

// Initialiser le répertoire de travail si non défini
if (!isset($_SESSION['current_path'])) {
  $_SESSION['current_path'] = getcwd(); // Définit le répertoire actuel comme le point de départ
}

// Initialiser l'historique des chemins si non défini
if (!isset($_SESSION['path_history'])) {
  $_SESSION['path_history'] = []; // Historique des répertoires
}


$current_path = $_SESSION['current_path'];

// Fonction pour gérer les commandes
function handleCommand($command)
{
  global $current_path;
  $command_parts = explode(' ', $command);
  $main_command = $command_parts[0];

  switch ($main_command) {
    case 'ls': // Commande pour lister les fichiers/dossiers
      $files = scandir($current_path);
      return implode("\n", array_diff($files, ['.', '..'])); // Filtre les dossiers "." et ".."

    case 'cd': // Commande pour changer de répertoire ou rediriger vers une page
      if (isset($command_parts[1])) {
        $target = $command_parts[1];

        // Vérifie si la cible est une page existante
        if (file_exists($target . '.php')) {
          return json_encode(['redirect' => $target . '.php']); // Retourne une réponse JSON avec la redirection
        }

        // Gérer le changement de répertoire
        $new_path = realpath($current_path . DIRECTORY_SEPARATOR . $target);
        if ($new_path && is_dir($new_path) && strpos($new_path, getcwd()) === 0) {
          $_SESSION['current_path'] = $new_path;
          $current_path = $new_path;
          return "Répertoire changé : " . $new_path;
        } else {
          return "Répertoire ou page non trouvée.";
        }
      } else {
        return "Usage : cd [nom_du_dossier ou nom_de_la_page]";
      }

    case 'back': // Commande pour revenir à la page précédente
      if (count($_SESSION['path_history']) > 0) {
        $_SESSION['current_path'] = array_pop($_SESSION['path_history']);
        $current_path = $_SESSION['current_path'];
        return "Retour au répertoire précédent : " . $current_path;
      } else {
        return "Pas d'historique pour revenir en arrière.";
      }

    case 'exit':
      return json_encode(['action' => 'reload']);

    case 'pwd': // Commande pour afficher le répertoire actuel
      return $current_path;

    case 'help': // Commande pour afficher les commandes disponibles
      return "Commandes disponibles : ls, cd, pwd, echo, back, help";

    case 'home': // Commande pour rediriger vers index.php
      return json_encode(['redirect' => 'index.php']);

    case 'dinnerbone': // Commande pour inverser l'affichage
      return json_encode(['message' => 'L\'affichage a été inversé!', 'action' => 'toggleDinnerbone']);

    case 'dinnerborne': // Commande pour inverser l'affichage
      return json_encode(['message' => '!', 'action' => 'toggleDinnerborne']);

    default:
      return "Commande non reconnue.";
  }
}

// Gestion de la requête AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $command = $_POST['command'] ?? '';
  $output = handleCommand(trim($command));
  echo $output; // Renvoie la sortie de la commande
}
