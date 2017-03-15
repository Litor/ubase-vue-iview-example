export default  function (vm) {
  var options = {
    formulaPage:{
      $width:583,
      $title:'编辑计算公式',
    },

    formulaTableSection1: {
      header: [{title: '单招类别', id: 'dzlb'}, {title: '科类', id: 'kl'}, {
        title: '文化总成绩（普）',
        id: 'whkcj'
      }, {title: '技能总成绩（普）', id: 'jncj'}, {title: '投档总成绩（普）', id: 'tdcj'}],
      datas: [{dzlb: '普通高中生自主单招', kl: '文科类', whkcj: '语文+数学+英语', jncj: '上机*0.3+面试*0.7', tdcj: ''}, {
        dzlb: '普通高中生自主单招',
        kl: '理科类',
        whkcj: '',
        jncj: '',
        tdcj: '文化测试总成绩+技能测试总成绩+政策加分'
      }],
      editableCols: ['whkcj', 'jncj', 'tdcj']
    },

    formulaTableSection2:{
      header: [{title: '单招类别', id: 'dzlb'}, {title: '科类', id: 'kl'}, {
        title: '文化总成绩（普）',
        id: 'whkcj'
      }, {title: '技能总成绩（普）', id: 'jncj'}, {title: '投档总成绩（普）', id: 'tdcj'}],
      datas: [{dzlb: '普通高中生自主单招', kl: '文科类', whkcj: '语文+数学+英语', jncj: '上机*0.3+面试*0.7', tdcj: ''}, {
        dzlb: '普通高中生自主单招',
        kl: '理科类',
        whkcj: '',
        jncj: '',
        tdcj: '文化测试总成绩+技能测试总成绩+政策加分'
      }],
      editableCols: ['whkcj', 'jncj', 'tdcj']
    }
  }

  var events = {
    formulaTableSection1: {
      'on-setting': function () {
        vm.$getModals().formulaPage = true
      },

      'on-edit':function (item) {
        vm.$getModals().formulaPage = true
        vm.$getInstance('formulaEditSection').clear()
      }
    }
  }

  return {options, events}
}
