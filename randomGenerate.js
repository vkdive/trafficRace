 var lib=require('./road2.js');
 var axel = require('axel');
 var obj={};
 var score=1;
obj.movement=function(index,pixel){
	axel.bg(0,0,0);
	axel.box(index,pixel,7,3);
}	
 var arr=[44,51,60,67];
obj.generateRandom=function(){
	 var index=~~(Math.random()*10);
	if(index%4==0)return 3;
 	if(index%3==0)return 2;
 	if(index%2==0)return 1;
 	if(index%1==0)return 0;
}
obj.scoreBoard=function(){
	score+=2;
	axel.bg(0,0,0);
	axel.box(78,4,20,10);
	axel.bg(255,255,255)
	axel.text(80,5,"score: "+score);
};
// process.on('uncaughtException',function(err){
// 	console.log(err);
// })
obj.varName = function(index,pixel){
	if(lib.pixels()==index && (pixel>=28 && pixel<=33)){
		process.exit(0);
	}
	if(lib.pixels()==index)obj.scoreBoard();
	if(pixel <= 34) {
	    obj.movement(index,pixel);
	    
		pixel+=3;
	 	axel.bg(255,255,0);
	  	axel.box(index,pixel,7,3);
	  	axel.bg(255,255,255);
	  	axel.point(0,37);
     } else {
        clearInterval(obj.varName);
     }
};

obj.hai=function(){
	var pixel=2;
	var index=obj.generateRandom();
    setInterval(function(){
    	pixel++;
    	obj.varName(arr[index],pixel);
    }, 50);
}
exports.obj=obj;

