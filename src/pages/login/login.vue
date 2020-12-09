<template>
  <div class="wrap">
    <div class="con">
      <h3>登录</h3>
      <div class="inp">
        <input type="text" v-model="urs.username" /> {{ urs.username }}
      </div>
      <div class="inp"><input type="password" v-model="urs.password" /></div>
      <div class="inp"><button @click="login">登录</button></div>
    </div>
  </div>
</template>
<script>
import { requrseLogin } from "../../util/request";
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      list:'urse/list'
    })
  },
  data() {
    return {
      urs: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      requestUrseList:'urse/requestUrseList'
    }),
    login() {
      requrseLogin(this.urs).then((res) => {
        if (res.data.code == 200) {
          this.requestUrseList(res.data.list);
          this.$router.push("/index/home");
        }else{
          alert(res.data.msg)
        }
      });
    },
  },
};
</script>
<style scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #563443, #303d60);
}
.con {
  width: 400px;
  height: 300px;
  background-color: #fff;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  text-align: center;
}
.con .inp {
  width: 60%;
  height: 30px;
  margin: 30px auto;
}
.inp input {
  width: 100%;
  height: 30px;
}
.inp button {
  width: 100%;
  height: 30px;
  background: #409eff;
  color: #fff;
  outline: none;
  border: none;
}
</style>