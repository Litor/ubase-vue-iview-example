<template>
  <div>
    <Card :dis-hover="true" class="ivu-color-background-background top-tip-section">
      <Row>
        <i-col :span="4">汇总成绩计算流程</i-col>
        <i-col :span="20">
          <Steps :current="2">
            <Step title="第一步：配置计算公式" icon="ios-gear"></Step>
            <Step title="第二步：执行计算公式" icon="ios-calculator"></Step>
            <Step title="第三步：查看计算结果" icon="document-text"></Step>
          </Steps>
        </i-col>
      </Row>
    </Card>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins: [fragmentMixin],
  }
</script>
<style scoped lang="less" rel="stylesheet/less">

</style>
<style lang="less" rel="stylesheet/less">
  .top-tip-section .ivu-steps-item.ivu-steps-status-process .ivu-steps-title {
    color: #999;
  }

  .top-tip-section .ivu-steps .ivu-steps-title {
    background-color: #f5f7f9;
  }

  .top-tip-section .ivu-steps-head{
    background-color: #f5f7f9!important;
  }

  /*.top-tip-section .ivu-steps-head {
    width: 30px;
    height: 30px;
    background-color: #3399ff!important;
    border-radius: 15px;

    .ivu-steps-head {
      background-color: #f5f7f9;
    }

    .ivu-steps-icon{
      color: #fff!important;
    }
  }*/
</style>
