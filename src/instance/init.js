
let uid = 0;

export function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this

    vm.uid = uid++

    // TODO: mergeOptions
    vm.data = options.data
    vm.render = options.render;
  }
}