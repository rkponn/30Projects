window.addEventListener('keydown', (event) => {
  const eventKey = `[data-key='${event.keyCode}']`;
  const audio = document.querySelector(`audio${eventKey}`);
  const key = document.querySelector(`div${eventKey}`);

  key.classList.add('playing');
  key.addEventListener('transitionend', (event) => {
    key.classList.remove('playing');
  });
  audio.currentTime = 0;
  audio.play();
});
