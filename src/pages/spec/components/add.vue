<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="规格名称" :label-width="width">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          label="规格属性"
          :label-width="width"
          v-for="(item, index) in arrAttr"
          :key="index"
        >
          <el-row>
            <el-col :span="16">
              <el-input v-model="item.value" autocomplete="off"></el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="primary" v-if="index == 0" @click="addAttr"
                >新增规格属性</el-button
              >
              <el-button type="danger" v-else @click="delAttr(index)">删除</el-button>
            </el-col>
          </el-row>
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

// 引入ajax
import {reqSpecAdd,reqSpecListOne,reqSpecEdit} from '../../../util/request.js'
// 引入数据循环
import { mapGetters, mapActions } from "vuex";
export default {
   computed: {
    ...mapGetters({
      list: "spec/list",
    }),
  },
  props:['info'],
 
  components: {},
 data() {
    return {
      width: "160px",
      form: {
        specsname: "",
        attrs: "",
        status: 1,
      },
      //   arrAttr[{value:'红色'}，{value:'白色'}]   arrAttr->['白色'，’红色‘]
      arrAttr: [
        {
          value: "",
        },
      ],
    };
  },
  methods: {
    // 添加
    addAttr(){
      this.arrAttr.push({value:''})
    },
    // 删除
    delAttr(index){
      this.arrAttr.splice(index,1)
    },
    // 弹窗消失
    hide(){
      this.info.isShow=false
    },
  //  刷新
     ...mapActions({
      requstSpecList: "spec/requstSpecList",
      requstSpecListCount:'spec/requstSpecListCount'
    }),
     // 添加一条数据
    add(){
      console.log(this.arrAttr.map(item=>{return item.value}));
      this.form.attrs = JSON.stringify(this.arrAttr.map(item=>{return item.value}))
      reqSpecAdd(this.form).then(res=>{
        this.hide();
        // 刷新
        this.requstSpecListCount()
        this.requstSpecList()

      })
      
    },
    
    // 获取一条数据
    look(id){
      // reqSpecListOne({id:id}).then(res=>{
      //   this.form = res.data.list
      //   this.form.id=id
      // })
      reqSpecListOne({ id: id }).then((res) => {
        this.form = res.data.list[0];  // attrs ->'['27','28']' ->  [{value:'27'},{value:'28'}]
        this.form.id = id;
        console.log(this.form)
       this.arrAttr =JSON.parse(this.form.attrs).map(item=>{return {value:item}})
      });
    },
    // 修改
    update(){
      this.form.attrs=JSON.stringify(this.arrAttr.map(item=>{return item.value})) 
      reqSpecEdit(this.form).then(res=>{
        this.hide();
        // 刷新
        this.requstSpecList()
      })
    },
    // 初始值
    empty() {
      this.form = {
        specsname: "",
        attrs: "",
        status: 1,
      };
      this.arrAttr=[
        {
          value: "",
        },
      ]
    },
  },
  mounted() {
  },
};
</script>
<style>
</style>