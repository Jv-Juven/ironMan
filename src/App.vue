<template>
	<div class="body">
		<router-view></router-view>
	</div>
</template>

<script>
	import setwx from "assets/libjs/wxconfig";
	// import Hello from './components/Hello'
	import store from 'data/store';

	export default {
		store,
		created() {
			// 微信头设置
			setwx({
			 	debug: false,
			 	title: "谁是你心中真正的超级英雄? or 边个係你心目中嘅Hero?",
			 	desc: "“铁”粉大召集，神秘人物带你酷炫飞越香港上空!",
			 	imgurl: "http://myteamproject.oss-cn-beijing.aliyuncs.com/hxjj/7-14/06.jpg",
			});
		}
	}
</script>

<style lang="less">
html {
	height: 100%;
}

body {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;

	overflow: hidden;
}


#app {
	width: 100%;
	height: 100%;
	font-family: Source Sans Pro, Helvetica, sans-serif;
}

.body {
	position: relative;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
}
@import "assets/css/animate.css";
@import "assets/css/animations.css";
</style>
