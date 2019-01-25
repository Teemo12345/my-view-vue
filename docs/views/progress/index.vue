<template lang="pug">
  .demo-progress
    .demo-progress-bar
      Progress(:percent="50")
      Progress(:percent="20")
      Progress(:percent="0")
    //- 圆形进度条使用svg实现，参照element ui
    //- .demo-progress-circle
      Progress(:percent="50" type="circle")
</template>
<script>
export default {
  name: 'demo-progress'
}
</script>
<style lang="postcss">
.demo-progress-bar > * {margin-bottom:20px;}
.demo-progress-circle{width:150px;height:150px;}
</style>
