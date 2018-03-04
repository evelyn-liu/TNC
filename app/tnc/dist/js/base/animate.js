'use strict';

function animate_hc(obj, json, fn) {
	var iCurrent = 0; //目标属性的当前值
	//如果timer存在，就把它清除掉，为什么？防止重复创建定时器
	function getComputedStyleValue(obj, prop) {
		var value = '';

		if (window.getComputedStyle) {
			value = getComputedStyle(obj)[prop];
		} else {
			value = obj.currentStyle[prop];
		}
		return value;
	};
	if (obj.timer) {
		clearInterval(obj.timer);
	}

	//只有所有的样式值都已经变化到目标点，才能关闭定时器
	obj.timer = setInterval(function () {
		for (var styleName in json) {
			var iSpeed = 100; //速度

			//将样式是否非opacity区分
			var page = {
				w: 0,
				h: 0
			};
			if (document.compatMode == 'BackCompat') {
				page.w = Math.max(document.body.clientWidth, document.documentElement.scrollWidth);
				page.h = Math.max(document.body.clientHeight, document.documentElement.scrollHeight);
			} else {
				page.w = Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth);
				page.h = Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight);
			}

			iCurrent = parseInt(getComputedStyleValue(obj, styleName));
			//获取新的临时速度，根据速度的正负决定使用不同的取整的方法
			iSpeed = 0.1 * page.h;
			if (iSpeed > 0) {
				iSpeed = Math.ceil(iSpeed);
			} else {
				iSpeed = Math.floor(iSpeed);
			}
			//						console.log(iCurrent,iTarget,iSpeed);
			if (iCurrent >= json[styleName] && iSpeed > 0 || iCurrent <= json[styleName] && iSpeed < 0) {
				//停止定时器
				delete json[styleName];
			} else {
				//动画修改样式
				if (iCurrent + iSpeed > json[styleName] && iSpeed > 0 || iCurrent + iSpeed < json[styleName] && iSpeed < 0) {
					obj.style[styleName] = json[styleName] + 'px';
				} else {
					obj.style[styleName] = iCurrent + iSpeed + 'px';
				}
			}
		}
		//如果所有的属性都达到终点，iContinue是false
		//Object.getOwnPropertyNames(json).length获取json对象的属性名称数组的长度，如果长度为0，说明定时器可以关掉了
		var DONT_ENUM = "propertyIsEnumerable,isPrototypeOf,hasOwnProperty,toLocaleString,toString,valueOf,constructor".split(","),
		    hasOwn = {}.hasOwnProperty;
		for (var i in {
			toString: 1
		}) {
			DONT_ENUM = false;
		};
		if (!Object.keys(json).length) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}
	}, 30);
}