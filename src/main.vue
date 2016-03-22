<template>
  <div class="page page-current">
      <bar v-if="isIndex">
        <bar-item path="/home" label="首页" icon="home"></bar-item>
        <bar-item path="/tasks" label="任务" icon="tasks"></bar-item>
        <bar-item path="/list" label="列表" icon="mytask"></bar-item>
        <bar-item path="/user" label="我自己" icon="me"></bar-item>
        <bar-item path="/more" label="更多" icon="more"></bar-item>
      </bar>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar'
import BarItem from './components/BarItem'
// import {wxShareConfig} from './util/util'
import $ from 'zepto'
import wx from 'wx'

export default {
  ready () {
    // 微信配置
    wx.config({
      debug: false,
      appId: $.sign.appId,
      timestamp: $.sign.timestamp,
      nonceStr: $.sign.nonceStr,
      signature: $.sign.signature,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ]
    })
    // 在需要配置分享内容的时候调用
    // wxShareConfig()
  },
  data () {
    return {
      isIndex: true
    }
  },
  components: {
    Bar,
    BarItem
  }
}
</script>

<style>
@import './assets/css/sm.css';
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
