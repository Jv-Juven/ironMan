<template>
    <div class="swiper-slide single-page">
       <img class="scale-screen" src="../../static/images/page3/P3.jpg" alt=""></img>
       <img class="herop5" src="../../static/images/page5/heros.png" alt=""></img>
       <img class="titlez4" src="../../static/images/page5/title.png" alt=""></img>
       <img class="titlez2" src="../../static/images/page5/title2.png" alt=""></img>

        <img class="p51 alternate-flash" src="../../static/images/page5/p51.png" alt=""></img>
        <img class="p52 alternate-flash" src="../../static/images/page5/p52.png" alt=""></img>
        <img class="p53" src="../../static/images/page5/p53.png" alt=""></img>
        <img class="arrow-up floating" src="../../static/images/index/arrow.png" alt="">

    </div>
</template>
<script type="text/javascript">
    import * as actions from 'data/actions'
    export default {
        data() {
            return {
                swiperContainer: {}
            }
        },
        vuex: {
            actions
        },
        ready() {
            let thisVm = this;
            // 页面函数队列
            this.pushFuncs((container, swiper, _this) => {
                $(".titlez4").show().addClass("animated bounceInDown");
                $(".titlez2").show().addClass("animated jello");
                console.log("005");

            });
        },
        methods: {}
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
<style lang="less" scoped>
    .titlez4{
        width: 529px;
        position: absolute;
        left: 106px;
        top: 650px;
        display: none;
    }
    .titlez2{
        width: 368px;
        position: absolute;
        left: 190px;
        top: 348px;
        display: none;
    }
    .p51{
        width: 516px;
        position: absolute;
        left: 114px;
        top: 308px;
        z-index: 1
    }
    .p52{
        width: 516px;
        position: absolute;
        left: 114px;
        top: 308px;
        z-index: 1
    }
    .p53{
        width: 522px;
        position: absolute;
        left: 114px;
        top: 304px;
    }
    .herop5{
        width: 697px;
        position: absolute;
        left: 14px;
        top: 368px;
        opacity: 0.8;
        animation: herotra 1.5s infinite;
    }
    @keyframes herotra {
    0% {
        opacity: 0.5;
        transform:  translate3d(0, 0, 0);
    }
    50% {
        opacity: 0.8;
        transform:  translate3d(-10px, 0, 0);
    }
    100% {
        opacity: 0.5;
        transform:  translate3d(0, 0, 0);
    }
}
</style>
