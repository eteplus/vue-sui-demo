<template>
<div class="withdraw">
  <v-nav path="/user" :title="title"></v-nav>
  <v-tabs
    class-name="wd-tabs"
    type="tab">
    <v-tab name="tab1" title="Tab1" status="active"
    distance="55" v-pull-to-refresh="refresh" >
      <v-layer></v-layer>
      <v-card>
        <v-card-item type="header">卡头</v-card-item>
        <v-card-item type="content">
          <v-card-item type="content-inner">
          这是一个用纯文本的简单卡片。但卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。
          </v-card-item>
        </v-card-item>
        <v-card-item type="footer">卡脚</v-card-item>
      </v-card>
      <v-card>
        <v-card-item type="content">
          <v-card-item type="content-inner">
          这是一个用纯文本的简单卡片。但卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。
          </v-card-item>
        </v-card-item>
      </v-card>
      <v-card>
        <v-card-item
          type="header"
          valign="bottom"
          class-name="color-white no-border no-padding">
          <img class='card-cover' src="//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" alt="">
        </v-card-item>
        <v-card-item type="content">
          <v-card-item type="content-inner">
            <p class="color-gray">发表于 2015/01/15</p>
            <p>此处是内容...</p>
          </v-card-item>
        </v-card-item>
        <v-card-item type="footer">
          <a href="#" class="link">赞</a>
          <a href="#" class="link">更多</a>
        </v-card-item>
      </v-card>
      <v-card>
        <v-card-item type="content">
        <div class="list-block">
          <ul>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">链接 1</div>
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="item-link item-content">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner">
                  <div class="item-title">链接 1</div>
                </div>
              </a>
            </li>
          </ul>
      </div>
      </v-card-item>
      </v-card>
    </v-tab>
    <v-tab name="tab2" title="Tab2">
      <v-content
        type="block">
        tab2
      </v-content>
    </v-tab>
    <v-tab name="tab3" title="Tab3">
      <v-content
        type="block">
        tab3
      </v-content>
    </v-tab>
  </v-tabs>
</div>
</template>

<script>
import VIcon from '../../components/Iconfont'
import VButton from '../../components/Button'
import VNav from '../../components/Nav'
import VTabs from '../../components/Tabs'
import VTab from '../../components/Tab'
import VContent from '../../components/Content'
import VLayer from '../../components/PullToRefreshLayer'
import VCard from '../../components/Card'
import VCardItem from '../../components/CardItem'
import $ from 'zepto'

export default {
  ready () {
    this.tabItem.options = [
      {
        path: '/home',
        icon: 'app',
        label: '首页'
      },
      {
        path: '/article',
        icon: 'star',
        label: '文章'
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
    $.init()
  },
  data () {
    return {
      title: '我的账户',
      tabItem: {
        options: [],
        activeClass: 'inactive'
      },
      cards: [
        '1',
        '2',
        '3',
        '4'
      ]
    }
  },
  methods: {
    refresh () {
      $.showIndicator()
      setTimeout(function () {
        console.log('refresh')
        $.pullToRefreshDone('.pull-to-refresh-content')
        $.hideIndicator()
      }, 1500)
    }
  },
  components: {
    VIcon,
    VButton,
    VNav,
    VTabs,
    VTab,
    VContent,
    VLayer,
    VCard,
    VCardItem
  }
}
</script>

<style>
.withdraw {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.wd-tabs {
  margin-top: 2.2rem;
}
.wd-tabs .buttons-tab {
  z-index: 10;
}
#tab1 {
  top: 2.2rem;
}
</style>
