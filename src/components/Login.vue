<template>
  <div class="login-box" @keyup.enter="login()">
      <div class="login-title">
          <h4>xxx系统</h4>
      </div>
      <div class="login-body">
          <div class="username form-group">
              <input type="text" required="" placeholder="用户名" v-model="loginInfo.username">
          </div>
          <div class="password form-group">
              <input type="password" required="" placeholder="密码" v-model="loginInfo.password">
          </div>
          <div class="form-group">
              <button class="btn btn-primary" @click="login()">登录</button>
          </div>
          <div class="error form-group" v-if="hasError">
              <p>您输入的账号信息错误！</p>
          </div>
      </div>
  </div>
</template>
<script>
    export default{
        name: 'Login',
        data(){
            return{
                loginInfo:{
                    username: '',
                    password: ''
                },
                hasError: false
            }
        },
        methods:{
            login(){
                if (this.loginInfo.username==="admin" && this.loginInfo.password==="admin") {
                    this.hasError = false;
                    this.$router.push('/home');
                } else {
                    this.hasError = true;
                }
            }
        }
    }
</script>

<style>
    .login-box {
        margin: 200px auto;
        width: 250px;
        text-align: center;
    }
    .login-box .error {
        color: #e01c1c;
    }

    .login-box input {
        color: black;
        border-radius: 3px;
    }

    .login-box input,
    .login-box button {
        width: 100%;
    }
</style>

