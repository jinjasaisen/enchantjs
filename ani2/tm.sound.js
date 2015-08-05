/**
 * phi
 */

var tm = {};

(function(np) {
    
    // モバイル機かどうかの判定フラグ
    var MOBILE_FLAG = (function(){
        var agent = navigator.userAgent;
        return agent.indexOf("iPhone")>0 || agent.indexOf("Android")>0;
    })();
    
    var Sound = {};
    
    /**
     * 
     */
    Sound.list = {};
    
    /**
     * 
     */
    Sound.ext = (function() {
        var ext = "";
        var audio = new Audio();
        if      (audio.canPlayType("audio/ogg") == "maybe") { ext="ogg"; }
        else if (audio.canPlayType("audio/mp3") == "maybe") { ext="mp3"; }
        else if (audio.canPlayType("audio/wav") == "maybe") { ext="wav"; }
        
        return ext;
    })();
    
    /**
     * 
     */
    Sound.load = function(name, key) {
        if (MOBILE_FLAG === true) return ;
        
        key = key || name;
        
        var path  = name + "." + Sound.ext;
        var audio = new Audio(path);
        Sound.list[key] = audio;
    };
    
    /**
     * 
     */
    Sound.play = function(name, volume) {
        if (MOBILE_FLAG === true) return ;
        
        Sound.list[name].volume = volume || 0.5;
        Sound.list[name].play();
        
        Sound.list[name] = new Audio( Sound.list[name].src );
    };
    
    // ネームスペースに追加
    np.Sound = Sound;
    
})(tm);
