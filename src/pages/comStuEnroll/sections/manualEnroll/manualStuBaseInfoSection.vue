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
          class: 'manual-readable-table',
          rows: [{
            class: 'row',
            cols: [
              {span: 2, content: '姓名', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.name},
              {span: 2, content: '考生号', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.ticketNum},
              {span: 2, content: '身份证号', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.idNum},
              {span: 2, content: '报考科类', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.cateName},
            ]
          },{
            class: 'row',
            cols: [
              {span: 2, content: '投档总成绩', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.enrollScoreSum},
              {span: 2, content: '是否服从调剂', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.isAcceptAjust},
              {span: 2, content: '录取专业', class: 'item label'},
              {span: 4, class: 'item', content: this.options.info.lqzy}
            ]
          },
            {
              class: 'row',
              cols: [
                {span: 2, content: '第一志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.wish1},
                {span: 2, content: '第二志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.wish2},
                {span: 2, content: '第三志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.wish3},
                {span: 2, content: '第四志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.wish4},
              ]
            },
            {
              class: 'row',
              cols: [
                {span: 2, content: '第五志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.wish5},
                {span: 2, content: '第六志愿', class: 'item label'},
                {span: 4, class: 'item', content: this.options.info.wish6},
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
          name: 'liujun',
          ticketNum:'123456789123456789',
          idNum:'1235656200112122236',
          cateName:'理科',
          enrollScoreSum:300,
          isAcceptAjust:'是',
          lqzy:'计算机专业',
          wish1:'会计',
          wish2:'金融',
          wish3:'经济',
          wish4:'物理',
          wish5:'化学',
          wish6:'生物',

        }
      }
    }
  }
</script>
<style lang="less" rel="stylesheet/less">
  .manual-readable-table {
    border-right: 1px solid rgba(216, 220, 240, 1);
    border-bottom: 1px solid rgba(216, 220, 240, 1);
    background-color: #fff;

    .item {
      border-left: 1px solid rgba(216, 220, 240, 1);
      border-top: 1px solid rgba(216, 220, 240, 1);
      height: 32px;
      line-height: 28px;
      padding: 4px 8px;
    }

    .row .item.label {
      background-color: #F5F7F9;
    }
  }
</style>
