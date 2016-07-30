<template>
  <div id="islider"></div>
</template>

<script>
import ISlider from '../assets/js/iSlider'

export default {
  data () {
    return {
      slider: null
    }
  },
  ready () {
    this.$http.get('banner.json')
    .then(({data: {code, message, data}}) => {
      let imgs = []
      for (let i = 0; i < data.length; i++) {
        imgs.push(data[i])
      }
      let self = this
      this.slider = new ISlider({
        dom: self.$el,
        data: imgs,
        isVertical: false,
        isLooping: true,
        isDebug: false,
        isAutoplay: true
      })
    })
  }
}
</script>

<style>
#islider {
  height: 135px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
#islider  ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}
#islider li {
  position: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-pack: start;
  list-style: none;
}
#islider li img {
  width: 100%;
  height: auto;
}
</style>
