export default {
  mock: true,
  class: '',
  rows: [
    {
      style:{'margin-bottom':'8px', 'font-weight':700, 'font-size':'12px'},
      cols: [{
        content: '公式显示'
      }]
    },
    {
      style: {'margin-bottom': '8px'},
      cols: [{
        name: 'formulaEditSection',
        component: 'formulaEditSection'
      }]
    },
    {
      style:{'margin-bottom':'8px', 'font-weight':700, 'font-size':'12px'},
      cols: [{
        content: '数值及运算符号：'
      }]
    },
    {
      cols: [{
        name: 'formulaKeyboardSection',
        component: 'formulaKeyboardSection'
      }]
    }
  ]
}
