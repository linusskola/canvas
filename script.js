
// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
const r = 150; // Cirkelns radie
  c.fillStyle = "yellow";
  c.beginPath();
  // c.arc(x, y, radie, startvinkel, slutvinkel)
  c.rect(900,350,200,250); // En cirkel är en "arc" som går mellan 0 och 2pi
  //c.closePath();
  c.stroke();
}
drawPicture();


function paintCircle() {
  // Gul cirkel
  const r = 150; // Cirkelns radie
  c.fillStyle = "yellow";
  c.beginPath();
  // c.arc(x, y, radie, startvinkel, slutvinkel)
  c.rect(150,350,200,250); // En cirkel är en "arc" som går mellan 0 och 2pi
  //c.closePath();
  c.stroke();
}
paintCircle();

function printtriangle1() {
  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(100, 300);
  context.lineTo(300, 300);
  context.closePath();


}
printtriangle1();

function lol(){
var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");

// the triangle
context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();

// the outline
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();

// the fill color
context.fillStyle = "#FFCC00"; 
context.fill();
}

lol();