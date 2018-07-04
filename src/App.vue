<template lang="pug">
  #app
    nav
      router-link(:to="path.path" v-for="(path, key) in pages" :key="key") {{path.name}}
    router-view
</template>

<script>
import * as pages from '@/router/pages'
export default {
  name: 'App',
  data () {
    return {
      pages
    }
  },
  mounted () {
    console.log(pages)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  & nav {
    & > a{
      display: inline-block;
      padding:20px;
    }
  }
}
</style>
