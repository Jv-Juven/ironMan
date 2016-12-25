<template>
    <div class="swiper-slide single-page"> 
        <img class="scale-screen heros" src="../../static/images/page1/heros.png" alt=""></img>
        <img class="scale-screen" src="../../static/images/page1/P1.png" alt=""></img>
        <div class="who">
            <img class="title" src="../../static/images/page1/who.png" width="90%" alt="">
            <div class="title-border-1 alternate-flash"></div>
            <div class="title-border-2 alternate-flash"></div>
            <div class="xian"></div>
        </div>
        <img class="lighting" width="100%" src="../../static/images/page1/lighting.png" alt=""></img>
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
                $(".heros").addClass("animated slideInRight");
                $(".lighting").addClass("animated fadeIn zy-count");
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
        border:18px solid #1a1a1a;
        background: #034760;
        position: absolute;
        text-align: center;
        top: 224px;
        left: 149px;
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
</style>
<style lang="less">
    .zy-count{
        animation-iteration-count:infinite;
    }
</style>
