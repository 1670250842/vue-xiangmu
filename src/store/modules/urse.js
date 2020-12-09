import Vue from 'vue'
import Vuex from 'vuex'
import {reqRoleList} from '../../util/request'
Vue.use(Vuex)

const state = {
    list:sessionStorage.getItem('list')?JSON.parse(sessionStorage.getItem('list')):{}
}

const  mutations ={
    getRoleList(state,obj){
        state.list = obj
        sessionStorage.setItem('list',JSON.stringify(obj))
    }
}

const actions = {
    requestUrseList(context,obj){
       context.commit("getRoleList",obj)
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


