<template>
  <div>
    <Card :dis-hover="true" style="background-color: #F7F8FC;padding-top: 16px;">
      <div class="expand-button" @click="expand=!expand"><a href="javascript:void(0)">{{expand?'收起':'展开'}}</a></div>
      <div v-if="expand">
        <Row class="row">
          <i-col span="4" class="search-item label">关键字：</i-col>
          <i-col span="4" class="search-item">
            <i-input :value.sync="options.val.searchContent" placeholder="请输入考生姓名、考生号..."></i-input>
          </i-col>
          <i-col span="4" class="search-item label">单招类别：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.typeCode" :value.sync="options.val.typeCode"
                         :value-display.sync="options.val.typeCodeDisplay" :pageable="false"></sync-select>
          </i-col>
          <i-col span="4" class="search-item label">报考科类：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.categoryCode" :value.sync="options.val.categoryCode"
                         :value-display.sync="options.val.categoryCodeDisplay" :pageable="false"></sync-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">生源地：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.residenceCode" :value.sync="options.val.residenceCode"
                         :value-display.sync="options.val.residenceCodeDisplay"></sync-select>
          </i-col>
          <i-col span="4" class="search-item label">名族：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.nationCode" :value.sync="options.val.nationCode"
                         :value-display.sync="options.val.nationCodeDisplay"></sync-select>
          </i-col>
          <i-col span="4" class="search-item label">考生性别：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.sex">
              <i-option  value="1">男</i-option>
              <i-option  value="2">女</i-option>
            </i-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">政治面貌：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.politicalAffCode" :value.sync="options.val.politicalAffCode"
                         :value-display.sync="options.val.politicalAffCodeDisplay" :pageable="false"></sync-select>
          </i-col>
          <i-col span="4" class="search-item label">考生类别：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.cadtTypeCode" :value.sync="options.val.cadtTypeCode"
                         :value-display.sync="options.val.cadtTypeCodeDisplay" :pageable="false"></sync-select>
          </i-col>
          <i-col span="4" class="search-item label">毕业类别：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.gdteTypeCode" :value.sync="options.val.gdteTypeCode"
                         :value-display.sync="options.val.gdteTypeCodeDisplay" :pageable="false"></sync-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">是否免试：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.isNoExam">
              <i-option  value="1">是</i-option>
              <i-option  value="0">否</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">是否服从调剂：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.isAcceptAjust">
              <i-option  value="1">是</i-option>
              <i-option  value="0">否</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">录取专业：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.enrollMajorCode" :value.sync="options.val.enrollMajorCode"
                         :value-display.sync="options.val.enrollMajorCodeDisplay"></sync-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">录取志愿：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.enrollWish">
              <i-option v-for="item in enrollWishList" :value="item.code">{{ item.name}}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">录取状态：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.enrollStatus">
              <i-option v-for="item in enrollStatusList" :value="item.code">{{ item.name }}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">录取方式：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.enrollType">
              <i-option v-for="item in enrollTypeList" :value="item.code">{{ item.name }}</i-option>
            </i-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">锁定状态：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.enrollLock">
              <i-option v-for="item in enrollLockList" :value="item.code">{{ item.name }}</i-option>
            </i-select>
          </i-col>
        </Row>
      </div>
      <div v-if="!expand">
        <Row class="row">
          <i-col span="4" class="search-item label">关键字：</i-col>
          <i-col span="4" class="search-item">
            <i-input :value.sync="options.val.searchContent" placeholder="请输入考生姓名、考生号..."></i-input>
          </i-col>
          <i-col span="4" class="search-item label">单招类别：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.typeCode" :value.sync="options.val.typeCode"
                         :value-display.sync="options.val.typeCodeDisplay" :pageable="false"></sync-select>
          </i-col>
          <i-col span="4" class="search-item label">报考科类：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.categoryCode" :value.sync="options.val.categoryCode"
                         :value-display.sync="options.val.categoryCodeDisplay" :pageable="false"></sync-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">生源地：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.residenceCode" :value.sync="options.val.residenceCode"
                         :value-display.sync="options.val.residenceCodeDisplay"></sync-select>
          </i-col>
          <i-col span="4" class="search-item label">录取专业：</i-col>
          <i-col span="4" class="search-item">
            <sync-select :url="options.api.enrollMajorCode" :value.sync="options.val.enrollMajorCode"
                         :value-display.sync="options.val.enrollMajorCodeDisplay"></sync-select>
          </i-col>
          <i-col span="4" class="search-item label">录取志愿：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.enrollWish">
              <i-option v-for="item in enrollWishList" :value="item.code">{{ item.name}}</i-option>
            </i-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">录取状态：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.enrollStatus">
              <i-option v-for="item in enrollStatusList" :value="item.code">{{ item.name }}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">录取方式：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.enrollType">
              <i-option v-for="item in enrollTypeList" :value="item.code">{{ item.name }}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">锁定状态：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="options.val.enrollLock">
              <i-option v-for="item in enrollLockList" :value="item.code">{{ item.name }}</i-option>
            </i-select>
          </i-col>
        </Row>
      </div>
      <Row>
        <i-button type="primary" @click="$emit('on-search')">查询</i-button>
        <i-button @click="$emit('on-reset')">重置</i-button>
        <a href="javascript:void(0)" @click="expand=!expand" v-if="!expand">更多查询</a>
      </Row>
    </Card>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins: [fragmentMixin],
    data: function () {
      return {
        expand: false,
        enrollWishList: [
          {code: 1, name: '志愿一'}, {code: 2, name: '志愿二'}, {code: 3, name: '志愿三'}, {code: 4, name: '志愿四'}, {
            code: 5,
            name: '志愿五'
          }, {code: 6, name: '志愿六'}, {code: 99, name: '调剂'}
        ],
        enrollStatusList: [
          {code: 1, name: '已录取'}, {code: 2, name: '已落榜'}, {code: 3, name: '待录取'}
        ],

        enrollTypeList: [
          {code: 1, name: '自动录取'}, {code: 2, name: '手动录取'}
        ],

        enrollLockList: [
          {code: '0', name: '未锁定'}, {code: '1', name: '锁定'}
        ]
      }
    }
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

  .expand-button{
    position: absolute;
    right: 8px;
    top:8px;
  }
</style>
