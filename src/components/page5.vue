<template>
    <div class="swiper-slide single-page">
        <div id="block" class="block"></div>
    </div>
</template>
<script type="text/javascript">
    import * as actions from 'data/actions'
    import Tween from 'assets/js/tweenAnimation'
    export default {
        vuex: {
            actions
        },
        ready() {
            // 页面函数队列
            this.pushFuncs(() => {
                console.log("004");
            })

            $(function () {
            	console.log(Tween);
                // 旋转
            	$(".block").on("click", function () {
            		var _el = $(this);
                    _el.unbind();
                    console.log("004");
            		Tween(0, 1440, 3000, "Quart.easeIn", function (value, isEnding) {
            			console.log(value);
            			_el.css({
            				"transform": "rotate(" + value + "deg)"
            			});

            			if (isEnding) {
            				Tween(0, 1800, 8000, "Quart.easeOut", function (value, isEnding) {
            					console.log(value);
            					_el.css({
            						"transform": "rotate(" + value + "deg)"
            					});

            				});
            			}
            		});
            	});
            });
        }
    }
</script>
<style lang="less" media="screen" scoped>
    @import "~swiper/src/less/swiper.less";

    .block {
        @w: 200px;
        position: absolute;
        top: 300px;
        left: 50%;

        width: @w;
        height: @w;
        margin: 0 -@w/2;
        background: #f55555;

        -webkit-tap-highlight-color:rgba(0,0,0,0);

    }
</style>
