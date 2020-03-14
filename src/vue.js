import bindProxy from './proxy'
import { h, patch } from './vdom'
import { deepClone } from './libs/utils'

let count = 0
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
    this.oldVNode = null

    this.update()
  }

  update() {
    console.log(count, 'before', this.oldVNode)

    const renderNode = this.render(h)
    const newVNode = renderNode ? [renderNode] : null

    patch(this.oldVNode, newVNode, document.querySelector(this.selector))
    console.log(count, 'new', newVNode)

    this.oldVNode = deepClone(newVNode)
    console.log(count++, 'after', this.oldVNode)

  }
}

export default Vue