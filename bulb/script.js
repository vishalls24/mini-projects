const bulb = document.querySelector(".bulb");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const isOn = bulb.classList.toggle("lightup");

  if (isOn) {
    button.textContent = "OFF";
  } else {
    button.textContent = "ON";
  }
});
