<template>
<div class="profit-record">
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/user', replace: true}">
      <span class="icon icon-left"></span>
    </a>
    <h1 class="title">个人明细</h1>
  </header>
  <div class="buttons-row">
    <a href="#system" class="tab-link button active">系统</a>
    <a href="#task" class="tab-link button">任务</a>
    <a href="#invite" class="tab-link button">邀请好友</a>
    <a href="#withdraw" class="tab-link button">积分提现</a>
  </div>
  <div class="tabs">
    <div id="system" class="content tab active" distance="55" v-pull-to-refresh="refresh">
      <div class="pull-to-refresh-layer">
        <div class="preloader"></div>
        <div class="pull-to-refresh-arrow"></div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="card-header">card</div>
          <div class="card-content">
            <div class="card-content-inner">
                这里是第2个card，下拉刷新会出现第2个card。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="task" class="tab">2</div>
    <div id="invite" class="tab">3</div>
    <div id="withdraw" class="tab">4</div>
  </div>
</div>
</template>

<script>
import $ from 'zepto'
export default {
  ready () {
    $.init()
  },
  methods: {
    refresh () {
      setTimeout(function () {
        let cardNumber = $(this.$el).find('.card').length + 1
        let cardHTML = '<div class="card">' +
          '<div class="card-header">card' + cardNumber + '</div>' +
          '<div class="card-content">' +
          '<div class="card-content-inner">' +
          '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
          '</div>' +
          '</div>' +
          '</div>'
        $(this.$el).find('.card-container').prepend(cardHTML)
        // 加载完毕需要重置
        $.pullToRefreshDone('.pull-to-refresh-content')
      }.bind(this), 1500)
    }
  }
}
</script>

<style>
.profit-record {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.profit-record .buttons-row {
  margin: 2.7rem auto 1rem auto;
  z-index: 10;
  width: 94%;
  background-color: white;
}
.profit-record .buttons-row .button {
  height: 2rem;
  line-height: 1.9rem;
  z-index: 10;
  background-color: white;
}
.profit-record .buttons-row .button.active {
  background-color: #0894ec;
  color: #fff;
  z-index: 10;
}
.profit-record .tabs .tab{
  top: 2.5rem;
}
</style>
