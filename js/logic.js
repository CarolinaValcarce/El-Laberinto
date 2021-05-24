 // ANIMATION FRAME
 var frame = window.requestAnimationFrame || 
 		    window.mozRequestAnimationFrame || 
 			window.webkitRequestAnimationFrame || 
 			window.msRequestAnimationFrame;

var canvas= document.querySelector("#canvas");
var ctx= canvas.getContext("2d");
var score= document.querySelector("#time span");

// We create the properties of the player that is actually a rectangule.

var player={
	x:250,
	y:55,
	width:10,
	height:10,
	color: "#d50dd5",
	x1:null,
	x2: null,
	y1: null,
	y2: null,
	movex: 0,
	movey: 0,
	speed: 3
}


// Let's create the frames or walls of the maze. 
// We can design it in a svg app and, later on, convert the html labels into a js.


var maze_walls= [ 
	{x:288, y:37.52, width:425, height:9.35, x1:null, x2:null, y1:null, y2:null, color:"blue"},
	{x:703.65, y:37.521, width:9.35, height:424.999, x1:null, x2:null, y1:null, y2:null},
	{x:288, y:453.17, width:425, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:288.001, y:84.82, width:9.35, height:303.749, x1:null, x2:null, y1:null, y2:null},
	{x:288.001, y:418.32, width:9.35, height:34.851, x1:null, x2:null, y1:null, y2:null},
	{x:297.351, y:418.32, width:35.955, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:323.956, y:343.144, width:9.35, height:75.175, x1:null, x2:null, y1:null, y2:null},
	{x:362.467, y:84.82, width:9.35, height:113.802, x1:null, x2:null, y1:null, y2:null},
	{x:362.467, y:312.723, width:9.35, height:112.884, x1:null, x2:null, y1:null, y2:null},
	{x:297.351, y:303.373, width:110.283, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:448.769, y:303.373, width:27.511, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:478.108, y:341.226, width:46.21, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:402.559, y:341.226, width:46.21, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:629.481, y:341.226, width:81.701, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:629.108, y:264.949, width:46.21, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:629.108, y:189.688, width:46.21, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:590.149, y:228.647, width:46.21, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:514.89, y:113.543, width:188.761, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:590.785, y:75.47, width:83.649, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:486.801, y:151.615, width:179.167, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:447.844, y:75.47, width:72.994, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:362.467, y:75.47, width:46.04, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:288.001, y:75.47, width:46.04, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:297.351, y:151.616, width:36.691, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:325.188, y:114.43, width:37.279, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:324.303, y:189.272, width:38.165, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:371.817, y:379.074, width:69.098, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:487.125, y:379.074, width:64.46, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:439.42, y:303.373, width:9.35, height:37.852, x1:null, x2:null, y1:null, y2:null},
	{x:440.915, y:379.074, width:9.35, height:36.86, x1:null, x2:null, y1:null, y2:null},
	{x:551.584, y:191.088, width:9.35, height:224.847, x1:null, x2:null, y1:null, y2:null},
	{x:477.775, y:379.074, width:9.35, height:36.86, x1:null, x2:null, y1:null, y2:null},
	{x:400.24, y:414.932, width:9.35, height:38.238, x1:null, x2:null, y1:null, y2:null},
	{x:513.794, y:414.932, width:9.35, height:38.238, x1:null, x2:null, y1:null, y2:null},
	{x:628.154, y:389.328, width:9.35, height:71.814, x1:null, x2:null, y1:null, y2:null},
	{x:666.466, y:350.575, width:9.35, height:74.56, x1:null, x2:null, y1:null, y2:null},
	{x:514.969, y:160.994, width:9.35, height:180.232, x1:null, x2:null, y1:null, y2:null},
	{x:590.149, y:228.647, width:9.35, height:46.21, x1:null, x2:null, y1:null, y2:null},
	{x:629.108, y:189.688, width:9.35, height:48.362, x1:null, x2:null, y1:null, y2:null},
	{x:665.969, y:151.615, width:9.35, height:38.073, x1:null, x2:null, y1:null, y2:null},
	{x:665.969, y:228.952, width:9.35, height:83.217, x1:null, x2:null, y1:null, y2:null},
	{x:476.28, y:200.437, width:9.35, height:112.285, x1:null, x2:null, y1:null, y2:null},
	{x:437.101, y:152.833, width:9.35, height:114.681, x1:null, x2:null, y1:null, y2:null},
	{x:400.63, y:124.697, width:9.35, height:112.025, x1:null, x2:null, y1:null, y2:null},
	{x:591.294, y:304.517, width:9.35, height:75.462, x1:null, x2:null, y1:null, y2:null},
	{x:600.644, y:304.517, width:37.814, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:560.934, y:265.507, width:29.215, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:560.934, y:191.088, width:36.861, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:446.45, y:191.088, width:39.18, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:591.294, y:379.978, width:46.21, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:551.584, y:415.934, width:46.21, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:440.915, y:415.934, width:46.21, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:590.785, y:46.871, width:9.35, height:28.599, x1:null, x2:null, y1:null, y2:null},
	{x:552.601, y:75.79, width:9.35, height:37.753, x1:null, x2:null, y1:null, y2:null},
	{x:399.158, y:46.871, width:9.35, height:28.599, x1:null, x2:null, y1:null, y2:null},
	{x:438.48, y:75.47, width:9.35, height:39.878, x1:null, x2:null, y1:null, y2:null},
	{x:477.452, y:84.82, width:9.35, height:76.174, x1:null, x2:null, y1:null, y2:null},
	{x:629.108, y:274.298, width:9.35, height:30.218, x1:null, x2:null, y1:null, y2:null},
	{x:398.284, y:276.864, width:9.35, height:26.51, x1:null, x2:null, y1:null, y2:null},
	{x:325.237, y:228.501, width:9.35, height:48.363, x1:null, x2:null, y1:null, y2:null},
	{x:325.237, y:228.501, width:83.818, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:325.237, y:267.514, width:45.902, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:398.284, y:267.514, width:48.167, height:9.35, x1:null, x2:null, y1:null, y2:null},
	{x:400.63, y:115.348, width:47.2, height:9.35, x1:null, x2:null, y1:null, y2:null}];

