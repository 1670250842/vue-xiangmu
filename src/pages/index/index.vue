<template>
  <div>
    <el-container>
      <el-aside width="200px"  style="overflow: hidden;">
        <el-row class="tac">
            <el-menu
              default-active="2"
              router
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              
            >
            <el-menu-item index="/index/home">
                <i class="el-icon-menu"></i>
                <span slot="title" >首页</span>
            </el-menu-item>
              <el-submenu index="1" style="overflow: hidden;">
                
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>系统设置</span>
                </template>
                <el-menu-item-group>
                  
                  <el-menu-item index="/index/menu">菜单管理</el-menu-item>
                  <el-menu-item index="/index/role">角色管理</el-menu-item>
                  <el-menu-item index="/index/manger">管理员管理</el-menu-item>
                </el-menu-item-group>
                
              </el-submenu>
              
              
             <el-submenu index="3"  style="overflow: hidden;">
                
                <template slot="title">
                  <i class="el-icon-s-goods"></i>
                  <span>商城管理</span>
                </template>
                <el-menu-item-group>
                  
              <el-menu-item index="/index/classify">商品分类</el-menu-item>
              <el-menu-item index="/index/spec">商品规格</el-menu-item>
              <el-menu-item index="/index/goods">商品管理</el-menu-item>
              <el-menu-item index="/index/vip">会员管理</el-menu-item>
              <el-menu-item index="/index/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/index/seckill">秒杀活动</el-menu-item>
                </el-menu-item-group>
                
              </el-submenu>
            </el-menu>
          
        </el-row>
      </el-aside>
      <el-container>
        <el-header> 
          
          <div class="tou"><el-button type='danger' @click="tuichu">退出</el-button></div>
          <div class="tou">{{list.username}} </div>
          </el-header>
        <el-main>
           <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>

          <!-- 二级 路由出口 -->
         <div class="mgt"> <router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      list:'urse/list'
    })
  },
  components: {},
  data() {
    return {};
  },
  methods:{
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    ...mapActions({
      requestClassifyList:'classify/requestClassifyList'
    }),
     ...mapActions({
      requestUrseList:'urse/requestUrseList'
    }),
    tuichu(){
      this.requestUrseList({})
      this.$router.push('/login')
    }
    // index(){
    //   this.$router.push('/index')
    // }
  },
  mounted(){
    this.requestClassifyList()
  }
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #20222a;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  overflow: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.mgt {
  margin-top: 20px;
}
.tou{
  float:right;
}

</style>