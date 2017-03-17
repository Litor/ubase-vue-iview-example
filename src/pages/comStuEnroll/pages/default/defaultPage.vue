<template>
  <div>
    <i-container :config="pages" v-ref:ipage></i-container>
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

    ready(){
      Utils.post('/ir-mngt/enrollTemplet/getAlltemplets').then(function (res) {
        console.log(res)
      })
    }
  }
</script>
