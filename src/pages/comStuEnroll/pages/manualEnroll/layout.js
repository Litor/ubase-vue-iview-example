export default {
  mock: true,
  style: {'padding': '8px'},
  class: '',
  modals: [],
  rows: [
    {
      cols: [{
        style: {'padding-bottom': '16px'},
        name: 'navSection',
        component: 'common_fragment_nav',
      }]
    }, {
      cols: [{
        style: {'padding-bottom': '16px'},
        name: 'manualOptTipSection',
        component: 'manualOptTipSection',
      }]
    }, {
      cols: [
        {
          style: {'font-weight': 700, 'margin-bottom': '16px'},
          content: '考生信息'
        }
      ]
    }, {
      cols: [
        {
          style: {'padding-bottom': '16px'},
          name: 'manualStuBaseInfoSection',
          component: 'manualStuBaseInfoSection'
        }
      ]
    }, {
      cols: [
        {
          style: {'font-weight': 700, 'margin-bottom': '16px'},
          content: '选择专业'
        }
      ]
    },{
    cols:[
      {
        name: 'selectMajorSection',
        component: 'selectMajorSection'
      }
    ]
    }
  ]
}
