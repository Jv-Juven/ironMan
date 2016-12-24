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
        created() {},
        ready() {
            // 页面函数队列
            this.pushFuncs(() => {
                console.log("001");

                $(".box").addClass("floating");
            });

        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
    .box {
        width: 100px;
        height: 100px; /*no*/
        border: dpr(1px) solid red;
        font-size: dpr(16px);
        background: white;
    }
</style>
