var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
	//generate all new colours
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//set h1's rgb to new one
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		//add colours to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add colours to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function(){
		//grab colour of picked square
		var clickedColor = this.style.backgroundColor;

		//compare colour from pickedColour
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "CORRECT";
			resetButton.textContent = "Play Again?"
			changeColor(clickedColor);
			h1.style.background = clickedColor;
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change each color to match given colour
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//random red blue green colour
	var r = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);

	//return "rgb(r,g,b)" and we need to break in it string form
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
