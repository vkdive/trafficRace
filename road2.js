var axel = require('axel');
var lib=require('./randomGenerate').obj;
var keypress = require('keypress');
	keypress(process.stdin);
	var charm = require("charm")(process.stdout);
	var pixel=44;
	var pixelheight=33;
var createRoad=function(){
		//----------road main--------//
	axel.bg(0,0,0);
	axel.box(42,3,16,34);

		//------------divider-----------//
	axel.bg(255,255,255);
	axel.box(58,3,2,34);


		//----------road main--------//
	axel.bg(0,0,0);
	axel.box(60,3,16,34);


		//----------------sideLine-----------//
	axel.bg(0,255,0);
	axel.box(43,3,1,34);

		//----------------sideLine-----------//
	axel.bg(0,255,0);
	axel.box(74,3,1,34);
	setInterval(lib.hai,500);

}
var createCar=function(position,pixelheight){
	//---------car --------//
	axel.bg(255,0,0);
	axel.box(position,33,7,3);
	axel.bg(255,255,255);
	axel.point(0,37);
}
charm.erase("screen");
createRoad();
lib.scoreBoard();
createCar(pixel);
var movement=function(pixel){
	axel.bg(0,0,0);
	axel.box(pixel,33,7,3);
}
process.stdin.on('keypress', function  (ch,key) {
	if(key && key.ctrl && key.name == "d"){
  		process.exit(0);
  	}
	var keyPressed=key.name;
	if(key.name=="right" && (pixel+7)<=67){
		movement(pixel);
		if(pixel==51)
			pixel+=9; 
		else
			pixel+=7;	
	}
	if(key.name=="left" && (pixel-7)>=44){
		movement(pixel);
		if(pixel==60)pixel-=9; 
		else pixel-=7;
	}
	charm[keyPressed](7);
	createCar(pixel);
});
axel.cursor.restore();
process.stdin.setRawMode(true);

exports.pixels=function(){
	return pixel;
}



