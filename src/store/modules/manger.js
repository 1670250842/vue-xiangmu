import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {reqMangerList,reqMangerCount} from '../../util/request'

const state = {
    list:[],
    page: 1,
    size: 3,
    totalSJ: null,
}

const mutations = {
    getList(state,arr){
        state.list = arr
    },
    getListTotalSJ(state,totalSJ){
        state.totalSJ = totalSJ
    },
    getListPage(state,page){
        state.page = page
    }
}

const actions = {
    requstMangerList(context){
        reqMangerList({page:context.state.page,size:context.state.size}).then(res=>{
            context.commit('getList',res.data.list)
        })
    },
    requstMangerListCount(context,){
        reqMangerCount().then(res=>{
            context.commit('getListTotalSJ',res.data.list[0].total)
        })
    },
    // 修改内容
    requstMangerPage(context,page){
        context.commit('getListPage',page)
        context.dispatch('requstMangerList')
    }

}

const getters ={
    list(state){
        return state.list
    },
    totalSJ(state){
        return state.totalSJ
    },
    page(state){
        return state.page
    },
    size(state){
        return state.size
    }
}

export default{
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}