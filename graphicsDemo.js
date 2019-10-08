//Andrew Chittick
//date
//
////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////////
//Global variables/constants
//
//
//canvas variables
var canvas
var con;

//mouse coordinates
var xDown = 0;
var yDown = 0;
var xCoord;
var yCoord;
//for circle
var radius;
//for rectangle
var width;
var height;

//mouse events
var mouseDown;

var shape = "freeDraw";

//to save the state of canvas
var image;

const offsetX = parseInt(-100);
const offsetY = parseInt(-25);


//end vars
///////////////////////////////////////////////////////////////////////
//
//
//TODO
//button images
//documentation


function init(){
	canvas = document.getElementById("surface");
	if (canvas.getContext){
		con = canvas.getContext('2d');
		border();
		//mousin it 
		document.onmousedown = catchMouse;
		document.onmouseup = release;
	}
}
function catchMouse(e){
	//mouse down coordinates
	xDown= e.pageX + offsetX;
	yDown= e.pageY + offsetY;

	//save canvas
	image = con.getImageData(0,0,600,600);

	//check for which shape function
	if (shape == "freeDraw"){
		mouseDown = setInterval(freeDraw, 20);
	}
	else if (shape == "line"){
		mouseDown = setInterval(line, 20);
	}
	else if (shape == "circle"){
		mouseDown = setInterval(circle, 20);
	}
	else if (shape == "rectangle"){
		mouseDown = setInterval(rectangle, 20);
	}
	else if (shape == "spiral"){
		mouseDown = setInterval(spiral, 20);
	}
}
function release(e){
	//stop drawing
	clearInterval(mouseDown);
}
function getCoords(e){
	xCoord = event.clientX + offsetX;
	yCoord = event.clientY + offsetY;
	radius = Math.sqrt((xCoord - xDown) **2 + (yCoord - yDown) **2);
	width = xCoord - xDown;
	height = yCoord - yDown;
}
function setShape(newShape){
	shape = newShape;
	setButtons();
}
function setButtons(){ $("#freeDraw").css("background-color", "red");
	$("#line").css("background-color", "red");
	$("#circle").css("background-color", "red");
	$("#rectangle").css("background-color", "red");
	$("#spiral").css("background-color", "red");
	$("#"+shape).css("background-color", "green");
}
function clean(){
	//clear the screen then replace image
	con.clearRect(0,0, 600, 600);
	con.putImageData(image, 0,0);
}
function checkBounds(){
	if (xDown > 0 && xDown < 600){
		if (yDown > 0 && yDown < 600){
			return true;
		}
	}
	else{
		console.log("outofbounds");
		return false;
	}
}

////////////////////////////////////////////////////////////////
//SHAPES
////////////////////////////////////////////////////////////////
	
function freeDraw(){
	canvas.onmousemove = getCoords;
	if (checkBounds()){
		//draw segment
		con.beginPath();
		con.moveTo(xDown, yDown);
		con.lineTo(xCoord, yCoord);
		con.stroke();
		con.closePath();
		//what was new is now old
		//for next segment
		xDown = xCoord;
		yDown= yCoord;
		//draw border
		border();
	}
}
function line(){
	canvas.onmousemove = getCoords;
	clean();
	if (checkBounds()){
		con.beginPath();
		con.moveTo(xDown, yDown);
		con.lineTo(xCoord, yCoord);
		con.stroke();
		con.closePath();
		border();
	}
}
function circle(){
	canvas.onmousemove = getCoords;
	clean();
	if (checkBounds()){
		con.beginPath();
		con.arc(xDown, yDown, radius, 0, 2 * Math.PI);
		con.stroke();
		con.closePath();
		border();
	}
}
function rectangle(){
	canvas.onmousemove = getCoords;
	clean();
	if (checkBounds()){
		con.beginPath();
		con.strokeRect(xDown, yDown, width, height);
		con.stroke();
		con.closePath();
		border();
	}
}
function spiral(){
	//line without clean
	canvas.onmousemove = getCoords;
	if (checkBounds()){
		con.beginPath();
		con.moveTo(xDown, yDown);
		con.lineTo(xCoord, yCoord);
		con.stroke();
		con.closePath();
		border();
	}
}
function clearScreen(){
	con.clearRect(0,0,600,600);
	border();
}

function border(){
	//make gradients for border
	var ro = con.createLinearGradient(0,0,600,0);
	ro.addColorStop(0, "red");
	ro.addColorStop(1, "orange");
	
	var oy = con.createLinearGradient(0,0,0,600);
	oy.addColorStop(0, "orange");
	oy.addColorStop(1, "yellow");
	
	var yg = con.createLinearGradient(0,0,600,0);
	yg.addColorStop(0, "green");
	yg.addColorStop(1, "yellow");
	
	var gb = con.createLinearGradient(0,0,0,600);
	gb.addColorStop(0, "blue");
	gb.addColorStop(1, "green");
		
	var bi = con.createLinearGradient(0,0,560,0);
	bi.addColorStop(0, "blue");
	bi.addColorStop(1, "indigo");
			
	var iv = con.createLinearGradient(0,0,0,560);
	iv.addColorStop(0, "indigo");
	iv.addColorStop(1, "violet");
	
	var vr = con.createLinearGradient(0,0,560,0);
	vr.addColorStop(0, "red");
	vr.addColorStop(1, "violet");
		
	var or = con.createLinearGradient(0,0,0,560);
	or.addColorStop(0, "orange");
	or.addColorStop(1, "red");
	
	//draw frame
	//
	//top
	con.fillStyle = ro;
	con.fillRect(0, 0, 600, 20);
	//right
	con.fillStyle = oy;
	con.fillRect(580, 0, 20, 600);
	//bottom
	con.fillStyle = yg;
	con.fillRect(20, 580, 600, 20);
	//left
	con.fillStyle = gb;
	con.fillRect(0, 20, 20, 580);
	//inner top
	con.fillStyle = bi;
	con.fillRect(20, 20, 560, 20);
	//inner right
	con.fillStyle = iv;
	con.fillRect(560, 20, 20, 560);
	//inner bottom
	con.fillStyle = vr;
	con.fillRect(20, 560, 560, 20);
	//inner left
	con.fillStyle = or;
	con.fillRect(20, 40, 20, 520);

	//draw title
	con.font = "30px Arial";
	con.fillStyle = "white";
	con.fillText("Paint 2D", 240, 30);
}
