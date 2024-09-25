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
    <div id="progress-bar-container">
        <div id="progress-bar">0%</div>
    </div>
    <div id="output">
        Dossier4
        <p class="select">/DOC : [Article1]</p>
        <p class="select">/DOC : [Article2]</p>
        <p class="select">/DOC : [Article3]</p>

        <div id="article-display" style="display: none;">
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
    <script src="assets/js/articles.js"></script>
    <script src="assets/js/barreChargement.js"></script>
</body>
</html>
