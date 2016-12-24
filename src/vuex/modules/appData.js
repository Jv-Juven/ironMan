import {
    SET_IS_FIRST,
    SET_LOTTERY_RESULT
} from "../mutation-types"
let state = {
    result: {}, // 抽奖结果
    isFirst: true // 第一次抽奖标识
}

let mutations = {
    // 设置第一次抽奖标识
    [SET_IS_FIRST](state, bool) {
        state.isFirst = bool;
    },
    // 设置抽奖结果
    [SET_LOTTERY_RESULT](state, result) {
        state.result = result;
    }
}

export default {
    state,
    mutations
}
