<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/css/styles.css">
  <title>Simulateur de Terminal</title>
  <style>
    #output {
      white-space: pre-wrap;
    }

    #timer {
      margin-top: 20px;
      font-weight: bold;
      font-size: 20px;
    }
  </style>
</head>

<body>
  <div id="terminal">
    <div id="output">
      <img class="logo-bg" src="/assets/img/logo_Onu.svg" alt="">
      <div class="text" id="dynamicText"></div>
      <div id="timer"></div>
    </div>
    <script>
      const text = `
Programme 24 Humanity. Save. Program
Si vous lisez ceci, c’est que vous êtes une espèce extraterrestre.

Ce satellite vient de la Terre, une planète de la Voie lactée, elle-même située dans un groupe de galaxies, lui-même situé dans le superamas de la Vierge.
La Terre se trouve à 27 000 années-lumière du centre galactique, où se trouve un trou noir supermassif appelé Sagittarius A*.

L’âge de la Terre est de 4,54 milliards d'années, par rapport au Big Bang, la création de tout.

Cette sonde a été construite il y a 1 655 777 ans, 7 mois, 24 jours, 6 heures, 34 minutes et 24 secondes.

Ce programme a été créé dans le but de laisser une trace de l’existence humaine, que cette espèce soit éteinte ou non.

Vous trouverez attaché à ce vaisseau les "Plaques Pioneer", rendant notre existence (autant que possible) compréhensible à une espèce extraterrestre, c’est-à-dire vous.

Vous trouverez sur cette interface les 7 piliers fondamentaux de l’humanité.

Que ce message soit découvert ou non, ce programme existe et existera, pour que jamais l’humanité ne soit oubliée.

Entrez /help dans l’invite de commande pour commencer votre exploration.`;

      let index = 0;
      const outputDiv = document.getElementById('output');

      function typeText() {
        if (index < text.length) {
          outputDiv.innerHTML += text.charAt(index);
          index++;
          setTimeout(typeText, 10);
        } else {
          outputDiv.innerHTML += '<br>';
        }
      }

      typeText();
    </script>
    <div id="input-area">
      <span id="prompt">> </span>
      <input type="text" id="command-input" autofocus>
    </div>
    <div id="timer"></div>
  </div>

  <script src="assets/js/script.js"></script>
</body>

</html>
