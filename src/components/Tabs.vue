<template>
<div :class="classes">
  <v-button-group
    :type="type">
    <v-button
      v-for="btn in tabBtn"
      :href="btn.href"
      :class="btn.status"
      :shape="shape"
      class-name="tab-link">
      {{btn.title}}
    </v-button>
  </v-button-group>
  <div class="tabs">
    <slot></slot>
  </div>
</div>
</template>

<script>
import VButtonGroup from './ButtonGroup'
import VButton from './Button'
import cx from 'classnames'

export default {
  props: {
    type: {
      type: String,
      require: true
    },
    shape: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      tabBtn: []
    }
  },
  events: {
    'setTabBtn' (data) {
      this.tabBtn.push(data)
    }
  },
  computed: {
    classes () {
      return cx({
        [this.className]: !!this.className
      })
    }
  },
  components: {
    VButton,
    VButtonGroup
  }
}
</script>