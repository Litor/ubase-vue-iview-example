export default function (vm) {
  return {
    mock: true,
    style: {},
    class: '',
    modals: [
      {
        name: 'modal1',
        component: "index_fragment_formula",
        options: {},
        title: '普通的Modal对话框标题',
        ok: () => {
          alert()
        }
      },
      {
        name: 'modal2',
        component: "studentInfoPage",
        options: {},
        title: '普通的Modal对话框标题',
        ok: () => {
          alert()
        }
      }
    ],
    layout: [{
      cols: [{component: 'index_fragment_keyboard', style: {width: '600px'}}]
    },
      {
        cols: [{
          name: 'topnav',
          component: 'common_fragment_nav',
          options: {navigates: [{title: '特殊考生录取'}]},
          style: {'border-bottom': '1px solid #e3e8ee', 'padding-bottom': '16px'}
        }]
      },
      {cols: [{span: 12, content: '批次：2017年自主单招', style: {'margin-bottom': '16px'}}]},
      {
        cols: [{
          component: 'index_fragment_search', options: {
            cityList: [
              {
                value: 'beijing',
                label: '北京市'
              },
              {
                value: 'shanghai',
                label: '上海市'
              },
              {
                value: 'shenzhen',
                label: '深圳市'
              },
              {
                value: 'hangzhou',
                label: '杭州市'
              },
              {
                value: 'nanjing',
                label: '南京市'
              },
              {
                value: 'chongqing',
                label: '重庆市'
              }
            ]
          }
        }]
      },
      {
        cols: [{
          content: '当前条件下，共有考生 120 人，已录取 30 人，未录取 90 人',
          style: {'margin-bottom': '16px', 'margin-top': '16px'}
        }]
      },
      {
        cols: [{
          component: 'index_fragment_button',
          style: {'margin-bottom': '16px'},
          events: {
            'on-test': () => {
              vm.test()
            },
            'on-modal': () => {
              vm.$refs.ipage.modal.modal1 = true
            }
          }
        }]
      },
      {
        cols: [{
          name: 'table',
          component: 'index_fragment_table',
          events: {
            'on-change': () => {
              vm.changePage()
            }
          },
          options: {
            current: vm,
            tableData1: vm.mockTableData1(),
            tableColumns1: [
              {
                title: '名称',
                key: 'name'
              },
              {
                title: '状态',
                key: 'status',
                render (row) {
                  const color = row.status == 1 ? 'blue' : row.status == 2 ? 'green' : 'red';
                  const text = row.status == 1 ? '构建中' : row.status == 2 ? '构建完成' : '构建失败';
                  return `<tag type="dot" color="${color}">${text}</tag>`;
                }
              },
              {
                title: '画像内容',
                key: 'portrayal',
                render (row, column, index) {
                  return `<Poptip trigger="hover" title="${row.portrayal.length}个画像" placement="bottom">
                                        <tag>${row.portrayal.length}</tag>
                                        <div slot="content">
                                            <ul><li v-for="item in options.tableData1[${index}].portrayal" style="text-align: center;padding: 4px">{{ item }}</li></ul>
                                        </div>
                                    </Poptip>`;
                }
              },
              {
                title: '选定人群数',
                key: 'people',
                render (row, column, index) {
                  return `<Poptip trigger="hover" title="${row.people.length}个客群" placement="bottom">
                                        <tag>${row.people.length}</tag>
                                        <div slot="content">
                                            <ul><li v-for="item in options.tableData1[${index}].people" style="text-align: center;padding: 4px">{{ item.n }}：{{ item.c }}人</li></ul>
                                        </div>
                                    </Poptip>`;
                }
              },
              {
                title: '取样时段',
                key: 'time',
                render (row) {
                  return `近${row.time}天`
                }
              },
              {
                title: '更新时间',
                key: 'update',
                render (row, column, index) {
                  return `{{ options.current.formatDate(options.tableData1[${index}].update) }}`;
                }
              }
            ]
          }
        }]
      }
    ]
  }
}
