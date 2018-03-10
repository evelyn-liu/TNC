'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var detailsClick = function () {
    function detailsClick() {
        _classCallCheck(this, detailsClick);

        this.setClick();
    }

    _createClass(detailsClick, [{
        key: 'setClick',
        value: function setClick() {
            var click_a = document.getElementsByClassName('a_btn');
            var len = click_a.length;

            var _loop = function _loop(i) {
                click_a[i].addEventListener('click', function (e) {
                    var pid = i + 11;
                    click_a[i].href = 'http://localhost:3000/tnc/dist/html/details.html?pid=' + pid;
                    console.log(click_a[i]);
                });
            };

            for (var i = 4; i < len; i++) {
                _loop(i);
            }
        }
    }]);

    return detailsClick;
}();

new detailsClick();