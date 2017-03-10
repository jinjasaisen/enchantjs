var Sc03 = Class.create(Scene, {
initialize: function() {

Scene.apply(this);
var game =Game.instance;

this.width=720;
this.height=480;

var last=new Sprite(240,320);
last.image = game.assets[LAST];
last.x=100;
last.y=350;
console.log(last);

var lab1=new Label();
lab1.font="36px 'sazanami-gothic'";
lab1.width=250;
lab1.x=100;
lab1.y=50;
lab1.text="ゲームオーバー";

var locs=localStorage;
console.log(locs.name);
var lab2=new Label();
lab2.font="48px 'sazanami-gothic'";
lab2.text="スコア: "+locs.name;
lab2.x=100;
lab2.y=150;

//console.log(locs.name);
var lab3=new Label();
lab3.font="48px 'sazanami-gothic'";
lab3.text="";
lab3.x=100;
lab3.y=this.height*2/3;
lab3.text="最初から";

this.addChild(lab1);
this.addChild(lab2);
this.addChild(last);
this.addChild(lab3);
lab3.addEventListener("touchstart",this.restart);
},//init
restart: function() {  
location.reload();

}

        
});//sc03
