import defaultPage from './pages/default/defaultPage.vue'
import stuInfoPage from './pages/stuInfo/stuInfoPage.vue'
import manualEnrollPage from './pages/manualEnroll/manualEnrollPage.vue'

import common_fragment_nav from 'iview-biz/fragments/common_fragment_nav'

Vue.component('common_fragment_nav',common_fragment_nav)

export default {
  '/': {
    component: defaultPage
  },
  '/stuInfoPage':{
    component: stuInfoPage
  },
  '/manualEnrollPage':{
    component: manualEnrollPage
  }
}


