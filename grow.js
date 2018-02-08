var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 50;
var interval = null;
var running = false;
var radius = 1;
var grow = true;
var smaller = null;



function frame(){
	if(canvas.height < canvas.width){
		smaller = canvas.height;
	}
	else{
		smaller = canvas.width;
	}
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.beginPath();
	ctx.arc(canvas.width/2,canvas.height/2,radius,0,Math.PI * 2);
	ctx.stroke();
	ctx.fillStyle = "#000000";
	ctx.fill();
	if(radius <= 0 && (!grow)){
		grow = true;
	}
	else if(radius >= smaller / 2 && grow){
		grow = false;
	}
	if(grow){
		radius++;
	}
	else{
		radius--;
	}
}
function start(){
	stop();
	interval = setInterval(frame,5);
	running = true;
}
function stop(){
	if(running){
		clearInterval(interval);
		running = false;
	}
}
var xcor = canvas.width/2;
var ycor = canvas.height/2;
var xvel = 1;
var yvel = 1;
var r = 50;
var colors = ["#FF0000","#00FF00","#0000FF"];
var color = "#000000";
function getRandomColor(){
	return colors[Math.floor(Math.random() * 4)];
}
function frameDVD(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.beginPath();
	ctx.arc(xcor,ycor,r,0,Math.PI * 2);
	ctx.stroke();
	ctx.fill();
	xcor += xvel;
	ycor += yvel;
	if(xcor + r >= canvas.width || xcor - r <= 0){
		xvel *= -1;
		ctx.fillStyle = getRandomColor();
	}
	if(ycor + r >= canvas.height || ycor - r <= 0){
		yvel *= -1;
		ctx.fillStyle = getRandomColor();
	}
		
}
function startDVD(){
	stop();
	interval = setInterval(frameDVD,5);
	running = true;
}
