<template>
  <div>
    <div class="layout-review">
      <code>
        {{{options.layoutSource}}}
      </code>
    </div>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins: [fragmentMixin],
  }
</script>
<style scoped>
  .layout-review {
    height: 300px;
    overflow-y: scroll;
  }
</style>
