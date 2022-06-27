import onlyCountDown from './index.vue'
import Timer from './utils/time.js'

const myPlugin = {
  // 该插件有一个install方法
  // 参数  传入的vue 插件的自定义参数
  install (Vue, options) {
    // 将其注册为组件
    Vue.component('onlyCountDown', onlyCountDown)
    var createTimer = new Timer()
    createTimer.start()
    Vue.prototype.$onlyCountDown = {
      create: function (option) { createTimer = new Timer(option) },
      start: (...data) => createTimer.start(...data),
      stop: (...data) => createTimer.stop(...data),
      on: (...data) => createTimer.on(...data),
      off: (...data) => createTimer.off(...data)
    }
  }
}

export default myPlugin
