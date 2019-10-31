// TODO: write your code here
let player1path = document.querySelectorAll("#player1_race td")
let player2path = document.querySelectorAll("#player2_race td")

let x=0;
let y=0;

document.addEventListener('keyup', function(event) {
   if (event.code == 'KeyP') {

        if (player1path[x].className == "active") {
        player1path[x].classList.remove("active");
        player1path[x+1].classList.add("active");
        x++;
        }
    };


   if (event.code == 'KeyQ') {

        if (player2path[y].className == "active") {
        player2path[y].classList.remove("active");
        player2path[y+1].classList.add("active");
        y++;
        }
    };

    if (x == 11 && x > y) {
    alert("Player 1 Wins!");
    location.reload();
}
    if (y == 11 && x < y) {
    alert("Player 2 Wins!");
    location.reload();
}

  let btn = document.querySelector("button")
  btn.addEventListener("click", (event) => {
  location.reload();
});
 }
);

