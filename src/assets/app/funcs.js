// 验证
export const validate = (params) => {
    // 验证
    if (params.username.length == 0) {
        console.warn("请填写姓名");
        return {
            status: false,
            msg: "请填写姓名"
        };
    }
    if (!/^1[34578]\d{9}$/.test(params.phone)) {
        console.warn("请填写合法的手机号码");
        return {
            status: false,
            msg: "请填写合法的手机号码"
        };
    }
    return {
        status: true,
        msg: "验证通过"
    };
}
