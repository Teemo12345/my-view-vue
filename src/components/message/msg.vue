<template lang="pug">
  transition(name="msg-fade")
    .message(v-if="show" :style="style" :class="type")
      .message-content
        i.fa(:class="[{'fa-check-circle':type === 'success'},{'fa-exclamation-circle':type === 'warning'},{'fa-times-circle':type === 'danger'},{'fa-lightbulb':type === 'default'},{'fa-info-circle':type === 'info'}]")
        //- .icon-circle(:class="type")
          i.fa.fa-
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
      position: '0%',
      timer: null,
      timeout: 3000
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
      if (this.timer) this.clearTime()
    },
    startTime () {
      this.timer = setTimeout(() => {
        this.close()
      }, this.timeout)
    },
    clearTime () {
      clearTimeout(this.timer)
    }
  },
  mounted () {
    this.startTime()
    top+=50
    zIndex++
    console.log(this.timeout)
  }
}
</script>
