<template lang="pug">
  .demo-layout(ref="list")
    p vue-data-loading 滚动插件测试
    vue-data-loading(
      :loading="loading"
      :completed="completed"
      :listens="['infinite-scroll', 'pull-down']"
      :init-scroll="false"
      @infinite-scroll="infiniteScroll"
      @pull-down="pullDown"
      container="list")
      div(slot="pull-down-ready") ready to refresh
      ul
        li(v-for="(item, index) in list" :key="index") 测试数据{{item}}
      div(slot="infinite-scroll-loading") loading...
      div(slot="completed") 完成
    //- .demo-scroll(ref="scroll")
      div
        p test
        p(style="text-align:right;") test-right
</template>
<script>
import VueDataLoading from 'vue-data-loading/src/index'
export default {
  name: 'demo-layout',
  data () {
    return {
      event: '',
      list: [],
      loading: false,
      completed: false,
      page: 1
    }
  },
  components: {VueDataLoading},
  methods: {
    fetchData () {
      this.loading = true
      setTimeout(() => {
        if (this.page > 3) {
          this.completed = true
          this.loading = false
          return
        }
        const temp = []
        for (let i = this.list.length + 1; i <= this.list.length + 50; i++) {
          temp.push(i)
        }
        this.list = this.list.concat(temp)
        this.loading = false
      }, 1000)
    },
    pullUp () {
      this.fetchData()
      this.page++
    },
    pullDown () {
      this.list = []
      this.page = 1
      this.completed = false
      this.fetchData()
    },
    infiniteScroll () {
      this.fetchData()
      this.page++
    }
  },
  mounted () {
    this.fetchData()
    console.log(this.list)
    // let that = this
    // this.$refs.scroll.addEventListener('scroll', function (e) {
    //   that.event = e.defaultPrevented
    //   console.log(that.event)
    // })
  }
}
</script>
<style lang="postcss">
.demo-layout{
  height: 500px;
  background:#ccc;
  width:100%;
  overflow: auto;
  & .demo-scroll{
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    & > div{
    height:300px;
    width:200%;
    background:#999;
    }
  }
}
</style>
