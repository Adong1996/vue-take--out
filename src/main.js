import Vue from 'vue'

import 'lib-flexible/flexible'

import App from './App.vue'
import router from './router'
import Header from './components/Hearder/Header.vue'
Vue.config.productionTip = false
Vue.component('Header',Header)//注册全局组件
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
