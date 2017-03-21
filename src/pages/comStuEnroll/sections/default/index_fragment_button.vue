<template>
  <div>
    <i-button type="primary">导出</i-button>
    <i-button>取消全部录取</i-button>
    <i-button>取消所选录取</i-button>
    <Dropdown>
      <i-button>
        <Icon type="locked"></Icon>
        锁定
        <Icon type="arrow-down-b"></Icon>
      </i-button>
      <Dropdown-menu slot="list">
        <Dropdown-item>锁定全部</Dropdown-item>
        <Dropdown-item>锁定所选</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
    <Dropdown>
      <i-button>
        <Icon type="unlocked"></Icon>
        解锁
        <Icon type="arrow-down-b"></Icon>
      </i-button>
      <Dropdown-menu slot="list">
        <Dropdown-item>解锁全部</Dropdown-item>
        <Dropdown-item>解锁可选</Dropdown-item>
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
