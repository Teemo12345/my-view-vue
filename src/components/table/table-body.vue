<template lang="pug">
  table(cellspacing="0" cellpadding="0" border="0" :style="tableStyle")
    colgroup
      col(v-for="th in cols" :width="th.width")
    tbody
      tr(v-for="tr in bodyData")
        td(v-for="(td, index) in cols")
          div
            span(v-if="!td.render") {{tr[td.key]}}
            render-body(v-else :row="tr" :index="index" :column="cols" :render="td.render")
</template>
<script>
import renderBody from './renderBody'
export default {
  name: 'tableBody',
  props: {
    cols: Array,
    bodyData: Array,
    tableStyle: Object
  },
  components: {renderBody}
}
</script>
