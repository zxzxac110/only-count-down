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
      this.pause()
      this.remain = +this.time
      if (this.autoStart) {
        this.start()
      }
    },
    tick () { // 一次任务
      if (this.millisecond) {
        this.microTick()
      } else {
        this.macroTick()
      }
    },
    microTick () {
      this.rafId = raf(this.microTick2)
    },
    microTick2 () {
      if (!this.counting) {
        return
      }

      this.setRemain(this.getRemain())

      if (this.remain > 0) {
        this.microTick()
      }
    },
    macroTick () {
      this.rafId = raf(this.macroTick2)
    },
    macroTick2 () {
      if (!this.counting) {
        return
      }

      var remain = this.getRemain()

      if (!isSameSecond(remain, this.remain) || remain === 0) {
        this.setRemain(remain)
      }

      if (this.remain > 0) {
        this.macroTick()
      }
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
