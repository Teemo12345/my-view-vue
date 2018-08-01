<template lang="pug">
  transition(name="msg-fade")
    .message(v-if="show" :style="style")
      .message-content
        i.icon-circle(:class="type") i
        span {{message}}
        i.icon-close(@click="close")
          span
</template>
<script>
let zIndex = 1100
let top = 0
export default {
  name: 'Message',
  data () {
    return {
      message: '',
      show: false,
      type: 'info',
      position: '0%'
      // style: `z-index: ${zIndex++}; top: ${top}px`
    }
  },
  computed: {
    style () {
      return `z-index: ${zIndex++};top: calc(${this.position} + ${top}px)`
    }
  },
  methods: {
    close () {
      this.show = false
      if (top > 50) top-=50
    },
    startTime () {
      setTimeout(() => {
        this.close()
      }, 3000);
    }
  },
  mounted () {
    this.startTime()
    top+=50
    zIndex++
  }
}
</script>
