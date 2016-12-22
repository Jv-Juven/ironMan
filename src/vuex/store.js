import Vue from "vue"
import Vuex from "vuex"

import pages from "./modules/pages"
import appData from "./modules/appData"

Vue.use(Vuex);

export default new Vuex.Store({
    // 组合各个模块
    modules: {
        pages,
        appData
    }
});
