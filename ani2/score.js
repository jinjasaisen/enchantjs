var ScoreLabel = Class.create(Label, {
    initialize: function()    {
        Label.call(this, "SCORE: ");
        this.font = "26px 'Consolas', 'Monaco', 'ＭＳ ゴシック'";
this.color="white";
        this.set(0);

    },
    
    set: function(p)    {
        this.score = p;
        this.refresh();
    },
    
    add: function(p)    {
        this.score += p;
        this.refresh();

    },
    
    refresh: function()    {
        var score_text = this.score+'';
//        while (score_text.length < 4) { score_text = '0'+score_text; }
        this.text = "SCORE:" + score_text;

var locs=localStorage;
locs.name=score_text;
console.log(locs.name);

    }
});
