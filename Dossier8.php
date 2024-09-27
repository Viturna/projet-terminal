<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/css/styles.css">
  <title>Simulateur de Terminal</title>
</head>

<body>
  <div id="terminal">
    <div id="loader">
      <div id="progress-bar-container">
        <div id="progress-bar">0%</div>
      </div>
    </div>

    <div id="output">
    <img class="logo-bg" src="/assets/img/logo_Onu.svg" alt="">
    <span class="center">Répertoire</span>
      <?php
      session_start();
      $folders = $_SESSION['folders'] ?? [];

      // Afficher uniquement les dossiers 1 à 7
      for ($i = 1; $i <= 7; $i++) {
        $folderName = $folders[$i] ?? "Dossier$i";
        echo "<p class='folder' id='folder$i'>/DOC:[$folderName]</p>";
      }
      ?>
    </div>
    <div id="input-area">
      <span id="prompt">> </span>
      <input type="text" id="command-input" autofocus>
    </div>
    <div id="timer"></div>
  </div>

  <script src="assets/js/renameFolder.js"></script>
  <script src="assets/js/barreChargement.js"></script>
</body>

</html>
