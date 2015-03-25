enchant();
window.onload = function() {
    var game = new Game(320, 320);
    game.enemy_speed = 1;
    game.preload('res/char1.png', 'res/school.png','res/enchant.png');



var Char1 = enchant.Class.create(enchant.Sprite, {
        initialize: function(x, y) {
            enchant.Sprite.call(this, 100, 100);
            this.x = x;
            this.y = y;
            this.image = game.assets['res/char1.png'];
            this.frame = 5;
            game.rootScene.addChild(this);

this.tl.hide();
this.opacity=0.0;
this.tl.delay(30).fadeIn(30);


        }
    });


    var Bkg1 = enchant.Class.create(enchant.Sprite, {
        initialize: function(x, y) {
            enchant.Sprite.call(this, 420, 360);
            this.x = x;
            this.y = y;
            this.image = game.assets['res/school.png'];
            this.frame = 5;
            game.rootScene.addChild(this);
        }
    });



    game.onload = function() {


        game.rootScene.addEventListener('enterframe', function() {


                var char1 = new Char1(220,180);


        });


                var bkg1 = new Bkg1(0,0);


    };

    game.debug();
};

function rand(num){ return Math.floor(Math.random() * num) };
