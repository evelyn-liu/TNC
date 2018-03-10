'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var setDetails = function () {
    function setDetails() {
        _classCallCheck(this, setDetails);

        this.setClick();
    }

    _createClass(setDetails, [{
        key: 'setClick',
        value: function setClick() {
            var pid = window.location.href.split("=")[1];
            var that = this;
            console.log(pid);

            fetch('http://localhost:3002/server/init?pid=' + pid, {
                method: 'get'
            }).then(function (response) {
                return response.json();
            }).then(function (data) {
                that.setData(data);
            }).catch(function (error) {
                return console.log('error is', error);
            });
        }
    }, {
        key: 'setData',
        value: function setData(data) {
            var that = this;
            var tdata = data.treeData;
            var backImg = document.getElementsByClassName('ci_img')[0];
            var cb_left = document.getElementsByClassName('cb_left')[0];
            backImg.src = tdata.img;
            var content = tdata.contentLeft;
            console.log(content);

            var c_body = document.createElement('div');
            var dh = void 0;
            // console.log(dh);
            var h1 = void 0,
                h2 = void 0,
                h3 = void 0,
                bc_img = void 0,
                b_c = void 0,
                dhb_p = void 0,
                dhb_span = void 0;

            for (var i = 0, cl = content.length; i < cl; i++) {
                dh = content[i].h;
                var dh_div = document.createElement('div');
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
                that.setDH(dh, h3, dh_div, dhb_p, dhb_span);

                b_c.appendChild(h1);
                b_c.appendChild(h2);
                b_c.appendChild(bc_img);
                b_c.appendChild(dh_div);
                c_body.appendChild(b_c);
            }

            cb_left.appendChild(c_body);
        }
    }, {
        key: 'setDH',
        value: function setDH(dh, h3, dh_div, dhb_p, dhb_span) {
            var that = this;
            for (var j = 0, dl = dh.length; j < dl; j++) {
                h3 = document.createElement('h1');
                h3.className = 'lt';
                h3.innerText = dh[j].a;
                var dhb = dh[j].b;
                dh_div.appendChild(h3);
                that.setDHB(dhb, dhb_p, dhb_span, dh_div);
            }
        }
    }, {
        key: 'setDHB',
        value: function setDHB(dhb, dhb_p, dhb_span, dh_div) {
            for (var k = 0, bl = dhb.length; k < bl; k++) {
                dhb_span = document.createElement('span');
                dhb_span.innerText = dhb[k];
                dhb_p = document.createElement('p');
                dhb_p.appendChild(dhb_span);
                dh_div.appendChild(dhb_p);
            }
        }
    }]);

    return setDetails;
}();

new setDetails();