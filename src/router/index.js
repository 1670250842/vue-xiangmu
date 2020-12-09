import Vue from 'vue'
import Router from 'vue-router'
const login = ()=>import('../pages/login/login')
const index = ()=>import('../pages/index/index')
const home = ()=>import('../pages/home/home')
const menu = ()=>import('../pages/menu/menu')
const manger = ()=>import('../pages/manger/manger')
const role = ()=>import('../pages/role/role')
const classify = ()=>import('../pages/classify/classify')
const spec = ()=>import('../pages/spec/spec')
const goods = ()=>import('../pages/goods/goods')
const banner = ()=>import('../pages/banner/banner.vue')
const vip = ()=>import('../pages/vip/vip')
const seckill = ()=>import('../pages/seckill/seckill')
Vue.use(Router)

// 首页的二级路由
export const indexRouter =[
  {
    path:'menu',
    name:'菜单管理',
    component:menu
  },
  {
    path:'role',
    name:'角色管理',
    component:role
  },
  {
    path:'manger',
    name:'管理员管理',
    component:manger
  },
  {
    path:'classify',
    name:'商品分类',
    component:classify
  },
  {
    path:'spec',
    name:'商品规格',
    component:spec
  },
  {
    path:'goods',
    component:goods,
    name:'商品管理'
  },
  {
    path:'vip',
    component:vip,
    name:'会员管理'
  },
  {
    path:'banner',
    component:banner,
    name:'轮播图管理'
  },
  {
    path:'seckill',
    component:seckill,
    name:'秒杀活动'
  },
]

export default new Router({
  routes: [
    // {
    //   path: '/
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:'/login',
      name:"登录页",
      component:login
    },
    {
      path:'/index',
      
      component:index,
      children:[
        {
          path:'home',
          component:home
        },
        {
          path:'',
          component:home
        },
        ...indexRouter
      ]
    }
  ]
})
