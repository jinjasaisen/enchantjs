enchant();

// Charaクラス
Chara = Class.create(Sprite,{
    // 初期化関数
    initialize: function(posX, posY, frame){
        // Spriteクラスの呼び出し
        Sprite.call(this, 32, 32);
        // 画像の設定
        this.image = game.assets['http://enchantjs.com/assets/images/chara1.gif'];
        this.x = posX;
        this.y = posY;
        this.frame = frame;
        this.count = 0;
        GameScene.addChild(this);
        // キャラをタッチしつつ動かした時に処理
        this.addEventListener('touchmove', function(e){
            this.x = e.x - 16;
            this.y = e.y - 16;
        });
        // ワンフレーム毎の処理
        this.addEventListener('enterframe', function(){
            this.count++;
        	// フレームが14以下の時frame=11、それ以外frame=12
           	if(this.count % 14 <= 7){
          	     this.frame = 11;
           	}
           	else{
           	    this.frame = 12;
           	}
            // 画面外に行かないようにする処理
            if(this.x >= game.width - this.width){
                this.x = game.width - this.width;
            }
            else if(this.x <= 0){
                this.x = 0;
            }
            if(this.y >= game.height - this.height){
                this.y = game.height - this.height;
            }
            else if(this.y <= 0){
                this.y = 0;
            }
        });
    }
});

// Loveクラス
Love = Class.create(Sprite,{
    // 初期化関数
    initialize: function(posX, posY, frame, speedY, num){
        // Spriteクラスの呼び出し
        Sprite.call(this, 16, 16);
        // 画像の設定
        this.image = game.assets['http://enchantjs.com/assets/images/icon0.gif'];
        // 座標
        this.x = posX;
        this.y = posY;
        // 速度
        this.speedY = speedY;
        // フレーム番号
        this.frame = frame;
        // loves[個数]の配列にこのLoveクラスを入れる
        loves[num] = this;
        GameScene.addChild(this);
        // ワンフレーム毎の処理
        this.addEventListener('enterframe', function(){
            // 落下
        	this.y += this.speedY;
            // Loveが320＋50を超えたらremove関数が発動、全体の個数を-1
            if(this.y >= 320 + 50){
                this.remove();
                number--;
            }
            for(var i in loves){
                if(player.intersect(this)){
                    this.remove();
                    number--;
                    game.score++;
                    player.scale(1.08, 1.08);
                }
            }
        });
    },
    remove: function(){
        GameScene.removeChild(this);
        delete this;
    }
});

// 乱数の生成
function rand(min, max){ // first ~ lastの乱数
    return Math.floor(Math.random() * (max - min) + min);
}

