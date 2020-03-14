import bindProxy from './proxy'
import { h, patch } from './vdom'
import { deepClone } from './libs/utils'

let count = 0
class Vue {
  constructor(options) {
    this.data = options.data
    this.render = options.render;
    this.selector = null,
    this.oldVnode = null
  }

  $mount(selector) {
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    this._data = bindProxy(this.data, this)

    this.selector = selector
    this.oldVnode = null

    this.update()
  }

  update() {
    const renderNode = this.render(h)
    const newVnode = renderNode ? [renderNode] : null

    patch(this.oldVnode, newVnode, document.querySelector(this.selector))

    this.oldVnode = deepClone(newVnode)

  }
}

export default Vue