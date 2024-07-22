document.addEventListener('keydown', (event) => {
    const key = event.key;
    const keyCode = event.keyCode;
  
    const keyElement = document.querySelector('.key p');
    const keyCodeElement = document.getElementById('key-code');
  
    keyElement.textContent = `Key Pressed: ${key}`;
    keyCodeElement.textContent = keyCode;
  });