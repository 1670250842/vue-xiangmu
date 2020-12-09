<template>
  <div>

   <el-button type='primary' @click="willAdd">添加</el-button>
    <!-- 添加 -->
    <v-add :info='info' ref='one'></v-add>
    <!-- 列表 -->
    <v-list @bianji='edit($event)'></v-list>
  </div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
  components: {
    vAdd,
    vList
  },
  data() {
    return {
      info:{
        isShow:false,
        isAdd:true,
        title:'管理员添加' //用来判断是添加还是修改
      }
    };
  },
   methods:{
    willAdd(){
      this.info.isShow = !this.info.isShow
      this.$refs.one.chongzhi()
    },
    edit(e){
      this.info.isShow=true;
      this.info.isAdd = false;
      this.info.title = '管理员修改';
      
      this.$refs.one.look(e)
    }
  },
};
</script>
<style>
</style>