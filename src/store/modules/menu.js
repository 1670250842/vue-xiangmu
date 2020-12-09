import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {reqMenuList} from '../../util/request'

const state ={
     list:[]
}


const mutations={
    getList(state,arr){
        state.list=arr
    }
}

const actions={
    requestMenuList(context){
        reqMenuList({istree:true}).then(res=>{
            context.commit('getList',res.data.list)
        })
    }
}

const getters={
    list(state){
        return state.list
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}