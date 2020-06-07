import Vue from 'vue'
import VueRouter from 'vue-router'

import Dealer from './Dealer.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/dealer',
            component: Dealer
        },
    ]
})  