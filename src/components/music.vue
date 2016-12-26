<template lang="html">
    <div class="music-warpper">
        <!-- 音乐按钮 -->
        <div class="music-btns-warpper">
            <img class="music-btn" src="../../static/images/index/btn_close.png" alt="" @click="switchMusic" v-show="!isMusicOpen">
            <img class="music-btn" src="../../static/images/index/btn_open.png" alt="" @click="switchMusic" v-show="isMusicOpen">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                music: new Audio("http://oiq5sba05.bkt.clouddn.com/X-Ray%20Dog%20-%20At%20First%20Glance.MP3"),
                isMusicOpen: true
            }
        },
        computed: {},
        ready: function () {
            // 音频相关设置
            this.music.loop = true;
            this.music.autoplay = true;
        },
        attached: function () {},
        methods: {
            // 音乐开关函数
            switchMusic() {
                this.isMusicOpen = !this.isMusicOpen;
                if (this.isMusicOpen) {
                    // 音乐播放
                    this.music.play();
                    // console.log(this.isMusicOpen);
                } else {
                    // 音乐停止
                    this.music.pause();
                    // console.log(this.isMusicOpen);
                }
            }
        },
        components: {}
    }
</script>

<style lang="less">
    .music-warpper {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 9;

        .music-btn {
            @w: 70px;
            @distance: 50px;
            position: absolute;
            top: @distance;
            right: @distance;

            width: @w;
            height: @w;
        }

    }
</style>