window.onload = function(){
    game = new Game(320, 320);
    game.fps = 30;
    game.score = 0;
    game.preload(
        		'http://enchantjs.com/assets/images/chara1.gif',
				'http://enchantjs.com/assets/images/icon0.gif'
    );
    game.onload = function(){
        TitleScene = new Scene();
        TitleScene.backgroundColor = "black";
        var StartButton = new MutableText(game.width/2 - 45, game.height/2, game.width, "");
        StartButton.setText("START");
        TitleScene.addChild(StartButton);
        StartButton.addEventListener('touchstart', function(){
            game.popScene();
            game.pushScene(SerectScene);
        });
        
        SerectScene = new Scene();
        SerectScene.backgroundColor = "black";
        
        stage_id = 1;
        for(var i = 1; i <= 3; i++){
            SerectButton = [];
            SerectButton[i] = new MutableText(game.width/2 - 45, 80 * i, game.width, "");
            SerectButton[i].id = i;
            SerectButton[i].setText("STAGE:" + SerectButton[i].id);
            SerectScene.addChild(SerectButton[i]);
            SerectButton[i].addEventListener('touchstart', function(){
                if(this.id == 1){
                    stage_id = 1;
                }
                else if(this.id == 2){
                    stage_id = 2;
                }
                else if(this.id == 3){
                    stage_id = 3;
                }
                game.popScene();
            	game.pushScene(GameScene);
            });
        }
        
        GameScene = new Scene();
        GameScene.backgroundColor = "black";
        
        // Scene開始時に処理
        GameScene.addEventListener(Event.ENTER, function(){
            // player
            player = new Chara(160 - 32, 320 - 32, 10);
            // Scoreを初期化
            game.score = 0;
            // 愛の個数を初期化
            number = 1;
            start = 0;
            finish = 0;
            switch(stage_id){
            	case 1:
         	       number = 5;
                   start  = 2;
                   finish = 6;
         	       break;
         	   case 2:
         	       number = 10;
                   start  = 3;
                   finish = 8;
         	       break;
         	   case 3:
         	       number = 15;
                   start  = 4;
                   finish = 10;
         	       break;
         	   default :
         	       game.popScene();
         	       game.pushScene(TitleScene);
         	       break;
       		}
            loves = [];
        	GameScene.tl.cue({
     	       	30: function(){
        	        time3 = new MutableText(game.width/2 - 35, game.height/2, game.width, "");
    	    		time3.setText(" 3 ");
       				GameScene.addChild(time3);
           	   	},
          	   	45: function(){
      	          	GameScene.removeChild(time3);
           	   	},
           	   	60: function(){
                	time2 = new MutableText(game.width/2 - 35, game.height/2, game.width, "");
        			time2.setText(" 2 ");
       				GameScene.addChild(time2);
          		},
            	75: function(){
                	GameScene.removeChild(time2);
            	},
            	90: function(){
                	time1 = new MutableText(game.width/2 - 35, game.height/2, game.width, "");
        			time1.setText(" 1 ");
       				GameScene.addChild(time1);
            	},
            	105: function(){
                	GameScene.removeChild(time1);
            	},
            	120: function(){
                	for (var j = 0; j < number; j++){
            			var love = new Love(rand(0 + 32, game.width - 32), -50, 70, rand(start, finish), number);
       				}
            	}
        	});
        });
        var scoreLabel = new MutableText(10, 10, game.width, "");
        scoreLabel.setText("SCORE:" + game.score);
        GameScene.addChild(scoreLabel);
        scoreLabel.addEventListener('enterframe', function(){
            scoreLabel.setText("SCORE:" + game.score);
        });
        
        GameScene.addEventListener('enterframe', function(){
            if(number === 0){
                GameScene.removeChild(player);
                game.popScene();
            	game.pushScene(ResultScene);
            }
        });
        
        ResultScene = new Scene();
        ResultScene.backgroundColor = "black";
        scoreLabel.x = game.width/2 - 70;
        scoreLabel.y = game.height/3;
        scoreLabel.setText("SCORE:" + game.score);
  		ResultScene.addChild(scoreLabel);
        var NextButton = new MutableText(game.width/2 - 70, game.height/3 + 100, game.width, "");
        NextButton.setText(" Next ");
  		ResultScene.addChild(NextButton);
        NextButton.addEventListener('touchstart', function(){
            game.popScene();
            game.pushScene(EndScene);
        });
        
        EndScene = new Scene();
        EndScene.backgroundColor = "black";
        var EndButton = new MutableText(game.width/2 - 70, game.height/3, game.width, "");
        EndButton.setText(" GameEnd ");
  		EndScene.addChild(EndButton);
        EndButton.addEventListener('touchstart', function(){
            game.popScene();
            game.stop();
        });
        var ReplayButton = new MutableText(game.width/2 - 70, game.height/3 + 100, game.width, "");
        ReplayButton.setText(" Replay ");
  		EndScene.addChild(ReplayButton);
        ReplayButton.addEventListener('touchstart', function(){
            game.popScene();
            game.pushScene(TitleScene);
        });
        
        game.pushScene(TitleScene);
    };
    game.start();
};