class Timer {
  constructor (option) {
    this._listeners = []
    this._option = Object.assign({
      ms: 1000
    }, option || {})

    this._time = 0
  }

  start () {
    this.stop()
    this.id = setInterval(() => {
      this._time += this._option.ms
      this._listeners.forEach(e => {
        try {
          if (!(this._time % (e.step || this._time))) {
            (async () => e.cb && e.cb())()
          }
        } catch (e) {
          // error handle
        }
      })
    }, this._option.ms)

    return this
  }

  stop () {
    this.id && clearInterval(this.id)

    this.id = null

    return this
  }

  on (cb, step) {
    this._listeners.push({
      step,
      cb
    })
  }

  off (key) {
    const index = this._listeners.length - 1
    switch (true) {
      case typeof (key) === 'number':
        this._listeners.splice(key, 1)
        break
      default:
        for (let i = index; i >= 0; i--) {
          if (this._listeners[i].cb === key) {
            this._listeners.splice(i, 1)
            break
          }
        }
    }
  }
}
export default Timer
