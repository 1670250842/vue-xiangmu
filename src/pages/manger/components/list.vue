<template>
  <div>
    <template>
      <el-table
        :data="list"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="id" label="用户编号" sortable width="180">
        </el-table-column>
        <el-table-column prop="username" label="用户名" sortable width="180">
        </el-table-column>
        <el-table-column prop="rolename" label="所属角色"> </el-table-column>

        <el-table-column prop="status" label="状态">
          <!-- <el-button type='primary' >启用</el-button> 
          <el-button type='danger' >禁用</el-button>  -->

          <template slot-scope="scope">
            <el-button type="primary" v-if="scope.row.status == 1"
              >启用</el-button
            >
            <el-button type="danger" v-else>禁用</el-button>
          </template>
        </el-table-column>

        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="bianji(scope.row.uid,page,size)"
              >编辑</el-button
            >
            <el-button type="danger" @click="del(scope.row.uid)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="you">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalSJ"
          :current-page="page"
          :page-size="size"
          @current-change="cheng"
        >
        </el-pagination>
      </div>
    </template>
  </div>
</template>
<script>
// 引入数据
import { mapGetters, mapActions } from "vuex";
import {reqMangerDel } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      list: "manger/list",
      totalSJ:'manger/totalSJ',
      page:'manger/page',
      size:'manger/size'
    }),
  },
  data() {
    return {
      /* totalSJ: null,
      page: 1,
      size: 3, */
    };
  },
  methods: {
    ...mapActions({
      requstMangerList: "manger/requstMangerList",
      requstMangerListCount:'manger/requstMangerListCount',
      requstMangerPage:'manger/requstMangerPage'
    }),
    // 改变页数
    cheng(page) {
        this.requstMangerPage(page)
        this.requstMangerList()
    },
    // 编辑显示数据
  bianji(id){
      // 1先通知父组件弹窗
      // 2传过去一个方法
      this.$emit('bianji',{id})
      
  },
  // 删除
    del(id){
      reqMangerDel({uid:id}).then(res=>{
         // 显示第一页
        this.requstMangerPage(1)
        this.requstMangerList();
        this.requstMangerListCount();
        
      })
    }
  },
  mounted() {
    this.requstMangerList()
    this.requstMangerListCount();
    
  },
  
};
</script>
<style>
.you {
  text-align: right;
}
</style>