<template>
    <div class="swiper-slide single-page">
       <img class="scale-screen" src="../../static/images/page5/P5.png" alt=""></img>
       <img class="title" src="../../static/images/page5/title.png" alt=""></img>
       <img class="title2" src="../../static/images/page5/title2.png" alt=""></img> 

        <img class="p51 alternate-flash" src="../../static/images/page5/p51.png" alt=""></img>
        <img class="p52 alternate-flash" src="../../static/images/page5/p52.png" alt=""></img>
        <img class="p53" src="../../static/images/page5/p53.png" alt=""></img>
        <img class="herop5" src="../../static/images/page5/hero.png" alt=""></img>
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
            this.pushFuncs(() => {
                $(".herop5").show().addClass("animated zoomIn");
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
    .title{
        width: 529px;
        position: absolute;
        left: 106px;
        top: 450px;
    }
    .title2{
        width: 368px;
        position: absolute;
        left: 190px;
        top: 198px;
    }
    .p51{
        width: 516px;
        position: absolute;
        left: 114px;
        top: 158px;
        z-index: 1
    }
    .p52{
        width: 516px;
        position: absolute;
        left: 114px;
        top: 158px;
        z-index: 1
    }
    .p53{
        width: 522px;
        position: absolute;
        left: 114px;
        top: 154px;
    }
    .herop5{
        width: 640px;
        position: absolute;
        left: 60px;
        top: 700px;
        display: none;
    }
</style>
