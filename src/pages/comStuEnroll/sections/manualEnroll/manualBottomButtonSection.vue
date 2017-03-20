<template>
  <div>
    <i-button type="primary" @click="$emit('on-exec')">执行汇总成绩计算</i-button>
    <i-button  @click="$emit('on-view')">查看汇总成绩</i-button>
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
      events: {
        'on-exec': function () {
          console.log(`eventName:on-exec; ()`)
        },
        'on-view': function () {
          console.log(`eventName:on-view; ()`)
        }
      }
    }
  }
</script>
