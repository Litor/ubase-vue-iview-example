export default  function (vm) {
  var options = {
    topnav: {navigates: [{title: '普通考生录取'}]},

    tableProfile: {
      totalStu: '',
      enrolledSuccessNum:'',
      enrolledFailNum:'',
      unenrolledNum:''
    },

    openBatch:{
      batchName:''
    },

    tableColumnSetting: {
      $title: '普通的Modal对话框标题',
      $width:600,
      $header: `设置显示列`,
      list:[{id: 'name', name: '姓名'},
        {id: 'ticketNum', name: '考生号'},
        {id: 'idNum', name: '身份证号'},
        {id: 'sex', name: '性别'},
        {id: 'nation', name: '民族'},
        {id: 'politicalAff', name: '政治面貌'},
        {id: 'healthStatus', name: '健康状况'},
        {id: 'height', name: '身高'},
        {id: 'weight', name: '体重'},
        {id: 'residence', name: '生源地'},
        {id: 'highSchool', name: '毕业中学'},
        {id: 'cadtType', name: '考生类别'},
        {id: 'gdteType', name: '毕业类别'},
        {id: 'phoneNum', name: '联系手机'},
        {id: 'contactNum', name: '联系电话'},
        {id: 'generalScoreSum', name: '文化总成绩（普）'},
        {id: 'skillScoreSum', name: '技能总成绩（普）'},
        {id: 'enrollScoreSum', name: '投档总成绩（普）'},
        {id: 'categoryCode_DISPLAY', name: '报考科类'},
        {id: 'enrollMajor', name: '录取专业'},
        {id: 'enrollType', name: '录取方式'},
        {id: 'enrollStatus', name: '录取状态'},
        {id: 'enrollTime', name: '录取时间'}
      ],
      selected:['name']
    },

    table: {
      url: `/ir-mngt/comCadtEnroll/getCadtEnrollInfos`,
      current: vm,
      table2ColumnList:{
        ticketNum:{
          title: '考生号',
          key: 'ticketNum',
          render (row) {
            return `<a >${row.ticketNum}</a>`;
          }
        },
        generalScoreSumSpecial:{
          align: 'center',
          title: '文化总<br/>成绩(普)',
          key: 'generalScoreSumSpecial'
        },

        skillScoreSumSpecial:{
          align: 'center',
          title: '技能总<br/>成绩(普)',
          key: 'skillScoreSumSpecial'
        },

        enrollScoreSumSpecial: {
          align: 'center',
          title: '投档总<br/>成绩(普)',
          key: 'enrollScoreSumSpecial'
        },

        majorWish: {
          title: '专业志愿',
          key: 'majorWish',
          render: function (row, column, index) {
            return `<Poptip trigger="hover" title="是否服从调剂：${row.isAcceptAjust ? '是' : '否'}" placement="bottom">
        <div>${row.wish1}</div>
         <div slot="content">
         <ul>
         <li>第一志愿:${row.wish1}</li>
         <li>第二志愿:${row.wish2}</li>
         <li>第三志愿:${row.wish3}</li>
         <li>第四志愿:${row.wish4}</li>
         <li>第五志愿:${row.wish5}</li>
         <li>第六志愿:${row.wish6}</li>
         </ul>
         </div>
         </Poptip>`
          }
        },
        enrolledMajor: {
          title: '录取志愿',
          render:function () {
            return '4'
          }
        },

        enrollStatus:{
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

        enrollType: {
          title: '录取方式',
          key: 'enrollType',
          render: function (row, column, index) {
            return row.enrollType == 1 ? '自动' : '手动'
          }
        },

        enrollLock:  {
          title: '锁定状态',
          key: 'enrollLock',
          render: function (row, column, index) {
            return row.enrollLock == 1 ? '锁定' : '未锁定'
          }
        },
      },
      tableColumns: []
    },
    search: {
      val: {},

      api: {
        typeCode: `/ir-mngt/code/getTypes`, // 单招类别
        categoryCode: `/ir-mngt/code/getCategories`, // 报考科类
        residenceCode: '/ir-mngt/code/getSecondLevelDistrict',  // 生源地
        enrollMajorCode: `/ir-mngt/code/getEnrollMajors`, // 录取专业
        cadtTypeCode: `/ir-mngt/code/getCadtTypes`, // 考生类别
        gdteTypeCode: `/ir-mngt/code/getGdteTypes`, // 毕业类别
        politicalAffCode: `/ir-mngt/code/getPoliticalAffs`, // 政治面貌
        nationCode: `/ir-mngt/code/getNations` // 民族
      }
    }
  }

  var events = {
    testtt: {
      'on-tt': function () {
        console.log(vm.getSection('testtt'))
      }
    },

    'search': {
      'on-search': function () {
        console.log(options.search.val)
      },
      'on-reset':function () {
        options.search.val = {}
      }
    },
    button: {
      'on-test': () => {
        console.log(vm.$getSection('button'))
      },
      'on-modal': () => {
        vm.$getModals().tableColumnSetting = true
      }
    },

    table: {
      'on-after-ajax':function (datas) {
        options.tableProfile.totalStu = datas.totalSize
        options.tableProfile.enrolledSuccessNum = datas.enrolledSuccessNum
        options.tableProfile.enrolledFailNum = datas.enrolledFailNum
        options.tableProfile.unenrolledNum = datas.unenrolledNum
      },

      'on-created':function () {
        resetTableColumns()
      }
    },

    enrollOperation:{
      'on-auto-enroll':function () {
        alert('auto')
      }
    },

    tableColumnSetting: {
      '$on-ok': () => {
        resetTableColumns()
      }
    }
  }
  
  function resetTableColumns() {
    var data = []
    options.tableColumnSetting.selected.forEach(col => {
      var colItem = options.table.table2ColumnList[col]
      if(!colItem){
        colItem = {
          title: _.find(options.tableColumnSetting.list, function (item) {
            return item.id == col
          }).name,
          key: col
        }
      }
      data.push(colItem)
    });

    data.push({
      title: '操作',
      key: 'action',
      width: 150,
      align: 'center',
      render (row, column, index) {
        return `<a href="javascript:void(0)" v-link="{path:'/manualEnrollPage'}">手动录取</a>`;
      }
    })
    options.table.tableColumns = data
  }

  return {
    options, events
  }
}
