import Vue from '../src/vue'

let vm = new Vue({
  data: {
    title: "I am vue.",
    langs: ['js', 'css', 'html'],
    visible: true
  },
  render: function (h) {
    if (this._data.visible) {
      return h(
        'div', {
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
          h('p', {}, [
            h(undefined, undefined, undefined, this._data.title)
          ]),
          ...this._data.langs.map(item => 
            h('li', {}, [
              h(undefined, undefined, undefined, item)
            ])
          )
        ]
      )
    } else {
      return
    }
    
  }
});

vm.$mount('#app')

setTimeout(() => {
  vm._data.title = 'hello,world.'
  // vm._data.langs = ['js', 'html', 'css', 'java']
}, 500)


// setTimeout(() => {
//   // vm._data.langs = ['js', 'html', 'css', 'java']
//   vm._data.visible = false
// }, 1000)

