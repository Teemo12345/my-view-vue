<template lang="pug">
  .progress
    .progress-bar(v-if="type==='bar'" :style="{height: height + 'px', 'border-radius': radius + 'px'}")
      .progress-bar__inner(:style="{height: height + 'px', 'border-radius': radius + 'px', width: percent + '%'}")
    //- .progress-circle(v-else :style="{height: width + 'px', width: width + 'px', 'border-radius': radius + 'px'}")
      svg(viewBox="0 0 100 100")
        path(d="m8.5,121.4375c0,-62.70718 50.79282,-113.5 113.5,-113.5c62.70718,0 113.5,50.79282 113.5,113.5c0,62.70718 -50.79282,113.5 -113.5,113.5c-62.70718,0 -113.5,-50.79282 -113.5,-113.5z" stroke="#e5e9f2" stroke-width="5" fill="none")
</template>
<script>
export default {
  name: 'Progress',
  props: {
    type: {
      type: String,
      default: 'bar'
    },
    height: {
      type: Number,
      default: 20
    },
    width: {
      type: Number,
      default: 130
    },
    radius: {
      type: Number,
      default: 20
    },
    percent: {
      type: Number,
      default: 0
    }
  }
}
</script>
