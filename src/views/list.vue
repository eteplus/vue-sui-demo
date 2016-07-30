<template>
  <div class="container">
    <nav class="bar bar-nav">
      <h1 class="title">滚动加载更多</h1>
    </nav>
    <div class="content list"
    v-infinite-scroll="loadMore">
      <div class="list-block infinite-list">
        <ul>
          <li class="item-content" v-for="item in items" track-by="$index">
            <div class="item-media"><i class="icon icon-dianji"></i></div>
            <div class="item-inner">
              <div class="item-title">商品名称</div>
              <div class="item-after">{{item.name}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {loader} from '../util/util'
import $ from 'zepto'

export default {
  route: {
    data ({to, next}) {
      next()
    }
  },
  ready () {
    for (let i = 0; i < 15; i++) {
      this.items.push({
        id: i,
        name: `demo${i + 1}`
      })
    }
  },
  data () {
    return {
      items: [],
      loading: false
    }
  },
  computed: {
    length () {
      return this.items.length
    }
  },
  methods: {
    loadMore () {
      if (this.loading) {
        return
      }
      this.loading = true
      let scroller = $('.list')
      loader.show()
      setTimeout(() => {
        let i = this.length
        this.items.push({
          id: i,
          name: `demo${i + 1}`
        })
        let scrollTop = scroller[0].scrollHeight - scroller.height() - 20
        scroller.scrollTop(scrollTop)
        this.loading = false
        loader.hide()
      }, 1500)
    }
  }
}
</script>

<style scoped>
.list-block {
  margin: .5rem 0;
}
.list {
  bottom: 2.5rem;
  padding-bottom: 1rem;
}
</style>
