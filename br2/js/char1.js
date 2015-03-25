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
