<template>
    <div class="swiper-slide single-page">
        <!-- <img class="scale-screen heros" src="../../static/images/page1/heros.png" alt=""></img> -->
        <img class="scale-screen" src="../../static/images/page1/P1.jpg" alt=""></img>
        <div class="who display-none">
            <img class="title" src="../../static/images/page1/who.png" width="90%" alt="">
            <div class="title-border-1 alternate-flash"></div>
            <div class="title-border-2 alternate-flash"></div>
            <div class="xian"></div>
        </div>
        <div class="star"></div>
        <div class="star star2"></div>
        <div class="star star3"></div>
        <div class="star star4"></div>
        <!-- <img class="lighting" width="100%" src="../../static/images/page1/lighting.png" alt=""></img> -->
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
            this.pushFuncs((container,swiper,_this) => {
                console.log("001");
                // $(".heros").addClass("animated slideInRight");
                setTimeout(() => { $(".who").show().addClass("animated bounceIn"); }, 800);
                //$(".lighting").addClass("animated fadeIn zy-count");
            });

        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
<style lang="less" scoped>
    .who{
        width: 432px;
        height: 177px;
        top: 50%;
        border:18px solid #1a1a1a;
        background: #034760;
        position: absolute;
        text-align: center;
        // top: 224px;
        left: 149px;
        margin-top: -160px;
    }
    .who .title{
        margin-top: 7%;
    }
    .xian{
        width: 336px;
        height: 32px;
        position: absolute;
        top: 200px;
        left: 210px;
        background: url("../../static/images/page1/xian.png") no-repeat;
        background-size: cover;
    }
    .title-border-1{
        position: absolute;
        top: -12px;
        left:-12px;
        background: url("../../static/images/page1/title-border-1.png") no-repeat;
        background-size: cover;
        width: 456px;
        height: 201px;
    }
    .title-border-2{
        position: absolute;
        top: -12px;
        left:-12px;
        background: url("../../static/images/page1/title-border-2.png") no-repeat;
        background-size: cover;
        width: 456px;
        height: 201px;
        animation-delay: 1s;
        -webkit-animation-delay: 1s;
    }
    .star {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;/* //小圆点   */
    background: #FFF;
    top: 100px;
    left: 400px;
    position: absolute;
    box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);/* //光晕部分   */
    animation: star-ani 1.5s infinite;
}
.star2{
top: 150px;
    left: 750px;
    animation: star-ani 1.5s 1s infinite;
}
.star3{
    top: 150px;
    left: 600px;
    animation: star-ani 1.5s 1.5s infinite;
}
.star4{
    top: 100px;
    left: 500px;
    animation: star-ani 1.5s 2s infinite;
}
.star:after {
    content: '';
    display: block;
    top: 0px;
    left: 4px;
    border: 0px solid #fff;
    border-width: 2px 300px 2px 300px;
    border-color: transparent transparent transparent rgba(255, 255, 255, .3);
    transform: rotate(-45deg) translate3d(1px, 1px, 0);
    transform-origin: 0% 0%;
}

@keyframes star-ani {
    0% {
        opacity: 0;
        transform: scale(0) rotate(0) translate3d(0, 0, 0);
    }
    50% {
        opacity: 1;
        transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
    }
    100% {
        opacity: 0;
        transform: scale(1) rotate(0) translate3d(-400px, 400px, 0);
    }
}
</style>
<style lang="less">
    .zy-count{
        animation-iteration-count:infinite;
    }
</style>
