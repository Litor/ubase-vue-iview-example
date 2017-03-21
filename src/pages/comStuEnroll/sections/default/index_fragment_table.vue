<template>
  <div>
    <i-table :content="options.self" :data="tableData" :columns="options.tableColumns" stripe
             border></i-table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="total" :current="pageNumber" @on-change="onChange"
              @on-page-size-change="onPageSizeChange" show-sizer :page-size="pageSize"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins: [fragmentMixin],

    props: {params: Object},

    data: function () {
      return {
        tableData: [],
        total: 0,
        pageSize: 10,
        pageNumber: 1
      }
    },

    created(){
        this.$emit('on-created')
      this._reload()
    },

    methods: {
      _reload(){
        Utils.post(this.options.url, Object.assign({
          pageSize: this.pageSize,
          pageNumber: this.pageNumber
        }, this.options.params)).then((res) => {
          this.total = res.datas.totalSize
          this.tableData = res.datas.rows
          this.$emit('on-after-ajax', res.datas)
        })
      },

      onChange(pageNumber){
        this.pageNumber = pageNumber
        this._reload()
      },

      onPageSizeChange(pageSize){
        this.pageSize = pageSize
        this._reload()
      }
    }
  }
</script>
