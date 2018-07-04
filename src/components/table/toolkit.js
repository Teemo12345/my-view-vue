const getAllColumns = (columns, forRows = false) => {
  let all = []
  columns.forEach(column => {
    if (column.children) {
      if (forRows) {
        all.push(column)
      }
      all = all.concat(getAllColumns(column.children, forRows))
    } else {
      all.push(column)
    }
  })
  return all
}
const getTheadToRows = (columns) => {
  let maxLevel = 1
  const iterator = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1
      maxLevel = column.level > maxLevel ? column.level : maxLevel
    }
    if (column.children) {
      let colspan = 0
      column.children.forEach(item => {
        iterator(item, column)
        colspan += item.colspan
      })
      column.colspan = colspan
    } else {
      column.colspan = 1
    }
  }
  columns.forEach(column => {
    column.level = 1
    iterator(column)
  })
  const rows = Array(maxLevel).fill().map(item => {
    return []
  })
  const allColumns = getAllColumns(columns, true)
  allColumns.forEach(column => {
    column.rowspan = 1
    if (!column.children) {
      column.rowspan = maxLevel - column.level + 1
    }
    rows[column.level - 1].push(column)
  })
  return rows
}
export {getAllColumns, getTheadToRows}
