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
        title:'商品分类添加'
      }
    };
  },
  methods:{
    willAdd(){
      this.info.isShow = !this.info.isShow
       this.info.isAdd=true;
       this.info.title='商品分类添加';
       this.$refs.one.empty()
    },
    edit(id){
       this.info.isAdd=false;
       this.info.isShow=true;
       this.info.title='商品分类修改';
       this.$refs.one.look(id)
    }
  }
};
</script>
<style>
</style>