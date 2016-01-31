<template>
  <a :class="classes">
    <slot></slot>
  </a>
</template>

<script>
import cx from 'classnames'

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'button'
    },
    types: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: ''
    },
    size: {
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
      let typeCls = []
      if (this.types.length !== 0) {
        typeCls = Array.from(this.types.split(' '), (type) => { return type !== '' ? `${this.prefixCls}-${type}` : type})
        this.types = typeCls.join(' ')
      }
      return cx({
        [this.className]: !!this.className,
        [`${this.prefixCls}-${this.status}`]: !!this.status,
        [`${this.prefixCls}-${this.shape}`]: !!this.shape,
        [`${this.prefixCls}-${this.size}`]: !!this.size,
        [this.types]: !!this.types,
        [this.prefixCls]: 1
      })
    }
  }
}
</script>

<style>
.button {
  line-height: 1.55rem;
  height: 1.65rem;
  font-size: .75rem;
}
.button.button-small {
  height: 1.35rem;
  font-size: 0.7rem;
}
.button.button-large {
  font-size: 0.85rem;
  height: 2.4rem;
  line-height: 2.3rem;
}
.button.button-fill {
  line-height: 1.65rem;
}
.button.button-fill.button-small {
  line-height: 1.35rem;
}
.button.button-fill.button-large {
    line-height: 2.4rem;
}
</style>