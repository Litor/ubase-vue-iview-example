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
            key: 'name'
          },
          {
            title: '专业名称',
            key: 'age'
          },
          {
            title: '科类',
            key: 'address'
          },
          {
            title: '计划数',
            key: 'address'
          },
          {
            title: '已录取数',
            key: 'address'
          },
          {
            title: '最高分',
            key: 'address'
          },
          {
            title: '最低分',
            key: 'address'
          },
          {
            title: '调剂优先顺序',
            key: 'address'
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
