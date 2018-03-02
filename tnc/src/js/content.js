class setContent {
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
            worldSpan[i].addEventListener('mouseover', function (e) {
                that.setOver(e);
            }, false);
            worldSpan[i].addEventListener('mouseleave', function (e) {
                that.setLeave(e);
            }, false);
        }
        for (let j = 0; j < iLen; j++) {
            worldIcon[j].addEventListener('mouseover', function (e) {
                that.setOver(e);
            }, false);
            worldIcon[j].addEventListener('mouseleave', function (e) {
                that.setLeave(e);
            }, false);
        }
        let mapDiv = document.getElementsByClassName('map_div');
        for (let k = 0, len = mapDiv.length; k < len; k++) {
            mapDiv[k].addEventListener('mouseover', function (e) {
                that.setOver(e);
            }, false)
            mapDiv[k].addEventListener('mouseleave', function (e) {
                that.setLeave(e);
            }, false)
        }



    }
    setOver(e) {

        let parent = e.target.parentNode;
        let that = this;
        // console.log(parent);
        let circle = parent.getElementsByTagName('div');
        circle[0].style += ';opacity:1;';
        let span = parent.getElementsByTagName('span');
        for (let oi = 1, olen = circle.length; oi < olen; oi++) {
            circle[oi].style.transform = 'scale(0)';
            circle[oi].onmousemove = function (e) {
                that.setOver(e);
            }
        }
    }
    setLeave(e) {
        let parent = e.target.parentNode;
        let circle = parent.getElementsByTagName('div');
        circle[0].style += ';opacity:0;';
        let span = parent.getElementsByTagName('span');
        for (let oi = 1, olen = circle.length; oi < olen; oi++) {
            circle[oi].style.transform = 'scale(1)';
        }
    }


}
class setViewList {
    constructor(parent, str, msg) {
        this.parent = parent;
        this.str = str;
        this.msg = msg;
        this.lists = null;
        this.init();
    }
    init() {

        this.lists = this.parent.getElementsByClassName('view_list');
        for (let i = 0, len = this.lists.length; i < len; i++) {
            let list_msg = this.msg[i];
            this.createUl(i, list_msg);
        }
        this.imgAuto();
        // console.log(this.str);
    }
    createUl(i, list_msg) {
        for (let k = 0; k < 3; k++) {
            let viewUl = document.createElement('ul');
            viewUl.className = 'view_ul view_ul_' + k;
            viewUl.setAttribute('data-index', '' + k);
            let ul = 'ul_' + k;
            let ul_msg = list_msg[ul];
            for (let j = 0; j < 4; j++) {
                this.createLi(viewUl, ul_msg[j]);
            }
            this.lists[i].appendChild(viewUl);
        }

    }
    createLi(ul, li_msg) {
        let viewLi = document.createElement('li');
        viewLi.className = 'view_li';

        let viewA = document.createElement('a');
        viewA.className = this.str + '_a  view_a';
        let viewTitle = document.createElement('span');
        viewTitle.innerText = li_msg.title;
        viewTitle.className = this.str + '_title';
        viewA.appendChild(viewTitle);

        let viewImg = document.createElement('div');
        viewImg.className = this.str + '_img';
        let img = document.createElement('img');
        img.src = li_msg.img;
        viewImg.appendChild(img);
        viewA.appendChild(viewImg);

        let viewDate = document.createElement('span');
        viewDate.innerText = li_msg.date;
        viewDate.className = this.str + '_date';
        viewA.appendChild(viewDate);

        let viewText = document.createElement('div');
        viewText.className = this.str + '_text  view_text';
        viewA.appendChild(viewText)
        viewLi.appendChild(viewA);
        ul.appendChild(viewLi);
    }

    imgAuto() {
        // console.log(this.parent)
        let leftBtn = this.parent.getElementsByClassName('B_left');
        let rightBtn = this.parent.getElementsByClassName('B_right');
        let ll = leftBtn.length;
        let lr = rightBtn.length;
        let that = this;
        for (let i = 0; i < ll; i++) {
            let oContent = this.parent.getElementsByClassName('view_content');
            that.linkAuto(i,oContent); 
            let oItems = oContent[i].getElementsByClassName('view_ul');
            leftBtn[i].addEventListener('click', function (e) {
                for (let j = 0; j < oItems.length; j++) {
                    var index = +oItems[j].getAttribute('data-index');
                    oItems[j].classList.remove('view_ul_' + index);
                    index === 2 ? (index = 0) : (index++)
                    oItems[j].setAttribute('data-index', index)
                    oItems[j].classList.add('view_ul_' + index)
                }

            })
            rightBtn[i].addEventListener('click', function (e) {
                for (let j = 0; j < oItems.length; j++) {
                    var index = +oItems[j].getAttribute('data-index');
                    oItems[j].classList.remove('view_ul_' + index);
                    index === 0 ? (index = 2) : (index--)
                    oItems[j].setAttribute('data-index', index)
                    oItems[j].classList.add('view_ul_' + index)
                }
            })
        }
    }
    linkAuto(i,oContent){
        let oLink = this.parent.getElementsByClassName('foot_link')[i];
        let cursor = this.parent.getElementsByClassName('foot_cursor');
        oLink.addEventListener('click', function (e) {
            let index = i;
            cursor[index].style = 'opacity:1;';
            oContent[index].style = 'display:block';
            let len = cursor.length - 1;
            for(let i =0;i<len;i++){
                index === cursor.length-1 ? (index = 0) : (index++);
                oContent[index].style = 'display:none';
            }    
        })
        oLink.addEventListener('mouseover',function(e){
            let index = i;
            cursor[index].style = 'opacity:1;';
        })
        oLink.addEventListener('mouseout',function(e){
            let index = i;
            cursor[index].style = 'opacity:0;';
        })
    }
}

new setContent();
let news_parent = document.getElementById('news');
let sv = new setViewList(news_parent, 'news', news_msg);
 new setContent();
let interactive_parent = document.getElementById('interactive');
let ip = new setViewList(interactive_parent,'interactive',interactive_msg);