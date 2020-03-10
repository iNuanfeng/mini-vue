import Vue from '../src/vue'

let vm = new Vue({
  data: {
    title: "I am vue.",
    des: "I am description."
  },
  render: function () {
    const html = `
      <p>${this._data.title}</p>
      <span>${this._data.des}</span>
    `

    return html
  }
});

vm.$mount('#app')

setTimeout(() => {
  vm._data.des = "hello,world."; /* 视图更新啦～ */
}, 1000)