/**
 * phi
 */

// --------------------------------
// 定数
// --------------------------------
var SCREEN_SIZE = 700;
var PIT_SIZE    = 100;
var MOGURA_INTERVAL         = 4;
var SUPER_MOGURA_INTERVAL   = 1;

var MOGURA_IMAGE_NAME       = "img/3aniki.png";
var SUPER_MOGURA_IMAGE_NAME = "img/2super.png";

// --------------------------------
var game        = null;
var scoreLabel  = null;

enchant();

// --------------------------------
// main
// --------------------------------
window.onload = function(){
    game = new Game(SCREEN_SIZE, SCREEN_SIZE);
    game.fps = 30;
    
    // 画像をロード
    game.preload(MOGURA_IMAGE_NAME, SUPER_MOGURA_IMAGE_NAME);
    // サウンドロード
    tm.Sound.load("sound/hit", "hit");
    tm.Sound.load("sound/hit2", "hit2");
    tm.Sound.load("sound/clap00", "clap00");
    tm.Sound.load("sound/clap01", "clap01");
    
    game.onload = function() { 

        var scene = new SceneGame();
        game.pushScene(scene);
       scene.backgroundColor = "rgb(240, 240, 240)";
        
        for (var i=0; i<4; ++i) {
            for (var j=0; j<4; ++j) {
                var pit = new Pit();
                pit.x = i*55+50;
                pit.y = j*55+50;
                scene.addChild(pit);
            }
        }
        
        // スコア
        scoreLabel = new ScoreLabel();
        scoreLabel.x = 5;
        scoreLabel.y = 5;
        scene.addChild(scoreLabel);
        
        scene.onenter = function() {
            game.frame = 0;
        };
        
        scene.onenterframe = function() {
            if ((game.frame/game.fps) > 15) {
                gameOver();
            }
        };
    };
    game.start();
};


var gameOver = function(msg){
    msg = scoreLabel.score + "point です.";
    console.log(scoreLabel.score, msg);
    game.end(scoreLabel.score, msg);
    
    // 拍手
    if (scoreLabel.score < 500) {
        tm.Sound.play("clap00");
    }
    else {
        tm.Sound.play("clap00");
    }
};







