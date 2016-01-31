<template>
<div :id="name" :class="classes">
  <slot></slot>
</div>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
    defaultCls: {
      type: String,
      default: 'tab'
    },
    name: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    status: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  created () {
    this.$dispatch('setTabBtn', {
      href: `#${this.name}`,
      title: this.title,
      status: this.status
    })
  },
  computed: {
    classes () {
      return cx({
        [this.className]: !!this.className,
        [this.status]: !!this.status,
        [this.defaultCls]: 1
      })
    }
  }
}
</script>