var Sc02 = Class.create(Scene, {
initialize: function() {

Scene.apply(this);
var game =Game.instance;

// this.width=480;
// this.height=750;

var lab2=new Label(100,50);
lab2.x=100;
lab2.y=650;

var bkg=new Sprite(SCREEN_SIZE,SCREEN_SIZE);
bkg.image = game.assets[GREEN];
this.addChild(bkg);

this.addChild(lab2);

        for (var i=0; i<4; ++i) {
            for (var j=0; j<4; ++j) {
                var pit1 = new Pit();
                pit1.x = i*100+100;
                pit1.y = j*150+100;
                this.addChild(pit1);
            }
        }
        // スコア
scoreLabel = new ScoreLabel();
scoreLabel.x = 5;
scoreLabel.y = 5;

var locs=localStorage;
//var key0=locs.key(0);
//console.log(locs.key0);

this.addChild(scoreLabel);

lab2.addEventListener(Event.ENTER_FRAME, this.timer);        
this.addEventListener(Event.ENTER_FRAME, this.end);

},//init

timer: function() {
time=parseInt(game.frame/game.fps);
this.text="time: "+(10-time);

},

end: function() {

time=parseInt(game.frame/game.fps);

if( 10-time <0 ){
 var sc=new Sc03();
game.replaceScene(sc);
}
},

save: function() {
var save1=document.getElementById('textfield').value;
localStorage.setItem("text", save1);
}

});
