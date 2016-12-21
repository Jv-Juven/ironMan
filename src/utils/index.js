//写cookies
exports.setCookie = (name, value, time) => {
	var Days = time || 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	console.log(name + "="+ escape (value) + ";expires=" + exp.toGMTString());
}
// 读取cookie
exports.getCookie = (name) => {
	var arr,
		reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)){
		return unescape(arr[2]);
	} else {
		return null;
	}
}
// 删除cookie
exports.delCookie = (name) => {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null) {
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	}
}
