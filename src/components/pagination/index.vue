<template lang="pug">
  .pagination
    ul
      li
        a(@click.prevent="onChange(currentPage-1)" :class="{disabled: currentPage===1}") 上一页
      li(v-for="item in totalPage")
        a(:class="{active:currentPage === item}" @click.prevent="onChange(item)") {{item}}
      li
        a 下一页
</template>
<script>
export default {
  name: 'pagination',
  data () {
    return {
      currentPage: this.current
    }
  },
  props: {
    total: {
      // 总条数
      type: Number,
      default: 0
    },
    current: {
      // 当前页码
      type: Number,
      default: 1
    },
    size: {
      // 每页显示条数
      type: Number,
      default: 10
    }
  },
  computed: {
    totalPage () {
      let allPage = Math.ceil(this.total / this.size)
      allPage = allPage === 0 ? 1 : allPage
      return allPage
    }
  },
  watch: {
    current (val) {
      this.currentPage = val
    }
  },
  methods: {
    onChange (page) {
      if (page > 0 && page < this.totalPage) {
        this.currentPage = page
        this.$emit('change-page', page)
      }
    }
  }
}
</script>
