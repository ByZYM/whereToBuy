<template>
  <div class="register">
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
            <input v-model="userInfo.password" type="text" class="form-control" placeholder="Password" aria-describedby="basic-addon1">
          </div>
          <div class="input-group">
            <span class="input-group-addon" id="basic-addon3"><span class="glyphicon glyphicon-envelope"></span></span>
            <input v-model="userInfo.email" type="text" class="form-control" placeholder="Email" aria-describedby="basic-addon1">
          </div>
          <div>
            <button id="loginBtn" @click="doRegister" type="button" class="btn btn-primary">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      userInfo :{
        username : '',
        password : '',
        email: '',
      },
      msg: 'Welcome to Register'
    }
  },
  methods: {
    returnPrev () {
      this.$router.go(-1)
    },
    doRegister () {
      if (this.username == '') {
        alert('用户名不能为空');
        return false
      }
      if (this.password == '') {
        alert('密码名不能为空');
        return false
      }
      if (this.email == '') {
        alert('邮箱不能为空');
        return false
      }
//      this.$http.get('http://39.108.70.119:8080/user/login', {
//        params:{username:this.userInfo.username,password:this.userInfo.password,email:this.userInfo.email}}).then(function (res) {
//        if(res.body.id!=null&&res.body.id!=""){
//          window.localStorage.setItem("token",true);
//          window.localStorage.setItem("user",res.body);
//          this.$router.push({path:'/index'});
//        }else{
//          return;
//        }
//      })

      //jsonplaceholder.typicode.com/posts
      this.$http.post('http://39.108.70.119:8080/user/regist',
//      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        {name:this.userInfo.username,password:this.userInfo.password,email:this.userInfo.email}).then((res) => {
        if(res.data.success){
          alert(res.data.message);
          this.$router.push({path:'/login'});
        }else{
          alert("注册失败");
          return;
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
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
.top>div {
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
