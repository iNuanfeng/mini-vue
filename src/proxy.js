function bindProxy(target, vm) {
  console.log(vm)
  return new Proxy(target, {
    get(target, propKey, receiver) {
      console.log('你访问了' + propKey)
      return Reflect.get(target, propKey, receiver)
    },
    set(target, propKey, value, receiver) {
      console.log('你设置了' + propKey)
      console.log('新的' + propKey + '=' + value)
      Reflect.set(target, propKey, value, receiver)
      
      vm.update()
      return true
    }
  })
}

export default bindProxy