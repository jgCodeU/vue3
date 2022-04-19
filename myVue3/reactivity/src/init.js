import { initStatus } from "./status"

export function initMixin(Vue) {
    // 给Vue原型添加 _init 方法
    Vue.prototype._init = _init
    
    function _init(options) {
        const vm = this
        vm.$options = options
        // 处理options
        initStatus(vm)
    }
}
