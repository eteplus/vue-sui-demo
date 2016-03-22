<template>
<div class="rank">
  <v-nav :path="path" :title="title"></v-nav>
  <v-tabs type="tab" class-name="rank-tabs">
    <v-tab name="point" title="积分排行" status="active"
    distance="55" v-pull-to-refresh="refreshPoint">
      <v-layer></v-layer>
      <v-content type="block-title">
        <span style="float:left;margin-left: .2rem;">积分排行榜</span>
        <span style="float:right;margin-right: .2rem;">排名</span>
      </v-content>
      <v-list type="media" class-name="inset">
        <li class="item-content" v-for="rank in ranks">
          <div class="item-media">
          <img :src="rank.avatar" style='width: 2.2rem;'>
          </div>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title" v-text="rank.nickname"></div>
            </div>
            <div class="rank-num" :style="rank.color">{{ $index+1 }}</div>
            <div class="item-subtitle">总积分：{{rank.point}}</div>
          </div>
        </li>
      </v-list>
    </v-tab>
    <v-tab name="invite" title="邀请排行"
    distance="55" v-pull-to-refresh="refreshInvite">
      <v-layer></v-layer>
      <v-content type="block-title">
        <span style="float:left;margin-left: .2rem;">邀请排行榜</span>
        <span style="float:right;margin-right: .2rem;">排名</span>
      </v-content>
      <v-list type="media" class-name="inset">
        <li class="item-content" v-for="rank in ranks">
          <div class="item-media">
          <img :src="rank.avatar" style='width: 2.2rem;'>
          </div>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title" v-text="rank.nickname"></div>
            </div>
            <div class="rank-num" :style="rank.color">{{ $index+1 }}</div>
            <div class="item-subtitle">总邀请：{{rank.point}}</div>
          </div>
        </li>
      </v-list>
    </v-tab>
  </v-tabs>
</div>
</template>

<script>
import $ from 'zepto'
import VBar from '../components/Bar'
import VNav from '../components/Nav'
import VContent from '../components/Content'
import VButton from '../components/Button'
import VIcon from '../components/Iconfont'
import VList from '../components/List'
import VTabs from '../components/Tabs'
import VTab from '../components/Tab'
import VLayer from '../components/PullToRefreshLayer'

export default {
  ready () {
    $.init()
  },
  data () {
    return {
      title: '排行榜',
      path: '/home',
      ranks: [
        {
          avatar: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg',
          nickname: 'A',
          point: 1300,
          color: 'background-color: red;'
        },
        {
          avatar: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg',
          nickname: 'B',
          point: 1200,
          color: 'background-color: blue;'
        },
        {
          avatar: 'http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg',
          nickname: 'C',
          point: 1100,
          color: 'background-color: purple;'
        }
      ]
    }
  },
  methods: {
    refreshPoint () {
      $.showIndicator()
      setTimeout(function () {
        console.log('refresh')
        $.pullToRefreshDone('.pull-to-refresh-content')
        $.hideIndicator()
      }, 1500)
    },
    refreshInvite () {
      $.showIndicator()
      setTimeout(function () {
        console.log('refresh')
        $.pullToRefreshDone('.pull-to-refresh-content')
        $.hideIndicator()
      }, 1500)
    }
  },
  components: {
    VBar,
    VNav,
    VContent,
    VList,
    VButton,
    VIcon,
    VTabs,
    VTab,
    VLayer
  }
}
</script>

<style>
.rank {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.rank .content-block-title {
  margin: .75rem .75rem .5rem;
}
.rank .list-block.inset {
  margin-left: .35rem;
  margin-right: .35rem;
}
.rank .rank-num {
  float: right;
  min-width: 1.2rem;
  line-height: 1.2rem;
  border-radius: 50%;
  padding-left: .35rem;
  color: white;
  margin-top: -.7rem;
  vertical-align: top;
  display: inline-block;
  font-size: .8rem;
}
.rank-tabs .buttons-tab {
  z-index: 10;
  margin-top: 2.2rem;
}
#point, #invite  {
  top: 2.2rem;
}
</style>
