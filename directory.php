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
    <div id="output">
    <img class="logo-bg" src="/assets/img/logo_Onu.svg" alt="">
      <span class="center">Répertoire</span>
      <?php
      $folders = $_SESSION['folders'] ?? [];

      // Afficher uniquement les dossiers 1 à 7
      for ($i = 1; $i <= 7; $i++) {
        $folderName = $folders[$i] ?? "Dossier$i";
        echo "<p class='folder' id='folder$i'>/DOC:[$folderName]</p>";
      }
      ?>
      <!-- Dossier 8 qui ne sera pas modifiable -->
      <p class="folder" id="folder8">/DOC:[Rename]</p>
    </div>

    <!-- <div id="input-area">
        <span id="prompt">> </span>
        <input type="text" id="command-input" autofocus>
    </div> -->
    <div id="timer"></div>
  </div>

  <script src="assets/js/naviguation.js"></script>
  <script src="assets/js/renameFolders.js"></script>
</body>

</html>
