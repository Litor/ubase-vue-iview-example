<template>
  <div>
    <i-table :content="options.self" :data="options.tableData1" :columns="options.tableColumns1" stripe></i-table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="$emit('on-change')" show-sizer></Page>
      </div>
    </div>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins:[fragmentMixin],
  }
</script>
