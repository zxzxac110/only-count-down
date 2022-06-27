import { requestAnimationFrameTimer } from './createTimer.js'

var prev = Date.now()
var root = window || global

// vant
// var iRaf = root.requestAnimationFrame || fallback
// var iCancel = root.cancelAnimationFrame || root.clearTimeout
// my
var timeList = []
var iRaf = fallback
var iCancel = stop
function fallback (fn) {
  var curr = Date.now()
  var ms = Math.max(0, 16 - (curr - prev))
  // vant
  // var id = setTimeout(fn, ms)
  prev = curr + ms
  // my
  var id = fn
  if (timeList.indexOf(fn) === -1) {
    debugger
    requestAnimationFrameTimer.on(fn, 0)
    timeList.push(fn)
  }
  return id
}
function stop (fn) {
  if (timeList.indexOf(fn) > -1) {
    timeList.splice(timeList.indexOf(fn), 1)
  }
  requestAnimationFrameTimer.off(fn)
}

function raf (fn) {
  return iRaf.call(root, fn)
}

// function doubleRaf (fn) {
//   raf(function () {
//     raf(fn)
//   })
// }

function cancelRaf (id) {
  iCancel.call(root, id)
}

export {
  raf,
  cancelRaf
}
