class setContent{
    //通过wd_text 和 wd_icon 的 onmouseover 控制circle 和 map_div;
    //循环遍历 span 和 img 
   setHover(){

   }
}

class setWorld extends setContent{
    constructor(){
        super();
        this.sethh();
    }
    sethh(){
        let worldSpan = document.getElementsByClassName('wd_text');
        worldSpan.onmouseover = setHover();
    }
    
     
}
