<template>
    <div class="swiper-slide swiper-no-swiping single-page">
        <img class="scale-screen" src="../../static/images/page7/result_bg.jpg" alt="">
        <!-- 中奖 -->
        <img class="display-none full-width input-c" src="../../static/images/page7/inputs.png" alt="">
        <!-- 中奖提示 -->
        <img class="display-none lottery-words award-type-1" src="../../static/images/page7/tongxingzheng_words.png" alt="">
        <img class="display-none lottery-words award-type-2" src="../../static/images/page7/beibao.png" alt="">
        <!-- 已参加提示或未中奖提示 -->
        <img class="display-none lottery-words no-lottery-words" src="../../static/images/page7/no_award_words.png" alt="">
        <img class="display-none lottery-words no-lottery-words" src="../../static/images/page7/already_lottery_words.png" alt="">
        <!-- 中奖输入框 -->
        <input class="display-none input username input-c" type="text" name="name" value="" v-model="username" placeholder="姓名">
        <input class="display-none input phone input-c" type="text" name="name" value="" v-model="phone" placeholder="手机号码">
        <!-- 已中奖 -->
        <img class="display-none botton submit-btn is-award-c" src="../../static/images/page7/submit_btn.png" @click="submitInfo">
        <img class="display-none botton share-btn is-award-c" src="../../static/images/page7/share_btn.png" @click="share">
        <!-- 已参加或未中奖 -->
        <img class="display-none botton share-btn no-award no-award-c" src="../../static/images/page7/share_btn.png" @click="share">
        <img class="display-none botton submit-btn no-award no-award-c" src="../../static/images/page7/restart_btn.png" @click="restart">
        <!-- 分享提示 -->
        <div class="display-none scale-screen share-bg share-tips-c"></div>
        <img class="display-none scale-screen share-tips share-tips-c" src="../../static/images/page7/share_tips.png" alt="">
        <!-- 提示框 -->
        <alert
            :err-data.sync="errData"
        ></alert>
    </div>
</template>
<script type="text/javascript">
    // 引入工具函数
    import utils from "util";
    // vuex
    import * as actions from 'data/actions';
    import * as getters from 'data/getters';
    // 引入组件
    import Alert from "./alert";

    import {
        validate
    } from "assets/app/funcs"
    export default {
        data() {
            return {
                username: "", // 姓名
                phone: "", // 手机号码
                isSubmited: false, // 是否已提交
                errData: {
                    show: false,
                    msg: "错误提示信息"
                } // 错误提示信息
            }
        },
        vuex: {
            actions,
            getters
        },
        components: {
            Alert
        },
        computed() {},
        methods: {
            // 提交表单
            submitInfo() {
                if (this.isSubmited) {
                    this.errData = {
                        show: true,
                        msg: "您已成功提交信息"
                    }
                    return;
                }
                let validator = validate({
                    username: this.username,
                    phone: this.phone
                });

                if (validator.status) {
                    console.log("通过验证");
                    this.postInfo();
                } else {
                    console.log("不通过");
                    this.errData = {
                        show: true,
                        msg: validator.msg
                    }
                }
            },
            // 请求接口
            postInfo() {
                let thisVm = this;
                let url = "http://makerh5.com:1227/info";
                // let url = "http://localhost:1227/info";
                $.ajax({
                    url: url,
                    type: "POST",
                    // dataType: "JSON",
                    data: {
                        username: thisVm.username,
                        phone: thisVm.phone
                    },
                    beforeSend(XHR) {
                        console.log("XHR", XHR);
                        XHR.setRequestHeader("token", utils.getCookie("ironMan_token"));
                    },
                    success(res) {
                        console.log("提交数据成功", res);

                        thisVm.errData = {
                            show: true,
                            msg: "提交数据成功"
                        }

                        thisVm.isSubmited = true;
                    }
                });
            },
            // 分享
            share() {
                let shareTips = $(".share-tips-c");
                shareTips.fadeIn(600)
                    .on("click", () => {
                        shareTips.fadeOut(1000);
                    });
            },
            // 重新开始
            restart() {
                location.reload();
            }
        },
        ready() {
            let thisVm = this;
            // 页面函数队列
            this.pushFuncs((container, swiper, _this) => {
                let lotteryResult = thisVm.result;
                let status = utils.getCookie("ironMan_status");
                let token = utils.getCookie("ironMan_token");
                console.log("thisVm.result", thisVm.result);
                container.noSwiping = true;
                console.log("007");
                // 判断是否第一次抽奖
                if (!thisVm.isFirst && token) {
                    console.log("您已抽过奖");
                    setTimeout(() => {
                        $(".no-lottery-words").eq(1).show().addClass("animated bounceIn");
                    }, 600);
                    setTimeout(() => { $(".no-award-c").show().addClass("animated fadeInDown"); }, 200);
                    return;
                }
                // 未中奖
                if (lotteryResult.status == 1) {
                    console.log("很遗憾，您没抽中奖");
                    setTimeout(() => {
                        $(".no-lottery-words").eq(0).show().addClass("animated bounceIn");
                    }, 600);
                    setTimeout(() => { $(".no-award-c").show().addClass("animated fadeInDown"); }, 200);
                    return;
                }
                // 通行证
                if (lotteryResult.award.awardType == 1) {
                    console.log(`恭喜你，获得${lotteryResult.award.award}`);
                    setTimeout(() => {
                        $(".award-type-1").show().addClass("animated bounceIn");
                    }, 600);
                    setTimeout(() => { $(".is-award-c").show().addClass("animated fadeInDown"); }, 200);
                    setTimeout(() => { $(".input-c").show().addClass("animated fadeIn");; }, 200);
                    return;
                }
                // 背包
                if (lotteryResult.award.awardType == 2) {
                    console.log(`恭喜你，获得${lotteryResult.award.award}`);
                    setTimeout(() => {
                        $(".award-type-2").show().addClass("animated bounceIn");
                    }, 600);
                    setTimeout(() => { $(".is-award-c").show().addClass("animated fadeInDown"); }, 200);
                    setTimeout(() => { $(".input-c").show().addClass("animated fadeIn");; }, 200);
                    return;
                }
            });
        }
    }
</script>
<style lang="less" media="screen" scoped>
    @import "~swiper/src/less/swiper.less";

    @btn_w: 220px;
    .lottery-words {
        position: absolute;
        top: 130px;
        left: 0;

        width: 100%;
    }
    .no-lottery-words {
        top: 200px;
    }
    .input {
        @w: 380px;
        position: absolute;
        left: 50%;

        color: white;
        font-size: 36px; /*px*/

        width: @w;
        margin: 0 -@w/2;
        line-height: 64px;
        background: transparent;
        // background: rgba(255, 255, 255, .3);
        border: none;

        &:focus {
            outline: none;
        }
    }
    .input.phone {
        top: 594px;
    }
    .input.username {
        top: 512px;
    }
    .botton {
        position: absolute;
        top: 800px;

        width: @btn_w;
    }
    .botton.submit-btn {
        left: 50%;
        margin-left: -(@btn_w + 40);
    }
    .botton.share-btn {
        right: 50%;
        margin-right: -(@btn_w + 40);
    }
    .botton.no-award {
        top: 760px;
    }
    .botton.no-award {
        top: 640px;
    }

    .share-bg {
        background: rgba(0, 0, 0, .6);
    }
    .share-tips {}
</style>
