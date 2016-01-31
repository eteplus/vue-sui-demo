<template>
  <div class="page page-current">
      <v-bar type="tab"
        v-if="isIndex">
        <v-tab-item :options="options"></v-tab-item>
      </v-bar>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import VBar from './components/Bar'
import VTabItem from './components/BarTabItem'

export default {
  ready () {
    this.options.items = [
      {
        path: '/home',
        icon: 'app',
        label: '首页'
      },
      {
        path: '/article',
        icon: 'star',
        label: '任务'
      },
      {
        path: '/user',
        icon: 'me',
        label: '我自己'
      },
      {
        path: '/more',
        icon: 'gift',
        label: '更多'
      }
    ]
  },
  data () {
    return {
      isIndex: true,
      title: '首页',
      options: {
        items: [],
        activeClass: 'active'
      }
    }
  },
  components: {
    VBar,
    VTabItem
  }
}
</script>

<style>
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
