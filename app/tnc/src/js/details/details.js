class setDetails {
    constructor() {
        this.setClick();
    }
    setClick() {
        let pid = window.location.href.split("=")[1];
        let that = this;
        console.log(pid)

        fetch(`http://localhost:3002/server/init?pid=${pid}`, {
                method: 'get',
            })
            .then(response => response.json())
            .then(data => {
                that.setData(data);
            })
            .catch(error => console.log('error is', error));
    }
    setData(data) {
        let that = this;
        let tdata = data.treeData;
        let backImg = document.getElementsByClassName('ci_img')[0];
        let cb_left = document.getElementsByClassName('cb_left')[0];
        backImg.src = tdata.img;
        let content =  tdata.contentLeft;
        console.log(content);

        let c_body = document.createElement('div');
        let dh ;
        // console.log(dh);
        let h1,h2,h3,bc_img,b_c,dhb_p,dhb_span;  
        
        for(let i=0,cl=content.length;i<cl;i++){
            dh = content[i].h;
            let dh_div = document.createElement('div')
            h1 = document.createElement('h1');
            h1.className = 'title';
            h1.innerText = content[i].title;

            h2 = document.createElement('h1');
            h2.className = 'lt';
            h2.innerText = content[i].lt;

            bc_img = document.createElement('img');
            bc_img.className = 'bc_img';
            bc_img.src = content[i].img;

            b_c = document.createElement('div');
            b_c.className = 'b_c';
            that.setDH(dh,h3,dh_div,dhb_p,dhb_span);

            b_c.appendChild(h1);
            b_c.appendChild(h2);
            b_c.appendChild(bc_img);
            b_c.appendChild(dh_div)
            c_body.appendChild(b_c);
        }
        
        cb_left.appendChild(c_body)

    }
    setDH(dh,h3,dh_div,dhb_p,dhb_span){
        let that = this;
        for(let j = 0,dl=dh.length;j<dl;j++){
            h3 = document.createElement('h1');
            h3.className = 'lt';
            h3.innerText = dh[j].a;    
            let dhb = dh[j].b;
            dh_div.appendChild(h3);
            that.setDHB(dhb,dhb_p,dhb_span,dh_div);           
        }
    }
    setDHB(dhb,dhb_p,dhb_span,dh_div){
        for(let k =0,bl=dhb.length;k<bl;k++){
            dhb_span = document.createElement('span');
            dhb_span.innerText =  dhb[k];
            dhb_p =document.createElement('p');
            dhb_p.appendChild(dhb_span);
            dh_div.appendChild(dhb_p);

        }

    }

}

new setDetails();