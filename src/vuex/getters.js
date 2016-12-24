import store from './store'

const pages = store.state.pages; // pages 应与 store.modules 中的名字相同
const appData = store.state.appData;

// 各个页面的回调函数
export const pageCallFuncs = () => {
    return pages.pageFuncs;
}

// 获取第一次抽奖标识
export const isFirst = () => {
    return appData.isFirst;
}
// 获取抽奖结果
export const result = () => {
    return appData.result;
}
