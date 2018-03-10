let navSub = document.getElementsByClassName('nav_sub');
for (var i = 0, len = navSub.length; i < len - 3; i++) {
    let navUl = navSub[i].lastElementChild;
    let navLi = navUl.children;
    setLi(navLi, navUl);

};

function setLi(navLi, navUl) {
    let le = navLi.length;
    for (let j = 0; j < le; j++) {
        let delay = 0.2 * j;
        navLi[j].style = 'animation:move 0.2s ease forwards;animation-delay:' + delay + 's;display:block;opacity:0';
    }
};

