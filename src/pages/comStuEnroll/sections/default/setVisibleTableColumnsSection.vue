<template>
  <div>
    <div style="margin-top: -4px;margin-bottom: 8px;">当前选中：{{options.selected.length}} 项 （最多不超多13项）</div>
    <Checkbox-group :model.sync="options.selected">
      <Checkbox :value="item.id" v-for="item in options.list" style="width:120px;margin-bottom: 8px;">
        <span>{{item.name}}</span>
      </Checkbox>
    </Checkbox-group>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins: [fragmentMixin],
  }
</script>
