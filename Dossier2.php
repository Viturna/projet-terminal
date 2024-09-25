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
      <span class="center">Dossier2</span>
      <div id="article-list">
        <button onclick="loadArticle('article1.json')">Article 1</button>
        <button onclick="loadArticle('article2.json')">Article 2</button>
      </div>
      <div id="article-display">
        <canvas class="game" id="board"></canvas>
        <h2 id="article-title"></h2>
        <p id="article-content"></p>
      </div>

    </div>
    <div id="input-area">
      <span id="prompt">> </span>
      <input type="text" id="command-input" autofocus>
    </div>
    <div id="timer"></div>
  </div>

  <script src="assets/js/script.js"></script>
  <script src="assets/js/snake.js"></script>
</body>

</html>
