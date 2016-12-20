<template>
    <div class="swiper-slide single-page">
        0001
        <div class="box">
            我
        </div>
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
            this.pushFuncs(() => {
                console.log("001");
            });


        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
    .box {
        width: rem(100px);
        height: 100px;
        border: dpr(1px) solid red;
        font-size: dpr(16px);
        background: white;
    }
</style>
