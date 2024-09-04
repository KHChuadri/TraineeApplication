let changeMicIcon = function(icon) {
  if (icon.classList.contains("fa-microphone")) {
      icon.classList.remove("fa-microphone");
      icon.classList.add("fa-microphone-slash");
  } else {
      icon.classList.remove("fa-microphone-slash");
      icon.classList.add("fa-microphone");
  }
}

let changeHeadphoneIcon = function(icon) {
  if (icon.classList.contains("fa-headphones")) {
      icon.classList.remove("fa-headphones");
      icon.classList.add("fa-ear-deaf");
  } else {
      icon.classList.remove("fa-ear-deaf");
      icon.classList.add("fa-headphones");
  }
}

let enteredVoice = function() {
  const container = document.getElementById("userContainer");

  if (container.querySelector('div')) {
    return; // Exit the function without adding a new div
  }

  const newDiv = document.createElement('div');
  newDiv.style.display = "flex";
  newDiv.style.alignItems = "center";

  // Create an image element
  const newImage = document.createElement('img');
  newImage.src = 'assets/IU.jpeg';
  newImage.alt = 'Placeholder Image';
  newImage.style.marginRight = "10px";
  newImage.style.width = "1.5em";
  newImage.style.height = "1.5em";
  newImage.style.borderRadius = "100%"

  const newText = document.createElement('p');
  newText.innerHTML = "Kurniawan";
  newText.style.color = "white";
  newText.style.fontSize = "12px";

  newDiv.appendChild(newImage);
  newDiv.appendChild(newText);

  container.appendChild(newDiv);
}

let quitVoice = function() {
  const container = document.getElementById("userContainer");

  if (!container) {
    return;
  }

  if (container.hasChildNodes()) {
    container.innerHTML = '';
  }
}
