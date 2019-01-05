<template>
  <div class="register">
    <div class="bgimg">
      <div class="top"></div>
      <div class="bottom">
        <button type="button" class="btn btn-default">注册</button>
        <button type="button" class="btn btn-primary">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Welcome to Register'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.bgimg {
  background:url(../assets/xiaowanzi.jpg) no-repeat;
  background-size: 100% 100%;
  flex:1;
}
</style>
