<template>
  <div class="login">
    <div class="return" @click="returnPrev">
      <span class="glyphicon glyphicon-chevron-left" style="color: rgb(212, 214, 223); font-size: 40px; text-shadow: rgb(0, 0, 0) 1px 1px 1px;"></span>
    </div>
    <div class="bgimg">
      <div class="container">
        <div class="top">
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
            <input v-model="userInfo.username" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon2"><span class="glyphicon glyphicon-lock"></span></span>
            <input v-model="userInfo.password" type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
          </div>

          <div>
            <button id="loginBtn" @click="doLogin" type="button" class="btn btn-primary">登录</button>
          </div>
          <div style="height: 1em;">
            <a href="#" style="float: left;">忘记密码</a>
            <a href="#" @click="goRegister" style="float: right;">注册</a>
          </div>
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
      userInfo :{
        username : '',
        password : '',
      },
      msg: 'Welcome to Login'
    }
  },
  methods: {
    goRegister () {
      this.$router.push({path: 'Register'})
    },
    returnPrev () {
      this.$router.go(-1)
    },
    goMainPage () {
      this.$router.push({path: 'MainPage'})
    },
    doLogin () {
      if (this.username == '') {
        alert('用户名不能为空');
        return false
      }
      if (this.password == '') {
        alert('密码名不能为空');
        return false
      }
//      this.$http.get('http://39.108.70.119:8080/seller/login', JSON.stringify(this.userInfo)).then(function (res) {
      this.$http.get('http://39.108.70.119:8080/user/login', {params:{username:this.userInfo.username,password:this.userInfo.password}}).then(function (res) {
//        alert(1)
        if(res.body.id!=null&&res.body.id!=""){
//          alert(12)
          window.localStorage.setItem("token",true);
          window.localStorage.setItem("user",res.body);
//          alert(window.localStorage.getItem("token"));
//          alert(this.$route.query.redirect);
//          this.$router.push(this.router.query.redirect);
          this.$router.push({path:'/mainPage'});
        }else{
          alert("请先去邮箱激活或请确认密码")
          return;
        }
//        alert(window.localStorage.getItem("token"));
      })

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
}
.bgimg {
  background:url(../assets/background.png) no-repeat;
  background-size: 100% 100%;
  flex:1;
}
.container{
  width: 80%;
}
.top{
  margin-top: 240px;
  padding: 20px 20px 60px 20px;
  height: 100%;
}
.top>div{
  margin-bottom: 60px;
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
.return{
  position: absolute;
  left: 0;
  top:0;
}
</style>
