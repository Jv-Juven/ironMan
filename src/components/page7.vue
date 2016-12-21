<template>
    <div class="swiper-slide swiper-no-swiping single-page">0007</div>
</template>
<script type="text/javascript">
    // 引入工具函数
    import utils from "util";

    import * as actions from 'data/actions'
    export default {
        vuex: {
            actions
        },
        ready() {
            // 页面函数队列
            this.pushFuncs((container, swiper, _this) => {
                container.noSwiping = false;
                console.log("007");
            })
        }
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
