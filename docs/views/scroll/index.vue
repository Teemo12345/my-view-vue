<template lang="pug">
  .demo-scroll
    h2 自定义滚动条，滚动区域，测试用。未完成
    .scroll-wrap(ref="scrollWrap")
      .scroll(ref="contentScroll" @mouseover="startScroll" @mouseleave="endScroll" :style="{'transform': 'translateY(' + contentScroll.currentTopPosition + 'px)' + 'translateX(' + contentScroll.currentLeftPosition + 'px)'}")
        ul
          li(v-for="item in list") 测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}测试数据{{item}}
      .scroll-right-bar
        span(
          ref="rightBar"
          @mousedown="startRightBar"
          :style="{'transform': 'translateY(' + scrollRightBar.currentPosition + 'px)'}"
          )
        //- span(@mousedown="scrollRightBar($event)" @mousemove="scrollRightBarMove($event)")
      .scroll-bottom-bar
        span
</template>
<script>
export default {
  name: 'demo-scroll',
  data () {
    return {
      list: [],
      scrollRightBar: {
        start: 0,
        end: 0,
        currentPosition: 0,
        currentValue: 0
      },
      contentScroll: {
        start: 0,
        end: 0,
        currentTopPosition: 0,
        currentValue: 0,
        leftStart: 0,
        leftEnd: 0,
        currentLeftPosition: 0,
        currentLeftValue: 0
      }
    }
  },
  watch: {
    list (val) {
      if (val.length > 0) {
        this.$nextTick(() => {
          this.contentScroll.end = this.$refs.contentScroll.clientHeight
          console.log(this.contentScroll.end)
        })
      }
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
    startRightBar (e) {
      e.preventDefault()
      this.scrollRightBar.currentValue = e.clientY
      window.addEventListener('mousemove', this.scrollRightBarMove)
      window.addEventListener('mouseup', this.endRightBar)
    },
    endRightBar (e) {
      console.log('end')
      this.scrollRightBar.start = this.scrollRightBar.currentPosition
      window.removeEventListener('mousemove', this.scrollRightBarMove)
      window.removeEventListener('mouseup', this.endRightBar)
    },
    scrollRightBarMove (e) {
      e.preventDefault()
      this.scrollRightBar.currentPosition = this.scrollRightBar.start + e.clientY - this.scrollRightBar.currentValue
      if (this.scrollRightBar.currentPosition < 0) this.scrollRightBar.currentPosition = 0
      if (this.scrollRightBar.currentPosition > this.scrollRightBar.end) this.scrollRightBar.currentPosition = this.scrollRightBar.end
      // if (this.scrollRightBar.currentPosition === this.scrollRightBar.end) return
      let ratio = parseInt(this.scrollRightBar.currentPosition / this.scrollRightBar.end * 100)
      console.log(ratio)
      this.contentScroll.currentTopPosition = (this.$refs.scrollWrap.clientHeight - this.contentScroll.end - 30) / 100 * ratio
    },
    startScroll (e) {
      console.log('start-scroll')
      if (this.contentScroll.end > 0) {
        this.contentScroll.currentValue = e.clientY
        window.addEventListener('wheel', this.contentScrollTopEvent)
      }
    },
    contentScrollTopEvent (e) {
      console.log('Y', e.deltaY)
      console.log('x', e.deltaX)
      e.preventDefault()
      if (e.deltaY > 3 && e.deltaY > e.deltaX) this.contentScroll.currentTopPosition -= 10
      if (e.deltaY < -3 && Math.abs(e.deltaY) > Math.abs(e.deltaX)) this.contentScroll.currentTopPosition += 10
      if (e.deltaX > 3 && e.deltaX > e.deltaY) this.contentScroll.currentLeftPosition -= 10
      if (e.deltaX < -3 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) this.contentScroll.currentLeftPosition += 10
      if (this.contentScroll.currentTopPosition > 0) this.contentScroll.currentTopPosition = 0
      if (this.contentScroll.currentTopPosition < this.$refs.scrollWrap.clientHeight - this.contentScroll.end - 30) this.contentScroll.currentTopPosition = this.$refs.scrollWrap.clientHeight - this.contentScroll.end - 30
      // if (this.scrollRightBar.currentPosition === this.scrollRightBar.end) return
      let ratio = Math.abs(parseInt(this.contentScroll.currentTopPosition / (this.$refs.scrollWrap.clientHeight - this.contentScroll.end - 30) * 100))
      // console.log(ratio)
      this.scrollRightBar.currentPosition = this.scrollRightBar.end / 100 * ratio

      if (this.contentScroll.currentLeftPosition > 0) this.contentScroll.currentLeftPosition = 0
    },
    endScroll () {
      console.log('end-scroll')
      window.removeEventListener('wheel', this.contentScrollTopEvent)
      this.contentScroll.start = this.contentScroll.currentTopPosition
    },
    init () {
      this.scrollRightBar.end = this.$refs.scrollWrap.clientHeight - this.$refs.rightBar.clientHeight
    }
  },
  mounted () {
    this.fetchData()
    this.init()
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
    // transform: translate(0, -199px);
    transition: transform 0.2s;
    width:6000px;
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
      // position: absolute;
      // top:0;
      // left:0;
    }
  }
  & .scroll-right-bar{
    height:100%;
    width:10px;
    position: absolute;
    top: 0;
    right: 0;
    cursor:grab;
    &:active{cursor:grabbing;}
    & > span{
      height:50px;
      width:10px;
      // top:0%;
      // transform: translate(0, 100%);
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
