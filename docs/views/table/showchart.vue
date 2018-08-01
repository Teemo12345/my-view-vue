<template lang="pug">
  span(@click="showDialog()") {{title}}
</template>
<script>
export default {
  name: 'showChart',
  props: {
    title: String
  },
  data () {
    return {
      test: '1'
    }
  },
  methods: {
    showDialog () {
      console.log('showDialog')
    }
  }
}
</script>
