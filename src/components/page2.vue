<template>
    <div class="swiper-slide swiper-no-swiping single-page" id="page2">

        <img class="scale-screen" src="../../static/images/page2/P2.jpg" alt=""></img>
        <img class="title1" src="../../static/images/page2/title1.png" alt=""></img>
        <img class="title2" src="../../static/images/page2/title2.png" alt=""></img>
        <img class="title21" src="../../static/images/page2/title21.png" alt=""></img>
        <img class="title22 stripe" src="../../static/images/page2/title22.png" alt=""></img>
        <img class="title23" src="../../static/images/page2/title23.png" alt=""></img>
        <img class="arrow-up floating" src="../../static/images/index/arrow.png" alt="">

        <intro-cover></intro-cover>
    </div>
</template>
<script type="text/javascript">
    import * as actions from 'data/actions';
    import IntroCover from "./introCover";
    export default {
        vuex: {
            actions
        },
        ready() {
            // 页面函数队列
            this.pushFuncs(() => {
                console.log("002");
                $(".title1").show().addClass("animated rotateIn");
                $(".title2").show().addClass("animated lightSpeedIn");
                $(".title22").show().addClass("animated fadeIn zy-count");
            });
        },
        components: {
            IntroCover
        }
    }
</script>
<style lang="less" media="screen">
    // @import "~swiper/src/less/swiper.less";
</style>
<style lang="less" scoped>
    .title1{
        @w: 660px;
        width: @w;
        position: absolute;
        z-index: 1;
        top: 170px;
        left: 50%;

        margin: 0 -@w/2;
        display: none;
    }
    .title2{
        width: 352px;
        position: absolute;
        z-index: 3;
        top: 488px;
        left: 200px;
        display: none;
    }
    .title21{
        width: 685px;
        position: absolute;
        z-index: 1;
        top: 579px;
        left: 40px;
    }
    .title22{
        width: 596px;
        position: absolute;
        z-index: 1;
        top: 490px;
        left: 80px;
        display: none;
    }
    .title23{
        width: 575px;
        position: absolute;
        z-index: 1;
        top: 344px;
        left: 88px;
    }
</style>
