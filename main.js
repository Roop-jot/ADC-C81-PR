canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = red;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(150, 143, 230, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250, 210, 40, 0, 2*Math.PI)