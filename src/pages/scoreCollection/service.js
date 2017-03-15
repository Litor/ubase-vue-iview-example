let apiRootPath = 'jcsj-apiBaseNames-web';
let apiBaseName = 'index';

export default {
  api: {
    demo: `/${apiRootPath}/${apiBaseName}/demo`
  },

  demo(params) {
    return Utils.post(this.api.demo, params).then(function(res) {
      return res.datas;
    });
  }
};
