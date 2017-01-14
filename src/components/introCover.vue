<template lang="html">
    <div id="intro_cover" class="scale-screen intro-pannel body-wrapper">
        <div class="scale-screen mask"></div>
        <div id="intro_body" class="scale-screen body">
            <header id="intro_header" class="header-title">
                活动说明
            </header>
            <main id="intro_main" class="main-wrapper scrollbar">
                <p class="content p">
                    活动主办：
                    南方都市报
                </p>

                <p class="content p">
                    活动地区：
                    广东地区
                </p>
                <p class="content p">
                    活动时间：
                    2017年1月16日-1月22日
                </p>
                <p class="content p">
                    参与方式：
                </p>
                <p class="content">
                    活动期间，用户只要参加香港迪士尼乐园铁甲奇侠飞行之旅超级英雄“铁”粉大召集活动，参与投票互动环节“选出你最期待参与的钢铁侠主题项目（可多选）”，即可参加 “转动转盘，赢取好礼” 抽奖环节，获得赢奖机会。
                </p>
                <p class="content p">
                    奖品设置：
                </p>
                <p class="content">
                    香港迪士尼乐园钢铁侠主题酷炫礼品1个/名额，共30个名额；
                    （主办方对第三者产品或服务的质素及实用性恕不负责。香港迪士尼乐园对该奖品的使用细则具有最终解释权。）
                </p>

                <p class="content p">
                    领奖说明：
                </p>
                <p class="content">
                    1.中奖者填写真实准确的姓名及手机号码提交，我们将有工作人员在电话联系您领取礼品。获奖用户应确保提交的个人联系方式准确无误，任何因提交的联系方式有误或未能提交的而造成的后果将有用户承担；
                    2.任何未能在奖项公布之日起5个工作日内取得联系的获奖用户，视为自动放弃获奖资格。
                </p>

                <p class="content p">
                    协议和声明：
                </p>
                <p class="content">
                    本次活动仅限于具有国内通讯地址的中国大陆地区，即除港澳台地区以外的中国公民参加；
                    主办方有权调整具体的领奖方式；
                    奖品以实物为准，主办方不负责获奖者的应交税款，奖品不得折现，不可转让领取对象；
                    主办方员工、本次活动的广告代理公司及合作伙伴员工及以上人员的家属不得参加本次活动抽奖，以示公允；
                    本次活动由南方都市报主办，南方都市报有权随时终止本活动而无需事先通知及有对本次活动的最终解释权；
                    适用法律：本规则内所列条款均以中华人民共和国法律为依据。
                </p>

                <p class="content p">
                    免责补充说明：
                </p>
                <p class="content">
                    南方都市报及其为执行与管理本次活动而任用的代理商、承办商特此声明：
                    1.不容许任何网上方式散播电脑病毒，如因本活动涉及的网上方式散播电脑病毒而对参加者的电脑系统造成损害，活动主办方恕不负责；
                    2.不容许参加者上载任何非法的、有害的、恐吓性的、辱骂性的、骚扰性的、民事侵权的、破坏名誉的、粗俗的、淫秽的、诽谤的、侵犯他人私隐的、仇恨性的、道德上、在种族、人种等方面或其他方面会引起反感、或违反任何国家或其他任何具法律效力的规则的内容，参加者所上载的内容由参加者自行负责。而参加者应全部且有效地赔偿主办方任何直接地或间接地因参加者参加此次活动而引起或造成之所有费用、请求及损害；
                    3.参加者应自行决定是否通过互联网下载或以其他方式获得资料，并且一切风险应由参加者自行承担。如下载资料导致其电脑系统遭受任何损害或数据损失，须由参加者自行负责；
                    4.资料截止至2017年1月22日，其后如有更改，恕不另行通告。对于第三方产品或服务质素或适用性，或本页内容差误或遗漏，主办方恕不负责。
                </p>

            </main>
            <footer id="intro_footer" class="footer-wrapper">
                <!-- <div class="btn">
                我知道了
            </div> -->
            <img id="btn" class="btn" src="../../static/images/page2/btn.png" alt="">
        </footer>
    </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
        }
    },
    computed: {},
    ready: function () {
        // 设置中间的高度
        setTimeout(() => {
            let body = document.getElementById("intro_body");
            let header = document.getElementById("intro_header");
            let main = document.getElementById("intro_main");
            let footer = document.getElementById("intro_footer");
            let bodyHeight = body.clientHeight;
            let headerHeight = header.clientHeight;
            let footerHeight = footer.clientHeight;
            main.style.height = (bodyHeight - headerHeight - footerHeight) + "px";
            console.log("height", main.style.height);
        }, 1000);

        $("#btn").click(() => {
            $("#intro_cover").fadeOut(400);
            $("#page2").removeClass("swiper-no-swiping");
        });
    },
    attached: function () {},
    methods: {},
    components: {}
}
</script>

<style lang="less" scoped>
    .body-wrapper {

    }
    .intro-pannel {
        z-index: 9;
    }
    .mask {
        background: rgba(0, 0, 0, .8);
    }
    .body {
        color: white;

        // display: flex;
        // align-items: flex-end;
        // justify-content: center;
        // flex-flow: row;
    }
    .header-title {
        font-size: 40px; /*px*/
        text-align: center;

        width: 100%;
        line-height: 140px;
    }
    .main-wrapper {
        width: 90%;
        margin-right: auto;
        margin-left: auto;
        overflow: scroll;

        .content {
            font-size: 28px; /*px*/
            line-height: 40px; /*px*/
        }

        .p {
            margin-top: 20px;
        }
    }
    .footer-wrapper {
        position: absolute;
        left: 0px;
        bottom: 0;
        width: 100%;
        line-height: 200px;
        text-align: center;
    }
    .btn {
        display: inline-block;
        width: 200px;
    }
    .scrollbar::-webkit-scrollbar {
        background: transparent;
        width: 0px;
        // scrollbar-3dlight-color: #D4D0C8; /*- 最外左 -*/
        // scrollbar-highlight-color: #fff; /*- 左二 -*/
        // scrollbar-face-color: #E4E4E4; /*- 面子 -*/
        // scrollbar-arrow-color: #666; /*- 箭头 -*/
        // scrollbar-shadow-color: #808080; /*- 右二 -*/
        // scrollbar-darkshadow-color: #D7DCE0; /*- 右一 -*/
        // scrollbar-base-color: #D7DCE0; /*- 基色 -*/
        // scrollbar-track-color: #;/*- 滑道 -*/
        // -webkit-scrollbar-3dlight-color: transparent; /*- 最外左 -*/
        // -webkit-scrollbar-highlight-color: transparent; /*- 左二 -*/
        // -webkit-scrollbar-face-color: transparent; /*- 面子 -*/
        // -webkit-scrollbar-arrow-color: transparent; /*- 箭头 -*/
        // -webkit-scrollbar-shadow-color: transparent; /*- 右二 -*/
        // -webkit-scrollbar-darkshadow-color: transparent; /*- 右一 -*/
        // -webkit-scrollbar-base-color: transparent; /*- 基色 -*/
        // -webkit-scrollbar-track-color: transparent;/*- 滑道 -*/
    }
    .scrollbar::-webkit-scrollbar-thumb {
        background: transparent;
    }
</style>
