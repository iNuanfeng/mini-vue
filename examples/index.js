import Vue from '../src/vue'

let vm = new Vue({
  data: {
    title: "I am vue.",
    des: "I am description."
  },
  render: function (h) {
    return h(
      'span', {
        /* 指令集合数组 */
        directives: [{
          /* v-show指令 */
          rawName: 'v-show',
          expression: 'isShow',
          name: 'show',
          value: true
        }],
        /* 静态class */
        staticClass: 'demo'
      },
      [h(undefined, undefined, undefined, 'This is a span.')]
    )
  }
});

vm.$mount('#app')

setTimeout(() => {
  vm._data.des = "hello,world." /* 视图更新啦～ */
}, 1000)