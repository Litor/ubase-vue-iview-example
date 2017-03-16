<template>
  <div>
    <div class="expand" @click="$emit('on-expand')">
      <Icon type="arrow-shrink" v-if="options.expanded"></Icon>
      <Icon type="arrow-expand" v-if="!options.expanded"></Icon>
    </div>
    <Tabs size="small">
      <Tab-pane label="属性">
          <Form-item class="attr-form-item"  label="别名">
            <i-input :value.sync="options.currentCol.name" placeholder="请输入" size="small"></i-input>
          </Form-item>
          <Form-item class="attr-form-item"  label="组件名称">
            <i-select :model.sync="options.currentCol.component" placeholder="请选择..." :clearable="true">
              <i-option value="topTipSection">topTipSection</i-option>
              <i-option value="formulaEditSection">formulaEditSection</i-option>
              <i-option value="formulaKeyboardSection">formulaKeyboardSection</i-option>
              <i-option value="formulaTableSection">formulaTableSection</i-option>
            </i-select>
          </Form-item>
          <Form-item class="attr-form-item"  label="content">
            <i-input :value.sync="options.currentCol.content" type="textarea" :autosize="{minRows: 5,maxRows: 40}"></i-input>
          </Form-item>
      </Tab-pane>
      <Tab-pane label="样式">
        <Row :gutter="8">
          <i-col span="12">
            <Form-item class="attr-form-item" label="span" style="margin-bottom: 10px;" >
              <Input-number :value.sync="options.currentCol['span']" size="small"></Input-number>
            </Form-item>
            <Form-item class="attr-form-item"  label="padding-top" v-if="options.currentCol.style">
              <Input-number :value.sync="options.currentCol.style['padding-top'] | pxFilter" size="small"></Input-number>
            </Form-item>
            <Form-item class="attr-form-item"  label="padding-left" v-if="options.currentCol.style">
              <Input-number :value.sync="options.currentCol.style['padding-left'] | pxFilter" size="small"></Input-number>
            </Form-item>
            <Form-item class="attr-form-item"  label="font-weight" v-if="options.currentCol.style">
              <Input-number :value.sync="options.currentCol.style['font-weight']" size="small"></Input-number>
            </Form-item>
          </i-col>
          <i-col span="12">
            <Form-item class="attr-form-item"  label="font-size" v-if="options.currentCol.style">
              <Input-number :value.sync="options.currentCol.style['font-size'] | pxFilter" size="small"></Input-number>
            </Form-item>
            <Form-item class="attr-form-item"  label="padding-bottom" v-if="options.currentCol.style">
              <Input-number :value.sync="options.currentCol.style['padding-bottom'] | pxFilter" size="small"></Input-number>
            </Form-item>
            <Form-item class="attr-form-item"  label="padding-right" v-if="options.currentCol.style">
              <Input-number :value.sync="options.currentCol.style['padding-right'] | pxFilter" size="small"></Input-number>
            </Form-item>
            <Form-item class="attr-form-item"  label="color" v-if="options.currentCol.style">
              <i-input :value.sync="options.currentCol.style['color']" size="small"></i-input>
            </Form-item>
          </i-col>
        </Row>
      </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
  Vue.filter('pxFilter', {
    read: function(val) {
      return val? parseInt(val.replace('px', '')):0
    },
    write: function(val, oldVal) {
      return val && (val+'px')
    }
  })

  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins: [fragmentMixin],
  }
</script>
<style scoped>
  .attr-form-item{
    margin-bottom: 8px;
  }

  .expand{
    position: absolute;
    right: 8px;
    top: 4px;
    font-size:18px;
    cursor: pointer;
    z-index: 10;
  }
</style>
