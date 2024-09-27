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
      <span class="center">Dossier1</span>
      <div id="article-list">
        <div class="select">/DOC : [article1-1]</div>
        <div class="select">/DOC : [article1-2]</div>
        <div class="select">/DOC : [article1-3]</div>
        <div class="select">/DOC : [article1-4]</div>
        <div class="select">/DOC : [article1-5]</div>
        <div class="select">/DOC : [article1-6]</div>
        <div class="select">/DOC : [article1-7]</div>
      </div>
      <div id="article-display" style="display: none;">
        <div id="game" class="center">
          <canvas id="board"></canvas>
        </div>
        <div id="article-box" style="display: none; width: 1000px">
          <h2 id="article-title"></h2>
          <p id="article-content"></p>
        </div>
      </div>

    </div>
    <!-- <div id="input-area">
      <span id="prompt">> </span>
      <input type="text" id="command-input" autofocus>
    </div> -->
    <div id="timer"></div>
  </div>

  <script src="assets/js/script.js"></script>
  <script src="assets/js/changeCharacters.js"></script>
  <script src="assets/js/articles.js"></script>
  <script src="assets/js/snake.js"></script>
  <script src="assets/js/barreChargement.js"></script>
</body>

</html>
