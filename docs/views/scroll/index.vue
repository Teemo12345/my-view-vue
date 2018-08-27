<template lang="pug">
  .demo-scroll
    .scroll-wrap
      .scroll
        ul
          li(v-for="item in list") 测试数据{{item}}
      .scroll-right-bar
        span(@mousedown="scrollRightBar($event)" @mousemove="scrollRightBarMove($event)")
      .scroll-bottom-bar
        span
</template>
<script>
export default {
  name: 'demo-scroll',
  data () {
    return {
      list: []
    }
  },
  methods: {
    fetchData () {
      setTimeout(() => {
        let temp = []
        new Array(50).fill().forEach((element, index) => {
          temp.push(this.list.length + index + 1)
        })
        this.list.push(...temp)
      }, 3000)
    },
    scrollRightBar (e) {
      // console.log(e)
    },
    scrollRightBarMove (e) {
      console.log(e)
    }
  },
  mounted () {
    this.fetchData()
    this.$el.addEventListener('scroll', (e) => {
      console.log(1111)
    })
  }
}
</script>
<style lang="postcss">
.scroll-wrap{
  height:500px;
  background-color:beige;
  overflow: hidden;
  position: relative;
  & .scroll{
    transform: translate(0, -199px);
    transition: transform 0.2s;
    // padding: 10px;
  }
  & .scroll-right-bar,
  & .scroll-bottom-bar{
    background:rgba(0,0,0,.2);
    & > span{
      background:#999;
      display:block;
      transform: translate(0, 0);
      transition: transform 0.2s;
    }
  }
  & .scroll-right-bar{
    height:100%;
    width:10px;
    position: absolute;
    top: 0;
    right: 0;
    & > span{
      height:50px;
      width:10px;
    }
  }
  & .scroll-bottom-bar{
    height:10px;
    width:100%;
    position: absolute;
    left: 0;
    bottom: 0;
    & > span{
      width:50px;
      height:10px;
    }
  }
}
</style>
