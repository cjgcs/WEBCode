<template>
  <div class="login-container">
    <div class="login-box">

      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="">
      </div>

      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">登录名称</label>
          <input type="text" v-model="username" class="form-control ml-2" id="username" placeholder="请输入登录名称" autocomplete="off">
        </div>
        <!-- 登录密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码</label>
          <input type="password" v-model="password" class="form-control ml-2" id="password" placeholder="请输入登录密码">
        </div>
        <!-- 登录和重置按钮 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <button type="button" class="btn btn-secondary mr-2">重置</button>
          <button type="button" @click="btnLogin" class="btn btn-primary">登录</button>
        </div>
        <!-- 显示出错信息 -->
        <div class="form-group form-inline d-flex justify-content-end">
          <h6 style="color:red">{{msg}}</h6>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import HomeVue from '../../../../day07/router-demo1/src/components/Home.vue'
export default {
  name: 'MyLogin',
  data(){
    return{
      msg:"", //出错提示信息
      username:"", //用户名
      password:"",  //密码
    }
  },
  methods:{
    btnLogin(){
      //登录前验证
      // 1:验证用户名是否字母数字 3~12位 如果没成功添加错误信息
      if(!/^[a-zA-Z0-9]{3,12}$/.test(this.username)){
          this.msg="用户名格式错误,请检查"
          console.log(this.username);
          console.log(/^[a-zA-Z0-9]{3,12}$/.test(this.username));
          return
      }
      // if(/^[a-zA-Z0-9]{3,12}$/.test(this.username)){
      //     this.msg="用户名正确"
      //     return
      // }
      // 2:验证密码是否字母数字   3~12位 如果没成功添加错误信息
      if(!/^[a-zA-Z0-9]{3,12}$/.test(this.password)){
          this.msg="密码格式错误,请检查"
          return
      }
      // if(/^[a-zA-Z0-9]{3,12}$/.test(this.password)){
      //     this.msg="密码正确"
      //     return
      // }
      // 3:如果用户名==='admin'  并且 密码==='123' 成功
      if(this.username==='admin' && this.password==='123'){
        //   3.1:存储token
        localStorage.setItem("token",'Bearer xxxx')
        //   3.2:跳转后台主页   /Home
        this.$router.push('/home')
      }else{
      // 4:没成功
        //   删除token
        localStorage.removeItem('token')
        this.msg="用户名或者密码错误"
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>