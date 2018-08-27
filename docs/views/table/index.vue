<template lang="pug">
  #tableView
    .checkboxs
      label(v-for="checkbox in checkeds" :key="checkbox.label")
        input(type="checkbox" :name="checkbox.label" v-model="checkbox.show" @change="checkChange")
        span {{checkbox.label}}
    Table(width="100px" height="500px" :theads="columns" :data="data" @show-pie="showPie")
    div(style="height:1000px;background:#ccc;")
</template>
<script>
import Table from '@/components/table'
import headers from './header'
import showChart from './showchart'
let data = Array(20).fill().map(item => {
  item = {}
  Array(20).fill().forEach((col, idx) => {
    item['id' + idx] = idx + 1
  })
  return item
})

export default {
  name: 'tableView',
  data () {
    return {
      theads: headers(this),
      data,
      headers: [],
      checkeds: [],
      columns: []
    }
  },
  components: {Table, showChart},
  methods: {
    checkChange () {
      let keys = this.checkeds.filter(item => {
        return item.show
      })
      this.columns = keys.map(col => {
        return this.headers[col.label]
      })
    },
    testClick () {
      console.log(323232)
    },
    renderHeader: (h, params) => {
      let that = this
      return h(
        'span',
        {
          class: 'text1',
          on: {
            click: () => {
              console.log(that)
              that.testClick()
            }
          }
        },
        ['render text2121']
      )
    },
    getHeader () {
      this.theads.forEach(item => {
        if (item.key === 'id3') {
          item['renderHeader'] = this.renderHeader
        }
        this.headers[item.key] = item
      })
      console.log(this.headers)
    },
    getCheckeds () {
      this.checkeds = Object.keys(this.headers).map(key => {
        return {
          label: key,
          show: true
        }
      })
    },
    showPie (title) {
      console.log(1, title)
    }
  },
  mounted () {
    this.getHeader()
    this.getCheckeds()
    this.checkChange()
  }
}
</script>
<style lang="postcss">
.checkboxs{
  & label{display: inline-block;margin:10px;}
}
</style>
