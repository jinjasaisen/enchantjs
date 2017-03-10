var Pit = Class.create(Sprite, {
    initialize: function() {
        enchant.Sprite.call(this, PIT_SIZE, PITH);
        
        // タイプをセット
        this.changeType();
        // ランダムな時間待って出現処理に切り替える
        this.setWait(Math.random()*200, this.appear);
        
        // タイム進行関数を登録
        this.addEventListener("enterframe", this.regtime);
        this.addEventListener("touchstart", this.touch);

    },

    regtime: function() {

            ++this.time;

},
    
    touch: function() {
        // 2~4フレームのときのみタッチ可能
        if (1 < this.frame && this.frame < 5) {
            // 気絶処理に切り替える
//            this.frame = 5;

this.onenterframe = this.damage;
this.time = 0;
            
            // スコア加算
            if (this.interval == SUPER_MOGURA_INTERVAL) {
                tm.Sound.play("hit2");
                scoreLabel.add(100);
            }
            else {
                tm.Sound.play("hit");
                scoreLabel.add(10);
            }
        }
    },
    
    appear: function() {
        if (this.time % this.interval == 0) {
            this.frame += 1;
        }
        
        if (this.frame >= 4) {
            this.setWait(this.interval*10, this.hide);
        }
    },
    
    hide: function() {
        if (this.time % this.interval == 0) {
            this.frame -= 1;
        }
        
        if (this.frame <= 0) {
            this.setWait(Math.random()*200, this.appear);
            this.changeType();
        }
    },
    
    damage: function() {

if(this.time%20==0){
this.image = game.assets[DAMAGE];
this.tl.moveBy(0, -10, 10)
this.tl.moveBy(0, 10, 10)
}


if (this.time > 30) {

            this.frame = 0;
            this.setWait(Math.random()*200, this.appear);
            this.changeType();

        }
    },
    
    wait: function() {
        if (this.time > this.waitTime) {
            this.onenterframe = this.nextFunc;
        }
    },
    
    setWait: function(waitTime, nextFunc) {
        this.onenterframe   = this.wait;
        this.time           = 0;
        this.nextFunc       = nextFunc;
        this.waitTime       = waitTime;
    },
    
    changeType: function() {
        if (Math.floor(Math.random()*16) == 1) {
            this.interval = SUPER_MOGURA_INTERVAL;
            this.image = game.assets[SUPER_MOGURA_IMAGE_NAME];
        }
        else {
            this.interval = MOGURA_INTERVAL;
            this.image = game.assets[MOGURA_IMAGE_NAME];
        }
    }
});
