<template lang="pug">
  table(cellspacing="0" cellpadding="0" border="0" :style="tableStyle")
    colgroup
      col(v-for="th in cols" :width="th.width")
    thead
      tr(v-for="tr in thead")
        th(:colspan="th.colspan" :rowspan="th.rowspan" v-for="(th, index) in tr")
          div
            span(v-if="!th.renderHeader") {{th.title}}
            render-header(v-else :column="th" :index="index" :render="th.renderHeader")
</template>
<script>
import renderHeader from './renderHeader'
export default {
  name: 'tableHead',
  props: {
    cols: Array,
    thead: Array,
    tableStyle: Object
  },
  components: {renderHeader}
}
</script>
