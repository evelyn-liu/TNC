'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var setWorld = function () {
    function setWorld() {
        _classCallCheck(this, setWorld);

        // super();
        this.setWorldHover();
    }

    _createClass(setWorld, [{
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
            var parent = e.path[1];
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
            var parent = e.path[1];
            var circle = parent.getElementsByTagName('div');
            circle[0].style += ';opacity:0;';
            var span = parent.getElementsByTagName('span');
            for (var oi = 1, olen = circle.length; oi < olen; oi++) {
                circle[oi].style.transform = 'scale(1)';
            }
        }
    }]);

    return setWorld;
}();

var sw = new setWorld();