//= partials/helper.js

let ringCanvas = document.getElementById('canvasRing');
let ringContext = ringCanvas.getContext('2d');


let xPos = 50;
let yPos = ringCanvas.height / 2;
let radius = 40;
let step = 10;
let maxXPos = 300 - 75;
let startAngle = 0 * (Math.PI / 180);
let endAngle = 360 * (Math.PI / 180);
let interval = 80;

let intervalID = setInterval(drawCircle, interval);

function drawCircle() {

  ringContext.clearRect(0, 0, ringCanvas.width, ringCanvas.height);

  ringContext.strokeStyle = "red";
  ringContext.lineWidth = 4;

  ringContext.shadowOffsetX = 3;
  ringContext.shadowOffsetY = 3;
  ringContext.shadowBlur = 5;
  ringContext.shadowColor = "gray";

  xPos += step;
  if (xPos > maxXPos) {
    clearInterval(intervalID);
  }

  ringContext.beginPath();
  ringContext.arc(xPos, yPos, radius, startAngle, endAngle, true);
  ringContext.stroke();
}

document.addEventListener("DOMContentLoaded", function () {

});





