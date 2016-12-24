<template>
    <div class="swiper-slide swiper-no-swiping single-page">
        <!-- 背景 -->
        <img class="full-width" src="../../static/images/page6/lottery_bg.jpg" alt=""></img>
        <img class="rotating toothed toothed-a" src="../../static/images/page6/toothed.png" alt="">
        <img class="rotating toothed toothed-b" src="../../static/images/page6/toothed.png" alt="">
        <img class="scale-screen" src="../../static/images/page6/lottery_bg_mask.png" alt=""></img>
        <!-- 圆盘组合 -->
        <img class="plate-combo full-width" src="../../static/images/page6/black_circle.png" alt="">
        <img class="plate-combo full-width" src="../../static/images/page6/break_circle.png" alt="">
        <img class="plate-combo full-width alternate-flash point-flash-a" src="../../static/images/page6/points_deep.png" alt="">
        <img class="plate-combo full-width alternate-flash point-flash-b" src="../../static/images/page6/points_shallow.png" alt="">
        <img class="turn-plate turn-plate-c" src="../../static/images/page6/turnplate.png" alt="">
        <img class="plate-combo full-width" src="../../static/images/page6/pointer.png" alt="">
        <!-- 字，标语 -->
        <img class="slogan slogan-c" src="../../static/images/page6/lottery_slogan.png" alt="">

        <button @click="delCookie" style="position: absolute;z-index: 999;">清楚token</button>
        <div id="block" class="turn-plate"></div>
    </div>
</template>
<script type="text/javascript">
    // 引入工具函数
    import utils from "util";

    import * as actions from 'data/actions';
    import * as getters from 'data/getters';
    import Tween from 'assets/libjs/tweenAnimation';
    export default {
        data() {
            return {
                token: "", // token
                // result: {}, // 后端返回的数据
                awardObj: {}, // 获奖情况数据对象
                container: {} // swiper实例对象
            }
        },
        vuex: {
            getters,
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
                    thisVm.setLotteryResult(res.result);
                    thisVm.token = res.token;
                    // 设置已抽奖token
                    utils.setCookie("ironMan_token", res.token);
                    utils.setCookie("ironMan_status", thisVm.result.status);
                });
                console.log("请求的链接：%c %s", "color: #eb5e18", url);
            },
            // 抽奖结果展示
            showLotteryResult() {
                this.container.slideNext();
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
                // 随机角度
                let indexArr = [120, 240];
                let index = Math.floor(Math.random() * 2);
                // 未中奖
                if (result.status === 1) {
                    regs = [60, 180, 300][Math.floor(Math.random() * 3)];
                }
                if (result.status === 2) {
                    // 通行证
                    if (result.award.awardType === 1) {
                        regs = 0;
                    } else {
                        regs = indexArr[index];
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
                thisVm.container = swiper;
                $(".slogan-c").show()
                    .addClass("animated bounceInDown");
                setTimeout(() => { $(".slogan-c").removeClass("animated bounceInDown").addClass("floating"); }, 1200);
            })

            // 抽奖 旋转
            $("#block").on("click", function () {
                // 判断是否已抽奖
                let token = utils.getCookie("ironMan_token");
                if (!!token && token.length > 0) {
                    console.log("对不起，您已抽过奖。");
                    thisVm.setIsFirst(false);
                    return;
                }
                // 抽奖
                thisVm.$emit("lottery");
                var _el = $(".turn-plate-c");
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
                                //跳转下一页
                                setTimeout(() => { thisVm.container.slideNext(); }, 2000);
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

    // .block {
    //     @w: 200px;
    //     position: absolute;
    //     top: 300px;
    //     left: 50%;
    //
    //     width: @w;
    //     height: @w;
    //     margin: 0 -@w/2;
    //     background: #f55555;
    //
    //     -webkit-tap-highlight-color:rgba(0,0,0,0);
    //
    // }
    //
    @combo_top: 40px;

    .turn-plate {
        @w: 470px;
        position: absolute;
        top: 142px + @combo_top;
        left: 50%;

        width: @w;
        height: @w;
        margin: 0 -@w/2;

        -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
    .slogan {
        position: absolute;
        top: 760px;
        left: 0;

        width: 100%;
        display: none;

    }
    .plate-combo {
        margin-top: @combo_top;
    }
    .toothed {
        @w: 140px;
        position: absolute;

        width: @w;
    }
    .toothed-a {
        bottom: 140px;
        left: 40px;
    }
    .toothed-b {
        bottom: 34px;
        right: 300px;
    }
    .point-flash-a {
        animation-delay: 1s;
        -webkit-animation-delay: 1s;
    }
</style>
