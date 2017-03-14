<template>
  <div>
    <div class="ivu-table">
      <div class="ivu-table-header">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
          <thead>
          <tr>
            <th v-for="item in header">
              <div class="ivu-table-cell">
                {{item}}
              </div>
            </th>
          </tr>
          </thead>
        </table>
      </div>
      <div class="ivu-table-body">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
          <tbody class="ivu-table-tbody">
          <tr class="ivu-table-row">
            <td>
              <div class="ivu-table-cell">
                王小明
              </div>
            </td>
            <td>
              <div class="ivu-table-cell">
                18
              </div>
            </td>
            <td>
              <div class="ivu-table-cell">
                北京市朝阳区芍药居
              </div>
            </td>
          </tr>
          <tr class="ivu-table-row">
            <td>
              <div class="ivu-table-cell">
                张小刚
              </div>
            </td>
            <td>
              <div class="ivu-table-cell">
                25
              </div>
            </td>
            <td>
              <div class="ivu-table-cell">
                北京市海淀区西二旗
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins: [fragmentMixin],
    data:function () {
      return {
          header:['单招类别', '科类', '文化总成绩（普）', '技能总成绩（普）', '投档总成绩（普）']
      }
    }
  }
</script>
