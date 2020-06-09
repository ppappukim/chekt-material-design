import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    redirect: '/design'
  },
]

import homeRoutes from '@/_routes/home/_router'
import designRoutes from '@/_routes/design/_router'
const routes = baseRoutes.concat(homeRoutes)
                         .concat(designRoutes)

export default new VueRouter({
  mode: 'history',
  routes: routes
})
