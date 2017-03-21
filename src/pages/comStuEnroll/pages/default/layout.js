export default {
  //"designer": true,
  "mock": true,
  "style": {},
  "class": "",
  "modals": [
    {
      "type": "",
      "name": "tableColumnSetting",
      "component": "setVisibleTableColumnsSection"
    }
  ],
  "rows": [
    {
      "cols": [
        {
          "name": "topnav",
          "component": "common_fragment_nav",
          "style": {
            "padding-bottom": "8px",
            "margin-top": "-4px"
          }
        }
      ]
    },
    {
      style:{'margin-bottom':'8px', 'border-bottom':'1px solid #e3e8ee', 'padding-bottom':'6px'},
      cols:[{
        name:'openBatch',
        style:{'line-height':'32px', 'font-size':'12px'},
        span:12,
        content:'单招批次：{{options.batchName}}'
      },{
        name:'enrollOperation',
        style:{'text-align':'right'},
        span:12,
        content:`<i-button type="primary" @click="$emit('on-auto-enroll')">自动录取</i-button>`
      }]
    },
    {
      "cols": [
        {
          "name": "search",
          "component": "index_fragment_search"
        }
      ]
    },
    {
      "cols": [
        {
          "name": "tableProfile",
          "content": "当前条件下，共有考生 {{options.totalStu}} 人，已录取 {{options.enrolledSuccessNum}} 人，已落榜 {{options.enrolledFailNum}} 人，待录取 {{options.unenrolledNum}} 人",
          "style": {
            "margin-bottom": "16px",
            "margin-top": "16px"
          }
        }
      ]
    },
    {
      "cols": [
        {
          "name": "button",
          "component": "index_fragment_button",
          "style": {
            "margin-bottom": "16px"
          }
        }
      ]
    },
    {
      "cols": [
        {
          "name": "table",
          "component": "index_fragment_table"
        }
      ]
    }
  ]
}
