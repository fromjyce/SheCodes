// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

function showTemperature(event) {
  event.preventDefault();
  let monday = document.querySelector("button");
  monday.innerHTML = "18 degrees";
}

let button = document.querySelector("button");
button.addEventListener("click", showTemperature);
