<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="width">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="width">
          <el-tree
            :data="menuList"
            show-checkbox
            node-key="id"
            ref="tree"
            :props="defaultProps"
          >
          </el-tree>
        </el-form-item>

        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
            >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd"
          >添 加</el-button
        >
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { reqRoleAdd, reqRoleListOne,reqRoleEdit } from "../../../util/request";
export default {
  computed: {
    ...mapGetters({
      menuList: "menu/list",
    }),
  },
  props: ["info"],
  components: {},
  data() {
    return {
      width: "160px",
      form: {
        rolename: "",
        menus: [],
        status: 1,
      },
      defaultProps: {
        children: "children",
        label: "title",
      },
    };
  },
  methods: {
    heid() {
      this.info.isShow = false;
    },
    // 添加
    add() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reqRoleAdd(this.form).then((res) => {
        this.heid();
      });
    },
    // 修改
    update() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      reqRoleEdit(this.form).then(res=>{
        this.requestRoleList();
        this.heid();
      })
    },
    ...mapActions({
      requestMenuList: "menu/requestMenuList",
      requestRoleList: "role/requestRoleList",
    }),
    // 查看一条数据，写在这个页面是因为所有的值都在form里，比较好操作，等最后在将这个方法暴露出去
    look(id){
     reqRoleListOne({id:id}).then(res=>{
       this.form = res.data.list
      //  获取ui框架里的值需要用人家规定的方法,将值改变成数组形式并赋值
      this.form.menus =this.$refs.tree.setCheckedKeys(JSON.parse(res.data.list.menus))
      this.form.id =id
     })
  }
    
  }, 
  mounted() {
    this.requestMenuList();
  },
};
</script>
<style>
</style>