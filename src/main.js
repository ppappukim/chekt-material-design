import Vue from 'vue'
import App from './App.vue'
import router from './_router'
import store  from './store'

// Plugins
import ToolPlugin from './plugins/tool'
import FirebasePlugin from './plugins/firebase'

Vue.config.productionTip = false

Vue.use(ToolPlugin)
Vue.use(FirebasePlugin)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
