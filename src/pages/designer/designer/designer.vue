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

    computed: {
      ps(){
        return this.$store.state.index
      },
    },

    methods: {
      selectSection(col, rows, index1, cols, index2){
        this.$getInstance('attributeSection').options = col
        this.ps.selectedSection = {currentCol: col, rows: rows, rowIndex: index1, cols: cols, colIndex: index2}
      },

      test(){
        console.log(this.pages)
      }
    }
  }
</script>
<style>
  html, body, body > main {
    height: 100%;
  }

  body > main > div, body > main > div > div, body > main > div > div > div:first-child {
    height: 100%;
  }
</style>
