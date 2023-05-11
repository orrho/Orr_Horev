const button = document.getElementById('flip-button');
let rotation = 0;

function flipButton() {
  rotation = rotation + 90;
  if (rotation === 360) {
    button.classList = 'rotate-360';
  } else {
    button.classList = `rotate-${rotation % 360}`;
  }
  button.style.transform = `rotate(${rotation}deg)`;
}

button.addEventListener('click', flipButton);