export default {
  //mock: true,
  style: {'padding': '8px'},
  class: '',
  modals: [{name:'abc',component:'designAreaSection'}],
  rows: [
    {
      style:{'height':'100%','border':'1px solid #d7dde4'},
      cols: [{
        style:{'border-right':'1px solid #d7dde4', 'height':'100%','overflow-y':'scroll'},
        span:19,
        component:'designAreaSection',
        name:'designAreaSection'
      },{
        span:5,
        name:'attributeSection',
        component:'attributeSection',
        style:{'padding':'0 4px'},
        options:{}
      }]
    }
  ]
}
