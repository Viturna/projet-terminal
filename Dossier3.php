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
      <span class="center">Dossier3</span>
      <div id="article-list">
        <div class="select">/DOC : [article3-1]</div>
        <div class="select">/DOC : [article3-2]</div>
        <div class="select">/DOC : [article3-3]</div>
        <div class="select">/DOC : [article3-4]</div>
        <div class="select">/DOC : [article3-5]</div>
        <div class="select">/DOC : [article3-6]</div>
        <div class="select">/DOC : [article3-7]</div>
      </div>
      <div id="article-display" style="display: none;">
        <div id="game" class="center">
          <p>Pour découvrir le contenu de cet article à toi de trouver la clé !</p>
          <img id="keyword-image" src="" alt="image en ascii" style="height : 400px;">
        </div>
        <div id="article-box" style="display: none;">
          <h2 id="article-title"></h2>
          <p id="article-content"></p>
        </div>
      </div>
    </div>
    <div id="input-area">
        <span id="prompt">> </span>
        <input type="text" id="command-input" autofocus>
    </div>
    <div id="timer"></div>
    </div>

    <script src="assets/js/script.js"></script>
    <script src="assets/js/barreChargementSpace.js"></script>
    <script src="assets/js/keyword.js"></script>
    <script src="assets/js/articles.js"></script>
</body>
</html>
