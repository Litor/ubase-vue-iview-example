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
