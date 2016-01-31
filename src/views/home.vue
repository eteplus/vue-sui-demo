<template>
<div class="content home" action="refresh" distance="55" v-pull-to-refresh>
  <v-layer></v-layer>
  <slider :imgs="slider.imgs" :config="slider.config"></slider>
  <v-bar
    type="tab"
    :class-name="bar.className">
    <v-tab-item :options="bar"></v-tab-item>
  </v-bar>
  <v-content type="block-title" style="margin: 0.9rem .75rem 0.9rem;">
    <span style="float:left;margin-left: .2rem;">任务推荐</span>
    <span style="float:right;margin-right: .2rem;">更多任务</span>
  </v-content>
  <div class="card-container">
    <v-card-container v-for="task in tasks | orderBy 'id' -1">
      <card type="content">
        <v-list type="media">
            <li class="item-content">
              <div class="item-media">
                <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44">
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-text">{{task.title}}</div>
                </div>
              </div>
            </li>
        </v-list>
      </card>
      <card type="footer">
        <span>赞助商：{{task.adv}}</span>
        <span style="color:orange;font-weight: bold">{{task.point}}积分</span>
      </card>
    </v-card-container>
  </div>
</div>
</template>

<script>
import $ from 'zepto'
import Slider from '../components/Slider'
import VBar from '../components/Bar'
import VTabItem from '../components/BarTabItem'
import VLayer from '../components/PullToRefreshLayer'
import VCardContainer from '../components/Card'
import Card from '../components/CardItem'
import VContent from '../components/Content'
import VList from '../components/List'

export default {
  ready () {
    console.log('home ready')
    $.init()
  },
  data () {
    return {
      slider: {
        imgs: [
          {
            src: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
            target: 'www.baidu.com'
          },
          {
            src: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
            target: 'www.baidu.com'
          },
          {
            src: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
            target: 'www.baidu.com'
          },
          {
            src: '//gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i1/TB1n3rZHFXXXXX9XFXXXXXXXXXX_!!0-item_pic.jpg_320x320q60.jpg',
            target: 'www.baidu.com'
          }
        ],
        config: {
          autoplay: 1200
        }
      },
      bar: {
        items: [
          {
            path: '/home/rank',
            icon: 'star',
            label: '排行榜'
          },
          {
            path: '/home/tasks',
            icon: 'computer',
            label: '我的任务'
          },
          {
            path: '/home/invite',
            icon: 'friends',
            label: '邀请有奖'
          }
        ],
        activeClass: 'inactive',
        className: 'home-bar'
      },
      tasks: [
        {
          id: 1,
          title: '标题1',
          adv: 'abc1',
          point: 100
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
    refresh () {
      setTimeout(function () {
        let num = this.length + 1
        let title = `标题${num}`
        let adv = `abc${num}`
        let point = 100 + num - 1
        this.tasks.push({
          id: num,
          title: title,
          adv: adv,
          point: point
        })
        $.pullToRefreshDone('.pull-to-refresh-content')
      }.bind(this), 1500)
    }
  },
  components: {
    Slider,
    VBar,
    VTabItem,
    VLayer,
    VCardContainer,
    Card,
    VContent,
    VList
  },
  route: {
    data ({to, next}) {
      console.log('route home data')
      next()
    },
    activate ({to, next}) {
      console.log('route home activate')
      if ($.slider !== undefined) {
        $.slider.stopAutoplay()
        $.slider.startAutoplay()
      }
      next()
    }
  }
}
</script>

<style>
.home {
  top: -2.2rem !important;
}
.home-bar {
  background: #efeff4;
  height: 3.6rem;
  position: relative;
  box-shadow: 0 .01rem .05rem rgba(0,0,0,.3);
}
.home-bar .tab-item {
  height: 3.6rem;
  background-color: white;
}
</style>