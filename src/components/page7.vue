<template>
    <div class="swiper-slide swiper-no-swiping single-page">
        <img class="scale-screen" src="../../static/images/page7/result_bg.jpg" alt="">
        <img class="full-width" src="../../static/images/page7/inputs.png" alt="">
        <img class="lottery-words" src="../../static/images/page7/beibao.png" alt="" v-if="false">
        <!-- <img class="lottery-words" src="../../static/images/page7/tongxingzheng_words.png" alt="" v-if="true"> -->
        <!-- <img class="lottery-words no-lottery-words" src="../../static/images/page7/no_award_words.png" alt="" v-if="true"> -->
        <!-- <img class="lottery-words no-lottery-words" src="../../static/images/page7/already_lottery_words.png" alt="" v-if="true"> -->
        <input class="input username" type="text" name="name" value="" v-model="username" placeholder="姓名">
        <input class="input phone" type="text" name="name" value="" v-model="phone" placeholder="手机号码">

        <!-- <img class="botton submit-btn" src="../../static/images/page7/submit_btn.png" @click="submitInfo"> -->
        <!-- <img class="botton share-btn" src="../../static/images/page7/share_btn.png" @click="share"> -->

        <img class="botton submit-btn no-award" src="../../static/images/page7/share_btn.png" @click="share">
        <img class="botton share-btn no-award" src="../../static/images/page7/restart_btn.png" @click="restart">
    </div>
</template>
<script type="text/javascript">
    // 引入工具函数
    import utils from "util";
    // vuex
    import * as actions from 'data/actions'
    import * as getters from 'data/getters'

    import {
        validate
    } from "assets/app/funcs"
    export default {
        data() {
            return {
                username: "", // 姓名
                phone: "", // 手机号码
            }
        },
        vuex: {
            actions,
            getters
        },
        methods: {
            // 提交表单
            submitInfo() {
                let validator = validate({
                    username: this.username,
                    phone: this.phone
                });

                if (validator.status) {
                    console.log("通过验证");
                    this.postInfo();
                } else {
                    console.log("不通过");
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
                    }
                });
            },
            // 分享
            share() {},
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
                console.log("thisVm.result", thisVm.result);
                container.noSwiping = false;
                console.log("007");
                // 判断是否第一次抽奖
                if (!thisVm.isFirst) {
                    console.log("您已抽过奖");
                    return;
                }
                // 未中奖
                if (lotteryResult.status == 1) {
                    console.log("很遗憾，您没抽中奖");
                    return;
                }
                // 通行证
                if (lotteryResult.award.awardType == 1) {
                    console.log(`恭喜你，获得${lotteryResult.award.award}`);
                    return;
                }
                // 背包
                if (lotteryResult.award.awardType == 2) {
                    console.log(`恭喜你，获得${lotteryResult.award.award}`);
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
</style>
