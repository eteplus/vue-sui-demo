<template>
<div :class="classes">
  <slot></slot>
</div>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
    defaultCls: {
      type: String,
      default: 'card'
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
        [this.defaultCls]: 1
      })
    }
  }
}
</script>