<template>
  <div>
    <i-button type="primary" @click="$emit('on-test')">自动录取</i-button>
    <i-button v-link="{path:'/studentInfo'}">手动录取</i-button>
    <i-button>导出</i-button>
    <Dropdown>
      <i-button>取消录取
        <Icon type="arrow-down-b"></Icon>
      </i-button>
      <Dropdown-menu slot="list">
        <Dropdown-item>驴打滚</Dropdown-item>
        <Dropdown-item>炸酱面</Dropdown-item>
        <Dropdown-item disabled>豆汁儿</Dropdown-item>
        <Dropdown-item>冰糖葫芦</Dropdown-item>
        <Dropdown-item divided>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
    <Dropdown>
      <i-button>
        <Icon type="locked"></Icon>
        锁定
        <Icon type="arrow-down-b"></Icon>
      </i-button>
      <Dropdown-menu slot="list">
        <Dropdown-item>驴打滚</Dropdown-item>
        <Dropdown-item>炸酱面</Dropdown-item>
        <Dropdown-item disabled>豆汁儿</Dropdown-item>
        <Dropdown-item>冰糖葫芦</Dropdown-item>
        <Dropdown-item divided>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
    <Dropdown>
      <i-button>
        <Icon type="unlocked"></Icon>
        解锁
        <Icon type="arrow-down-b"></Icon>
      </i-button>
      <Dropdown-menu slot="list">
        <Dropdown-item>驴打滚</Dropdown-item>
        <Dropdown-item>炸酱面</Dropdown-item>
        <Dropdown-item disabled>豆汁儿</Dropdown-item>
        <Dropdown-item>冰糖葫芦</Dropdown-item>
        <Dropdown-item divided>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
    <i-button style="float:right" @click="$emit('on-modal')">
      <Icon type="navicon-round"></Icon>
      自定义显示列
    </i-button>
  </div>
</template>
<script>
  import fragmentMixin from 'iview-biz/mixins/fragmentMixin'
  export default {
    mixins:[fragmentMixin],
  }
</script>
