<template>
  <div>
    <div class="ivu-card ivu-card-bordered ivu-card-dis-hover">
      <Row>
        <i-col span="6">普通资格投档总成绩：</i-col>
        <i-col span="18">
          <Tag v-for="item in formulas" :class="{operator: item.type==0}">{{item.name}}</Tag>
        </i-col>
      </Row>
      <div class="clear"><a href="javascript:void(0)" @click="clear">清空</a></div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        formulas: [{name: '数学', type: 1, id: '22'}, {name: '+', type: 0, id: '+'}, {
          name: '数学',
          type: 1,
          id: '22'
        }]
      }
    },

    methods: {
      clear(){
        this.formulas = []
      },

      push(item){
        this.formulas.push(item)
      },

      get(){
        var res = []

        _.each(this.formulas,(item)=>{
            res.push(item.id)
        })

        return res
      }
    }
  }
</script>
<style scoped lang="less" rel="stylesheet/less">
  .operator {
    border-radius: 10px;
    padding: 4px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    padding-top: 0px;
  }

  .ivu-card{
    height: 80px;
    position: relative;
  }

  .clear{
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
</style>
