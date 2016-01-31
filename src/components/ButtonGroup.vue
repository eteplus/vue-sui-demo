<template>
<div :class="classes">
  <slot></slot>
</div>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'buttons'
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
        [this.className]: !!this.className,
        [`${this.prefixCls}-${this.type}`]: !!this.type
      })
    }
  }
}
</script>