
window.addEventListener("keydown", function(event) {
    const keyPressed = event.keyCode;
    const audio = document.querySelector(`audio[data-key='${keyPressed}']`);
    const key = document.querySelector(`div[data-key='${keyPressed}']`);
  
    if (key) {
      key.classList.add("playing");
      // remove class after transition
      key.addEventListener("transitionend", function(event) {
        key.classList.remove("playing");
      });
    }
  
    if (!audio) return;
    audio.currentTime = 0; // rewind to the start
    audio.play();
  });
  