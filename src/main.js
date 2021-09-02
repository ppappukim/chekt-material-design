import Vue from 'vue'
import App from './App.vue'
import router from './_router'
import store  from './store'

// Plugins
import ToolPlugin from './plugins/tool'
Vue.use(ToolPlugin)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
