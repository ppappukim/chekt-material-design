import Vue                    from 'vue'
import Vuex                   from 'vuex'

import general              from './modules/general'
import dialog               from './modules/dialog'
import toast                from './modules/toast'
import search               from './modules/search'



Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    general,
    dialog,
    toast,
    search
  },
  strict: debug
})
