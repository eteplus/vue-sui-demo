<template>
<a :class="classes"
  v-for="item in options.items"
  v-link="{ path: item.path, activeClass: options.activeClass, replace: true}">
  <span class="icon" :class="'icon-' + item.icon"></span>
  <span class="tab-label" v-text="item.label"></span>
</a>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
    options: {
      type: Object,
      require: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      let defaultCls = 'tab-item'
      return cx({
        [defaultCls]: 1,
        [this.className]: !!this.className
      })
    }
  }
}
</script>