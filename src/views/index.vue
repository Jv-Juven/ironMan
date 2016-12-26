<template>
    <loading id="loading" class="full-screen loading"></loading>
    <!-- Swiper 的窗口  -->
    <div class="swiper-container swiper-body">
        <!-- Swiper 的容器 -->
        <div class="swiper-wrapper">
            <!-- Swiper 的单页 -->
            <!-- <div class="swiper-slide single-page">1</div>
            <div class="swiper-slide single-page">2</div>
            <div class="swiper-slide single-page">3</div> -->
            <page1></page1>
            <page2></page2>
            <page3></page3>
            <page4></page4>
            <page5></page5>
            <page6></page6>
            <page7></page7>
        </div>
    </div>
    <music></music>

</template>
<script type="text/javascript">
    import Swiper from "swiper";
    // import "swiper-animate";
    // import "jquery.transit";
    import util from "util/pages";
    import * as getters from 'data/getters';
    import Loading from "components/loading";
    import Music from "components/music";
    import Page1 from "components/page1";
    import Page2 from "components/page2";
    import Page3 from "components/page3";
    import Page4 from "components/page4";
    import Page5 from "components/page5";
    import Page6 from "components/page6";
    import Page7 from "components/page7";
    export default {
        data() {
            return {
                bodySwiper: {}
            }
        },
        vuex: {
            getters
        },
        components: {
            Loading,
            Music,
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
            Page6,
            Page7
        },
        ready() {
            let _this = this;
            // 计算当前所有页面的总数
            console.log("getters:", this.pageCallFuncs);

            fullScreen(".full-screen");
            // 初始化Swiper
            this.bodySwiper = new Swiper(".swiper-body", {
                // Optional parameters
                direction: 'vertical',
                noSwiping: true,
                loop: false,
                initialSlide: 0,
                speed: 300,
                spaceBetween: 0,
                // 回调函数
                onSlideChangeEnd(swiper) {
                    util.exec(this, swiper, _this);
                },
                onInit(swiper) {
                    if (!this.loop) {
                        // 只有slides不循环的情况下执行
                        util.exec(this, swiper, _this);
                    }
                },
                onImagesReady(swiper) {
                    console.log(swiper);
                    // swiper.slideNext();
                    $('#loading').fadeOut();
                }
            });
        }
    }

    // 全屏图兼容不同尺寸的显示屏
    function fullScreen (selector) {
        if (selector === null || selector === undefined) {
            return;
        }
        var el = $(selector);
        var elWidth = el.width();
        var elHeight = el.height();
        var clientWidth = $(window).width();
        var clientHeight = $(window).height();
        var widthScale = clientWidth/elWidth;
        var heightScale = clientHeight/elHeight;
        var scale = widthScale > heightScale ? widthScale : heightScale; // 取比例大的
        var width = elWidth * scale;
        var height = elHeight * scale;
        el.css({
            position: "absolute",
            top: "50%",
            left: "50%",
            width: width + "px",
            height: height + "px",
            margin: "-" + height/2 + "px -" + width/2 + "px"
        });
    }

</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
    // @import "~swiper-animate/animate.min.css";
    .swiper-body {
        width: 100%;
        height: 100%;
    }
    .single-page {
        width: 100%;
        height: 100%;
        background: rgb(0, 0, 0);
    }
    .scale-screen {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .full-width {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
    .loading {
        z-index: 999;
    }

    .display-none {
        display: none;
    }

    .arrow-up {
        @w: 60px;
        position: absolute;
        bottom: 60px;
        left: 50%;

        width: @w;
        margin: 0 -@w/2;
    }

</style>
