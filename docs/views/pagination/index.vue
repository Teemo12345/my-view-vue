<template lang="pug">
  .demo-pagination
    Pagination(:total="100" @change-page="change")
</template>
<script>
export default {
  name: 'demo-pagination',
  methods: {
    change (page) {
      console.log(page)
    }
  }
}
</script>
