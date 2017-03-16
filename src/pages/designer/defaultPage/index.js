export default  function (vm) {
  var options = {
    layoutReviewSection:{
      $title:'查看布局文件',
      layoutSource:'ddddd'
    },
    attributeSection: {
      currentCol: {},
      expanded:false
    },
    designAreaSection: {
      selectedSection: {},
      config: [
        {
          cols: [{
            span: 12,
            content: '录取前汇总成绩计算',
            style: {'padding-top': '8px', 'padding-bottom': '16px', 'font-size': '14px', 'font-weight': 700}
          }]
        },
        {
          cols: [{
            span: 24,
            name: 'alertSection',
            style: {'padding-bottom': '16px'},
            hidden: false,
            content: '<Alert type="warning" type="warning" show-icon>当前批次为未开放状态，无法进行公式配置和成绩计算。</Alert>'
          }]
        },
        {
          cols: [{
            span: 24,
            name: 'topTipSection',
            component: 'topTipSection',
            style: {'padding-bottom': '16px'},
          }]
        },
        {
          cols: [{
            span: 24,
            content: '普通类型考生分科类汇总成绩计算公式配置',
            component: '',
            style: {'padding-top': '16px', 'padding-bottom': '16px', 'font-size': '12px', 'font-weight': 700}
          }]
        },
        {
          cols: [{
            span: 24,
            name: 'formulaTableSection1',
            component: 'formulaTableSection',
            style: {}
          }]
        },
        {
          cols: [{
            span: 24,
            content: '特殊类型考生分类型汇总成绩计算公式配置',
            component: '',
            style: {'padding-top': '16px', 'padding-bottom': '16px', 'font-size': '12px', 'font-weight': 700}
          }]
        },
        {
          cols: [{
            span: 24,
            name: 'formulaTableSection2',
            component: 'formulaTableSection',
            style: {}
          }]
        }
      ]
    }
  }

  var events = {
    designAreaSection: {
      'on-select': function () {
        vm.$getSection('attributeSection').options.currentCol = vm.$getSection('designAreaSection').options.selectedSection.currentCol
      }
    },

    attributeSection: {
      'on-expand':function () {
        var expanded = vm.$getSection('attributeSection').options.expanded
        if(expanded){
          vm.$getSection('attributeSection').span = 5
          vm.$getSection('designAreaSection').span = 19
          vm.$getSection('attributeSection').options.expanded = false
        }else{
          vm.$getSection('attributeSection').span = 12
          vm.$getSection('designAreaSection').span = 12
          vm.$getSection('attributeSection').options.expanded = true
        }

      }
    },

    topMenuSection: {
      'on-create-row': function (arrow) {
        vm.$getInstance('designAreaSection').createRow(arrow)
      },

      'on-del-col': function () {
        vm.$getInstance('designAreaSection').delCol()
      },

      'on-move-row': function (arrow) {
        vm.$getInstance('designAreaSection').moveRow(arrow)
      },

      'on-clear-selected': function () {
        vm.$getInstance('designAreaSection').clearSelected()
        vm.$getSection('attributeSection').options.currentCol = {}
      },

      'on-create-col':function (arrow) {
        vm.$getInstance('designAreaSection').createCol(arrow)
      },

      'on-move-col':function (arrow) {
        vm.$getInstance('designAreaSection').moveCol(arrow)
      },

      'on-export':function () {
        vm.$getSection('layoutReviewSection').options.layoutSource = JSON.stringify(vm.$getSection('designAreaSection').options.config, null, 2).replace(/\n/g, '<br/>').replace(/\ /g, '&nbsp;')
        vm.$getModals().layoutReviewSection = true
      }
    }
  }

  return {options, events}
}
