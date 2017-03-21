<template>
  <div>
    <div  style="padding: 16px;background-color:#ECEDF2;">
      <Card :dis-hover="true" style="  border-radius: 8px;">
        <i-container :config="pages" v-ref:ipage></i-container>
      </Card>
    </div>
  </div>
</template>
<script>
  import layout from './layout'
  import index from './index'

  export default {
    data () {
      return {
        pages: this.$merge(layout, index(this))
      }
    },

    route: {
      activate: function (transition) {
        Utils.post('/ir-mngt/comCadtEnroll/getOpenedBatch').then((res) => {
          this.$getSection('openBatch').options.batchName = res.datas.batchName
          transition.next()
        })
      }
    }
  }
</script>
