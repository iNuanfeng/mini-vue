import Vue from '../src/vue'

let vm = new Vue({
  data: {
    title: "I am vue.",
    langs: ['js', 'css', 'html']
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
      [
        h(undefined, undefined, undefined, this._data.title),
        ...this._data.langs.map(item => h(undefined, undefined, undefined, item))
      ]
    )
  }
});

vm.$mount('#app')

setTimeout(() => {
  vm._data.title = 'hello,world.'
  vm._data.langs = ['js', 'html', 'css', 'java']
}, 1000)