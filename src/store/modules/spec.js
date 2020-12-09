import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {reqSpecList,reqSpecListCount} from '../../util/request'

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
    requstSpecList(context){
        reqSpecList({page:context.state.page,size:context.state.size}).then(res=>{
            var arr = res.data.list;
            // attrs:'['27','28]'
            // console.log(arr)  ->包含所有属性
            arr.forEach(item=>{
                item.attrs = JSON.parse(item.attrs)
                console.log(item.attrs)  //=>['27,28,29']
            })

            context.commit('getList', arr)
            
        })
    },
    requstSpecListCount(context,){
        reqSpecListCount().then(res=>{
            context.commit('getListTotalSJ',res.data.list[0].total)
        })
    },
    // 修改内容
    requstSpecPage(context,page){
        context.commit('getListPage',page)
        context.dispatch('requstSpecList')
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