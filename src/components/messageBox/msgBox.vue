<template lang="pug">
  .message-box-wrapper
    .message-box
      .message-box__header
        h4 名称
        i.icon-close
      .message-box__body
        p 这是一条内容
      .message-box__footer
        button.btn.btn-primary 确定
        button.btn 取消
</template>
<script>
export default {
  name: 'MessageBox'
}
</script>
<style lang="postcss">
.message-box-wrapper{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: #000;
  opacity: .3;
  & .message-box{
    background:#fff;
    width:400px;
  }
}
</style>

