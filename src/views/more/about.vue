<template>
<div class="content about">
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-left" v-link="{path: '/more', replace: true}">
    <span class="icon icon-left"></span>
    </a>
    <h1 class="title" v-text="title"></h1>
  </header>
  <div class="content-padded" style="background-color: white;">
    <h4 style="text-align: center"> ^_^ 感觉对您有帮助可以捐助小弟 ^_^ </h4>
    <p class="color-gray"></p>
    <v-content type="block">
      <div class="invite-card">
          <div class="invite-card-content" style="height:100%;">
              <div class="center_code">
                  <span class="card_text">eteplus</span>
                  <div class="wx_code" style="width:80%;height:80%">
                      <img src="../../assets/qrcode.jpg" height="100%" width="100%" class="img_full">
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

<style>
.about .content-padded {
  margin: 2.8rem 0 0 0;
  height: auto;
  padding: .4rem .4rem;
}
  
</style>