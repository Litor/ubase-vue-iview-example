<template>
  <div>
    <i-table border :columns="columns4" :data="data1"></i-table>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'

  export default {
    mixins: [fragmentMixin],

    data () {
      return {
        columns4: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '专业代码',
            key: 'majorSymbol'
          },
          {
            title: '专业名称',
            key: 'majorName'
          },
          {
            title: '科类',
            key: 'cateName'
          },
          {
            title: '计划数',
            key: 'planEnrollNum'
          },
          {
            title: '已录取数',
            key: 'enrolledNum'
          },
          {
            title: '最高分',
            key: 'enrolledScoreMax'
          },
          {
            title: '最低分',
            key: 'enrolledScoreMin'
          },
          {
            title: '调剂优先顺序',
            align: 'center',
            render (row, column, index) {
              return index + 1;
            }
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>
