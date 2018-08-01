<template lang="pug">
  .demo-message
    //- transition(name="msg-fade")
      .message(v-if="show")
        .message-content
          i.icon-circle.info i
          span 提示消息
          i.icon-close(@click="show=false")
            span
    .panel
      .panel-body
        .btn-group
          button.btn(@click="showMsg('info')") 消息
          button.btn(@click="showMsg('success')") 成功
          button.btn(@click="showMsg('warning')") 警告
          button.btn(@click="showMsg('danger')") 错误
</template>
<script>
// let types = {
//   'info': '默认提示消息'
// }
export default {
  name: 'demo-msg',
  data () {
    return {
      show: true
    }
  },
  methods: {
    showMsg (type) {
      this.$message({type, message: '默认提示消息', position: '30%'})
    }
  },
  mounted () {
    // this.$message()
  }
}
</script>
