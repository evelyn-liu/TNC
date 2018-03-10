'use strict';

var navSub = document.getElementsByClassName('nav_sub');
for (var i = 0, len = navSub.length; i < len - 3; i++) {
    var navUl = navSub[i].lastElementChild;
    var navLi = navUl.children;
    setLi(navLi, navUl);
};

function setLi(navLi, navUl) {
    var le = navLi.length;
    for (var j = 0; j < le; j++) {
        var delay = 0.2 * j;
        navLi[j].style = 'animation:move 0.2s ease forwards;animation-delay:' + delay + 's;display:block;opacity:0';
    }
};