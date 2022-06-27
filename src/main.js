import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import onlyCountDown from './lib/only-count-down'

Vue.config.productionTip = false

Vue.use(onlyCountDown)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
