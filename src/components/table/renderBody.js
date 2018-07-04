export default {
  name: 'renderBody',
  functional: true,
  props: {
    row: Object,
    index: Number,
    render: Function,
    column: Array
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      index: ctx.props.index
    }
    if (ctx.props.column) params.column = ctx.props.column
    return ctx.props.render(h, params)
  }
}
