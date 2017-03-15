<template>
  <div>
    <Tabs size="small">
      <Tab-pane label="属性">
          <Form-item label="别名">
            <i-input :value.sync="options.name" placeholder="请输入" size="small"></i-input>
          </Form-item>
          <Form-item label="组件名称">
            <i-select :model.sync="options.component" placeholder="请选择..." :clearable="true">
              <i-option value="topTipSection">topTipSection</i-option>
              <i-option value="formulaEditSection">formulaEditSection</i-option>
              <i-option value="formulaKeyboardSection">formulaKeyboardSection</i-option>
              <i-option value="formulaTableSection">formulaTableSection</i-option>
            </i-select>
          </Form-item>
          <Form-item label="content">
            <i-input :value.sync="options.content" type="textarea" :autosize="{minRows: 5,maxRows: 7}"></i-input>
          </Form-item>
      </Tab-pane>
      <Tab-pane label="样式">
        <Form-item label="span" style="margin-bottom: 10px;" class="">
          <Input-number :value.sync="options['span']" size="small"></Input-number>
        </Form-item>
          <Form-item label="padding-top" v-if="options.style">
            <i-input :value.sync="options.style['padding-top']" size="small"></i-input>
          </Form-item>
          <Form-item label="padding-bottom" v-if="options.style">
            <i-input :value.sync="options.style['padding-bottom']" size="small"></i-input>
          </Form-item>
        <Form-item label="padding-left" v-if="options.style">
          <i-input :value.sync="options.style['padding-left']" size="small"></i-input>
        </Form-item>
        <Form-item label="padding-right" v-if="options.style">
          <i-input :value.sync="options.style['padding-right']" size="small"></i-input>
        </Form-item>
        <Form-item label="font-size" v-if="options.style">
          <i-input :value.sync="options.style['font-size']" size="small"></i-input>
        </Form-item>
        <Form-item label="font-weight" v-if="options.style">
          <i-input :value.sync="options.style['font-weight']" size="small"></i-input>
        </Form-item>
        <Form-item label="color" v-if="options.style">
          <i-input :value.sync="options.style['color']" size="small"></i-input>
        </Form-item>
      </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins: [fragmentMixin],
    data () {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    }
  }
</script>
