<template>
  <div>
    <i-container :config="pages" v-ref:ipage></i-container>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'

  export default {
    mixins: [fragmentMixin],
    mock: mockData(),
    computed: {
      pages: function () {
        return {
          class: 'readable-table',
          rows: [{
            class: 'row',
            cols: [
              {span: 2, content: '姓名', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.xm},
              {span: 2, content: '考生号', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.ksh},
              {span: 2, content: '身份证号', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.sfzh},
              {span: 2, content: '报考科类', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.bklb},
            ]
          },{
            class: 'row',
            cols: [
              {span: 2, content: '投档总成绩', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.tkzcj},
              {span: 2, content: '是否服从调剂', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.sffctj},
              {span: 2, content: '录取专业', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.lqzy}
            ]
          },
            {
              class: 'row',
              cols: [
                {span: 2, content: '第一志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.zy1},
                {span: 2, content: '第二志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.zy2},
                {span: 2, content: '第三志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.zy3},
                {span: 2, content: '第四志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.zy4},
              ]
            },
            {
              class: 'row',
              cols: [
                {span: 2, content: '第五志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.zy5},
                {span: 2, content: '第六志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.zy6},
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
        this.pages.rows.forEach((row) => {
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

  function mockData() {
    return {
      options: {
        info: {
          xm: 'liujun',
          ksh:'123456789123456789',
          sfzh:'1235656200112122236',
          bklb:'理科',
          tkzcj:300,
          sffctj:'是',
          lqzy:'计算机专业',
          zy1:'会计',
          zy2:'金融',
          zy3:'经济',
          zy4:'物理',
          zy5:'化学',
          zy6:'生物',

        }
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
      padding: 4px 8px;
    }

    .row .item.label {
      background-color: #F0F1F9;
    }
  }
</style>
