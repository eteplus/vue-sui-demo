<template>
<nav :class="classes">
  <slot></slot>
</nav>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'bar'
    },
    type: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return cx({
        [this.className]: !!this.className,
        [`${this.prefixCls}-${this.type}`]: !!this.type,
        [this.prefixCls]: 1
      })
    }
  }
}
</script>

<style lang="less">
.tab-item.active {
  color:  #ed8e07 !important;
}
.tab-item.inactive {
}
</style>