import bindProxy from '../proxy/index'
import { h, patch } from '../vdom'
import { deepClone } from '../utils'
import { queueWatcher } from '../proxy/scheduler'
import { initMixin } from './init'

class Vue {
  constructor(options) {
    this._init(options)

    this.selector = null;
    this.oldVnode = null;
  }

  $mount(selector) {
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    this._data = bindProxy(this.data, this)

    this.selector = selector
    this.oldVnode = null

    this.update()
  }

  update() {
    queueWatcher(this)
  }

  run () {
    const renderNode = this.render(h)
    const newVnode = renderNode ? [renderNode] : null

    patch(this.oldVnode, newVnode, document.querySelector(this.selector))

    this.oldVnode = deepClone(newVnode)
  }
}

initMixin(Vue)

export default Vue