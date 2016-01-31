<template>
<div class="content more">
  <header class="bar bar-nav" style="position: fixed">
    <h1 class="title" v-text="title"></h1>
  </header>
  <div class="list-block more-list">
    <ul>
      <li class="item-content item-link">
        <div class="item-inner">
          <div class="item-title">使用教程</div>
        </div>
      </li>
    </ul>
    <ul>
      <li class="item-content item-link">
        <div class="item-inner">
          <div class="item-title">高阶攻略</div>
        </div>
      </li>
    </ul>
    <ul>
      <li class="item-content item-link">
        <div class="item-inner">
          <div class="item-title">宣传页面</div>
        </div>
      </li>
    </ul>
    <br>
    <ul>
      <li class="item-content item-link" v-link="{ path: '/more/feedback', replace: true}">
        <div class="item-inner">
          <div class="item-title">意见反馈</div>
        </div>
      </li>
    </ul>
    <ul>
      <li class="item-content item-link" v-link="{ path: '/more/about', replace: true}">
        <div class="item-inner">
          <div class="item-title">关于我们</div>
        </div>
      </li>
    </ul>
    <br>
  </div>
</div>
</template>

<script>
export default {
  ready () {
  },
  data () {
    return {
      title: '更多'
    }
  }
}
</script>

<style>
.more-list {
  margin: 2.75rem 0;
  height: 2.9rem;
}
.more-list ul {
  height: 2.9rem;
  /*box-shadow: 0 .01rem 0 .03rem rgba(0,0,0,.3);*/
}
.more-list .item-content {
  margin-top: .7rem;
  height: inherit;
}
</style>