import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router'
import './plugins/element.js'
import store from './store'

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
