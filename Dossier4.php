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
      <span class="center">Dossier4</span>
      <div id="article-list">
        <div class="select">/DOC : [article4-1]</div>
        <div class="select">/DOC : [article4-2]</div>
        <div class="select">/DOC : [article4-3]</div>
        <div class="select">/DOC : [article4-4]</div>
        <div class="select">/DOC : [article4-5]</div>
        <div class="select">/DOC : [article4-6]</div>
        <div class="select">/DOC : [article4-7]</div>
      </div>
      <div id="article-display" style="display: none;">
        <div id="game" class="center">
          <p>Pour découvrir le contenu de cet article à toi de trouver le mot gagnant !</p>
          <img id="keyword-image" src="" alt="photo de morpion" style="height : 400px;">
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
  <script src="assets/js/articles.js"></script>
  <script src="assets/js/keyword.js"></script>
  <script src="assets/js/barreChargement.js"></script>
</body>

</html>
