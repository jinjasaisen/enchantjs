var SCREEN_SIZE = 720;
var PIT_SIZE    = 100;
var PITH    = 150;
var MOGURA_INTERVAL         = 4;
var SUPER_MOGURA_INTERVAL   = 1;

var MOGURA_IMAGE_NAME       = "img/2aniki.png";
var SUPER_MOGURA_IMAGE_NAME = "img/2super.png";
var DAMAGE       = "img/12.png";
var FRONT = "img/222front.png";
var LAST = "img/sleep.png";
var GREEN = "img/green-0.png";

var game        = null;
var scoreLabel  = null;
var time;

enchant();
enchant.ENV.USE_TOUCH_TO_START_SCENE = false;
// --------------------------------
// main
// --------------------------------
window.onload = function(){
    game = new Game(SCREEN_SIZE, SCREEN_SIZE);

//game.memory.player.preload();
game.fps = 30;
     // 画像をロード
game.preload(
MOGURA_IMAGE_NAME
,SUPER_MOGURA_IMAGE_NAME
,DAMAGE
,FRONT
,LAST
,GREEN
);
    // サウンドロード
    tm.Sound.load("sound/hit", "hit");
    tm.Sound.load("sound/hit2", "hit2");
    tm.Sound.load("sound/clap00", "clap00");
    tm.Sound.load("sound/clap01", "clap01");

    
    game.onload = function() { 

        var scene = new Sc01();
        game.pushScene(scene);
       scene.backgroundColor = "rgb(240, 240, 240)";

    };
    game.start();
};//window.onload









