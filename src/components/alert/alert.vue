<template lang="pug">
  .alert(:class="[typeClass]" v-if="!closed")
    .alert__icon(v-if="icon")
      slot(name="icon")
        i.fa(:class="[{'fa-check-circle':type === 'success'},{'fa-exclamation-circle':type === 'warning'},{'fa-times-circle':type === 'danger'},{'fa-lightbulb':type === 'default'},{'fa-info-circle':type === 'info'}]")
    .alert__content
      span.alert__title
        slot {{title}}
      p.alert__desc(v-if="$slots.desc || desc")
        slot(name="desc")
    .icon-close(v-if="showClose" @click="close")
      span
</template>
<script>
import utils from '../utils'
export default {
  name: 'Alert',
  props: {
    type: {
      validator: function (value) {
        return utils.isType(value)
      },
      default: 'default'
    },
    title: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      closed: false
    }
  },
  methods: {
    close (e) {
      this.closed = true
      this.$emit('on-close', e)
    }
  },
  computed: {
    typeClass () {
      return `alert-${this.type}`
    }
  }
}
</script>
