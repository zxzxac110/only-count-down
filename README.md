## 前言
使用 `微信小程序原生`开发发现在渲染商品列表的时候，每一个商品组件都引入 `vant-count-down` 组件进行倒计时时巨卡。

查看源码发现 
微信版本vant 内部使用
`function simpleTick(fn) {return setTimeout(fn, 30);}`
h5版本vant 使用 
`root.requestAnimationFrame || fallback;`
微信小程序不支持`requestAnimationFrame`
这会导致在使用 `setTimeout` 进行倒计时时定时器数量过多卡顿

这里想提供一个全局定时器。页面所有与定时器相关的操作都可以在一个定时器里面操作

**ps: 理论想法，未投入实际项目中。欢迎大家反馈问题**

大部分代码内容照搬的 `vant-count-down` 内容
演示地址 <https://zxzxac110.github.io/only-count-down/dist/index.html#/>
github地址 <https://github.com/zxzxac110/only-count-down.git>


## 使用
组件调用定时器 
```html
      <onlyCountDown time="180000"></onlyCountDown>
      <onlyCountDown millisecond time="180000" format="HH:mm:ss:SS"></onlyCountDown>
      <onlyCountDown time="180000" millisecond format="HH:mm:ss:SS">
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
```
函数调用处理自定义事件
```js
    <button @click="start">开始</button>
    <button @click="end">结束</button>
    <div>{{count1}},{{count2}},{{count3}}</div>
    <div>定时器数量-{{timeCount}}</div>

export default {
  data () {
    return {
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
```
