<template>
  <div class="container">
    <nav class="bar bar-nav">
      <h1 class="title">滚动加载更多</h1>
    </nav>
    <div class="content infinite-scroll infinite-scroll-bottom"
    v-infinite-scroll="loadMore">
      <div class="list-block">
        <ul class="list-container">
          <li class="item-content" v-for="item in items">
            <div class="item-media"><i class="icon icon-dianji"></i></div>
            <div class="item-inner">
              <div class="item-title">商品名称</div>
              <div class="item-after">{{item.name}}</div>
            </div>
          </li>
        </ul>
      </div>
      <!-- 加载提示符 -->
      <div class="infinite-scroll-preloader" v-show="loading">
          <div class="preloader"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import {loader} from '../util/util'
// import $ from 'zepto'

export default {
  route: {
    data ({to, next}) {
      next()
    }
  },
  ready () {
    // 预先加载20条
    this.addItems(20, 0)
  },
  data () {
    return {
      items: [],
      loading: false, // 加载flag
      maxItems: 100, // 最多可加载的条目
      itemsPerLoad: 5, // 每次加载添加多少条目
      lastIndex: 20 // 上次加载的序号
    }
  },
  computed: {
  },
  methods: {
    loadMore () {

      // 如果正在加载，则退出
      if (this.loading) return

      // 设置flag
      this.loading = true

      // 模拟1.5s的加载过程
      setTimeout(() => {
        // 重置加载flag
        this.loading = false

        if (this.lastIndex >= this.maxItems) {
          // TODO! 加载完毕，则注销无限加载事件，以防不必要的加载
          // $.detachInfiniteScroll($('.infinite-scroll'))
          // 删除加载提示符
          // $('.infinite-scroll-preloader').remove()
          return
        }

        // 添加新条目
        this.addItems(this.itemsPerLoad, this.lastIndex)
        // 更新最后加载的序号
        this.lastIndex = this.items.length

      }, 1500)
    },
    addItems (number, lastIndex) {
      // 生成新条目的数据
      for (let i = lastIndex; i < lastIndex + number; i++) {
        this.items.push({
          id: i,
          name: `demo${i + 1}`
        })
      }
    }
  }
}
</script>

<style scoped>
.list-block {
  margin: .5rem 0;
}
.infinite-scroll-bottom {
  bottom: 2.2rem;
}
</style>
