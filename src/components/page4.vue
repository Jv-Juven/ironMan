<template>
    <div class="swiper-slide swiper-no-swiping single-page">
        <img class="scale-screen" src="../../static/images/page4/P4.png" alt=""></img>
        <img class="p41" src="../../static/images/page4/1.png" alt=""></img>
        <img class="p42 zy-rotate" src="../../static/images/page4/2.png" alt=""></img>
        <img class="p43 alternate-flash" src="../../static/images/page4/3.png" alt=""></img>
        <img class="p44 alternate-flash" src="../../static/images/page4/4.png" alt=""></img>
        <img class="p45" src="../../static/images/page4/5.png" alt=""></img>
        <img class="p46" src="../../static/images/page4/6.png" alt=""></img>
        <img class="p47" src="../../static/images/page4/7.png" alt=""></img>
    </div>
</template>
<script type="text/javascript">
    import * as actions from 'data/actions'
    export default {
        vuex: {
            actions
        },
        ready() {
            // 页面函数队列
            this.pushFuncs((container, swiper, _this) => {
                container.noSwiping = true;
                console.log("004");
                $(".p46").show().addClass("animated rotateIn");
                $(".p47").on("click", function() {
                   
                    setTimeout(function(){
                        swiper.slideNext();
                    }, 100)
                    
                });
            })
        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
<style lang="less" scoped>
    .p41{
        width: 432px;
        position: absolute;
        left: 160px;
        top: 230px;
        z-index: 2
    }
    .p42{
        width: 498px;
        position: absolute;
        left: 126px;
        top: 265px;
    }
    .p43{
        width: 554px;
        position: absolute;
        left: 96px;
        top: 201px;
        z-index: 1;
    }
    .p44{
        width: 554px;
        position: absolute;
        left: 96px;
        top: 201px;
        z-index: 1;
        animation-delay: 1s;
        -webkit-animation-delay: 1s;
    }
    .p45{
        width: 568px;
        position: absolute;
        left: 88px;
        top: 196px;
    }
    .p46{
        width: 376px;
        position: absolute;
        left: 190px;
        top: 380px;
        z-index: 3;
        display: none;
    }
    .p47{
        width: 104px;
        position: absolute;
        left: 320px;
        top: 568px;
        z-index: 4;
    }
    .zy-rotate{
        -webkit-animation-duration: 5s;
        animation-duration: 5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: rotating;
        animation-name: rotating;
        animation-timing-function: linear;
        -webkit-animation-timing-function: linear;
    }
</style>
