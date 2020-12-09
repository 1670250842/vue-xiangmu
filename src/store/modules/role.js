import Vue from 'vue'
import Vuex from 'vuex'
import {reqRoleList} from '../../util/request'
Vue.use(Vuex)

const state = {
    list:[]
}

const  mutations ={
    getRoleList(state,arr){
        state.list = arr
    }
}

const actions = {
    requestRoleList(context){
        reqRoleList().then(res=>{
            context.commit('getRoleList',res.data.list)
        })
    }
}

const getters = {
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


