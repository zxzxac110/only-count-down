<template>
  <div class="count-down-time">
    <slot v-bind="timeData">{{formattedTime}}</slot>
  </div>
</template>

<script>
import { parseTimeData, parseFormat, isSameSecond } from './utils/util'
import { raf, cancelRaf } from './utils/raf'
export default {
  props: {
    millisecond: Boolean, // 是否显示毫秒
    time: { // 倒计时时间
      type: [Number, String],
      default: 0
    },
    format: { // 日期格式
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: { // 是否自动倒计时
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      remain: 0, // 间隔时间
      counting: false, // 是否开启倒计时时
      endTime: 0, // 下次动画结束时间
      rafId: 0 // 动画id 定时器id
    }
  },
  computed: {
    timeData: function timeData () {
      return parseTimeData(this.remain)
    },
    formattedTime: function formattedTime () {
      return parseFormat(this.format, this.timeData)
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  activated () {
    if (this.keepAlivePaused) {
      this.counting = true
      this.keepAlivePaused = false
      this.tick()
    }
  },
  deactivated () {
    if (this.counting) {
      this.pause()
      this.keepAlivePaused = true
    }
  },
  beforeDestroy () {
    console.log('销毁')
    this.pause()
  },
  methods: {
    start () { // 开始
      if (this.counting) {
        return
      }
      this.counting = true
      this.endTime = Date.now() + this.remain
      this.tick()
    },
    pause () { // 暂停
      this.counting = false
      this.rafId && cancelRaf(this.rafId)
    },
    reset () { // 刷新
      console.log('刷新')
      this.pause()
      this.remain = +this.time
      console.log(this.remain)
      if (this.autoStart) {
        this.start()
      }
    },
    tick () { // 一次任务
      console.log('开始一次任务')
      if (this.millisecond) {
        this.microTick()
      } else {
        this.macroTick()
      }
    },
    microTick () {
      var _this = this
      this.rafId = raf(function () {
        if (!_this.counting) {
          return
        }

        _this.setRemain(_this.getRemain())

        if (_this.remain > 0) {
          _this.microTick()
        }
      })
    },
    macroTick () {
      var _this2 = this
      this.rafId = raf(function () {
        if (!_this2.counting) {
          return
        }

        var remain = _this2.getRemain()

        if (!isSameSecond(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain)
        }

        if (_this2.remain > 0) {
          _this2.macroTick()
        }
      })
    },
    getRemain () {
      return Math.max(this.endTime - Date.now(), 0)
    },
    setRemain (remain) {
      this.remain = remain
      this.$emit('change', this.timeData)
      if (remain === 0) {
        this.pause()
        this.$emit('finish')
      }
    }
  }
}
</script>

<style scoped>
.count-down-time .box {
  padding: 3px 0;
  margin: 0 5px;
}
</style>
