<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="上级分类" :label-width="width">
          <el-select
            v-model="form.pid"
            placeholder="--请选择--"
            
          >
            <el-option label="顶级分类" :value="0"></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in cateList"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="分类名称" :label-width="width">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图片" :label-width="width">
          <!-- 图片 -->
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="changeImg"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
import {reqClassifyAdd,reqClassifyListOne,reqClassifyEdit} from '../../../util/request'
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["info"],
  computed:{
    ...mapGetters({
      cateList:'classify/list'
    })
  },
  data() {
    return {
      width: "160px",
      form: {
        pid:'',
        catename:'',
        img:null,
        status:1
      },
      imageUrl:''
    };
  },
  methods: {
    // 重置
    empty() {
      this. imageUrl=''
      this.form = {
        pid: "",
        catename: "",
        img: null,
        status: 1,
      };
    },
    hied(){
      this.info.isShow = false
    },
    // 添加
    add() {
      reqClassifyAdd(this.form).then(res=>{
        this.hied()
        this.requestClassifyList()
      })
    },
    // 修改
    update() {
      reqClassifyEdit(this.form).then(res=>{
        this.hied()
this.requestClassifyList()
      })
    },
    // 图片
    changeImg(e){
      var file = e.raw;
      this.imageUrl = URL.createObjectURL(file);
      console.log(this.imageUrl);
      this.form.img = file

    },
    look(id){
      reqClassifyListOne({id:id}).then(res=>{
        console.log(res);
        this.form = res.data.list
        this.form.id = id
        this.imageUrl = this.$preImg+res.data.list.img
      })
      
    },
    ...mapActions({
      requestClassifyList:'classify/requestClassifyList'
    })
  },
  mounted() {
    this.requestClassifyList()
  },
};
</script>
<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>