import {
    SET_FUNCS, // 设置页面回调函数队列
    SET_IS_FIRST, // 设置第一次抽奖标识
    SET_LOTTERY_RESULT // 设置抽奖结果
} from "data/mutation-types"

// 把函数加入数组队列
export const pushFuncs = ({dispatch, state}, func) => {
    if (typeof func === 'function') {
        dispatch(SET_FUNCS, func);
    } else {
        console.error("[actions] pushFuncs => func 不是一个函数");
    }
}

// 设置抽奖状态
export const setIsFirst = ({dispatch, state}, bool) => {
    bool = !!bool ? true : false;
    dispatch(SET_IS_FIRST, bool);
}

// 设置抽奖结果
export const setLotteryResult = ({dispatch, state}, result) => {
    result = result === null || result === undefined ? {} :  result;
    dispatch(SET_LOTTERY_RESULT, result);
}
