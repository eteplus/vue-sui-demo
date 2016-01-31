<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in imgs">
        <a @click="redirect(img.target)"><img :src="img.src"></a>
      </div>
    </div>
    <div class="swiper-pagination" ></div>
  </div>
</template>

<script>
import $ from 'zepto'

export default {
  props: {
    imgs: Array,
    config: Object
  },
  ready () {
    $.slider = $(this.$el).swiper(this.config)
  },
  methods: {
    redirect (target) {
      location.href = `http://${target}`
    }
  }
}
</script>

<style>
.swiper-container {
  height: 6rem;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding-bottom: 30px;
  z-index: 1
}
.swiper-container-no-flexbox .swiper-slide {
  float: left
}
.swiper-container-vertical>.swiper-wrapper {
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  flex-direction: column
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  box-sizing: content-box
}

.swiper-container-android .swiper-slide, .swiper-wrapper {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0)
}

.swiper-container-multirow>.swiper-wrapper {
  -webkit-box-lines: multiple;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap
}

.swiper-container-free-mode>.swiper-wrapper {
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  margin: 0 auto
}

.swiper-slide {
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative
}

.swiper-container .swiper-notification {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  opacity: 0;
  z-index: -1000
}

.swiper-wp8-horizontal {
  touch-action: pan-y
}

.swiper-wp8-vertical {
  touch-action: pan-x
}

.swiper-button-next, .swiper-button-prev {
  position: absolute;
  top: 50%;
  width: 1.35rem;
  height: 2.2rem;
  margin-top: -1.1rem;
  z-index: 10;
  cursor: pointer;
  background-size: 1.35rem 2.2rem;
  background-position: center;
  background-repeat: no-repeat
}

.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
  opacity: .35;
  cursor: auto;
  pointer-events: none
}

.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
  left: .5rem;
  right: auto
}

.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
  right: .5rem;
  left: auto
}

.swiper-pagination {
  position: absolute;
  text-align: center;
  -webkit-transition: .3s;
  transition: .3s;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10
}

.swiper-pagination.swiper-pagination-hidden {
  opacity: 0
}

.swiper-pagination-bullet {
  width: .4rem;
  height: .4rem;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: .2
}

.swiper-pagination-bullet-active {
  opacity: 1;
  /*background: #007aff*/
  background: #ed8e07;
}

.swiper-container-vertical>.swiper-pagination {
  right: .5rem;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0)
}

.swiper-container-vertical>.swiper-pagination .swiper-pagination-bullet {
  margin: .25rem 0;
  display: block
}

.swiper-container-horizontal>.swiper-pagination {
  bottom: .5rem;
  left: 0;
  width: 175%
}

.swiper-container-horizontal>.swiper-pagination .swiper-pagination-bullet {
  margin: 0 .25rem
}

.swiper-container-3d {
  -webkit-perspective: 600rem;
  perspective: 600rem
}

.swiper-container-3d .swiper-cube-shadow, .swiper-container-3d .swiper-slide, .swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top, .swiper-container-3d .swiper-wrapper {
  -webkit-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transform-style: preserve-3d
}

.swiper-container-3d .swiper-slide-shadow-bottom, .swiper-container-3d .swiper-slide-shadow-left, .swiper-container-3d .swiper-slide-shadow-right, .swiper-container-3d .swiper-slide-shadow-top {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10
}

.swiper-container-3d .swiper-slide-shadow-left {
  background-image: -webkit-linear-gradient(right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))
}

.swiper-container-3d .swiper-slide-shadow-right {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))
}

.swiper-container-3d .swiper-slide-shadow-top {
  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))
}

.swiper-container-3d .swiper-slide-shadow-bottom {
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))
}

.swiper-container-coverflow .swiper-wrapper {
  -ms-perspective: 600rem
}

.swiper-container-fade.swiper-container-free-mode .swiper-slide {
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out
}

.swiper-container-fade .swiper-slide {
  pointer-events: none
}

.swiper-container-fade .swiper-slide-active {
  pointer-events: auto
}

.swiper-container-cube {
  overflow: visible
}

.swiper-container-cube .swiper-slide {
  pointer-events: none;
  visibility: hidden;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  width: 100%;
  height: 100%
}

.swiper-container-cube.swiper-container-rtl .swiper-slide {
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0
}

.swiper-container-cube .swiper-slide-active, .swiper-container-cube .swiper-slide-next, .swiper-container-cube .swiper-slide-next+.swiper-slide, .swiper-container-cube .swiper-slide-prev {
  pointer-events: auto;
  visibility: visible
}

.swiper-container-cube .swiper-cube-shadow {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .6;
  -webkit-filter: blur(2.5rem);
  filter: blur(2.5rem)
}

.swiper-container-cube.swiper-container-vertical .swiper-cube-shadow {
  z-index: 0
}

.swiper-scrollbar {
  border-radius: .5rem;
  position: relative;
  -ms-touch-action: none;
  background: rgba(0, 0, 0, .1)
}

.swiper-container-horizontal>.swiper-scrollbar {
  position: absolute;
  left: 1%;
  bottom: .15rem;
  z-index: 50;
  height: .25rem;
  width: 98%
}

.swiper-container-vertical>.swiper-scrollbar {
  position: absolute;
  right: .15rem;
  top: 1%;
  z-index: 50;
  width: .25rem;
  height: 98%
}

.swiper-scrollbar-drag {
  height: 100%;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, .5);
  border-radius: .5rem;
  left: 0;
  top: 0
}

.swiper-scrollbar-cursor-drag {
  cursor: move
}
.swiper-slide .preloader {
  width: 2.1rem;
  height: 2.1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -1.05rem;
  margin-top: -1.05rem;
  z-index: 10
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
}
</style>