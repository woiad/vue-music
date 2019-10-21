import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick' // 解决移动端点击事件300毫秒延迟
import 'common/stylus/index.styl'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
