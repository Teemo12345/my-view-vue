<template lang="pug">
  .demo-alert
    .p-10
      h2 样式
      .alert.alert-default 默认提示文字
      .alert.alert-success 成功提示文字
      .alert.alert-warning 警告提示文字
      .alert.alert-danger 错误提示文字
      .alert.alert-info 错误提示文字
    .p-10
      h2 样式-ALL
      .alert.alert-default
        .alert__icon
          .fa.fa-coffee
        .alert__content
          span.alert__title 默认提示文字
          p.alert__desc 默认说明文字
        .alert__close
          span
    .p-10
      h2 slot 组件用法
      Alert(icon)
        //- template(slot="icon") icon
        span 默认提示文字
        template(slot="desc") 默认说明文字
      Alert(type="success" icon)
        span 成功提示文字
        template(slot="desc") 成功说明文字
      Alert(type="warning" icon)
        span 警告提示文字
        template(slot="desc") 警告说明文字
      Alert(type="danger" icon)
        span 错误提示文字
        template(slot="desc") 错误说明文字
      Alert(type="info" icon show-close)
        span 信息提示文字
        template(slot="desc") 信息说明文字
    .p-10
      h2 属性组件用法
      Alert(title="默认提示文字" icon desc="默认说明文字" show-close)
      Alert(title="成功提示文字" type="success" icon show-close)
      Alert(title="警告提示文字" type="warning" icon show-close)
      Alert(title="错误提示文字" type="danger" icon show-close)
      Alert(title="信息提示文字" type="info" icon show-close)
</template>
