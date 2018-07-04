<template lang="pug">
  #tableView
    .checkboxs
      label(v-for="checkbox in checkeds" :key="checkbox.label")
        input(type="checkbox" :name="checkbox.label" v-model="checkbox.show" @change="checkChange")
        span {{checkbox.label}}
    Table(width="100px" height="500px" :theads="columns" :data="data")
</template>
<script>
import Table from '@/components/table'
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
      theads: [
        {
          title: '#',
          key: 'id0',
          width: 100,
          fixed: 'left',
          renderHeader: (h, params) => {
            return h(
              'span',
              {
                class: 'text1',
                on: {
                  click: () => {
                    this.testClick()
                  }
                }
              },
              ['render text']
            )
          }
        },
        {
          title: '患者ID',
          key: 'id1',
          width: 100,
          children: [
            {
              title: '患者ID',
              key: 'id1',
              width: 100
            },
            {
              title: '患者ID',
              key: 'id1',
              width: 100
            }
          ]
        },
        {
          title: '主要诊断',
          key: 'id2',
          width: 100
        },
        {
          title: '主要诊断',
          key: 'id3',
          width: 100
        },
        {
          title: '主要诊断',
          key: 'id4',
          width: 100
        },
        {
          title: '主要诊断',
          key: 'id5',
          width: 100
        },
        {
          title: '主要诊断',
          key: 'id6',
          width: 100
        },
        {
          title: '主要诊断',
          key: 'id7',
          width: 100
        },
        {
          title: '主要诊断',
          key: 'id8'
        },
        {
          title: '主要诊断',
          key: 'id9'
        },
        {
          title: '主要诊断',
          key: 'id10'
        },
        {
          title: '主要诊断',
          key: 'id11',
          width: 100,
          render: (h, params) => {
            const {row, index, column} = params
            const key = column[index].key
            return h(
              'button',
              [row[key]]
            )
          }
        }
      ],
      data,
      headers: [],
      checkeds: [],
      columns: []
    }
  },
  components: {Table},
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
      return h(
        'span',
        {
          class: 'text1',
          on: {
            click: this.testClick
          }
        },
        ['render text']
      )
    },
    getHeader () {
      this.theads.forEach(item => {
        this.headers[item.key] = item
      })
    },
    getCheckeds () {
      this.checkeds = Object.keys(this.headers).map(key => {
        return {
          label: key,
          show: true
        }
      })
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
