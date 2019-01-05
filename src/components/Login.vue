<template>
  <div class="login">
    <div class="container">
      <div class="top">
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
          <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        </div>
        <div class="input-group">
          <span class="input-group-addon" id="basic-addon2"><span class="glyphicon glyphicon-lock"></span></span>
          <input type="text" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
        </div>

        <div>
          <button id="loginBtn" type="button" class="btn btn-primary">登录</button>
        </div>
        <div style="height: 1em;">
          <a href="#" style="float: left;">忘记密码</a>
          <a href="#" style="float: right;">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background:url(../assets/background.png) no-repeat;
  background-size: 100% 100%;
}
.container{
  flex:1;
  width: 90%;
}
.top{
  margin-top: 180px;
  padding: 20px 20px 60px 20px;
  height: 100%;
}
.top>div{
  margin-bottom: 40px;
}
.top>div>button{
  width: 100%;
  height:50px;
}
.input-group{
  height:50px;
}
.input-group>input{
  height:50px;
}
</style>
