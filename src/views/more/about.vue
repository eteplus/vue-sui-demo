<template>
<div class="content about">
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/more', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title" v-text="title"></h1>
  </header>
  <div class="content-padded" style="background: white;">
    <h4 style="text-align: center">感觉对您有帮助可以打赏一下小弟 ^_^ </h4>
    <p class="color-gray"></p>
    <v-content type="block" >
      <div class="invite-card">
          <div class="invite-card-content" style="height:100%;">
              <div class="center_code">
                  <div class="wx_code" style="width:100%;height:100%">
                      <img src="../../assets/img/qrcode.jpg" height="100%" width="100%" class="img_full">
                  </div>
              </div>
              <div class="url" style="margin-left: .4rem;height:3.8rem;margin-bottom: .4rem;">
              <p>https://github.com/eteplus/vue-sui-demo.git</p></div>
          </div>
      </div>
    </v-content>
  </div>
</div>
</template>

<script>
import VContent from '../../components/Content'

export default {
  ready () {
  },
  data () {
    return {
      title: '关于我们'
    }
  },
  components: {
    VContent
  }
}
</script>

<style scoped>
.about .content-padded {
  margin: 2.8rem 0 0 0;
  height: auto;
  padding: .4rem .4rem;
}
.about .list-block {
  margin: 2.2rem 0 0 0;
}
.about .content-block {
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
