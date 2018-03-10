'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollTarget = function () {
    function ScrollTarget(arr) {
        _classCallCheck(this, ScrollTarget);

        this.arr = arr;
        this.index = 0;
        this.init();
    }

    _createClass(ScrollTarget, [{
        key: 'init',
        value: function init() {
            window.onmousewheel = document.onmousewheel = this.scrollHandle.bind(this);
        }
    }, {
        key: 'scrollHandle',
        value: function scrollHandle(event) {
            var e = event || window.event;
            var scrollNum = null;
            if (e && e.stopPropagation) {
                //非IE 
                e.stopPropagation();
            } else {
                //IE 
                window.event.cancelBubble = true;
            }
            if (e.wheelDelta) {
                scrollNum = e.wheelDelta;
                console.log(scrollNum);
                this.handleScroll(scrollNum);
            } else if (e.detail) {
                scrollNum = e.detail;
                console.log(scrollNum);
                this.handleScroll(scrollNum);
            }
        }
    }, {
        key: 'handleScroll',
        value: function handleScroll(num) {
            if (num < 0) {
                console.log('向下滚动');
                if (this.index === 0) {
                    this.index = 1;
                    this.arr.eq(this.index).addClass('current');
                    // this.arr.eq(this.index).animate({
                    //     top: this.arr.eq(this.index).offset().top-100 +"px"
                    // },0);
                    // this.arr.eq(this.index-1).animate({
                    //     top: this.arr.eq(this.index).offset().top-50 +"px"
                    // },0);
                    // if(this.arr.eq(this.index).offset().top<=400){
                    //     this.arr.eq(this.index).animate({
                    //         top: 0
                    //     },0);
                    //     this.arr.eq(this.index-1).animate({
                    //         top: "-20%"
                    //     },0);
                    // }
                } else if (this.index >= this.arr.length) {
                    // this.index = this.arr.length-1;
                } else {
                        // this.arr.eq(this.index).animate({
                        //     top: this.arr.eq(this.index).offset().top-100 +"px"
                        // },0);
                        // if(this.arr.eq(this.index).offset().top<=400){
                        //     this.arr.eq(this.index).animate({
                        //         top: 0
                        //     },0);
                        //     this.arr.eq(this.index-1).animate({
                        //         top: "-18%"
                        //     },0);
                        //     this.index++;
                        // }

                    }
            } else {
                console.log("向上滚动");
                // if(this.index<0){
                //     this.index = 0;
                // }else if(this.index>=this.arr.length){
                //     this.index = this.arr.length-1;
                // }else{
                //     if(this.arr.eq(this.index).offset().top>=600){
                //         this.arr.eq(this.index).animate({
                //             top: "100%"
                //         },0);
                //         this.arr.eq(this.index-1).animate({
                //             top: 0
                //         },0);
                //         this.index--;
                //         this.arr.eq(this.index-1).animate({
                //             top: 0
                //         },0);
                //     }else{
                //         this.arr.eq(this.index).animate({
                //             top: this.arr.eq(this.index).offset().top + 100 +"px"
                //         },0);
                //     }

                // }
            }
        }
    }]);

    return ScrollTarget;
}();

var view = $('.view');
var mode = new ScrollTarget(view);