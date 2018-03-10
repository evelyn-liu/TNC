'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var setPopBlock = function () {
	function setPopBlock() {
		_classCallCheck(this, setPopBlock);

		this.setBlock();
	}

	_createClass(setPopBlock, [{
		key: 'setBlock',
		value: function setBlock() {
			var that = this;
			var returnBtn = document.getElementById('return-img');
			var popBlock = document.getElementsByClassName('popBlock')[0];

			returnBtn.addEventListener('click', function (e) {
				returnBtn.style += ';left:100%;';
				popBlock.style += ';left:115%;';

				document.getElementsByClassName('pop-body')[0].innerHTML = '';
			});

			var home_btn = document.getElementsByClassName('home_more')[0];
			var china_btn = document.getElementsByClassName('china_btn');
			var wd_btn = document.getElementsByClassName('wd_text');

			home_btn.addEventListener('click', function (e) {
				var pid = 1;
				that.getContent(pid);
				that.setDP(returnBtn, popBlock);
			});

			var cl = china_btn.length - 1;

			var _loop = function _loop(i) {
				var pid = i + 2;
				china_btn[i].addEventListener('click', function (e) {
					that.getContent(pid);
					that.setDP(returnBtn, popBlock);
				});
			};

			for (var i = 0; i < cl; i++) {
				_loop(i);
			}

			var wl = wd_btn.length;

			var _loop2 = function _loop2(i) {
				var pid = i + 4;
				wd_btn[i].addEventListener('click', function (e) {
					that.getContent(pid);
					that.setDP(returnBtn, popBlock);
				});
			};

			for (var i = 0; i < wl; i++) {
				_loop2(i);
			}

			var bmore = document.getElementsByClassName('B_more');
			var bm = bmore.length;
			console.log(bmore);

			var _loop3 = function _loop3(i) {
				var pid = i + 9;
				console.log();
				bmore[i].addEventListener('click', function (e) {
					console.log(pid);
					that.getContent(pid);
					that.setDP(returnBtn, popBlock);
				});
			};

			for (var i = 0; i < bm; i++) {
				_loop3(i);
			}
		}
	}, {
		key: 'setDP',
		value: function setDP(returnBtn, popBlock) {
			// returnBtn.style += ';display:block;';
			// popBlock.style += ';display:block;';
			returnBtn.style += ';left:15%;';
			popBlock.style += ';left:35%;';
		}
	}, {
		key: 'getContent',
		value: function getContent(pid) {
			var that = this;
			fetch('http://localhost:3002/server/init?pid=' + pid, {
				method: 'get'
			}).then(function (response) {
				return response.json();
			}).then(function (data) {
				that.setContent(data);
			}).catch(function (error) {
				return console.log('error is', error);
			});
		}
	}, {
		key: 'setContent',
		value: function setContent(data) {
			var ph_span = document.getElementsByClassName('pop-hs')[0];
			var p_b = document.getElementsByClassName('pop-body')[0];
			var treeData = data.treeData;
			// console.log(p_b);
			var pb_h = document.createElement('h1');
			pb_h.className = 'pb_h';
			var pb_img = document.createElement('img');
			pb_img.className = 'pb_img';
			var pb_text = void 0,
			    pb_p = void 0,
			    pb_span = void 0,
			    pb_sh = void 0;
			pb_text = document.createElement('div');
			pb_text.className = 'pb_text';

			var title = treeData.title;
			var img = treeData.img;
			var text = treeData.text;
			// console.log(text);

			ph_span.innerText = title;
			pb_h.innerText = treeData.bodytitle;
			pb_img.src = img;
			var tl = text.length;
			for (var i = 0; i < tl; i++) {
				pb_p = document.createElement('p');
				pb_p.className = 'pb_p';
				pb_span = document.createElement('span');
				pb_span.innerText = text[i].t;
				pb_sh = document.createElement('span');
				pb_sh.className = 'pb_sh';
				pb_sh.innerText = text[i].h;

				pb_p.appendChild(pb_sh);
				pb_p.appendChild(pb_span);
				pb_text.appendChild(pb_p);
			}

			p_b.appendChild(pb_h);
			p_b.appendChild(pb_img);
			p_b.appendChild(pb_text);

			pb_h = null;
		}
	}]);

	return setPopBlock;
}();

new setPopBlock();