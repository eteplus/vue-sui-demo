<template>
<div class="content more">
  <header class="bar bar-nav">
    <h1 class="title">更多</h1>
  </header>
  <div class="list-block">
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

<style scoped>
.list-block {
  margin: 2.75rem 0;
  height: 2.9rem;
}
.list-block ul {
  height: 2.9rem;
}
.list-block .item-content {
  margin-top: .7rem;
  height: inherit;
}
</style>
