// TODO: React to a click on the button!
let btn = document.querySelector("button")

let audio = new Audio('sound.mp3');


btn.addEventListener("click", (event) => {
  btn.classList.add("disabled");
  btn.innerText = "Bingo!";
  audio.play();
});
