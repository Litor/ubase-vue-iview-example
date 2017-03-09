<template>
  <div>
    <Breadcrumb>
      <Breadcrumb-item :href="item.path?('#'+item.path):'javascript:void(0)'" v-for="item in options.navigates">{{item.title}}</Breadcrumb-item>
    </Breadcrumb>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins:[fragmentMixin],
  }
</script>
