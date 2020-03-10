import observer from './observer'
import Watcher from './observer/watcher'

class Vue {
  constructor(options) {
    this._data = options.data;
    this.render = options.render;
    this.selector = null

    observer(this._data);
  }

  $mount(selector) {
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    new Watcher(this)

    this.selector = selector
    this.renderHTML()
  }

  renderHTML() {
    document.querySelector(this.selector).innerHTML = this.render()
  }
}

export default Vue