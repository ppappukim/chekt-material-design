import Vue                    from 'vue'
import Vuex                   from 'vuex'

import general              from './modules/general'
import dialog               from './modules/dialog'
import toast                from './modules/toast'
import search               from './modules/search'
import datepicker           from './modules/datepicker'
import icon                 from './modules/icon'
import animation                 from './modules/animation'



Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    general,
    dialog,
    toast,
    search,
    datepicker,
    icon,
    animation
  },
  strict: debug
})
