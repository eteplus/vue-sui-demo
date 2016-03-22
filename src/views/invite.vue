<template>
<div class="content invite">
  <v-nav :path="path" :title="title"></v-nav>
  <v-list>
    <li class="item-content">
      <div class="item-inner">
        <div class="item-title">邀请奖励</div>
        <div class="item-after" style="color:green">888分</div>
      </div>
    </li>
  </v-list>
  <v-content type="block">
    <div class="invite-card">
        <div class="invite-card-content">
            <div class="left_logo">
              <img src="../assets/img/logo.png" height="256" width="256" class="img_full" style="border-radius: 50px">
            </div>
            <div class="center_code">
                <span class="card_text">eteplus</span>
                <div class="wx_code">
                    <img src="../assets/img/qrcode.jpg" height="795" width="795" class="img_full">
                </div>
                <div class="code_down">
                    <span>长按保存发送好友</span>
                    <span style="color:#0894ec;">长按复制推广网址</span>
                </div>
            </div>
            <div class="url"><p>http://abc.coms?i=1235</p></div>
        </div>
    </div>
  </v-content>
</div>
</template>

<script>
import VNav from '../components/Nav'
import VContent from '../components/Content'
import VList from '../components/List'

export default {
  route: {
    data ({from, next}) {
      if (from.path === '/user') {
        this.path = from.path
      }
    }
  },
  data () {
    return {
      title: '邀请有奖',
      path: '/home'
    }
  },
  components: {
    VNav,
    VContent,
    VList
  }
}
</script>

<style scoped>
.invite .list-block {
  margin: 2.2rem 0 0 0;
}
.invite .content-block {
  margin: .75rem 0;
}
.invite-card {
  padding: .1rem;
}
.invite-card .invite-card-content {
  width: 100%;
  height: 380.2666429px;
  border: 1px solid #B2B2B2;
  border-radius: 8px;
  background-color: #ffffff;
  padding-top: 26.666665px;
}
.invite-card .left_logo {
  width: 3rem;
  height: 3rem;
  float: left;
  margin-left: .8rem;
}
.center_code {
  width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
}
.img_full {
  width: 100%;
  height: 100%;
}
.card_text {
  color: #000000;
  font-size: .8rem;
  font-weight: 600;
  display: block;
  width: 100%;
  padding-left: 43%;
}
.center_code .code_down {
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  line-height: 20px;
}
.code_down span {
  color: #000000;
  font-size: .8rem;
  font-weight: 600;
  display: block;
  width: 100%;
  margin-bottom: .5rem;
}
.center_code .wx_code {
  margin: 0 auto;
  width: 50%;
  height: 50%;
}
.url {
  width: 95%;
  height: 2.8rem;
  font-size: .8rem;
  text-align: center;
  border: 1px dashed black;
  margin-left: .3rem;
  border-radius: .8rem;
  overflow: hidden;
}
</style>
