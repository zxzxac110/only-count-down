import Timer from './time.js'
var createTimer = new Timer()
createTimer.create = function (option) {
  createTimer.stop()
  createTimer = new Timer(option)
}
createTimer.start()

var requestAnimationFrameTimer = new Timer({ ms: 1000 / 600 })
requestAnimationFrameTimer.start()

export { requestAnimationFrameTimer }

export default createTimer
