APP.init();
var resize = function(){
    var height = $('body').height(),width=$('body').width();
    if(height<150){
        height = 150;
    }
    if(width < 942){
        width = 942;
    }
    $('#wrapper').css('width',width);
    var _width = width * 0.8375;
    $('#main').css('height',height);
    $('#main').css('width',width * 0.8375);
    $('#sider').css('height',height);
    $('#sider').css('width',width-width * 0.8375);
};
resize();
APP.addResizeHandler(resize);
