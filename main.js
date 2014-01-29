$(document).ready(function(){

	$("#container").append("<canvas id='canvas'></canvas>");
	$("#banner").append('<h1><p id="header1">Currently under construction! Everything here is open source.</p></h1>');

	$(function() {
		$( "#menu" ).menu();
	});

	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		screenWidth = 600,
		screenHeight = 400,
		paused = false,
		d;

	canvas.width = screenWidth;
	canvas.height = screenHeight;

	gameLoop = setInterval(update, 60);

	function fillCanvas(){
		context.fillStyle = "white";
		context.fillRect(0, 0, screenWidth, screenHeight);
		context.strokeStyle = "black";
		context.strokeRect(0,0,600,400);
	}

	createSnake();

	function draw(){
		fillCanvas();
		drawSnake(context);
		drawFood(context);
	}

	function update(){
		var gameOver = updateSnake(d);
		if(gameOver)
			d = "right";
		draw();
	}

	$(document).keydown(function(e){
		var key = e.which;
		if(key == "37" && d != "right") 
			d = "left";
		else if(key == "38" && d != "down") 
			d = "up";
		else if(key == "39" && d != "left") 
			d = "right";
		else if(key == "40" && d != "up") 
			d = "down";
		else if(key == "32")
			if(paused){
				gameLoop = setInterval(update, 60);
				paused = false;
			}
			else{
				clearInterval(gameLoop)
				paused = true;
				context.font = "30px Arial";
				context.fillText("PAUSED", 230, 200);
			}
	});
});
