<template>
<div class="tasks">
  <v-nav :path="path" :title="title"></v-nav>
  <v-tabs type="tab" class-name="tasks-tabs">
    <v-tab name="all-tasks" title="所有任务" status="active"
    distance="55" v-pull-to-refresh="refreshAll">
      <v-layer></v-layer>
      <div class="allTasks">
          <v-card-container>
            <card type="header">card1</card>
            <card type="content">
              <card type="content-inner">
              这里是第1个card，下拉刷新会出现第2个card
              </card>
            </card>
          </v-card-container>
      </div>
    </v-tab>
    <v-tab name="my-tasks" title="我的任务"
    distance="55" v-pull-to-refresh="refreshMine">
      <v-layer></v-layer>
      <div class="myTasks">
          <v-card-container v-for="task in tasks | orderBy 'id' -1">
            <card type="header">{{task.title}}</card>
            <card type="content">
              <card type="content-inner">
              {{task.content}}
              </card>
            </card>
          </v-card-container>
      </div>
    </v-tab>
  </v-tabs>
</div>
</template>

<script>
import $ from 'zepto'
import VNav from '../../components/Nav'
import VButton from '../../components/Button'
import VIcon from '../../components/Iconfont'
import VTabs from '../../components/Tabs'
import VTab from '../../components/Tab'
import VLayer from '../../components/PullToRefreshLayer'
import VCardContainer from '../../components/Card'
import Card from '../../components/CardItem'

export default {
  route: {
    data ({from, next}) {
      if (from.path === '/user') {
        this.path = from.path
      }
    }
  },
  ready () {
    $.init()
  },
  data () {
    return {
      path: '/home',
      title: '任务列表',
      tasks: [
        {
          id: 1,
          title: 'card1',
          content: '这里是第1个card，下拉刷新会出现第2个card'
        }
      ]
    }
  },
  computed: {
    length () {
      return this.tasks.length
    }
  },
  methods: {
    refreshAll () {
      $.showIndicator()
      setTimeout(function () {
        console.log('refreshAll')
        let cardNumber = $(this.$el).find('.card').length
        let cardHTML = '<div class="card">' +
          '<div class="card-header">card' + cardNumber + '</div>' +
          '<div class="card-content">' +
          '<div class="card-content-inner">' +
          '这里是第' + cardNumber + '个card，下拉刷新会出现第' + (cardNumber + 1) + '个card。' +
          '</div>' +
          '</div>' +
          '</div>'
        $(this.$el).find('.allTasks').prepend(cardHTML)
        // 加载完毕需要重置
        $.pullToRefreshDone('.pull-to-refresh-content')
        $.hideIndicator()
      }.bind(this), 1500)
    },
    refreshMine () {
      $.showIndicator()
      setTimeout(function () {
        console.log('refreshMine')
        let num = this.length + 1
        let title = `card${num}`
        let content = `这里是第${num}个card，下拉刷新会出现第${num + 1}个card。`
        this.tasks.push({
          id: num,
          title: title,
          content: content
        })
        $.pullToRefreshDone('.pull-to-refresh-content')
        $.hideIndicator()
      }.bind(this), 1500)
    }
  },
  components: {
    VNav,
    VButton,
    VIcon,
    VTabs,
    VTab,
    VLayer,
    VCardContainer,
    Card
  }
}
</script>

<style>
.tasks {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.tasks-tabs .buttons-tab {
  z-index: 10;
  margin-top:2.2rem;
}
#all-tasks, #my-tasks {
  top: 2rem;
}
</style>
