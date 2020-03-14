function bindProxy(target, vm) {
  let handler = {
    get (target, key, receiver) {
      // console.log('get' + key)
      // 递归创建并返回
      if (typeof target[key] === 'object' && target[key] !== null) {
        return new Proxy(target[key], handler)
      }
      return Reflect.get(target, key, receiver)
    },
    set (target, key, value, receiver) {
      console.log('set ' + key + ': ', value)
      Reflect.set(target, key, value, receiver)

      vm.update()
      return true
    }
  }

  return new Proxy(target, handler)
}


export default bindProxy