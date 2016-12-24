<template>
    <div class="swiper-slide swiper-no-swiping single-page">
        <img class="full-screen" src="../../static/images/loading/loading_bg.jpg" alt="" />
        <img class="full-screen animated infinite flash" src="../../static/images/loading/flashing.png" alt="" />
        <!-- <video src="videofile.ogg" autoplay poster="posterimage.jpg"> -->

        </video>
    </div>
</template>
<script type="text/javascript">
    import * as actions from 'data/actions'
    export default {
        vuex: {
            actions
        },
        created() {},
        ready() {
            // 页面函数队列
            this.pushFuncs(() => {});

        }
    }
</script>
<style lang="less" media="screen" scoped>
    @import "~swiper/src/less/swiper.less";
    .box {
        width: 100px;
        height: 100px; /*no*/
        border: dpr(1px) solid red;
        font-size: dpr(16px);
        background: white;
    }
</style>
