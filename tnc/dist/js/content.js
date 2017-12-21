'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var setContent = function () {
    function setContent() {
        _classCallCheck(this, setContent);
    }

    _createClass(setContent, [{
        key: 'setHover',

        //通过wd_text 和 wd_icon 的 onmouseover 控制circle 和 map_div;
        //循环遍历 span 和 img 
        value: function setHover() {}
    }]);

    return setContent;
}();

var setWorld = function (_setContent) {
    _inherits(setWorld, _setContent);

    function setWorld() {
        _classCallCheck(this, setWorld);

        var _this = _possibleConstructorReturn(this, (setWorld.__proto__ || Object.getPrototypeOf(setWorld)).call(this));

        _this.sethh();
        return _this;
    }

    _createClass(setWorld, [{
        key: 'sethh',
        value: function sethh() {
            var worldSpan = document.getElementsByClassName('wd_text');
            worldSpan.onmouseover = setHover();
        }
    }]);

    return setWorld;
}(setContent);