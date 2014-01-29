var food;

function spawnFood(){
	food = {
		x:Math.round(Math.random()*590/10)*10,
		y:Math.round(Math.random()*390/10)*10,
	};
}

function drawFood(context){
	context.fillStyle = "black";
	context.fillRect(food.x,food.y, 10, 10);
	context.strokeStyle = "white";
	context.strokeRect(food.x,food.y, 10,10);
}
