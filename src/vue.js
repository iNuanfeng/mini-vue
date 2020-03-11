import observer from './observer'
import Watcher from './observer/watcher'

var snabbdom = require('snabbdom');
var patch = snabbdom.init([ // Init patch function with chosen modules
  require('snabbdom/modules/class').default, // makes it easy to toggle classes
  require('snabbdom/modules/props').default, // for setting properties on DOM elements
  require('snabbdom/modules/style').default, // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners').default, // attaches event listeners
]);
var h = require('snabbdom/h').default; // helper function for creating vnodes

class Vue {
  constructor(options) {
    this._data = options.data;
    this.render = options.render;
    this.selector = null,
    this.oldVNode = null

    observer(this._data);
  }

  $mount(selector) {
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    new Watcher(this)

    this.selector = selector
    this.oldVNode = document.querySelector(this.selector)

    this.update()
  }

  update() {
    const newVNode = this.render(h)

    patch(this.oldVNode, newVNode)

    this.oldVNode = newVNode
  }
}

export default Vue