let funcs = {}
//写cookies
funcs.setCookie = (name, value, time) => {
	var Days = time || 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	// console.log(name + "="+ escape (value) + ";expires=" + exp.toGMTString());
}
// 读取cookie
funcs.getCookie = (name) => {
	var arr,
		reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)){
		return unescape(arr[2]);
	} else {
		return null;
	}
}
// 删除cookie
funcs.delCookie = (name) => {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = funcs.getCookie(name);
	if (cval != null) {
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	}
}

// 图片加载进度
funcs.imagesProcessLoad = (fn) => {
	var imgs = document.getElementsByTagName("img");
	var imgsLength = imgs.length;
	var srcs = [];
	var image = new Image();
	var index = 0;
	var isEnded = false;
	var processValue = 0;
	let loadImages = () => {
		image.src = imgs[index].getAttribute("src");
		// console.log("imgs[index]", imgs[index]);
		image.onload = () => {
			// console.log("已加载图片：", index);
			index++;
			processValue = Math.floor((index/imgsLength) * 100);
			if (index < imgsLength) {
				loadImages();
			} else {
				// console.log("完成加载");
				isEnded = true;
			}
			typeof fn === "function" && fn(processValue, isEnded, index, imgsLength);
		}
	}

	loadImages();
	// for(let i = 0; i < imgsLength; i++) {
	// 	let link = imgs[i].getAttribute("src");
	// 	srcs.push(link);
	// }
}

module.exports = funcs;
