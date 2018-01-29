'use strict';

var addMouseWheelHandler = function addMouseWheelHandler() {
    if (document.addEventListener) {
        document.addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper  
        document.addEventListener('wheel', MouseWheelHandler, false); //Firefox  
        document.addEventListener('DOMMouseScroll', MouseWheelHandler, false); //Old Firefox  
    } else {
        document.attachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8  
    }
},
    removeMouseWheelHandler = function removeMouseWheelHandler() {
    if (document.addEventListener) {
        document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper  
        document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox  
        document.removeEventListener('DOMMouseScroll', MouseWheelHandler, false); //old Firefox  
    } else {
        document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8  
    }
},
    stopDefault = function stopDefault(e) {
    //W3C  
    if (e && e.preventDefault) e.preventDefault();
    //IE   
    else window.event.returnValue = false;
    return false;
},
    MouseWheelHandler = function MouseWheelHandler(e) {
    //滚动后的处理函数  
    //   stopDefault(e);
    //   console.log(e)
    var e = e || window.event,
        value = e.wheelDelta || -e.deltaY || -e.detail,
        delta = Math.max(-1, Math.min(1, value));
    var section = document.getElementsByClassName('view');
    var len = section.length;
    var current = document.getElementsByClassName('current')[0];
    var index = parseInt(current.attributes[2].value);
    if (delta < 0) {
        if (index < len - 1) {
            // section[index].style.top = '-50%';
            // section[index+1].style.top = '-100%';
        }
    } else if (delta > 0) {
        console.log(value);
    }

    //将animate 改掉， speed 为1%  每次变化10%  做判断 当top >-50%时,top每次减小10%；

};

//调用  
addMouseWheelHandler();