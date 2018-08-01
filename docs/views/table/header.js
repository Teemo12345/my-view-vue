export default (that) => {
  return [
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
                that.testClick()
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
          title: '患者ID',
          key: 'id1',
          width: 100
        }
      ]
    },
    {
      title: '手术方式(i)',
      key: 'id2',
      width: 100,
      pie: 'true'
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
  ]
}
