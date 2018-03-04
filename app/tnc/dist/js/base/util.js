'use strict';

function mouseWheel() {

    if (document.addEventListener) {

        document.body.addEventListener('mousewheel', function (e) {
            Detail(e);
            e.stopPropagation();
            e.preventDefalut();
        });

        document.body.addEventListener('DOMMouseScroll', function (e) {
            Detail(e);
            e.stopPropagation();
            e.preventDefault();
        });
    } else {
        document.body.attachEvent('onmousewheel', function (event) {
            Detail(event);
            event.cancelBubble = true;
            event.returnValue = false;
        });
    }

    function Detail(e) {
        (-e.detail || e.wheelDelta) > 0 ? alert('top') : alert('down');
    }
}

var EventUtil = {
    //事件绑定
    addHandler: function addHandler(element, type, handler) {
        if (element.addEventListener) {
            //标准浏览器 
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            //非标准浏览器ie
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    //解除绑定
    removeHandler: function removeHandler(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    //获得事件
    getEvent: function getEvent(event) {
        return event ? event : window.event;
    },
    //获得目标元素
    getTarget: function getTarget(event) {
        return event.target || event.srcElement; //srcElement是ie中事件目标
    },
    //阻止默认行为
    preventDedault: function preventDedault(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    //阻止冒泡、事件传播
    stopPropagation: function stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        } //cancelBubble,默认值为false,但将其设置为true就可以取消事件冒泡
    }

};