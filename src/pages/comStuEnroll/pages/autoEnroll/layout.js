export default {
  //mock: true,
  style: {'padding': '8px'},
  class: '',
  modals: [
    {
      name: 'formulaPage',
      component: "formulaPage",
    }
  ],
  rows: [
    {
      style: {'margin': '8px 0 16px', 'font-size': '14px', 'font-weight': 700},
      cols: [{content: '录取前汇总成绩计算'}]
    },
    {
      cols: [{
        name:'alertSection',
        style: {'margin-bottom': '16px'},
        hidden: false,
        content: '<Alert type="warning" type="warning" show-icon>当前批次为未开放状态，无法进行公式配置和成绩计算。</Alert>'
      }]
    },
    {
      style: {'margin-bottom': '16px'},
      cols: [{
        name: 'topTipSection',
        component: 'topTipSection'
      }]
    },
    {
      style: {'margin': '16px 0', 'font-size': '12px', 'font-weight': 700},
      cols: [{content: '普通类型考生分科类汇总成绩计算公式配置'}]
    },
    {
      cols: [{
        name: 'formulaTableSection1',
        component: 'formulaTableSection'
      }]
    },
    {
      style: {'margin': '16px 0', 'font-size': '12px', 'font-weight': 700},
      cols: [{content: '特殊类型考生分类型汇总成绩计算公式配置'}]
    },
    {
      cols: [{
        name: 'formulaTableSection2',
        component: 'formulaTableSection'
      }]
    }
  ]
}
