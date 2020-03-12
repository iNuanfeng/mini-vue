import Vue from '../src/vue'

let vm = new Vue({
  data: {
    title: "I am vue.",
    des: "I am description."
  },
  render: function (h) {
    return h('div', [
      h('p', {
        style: {
          fontWeight: 'bold'
        }
      }, this._data.title),
      h('span', this._data.des)
    ])
  }
});

vm.$mount('#app')

setTimeout(() => {
  vm._data.des = "hello,world." /* 视图更新啦～ */
}, 1000)