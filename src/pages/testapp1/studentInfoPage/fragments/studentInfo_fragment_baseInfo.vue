<template>
  <div>
    <i-container :config="pages" v-ref:ipage></i-container>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'

  export default {
    mixins:[fragmentMixin],
    data: function () {
      return {
        pages: {
          class:'readable-table',
          layout: [{
            class: 'row',
            cols: [
              {span: 3, content: '<span style="color:red">*</span> 姓名', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
              {span: 3, content: '<span style="color:red">*</span> 性别', class: 'item label'},
              {span: 5, class: 'item', content: '男'},
              {span: 3, content: '<span style="color:red">*</span> 民族', class: 'item label'},
              {
                span: 5, class: 'item', component: 'test', options: {p1: 43, p4: 14}, event: {
                'on-test': function () {
                  alert(33)
                }
              }
              }
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '<span style="color:red">*</span> 出生日期', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
              {span: 3, content: '<span style="color:red">*</span> 籍贯', class: 'item label'},
              {span: 5, class: 'item', content: '男'},
              {span: 3, content: '<span style="color:red">*</span> 政治面貌', class: 'item label'},
              {span: 5, class: 'item', content: '汉'}
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '<span style="color:red">*</span> 身份证号', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
              {span: 3, content: '<span style="color:red">*</span> 高考报名考生号', class: 'item label'},
              {span: 5, class: 'item', content: '男'},
              {span: 3, content: '<span style="color:red">*</span> 考生类别', class: 'item label'},
              {span: 5, class: 'item', content: '汉'}
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '<span style="color:red">*</span> 毕业中学', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '<span style="color:red">*</span> 健康状况', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
              {span: 3, content: '身高(cm)', class: 'item label'},
              {span: 5, class: 'item', content: '男'},
              {span: 3, content: '体重(kg)', class: 'item label'},
              {span: 5, class: 'item', content: '汉'}
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '特长', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '所获奖励或处分', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '联系电话', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
              {span: 3, content: '<span style="color:red">*</span> 联系手机号', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '第二联系人', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
              {span: 3, content: '第二联系人手机号', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '<span style="color:red">*</span> 通知书邮寄地址', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
            ]
          }, {
            class: 'row',
            cols: [
              {span: 3, content: '<span style="color:red">*</span> 通知书邮寄邮编', class: 'item label'},
              {span: 5, class: 'item', content: '张三'},
              {span: 3, content: '<span style="color:red">*</span> 邮寄收件人', class: 'item label'},
              {span: 5, class: 'item', content: '男'},
              {span: 3, content: '<span style="color:red">*</span> 收件人手机', class: 'item label'},
              {span: 5, class: 'item', content: '汉'}
            ]
          }]
        }
      }
    },

    created(){
      this.resetSpan()
    },

    methods: {
      resetSpan(){
        this.pages.layout.forEach((row) => {
          if (row.cols.length == 0) {
            return
          }
          var colsSpan = row.cols.map(function (col) {
            return col.span
          })

          var spanSum = _.sum(colsSpan)
          if (spanSum < 24) {
            _.last(row.cols).span += (24 - spanSum)
          }
        })
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .readable-table {
    border-right: 1px solid rgba(216, 220, 240, 1);
    border-bottom: 1px solid rgba(216, 220, 240, 1);
    background-color: #F7F8FC;

    .item {
      border-left: 1px solid rgba(216, 220, 240, 1);
      border-top: 1px solid rgba(216, 220, 240, 1);
      height: 32px;
      line-height: 28px;
      padding: 4px;
    }

    .row .item.label {
      background-color: #F0F1F9;
    }
  }
</style>
