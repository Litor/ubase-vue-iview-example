import path from 'path';
import ubase from 'ubase-vue';

ubase({
  // 输出路径
  dest:'./www',
  // 配置别名
  alias: {
    'components': path.resolve(__dirname, './src/components'),
    'statics': path.resolve(__dirname, './src/statics')
  },

  // 端口
  port: '8081',

  // meta地址
  metaInfoUrl: 'http://res.wisedu.com/WeCloud/emap-meta/manage-apps/jcsj-apps/',

  // mock server代理
  proxy: [{ source: '/wec-devops-tenant', target: 'http://172.16.7.21:31314' }]
});
