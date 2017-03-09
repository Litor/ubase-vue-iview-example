import indexPage from './indexPage/indexPage.vue'
import studentInfoPage from './studentInfoPage/studentInfoPage'

import common_fragment_nav from 'iview-biz/fragments/common_fragment_nav'

Vue.component('common_fragment_nav',common_fragment_nav)

export default {
  '/': {
    component: indexPage
  },
  '/studentInfo':{
    component: studentInfoPage
  }
}
