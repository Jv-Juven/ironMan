<template>
    <div class="swiper-slide swiper-no-swiping single-page">
        <img class="full-screen" src="../../static/images/loading/loading_bg.jpg" alt="" />
        <img class="logo" src="../../static/images/loading/loading_logo.jpg" alt="">
        <!-- <img class="full-screen animated infinite flash" src="../../static/images/loading/flashing.png" alt="" /> -->
        <div class="process process-bg">
            <!-- <div class="process-text">{{value}}</div> -->
            <div class="process-text">Loading...</div>
            <div class="process-run" :style="style"></div>
        </div>
    </div>
</template>
<script type="text/javascript">
    // 工具函数
    import utils from "util";
    // vuex
    import * as actions from 'data/actions'
    export default {
        data() {
            return {
                value: "0%",
                style: ""
            }
        },
        vuex: {
            actions
        },
        created() {},
        ready() {
            let thisVm = this;
            // 页面函数队列
            // this.pushFuncs(() => {});
            utils.imagesProcessLoad((processValue, isEnded, index, imgsLength) => {
                // console.info(processValue + "%");
                thisVm.value = processValue + "%";
                thisVm.style = "width:" + processValue + "%";
                if (isEnded) {
                    $('#loading').fadeOut();
                }
            });
        }
    }
</script>
<style lang="less" media="screen" scoped>
    @import "~swiper/src/less/swiper.less";
    @color: #2b89f5;
    @bg_col: #c6daf3;
    .box {
        width: 100px;
        height: 100px; /*no*/
        border: dpr(1px) solid red;
        font-size: dpr(16px);
        background: white;
    }
    .logo {
        @w: 720px;
        position: absolute;
        top: 50%;
        left: 50%;

        width: @w;
        margin: -280px -@w/2;
    }
    .process {
        @w: 360px;
        @h: 2px;
        position: absolute;
        top: 50%;
        left: 50%;

        margin: 0 -@w/2;
        width: @w;
        height: @h;
        border-radius: @h;
    }
    .process-bg {
        background: @bg_col;
        text-align: center;
    }
    .process-text {
        color: white;
        margin-top: -40px;
    }
    .process-run {
        position: absolute;
        top: 0;
        left: 0;

        width: 0;
        height: 100%;
        background: @color;
    }
</style>
