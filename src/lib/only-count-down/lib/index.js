import onlyCountDown from './index.vue'
import createTimer from './utils/createTimer.js'

const myPlugin = {
  // 该插件有一个install方法
  // 参数  传入的vue 插件的自定义参数
  install (Vue, options) {
    // 将其注册为组件
    Vue.component('onlyCountDown', onlyCountDown)
    Vue.prototype.$onlyCountDown = {
      create: (...data) => createTimer.create(...data),
      start: () => createTimer.start(),
      stop: () => createTimer.stop(),
      on: (cb, step) => createTimer.on(cb, step),
      off: (key) => createTimer.off(key)
    }
  }
}

export default myPlugin