var data={
	left:false,
	right:false,
	up: false,
	down: false,
	photograme: 0,
	sec: 0
}


var game={

	keyboard: function(){
		document.addEventListener("keydown", game.press);
		document.addEventListener("keyup", game.release);
	
			/* Act on the event */
	},
	press: function(key){
		// console.log("TECLA:",key.keyCode);
		key.preventDefault();
		switch(key.keyCode){
			case 37: data.left=true; break;
			case 38: data.up=true; break;
			case 39: data.right=true; break;
			case 40: data.down=true; break;
		}
	},
	release: function(key){
		key.preventDefault();
		switch(key.keyCode){
			case 37: data.left=false; break;
			case 38: data.up=false; break;
			case 39: data.right=false; break;
			case 40: data.down=false; break;
		}

	},

	time: function(){

		// Move left and right the player
		player.x+=player.movex;
		if(data.right){
			player.movex=player.speed;  player.movey=0;

		}if(data.left){
			player.movex=-player.speed;  player.movey=0;

		}if(!data.right && !data.left){
			player.movex=0;
		}
		// Move up and down the player
		player.y+=player.movey;
		if (data.up){
			player.movey=-player.speed; player.movex=0;

		}if (data.down){
			player.movey=player.speed; player.movex=0;
		
		}if (!data.up  && !data.down ) { 
			player.movey=0;

		}

		for (var i=0; i<maze_walls.length; i++){

			player.x1=player.x;
			player.x2=player.x+player.width;
			player.y1= player.y;
			player.y2= player.y+player.height;

			maze_walls[i].x1= maze_walls[i].x;
			maze_walls[i].x2= maze_walls[i].x+ maze_walls[i].width;
			maze_walls[i].y1= maze_walls[i].y;
			maze_walls[i].y2= maze_walls[i].y+ maze_walls[i].height;

		
			function collitions(){

				if((player.x1<maze_walls[i].x2 )&&(player.x2>maze_walls[i].x1)&&(player.y1<maze_walls[i].y2)&&(player.y2>maze_walls[i].y1)){

					return true;
				}
					return false;
			}

			collitions();

			if (collitions()){
				player.x=250;
				player.y=55;
				player.movex=0;
				player.movey=0;
				data.sec=0;
				data.photograme=0;
				

			}
		}
		

		if(data.photograme>=60){
			 data.photograme=0;
			 data.sec ++;

			 score.innerText =data.sec;

		}else{

			 data.photograme ++;
		}
	

		// crono= setInterval(

		// 	function(){
		
		// 		if(data.photograme>=60){
		// 			data.photograme=0;
		// 			data.sec ++;

		// 			score.innerText =data.sec;

		// 		}else{

		// 			data.photograme ++;
		// 		}
		// 	},1000);	
		// if (player.x==290 && player.y==100){
		// 	clearInterval(crono);
		// }


		game.canvas();
		frame(game.time);
	},

	canvas:function(){
		ctx.clearRect  (0,0, canvas.width, canvas.height);
		ctx.fillStyle =player.color;
		ctx.fillRect(player.x, player.y, player.width, player.height);

		ctx.fillStyle =maze_walls[0].color;
		for (var i=0; i< maze_walls.length; i++){
			ctx.fillRect(maze_walls[i].x, maze_walls[i].y, maze_walls[i].width, maze_walls[i].height);
		}	
	}	
}

game.keyboard();
game.time();