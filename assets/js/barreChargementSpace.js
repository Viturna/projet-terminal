document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('progress-bar-container');
  const progressBar = document.getElementById('progress-bar');
  let progress = 0;
  let speed = 1200;

  function updateProgressBar() {
    if (progress < 100) {
      progress += 1;
      progressBar.style.width = progress + '%';
      progressBar.textContent = progress + '%';

      setTimeout(updateProgressBar, speed);
    } else {
      loader.style.display = 'none';
      bar.style.display = 'none';
    }
  }
  document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
      progress += 10;
    }
  });
  updateProgressBar();
});
