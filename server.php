<?php

session_start();
if (!isset($_SESSION['folders'])) {
  $_SESSION['folders'] = [
    1 => "Dossier1",
    2 => "Dossier2",
    3 => "Dossier3",
    4 => "Dossier4",
    5 => "Dossier5",
    6 => "Dossier6",
    7 => "Dossier7",
  ];
}
// Initialiser le répertoire de travail si non défini
if (!isset($_SESSION['current_path'])) {
  $_SESSION['current_path'] = getcwd(); // Définit le répertoire actuel comme le point de départ
}

// Initialiser l'historique des chemins si non défini
if (!isset($_SESSION['path_history'])) {
  $_SESSION['path_history'] = []; // Historique des répertoires
}

if (!isset($_SESSION['gameStart'])) {
  $_SESSION['gameStart'] = false;
}

$current_path = $_SESSION['current_path'];

// Fonction pour gérer les commandes
function handleCommand($command)
{
  global $current_path;
  $command_parts = explode(' ', $command);
  $main_command = $command_parts[0];

  switch ($main_command) {
    case '/ls': // Commande pour lister les fichiers/dossiers
      $files = scandir($current_path);
      return implode("\n", array_diff($files, ['.', '..'])); // Filtre les dossiers "." et ".."

    case '/cd': // Commande pour changer de répertoire ou rediriger vers une page
      if (isset($command_parts[1])) {
        if (isset($command_parts[1]) && $command_parts[1] === 'directory') { // Vérifie si le dossier est "directory"
          if (!$_SESSION['gameStart']) {
            $_SESSION['gameStart'] = true; // Démarre le jeu
            $_SESSION['start_time'] = microtime(true); // Démarre le chronomètre
          } else {
            return "Le jeu est déjà en cours.";
          }
        }
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

    case '/back': // Commande pour revenir à la page précédente
      if (count($_SESSION['path_history']) > 0) {
        $_SESSION['current_path'] = array_pop($_SESSION['path_history']);
        $current_path = $_SESSION['current_path'];
        return "Retour au répertoire précédent : " . $current_path;
      } else {
        return "Pas d'historique pour revenir en arrière.";
      }

    case '/exit':
      return json_encode(['action' => 'reload']);

    case '/pwd': // Commande pour afficher le répertoire actuel
      return $current_path;

    case '/help': // Commande pour afficher les commandes disponibles
      return "Commandes disponibles : ls, cd, pwd, echo, back, help";

    case '/home': // Commande pour rediriger vers index.php
      return json_encode(['redirect' => 'index.php']);

    case '/dinnerbone': // Commande pour inverser l'affichage
      return json_encode(['message' => 'L\'affichage a été inversé!', 'action' => 'toggleDinnerbone']);

    case '/dinnerborne': // Commande pour inverser l'affichage
      return json_encode(['message' => '!', 'action' => 'toggleDinnerborne']);

    case '/reset': // Commande pour réinitialiser les sessions
      session_unset();
      session_destroy();
      return "Sessions réinitialisées avec succès.";

    case '/rename': // Commande pour renommer un dossier
      if (isset($command_parts[1]) && isset($command_parts[2])) {
        $folderNumber = intval($command_parts[1]);
        $newName = $command_parts[2];

        if ($folderNumber >= 1 && $folderNumber <= 7) {
          $_SESSION['folders'][$folderNumber] = $newName;

          return json_encode(['action' => 'rename', 'folderNumber' => $folderNumber, 'newName' => $newName]);
        } else {
          return "Numéro de dossier invalide. Utilisez un numéro entre 1 et 7.";
        }
      } else {
        return "Usage : rename [numéro_du_dossier] [nouveau_nom]";
      }


    default:
      return "Commande non reconnue.";
  }
}

// Gestion de la requête AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $command = $_POST['command'] ?? '';
  $output = handleCommand(trim($command));
  echo $output;
}
