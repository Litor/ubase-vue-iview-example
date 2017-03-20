let apiRootPath = 'ir-mgnt';
let apiBaseName = 'comStuEnroll';

export default {
  api: {
    getStuSignupInfo:`/${apiRootPath}/${apiBaseName}/getStuSignupInfo`
  },

  post(api, params){
    return Utils.post(this.api[api], params)
  }
};
