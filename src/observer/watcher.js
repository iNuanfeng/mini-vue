import Dep from './dep'

class Watcher {
  constructor(vm) {
    /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
    Dep.target = this;

    this._vm = vm
  }

  /* 更新视图的方法 */
  update() {
    console.log("视图更新啦～");
    this._vm.renderHTML()
  }
}

export default Watcher