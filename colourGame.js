var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

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
			changeColor(clickedColor);
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

function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}