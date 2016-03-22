<template>
  <div class="loader">
    <!-- <div class="tips">努力加载中...</div> -->
    <div class="pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  ready () {
    setTimeout(() => {
      this.$route.router.go({path: '/home', replace: true})
    }, 1500)
  }
}
</script>

<style scoped>
-webkit-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@-webkit-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
.loader {
  width: 100%;
  height: 100%;
  z-index: 1100;
  position: absolute;
  background-color: white;
}
.pacman {
  left: 50%;
  top: 50%;
  margin-top: -2rem;
  margin-left: -1.5rem;
  position: absolute;
}
.pacman > div:nth-child(2) {
  -webkit-animation: pacman-balls 1s -0.99s infinite linear;
  animation: pacman-balls 1s -0.99s infinite linear;
}
.pacman > div:nth-child(3) {
  -webkit-animation: pacman-balls 1s -0.66s infinite linear;
  animation: pacman-balls 1s -0.66s infinite linear;
}
.pacman > div:nth-child(4) {
  -webkit-animation: pacman-balls 1s -0.33s infinite linear;
  animation: pacman-balls 1s -0.33s infinite linear;
}
.pacman > div:nth-child(5) {
  -webkit-animation: pacman-balls 1s 0s infinite linear;
  animation: pacman-balls 1s 0s infinite linear;
}
.pacman > div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid rgb(216, 65, 65);
  border-left: 1.5rem solid rgb(216, 65, 65);
  border-bottom: 1.5rem solid rgb(216, 65, 65);
  border-radius: 1.5rem;
  -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
  animation: rotate_pacman_half_up 0.5s 0s infinite;
  position: relative;
  left: -1.5rem;
}
.pacman > div:nth-child(2) {
  width: 0;
  height: 0;
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid rgb(216, 65, 65);
  border-left: 1.5rem solid rgb(216, 65, 65);
  border-bottom: 1.5rem solid rgb(216, 65, 65);
  border-radius: 1.5rem;
  -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
  animation: rotate_pacman_half_down 0.5s 0s infinite;
  margin-top: -3rem;
  position: relative;
  left: -1.5rem;
}
.pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
  background-color: rgb(216, 65, 65);
  /*width: 15px;
  height: 15px;*/
  border-radius: 100%;
  margin: 1rem;
  width: 1rem;
  height: 1rem;
  position: absolute;
  -webkit-transform: translate(0, -6.25px);
  -ms-transform: translate(0, -6.25px);
  transform: translate(0, -6.25px);
  top: .4rem;
  left: 4.2rem;
}
</style>
