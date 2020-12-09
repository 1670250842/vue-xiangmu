<template>
<div>
    <el-button type='primary' @click="willAdd">添加</el-button>
    <!-- 添加 -->
   
    <v-add :info='info' ref="one"></v-add>

     <!-- 列表 -->
    <v-list @edit='edit($event)'></v-list>
</div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
components:{
    vAdd,
    vList
 },
data () {
 return {
    //  定义一个变量判断出现
    info:{
      isShow:false,
      isAdd:true,
      title:'菜单添加' //用来判断是添加还是修改
    }
 }
},
methods:{
  // 定义一个方法改变isShow的状态
  // 点击添加
    willAdd(){
        this.info.isShow = !this.info.isShow
        this.info.isAdd = true
        this.info.title = '菜单添加'
        this.$refs.one.csz()
    },
    // 接收子组件的方法,编辑
    edit(e){
      // console.log(e);
      this.info.isShow = true
      this.info.isAdd = false
      this.info.title = '菜单编辑'
      console.log(this.$refs.one);
      this.$refs.one.look(e)

    }
},
mounted(){
}
}
</script>
<style scoped>
</style>