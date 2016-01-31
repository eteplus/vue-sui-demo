<template>
<div :class="classes">
  <slot></slot>
</div>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
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
        [`card-${this.type}`]: !!this.type
      })
    }
  }
}
</script>