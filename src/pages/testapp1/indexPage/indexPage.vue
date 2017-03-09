<template>
  <div>{{$t('index.title')}}
    <i-container :config="pages" v-ref:ipage></i-container>
  </div>
</template>
<script>
  import config from './config'
  export default {
    data () {
      return {
        pages: config(this)
      }
    },
    methods: {
      test(){
        this.$Notice.open({
          title: '这是通知标题',
          desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
          duration: 0
        });
      },
      mockTableData1 () {
        let data = [];
        for (let i = 0; i < 5; i++) {
          data.push({
            name: '商圈' + Math.floor(Math.random() * 100 + 1),
            status: Math.floor(Math.random() * 3 + 1),
            portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
            people: [
              {
                n: '客群' + Math.floor(Math.random() * 100 + 1),
                c: Math.floor(Math.random() * 1000000 + 100000)
              },
              {
                n: '客群' + Math.floor(Math.random() * 100 + 1),
                c: Math.floor(Math.random() * 1000000 + 100000)
              },
              {
                n: '客群' + Math.floor(Math.random() * 100 + 1),
                c: Math.floor(Math.random() * 1000000 + 100000)
              }
            ],
            time: Math.floor(Math.random() * 7 + 1),
            update: new Date()
          })
        }
        return data;
      },
      formatDate (date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      },
      changePage (a, b, c, d) {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.$refs.ipage.get('table').options.tableData1 = this.mockTableData1();
      }
    }
  }
</script>
