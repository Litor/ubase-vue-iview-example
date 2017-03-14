<template>
  <div>
    <i-container :config="pages" v-ref:ipage></i-container>
  </div>
</template>
<script>
  import layout from './layout'
  import indexPage from './indexPage'

  export default {
    data () {
      return {
        pages: this.$merge(layout, indexPage(this))
      }
    }
  }
</script>
