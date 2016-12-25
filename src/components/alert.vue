<template>
	<div class="scale-screen" v-show="errData.show" transition="alertTransition">
		<div class="scale-screen bg-mask"></div>
		<div class="scale-screen container">
			<div class="wrapper">
				<div class="content-wrapper">
					<div class="content-body">
						{{errData.msg}}
					</div>
					<div class="btn-wrapper" @click="close()">
						我知道了
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// data () {
	// 	return {
	// 		// note: changing this line won't causes changes
	// 		// with hot-reload because the reloaded component
	// 		// preserves its current state and we are modifying
	// 		// its initial state.
	// 		msg: 'Hello World!'
	// 	}
	// },
	props: {
		errData: {
			default: {
				show: true,
				msg: "提示框"
			}
		}
	},
	methods: {
		close() {
			this.errData.show = false;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.bg-mask {
		background: rgba(0, 0, 0, .8);
		z-index: 998;
	}
	.container {
		display: table;
		z-index: 998;
		.wrapper {
			display: table-cell;
			vertical-align: middle;
			text-align: center;

		}
		.content-wrapper {
			font-size: 28px; /*px*/

			display: inline-block;
			border-radius: 8px; /*no*/
			background: white;
			overflow: hidden;
		}
		.content-body {
			// font-size: 28px; /*px*/

			padding: 40px 60px;
			max-width: 600px;
			min-width: 340px;
		}
		.btn-wrapper {
			text-align: center;
			color: #d84343;

			border-top: 1px solid rgb(200, 200, 200);
			padding: 26px;
		}
	}
	.alertTransition-transition {
		transition: all .6s ease;
		-webkit-transition: all .6s ease;
		opacity: 1;
	}
	.alertTransition-enter, .alertTransition-leave {
		opacity: 0;
	}

</style>
