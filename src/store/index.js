import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import role from './modules/role'
import manger from './modules/manger'
import classify from './modules/classify'
import spec from './modules/spec'
import urse from './modules/urse'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        menu,
        role,
        manger,
        classify,
        spec,
        urse
    }
})