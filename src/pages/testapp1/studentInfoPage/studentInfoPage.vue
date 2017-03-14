<template>
  <div>
    <i-container :config="pages" v-ref:ipage></i-container>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        pages: {
          layout: [{
            cols: [{
              component: 'common_fragment_nav',
              options: {
                navigates: [{title: '特殊考生录取', path: '/'}, {title: '考生报名信息'}]
              }
            }]
          }, {
              style:{'margin':'16px 0'},
            cols: [
              {
                component: 'common_fragment_text',
                options: {content: '基本信息'},
                style: {'font-weight': 700}
              }
            ]
          }, {
            cols: [
              {
                component: 'studentInfo_fragment_baseInfo'
              }
            ]
          }
          ]
        }
      }
    }
  }
</script>
<style scoped>
  .main {
    padding: 16px;
  }

  .readable-table {
    border-right: 1px solid rgba(216, 220, 240, 1);
    border-bottom: 1px solid rgba(216, 220, 240, 1);
    margin: 16px;
    background-color: #F7F8FC;
  }

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
</style>
