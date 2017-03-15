<template>
  <div>
    <div class="main">
      <Tag class="tag" v-for="item in line1" @click="__select(item)">{{item.name}}</Tag>
      <Tag class="course-tag" :class="{hui:item.hui}" v-for="item in options.list" @click="__select(item)">
        {{item.name}}
      </Tag>
    </div>
  </div>
</template>
<script>
  /***
   * @param list <课程列表> ([{name:'语文'type:1,id:'01101'}])
   * @events on-select <点击课程或操作符触发的事件> ({name:'语文'type:1,id:'01101'})
   */
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'

  var oprations = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/', '(', ')']

  export default {
    mixins: [fragmentMixin],
    mock: mockData(),
    data: function () {
      return {
        line1: _.map(oprations, (item) => {
          return {name: item, type: 0, id: item}
        })
      }
    },

    methods: {
      __select(item){
        this.$emit('on-select', item)
      }
    }
  }

  function mockData() {
    return {
      options: {
        list: [{name: '语文', type: 1, id: '01101'},{name: '数学', type: 1, id: '01301', hui:true},{name: '语文', type: 1, id: '01101'},{name: '数学', type: 1, id: '01301', hui:true},{name: '语文', type: 1, id: '01101'},{name: '数学', type: 1, id: '01301', hui:true}]
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .main {
    background-color: #eee;
    padding-left: 6px;
    padding-top: 6px;
    padding-bottom: 6px;

    .tag {
      margin-right: 6px;
      width: 28px;
      height: 26px;
      line-height: 26px;
      text-align: center;
    }

    .course-tag {
      height: 26px;
      line-height: 26px;
      text-align: center;
      width: 140px;
      position: relative;

      &.hui:before {
        content: '\4F1A';
        position: absolute;
        width: 20px;
        left: 0;
        height: 20px;
        background-color: #00CC66;
        color: #fff;
        border-bottom-right-radius: 17px;
        top: -4px;
        padding-right: 4px;
      }
    }
  }
</style>
