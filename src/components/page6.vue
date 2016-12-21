<template>
    <div class="swiper-slide single-page">
        <button @click="delCookie">清楚token</button>
        <div id="block" class="block"></div>
    </div>
</template>
<script type="text/javascript">
    // 引入工具函数
    import utils from "util";

    import * as actions from 'data/actions';
    import Tween from 'assets/libjs/tweenAnimation';
    export default {
        data() {
            return {
                token: "", // token
                result: {}, // 后端返回的数据
                awardObj: {} // 获奖情况数据对象
            }
        },
        vuex: {
            actions
        },
        events: {
            // 抽奖
            lottery() {
                let thisVm = this;
                let url = "http://makerh5.com:1227/lottery";
                // let url = "http://localhost:1227/lottery";
                $.get(url, (res) => {
                    console.info(res);
                    thisVm.result = res.result;
                    thisVm.token = res.token;
                    // 设置已抽奖token
                    utils.setCookie("ironMan_token", res.token);
                });
                console.log("请求的链接：%c %s", "color: #eb5e18", url);
            },
            // 抽奖结果展示
            showLotteryResult() {
                if (this.result.status === 1) {
                    console.log("未中奖");
                    return;
                }
                if (this.result.status === 2) {
                    console.log(`恭喜你中奖了！奖品为${this.result.award.award}`);
                    return;
                }
            }
        },
        methods: {
            delCookie() {
                utils.delCookie("ironMan_token");
            }
        },
        computed: {
            // 转盘角度偏差
            resultRegs() {
                let regs = 0;
                let result = this.result;
                // 未中奖
                if (result.status === 1) {
                    reges = 0;
                }
                if (result.status === 2) {
                    // 通行证
                    if (result.award.awardType === 1) {
                        regs = 30;
                    } else {
                        regs = 210;
                    }
                }
                return regs;
            }
        },
        ready() {
            let thisVm = this;
            // 页面函数队列
            this.pushFuncs((container, swiper, _this) => {
                console.log("004");
            })

            console.warn("tweenjs");

            // 抽奖 旋转
            $(".block").on("click", function () {
                // 判断是否已抽奖
                let token = utils.getCookie("ironMan_token");
                if (!!token && token.length > 0) {
                    console.log("对不起，您已抽过奖。");
                    return;
                }
                // 抽奖
                thisVm.$emit("lottery");
                var _el = $(this);
                _el.unbind();
                Tween(0, 2880, 5000, "Quart.easeIn", function (value, isEnding) {
                    _el.css({
                        "transform": "rotate(" + value + "deg)"
                    });

                    if (isEnding) {
                        console.log("thisVm.resultRegs", thisVm.resultRegs);
                        Tween(0, 3600 + thisVm.resultRegs, 6000, "Quart.easeOut", function (value, isEnding) {
                            _el.css({
                                "transform": "rotate(" + value + "deg)"
                            });

                            if (isEnding) {
                                // 显示抽奖结果
                                thisVm.$emit("showLotteryResult");
                            }

                        });
                    }
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
