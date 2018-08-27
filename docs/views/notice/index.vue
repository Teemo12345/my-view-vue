<template lang="pug">
  .dome-notice
    h2(@click="showbtn()") 通知组件
    //- .notice(:class="type")
    //-   i.fa(:class="[{'fa-check-circle':type === 'success'},{'fa-exclamation-circle':type === 'warning'},{'fa-times-circle':type === 'danger'},{'fa-lightbulb':type === 'default'},{'fa-info-circle':type === 'info'}]")
    //-   .notice-content
    //-     h3 提示
    //-     p 这是一条消息
    //-     p 这是一条消息
    //-   i.icon-close
    //-     span
    .btn-group(ref="btns" v-show="show")
      button.btn(@click="showNotice('info')") 消息
      button.btn(@click="showNotice('success')") 成功
      button.btn(@click="showNotice('warning')") 警告
      button.btn(@click="showNotice('danger')") 错误
      button.btn(@click="showNotice('default')") 默认
</template>
<script>
export default {
  name: 'demo-notice',
  data () {
    return {
      show: true
    }
  },
  methods: {
    showNotice (type) {
      this.$notice({
        title: '消息标题',
        content: '这是一条消息',
        type,
        icon: true,
        timeout: -1,
        onClose: (that) => {
          console.log(that)
        }
      })
    },
    showbtn () {
      this.show = !this.show
      console.log(this.show)
      this.$nextTick(function () {
        console.log(this.$refs.btns.clientHeight)
      })
    }
  },
  watch: {
    show (val) {
      // console.log(val, this.$refs.btns.clientHeight)
    }
  },
  mounted () {
    // console.log(this.$refs.btns.clientHeight)
  }
  // props: {
  //   type: {
  //     type: String,
  //     default: 'info'
  //   }
  // }
}
</script>
<style lang="postcss">
</style>
