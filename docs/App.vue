<template lang="pug">
  #app.layout.column
    header.layout-header header
    .layout
      aside.layout-aside
        //- div {{num}}
        nav
          router-link.btn.btn-link(:to="path.path" v-for="(path, key) in pages" :key="key") {{path.name}}
      main.layout-main.p-20
        router-view
    footer.layout-footer
</template>

<script>
import * as pages from '@/router/pages'
export default {
  name: 'App',
  data () {
    return {
      pages,
      num: 0
    }
  },
  methods: {
    showNum (e) {
      this.num = e.target.scrollTop
    }
  },
  mounted () {
    console.log(pages)
  }
}
</script>

<style lang="postcss">
#app {
  height:100vh;
  & .layout-header{height:60px;line-height:60px;text-align:center;background-color:#ddd;}
  & .layout-aside{width:200px;border-right:1px solid #ddd;}
  & nav {
    width:100%;
    & > a{
      display: block;
      padding:10px;
      text-align:center;
      &.router-link-active{background-color:#337ab7;color:#fff;}
    }
  }
  & main.layout-main{overflow: auto;}
}
</style>
