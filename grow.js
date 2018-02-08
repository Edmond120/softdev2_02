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
	if(!running){
		interval = setInterval(frame,5);
		running = true;
	}
}
function stop(){
	if(running){
		clearInterval(interval);
		running = false;
	}
}
