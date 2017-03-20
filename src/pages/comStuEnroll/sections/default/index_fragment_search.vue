<template>
  <div>
    <Card :dis-hover="true" style="background-color: #F7F8FC;">
      <Row class="row">
        <i-col span="4" class="search-item label">关键字：</i-col>
        <i-col span="4" class="search-item">
          <i-input :value.sync="value" placeholder="请输入..."></i-input>
        </i-col>
        <i-col span="4" class="search-item label">单招类别：</i-col>
        <i-col span="4" class="search-item">
          <sync-select url="/ir-mngt/code/getCategories"></sync-select>
        </i-col>
        <i-col span="4" class="search-item label">报考科类：</i-col>
        <i-col span="4" class="search-item">
          <i-select :model.sync="model1">
          </i-select>
        </i-col>
      </Row>
      <Row class="row">
        <i-col span="4" class="search-item label">生源地：</i-col>
        <i-col span="4" class="search-item">
          <i-select :model.sync="model1">
            <i-option v-for="item in options.cityList" :value="item.value">{{ item.label }}</i-option>
          </i-select>
        </i-col>
        <i-col span="4" class="search-item label">特殊考生类型：</i-col>
        <i-col span="4" class="search-item">
          <i-select :model.sync="model1">
            <i-option v-for="item in options.cityList" :value="item.value">{{ item.label }}</i-option>
          </i-select>
        </i-col>
        <i-col span="4" class="search-item label">录取专业：</i-col>
        <i-col span="4" class="search-item">
          <i-select :model.sync="model1">
            <i-option v-for="item in options.cityList" :value="item.value">{{ item.label }}</i-option>
          </i-select>
        </i-col>
      </Row>
      <Row class="row">
        <i-col span="4" class="search-item label">录取志愿：</i-col>
        <i-col span="4" class="search-item">
          <i-select :model.sync="model1">
            <i-option v-for="item in options.cityList" :value="item.value">{{ item.label }}</i-option>
          </i-select>
        </i-col>
        <i-col span="4" class="search-item label">录取状态：</i-col>
        <i-col span="4" class="search-item">
          <i-select :model.sync="model1">
            <i-option v-for="item in options.cityList" :value="item.value">{{ item.label }}</i-option>
          </i-select>
        </i-col>
        <i-col span="4" class="search-item label">录取方式：</i-col>
        <i-col span="4" class="search-item">
          <i-select :model.sync="model1">
            <i-option v-for="item in options.cityList" :value="item.value">{{ item.label }}</i-option>
          </i-select>
        </i-col>
      </Row>
      <Row>
        <i-button type="primary">查询</i-button>
        <i-button>重置</i-button>
      </Row>
    </Card>
  </div>
</template>
<script>
  import syncSelect from 'iview-biz/components/sync-select/syncSelect.vue'
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins:[fragmentMixin],
    components:{syncSelect}
  }
</script>
<style scoped>
  .search-item {
    height: 32px;
    line-height: 32px;
  }

  .search-item.label {
    padding-left: 16px;
  }

  .row {
    padding-bottom: 16px;
  }
</style>
