var canvas
var con;
var xDown = 0;
var yDown = 0;
var charles;
var duke;
var mouseDown;

var radius;

var oldX;
var oldY;


var count = parseInt(0);
//array of coords

const offsetX = parseInt(-100);
const offsetY = parseInt(-25);

function init(){
	canvas = document.getElementById("surface");
	if (canvas.getContext){
		con = canvas.getContext('2d');
		border();
		//mousing it 
		//figure out shape
		document.onmousedown = catchMouse;
		document.onmouseup = release;
	}
}
function catchMouse(e){
	xDown= e.pageX + offsetX;
	yDown= e.pageY + offsetY;
	//change shape here
	//
	oldX= xDown;
	oldY= yDown;
	//
	mouseDown = setInterval(freeDraw, 100);
	//
	//
	//
}
function release(e){
	//stop drawing
	clearInterval(mouseDown);
	//save state
}
function getCoords(e){
	charles = event.clientX + offsetX;
	duke = event.clientY + offsetY;
	radius = Math.sqrt((charles - xDown)^2 + (duke - yDown)^2);
	console.log(radius);
}


//SHAPES
function line(){
	canvas.onmousemove = getCoords;

	con.clearRect(0,0, 600, 600);
	border();

	con.beginPath();
	con.moveTo(xDown, yDown);
	con.lineTo(charles, duke);
	con.stroke();
	con.closePath();
}
function freeDraw(){
	canvas.onmousemove = getCoords;

	//con.clearRect(0,0, 600, 600);
	border();

	con.beginPath();
	con.moveTo(oldX, oldY);
	con.lineTo(charles, duke);
	con.stroke();
	con.closePath();
	oldX= charles;
	oldY= duke;
}


function circle(){
	canvas.onmousemove = getCoords;

	con.clearRect(0,0, 600, 600);
	border();

	con.beginPath();
	con.arc(xDown, yDown, radius, 0, 2 * Math.PI);
	con.stroke();
	con.closePath();
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
}
