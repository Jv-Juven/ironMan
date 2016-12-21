<template>
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
</template>
<script type="text/javascript">
    import Swiper from "swiper";
    import util from "util/pages";
    import * as getters from 'data/getters';
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
            // 初始化Swiper
            this.bodySwiper = new Swiper(".swiper-body", {
                // Optional parameters
                direction: 'vertical',
                loop: false,
                initialSlide: 3,
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
            });
        }
    }

</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
    .swiper-body {
        width: 100%;
        height: 100%;
    }
    .single-page {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
    }
</style>
