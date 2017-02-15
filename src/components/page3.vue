<template>
    <div class="swiper-slide swiper-no-swiping single-page">
        <img class="scale-screen" src="../../static/images/page3/P3.jpg" alt=""></img>
        <img class="title" src="../../static/images/page3/title.png" alt=""></img>
        <!-- <img class="hero" src="../../static/images/page3/hero.png" alt=""></img> -->
        <div class="item-box item1-box">
            <span class="unselect"></span>
            <img class="item item1" src="../../static/images/page3/item1.png" alt=""></img>
        </div>
        <div class="item-box item2-box">
            <span class="unselect"></span>
            <img class="item item2" src="../../static/images/page3/item2.png" alt=""></img>
        </div>
        <div class="item-box item3-box">
            <span class="unselect"></span>
            <img class="item item3" src="../../static/images/page3/item3.png" alt=""></img>
        </div>
        <div class="item-box item4-box">
            <span class="unselect"></span>
            <img class="item item4" src="../../static/images/page3/item4.png" alt=""></img>
        </div>
        <div class="item-box item5-box">
            <span class="unselect"></span>
            <img class="item item5" src="../../static/images/page3/item5.png" alt=""></img>
        </div>
        <div class="item-box item6-box">
            <span class="unselect"></span>
            <img class="item item6" src="../../static/images/page3/item6.png" alt=""></img>
        </div>
        <img class="p47 display-none" src="../../static/images/page4/7.png" alt=""></img>
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
            let thisVm = this;
            this.pushFuncs((container, swiper, _this) => {
                console.log("003");
                container.noSwiping = true;
                // $(".hero").show().addClass("animated slideInRight");
                $(".title").show().addClass("animated fadeIn");
                $(".item-box").show().addClass("animated bounceInDown");
                $(".item-box").on("click", function() {
                    $(this).find("span").toggleClass("select");
                });
                setTimeout(() => { $(".p47").show().addClass("animated bounceIn"); }, 1800);
                $(".p47").on("click", function() {

                    setTimeout(function(){
                        swiper.slideNext();
                    }, 100)

                });
            });
        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
<style lang="less" scoped>
    .title{
        width: 380px;
        position: absolute;
        z-index: 1;
        top: 194px;
        left: 190px;
        display: none;
    }
    .hero{
        width: 320px;
        position: absolute;
        top: 720px;
        right: 40px;
        display: none;
    }
    .unselect{
        width: 37px;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        height: 37px;
        background: url("../../static/images/page3/unselect.png") no-repeat;
        background-size: cover;
    }
    .unselect.select{
        width: 54px;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        height: 41px;
        background: url("../../static/images/page3/select.png") no-repeat;
        background-size: cover;
    }
    .item-box{
        position: absolute;
        left: 120px;
        width: 400px;
        min-height: 36px;
        display: none;
    }
    .item1-box{
        top: 400px;
    }
    .item2-box{
        top: 470px;
        animation-delay: 0.2s;
        -webkit-animation-delay: 0.2s;
    }
    .item3-box{
        top: 532px;
        animation-delay: 0.4s;
        -webkit-animation-delay: 0.4s;
    }
    .item4-box{
        top: 626px;
        animation-delay: 0.6s;
        -webkit-animation-delay: 0.6s;
    }
    .item5-box{
        top: 712px;
        animation-delay: 0.8s;
        -webkit-animation-delay: 0.8s;
    }
    .item6-box{
        top: 772px;
        animation-delay: 1s;
        -webkit-animation-delay: 1s;
    }
    .item{
        margin-left: 66px;
        margin-top: 8px;
    }
    @h: 26px;
    .item1{
        // width: 400px;
        height: @h;
        position: absolute;
        z-index: 1;
    }
    .item2{
        // width: 195px;
        height: @h;
        position: absolute;
        z-index: 1;
    }
    .item3{
        // width: 195px;
        height: @h * 2.4;
        position: absolute;
        z-index: 1;
    }
    .item4{
        // width: 194px;
        height: @h * 2.4;
        position: absolute;
        z-index: 1;
    }
    .item5{
        // width: 194px;
        height: @h;
        position: absolute;
        z-index: 1;
    }
    .item6{
        // width: 193px;
        height: @h;
        position: absolute;
        z-index: 1;
    }
    .p47{
        width: 104px;
        position: absolute;
        left: 320px;
        top: 880px;
        z-index: 4;
    }
</style>
