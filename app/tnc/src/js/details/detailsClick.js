class detailsClick{
    constructor(){
        this.setClick();
    }

    setClick(){
        let click_a = document.getElementsByClassName('a_btn');
        let len =click_a.length;
        for(let i =4;i<len;i++){
            click_a[i].addEventListener('click',function(e){
                let pid = i+11;
                click_a[i].href=`http://localhost:3000/tnc/dist/html/details.html?pid=${pid}`
                console.log(click_a[i]);
            })
         
        }
    }
    
}

new detailsClick();