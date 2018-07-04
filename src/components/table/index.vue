<template lang="pug">
  .Table
    .table-head(ref="thead" @scroll="handScroll($event, 'tbody')")
      table-thead(:cols="cloneTheads" :thead="columnRows" :table-style="tableStyle")
    .table-body(:style="bodyStyle" ref="tbody" @scroll="handScroll($event, 'thead')")
      table-body(:cols="cloneTheads" :table-style="tableStyle" :body-data="data")
    .table-fixed-left(v-if="isLeftFixed" :style="fixedLeftStyle")
      .table-head
        table-thead(:cols="cloneTheads" :thead="columnRows" :table-style="tableStyle")
      .table-body(:style="bodyStyle" ref="fixedBody" @scroll="handScrollTop($event, 'tbody')")
        table-body(:cols="cloneTheads" :table-style="tableStyle" :body-data="data")
</template>
<script>
import {getTheadToRows, getAllColumns} from './toolkit'
import tableThead from './table-head'
import tableBody from './table-body'
// 实现功能：
// 1. 多表头 2. 上下左右滚动 3.固定左1列/固定表头 4.自定义表头内容 5.自定义表格内容
export default {
  name: 'Table',
  props: {
    width: String,
    height: String,
    theads: Array,
    data: Array
  },
  components: {tableThead, tableBody},
  data () {
    return {
      cloneTheads: [],
      tableWidth: 0,
      columnRows: getTheadToRows(this.theads)
      // isLeftFixed: true
    }
  },
  computed: {
    bodyStyle () {
      if (this.height) {
        return Object.assign({}, {
          height: this.height
        })
      } else {
        return {}
      }
    },
    tableStyle () {
      let style = {}
      if (this.tableWidth) {
        style = Object.assign(style, {
          width: this.tableWidth + 'px'
        })
      }
      return style
    },
    isLeftFixed () {
      return this.theads.some(col => col.fixed)
    },
    fixedLeftStyle () {
      let style = {}
      let width = 0
      this.theads.forEach(col => {
        if (col.fixed) {
          width += col.width
        }
      })
      style.width = `${width}px`
      return style
    }
  },
  methods: {
    // col width
    headWidths () {
      let hasWidths = []
      let noWidths = []
      let tableWidth = this.$el.offsetWidth - 1
      let theads = getAllColumns(this.theads)
      theads.forEach(head => {
        if (head.width) {
          hasWidths.push(head)
        } else {
          noWidths.push(head)
        }
      })
      let unUsableWidth = hasWidths.map(item => item.width).reduce((a, b) => a + b, 0)
      let usableWidth = tableWidth - unUsableWidth
      // 最小宽度设置
      let columnWidth = 30
      if (usableWidth > 0 && noWidths.length > 0) {
        columnWidth = parseInt(usableWidth / noWidths.length)
      }
      let cloneTheads = []
      theads.forEach(col => {
        if (!col.width) {
          col.width = columnWidth
        }
        cloneTheads.push(col)
      })
      this.cloneTheads = cloneTheads
      this.tableWidth = this.cloneTheads.map(col => col.width).reduce((a, b) => a + b, 0)
    },
    handScroll (e, ref) {
      this.$refs[ref].scrollLeft = e.target.scrollLeft
      if (this.isLeftFixed) {
        this.$refs.fixedBody.scrollTop = e.target.scrollTop
      }
    },
    handScrollTop (e, ref) {
      this.$refs[ref].scrollTop = e.target.scrollTop
    }
  },
  watch: {
    theads: {
      handler () {
        this.columnRows = getTheadToRows(this.theads)
        this.headWidths()
      },
      deep: true
    }
  },
  mounted () {
    if (this.theads.length > 0) {
      this.headWidths()
    }
  }
}
</script>
<style lang="postcss">
.Table {
  position: relative;
  & th,
  & td{
    border-top: 1px solid #dee2e6;
    padding: .75rem;
  }
  & .table-body{
    overflow: auto;
  }
  & .table-head{
    overflow-x: auto;
    border-bottom: 1px solid #dee2e6;
    &::-webkit-scrollbar {display:none}
  }
  & .table-fixed-left{
    position: absolute;
    top:0;
    left:0;
    z-index: 100;
    background:#fff;
    & > .table-body,
    & > .table-head{
      overflow-x: hidden;
      &::-webkit-scrollbar {display:none}
    }
  }
}
</style>
