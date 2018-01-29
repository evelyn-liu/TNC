'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var setContent = function () {
    function setContent() {
        _classCallCheck(this, setContent);

        // super();
        this.setWorldHover();
    }

    _createClass(setContent, [{
        key: 'setWorldHover',
        value: function setWorldHover() {
            var worldSpan = document.getElementsByClassName('wd_text');
            var worldIcon = document.getElementsByClassName('wd_icon');
            var sLen = worldSpan.length;
            var iLen = worldIcon.length;
            var that = this;

            for (var i = 0; i < sLen; i++) {
                worldSpan[i].addEventListener('mouseover', function (e) {
                    that.setOver(e);
                }, false);
                worldSpan[i].addEventListener('mouseleave', function (e) {
                    that.setLeave(e);
                }, false);
            }
            for (var j = 0; j < iLen; j++) {
                worldIcon[j].addEventListener('mouseover', function (e) {
                    that.setOver(e);
                }, false);
                worldIcon[j].addEventListener('mouseleave', function (e) {
                    that.setLeave(e);
                }, false);
            }
            var mapDiv = document.getElementsByClassName('map_div');
            for (var k = 0, len = mapDiv.length; k < len; k++) {
                mapDiv[k].addEventListener('mouseover', function (e) {
                    that.setOver(e);
                }, false);
                mapDiv[k].addEventListener('mouseleave', function (e) {
                    that.setLeave(e);
                }, false);
            }
        }
    }, {
        key: 'setOver',
        value: function setOver(e) {

            var parent = e.target.parentNode;
            var that = this;
            // console.log(parent);
            var circle = parent.getElementsByTagName('div');
            circle[0].style += ';opacity:1;';
            var span = parent.getElementsByTagName('span');
            for (var oi = 1, olen = circle.length; oi < olen; oi++) {
                circle[oi].style.transform = 'scale(0)';
                circle[oi].onmousemove = function (e) {
                    that.setOver(e);
                };
            }
        }
    }, {
        key: 'setLeave',
        value: function setLeave(e) {
            var parent = e.target.parentNode;
            var circle = parent.getElementsByTagName('div');
            circle[0].style += ';opacity:0;';
            var span = parent.getElementsByTagName('span');
            for (var oi = 1, olen = circle.length; oi < olen; oi++) {
                circle[oi].style.transform = 'scale(1)';
            }
        }
    }]);

    return setContent;
}();

var setViewList = function () {
    function setViewList(parent, str) {
        _classCallCheck(this, setViewList);

        this.parent = parent;
        this.str = str;
        this.lists = null;
        this.init();
    }

    _createClass(setViewList, [{
        key: 'init',
        value: function init() {

            this.lists = this.parent.getElementsByClassName('view_list');
            for (var i = 0, len = this.lists.length; i < len; i++) {
                this.createUl(i);
            }
            // console.log(this.str);
        }
    }, {
        key: 'createUl',
        value: function createUl(i) {
            for (var k = 0; k < 3; k++) {
                var viewUl = document.createElement('ul');
                viewUl.className = 'view_ul';
                for (var j = 0; j < 4; j++) {
                    this.createLi(viewUl);
                }
                this.lists[i].appendChild(viewUl);
            }
        }
    }, {
        key: 'createLi',
        value: function createLi(ul) {
            var viewLi = document.createElement('li');
            viewLi.className = 'view_li';

            var viewA = document.createElement('a');
            viewA.className = this.str + '_a  view_a';
            var viewTitle = document.createElement('span');
            viewTitle.className = this.str + '_title';
            viewA.appendChild(viewTitle);

            var viewImg = document.createElement('div');
            viewImg.className = this.str + '_img';
            var img = document.createElement('img');
            viewImg.appendChild(img);
            viewA.appendChild(viewImg);

            var viewDate = document.createElement('span');
            viewDate.className = this.str + '_date';
            viewA.appendChild(viewDate);

            var viewText = document.createElement('div');
            viewText.className = this.str + '_text  view_text';
            viewA.appendChild(viewText);
            viewLi.appendChild(viewA);
            ul.appendChild(viewLi);
        }
    }]);

    return setViewList;
}();

var sc = new setContent();
var news_parent = document.getElementById('news');
var sv = new setViewList(news_parent, 'news');