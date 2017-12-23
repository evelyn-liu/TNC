
class setWorld  {
    constructor() {
        // super();
        this.setWorldHover();
    }
    setWorldHover() {          
        let worldSpan = document.getElementsByClassName('wd_text');
        let worldIcon = document.getElementsByClassName('wd_icon');
        let sLen = worldSpan.length;
        let iLen = worldIcon.length; 
        let that = this;

        for (let i = 0; i < sLen; i++) {
            worldSpan[i].addEventListener('mouseover',function(e){
                that.setOver(e);
            },false);
            worldSpan[i].addEventListener('mouseleave',function(e){
                that.setLeave(e);
            },false);
        }
        for (let j = 0; j < iLen; j++) {
            worldIcon[j].addEventListener('mouseover',function(e){
                that.setOver(e);
            },false);
            worldIcon[j].addEventListener('mouseleave',function(e){
                that.setLeave(e);
            },false);
        }  
        let mapDiv  = document.getElementsByClassName('map_div');
        for(let k =0,len = mapDiv.length;k<len;k++){
            mapDiv[k].addEventListener('mouseover',function(e){
                that.setOver(e);
            },false)
            mapDiv[k].addEventListener('mouseleave',function(e){
                that.setLeave(e);
            },false)
        }
        

    }
    setOver(e) {
            let parent = e.path[1];
            let that = this;
            // console.log(parent);
            let circle = parent.getElementsByTagName('div');
            circle[0].style +=';opacity:1;';
            let span = parent.getElementsByTagName('span');
            for(let oi= 1,olen =circle.length;oi<olen;oi++ ){
               circle[oi].style.transform ='scale(0)';
               circle[oi].onmousemove = function(e){
                that.setOver(e);
               }
            }
    }
    setLeave(e){
        let parent = e.path[1];
        let circle = parent.getElementsByTagName('div');
        circle[0].style +=';opacity:0;';
        let span = parent.getElementsByTagName('span');
        for(let oi= 1,olen =circle.length;oi<olen;oi++ ){
        circle[oi].style.transform ='scale(1)';
        }
    }


}

let sw = new setWorld();
  