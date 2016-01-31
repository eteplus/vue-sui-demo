<template>
<span :class="classes">
  <slot></slot>
</span>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'icon'
    },
    type: {
      type: String,
      require: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return cx({
        [this.prefixCls]: 1,
        [`${this.prefixCls}-${this.type}`]: !!this.type,
        [this.className]: !!this.className
      })
    }
  }
}
</script>