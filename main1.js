const gridWidth = 100;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector(".canvas");
  const div = document.createElement("div");
  div.className = "square color-5";
  canvas.appendChild(div);
  count++;
}

//The mousedown event occurs when the left mouse button is pressed down over the selected element.
//The mousedown() method triggers the mousedown event, or attaches a function to run when a mousedown event occurs.
//Tip: This method is often used together with the mouseup() method.
// create a Boolean so that when the mouse is clicked an event will happen. 

let clickMouseDown = false;

/***********
 * QUERIES *
 ***********/
// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)
const brush = document.querySelector(".current-brush").classList;
const eraseButton = document.querySelector(".erase");
const squares = document.querySelectorAll(".square");



/****************************
 * EVENT LISTENER FUNCTIONS *
 ****************************/

// What event function do I think I will need?
// (1) Well we will definetly need to be able to get a color
// (2) that color will need to be able to be painted onto the canvas.
// (3) **The boolean from the mouse click above will need to be within both there functions above plus more.
//

function getColor(element) {
  return element.classList[1];
}

function startPaint(event) {
  const paint = event.target;
  const brush = document.querySelector(".current-brush");
  paint.classList.replace(getColor(paint), getColor(brush));
  clickMouseDown = false;
}
const mousedOverSquare = (event) => {
  if (clickMouseDown) {
    const square = event.target;
    const brush = document.querySelector(".current-brush");
    square.classList.replace(getColor(square), getColor(brush));
  }
};

for (const area of squares) {
  area.addEventListener("mouseenter", mousedOverSquare);
  area.addEventListener("click", startPaint);
}

function switchPaletteColor(event) {
  const brush = document.querySelector(".current-brush");
  brush.classList.replace(getColor(brush), getColor(event.target));
}

const paletteColors = document.querySelectorAll(".palette-color");

for (const palColor of paletteColors) {
  palColor.addEventListener("click", switchPaletteColor);
}

const eraseAll = () => {
  for (const square of squares) {
    square.classList.replace(square.classList[1], "color-5");
  }
};

/**************************
 * WIRING IT ALL TOGETHER *
 **************************/
// Now: wiring up our event listeners to our html node elements.

// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

eraseButton.addEventListener("click", eraseAll);

document.body.addEventListener("mousedown", () => {
  clickMouseDown = true;
});

document.body.addEventListener("mouseup", () => {
  clickMouseDown = false;
});