// Your code here
let dodger = document.getElementById(`dodger`);

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  } else if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
});



function moveDodgerLeft() {
dodger.style.left - 1;

}

function moveDodgerRight() {

}
