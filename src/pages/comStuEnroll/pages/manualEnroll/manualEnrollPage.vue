<template>
  <div>
    <i-container :config="pages" v-ref:ipage></i-container>
  </div>
</template>
<script>
  import layout from './layout'
  import index from './index'
  import service from '../../service'

  export default {
    data () {
      return {
        pages: this.$merge(layout, index(this))
      }
    },

    created(){
        console.log(this.$options._ubase_component_path)
    }
  }
</script>
