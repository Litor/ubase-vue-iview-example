export default  function (vm) {
  var options = {
    topnav: {navigates: [{title: '特殊考生录取'}]},

    modal1: {
      $title: '普通的Modal对话框标题',
      $loading:true,
      $header:`<i-button type="info" @click="$emit('$on-ok')">信息按钮</i-button>`,
    },

    table: {
      current: vm,
      tableData1: mockTableData1(),
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
            return formatDate(row.update);
          }
        }
      ]
    },
    search: {
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
  }

  var events = {
    testtt:{
      'on-tt':function () {
        console.log(vm.getSection('testtt'))
      }
    },
    button: {
      'on-test': () => {
        console.log(vm.$getSection('button'))
      },
      'on-modal': () => {
        vm.$getModals().modal1 = true
      }
    },

    table: {
      'on-change': () => {
        options.table.tableData1 = mockTableData1();
      }
    },

    modal1: {
      '$on-ok': () => {
        alert()
      }
    }
  }

  function mockTableData1() {
    let data = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        name: '商圈' + Math.floor(Math.random() * 100 + 1),
        status: Math.floor(Math.random() * 3 + 1),
        portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
        people: [
          {
            n: '客群' + Math.floor(Math.random() * 100 + 1),
            c: Math.floor(Math.random() * 1000000 + 100000)
          },
          {
            n: '客群' + Math.floor(Math.random() * 100 + 1),
            c: Math.floor(Math.random() * 1000000 + 100000)
          },
          {
            n: '客群' + Math.floor(Math.random() * 100 + 1),
            c: Math.floor(Math.random() * 1000000 + 100000)
          }
        ],
        time: Math.floor(Math.random() * 7 + 1),
        update: new Date()
      })
    }
    return data;
  }

  function formatDate(date) {
    const y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  }

  return {
    options, events
  }
}
