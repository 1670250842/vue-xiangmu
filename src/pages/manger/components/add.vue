<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="所属角色" :label-width="width">
          <el-select
            v-model="form.roleid"
            placeholder="--请选择--"
            @change="changePid"
          >
            <el-option v-for="item in roleList" :key="item.id" :label="item.rolename" :value="item.id"></el-option>
          </el-select>
          
        </el-form-item>

        <el-form-item label="用户名" :label-width="width">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="width">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添 加</el-button
        >
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// 添加数据
import {reqMangerAdd,reqMangerListOne,reqMangerEdit} from '../../../util/request'
import { mapGetters, mapActions } from 'vuex'
export default {
  props: ["info"],
  computed:{
    ...mapGetters({
      roleList:'role/list'
    })
  },
  data() {
    return {
     width: "160px",
      //   isShow: true,
      form: {
        roleid:0,
        username:'',
        password:'',
        status:1
      },
      page: 1,
      size: 3,
    };
  },
  methods: {
    ...mapActions({
      requstMangerList:'manger/requstMangerList',
      requestRoleList:'role/requestRoleList',
      requstMangerListCount:'manger/requstMangerListCount'
    }),
    hied(){
      this.info.isShow=false
    },
    //  添加
    add() {
      reqMangerAdd(this.form).then(res=>{
        this.hied();
        this.requstMangerListCount()
        this.requstMangerList();
        
      })
    },
    // 重置
    chongzhi(){
      this.form={
        roleid:0,
        username:'',
        password:'',
        status:1
      }
    },
    
    changePid(){

    },
    
//显示一条数据
  look(id){
    reqMangerListOne({uid:id.id}).then(res=>{
      this.form = res.data.list
      this.form.uid=id.id
    })
  },
  // 修改
  update() {
      reqMangerEdit(this.form).then(res=>{

          this.hied()
          this.requstMangerList()
      })
    },
  },
  mounted() {
      this.requestRoleList()
  },
};
</script>
<style>
</style>