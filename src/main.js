import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick' // 解决移动端点击事件300毫秒延迟
import 'common/stylus/index.styl'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  render: h => h(App),
}).$mount('#app')
