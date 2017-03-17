export default {
  mock: true,
  style: {},
  class: '',
  modals: [
    {
      type:'',
      name: 'modal1',
      component: "common_fragment_nav",
    }
  ],
  rows:[
    {
      cols: [{
        name: 'topnav',
        component: 'common_fragment_nav',
        style: {'border-bottom': '1px solid #e3e8ee', 'padding-bottom': '16px'}
      }]
    },
    {
      cols: [{
        name: 'search',
        component: 'index_fragment_search'
      }]
    },
    {
      cols: [{
        name:'tableProfile',
        content: '当前条件下，共有考生 {{options.totalStu}} 人，已录取 30 人，未录取 90 人',
        style: {'margin-bottom': '16px', 'margin-top': '16px'}
      }]
    },
    {
      cols: [{
        name: 'button',
        component: 'index_fragment_button',
        style: {'margin-bottom': '16px'}
      }]
    },
    {
      cols: [{
        name: 'table',
        component: 'index_fragment_table'
      }]
    }
  ]
}
