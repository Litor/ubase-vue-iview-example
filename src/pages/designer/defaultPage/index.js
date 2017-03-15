export default  function (vm) {
  var options = {
    designAreaSection: {
      config: [
        {
          cols: [{span:12, content: '录取前汇总成绩计算', style: {'padding-top': '8px','padding-bottom':'16px', 'font-size': '14px', 'font-weight': 700}}]
        },
        {
          cols: [{
            span:24,
            name: 'alertSection',
            style: {'padding-bottom': '16px'},
            hidden: false,
            content: '<Alert type="warning" type="warning" show-icon>当前批次为未开放状态，无法进行公式配置和成绩计算。</Alert>'
          }]
        },
        {
          cols: [{
            span:24,
            name: 'topTipSection',
            component: 'topTipSection',
            style: {'padding-bottom': '16px'},
          }]
        },
        {
          cols: [{span:24,content: '普通类型考生分科类汇总成绩计算公式配置', component: '', style: { 'padding-top':'16px','padding-bottom':'16px','font-size': '12px', 'font-weight': 700}}]
        },
        {
          cols: [{
            span:24,
            name: 'formulaTableSection1',
            component: 'formulaTableSection',
            style: {}
          }]
        },
        {
          cols: [{span:24,content: '特殊类型考生分类型汇总成绩计算公式配置', component: '', style: { 'padding-top':'16px','padding-bottom':'16px','font-size': '12px', 'font-weight': 700}}]
        },
        {
          cols: [{
            span:24,
            name: 'formulaTableSection2',
            component: 'formulaTableSection',
            style: {}
          }]
        }
      ]
    }
  }

  var events = {}

  return {options, events}
}
