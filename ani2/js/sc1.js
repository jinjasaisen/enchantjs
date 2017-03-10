var Sc01 = Class.create(Scene, {

initialize: function() {

Scene.apply(this);
var game =Game.instance;

var bkg=new Sprite(480,640);
bkg.image = game.assets[FRONT];
bkg.width=480;
bkg.height=640;
bkg.x=120;

var lab1=new Label(100,50);
lab1.x=200;
lab1.y=300;
lab1.font="36px 'sazanami-gothic'";
lab1.color="white";
lab1.text="はじめる";
this.addChild(lab1);

var lab2=new Label(100,50);
lab2.x=150;
lab2.y=250;
this.addChild(lab2);
this.addChild(bkg);
this.addChild(lab1);

lab1.addEventListener("touchstart",this.start);
//lab2.addEventListener(Event.ENTER_FRAME,this.stime);

},

start: function() {
var sc=new Sc02();
game.replaceScene(sc);
},

stime:function() {

time=3-parseInt(game.frame/game.fps);
this.text="time: "+time;
if( time <1 ){
var sc=new Sc02();
game.replaceScene(sc);

}
}



});



