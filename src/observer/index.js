import Dep from './dep'

function observer(value) {
  if (!value || (typeof value !== 'object')) {
    return;
  }

  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key]);
  });
}

function defineReactive(obj, key, val) {
  /* 一个Dep类对象 */
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    /* 属性可枚举 */
    configurable: true,
    /* 属性可被修改或删除 */
    get: function reactiveGetter() {
      /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return val;
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return;

      val = newVal

      /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
      dep.notify();
    }
  });
}

export default observer