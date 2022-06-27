<template>
  <div class="about">
    <h4>组件调用</h4>
    <div>
      <onlyCountDown :time="list[0].time"></onlyCountDown>
      <onlyCountDown millisecond :time="list[1].time" format="HH:mm:ss:SS"></onlyCountDown>
      <onlyCountDown :time="list[2].time" millisecond format="HH:mm:ss:SS">
        <template #default="timeData">
          <span v-if="timeData.days > 0">{{ timeData.days }}</span>
          <span v-if="timeData.days > 0">天</span>
          <span v-if="timeData.hours > 0">{{ timeData.hours }}</span>
          <span v-if="timeData.hours > 0">时</span>
          <span v-if="timeData.minutes > 0">{{ timeData.minutes }}</span>
          <span v-if="timeData.minutes > 0">分</span>
          <span>{{ timeData.seconds }}</span>
          <span>秒</span>
          <span>{{ timeData.milliseconds }}</span>
        </template>
      </onlyCountDown>
    </div>

    <h4>函数调用处理自定义事件</h4>
    <button @click="start">开始</button>
    <button @click="end">结束</button>
    <div>{{count1}},{{count2}},{{count3}}</div>
    <div>定时器数量-{{timeCount}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 80000,
      list: [
        { name: '商品1', time: 60000 },
        { name: '商品2', time: 120000 },
        { name: '商品3', time: 180000 },
        { name: '商品4', time: 9240000009 }
      ],
      count1: 0,
      count2: 0,
      count3: 0,
      timeCount: '-'
    }
  },
  methods: {
    timeFun1 () {
      this.count1++
    },
    timeFun2 () {
      this.count2++
    },
    timeFun3 () {
      this.count3++
    },
    start () {
      this.end()
      this.$onlyCountDown.on(this.timeFun1, 1000)
      this.$onlyCountDown.on(this.timeFun2, 2000)
      this.$onlyCountDown.on(this.timeFun3, 3000)
      clearTimeout(this.timeCount)
      this.timeCount = setTimeout(() => { })
    },
    end () {
      this.$onlyCountDown.off(this.timeFun1)
      this.$onlyCountDown.off(this.timeFun2)
      this.$onlyCountDown.off(this.timeFun3)
    }
  }
}
</script>

<style lang="less">
.submit-btn {
  width: 50%;
  height: 50px;
  margin: 100px auto 0;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
  background: #f00;
  color: #fff;
  cursor: pointer;
}
</style>
