let keyboard = document.getElementById("keyboard");
let screen = document.getElementById("presenceNum");
let x = "";
let y = "";
let count = "";
let op = null;
let currentOp = false;
let currentO;

function number(value) {
  if (!currentOp) {
    x = x + value;
    screen.innerHTML = x;
  } else {
    y = y + value;
    screen.innerHTML = y;
  }
}

function operator(value) {
  currentOp = true;

  if (value === "=") {
    currentOp = false;

    if (op === "+") {
      count = parseInt(x, 10) + parseInt(y, 10);
      screen.innerHTML = count;
    } else if (op === "-") {
      count = parseInt(x, 10) - parseInt(y, 10);
      screen.innerHTML = count;
    } else if (op === "*") {
      count = parseInt(x, 10) * parseInt(y, 10);
      screen.innerHTML = count;
    } else if (op === "÷") {
      count = parseInt(x, 10) / parseInt(y, 10);
      screen.innerHTML = count;
    }
  } else {
    op = value;
    if (x === "") {
      x = "0";
    }
  }
}

function CE() {
  op = "";
  currentOp = false;
  x = "";
  y = "";
  screen.innerHTML = "";
}

keyboard.addEventListener("click", (e) => {
  if (e.target.getAttribute("data-type") === "number") {
    number(e.target.innerHTML.trim());
  } else if (e.target.getAttribute("data-type") === "operator") {
    operator(e.target.innerHTML.trim());
  } else if (e.target.getAttribute("data-type") === "CE") {
    CE();
  }
});
