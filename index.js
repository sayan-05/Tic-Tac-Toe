let restart = document.querySelector("#replay");
let squares = document.querySelectorAll("td");
function clearboard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}
restart.addEventListener("click", clearboard);

function render() {
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", render);
}
