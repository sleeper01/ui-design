var APP = function(){
    var _resizeHandlers = [];
    var _runResizeHandlers = function() {
        for (var i = 0; i < _resizeHandlers.length; i++) {
            var each = _resizeHandlers[i];
            each.call();
        }
    };
    var handleOnResize = function() {
        var resize;
        $(window).resize(function() {
            if (resize) {
                clearTimeout(resize);
            }
            resize = setTimeout(function() {
                _runResizeHandlers();
            }, 50); // wait 50ms until window resize finishes.
        });
    };
    var addResizeHandler = function(func){
        _resizeHandlers.push(func);
    };
    return {
        init : function(){
            handleOnResize();
        },
        addResizeHandler: function(func) {
            addResizeHandler(func);
        },
    };
}();
