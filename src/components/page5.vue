<template>
    <div class="swiper-slide swiper-no-swiping single-page">
        <button id="nextPageBtn" type="button" name="button">下一页</button>
        0005
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
                container.noSwiping = true;
                console.log("005");
                $("#nextPageBtn").on("click", function() {
                    console.log(swiper);
                    swiper.slideNext();
                });
            });
        },
        methods: {}
    }
</script>
<style lang="less" media="screen">
    @import "~swiper/src/less/swiper.less";
</style>
