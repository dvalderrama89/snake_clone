var snake_array,
	length = 5,
	startX = 20,
	startY = 20,
	score = 0,
	scoreText = "Score: " + score;

function createSnake(){
	snake_array = [];
	for(var i = 0; i < length; i++){
		snake_array.push({x:startX +(i*10),y:startY});
	}
	spawnFood();
}

function drawSnake(context){
	for(var i = 0; i < snake_array.length; i++){
		xPos = snake_array[i].x;
		yPos = snake_array[i].y;

		context.fillStyle = "black";
		context.fillRect(xPos, yPos, 10, 10);
		context.strokeStyle = "white";
		context.strokeRect(xPos, yPos, 10, 10);
	}

	context.font = "bold 12px Arial";
	context.fillText(scoreText, 5, 395);
}

function updateSnake(key){
	var dx = 0, dy = 0;
	if(snake_array.length == 5)
		key == "right";
	switch(key){
		case "right":
			dx = 10;
			break;
		case "left":
			dx = -10;
			break;
		case "up":
			dy = -10;
			break;
		case "down":
			dy = 10;
			break;
		default:
			dx = 10;
			break;
	}

	head = {x:snake_array[snake_array.length-1].x + dx, y:snake_array[snake_array.length-1].y + dy};
	if(head.x == food.x && head.y == food.y){
		head = {x:food.x, y:food.y}
		snake_array.push(head);
		spawnFood();
		
		score++;
		scoreText = "Score: " + score;

	}
	else{
		tail = snake_array.shift();
		snake_array.push(head);
	}

	if (head.x > 600 || head.x < 0 ||	head.y > 400 || head.y < 0 || collision(head)){
		score = 0;
		scoreText = "Score: " + score;
		restartGame();
		return true;
	}
	else
		return false;

}

function collision(head){
	for(var i = 0; i < snake_array.length-1; i++){
		if(head.x == snake_array[i].x && head.y == snake_array[i].y)
			return true;
	}
	return false;
}

function restartGame(){
	createSnake();
}
