import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [{
    path: '/index', // 首页
    name: 'index',
    component (resolve) {
      require.ensure(['../view/index/index.vue'], () => {
        resolve(require('../view/index/index.vue'))
      })
    }
  },
  {
    path: '/', // 首页
    name: 'index',
    component (resolve) {
      require.ensure(['../view/index/index.vue'], () => {
        resolve(require('../view/index/index.vue'))
      })
    }
  }
  ]
})

export default router
