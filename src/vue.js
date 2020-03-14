import bindProxy from './proxy'
import { h, patch } from './vdom'

class Vue {
  constructor(options) {
    this.data = options.data
    this.render = options.render;
    this.selector = null,
    this.oldVNode = null
  }

  $mount(selector) {
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    this._data = bindProxy(this.data, this)

    this.selector = selector
    this.oldVNode = document.querySelector(this.selector)

    this.update()
  }

  update() {
    const newVNode = this.render(h)
    console.log(newVNode)

    patch(this.oldVNode, newVNode)

    this.oldVNode = newVNode
  }
}

export default Vue