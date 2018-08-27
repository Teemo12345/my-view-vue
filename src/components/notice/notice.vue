<template lang="pug">
  transition(name="notice-fade")
    .notice(:class="type" v-if="visible" :style="style")
      i.fa(v-show="icon" :class="[{'fa-check-circle':type === 'success'},{'fa-exclamation-circle':type === 'warning'},{'fa-times-circle':type === 'danger'},{'fa-lightbulb':type === 'default'},{'fa-info-circle':type === 'info'}]")
      .notice-content
        h3 {{title}}
        p {{content}}
      i.icon-close(@click="close")
        span
</template>
<script>
import utils from '../utils'
let top = 16
let zIndex = 2000
export default {
  name: 'demo-notice',
  props: {
    type: {
      validator: function (value) {
        return utils.isType(value)
      },
      default: 'info'
    },
    title: String,
    content: String,
    icon: {
      type: Boolean,
      default: false
    },
    timeout: {
      type: Number,
      default: 3000
    },
    onClose: Function
  },
  data () {
    return {
      visible: false,
      offsetHeight: 0,
      timer: null
    }
  },
  computed: {
    style () {
      return `top:${top}px;z-index:${zIndex++}`
    }
  },
  methods: {
    close() {
      this.visible = false
      if (top > 16) {
        top -= this.offsetHeight
      }
      if (this.timer) clearTimeout(this.timer)
      if (this.onClose) this.onClose(this)
    },
    startTime() {
      if (this.timeout > 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.timeout);
      }
    }
  },
  watch: {
    visible (val) {
      if (val) {
        this.$nextTick(function () {
          this.offsetHeight = this.$el.offsetHeight + 16
          top += this.offsetHeight
        })
      }
    }
  },
  mounted () {
    this.startTime()
  }
}
</script>
