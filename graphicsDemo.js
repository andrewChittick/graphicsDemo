function init(){
	var canvas = document.getElementById("surface");
	if (canvas.getContext){
		var con = canvas.getContext('2d');

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
		
		var rb = con.createLinearGradient(0,0,0,560);
		rb.addColorStop(0, "fuchsia");
		rb.addColorStop(1, "red");
	
		//draw frame
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
		con.fillStyle = rb;
		con.fillRect(20, 40, 20, 520);

		//draw line

	}

}
