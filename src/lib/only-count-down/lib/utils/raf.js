var prev = Date.now()
var root = window || global
var iRaf = root.requestAnimationFrame || fallback
var iCancel = root.cancelAnimationFrame || root.clearTimeout

function fallback (fn) {
  var curr = Date.now()
  var ms = Math.max(0, 16 - (curr - prev))
  var id = setTimeout(fn, ms)
  prev = curr + ms
  return id
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
