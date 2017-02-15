// import {} from "./index"
/**
 * 滚动函数
 * @param [object] el dom元素
 * @param [object] fns 返回promise对象的函数对象集合：resolveFn--->可执行事件；loadingFn--->加载事件
 * @type {[type]}
 */
export default function (el, params) {
    let touchOffsetY = 0,
        totalOffsetY = 0,
        elOffsetY = 0,
        startY = 0;

    el.style.webkitTransition = "all 0s linear";
    // el.style.webkitTransform = "translate3d(0, 0, 0)";
    let touchStartFn = (e) => {
        startY = e.targetTouches[0].clientY;
        // console.log(startY);
    }
    let touchMoveFn = (e) => {

        let y = e.targetTouches[0].clientY;
        let offsetY = y - startY; // 手指滑动距离
        elOffsetY = totalOffsetY + offsetY; // 元素移动距离
        if (elOffsetY > 0) {
            elOffsetY = 0;
        }
        if (elOffsetY < params.thresholdVal) {
            elOffsetY = params.thresholdVal;
            return;
        }
        el.style.webkitTransform = `translate3d(0, ${elOffsetY}px, 0)`;
    }
    let touchEndFn = (e) => {

        el.style.webkitTransform = `translate3d(${elOffsetY}, 0, 0)`;
        totalOffsetY = elOffsetY;
    }
    el.addEventListener("touchstart", touchStartFn);
    el.addEventListener("touchmove", touchMoveFn);
    el.addEventListener("touchend", touchEndFn);
}
