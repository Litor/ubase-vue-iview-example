<template>
  <div>
    <div class="ivu-table ivu-table-border">
      <div class="ivu-table-header">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
          <thead>
          <tr>
            <th v-for="item in options.header">
              <div class="ivu-table-cell">
                {{item.title}}
              </div>
            </th>
          </tr>
          </thead>
        </table>
      </div>
      <div class="ivu-table-body">
        <table cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
          <tbody class="ivu-table-tbody">
          <tr class="ivu-table-row" v-for="item in options.datas">
            <td v-for="item2 in options.header">
              <div class="ivu-table-cell">
                <div v-if="options.editableCols.includes(item2.id)">
                  <div v-if="!item[item2.id]">
                    <span class="ivu-color-disabled-font">未设置</span>
                    <div class="ivu-color-primary-font setting-button" @click="$emit('on-setting', item, item2.id)">
                      <Icon type="settings"></Icon>
                      <span>设置</span>
                    </div>
                  </div>
                  <div v-else>
                    <span>{{item[item2.id]}}</span>
                    <div class="ivu-color-primary-font setting-button" @click="$emit('on-edit', item, item2.id)">
                      <Icon type="edit"></Icon>
                      <span>修改</span>
                    </div>
                  </div>
                </div>
                <div v-else>
                  {{item[item2.id]}}
                </div>
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
    mock: mockData(),
  }

  function mockData() {
    return {
      options: {
        header: [{title: '单招类别', id: 'dzlb'}, {title: '科类', id: 'kl'}, {
          title: '文化总成绩（普）',
          id: 'whkcj'
        }, {title: '技能总成绩（普）', id: 'jncj'}, {title: '投档总成绩（普）', id: 'tdcj'}],
        datas: [{dzlb: '普通高中生自主单招', kl: '文科类', whkcj: '语文+数学+英语', jncj: '上机*0.3+面试*0.7', tdcj: ''}, {
          dzlb: '普通高中生自主单招',
          kl: '理科类',
          whkcj: '',
          jncj: '',
          tdcj: '文化测试总成绩+技能测试总成绩+政策加分'
        }],
        editableCols: ['whkcj', 'jncj', 'tdcj']
      },

      events: {
        'on-setting': function (data, id) {
          console.log(`eventName:on-setting; (${JSON.stringify(data)}, ${id})`)
        },

        'on-edit': function (data, id) {
          console.log(`eventName:on-edit; (${JSON.stringify(data)}, ${id})`)
        }
      }
    }
  }
</script>
<style scoped>
  .setting-button {
    display: inline-block;
    float: right;
    cursor: pointer;
  }
</style>
