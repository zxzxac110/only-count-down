(function(t){function n(n){for(var o,r,s=n[0],a=n[1],c=n[2],f=0,p=[];f<s.length;f++)r=s[f],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&p.push(u[r][0]),u[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,s=1;s<e.length;s++){var a=e[s];0!==u[a]&&(o=!1)}o&&(i.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},u={app:0},i=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=a;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],r=e("2877"),s={},a=Object(r["a"])(s,u,i,!1,null,null,null),c=a.exports,l=e("8c4f"),f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h4",[t._v("组件调用")]),e("div",[e("onlyCountDown",{attrs:{time:t.list[0].time}}),e("onlyCountDown",{attrs:{millisecond:"",time:t.list[1].time,format:"HH:mm:ss:SS"}}),e("onlyCountDown",{attrs:{time:t.list[2].time,millisecond:"",format:"HH:mm:ss:SS"},scopedSlots:t._u([{key:"default",fn:function(n){return[n.days>0?e("span",[t._v(t._s(n.days))]):t._e(),n.days>0?e("span",[t._v("天")]):t._e(),n.hours>0?e("span",[t._v(t._s(n.hours))]):t._e(),n.hours>0?e("span",[t._v("时")]):t._e(),n.minutes>0?e("span",[t._v(t._s(n.minutes))]):t._e(),n.minutes>0?e("span",[t._v("分")]):t._e(),e("span",[t._v(t._s(n.seconds))]),e("span",[t._v("秒")]),e("span",[t._v(t._s(n.milliseconds))])]}}])})],1),e("h4",[t._v("函数调用处理自定义事件")]),e("button",{on:{click:t.start}},[t._v("开始")]),e("button",{on:{click:t.end}},[t._v("结束")]),e("div",[t._v(t._s(t.count1)+","+t._s(t.count2)+","+t._s(t.count3))]),e("div",[t._v("定时器数量-"+t._s(t.timeCount))])])},p=[],m={data:function(){return{list:[{name:"商品1",time:6e4},{name:"商品2",time:12e4},{name:"商品3",time:18e4},{name:"商品4",time:9240000009}],count1:0,count2:0,count3:0,timeCount:"-"}},methods:{timeFun1:function(){this.count1++},timeFun2:function(){this.count2++},timeFun3:function(){this.count3++},start:function(){this.end(),this.$onlyCountDown.on(this.timeFun1,1e3),this.$onlyCountDown.on(this.timeFun2,2e3),this.$onlyCountDown.on(this.timeFun3,3e3),clearTimeout(this.timeCount),this.timeCount=setTimeout((function(){}))},end:function(){this.$onlyCountDown.off(this.timeFun1),this.$onlyCountDown.off(this.timeFun2),this.$onlyCountDown.off(this.timeFun3)}}},d=m,h=(e("de16"),Object(r["a"])(d,f,p,!1,null,null,null)),v=h.exports;o["a"].use(l["a"]);var _=[{path:"/",name:"Home",component:v}],y=new l["a"]({routes:_}),b=y,w=e("2f62");o["a"].use(w["a"]);var C=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=e("25b9"),g=e.n(O);o["a"].config.productionTip=!1,o["a"].use(g.a),new o["a"]({router:b,store:C,render:function(t){return t(c)}}).$mount("#app")},"8d91":function(t,n,e){},de16:function(t,n,e){"use strict";e("8d91")}});
//# sourceMappingURL=app.8c7d3b7a.js.map