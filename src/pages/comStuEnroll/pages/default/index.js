export default  function (vm) {
  var options = {
    topnav: {navigates: [{title: '特殊考生录取'}]},

    tableProfile: {
      totalStu: 300
    },
    modal1: {
      $title: '普通的Modal对话框标题',
      $loading: true,
      $header: `<i-button type="info" @click="$emit('$on-ok')">信息按钮</i-button>`,
    },

    table: {
      current: vm,
      tableData1: [],
      tableColumns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '考生号',
          key: 'ticketNum',
          render (row) {
            return `<a >${row.ticketNum}</a>`;
          }
        },
        {
          title: '生源地',
          key: 'residence'
        },
        {
          align: 'center',
          title: '文化总<br/>成绩<br/>（普）',
          key: 'residence'
        },
        {
          align: 'center',
          title: '技能<br/>总成绩<br/>（普）',
          key: 'residence'
        },
        {
          align: 'center',
          title: '投档总<br/>成绩<br/>（普）',
          key: 'residence'
        },
        {
          title: '专业志愿',
          key: 'wish1',
          render: function (row, column, index) {
            return `<Poptip trigger="hover" title="是否服从调剂：${row.isAcceptAjust ? '是' : '否'}" placement="bottom">
        <div>${row.wish1}</div>
         <div slot="content">
         <ul><li v-for="item in ['${row.wish1}','${row.wish2}','${row.wish3}','${row.wish4}','${row.wish5}','${row.wish6}']" style="text-align: center;padding: 4px">{{ item}}</li></ul>
         </div>
         </Poptip>`
          }
        },
        {
          title: '录取专业',
          key: 'enrollMajor'
        },
        {
          title: '录取志愿',
          key: 'residence'
        },
        {
          title: '录取状态',
          key: 'enrollStatus',
          render: function (row, column, index) {
            var status = ''
            switch (row.enrollStatus) {
              case '1':
                status = '已录取'
                break
              case '2':
                status = '已落榜'
                break
              default:
                status = '待录取'
            }
            return status
          }
        },

        {
          title: '录取方式',
          key: 'enrollType',
          render: function (row, column, index) {
            return row.enrollType == 1 ? '自动' : '手动'
          }
        },
        {
          title: '锁定状态',
          key: 'enrollLock',
          render: function (row, column, index) {
            return row.enrollLock == 1 ? '锁定' : '未锁定'
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render (row, column, index) {
            return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
          }
        },
        /*{
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
         }*/
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
    testtt: {
      'on-tt': function () {
        console.log(vm.getSection('testtt'))
      }
    },
    button: {
      'on-test': () => {
        console.log(vm.$getSection('button'))
      },
      'on-modal': () => {
        options.tableProfile.totalStu = 1000
        vm.$getModals().modal1 = true
      }
    },

    table: {
      'on-change': () => {
        options.table.tableData1 = mockTableData1();
      },

      'on-created': function () {
        getTableDatas()
      }
    },

    modal1: {
      '$on-ok': () => {
        alert()
      }
    }
  }

  function getTableDatas(pageNumber, pageSize) {
    Utils.post('/ir-mngt/comCadtEnroll/getCadtEnrollInfos').then(function (res) {
      options.table.tableData1 = res.datas.rows
    })
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
