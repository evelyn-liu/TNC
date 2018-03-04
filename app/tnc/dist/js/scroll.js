class ScrollTarget {
    constructor(arr) {
        this.arr = arr;
        this.index = 0;
        this.init();
    }
    init() {
        window.onmousewheel = document.onmousewheel = this.scrollHandle.bind(this);
    }
    scrollHandle(event) {
        let e = event || window.event;
        let scrollNum = null;
        if (e && e.stopPropagation) { //非IE 
            e.stopPropagation();
        } else { //IE 
            window.event.cancelBubble = true;
        }
        if (e.wheelDelta) {
            scrollNum = e.wheelDelta;
            this.handleScroll(scrollNum);
        } else if (e.detail) {
            scrollNum = e.detail;
            this.handleScroll(scrollNum);
        }
    }
    handleScroll(num) {
        if (num < 0) {
            console.log('向下滚动');
            if(this.index===0){
                this.index=1;
                this.arr.eq(this.index).animate({
                    top: this.arr.eq(this.index).offset().top-100 +"px"
                },0);
                // this.arr.eq(this.index-1).animate({
                //     top: this.arr.eq(this.index).offset().top-50 +"px"
                // },0);
                if(this.arr.eq(this.index).offset().top<=400){
                    this.arr.eq(this.index).animate({
                        top: 0
                    },0);
                    this.arr.eq(this.index-1).animate({
                        top: "-20%"
                    },0);
                }
            }else if(this.index>=this.arr.length){
                this.index = this.arr.length-1;
            }else {
                this.arr.eq(this.index).animate({
                    top: this.arr.eq(this.index).offset().top-100 +"px"
                },0);
                if(this.arr.eq(this.index).offset().top<=400){
                    this.arr.eq(this.index).animate({
                        top: 0
                    },0);
                    this.arr.eq(this.index-1).animate({
                        top: "-20%"
                    },0);
                    this.index++;
                }

            }

        } else {
            console.log("向上滚动");
            if(this.index<0){
                this.index = 0;
            }else if(this.index>=this.arr.length){
                this.index = this.arr.length-1;
            }else{
                if(this.arr.eq(this.index).offset().top>=600){
                    this.arr.eq(this.index).animate({
                        top: "100%"
                    },0);
                    this.arr.eq(this.index-1).animate({
                        top: 0
                    },0);
                    this.index--;
                    this.arr.eq(this.index-1).animate({
                        top: 0
                    },0);
                }else{
                    this.arr.eq(this.index).animate({
                        top: this.arr.eq(this.index).offset().top + 100 +"px"
                    },0);
                }
                
            }
        }
    }

}
let view = $('.view');
let mode = new ScrollTarget(view);